// components/events/EventFeatured.tsx
'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import EventDates from '@/components/events/EventDates';

type FeaturedProps = {
  slug: string;
  title: string;
  subtitle?: string;
  startDateTime: string;
  endDateTime: string;
  type?: string;
  location?: string;
  heroImage?: string;
};

const cardV = { rest: { y: 0 }, hover: { y: -4 } };
const titleV = { rest: { y: 0 }, hover: { y: -1 } };

export default function EventFeatured({
  slug,
  title,
  subtitle,
  startDateTime,
  endDateTime,
  type,
  location,
  heroImage,
}: FeaturedProps) {
  return (
    <Link
      href={`/events/${slug}`}
      className="group block"
      aria-label={`Open event: ${title}`}
    >
      <motion.article
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardV}
        transition={{ type: `spring`, stiffness: 220, damping: 24 }}
        className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white"
      >
        {heroImage ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={heroImage}
              alt=""
              fill
              priority={false}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 1200px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-black/0" />
          </div>
        ) : (
          <div className="h-24 w-full bg-[radial-gradient(ellipse_at_center,rgba(205,50,159,0.15),transparent_70%)] sm:h-28" />
        )}

        <div className="p-5 sm:p-6">
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <span className="bg-primary inline-flex items-center rounded-lg border border-white px-2 py-0.5">
              <EventDates
                startDateTime={startDateTime}
                endDateTime={endDateTime}
              />
            </span>
            {type && (
              <span className="rounded-full border border-slate-300 px-2 py-0.5 text-[11px]">
                {type}
              </span>
            )}
            {location && (
              <span className="rounded-full border border-slate-300 px-2 py-0.5 text-[11px]">
                {location}
              </span>
            )}
          </div>

          <motion.h2
            variants={titleV}
            transition={{ duration: 0.2 }}
            className="group-hover:text-primary text-2xl leading-tight font-bold text-balance text-slate-900 group-hover:underline sm:text-3xl"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <p className="mt-2 max-w-3xl text-base text-slate-700 sm:text-lg">
              {subtitle}
            </p>
          )}

          {/* Styled CTA, not a link (the whole card already is) */}
          <span className="group-hover:text-primary mt-4 inline-flex items-center text-sm font-medium underline-offset-4 group-hover:underline">
            View details
            <Icon
              icon="solar:arrow-right-broken"
              className="ml-1 inline-block h-4 w-4"
              aria-hidden
            />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
