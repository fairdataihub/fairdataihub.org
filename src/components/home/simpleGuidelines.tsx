import React from 'react';

import { MagicCard } from '@/components/magicui/magic-card';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

type ItemSize = 'wide' | 'narrow';

// Shared card design
const cardBase = `h-full flex flex-col justify-between rounded-2xl border border-red-300/70 bg-white/90 shadow-xs ring-1 ring-transparent dark:border-red-400/40 dark:bg-neutral-900/70`;

export default function SimpleGuidelines() {
  const items: Array<{
    colSpan: string; // Tailwind col-span class
    size: ItemSize;
    title: React.ReactNode;
    description: React.ReactNode;
  }> = [
    {
      title: (
        <h3 className="text-2xl font-extrabold tracking-tight text-black md:text-2xl dark:text-white">
          Clear step-by-step guidelines
        </h3>
      ),
      description: (
        <p className="mt-3 text-base leading-relaxed text-balance md:text-lg">
          Minimal, actionable checklists for preparing and sharing FAIR data and
          software so anyone can do the right thing, in the right order, without
          guesswork.
        </p>
      ),
      colSpan: `col-span-3`,
      size: `wide`,
    },
    {
      title: (
        <h3 className="text-2xl font-extrabold tracking-tight text-black md:text-2xl dark:text-white">
          Free, open-source tools
        </h3>
      ),
      description: (
        <p className="mt-3 text-base leading-relaxed text-balance md:text-lg">
          Developing open-source and free tools that streamline the
          implementation of these guidelines and minimize researchers&apos; time
          and effort through a combination of intuitive user interfaces, AI, and
          automation.
        </p>
      ),
      colSpan: `col-span-3`,
      size: `wide`,
    },
  ];

  return (
    <section className="relative py-10">
      <h2 className="mb-6 px-6 text-center text-4xl font-extrabold text-stone-900 sm:text-4xl">
        Simple guides + open tools, so FAIR is effortless
      </h2>

      <div className="font-asap mx-auto max-w-screen-xl px-6">
        <p className="mb-8 text-left text-xl md:text-center">
          We believe that researchers already have enough work and
          responsibilities on their hands. Therefore, making data, software, and
          other research outcomes FAIR should be made very easy for them. We are
          trying to achieve that through two main approaches:
        </p>

        <BentoGrid className="mx-auto max-w-screen-xl grid-cols-1 gap-4 px-4 transition-all md:grid-flow-dense md:auto-rows-[minmax(18rem,auto)] md:grid-cols-6 xl:px-0">
          {items.map((item, i) => {
            const cardPadding =
              item.size === `narrow` ? `p-6 md:p-7` : `p-7 md:p-8`;
            const cardClass = `${cardBase} ${cardPadding}`;
            return (
              <MagicCard
                key={i}
                className={`${item.colSpan} group flex h-full rounded-2xl p-[2px]`}
                gradientColor="oklch(0.592 0.2157 349.761)"
              >
                <BentoGridItem
                  className={cardClass}
                  title={item.title}
                  animated={false}
                  description={item.description}
                />
              </MagicCard>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
