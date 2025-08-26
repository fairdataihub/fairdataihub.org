export const BUNNY_BASE =
  process.env.NEXT_PUBLIC_BUNNY_BASE ||
  `https://fairdataihub-gallery-s.b-cdn.net`;

// Encode exactly once per path segment
export function encodeSegmentOnce(segment: string) {
  try {
    return encodeURIComponent(decodeURIComponent(segment));
  } catch {
    // If it wasn't encoded, just encode it
    return encodeURIComponent(segment);
  }
}

export function bunnyUrl(folder: string, name: string, qp?: string) {
  return `${BUNNY_BASE}/${encodeSegmentOnce(folder)}/${encodeSegmentOnce(name)}${qp ? `?${qp}` : ``}`;
}
