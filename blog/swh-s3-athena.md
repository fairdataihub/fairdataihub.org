---
title: Retrieving Data from the Software Heritage S3 Graph Dataset Using Amazon Athena
authors:
  - 'AydanGasimova'
date: '2026-02-25'
category: 'Guide'
heroImage: 'https://images.unsplash.com/photo-1743183988574-e8b4d2e5830a?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
imageAuthor: 'Marco Palumbo'
imageAuthorLink: 'https://unsplash.com/@sapporo2025'
subtitle: 'Retrieving Data from the Software Heritage S3 Graph Dataset Using Amazon Athena.'
tags:
  - FAIR data
  - public data archive
  - Software Heritage
  - AWS
  - AWS S3 bucket
  - Athena api
  - Parquet
---

Software is a critical component of modern scientific and technological progress, encapsulating both practical expertise and accumulated knowledge. Preserving software is therefore essential not only to safeguard innovation but also to ensure continued access to the tools and methods that underpin research and discovery. Achieving this requires coordinated community efforts. Software Heritage is one initiative that provides common foundations for heritage preservation, science, and industry.

In this blog, we perform a step-by-step traversal of the Software Heritage Graph Dataset using Amazon Athena to produce a filtered, deduplicated set of GitHub README content hashes. We then walk through retrieving the selected content into a local AWS S3 bucket within a controlled environment. Working with an archive at this scale is inherently challenging, but a structured traversal combined with practical query orchestration enables a systematic and reproducible workflow. Finally, a brief cost breakdown for each stage of the pipeline will be provided.

## Mission of Software Heritage

For more than a decade, the Software Heritage initiative has led one of the most comprehensive efforts to archive and preserve publicly available source code worldwide. Its mission is to systematically collect, safeguard, and provide long-term access to the global software commons, ensuring that research software and open-source contributions remain discoverable, citable, and reusable over time. Today, the archive contains billions of source files spanning millions of repositories across diverse ecosystems, captured as a fully deduplicated Merkle DAG and stored in Apache Parquet format through public S3 buckets, forming a structured and queryable archive measured in terabytes. Beyond its scale, the archive’s strength lies in its graph-based structure: rather than traditional repository folders, Software Heritage models software as interconnected tables where every object is hash-addressed and deduplicated. While this architecture enables reproducibility at scale, retrieving specific data requires understanding the graph traversal path, as described in the following paragraphs.

## Prerequisites
Before we get started, you'll need to make sure you have access to the following:
  - AWS account with permissions to use Amazon Athena and S3
  - Access to the public Software Heritage Graph Dataset stored in S3
  - An S3 bucket you control to store intermediate and final query outputs

### To Setup AWS S3 bucket

1. Create (or confirm) an S3 bucket for Athena outputs

  ```bash
  aws s3 mb s3://<your-bucket-name> --region us-east-1
  ```
2. Verify that your IAM role or user has the required S3 permissions for Athena result storage:

```bash
s3:PutObject
s3:GetObject
s3:ListBucket
```

### Step 1. Accessing the Software Heritage Graph
We began by defining an external table in Amazon Athena pointing to the Software Heritage Graph snapshot dated 2025-10-08, stored as Parquet files on S3, in order to query the origin data.
```sql
CREATE EXTERNAL TABLE IF NOT EXISTS swh_graph_2025_10_08.origin (
    id STRING,
    url STRING
)
STORED AS PARQUET
LOCATION 's3://softwareheritage/graph/2025-10-08/origin/';
```

Once the external tables were defined in Athena, our initial objective was to retrieve repository URLs, visit dates, and SHA-1 identifiers. To achieve this, it was necessary to understand the structure of the Software Heritage (SWH) graph schema, a simplified representation of which is shown below:
```text
SOFTWARE HERITAGE GRAPH DATASET SCHEMA

📋 origin (origin record)
    │
    │─────────►🧩URL
    │
    ├──► 📋 origin_visit
    │
    │    🔗 snapshot_id
    ▼
📋 origin_visit_status (visit status)
    │
    │─────────►🧩visit_date
    │
    │    🔗 snapshot_id
    ▼
📋 snapshot (repository snapshot)
    │
    ▼
📋 snapshot_branch (branches)
    │
    ├──► 📋 revision (commit)
    │         │
    │         ├──► 📋 directory (root directory)
    │         │         │
    │         │         ▼
    │         │    📋 directory_entry
    │         │         │
    │         │         ├──► 📋 content (file content)
    │         │         │
    │         │         │─────────►🧩SHA1
    │         │         │
    │         │         └──► 📋 directory (subdirectory)
    │         │
    │         └──► 📋 revision_history (parent commits)
    │
    └──► 📋 release (release tag)
              │
              └──► 📋 revision or directory

─────────────────────────────────────────────

STANDALONE TABLES

    📋 person (author/committer metadata)
    📋 skipped_content (non-archived content)

─────────────────────────────────────────────

📋 Table    🔗 Foreign key    ──► Relationship 🧩 Selected attributes from tables
```

As illustrated, these elements reside in separate tables. We therefore attempted to construct a single join query to retrieve them; however, the enormous size of the underlying tables, combined with the unpartitioned nature of the SWH Graph dataset, caused this unified query to exceed Athena’s execution limits.

```sql
CREATE TABLE default.url_to_content AS
SELECT
    o.url,
    ovs.date AS visit_date,
    ovs.snapshot AS snapshot_id,
    sb.name AS branch_name,
    sb.target AS revision_id,
    r.directory AS directory_id,
    de.name AS file_name,
    de.target AS content_sha1_git,
    c.sha1 AS content_sha1
FROM swh_graph_2025_10_08.origin o
JOIN swh_graph_2025_10_08.origin_visit_status ovs
    ON o.url = ovs.origin
JOIN swh_graph_2025_10_08.snapshot_branch sb
    ON ovs.snapshot = sb.snapshot_id
JOIN swh_graph_2025_10_08.revision r
    ON sb.target = r.id
JOIN swh_graph_2025_10_08.directory_entry de
    ON r.directory = de.directory_id
JOIN swh_graph_2025_10_08.content c
    ON de.target = c.sha1_git
WHERE sb.target_type = 'revision'
  AND de.type = 'file';
```
In addition to executing the complete join query in a single run, we also attempted to download and store the relevant SWH tables locally in one step. However, this approach likewise resulted in API exhaustion errors. On Athena, joining multiple large unpartitioned tables greatly increases scan and shuffle costs, making a single full join impractical. More detailed information about the structure and design of the SWH dataset can be found in the corresponding Software Heritage article.

Consequently, in order to obtain the SHA-1 identifiers, we adopted a stepwise strategy: each table was saved locally as an intermediate table, and the joins were performed incrementally.


### Step 2. Extracting Repository URLs and Visit Data

We began with the origin table to retrieve all repository URLs, obtaining approximately 400 million URLs. We therefore staged intermediate results to progressively narrow the working set. Subsequently, from the origin_visit_status table, we extracted approximately 3 billion records corresponding to repository visits, each representing a crawl attempt and its associated snapshot.

```sql
CREATE TABLE default.url_and_date AS
SELECT
    o.url,
    ovs.date AS visit_date
FROM swh_graph_2025_10_08.origin o
JOIN swh_graph_2025_10_08.origin_visit_status ovs
    ON o.url = ovs.origin;
```
Using these dates, we then retrieved the snapshot identifiers:
```sql
CREATE TABLE default.url_date_snapshot_2a AS
SELECT
   u.url,
   u.visit_date,
   ovs.snapshot as snapshot_id
FROM default.url_and_date u
JOIN swh_graph_2025_10_08.origin_visit_status ovs
   ON u.url = ovs.origin
   AND u.visit_date = ovs.date
WHERE ovs.snapshot IS NOT NULL;
```

### Step 3. Linking Snapshots to Revisions and Directories

After obtaining the snapshot IDs, attempting to save the snapshot_branch table locally exceeded Athena’s service limits. Therefore, we constrained the query to retrieve only the main and master branches, which in most repositories correspond to the principal development lines. This reduced the data volume while preserving the core revision history relevant to our analysis, although repositories whose primary development branch uses a different name may be under-represented.

```sql
CREATE TABLE default.snapshot_branch_filtered AS
SELECT
    snapshot_id,
    target AS revision_id
FROM swh_graph_2025_10_08.snapshot_branch
WHERE target_type = 'revision'
  AND (
      name = CAST('refs/heads/main' AS VARBINARY)
      OR name = CAST('refs/heads/master' AS VARBINARY)
  );
```
After filtering, we then obtained snapshot branches, and revision tables.

```sql
CREATE TABLE default.url_date_branch_2b AS
SELECT
   u.url,
   u.visit_date,
   sbf.revision_id
FROM default.url_date_snapshot_2a u
JOIN default.snapshot_branch_filtered sbf
   ON u.snapshot_id = sbf.snapshot_id;


CREATE TABLE default.url_date_rev_2c AS
SELECT
   b.url,
   b.visit_date,
   r.directory as directory_id
FROM default.url_date_branch_2b b
JOIN swh_graph_2025_10_08.revision r
   ON b.revision_id = r.id;
```

### Step 4: Extracting README Entries
Once we obtained the necessary foreign key to proceed, we moved to one of the largest tables in the Software Heritage database. This was the most computationally intensive step, scanning approximately 24 TB of data. To avoid timeouts and resource limit errors, we restricted our query to retrieve only four specific README file types—README.md, readme.md, README, and README.txt—by matching their corresponding hexadecimal filename encodings.

```sql
CREATE TABLE default.directory_entry_readme AS
SELECT
    directory_id,
    target AS content_sha1_git
FROM swh_graph_2025_10_08.directory_entry
WHERE type = 'file'
  AND name IN (
      X'524541444D452E6D64',
      X'726561646D652E6D64',
      X'524541444D45',
      X'524541444D452E747874'
  );
```

### Step 5. Resolving Git SHA-1 to Canonical SHA-1
Once we retrieved the directory-level sha1_git values, we attempted to perform the final join to obtain the canonical sha1 identifiers of the README files together with the associated URL and visit date information. However, joining millions of rows directly with the content table once again resulted in resource exhaustion errors.

```sql
CREATE TABLE default.url_content_attempt AS
SELECT
    d.url,
    d.visit_date,
    d.content_sha1_git,
    ct.sha1,
    ct.status
FROM default.url_date_directory_sha_3b d
JOIN swh_graph_2025_10_08.content ct
    ON d.content_sha1_git = ct.sha1_git;
```

To address this issue, we decomposed the query into three incremental steps. First, we extracted the distinct content_sha1_git values from the intermediate result set. Next, we joined this reduced set against the content table to retrieve only the matching sha1_git–sha1 pairs. Finally, we performed the join between the original URL/date dataset and the filtered content results.

By materializing intermediate tables and reducing the join cardinality at each stage, we were able to avoid exhaustion errors and complete the retrieval successfully.


```sql
CREATE TABLE default.filtered_directory_sha1 AS
SELECT DISTINCT content_sha1_git
FROM default.url_date_directory_sha_3b;
CREATE TABLE default.content_matched AS
SELECT c.sha1_git, c.sha1
FROM swh_graph_2025_10_08.content c
JOIN default.filtered_directory_sha1 f
   ON c.sha1_git = f.content_sha1_git;


CREATE TABLE default.url_content_final AS
SELECT d.url, d.visit_date, d.content_sha1_git, cm.sha1
FROM default.url_date_directory_sha_3b d
JOIN default.content_matched cm
   ON d.content_sha1_git = cm.sha1_git;


CREATE TABLE default.filtered_github_total_table AS
SELECT url, content_sha1_git, sha1, visit_date
FROM url_content_final
WHERE url LIKE 'https://github.com/%';
```
By following the steps above, we retrieved over 450 million GitHub repository records and stored their URLs, visit dates, and SHA-1 identifiers in a local table.

### Step 6. Deduplicating Repositories

We then filtered the URLs so that each appeared only once, retaining a single record per repository. The most recent visit date was selected for each URL, with MAX_BY ensuring the associated content hash corresponded to that latest snapshot.
```sql
CREATE TABLE default.filtered_github_unique AS
SELECT
   url,
   MAX_BY(content_sha1_git, visit_date) AS content_sha1_git,
   MAX(visit_date) AS visit_date
FROM default.filtered_github_total_table
GROUP BY url;
```
As a result, the dataset was reduced to approximately 225 million rows. After excluding records with empty sha1_git values, the final dataset contained approximately 223 million rows.

## Computational Cost Breakdown Across Processing Steps
Due to the large scale of the Software Heritage (SWH) dataset, processing can be costly. In this study, the approximate cost breakdown for each step is presented in the table below.
| Step | Stage Description | Data Scanned | Cost (USD) |
|------|-------------------|--------------|------------|
| 1 | Accessing SWH via Athena | Minimal | Minimal |
| 2 | Extracting URLs and Visit Data | ~210 GB | ~$2.44 |
| 3 | Linking Snapshots to Revisions | ~661 GB | ~$5.38 |
| 4 | Extracting README Entries | ~26 TB | ~$124.10 |
| 5 | Resolving Git SHA-1 to Canonical SHA-1 | ~1.4 TB | ~$13.10 |
| 6 | GitHub Filtering and Deduplication | Minimal | Minimal |

Although working with materialized local tables improved performance, operations involving the largest SWH tables remained expensive. In particular, Step 4 was the most demanding stage, as the directory_entry table is among the largest in the dataset, making it the most computationally intensive and costly component of the workflow.

## Results
After navigating the dataset through a sequence of queries, where each query gradually revealed the next segment of the route, we arrived at the intended result: a consolidated table containing 223 million records of unique GitHub URLs, their corresponding visit dates, the associated sha1_git revision identifiers, and the SHA-1 hashes of their README contents. An example of the result is shown below:

| URL | SHA1 codes of README files | Date |
|-----|-------------|------|
| https://github.com/nygim/pyfairdatatools | 0eca1c249f00956b9264403e9ecd8fb90ac5b428 | 2025-08-30 16:04:36 |
| https://github.com/fairdataihub/fairshare |  8964359b0597187a29028955ecc3845dfcf86173 | 2025-07-29 12:26:33 |
| https://github.com/megasanjay/fairdataihub.org |  458585c7c8b579e4547d445cb49d496b1be1ba19 | 2023-08-19 21:50:20 |
| https://github.com/fairdataihub/SODA-for-SPARC-Docs  | 47acbdb4c775d1bb5bbd127fde9287211eee504c | 2025-10-06 11:55:02 |

