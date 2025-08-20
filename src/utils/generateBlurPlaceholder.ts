import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';

import type { ImageProps } from './types';

const cache = new Map<ImageProps, string>();

export default async function getBase64ImageUrl(
  image: ImageProps,
): Promise<string> {
  let url = cache.get(image);
  if (url) {
    return url;
  }
  const response = await fetch(
    `https://ucarecdn.com/${image.public_id}/-/format/jpeg/-/resize/8x/-/quality/lightest/`,
  );
  const buffer = await response.arrayBuffer();
  const minified = await imagemin.buffer(Buffer.from(buffer), {
    plugins: [imageminJpegtran()],
  });

  url = `data:image/jpeg;base64,${Buffer.from(minified).toString(`base64`)}`;
  cache.set(image, url);
  return url;
}
