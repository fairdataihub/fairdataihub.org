/**
 * Take a dated snapshot of one S3-compatible bucket in another
 * (e.g. Bunny Storage -> Cloudflare R2), then prune old snapshots.
 *
 * - Each run writes a full copy to `<SNAPSHOT_PREFIX><YYYY-MM-DD>/`.
 * - Files unchanged since the previous snapshot are copied server-side inside
 *   the destination; only new or changed files are downloaded from the source.
 * - A snapshot is marked complete by `<SNAPSHOT_PREFIX><YYYY-MM-DD>.json`.
 * - Keeps the newest KEEP_DAILY complete snapshots, plus the newest snapshot
 *   of each of the last KEEP_MONTHLY months. Everything else is deleted.
 *
 * Usage:
 *   pnpm scripts:s3_backup [--dry-run] [--allow-empty]
 *
 * Env (see .env.example):
 *   BUNNY_ENDPOINT, BUNNY_BUCKET, BUNNY_ACCESS_KEY_ID, BUNNY_SECRET_ACCESS_KEY, BUNNY_REGION?
 *   R2_ENDPOINT, R2_BUCKET, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_REGION?
 *   SNAPSHOT_PREFIX?  where snapshots live in the destination (default "snapshots/")
 *   KEEP_DAILY?       number of most recent snapshots to keep (default 30)
 *   KEEP_MONTHLY?     number of months to keep a monthly snapshot for (default 12)
 *   CONCURRENCY?      parallel transfers (default 8)
 */
import {
  CopyObjectCommand,
  DeleteObjectsCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import type { Readable } from 'stream';

interface ObjectInfo {
  size: number;
  lastModified: Date;
}

const DRY_RUN = process.argv.includes(`--dry-run`);
const ALLOW_EMPTY = process.argv.includes(`--allow-empty`);

const SNAPSHOT_PREFIX = process.env.SNAPSHOT_PREFIX || `snapshots/`;
const KEEP_DAILY = Number(process.env.KEEP_DAILY) || 30;
const KEEP_MONTHLY = Number(process.env.KEEP_MONTHLY) || 12;
const CONCURRENCY = Number(process.env.CONCURRENCY) || 8;

// CopyObject is limited to 5 GB; larger files are downloaded from the source
const MAX_COPY_SIZE = 5 * 1024 ** 3;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env var ${name}`);
  }
  return value;
}

function createClient(prefix: `BUNNY` | `R2`): S3Client {
  return new S3Client({
    endpoint: requireEnv(`${prefix}_ENDPOINT`),
    region: process.env[`${prefix}_REGION`] || `auto`,
    forcePathStyle: true,
    // Bunny throttles at 500 RPS with 503 SlowDown; back off and retry
    retryMode: `adaptive`,
    maxAttempts: 6,
    // Only send/validate checksums when an operation requires them
    requestChecksumCalculation: `WHEN_REQUIRED`,
    responseChecksumValidation: `WHEN_REQUIRED`,
    credentials: {
      accessKeyId: requireEnv(`${prefix}_ACCESS_KEY_ID`),
      secretAccessKey: requireEnv(`${prefix}_SECRET_ACCESS_KEY`),
    },
  });
}

/** List objects under a prefix, keyed by path relative to that prefix. */
async function listObjects(
  client: S3Client,
  bucket: string,
  prefix = ``,
): Promise<Map<string, ObjectInfo>> {
  const objects = new Map<string, ObjectInfo>();
  let token: string | undefined;

  do {
    const res = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: prefix || undefined,
        ContinuationToken: token,
      }),
    );
    for (const obj of res.Contents ?? []) {
      if (!obj.Key || obj.Key.endsWith(`/`)) continue;
      objects.set(obj.Key.slice(prefix.length), {
        size: obj.Size ?? 0,
        lastModified: obj.LastModified ?? new Date(0),
      });
    }
    token = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (token);

  return objects;
}

/** Find snapshot dates in the destination and which of them completed. */
async function listSnapshots(client: S3Client, bucket: string) {
  const all = new Set<string>();
  const complete = new Set<string>();
  let token: string | undefined;

  do {
    const res = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: SNAPSHOT_PREFIX,
        Delimiter: `/`,
        ContinuationToken: token,
      }),
    );
    for (const { Prefix } of res.CommonPrefixes ?? []) {
      const date = Prefix?.slice(SNAPSHOT_PREFIX.length, -1) ?? ``;
      if (DATE_RE.test(date)) all.add(date);
    }
    for (const { Key } of res.Contents ?? []) {
      const date = Key?.slice(SNAPSHOT_PREFIX.length, -`.json`.length) ?? ``;
      if (Key?.endsWith(`.json`) && DATE_RE.test(date)) {
        all.add(date);
        complete.add(date);
      }
    }
    token = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (token);

  return { all: [...all].sort(), complete: [...complete].sort() };
}

/** Newest KEEP_DAILY snapshots + newest snapshot of each of the last KEEP_MONTHLY months. */
function selectSnapshotsToKeep(complete: string[]): Set<string> {
  const newestFirst = [...complete].sort().reverse();
  const keep = new Set(newestFirst.slice(0, KEEP_DAILY));
  const months = new Set<string>();

  for (const date of newestFirst) {
    const month = date.slice(0, 7);
    if (months.has(month)) continue;
    if (months.size >= KEEP_MONTHLY) break;
    months.add(month);
    keep.add(date);
  }

  return keep;
}

async function deleteKeys(
  client: S3Client,
  bucket: string,
  keys: string[],
): Promise<void> {
  for (let i = 0; i < keys.length; i += 1000) {
    const res = await client.send(
      new DeleteObjectsCommand({
        Bucket: bucket,
        Delete: {
          Objects: keys.slice(i, i + 1000).map((Key) => ({ Key })),
          Quiet: true,
        },
      }),
    );
    if (res.Errors?.length) {
      throw new Error(
        `Failed to delete ${res.Errors.length} objects, e.g. ${res.Errors[0].Key}: ${res.Errors[0].Message}`,
      );
    }
  }
}

function copySource(bucket: string, key: string): string {
  return `${bucket}/${encodeURIComponent(key).replace(/%2F/g, `/`)}`;
}

async function runPool<T>(
  items: T[],
  limit: number,
  worker: (item: T) => Promise<void>,
): Promise<void> {
  let index = 0;
  const runners = Array.from(
    { length: Math.min(limit, items.length) },
    async () => {
      while (index < items.length) {
        await worker(items[index++]);
      }
    },
  );
  await Promise.all(runners);
}

function formatBytes(bytes: number): string {
  const units = [`B`, `KB`, `MB`, `GB`, `TB`];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  return `${bytes.toFixed(1)} ${units[i]}`;
}

async function main() {
  const src = createClient(`BUNNY`);
  const dst = createClient(`R2`);
  const srcBucket = requireEnv(`BUNNY_BUCKET`);
  const dstBucket = requireEnv(`R2_BUCKET`);

  const today = new Date().toISOString().slice(0, 10);
  const target = `${SNAPSHOT_PREFIX}${today}/`;

  console.log(`Listing source ${srcBucket}...`);
  const srcObjects = await listObjects(src, srcBucket);
  if (srcObjects.size === 0 && !ALLOW_EMPTY) {
    throw new Error(
      `Source bucket is empty; refusing to snapshot (pass --allow-empty to override)`,
    );
  }

  console.log(`Listing snapshots in ${dstBucket}/${SNAPSHOT_PREFIX}...`);
  const snapshots = await listSnapshots(dst, dstBucket);
  const previous = snapshots.complete.filter((date) => date < today).at(-1);
  const previousPrefix = previous ? `${SNAPSHOT_PREFIX}${previous}/` : ``;

  const previousObjects = previous
    ? await listObjects(dst, dstBucket, previousPrefix)
    : new Map<string, ObjectInfo>();
  // Objects already written to today's snapshot by an earlier, interrupted run
  const existing = await listObjects(dst, dstBucket, target);

  // A destination copy is current if it was written after the source last changed
  const isCurrent = (copy: ObjectInfo | undefined, info: ObjectInfo) =>
    !!copy && copy.size === info.size && copy.lastModified >= info.lastModified;

  const toCopy: string[] = [];
  const toDownload: string[] = [];
  let downloadBytes = 0;
  for (const [key, info] of srcObjects) {
    if (isCurrent(existing.get(key), info)) continue;
    if (
      isCurrent(previousObjects.get(key), info) &&
      info.size <= MAX_COPY_SIZE
    ) {
      toCopy.push(key);
    } else {
      toDownload.push(key);
      downloadBytes += info.size;
    }
  }
  const stale = [...existing.keys()].filter((key) => !srcObjects.has(key));

  const totalBytes = [...srcObjects.values()].reduce(
    (sum, o) => sum + o.size,
    0,
  );
  console.log(
    `Snapshot ${today}: ${srcObjects.size} objects (${formatBytes(totalBytes)}) | ` +
      `copy from ${previous ?? `-`}: ${toCopy.length} | ` +
      `download: ${toDownload.length} (${formatBytes(downloadBytes)}) | ` +
      `already done: ${srcObjects.size - toCopy.length - toDownload.length}`,
  );

  if (DRY_RUN) {
    toDownload.forEach((key) => console.log(`  download ${key}`));
    const keep = selectSnapshotsToKeep([...snapshots.complete, today]);
    const prune = snapshots.all.filter((d) => d !== today && !keep.has(d));
    console.log(`Would prune: ${prune.join(`, `) || `none`}`);
    return;
  }

  let done = 0;
  const total = toCopy.length + toDownload.length;
  const failures: string[] = [];

  const transfer = async (key: string, fromPrevious: boolean) => {
    try {
      if (fromPrevious) {
        await dst.send(
          new CopyObjectCommand({
            Bucket: dstBucket,
            CopySource: copySource(dstBucket, previousPrefix + key),
            Key: target + key,
          }),
        );
      } else {
        const obj = await src.send(
          new GetObjectCommand({ Bucket: srcBucket, Key: key }),
        );
        await new Upload({
          client: dst,
          params: {
            Bucket: dstBucket,
            Key: target + key,
            Body: obj.Body as Readable,
            ContentType: obj.ContentType,
            ContentLength: srcObjects.get(key)?.size,
          },
        }).done();
      }
      done++;
      if (done % 100 === 0 || done === total) {
        console.log(`[${done}/${total}]`);
      }
    } catch (error) {
      failures.push(key);
      console.error(`FAILED ${key}:`, (error as Error).message);
    }
  };

  await runPool(toCopy, CONCURRENCY, (key) => transfer(key, true));
  await runPool(toDownload, CONCURRENCY, (key) => transfer(key, false));

  if (stale.length) {
    await deleteKeys(
      dst,
      dstBucket,
      stale.map((key) => target + key),
    );
  }

  if (failures.length === 0) {
    await dst.send(
      new PutObjectCommand({
        Bucket: dstBucket,
        Key: `${SNAPSHOT_PREFIX}${today}.json`,
        ContentType: `application/json`,
        Body: JSON.stringify(
          {
            date: today,
            source: srcBucket,
            objects: srcObjects.size,
            bytes: totalBytes,
            copiedFrom: previous ?? null,
            copied: toCopy.length,
            downloaded: toDownload.length,
            completedAt: new Date().toISOString(),
          },
          null,
          2,
        ),
      }),
    );
    snapshots.complete.push(today);
    console.log(`Snapshot ${today} complete.`);
  }

  // Today's snapshot is never pruned, so a failed run can be resumed
  const keep = selectSnapshotsToKeep(snapshots.complete);
  for (const date of snapshots.all) {
    if (date === today || keep.has(date)) continue;
    const prefix = `${SNAPSHOT_PREFIX}${date}/`;
    const keys = [...(await listObjects(dst, dstBucket, prefix)).keys()].map(
      (key) => prefix + key,
    );
    await deleteKeys(dst, dstBucket, [
      ...keys,
      `${SNAPSHOT_PREFIX}${date}.json`,
    ]);
    console.log(`Pruned snapshot ${date} (${keys.length} objects)`);
  }

  console.log(`Done. ${done} transferred, ${failures.length} failed.`);
  if (failures.length) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
