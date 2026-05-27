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
  return `https://cdn.fairdataihub.org/gallery/${encodeSegmentOnce(folder)}/${encodeSegmentOnce(name)}${qp ? `?${qp}` : ``}`;
}
