import { useEffect, useMemo, useRef, useState } from 'react';

type MasonryProps<T> = {
  items: T[];
  columns: number;
  gap?: number;
  render: (item: T, index: number) => JSX.Element;
  getHeight: (item: T) => number;
};

/**
 * Masonry layout (Pinterest style) with absolute positioning.
 *
 * How it works:
 * - Greedy placement: for each item, pick the current shortest column and append the item there.
 * - Positions are computed with each item absolutely positioned inside a container.
 * - The container’s height becomes the tallest column’s height.
 *
 * - `useMediaColumns` to pass `columns` and reflow on resize.
 */
export function Masonry<T>({
  items,
  columns,
  gap = 16,
  render,
  getHeight,
}: MasonryProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Absolute positions (left%, top px) for each item.
  const [itemPositions, setItemPositions] = useState<
    { leftPercent: number; topPx: number }[]
  >([]);
  // Computed container height so absolutely positioned children are visible.
  const [containerHeightPx, setContainerHeightPx] = useState(0);

  const columnCount = Math.max(columns, 1);

  const layout = useMemo(() => {
    // Track dynamic heights per column.
    const columnHeightsPx: number[] = Array(columnCount).fill(0);
    const positions: { leftPercent: number; topPx: number }[] = [];

    // Each column has equal width = 100% / columnCount
    const columnWidthPercent = 100 / columnCount;

    items.forEach((item) => {
      // Find index of the shortest column.
      let shortestColumnIndex = 0;
      let shortestHeight = columnHeightsPx[0];
      for (let c = 1; c < columnCount; c++) {
        if (columnHeightsPx[c] < shortestHeight) {
          shortestHeight = columnHeightsPx[c];
          shortestColumnIndex = c;
        }
      }

      // Position: x = column index * columnWidth%, y = current column height.
      positions.push({
        leftPercent: shortestColumnIndex * columnWidthPercent,
        topPx: columnHeightsPx[shortestColumnIndex],
      });

      // Advance that column’s height by item height + vertical gap.
      columnHeightsPx[shortestColumnIndex] += getHeight(item) + gap;
    });

    // Container height is the tallest column minus the trailing gap.
    const tallestColumnPx = Math.max(...columnHeightsPx);
    const totalContainerHeightPx = Math.max(tallestColumnPx - gap, 0);

    return { positions, totalContainerHeightPx, columnWidthPercent };
  }, [items, columnCount, gap, getHeight]);

  // Push computed values into state
  useEffect(() => {
    setItemPositions(layout.positions);
    setContainerHeightPx(layout.totalContainerHeightPx);
  }, [layout]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        // Height is required because children are absolutely positioned.
        height: containerHeightPx,
      }}
    >
      {items.map((item, index) => {
        const pos = itemPositions[index] ?? { leftPercent: 0, topPx: 0 };
        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${pos.leftPercent}%`,
              top: pos.topPx,
              width: `${100 / columnCount}%`,
              // Side padding creates horizontal gap.
              paddingLeft: gap / 2,
              paddingRight: gap / 2,
            }}
          >
            <div style={{ marginBottom: gap }}>{render(item, index)}</div>
          </div>
        );
      })}
    </div>
  );
}
