# Bunny Storage → R2 backup

[`s3_backup.ts`](./s3_backup.ts) takes a daily snapshot of our Bunny storage zone into a Cloudflare R2 bucket. It runs every day at 08:00 UTC through the [`s3-backup.yml`](../.github/workflows/s3-backup.yml) workflow and can also be run by hand.

Each snapshot is a **complete, standalone copy** of the storage zone as it was that day. To restore, you pick a date and take the files from that folder. You don't need to replay changes or combine snapshots.

## Layout in R2

```text
snapshots/
  2026-10-07/            ← full copy of the storage zone on that day
    images/team/photo.jpg
    ...
  2026-10-07.json        ← written only when the snapshot finished without errors
  2026-10-08/
  2026-10-08.json
```

A snapshot only counts as complete once its `.json` marker exists. The marker records the object count, total size, and how many files were copied from the previous snapshot or downloaded from Bunny. A folder without a marker is a run that failed or is still in progress.

## How a run works

1. List every file in the Bunny storage zone. If the zone is empty, stop with an error so an empty snapshot can't push out good ones (`--allow-empty` overrides this).
2. Find the most recent complete snapshot in R2.
3. For each file on Bunny:
   - **Unchanged since the previous snapshot:** copy it from the previous snapshot to today's folder, inside R2. No data comes from Bunny.
   - **New or changed:** download it from Bunny into today's folder.
4. Write `snapshots/<today>.json` if every file succeeded.
5. Delete snapshots that fall outside the retention policy.

Bunny is only ever read, never written. Use the storage zone's **read-only password**.

## Updated files

A file counts as changed if its size differs from the previous snapshot's copy, or if Bunny's last-modified time is later than when that copy was written to R2. Changed files are downloaded fresh into today's snapshot.

**Older snapshots are never modified.** The previous version of an edited file stays in every snapshot taken before the edit. To get an older version back, open a snapshot from before the change.

## Deleted files

A file deleted from Bunny simply isn't in the next snapshot. It stays in every earlier snapshot until those snapshots are pruned:

- With the defaults, a deleted file can be recovered from the daily snapshots for 30 days after the deletion.
- After that, the monthly snapshots still hold it for up to 12 months, as long as it existed on the day of a monthly snapshot (the last snapshot of each month).

Deleting everything on Bunny doesn't create an empty snapshot: the run refuses and fails instead (see step 1 above).

## Retention

After each run, the script keeps:

- **Daily:** the `KEEP_DAILY` (30) most recent complete snapshots.
- **Monthly:** the latest complete snapshot of each of the `KEEP_MONTHLY` (12) most recent months.

Everything else is deleted, including incomplete snapshots from earlier days. Today's snapshot is never pruned, even if it's incomplete, so a failed run can be resumed.

Retention counts **complete snapshots**, not calendar days. If the backup fails for a week, nothing is pruned during that week, so a broken backup can't age out the good snapshots.

On 2026-10-08, with a year of daily snapshots, the 40 kept would be:

```text
monthly: 2025-11-30, 2025-12-31, 2026-01-31 … 2026-08-31     (10)
daily:   2026-09-09 … 2026-10-08                             (30, includes Sep 30 and today)
```

## Failures and resuming

- Bunny limits S3 requests to 500 per second and replies with `SlowDown` when that's exceeded. Throttled and transient errors are retried up to 6 times with backoff.
- A file that still fails is logged as `FAILED <key>`. The run carries on but doesn't write the completion marker, and it exits with code 1, which marks the workflow run as failed.
- Re-running on the same day **resumes** today's snapshot and only copies files that are missing.
- If the snapshot is never completed, the next day's run copies from the last _complete_ snapshot, and the incomplete folder is pruned.

## Running it

The script reads its settings from environment variables, all listed in [`.env.example`](../.env.example). It doesn't load `.env` by itself, so pass them in from Doppler or with Node's `--env-file` flag:

```sh
# show what would be copied, downloaded and pruned
doppler run -- pnpm scripts:s3_backup --dry-run
pnpm tsx --env-file=.env scripts/s3_backup.ts --dry-run

# take today's snapshot
doppler run -- pnpm scripts:s3_backup
```

| Variable                                    | Description                                                     |
| ------------------------------------------- | --------------------------------------------------------------- |
| `BUNNY_ENDPOINT`                            | Bunny S3 endpoint, `https://<region>-s3.storage.bunnycdn.com`   |
| `BUNNY_BUCKET`                              | Storage zone name                                               |
| `BUNNY_ACCESS_KEY_ID`                       | Storage zone name (Bunny uses it as the key ID)                 |
| `BUNNY_SECRET_ACCESS_KEY`                   | Storage zone **read-only** password                             |
| `BUNNY_REGION`                              | Bunny region code, e.g. `la`, `de`, `ny`                        |
| `R2_ENDPOINT`                               | `https://<account_id>.r2.cloudflarestorage.com`                 |
| `R2_BUCKET`                                 | R2 bucket name                                                  |
| `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` | R2 API token with **Object Read & Write** on the bucket         |
| `R2_REGION`                                 | `auto`                                                          |
| `SNAPSHOT_PREFIX`                           | Folder for snapshots in R2 (default `snapshots/`)               |
| `KEEP_DAILY`                                | Most recent snapshots to keep (default 30)                      |
| `KEEP_MONTHLY`                              | Months to keep the last snapshot of each month for (default 12) |
| `CONCURRENCY`                               | Parallel transfers (default 8)                                  |

### GitHub Actions

Add each variable above as a repository secret under **Settings → Secrets and variables → Actions**. The workflow can also be started from the Actions tab, with a **dry run** checkbox.

## Restoring

- **A few files:** download them from `snapshots/<date>/` in the R2 dashboard and upload them to Bunny.
- **Everything:** copy one snapshot folder back to Bunny with the storage zone's full-access password, for example with `rclone`:

  ```sh
  rclone copy r2:<bucket>/snapshots/2026-10-08/ bunny:<storage-zone>/
  ```

  Use `rclone sync` instead of `copy` to also remove files that weren't in the snapshot. Check the snapshot's `.json` marker first to make sure it's complete.
