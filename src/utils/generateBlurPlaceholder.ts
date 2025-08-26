import { bunnyUrl } from '@/utils/url';

import type { ImageProps } from './types';

const cache = new Map<string, string>();
const TINY_PIXEL = `data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=`;

// Generate a base64 image URL from an ImageProps object
// TODO: This is taking too long to generate (improve performance)
export default async function getBase64ImageUrl(
  image: ImageProps,
): Promise<string> {
  const key = `${image.folder}/${image.name}`;
  const cached = cache.get(key);
  if (cached) {
    return cached;
  }

  const optimizerOn = true;
  if (!optimizerOn) {
    cache.set(key, TINY_PIXEL);
    return TINY_PIXEL;
  }

  const tinyUrl = `${bunnyUrl(image.folder, image.name, `width=24&quality=10&format=jpeg`)}`;

  const res = await fetch(tinyUrl);
  if (!res.ok) {
    cache.set(key, TINY_PIXEL);
    return TINY_PIXEL;
  }

  const ab = await res.arrayBuffer();
  const b64 = Buffer.from(ab).toString(`base64`); // base64 the tiny image directly
  const url = `data:image/jpeg;base64,${b64}`;
  cache.set(key, url);
  return url;
}
