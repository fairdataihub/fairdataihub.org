import { Icon } from '@iconify/react';
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Card, CardContent } from '@/components/ui/card';

const HEIGHT_REM = 28;
const CARD_W = 320;
const GAP = 32;
const SLIDE_W = CARD_W + GAP;

type TimelineItem = {
  longDate: string;
  title: string;
  content: string;
};

type TimelineProps = {
  timelineList: TimelineItem[];
  title?: string;
  description?: string;
};

const snapAnimate = (mv: MotionValue<any>, to: number) =>
  animate(mv, to, { type: `spring`, stiffness: 260, damping: 32 });

export default function HorizontalTimeline({
  timelineList,
  title = `Timeline`,
  description,
}: TimelineProps) {
  const [active, setActive] = useState(0);
  const lastIndex = timelineList.length - 1;
  const slideWidth = SLIDE_W;
  const prefersReducedMotion = useReducedMotion();
  const regionId = useId();
  const tablistId = useId();
  const items = useMemo(
    () =>
      timelineList && timelineList.length > 0
        ? [...timelineList].reverse()
        : timelineList,
    [timelineList],
  );

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

  const [_status, setStatus] = useState(``);
  useEffect(() => {
    const item = items[active];
    setStatus(`${item.longDate} – Slide ${active + 1} of ${items.length}`);
  }, [active, items]);

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

  if (!items || items.length === 0) return null;

  return (
    <section
      id={regionId}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project timeline"
      className="px-4 py-10 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-screen-2xl md:px-10">
        <div className="mb-6 text-center lg:text-left">
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="font-asap mt-3 max-w-2xl text-sm text-stone-700 sm:text-base lg:mt-4">
              {description}
            </p>
          )}
        </div>

        <div className="relative">
          <div
            className="relative w-full overflow-hidden rounded-3xl border border-stone-200 bg-white/90 shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
            style={{ height: `${HEIGHT_REM}rem` }}
          >
            {/* Arrows */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[999] hidden items-center md:flex">
              <button
                className="pointer-events-auto ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-md ring-offset-2 transition outline-none hover:bg-black/70 focus-visible:ring-2 focus-visible:ring-black/70"
                onClick={prev}
                aria-controls={`${regionId}-slides`}
                aria-label="Previous milestone"
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
                aria-label="Next milestone"
                type="button"
              >
                <Icon
                  icon="mdi:chevron-right"
                  className="h-6 w-6"
                  aria-hidden
                />
              </button>
            </div>

            {/* Slides */}
            <div id={`${regionId}-slides`} className="relative h-full">
              <div className="relative h-full">
                {items.map((item, index) => {
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const x = useTransform(xMv, (v) => v + index * SLIDE_W);
                  const isActive = active === index;

                  return (
                    <motion.div
                      key={`${item.longDate}-${item.title}`}
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
                      aria-label={`${item.longDate} - Slide ${
                        index + 1
                      } of ${items.length}`}
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
                        aria-label={`Show details for ${item.longDate} – ${item.title}`}
                        tabIndex={-1}
                        className={[
                          `relative w-80 cursor-pointer overflow-hidden rounded-2xl`,
                          `bg-white shadow-lg transition-[transform,box-shadow] duration-500 hover:shadow-xl`,
                          isActive
                            ? `ring-primary/40 ring-4`
                            : `scale-95 border border-pink-300/10`,
                          prefersReducedMotion ? `transition-none` : ``,
                        ].join(` `)}
                      >
                        <Card className="border-0 shadow-none">
                          <CardContent className="flex flex-col p-0">
                            {/* header */}
                            <div className="flex flex-col items-center px-6 pt-6 pb-4 text-center">
                              <p className="text-primary/70 text-[11px] font-semibold tracking-[0.18em] uppercase">
                                Milestone {items.length - index}
                              </p>
                              <h3 className="text-primary mt-1 text-lg font-bold">
                                {item.title}
                              </h3>
                              <p className="mt-1 text-xs font-medium text-slate-600">
                                {item.longDate}
                              </p>
                            </div>

                            <div className="mx-6 mb-0 h-px bg-pink-200/70" />

                            {/* body */}
                            <div
                              ref={(el) => (bodyRefs.current[index] = el)}
                              className="px-6 pt-4 pb-6 text-sm leading-relaxed text-slate-700"
                              onPointerDown={(e) => e.stopPropagation()}
                              aria-hidden={!isActive}
                              tabIndex={isActive ? 0 : -1}
                            >
                              {item.content}
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

          {/* dots */}
          <div
            id={tablistId}
            role="tablist"
            aria-label="Timeline slides"
            className="mt-8 flex justify-center gap-3"
            onKeyDown={onTabsKeyDown}
          >
            {items.map((item, i) => (
              <button
                key={`${item.longDate}-${i}`}
                id={`${regionId}-tab-${i}`}
                role="tab"
                aria-controls={`${regionId}-panel-${i}`}
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                onClick={() => goTo(i)}
                ref={(el) => (tabsRef.current[i] = el)}
                className={[
                  `inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-[11px] ring-offset-2 outline-none`,
                  `focus-visible:ring-primary/70 focus-visible:ring-2`,
                  i === active
                    ? `bg-primary text-white`
                    : `bg-primary/10 text-primary`,
                ].join(` `)}
                aria-label={`Go to slide ${i + 1} of ${
                  items.length
                } (${item.longDate})`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
