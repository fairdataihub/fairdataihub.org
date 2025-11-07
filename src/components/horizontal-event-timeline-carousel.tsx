import { Icon } from '@iconify/react';
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';
import { useCallback, useEffect, useId, useRef, useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';

import events from '@/public/home/events.json';

const HEIGHT_REM = 34;
const CARD_W = 320;
const GAP = 32;
const SLIDE_W = CARD_W + GAP;

type EventItem = (typeof events)[number];

function formatPeriod(item: EventItem) {
  return `${item.year}`;
}

const snapAnimate = (mv: MotionValue<any>, to: number) =>
  animate(mv, to, { type: `spring`, stiffness: 260, damping: 32 });

export default function HorizontalEventTimelineCarousel() {
  const [active, setActive] = useState(0);
  const lastIndex = events.length - 1;
  const slideWidth = SLIDE_W;
  const prefersReducedMotion = useReducedMotion();
  const regionId = useId();
  const tablistId = useId();

  // shared motion for horizontal offset
  const xMv = useMotionValue(0);

  const bodyRefs = useRef<Array<HTMLDivElement | null>>([]);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

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

  const zFor = (i: number) => (i === active ? 60 : 30 - Math.abs(i - active));
  const panAccumRef = useRef(0);

  // announce slide change for SR users
  const [_status, setStatus] = useState(``);
  useEffect(() => {
    const p = events[active];
    setStatus(`${formatPeriod(p)} - Slide ${active + 1} of ${events.length}`);
  }, [active]);

  // keyboard handlers for dots
  const onTabsKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;
    if (![`ArrowLeft`, `ArrowRight`, `Home`, `End`].includes(key)) return;

    e.preventDefault();
    let nextIndex = active;

    if (key === `ArrowLeft`) nextIndex = Math.max(0, active - 1);
    if (key === `ArrowRight`) nextIndex = Math.min(lastIndex, active + 1);
    if (key === `Home`) nextIndex = 0;
    if (key === `End`) nextIndex = lastIndex;

    goTo(nextIndex);
    tabsRef.current[nextIndex]?.focus();
  };

  return (
    <section
      id={regionId}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project timeline"
      className="mx-auto max-w-7xl px-4 pt-4 pb-12"
    >
      <div className="relative">
        <div
          className="relative mx-5 w-full overflow-hidden rounded-2xl bg-white shadow-lg"
          style={{ height: `${HEIGHT_REM}rem` }}
        >
          {/* Arrows */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[999] hidden items-center md:flex">
            <button
              className="pointer-events-auto ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-md ring-offset-2 transition outline-none hover:bg-black/70 focus-visible:ring-2 focus-visible:ring-black/70"
              onClick={prev}
              aria-controls={`${regionId}-slides`}
              aria-label="Previous slide"
              type="button"
            >
              <Icon icon="mdi:chevron-left" className="h-6 w-6" aria-hidden />
            </button>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[999] hidden items-center md:flex">
            <button
              className="pointer-events-auto mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-md ring-offset-2 transition outline-none hover:bg-black/70 focus-visible:ring-2 focus-visible:ring-black/70"
              onClick={next}
              aria-controls={`${regionId}-slides`}
              aria-label="Next slide"
              type="button"
            >
              <Icon icon="mdi:chevron-right" className="h-6 w-6" aria-hidden />
            </button>
          </div>

          {/* Slides */}
          <div id={`${regionId}-slides`} className="relative h-full">
            <div className="relative h-full">
              {events.map((item, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const x = useTransform(xMv, (v) => v + index * SLIDE_W);
                const isActive = active === index;

                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 select-none"
                    style={{
                      x,
                      translateX: `-50%`,
                      zIndex: zFor(index),
                      willChange: `transform`,
                    }}
                    role="tabpanel"
                    id={`${regionId}-panel-${index}`}
                    aria-roledescription="slide"
                    aria-label={`${formatPeriod(item)} - Slide ${index + 1} of ${events.length}`}
                    aria-hidden={!isActive}
                    tabIndex={-1}
                  >
                    <motion.div
                      onPanStart={() => {
                        xMv.stop();
                        panAccumRef.current = 0;
                      }}
                      onPan={(e: any, info: any) => {
                        const overscroll = SLIDE_W * 0.6;
                        panAccumRef.current += info.delta.x;
                        const next = xMv.get() + info.delta.x;
                        const minX = -lastIndex * SLIDE_W;
                        const maxX = 0;
                        const clamped = Math.min(
                          Math.max(next, minX - overscroll),
                          maxX + overscroll,
                        );
                        xMv.set(clamped);
                      }}
                      onPanEnd={() => {
                        if (Math.abs(panAccumRef.current) < 4) {
                          goTo(index);
                        } else {
                          snapToNearest();
                        }
                      }}
                      onClick={() => goTo(index)}
                      role="button"
                      aria-label={`Show ${formatPeriod(item)} details`}
                      tabIndex={-1}
                      className={[
                        `relative h-[26rem] w-80 cursor-pointer overflow-hidden rounded-2xl`,
                        `bg-white shadow-lg transition-[transform,box-shadow] duration-500 hover:shadow-xl`,
                        isActive
                          ? `ring-primary/40 ring-4`
                          : `scale-95 border border-pink-300/10`,
                        prefersReducedMotion ? `transition-none` : ``,
                      ].join(` `)}
                    >
                      <Card className="h-full border-0 shadow-none">
                        <CardContent className="flex h-full flex-col p-0">
                          {/* header */}
                          <div className="flex flex-none flex-col items-center p-6 text-center">
                            <h3 className="text-primary text-xl font-bold">
                              {item.year} Milestones
                            </h3>
                          </div>

                          <div
                            ref={(el) => (bodyRefs.current[index] = el)}
                            className="border-primary/50 flex-1 overflow-y-auto border-t px-6 pt-2 pb-6"
                            onPointerDown={(e) => e.stopPropagation()}
                            aria-hidden={!isActive}
                            tabIndex={isActive ? 0 : -1}
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
        <div
          id={tablistId}
          role="tablist"
          aria-label="Slides"
          className="mt-8 flex justify-center gap-3"
          onKeyDown={onTabsKeyDown}
        >
          {events.map((_, i) => (
            <button
              key={i}
              id={`${regionId}-tab-${i}`}
              role="tab"
              aria-controls={`${regionId}-panel-${i}`}
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              onClick={() => goTo(i)}
              ref={(el) => (tabsRef.current[i] = el)}
              className={[
                `inline-flex h-4 min-w-4 items-center justify-center rounded-full ring-offset-2 outline-none`,
                `focus-visible:ring-primary/70 focus-visible:ring-2`,
                i === active ? `bg-primary text-white` : `bg-primary/20`,
              ].join(` `)}
              aria-label={`Go to slide ${i + 1} of ${events.length}`}
            >
              <span className="sr-only">Slide {i + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
