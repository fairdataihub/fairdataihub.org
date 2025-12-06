import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a tag string to a URL-friendly slug.
 * - Trims whitespace
 * - Converts to lowercase
 * - Replaces spaces with hyphens
 * - Special case: "metadata" becomes "metadata-tag"
 */
export function slugifyTag(tag: string): string {
  const base = tag.trim().toLowerCase().replace(/\s+/g, `-`);
  return base === `metadata` ? `metadata-tag` : base;
}
