---
title: 'Making FAIR Practical: Automated Dataset Assessment with F-UJI'
authors:
  - 'AydanGasimova'
date: '2025-12-05'
category: 'Product'
heroImage: 'https://images.unsplash.com/photo-1743183988574-e8b4d2e5830a?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
imageAuthor: 'Marco Palumbo'
imageAuthorLink: 'https://unsplash.com/@sapporo2025'
subtitle: 'Automated FAIR data assessment for better metadata, discoverability, and reusable research outputs.'
tags:
  - FAIR data
  - FAIRhub
  - FAIR
  - Metadata
  - Provenance
  - Schema.org
  - F-UJI
---

## FAIR in Theory, Difficult in Practice
Modern research workflows depend on datasets that are not only available, but also precisely described, machine-readable, and reusable. The FAIR principles—Findable, Accessible, Interoperable, and Reusable provide that structure, but implementing them consistently is difficult. Metadata drifts, documentation changes, and repository requirements evolve.
This makes manual FAIR validation unreliable and expensive to maintain across dataset versions.

## Why Automated FAIR Assessment?

Manual FAIR review almost always breaks down at scale. Evaluating a dataset by hand means scanning the landing page, checking for a DOI, confirming license visibility, digging through JSON-LD, and guessing whether the metadata covers provenance, distributions, or standardized schemas. Different reviewers make different assumptions, and results are rarely repeatable.

Automated assessment eliminates this ambiguity. With a single query, F-UJI evaluates a dataset against a defined set of FAIR criteria and returns:

- deterministic, machine-actionable results
- transparent reasoning for each metric
- standardized scoring
- outputs that can be integrated directly into QA pipelines or release workflows

Automation turns FAIR compliance from a subjective review into a testable, version-controlled property of the dataset.

## F-UJI as a FAIR Evaluation Tool

F-UJI is an automated evaluator designed to test whether a dataset’s metadata satisfies the FAIR principles. Instead of manually inspecting landing pages or guessing whether provenance is embedded correctly, F-UJI analyzes the metadata directly from authoritative sources, including:

- DataCite APIs
- schema.org JSON-LD on the landing page
- DCAT/Dublin Core fields
- linked provenance resources

You supply a DOI; F-UJI returns a structured report with:

- FAIR scores per metric
- explanations of what succeeded or failed
- machine-readable JSON output
- clear guidance on how to improve missing elements


### How F-UJI Works in Practice

A typical workflow looks like this:

1. Submit the dataset DOI to the F-UJI API
   Example: [https://w3id.org/fuji/api/v1/assess?doi=10.xxxx/xxxx](https://w3id.org/fuji/api/v1/assess?doi=10.xxxx/xxxx)

2. F-UJI retrieves metadata from:
   - the DOI landing page
   - embedded schema.org JSON-LD
   - DataCite metadata APIs
   - linked provenance or distribution resources

3. It evaluates FAIR metrics, including:

   **Findable**
   - FsF-F1-01M — globally unique identifier present
   - FsF-F1-02MD — persistent identifier assigned
   - FsF-F2-01M — descriptive core elements available
   - FsF-F3-01M — metadata includes the dataset identifier
   - FsF-F4-01M — metadata indexable by search engines

   **Accessible**
   - FsF-A1-01M — access level and access conditions provided
   - FsF-A1-02MD — metadata and data retrievable by identifier
   - FsF-A1-01MD — standardized communication protocol used
   - FsF-A1.2-01MD — authentication/authorization protocol supported

   **Interoperable**
   - FsF-I1-01M — metadata uses a formal knowledge representation language
   - FsF-I2-01M — metadata uses registered semantic resources
   - FsF-I3-01M — metadata includes qualified references

   **Reusable**
   - FsF-R1-01M — metadata specifies the content of the data
   - FsF-R1.1-01M — license information included
   - FsF-R1.2-01M — machine-readable provenance provided
   - FsF-R1.3-01M — community-recommended standards followed
   - FsF-R1.3-02D — data available in recommended formats

4. F-UJI returns both a human-readable report and a JSON document summarizing the results.
   A simplified excerpt looks like:

```json
{
  "metric_identifier": "FsF-R1.2-01M",
  "metric_name": "Provenance Information",
  "score": 1,
  "maturity": 2,
  "evidence": [
    "prov:wasDerivedFrom detected",
    "prov:wasGeneratedBy detected"
  ]
}
```
These results can be integrated into release workflows, documentation pipelines, or internal QA checks. Because each metric is deterministic and machine-actionable, running F-UJI on every dataset version ensures that FAIR compliance is maintained consistently rather than checked manually.

## Our Case: Improving FAIR Scores Through AI-READI Metadata Optimization

When we first ran F-UJI on our AI-READI dataset [DOI](https://doi.org/10.60775/fairhub.3), several metrics in the Findable (F), Interoperable (I), and Reusable (R) categories showed incomplete or missing metadata. These appeared as yellow markers in the report.

### Failing Checks Before Fixes

The initial F-UJI assessment surfaced several incomplete or missing metadata elements, primarily affecting the Findable, Interoperable, and Reusable categories:

- **FsF-F4-01M** — Metadata was not indexable by search engines (insufficient or incomplete JSON-LD)
- **FsF-I2-01M** — Semantic resources not properly declared in `@context`
- **FsF-R1-01M** — Metadata did not fully specify the content and characteristics of the dataset
- **FsF-R1.2-01M** — Machine-readable provenance information missing or incomplete
- **FsF-R1.3-02D** — Data not exposed in a community-recommended format (distribution metadata incomplete)

### What We Changed

To resolve the failing F-UJI checks, we enriched the schema.org JSON-LD embedded on the dataset landing page. Instead of patching each metric in isolation, we added a single, coherent metadata block that simultaneously improved findability, interoperability, and reuse.

#### Enriched JSON-LD distribution metadata (FsF-F4-01M, FsF-R1-01M, FsF-R1.3-02D)

We introduced a structured `distribution` section using the `DataDownload` type so that both search engines and automated evaluators can reliably parse how the data can be accessed and reused.

Minimal structural example:

```json
{
  "distribution": [
    {
      "name": "...",
      "@type": "DataDownload",
      "conditionsOfAccess": "...",
      "contentSize": "...",
      "contentUrl": "...",
      "description": "...",
      "encodingFormat": ["..."],
      "license": "..."
    }
  ]
}
```

This single block carries several FAIR-relevant signals at once:

- indexable metadata for search engines (supporting **FsF-F4-01M**)
- a clear description of what the dataset contains and how large it is (supporting **FsF-R1-01M**)
- explicit encoding formats and community-recommended file types (e.g., DICOM), which contributes to **FsF-R1.3-02D**

#### Semantic Vocabularies and Provenance (FsF‑I2‑01M & FsF‑R1.2‑01M)

Both interoperability and provenance failures were resolved through a **single enriched JSON‑LD injection** inside the Vue `script` block.

Example structural outline of the additions:
```json
{
  "@context": [
    "https://schema.org",
    {
      "pav": "...",
      "prov": "..."
    }
  ],
  "@type": "Dataset",
  "prov:wasDerivedFrom": {
    "@id": "...",
    "@type": "prov:Entity"
  },
  "prov:wasGeneratedBy": {
    "@type": "prov:Activity"
  }
}
```

The JSON‑LD block targets major structural fields:

- The `@context` now declares standard vocabularies used across research metadata ecosystems, including schema.org, PROV‑O, and PAV. Declaring these namespaces ensures that all metadata terms map to registered, machine‑interpretable vocabularies.
- The metadata now exposes PROV‑O properties that describe:
  - what the dataset was derived from
  - the activity responsible for generating it

All of these updates were implemented inside the Vue application by injecting an enriched ```<script type="application/ld+json">``` block into the landing page, so the FAIR-aligned metadata is always rendered with the UI.


## Results: From Partial to Full Pass

After updating the JSON-LD, we reran F-UJI on the dataset. All previously failing metrics moved to full passes:

- **FsF-F4-01M** – metadata is now fully indexable and machine-readable through improved JSON-LD.
- **FsF-I2-01M** – registered semantic resources (schema.org, PROV-O, PAV) are declared in `@context`.
- **FsF-R1-01M** – metadata clearly specifies the content and characteristics of the dataset.
- **FsF-R1.2-01M** – machine-readable provenance information is exposed via PROV-O.
- **FsF-R1.3-02D** – data is exposed in community-recommended formats (e.g., DICOM) and surfaced through the `distribution` block.

Together, these changes strengthened the dataset’s FAIR profile and ensured that the landing page now serves a complete, machine-interpretable metadata record that can be validated automatically on every release.

## Acknowledgements

Some of the content in this post was refined with the help of ChatGPT’s writing tools.