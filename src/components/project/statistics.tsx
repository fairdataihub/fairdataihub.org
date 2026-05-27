import React, { useEffect, useRef, useState } from 'react';

import { MagicCard } from '@/components/magicui/magic-card';

export interface StatisticsMetric {
  value: number;
  unit?: string; // Optional unit (e.g., "TB", "GB", "k+")
  suffix?: string; // Optional suffix (e.g., "+", "k+")
  description: string;
  id?: string;
}

export interface StatisticsProps {
  title: string;
  subtitle: string;
  metrics: StatisticsMetric[];
}

const ProjectStatistics: React.FC<StatisticsProps> = ({
  title,
  subtitle,
  metrics,
}) => {
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  // Observe when each metric card comes into view
  useEffect(() => {
    if (typeof IntersectionObserver === `undefined`) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = numberRefs.current.findIndex(
            (ref) => ref === entry.target,
          );
          if (entry.isIntersecting && index !== -1) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index],
            );
          }
        });
      },
      { threshold: 0.5 },
    );

    numberRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visibleIndexes.length) return;

    const animate = async () => {
      const { CountUp } = await import(`countup.js`);

      visibleIndexes.forEach((index) => {
        const el = numberRefs.current[index];
        const metric = metrics[index];
        if (!el || !metric) return;

        // Avoid re-animating
        if ((el as any)._counted) return;

        const countUp = new CountUp(el, metric.value, {
          duration: 2,
          separator: `,`,
        });

        if (!countUp.error) {
          countUp.start();
          (el as any)._counted = true;
        } else {
          console.error(countUp.error);
        }
      });
    };

    animate();
  }, [visibleIndexes, metrics]);

  if (!metrics || metrics.length === 0) return null;

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-10">
      <div className="mb-6 text-center lg:text-left">
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="font-asap mt-3 max-w-2xl text-sm text-stone-700 sm:text-base lg:mt-4">
            {subtitle}
          </p>
        )}
      </div>

      <MagicCard
        gradientColor="oklch(0.592 0.2157 349.761)"
        className="w-full rounded-3xl p-[2px]"
      >
        <div className="rounded-3xl border border-stone-200 bg-white/90 px-4 py-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
            {metrics.map((metric, index) => (
              <div
                key={metric.id || index}
                className="flex max-w-[260px] min-w-[220px] flex-1 flex-col items-center rounded-2xl bg-stone-50/70 px-4 py-5 text-center shadow-sm ring-1 ring-stone-100/70 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(203,67,142,0.20)]"
              >
                <p className="font-lato text-3xl font-extrabold text-stone-900 sm:text-4xl md:text-5xl">
                  <span
                    id={metric.id}
                    ref={(el) => {
                      numberRefs.current[index] = el;
                    }}
                  >
                    0
                  </span>
                  {metric.suffix && (
                    <span className="font-lato text-3xl text-stone-900 sm:text-4xl md:text-5xl">
                      {metric.suffix}
                    </span>
                  )}
                  {metric.unit && (
                    <span className="ml-1 text-2xl sm:text-3xl">
                      {metric.unit}
                    </span>
                  )}
                </p>

                <p className="font-asap mt-2 text-sm text-stone-700 sm:text-base">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MagicCard>
    </section>
  );
};

export default ProjectStatistics;
