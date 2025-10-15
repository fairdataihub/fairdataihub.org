'use client';

import { Icon } from '@iconify/react';
import { motion, PanInfo } from 'framer-motion';
import { useLayoutEffect, useRef, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import events from '@/public/home/events.json';

const height = `34rem`;

export default function HorizontalEventTimelineCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedHeight, setExpandedHeight] = useState<number>(140);
  const carouselRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Calculate available height for the "expanded" section (now always visible)
  useLayoutEffect(() => {
    const measure = () => {
      const carouselEl = carouselRef.current;
      const headerEl = headerRef.current;
      if (!carouselEl || !headerEl) {
        return;
      }

      // Prefer getBoundingClientRect but fall back to offsetHeight if needed
      const totalHeight =
        carouselEl.getBoundingClientRect().height || carouselEl.offsetHeight;
      const headerHeight =
        headerEl.getBoundingClientRect().height || headerEl.offsetHeight;

      const availableHeight = totalHeight - headerHeight - 110; // padding/borders
      setExpandedHeight(Math.max(availableHeight, 80));
    };

    // Initial measurement
    window.requestAnimationFrame(measure);

    // Observe size changes for both elements when available
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== `undefined`) {
      ro = new ResizeObserver(() => {
        window.requestAnimationFrame(measure);
      });
      if (carouselRef.current) {
        ro.observe(carouselRef.current);
      }
      if (headerRef.current) {
        ro.observe(headerRef.current);
      }
    }

    // Also update on window resize/load as a fallback
    const onResize = () => window.requestAnimationFrame(measure);
    window.addEventListener(`resize`, onResize);
    window.addEventListener(`load`, onResize);

    return () => {
      window.removeEventListener(`resize`, onResize);
      window.removeEventListener(`load`, onResize);
      if (ro) {
        ro.disconnect();
      }
    };
  }, []);

  const formatPeriod = (item: (typeof events)[0]) => {
    if (item.periodType === `Q`) {
      return `Q${item.periodNumber} ${item.year}`;
    }
    if (item.periodType === `H`) {
      return `H${item.periodNumber} ${item.year}`;
    }
    return `${item.year}`;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    index: number,
  ) => {
    const SWIPE_THRESHOLD = 50;
    if (info.offset.x > SWIPE_THRESHOLD && index === currentIndex) {
      prevSlide();
    } else if (info.offset.x < -SWIPE_THRESHOLD && index === currentIndex) {
      nextSlide();
    }
  };

  const handleCardClick = (index: number) => {
    if (index !== currentIndex) {
      goToSlide(index);
    }
  };

  const cardVariants = {
    active: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
      transition: { duration: 0.3, ease: `easeInOut` },
    },
    inactive: {
      scale: 0.9,
      opacity: 0.7,
      zIndex: 0,
      transition: { duration: 0.3, ease: `easeInOut` },
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pt-4 pb-12">
      <div className="relative">
        <div
          ref={carouselRef}
          className="relative touch-pan-x overflow-hidden"
          style={{ height }}
        >
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 z-20 hidden -translate-y-1/2 rounded-full bg-black/50 p-2 text-white shadow-md transition-colors hover:bg-black/65 md:block"
          >
            <Icon icon="mdi:chevron-left" className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 z-20 hidden -translate-y-1/2 rounded-full bg-black/50 p-2 text-white shadow-md transition-colors hover:bg-black/65 md:block"
          >
            <Icon icon="mdi:chevron-right" className="h-6 w-6" />
          </button>

          <div className="flex h-full items-center justify-center">
            {events.map((item, index) => (
              <motion.div
                key={index}
                className="absolute mx-10 w-80"
                variants={cardVariants}
                initial="inactive"
                animate={index === currentIndex ? `active` : `inactive`}
                style={{
                  x: `${Math.round((index - currentIndex) * 350)}px`,
                  willChange: `transform`,
                }}
                drag="x"
                dragConstraints={{ left: -50, right: 50 }}
                dragElastic={0.1}
                onDragEnd={(e: any, info: any) => handleDragEnd(e, info, index)}
              >
                <motion.div
                  variants={cardVariants}
                  initial="inactive"
                  animate={index === currentIndex ? `active` : `inactive`}
                  className={`absolute top-[-1rem] left-1/2 z-10 h-6 w-6 -translate-x-1/2 transform rounded-full ${
                    index === currentIndex
                      ? `bg-primary`
                      : `border-primary border-2 bg-transparent`
                  }`}
                  style={{
                    willChange: `transform`,
                    transform: `translateZ(0)`,
                  }}
                />

                <motion.div
                  layout
                  className="w-full cursor-pointer"
                  transition={{ duration: 0.3, ease: `easeInOut` }}
                  onClick={() => handleCardClick(index)}
                >
                  <Card className="border-primary/10 overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    <CardContent className="p-0">
                      {/* header */}
                      <div
                        ref={index === 0 ? headerRef : null}
                        className="flex flex-col items-center p-6 text-center"
                      >
                        <Badge className="mb-2 border-pink-300/70 bg-pink-50 px-3 py-1 text-sm text-pink-700 dark:border-pink-400/40 dark:bg-pink-400/10 dark:text-pink-200">
                          <Icon icon="mdi:calendar" className="mr-1 h-4 w-4" />
                          {formatPeriod(item)}
                        </Badge>
                        <h3 className="text-primary text-xl font-bold">
                          {item.year} Milestones
                        </h3>
                        <p className="text-lg font-medium">
                          {item.periodType === `Q`
                            ? `Quarter ${item.periodNumber}`
                            : `Half ${item.periodNumber}`}
                        </p>
                      </div>

                      <div
                        className="border-primary/50 overflow-y-auto border-t px-6 pt-2 pb-6"
                        style={{ height: expandedHeight }}
                      >
                        <h4 className="my-2 flex items-center justify-center text-sm font-semibold">
                          Events
                        </h4>
                        <div className="flex items-center justify-center">
                          <motion.p
                            className="text-left text-sm leading-relaxed whitespace-pre-line"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, ease: `easeOut` }}
                          >
                            {item.events}
                          </motion.p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentIndex ? `bg-primary` : `bg-primary/20`
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
