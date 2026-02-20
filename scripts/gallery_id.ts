import { readFile, writeFile } from 'fs/promises';
import { nanoid } from 'nanoid';
import path from 'path';

const IMAGES_JSON_PATH = path.join(
  process.cwd(),
  `public`,
  `gallery`,
  `images.json`,
);

interface GalleryImage {
  name: string;
  alt?: string;
  id?: string;
}

interface GalleryEntry {
  event: string;
  folder: string;
  date: string;
  images: GalleryImage[];
  tags: string[];
  description: string;
}

function findDuplicateIds(data: GalleryEntry[]): string[] {
  const seen = new Map<string, { folder: string; name: string }>();
  const duplicates: string[] = [];
  for (const entry of data) {
    for (const image of entry.images) {
      const { id } = image;
      if (id == null || id === ``) continue;
      const existing = seen.get(id);
      if (existing) {
        if (!duplicates.includes(id)) duplicates.push(id);
      } else {
        seen.set(id, { folder: entry.folder, name: image.name });
      }
    }
  }
  return duplicates;
}

async function addMissingIds() {
  const raw = await readFile(IMAGES_JSON_PATH, `utf-8`);
  const data: GalleryEntry[] = JSON.parse(raw);

  const duplicateIds = findDuplicateIds(data);
  if (duplicateIds.length > 0) {
    console.error(
      `Error: Duplicate gallery id(s) found: ${duplicateIds.join(`, `)}. Each image must have a unique id.`,
    );
    process.exit(1);
  }

  let added = 0;
  for (const entry of data) {
    for (const image of entry.images) {
      if (image.id == null || image.id === ``) {
        image.id = nanoid(5);
        added++;
      }
    }
  }

  await writeFile(IMAGES_JSON_PATH, JSON.stringify(data, null, 2), `utf-8`);

  console.log(`Added ${added} id(s) to images in ${IMAGES_JSON_PATH}`);
}

addMissingIds().catch((err) => {
  console.error(err);
  process.exit(1);
});
