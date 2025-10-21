'use client';

import { Icon } from '@iconify/react';
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useCallback, useMemo, useRef, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import events from '@/public/home/events.json';

const HEIGHT_REM = 34;

type EventItem = (typeof events)[number];

function formatPeriod(item: EventItem) {
  if (item.periodType === `Q`) return `Q${item.periodNumber} ${item.year}`;
  if (item.periodType === `H`) return `H${item.periodNumber} ${item.year}`;
  return `${item.year}`;
}

const snapAnimate = (mv: MotionValue<any>, to: number) =>
  animate(mv, to, { type: `spring`, stiffness: 260, damping: 32 });

export default function HorizontalEventTimelineCarousel() {
  const [active, setActive] = useState(0);

  // Geometry
  const diameter = 1000;
  const degrees = 22;
  const slideWidth = useMemo(
    () => diameter / events.length,
    [diameter, events.length],
  );
  const lastIndex = events.length - 1;
  const minX = useMemo(() => -lastIndex * slideWidth, [lastIndex, slideWidth]);
  const maxX = 0;

  // Shared motion value for x position (drives rotation only)
  const xMv = useMotionValue(0);

  const targetForIndex = useCallback(
    (idx: number) => -idx * slideWidth,
    [slideWidth],
  );

  const snapToNearest = useCallback(() => {
    const current = xMv.get();
    const snapped = Math.round(current / slideWidth) * slideWidth;
    const clampedIdx = Math.min(
      Math.max(Number(-snapped / slideWidth), 0),
      lastIndex,
    );
    setActive(clampedIdx);
    snapAnimate(xMv, targetForIndex(clampedIdx));
  }, [lastIndex, slideWidth, targetForIndex, xMv]);

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.min(Math.max(idx, 0), lastIndex);
      setActive(clamped);
      snapAnimate(xMv, targetForIndex(clamped));
    },
    [lastIndex, targetForIndex, xMv],
  );

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  // z-index helper: active on top
  const zFor = (i: number) => (i === active ? 60 : 30 - Math.abs(i - active));

  // Click vs drag threshold
  const panAccumRef = useRef(0);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-4 pb-12">
      <div className="relative">
        {/* Stage */}
        <div
          className="relative mx-5 w-full overflow-hidden rounded-2xl bg-white shadow-lg"
          style={{ height: `${HEIGHT_REM}rem` }}
          aria-roledescription="carousel"
        >
          {/* Arrows (highest z) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[999] hidden items-center md:flex">
            <button
              className="pointer-events-auto ml-2 rounded-full bg-black/50 p-2 text-white shadow-md transition hover:bg-black/65"
              onClick={prev}
              aria-label="Previous"
              type="button"
            >
              <Icon icon="mdi:chevron-left" className="h-6 w-6" />
            </button>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[999] hidden items-center md:flex">
            <button
              className="pointer-events-auto mr-2 rounded-full bg-black/50 p-2 text-white shadow-md transition hover:bg-black/65"
              onClick={next}
              aria-label="Next"
              type="button"
            >
              <Icon icon="mdi:chevron-right" className="h-6 w-6" />
            </button>
          </div>

          {/* Wheel */}
          <div className="relative h-full">
            <div className="flex h-full items-center justify-center">
              {events.map((item, index) => {
                const baseRotate = index * degrees;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const rotate = useTransform(
                  xMv,
                  (v) => v / ((slideWidth / degrees) * 1) + baseRotate,
                );
                const isActive = active === index;

                return (
                  <motion.div
                    key={index}
                    className="absolute flex h-full items-center justify-center select-none"
                    style={{
                      rotate,
                      transformOrigin: `50% ${diameter}px`,
                      willChange: `transform`,
                      zIndex: zFor(index),
                    }}
                  >
                    {/* Card (handles its own pan + click) */}
                    <motion.div
                      onPanStart={() => {
                        xMv.stop();
                        panAccumRef.current = 0;
                      }}
                      onPan={(e: any, info: any) => {
                        const overscroll = slideWidth * 0.6;
                        panAccumRef.current += info.delta.x;
                        const next = xMv.get() + info.delta.x;
                        const clamped = Math.min(
                          Math.max(next, minX - overscroll),
                          maxX + overscroll,
                        );
                        xMv.set(clamped);
                      }}
                      onPanEnd={() => {
                        if (Math.abs(panAccumRef.current) < 4) {
                          goTo(index); // treat tap as click
                        } else {
                          snapToNearest();
                        }
                      }}
                      onClick={() => goTo(index)} // click-to-center
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e: any) => {
                        if (e.key === `Enter` || e.key === ` `) {
                          e.preventDefault();
                          goTo(index);
                        }
                      }}
                      className={[
                        `relative w-80 max-w-[22rem]`,
                        `h-[26rem]`, // FIXED card height
                        `overflow-hidden rounded-2xl`,
                        `transition-all duration-500`,
                        isActive
                          ? `ring-primary/40 scale-110 ring-4`
                          : `scale-95 border border-pink-300/10 ring-0`,
                        `bg-white shadow-lg hover:shadow-xl`,
                        `cursor-pointer`,
                        isActive ? `z-60` : `z-10`,
                      ].join(` `)}
                    >
                      <Card className="h-full border-0 shadow-none">
                        <CardContent className="flex h-full flex-col p-0">
                          {/* header (fixed) */}
                          <div className="flex flex-none flex-col items-center p-6 text-center">
                            <Badge className="mb-2 border-pink-300/70 bg-pink-50 px-3 py-1 text-sm text-pink-700 dark:border-pink-400/40 dark:bg-pink-400/10 dark:text-pink-200">
                              <Icon
                                icon="mdi:calendar"
                                className="mr-1 h-4 w-4"
                              />
                              {formatPeriod(item)}
                            </Badge>
                            <h3 className="text-primary text-xl font-bold">
                              {item.year} Milestones
                            </h3>
                            <p className="text-lg font-medium">
                              {item.periodType === `Q`
                                ? `Quarter ${item.periodNumber}`
                                : item.periodType === `H`
                                  ? `Half ${item.periodNumber}`
                                  : ``}
                            </p>
                          </div>

                          {/* body (fills remaining height; scrolls) */}
                          <div
                            className="border-primary/50 flex-1 overflow-y-auto border-t px-6 pt-2 pb-6"
                            onPointerDown={(e) => e.stopPropagation()} // allow scrolling text without rotating the wheel
                          >
                            <h4 className="my-2 flex items-center justify-center text-sm font-semibold">
                              Events
                            </h4>
                            <p className="text-left text-sm leading-relaxed whitespace-pre-line">
                              {item.events}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={[
                `h-3 w-3 rounded-full transition-colors`,
                i === active ? `bg-primary` : `bg-primary/20`,
              ].join(` `)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
