import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

import { MagicCard } from '@/components/magicui/magic-card';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

// Icon + title
const TitleWithIcon: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex items-center gap-3">
    <div className="bg-white/85 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-sm ring-1 ring-black/5 dark:bg-black/50">
      {icon}
    </div>
    <span className="text-2xl font-extrabold tracking-tight text-black dark:text-white md:text-2xl">
      {text}
    </span>
  </div>
);

// Badges
const Badges: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <ul className={`mt-4 flex flex-wrap gap-2`}>
      {tags.map((t) => (
        <li
          key={t}
          className={`rounded border border-pink-300/70 bg-pink-50 px-3 py-1 text-sm text-pink-700 dark:border-pink-400/40 dark:bg-pink-400/10 dark:text-pink-200`}
        >
          {t}
        </li>
      ))}
    </ul>
  );
};

// Shared card design
const cardBase = `h-full flex flex-col justify-between rounded-2xl border border-pink-300/70 bg-white/90 shadow-sm ring-1 ring-transparent hover:border-pink-400 hover:shadow-lg hover:ring-pink-300/40 dark:border-pink-400/40 dark:bg-neutral-900/70`;

// Type to make the size explicit, helps with padding layout to prevent overflow
type ItemSize = 'wide' | 'narrow';

export default function WhatWeAreCooking() {
  const items: Array<{
    title: React.ReactNode; // Can include icon just a react node
    description: React.ReactNode; // Can include buttons, links, etc
    href: string; // Link to project page
    colSpan: string; // Tailwind col-span class
    size: ItemSize; // 'wide' or 'narrow' for padding purposes
  }> = [
    {
      title: (
        <TitleWithIcon
          icon={
            <Icon
              icon="tabler:clipboard-check"
              className="h-8 w-8 text-neutral-700 dark:text-neutral-300"
            />
          }
          text="SODA"
        />
      ),
      description: (
        <>
          <p className="text-balance mt-3 text-lg leading-relaxed md:text-xl">
            SODA is a cross-platform desktop software that helps researchers
            prepare and share FAIR peripheral nervous system (PNS) related data
            and models using the SPARC Data Structure (SDS) and the SPARC
            Portal.
          </p>
          <Badges tags={[`Desktop`, `FAIR`, `SDS`]} />
        </>
      ),
      href: `/sodaforsparc`,
      colSpan: `md:col-span-4`,
      size: `wide`,
    },
    {
      title: (
        <TitleWithIcon
          icon={
            <Icon
              icon="tabler:brain"
              className="h-8 w-8 text-neutral-700 dark:text-neutral-300"
            />
          }
          text="AI-READI"
        />
      ),
      description: (
        <>
          <p className="text-balance mt-3 line-clamp-4 text-base leading-relaxed md:text-lg">
            Generating a flagship AI-ready and ethically-sourced dataset to
            support future AI-driven discoveries in diabetes.
          </p>
          <Badges tags={[`Platform`, `Guidelines`, `Standards`, `FAIR`]} />
        </>
      ),
      href: `/aireadi`,
      colSpan: `md:col-span-2`,
      size: `narrow`,
    },
    {
      title: (
        <TitleWithIcon
          icon={
            <Icon
              icon="tabler:vector-triangle"
              className="h-8 w-8 text-neutral-700 dark:text-neutral-300"
            />
          }
          text="Posters.science"
        />
      ),
      description: (
        <>
          <p className="text-balance mt-3 line-clamp-4 text-base leading-relaxed md:text-lg">
            A free, open-source platform for sharing and discovering scientific
            posters, promoting collaboration and turning them into enduring
            research assets.
          </p>
          <Badges tags={[`Platform`, `Guidelines`]} />
        </>
      ),
      href: `/posters-science`,
      colSpan: `md:col-span-2`,
      size: `narrow`,
    },
    {
      title: (
        <TitleWithIcon
          icon={
            <Icon
              icon="tabler:microscope"
              className="h-8 w-8 text-neutral-700 dark:text-neutral-300"
            />
          }
          text="Eye ACT"
        />
      ),
      description: (
        <>
          <p className="text-balance mt-3 text-lg leading-relaxed md:text-xl">
            Eye ACT uses the Envision Portal to study how eye diseases like
            glaucoma and diabetic retinopathy may signal early Alzheimer&apos;s,
            advancing AI-driven research under FAIR principles.
          </p>
          <Badges tags={[`Platform`, `Standards`, `Guidelines`]} />
        </>
      ),
      href: `/eyeact`,
      colSpan: `md:col-span-4`,
      size: `wide`,
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
        What we are cooking
      </h2>

      <BentoGrid className="duration-[2s] mx-auto max-w-screen-xl grid-cols-1 gap-4 px-4 transition-all md:grid-flow-dense md:auto-rows-[minmax(18rem,auto)] md:grid-cols-6 xl:px-0">
        {items.map((item, i) => {
          const cardPadding =
            item.size === `narrow` ? `p-6 md:p-7` : `p-7 md:p-8`;
          const cardClass = `${cardBase} ${cardPadding}`;
          return (
            <Link key={i} href={item.href} className={`${item.colSpan} group`}>
              <MagicCard
                className="flex h-full rounded-2xl p-0"
                gradientColor="oklch(71.8% 0.202 349.761)"
              >
                <BentoGridItem
                  className={cardClass}
                  title={item.title}
                  description={item.description}
                />
              </MagicCard>
            </Link>
          );
        })}
      </BentoGrid>

      <div className="flex flex-col items-center justify-center space-x-4 pt-10">
        <p className="font-asap text-xl">
          There is a lot more in the pipeline!
        </p>
        <Link href="/projects" className="my-4">
          <button
            type="button"
            className="w-max rounded-md border-none bg-black px-5 py-3 text-center text-base font-semibold text-white ring-2 ring-transparent ring-offset-2 transition duration-200 ease-in-out hover:ring-pink-600 focus:ring-pink-600"
            data-umami-event="Home page link"
            data-umami-event-value="Explore our projects button"
          >
            Explore our projects
          </button>
        </Link>
      </div>
    </section>
  );
}
