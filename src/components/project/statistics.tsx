import React from 'react';

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

export default function ProjectStatistics({
  title,
  subtitle,
  metrics,
}: StatisticsProps) {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="flex w-full flex-col">
        <h2 className="py-1 text-center text-2xl font-bold sm:text-2xl md:text-3xl lg:text-5xl">
          {title}
        </h2>

        <h3 className="text-center text-lg md:text-xl lg:text-2xl">
          {subtitle}
        </h3>
      </div>

      <div className="flex flex-col justify-around p-6 sm:flex-row">
        {metrics.map((metric, index) => (
          <div
            key={metric.id || index}
            className="m-2 mb-5 flex flex-col items-center justify-start lg:m-6"
          >
            <p className="my-1 hidden text-center font-lato text-5xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"></p>

            <p className="my-1 text-center font-lato text-5xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              <span id={metric.id}>{metric.value}</span>
              {metric.unit && <span> {metric.unit}</span>}
              {metric.suffix && <span>{metric.suffix}</span>}
            </p>

            <p className="text-center font-asap text-xl text-black sm:text-lg md:text-xl lg:text-2xl">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
