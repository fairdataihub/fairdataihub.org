import { useEffect, useState } from 'react';

/**
 * React hook that returns the number of "columns" to display
 * based on the current viewport width (responsive breakpoints).
 *
 * - Returns `1` column by default (SSR safe to avoid hydration mismatch).
 *
 * It listens to `window.matchMedia` queries for these breakpoints
 * and updates automatically when the window is resized.
 *
 * Example:
 * ```
 * const colCount = useMediaColumns();
 * return <div className={`grid grid-cols-${colCount}`}>...</div>;
 * ```
 */
export function useMediaColumns() {
  // Start with 1 column to avoid hydration mismatch between SSR and client
  const [cols, setCols] = useState(1);

  useEffect(() => {
    const sm = window.matchMedia(`(min-width: 640px)`);
    const xl = window.matchMedia(`(min-width: 1280px)`);
    const x2l = window.matchMedia(`(min-width: 1536px)`);

    const update = () => {
      if (x2l.matches) {
        setCols(4);
      } else if (xl.matches) {
        setCols(3);
      } else if (sm.matches) {
        setCols(2);
      } else {
        setCols(1);
      }
    };

    // Run once on mount
    update();

    // Subscribe to media query changes
    sm.addEventListener(`change`, update);
    xl.addEventListener(`change`, update);
    x2l.addEventListener(`change`, update);

    // Clean up listeners on unmount
    return () => {
      sm.removeEventListener(`change`, update);
      xl.removeEventListener(`change`, update);
      x2l.removeEventListener(`change`, update);
    };
  }, []);

  return cols;
}
