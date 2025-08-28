import type { ImageProps } from '@/utils/types';

/**
 * Distributes a list of items into `n` buckets in a **round-robin** fashion.
 *
 * Example with 3 buckets:
 * items = [a, b, c, d, e, f, g]
 * result = [
 *   [a, d, g], // bucket 0 (indexes 0, 3, 6, ...)
 *   [b, e],    // bucket 1 (indexes 1, 4, ...)
 *   [c, f]     // bucket 2 (indexes 2, 5, ...)
 * ]
 *
 * Meant for balancing items across multiple columns
 * when rendering a dynamic masonry-style grid,
 * so that items flow across columns (1 -> 2 -> 3 -> ... -> 1)
 * instead of stacking top-to-bottom in one column first.
 *
 * @template T - Type of the items in the array
 * @param elements - The array of items to distribute
 * @param columnCount - Number of columns. If less than 1, defaults to 1.
 * @returns An array of columns, each containing a subset of the elements
 */
export function toBuckets<T>(elements: T[], columnCount: number): T[][] {
  const totalColumns = Math.max(columnCount, 1); // Ensure at least 1 column
  const columns: T[][] = Array.from({ length: totalColumns }, () => []);
  elements.forEach((element, index) => {
    const targetColumn = index % totalColumns;
    columns[targetColumn].push(element); // Round-robin assignment
  });
  return columns;
}

/**
 * Groups images by their year, sorted in descending order (latest year first).
 *
 * - The year is found using the `getYear` function.
 * - Within each year group, the original order of images is preserved
 *
 * Example:
 *   Input:  [img2023a, img2023b, img2022a]
 *   Output: [
 *     [2023, [img2023a, img2023b]],
 *     [2022, [img2022a]]
 *   ]
 *
 * @param images - Array of images to group
 * @param extractYear - Function that extracts a year number from an image
 * @returns An array of `[year, images[]]` tuples sorted by year (descending)
 */
export function groupByYear(
  images: ImageProps[],
  extractYear: (image: ImageProps) => number,
): [number, ImageProps[]][] {
  const yearMap = new Map<number, ImageProps[]>();

  for (const image of images) {
    const year = extractYear(image) || 0; // Defaults to 0 if no year found
    if (!yearMap.has(year)) {
      yearMap.set(year, []);
    }
    yearMap.get(year)!.push(image);
  }

  // Convert map -> array of [year, images[]], sorted by year descending
  return Array.from(yearMap.entries()).sort(
    ([yearA], [yearB]) => yearB - yearA,
  );
}
