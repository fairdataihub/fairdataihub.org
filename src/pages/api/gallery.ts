// src/pages/api/gallery.ts
import type { NextApiRequest, NextApiResponse } from 'next';

import data from '@/public/gallery/images.json';

type Photo = {
  id: number;
  folder: string;
  name: string;
  alt?: string;
  description?: string;
  date?: string;
  width: number;
  height: number;
};

const flat: Photo[] = (() => {
  const out: Photo[] = [];
  let i = 0;
  (
    data as Array<{
      folder: string;
      date?: string;
      description?: string;
      images: Array<{ name: string; alt?: string }>;
    }>
  ).forEach((evt) => {
    evt.images.forEach((img) => {
      out.push({
        id: i++,
        folder: evt.folder,
        name: img.name,
        alt: img.alt,
        description: evt.description,
        date: evt.date,
        width: 1920,
        height: 1080,
      });
    });
  });
  return out;
})();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const page = Math.max(1, parseInt((req.query.page as string) || `1`, 10));
  const pageSize = Math.min(
    120,
    Math.max(1, parseInt((req.query.pageSize as string) || `60`, 10)),
  );
  const start = (page - 1) * pageSize;
  res.setHeader(`Cache-Control`, `s-maxage=600, stale-while-revalidate=86400`); // edge cache
  res.status(200).json({
    items: flat.slice(start, start + pageSize),
    total: flat.length,
    page,
    pageSize,
  });
}
