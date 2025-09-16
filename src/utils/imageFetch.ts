import { imageSize } from 'image-size';
import { getPlaiceholder } from 'plaiceholder';

const TRANSPARENT_1PX = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==`;

export async function safeProbe(url: string) {
  try {
    const buffer = await fetch(url).then(async (res) =>
      Buffer.from(await res.arrayBuffer()),
    );

    return imageSize(new Uint8Array(buffer));
  } catch (e) {
    console.warn(`[probe] failed:`, url, e);
    return { width: 1200, height: 800 }; // sensible fallback
  }
}

export async function safeLqip(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const ct = (res.headers.get(`content-type`) || ``).toLowerCase();
    if (!ct.startsWith(`image/`)) {
      throw new Error(`Non-image content-type: ${ct}`);
    }

    const buf = Buffer.from(await res.arrayBuffer());
    const { base64 } = await getPlaiceholder(buf);
    return base64;
  } catch (e) {
    console.warn(`[lqip] failed:`, url, e);
    return TRANSPARENT_1PX;
  }
}
