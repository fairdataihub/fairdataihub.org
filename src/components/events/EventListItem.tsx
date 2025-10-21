// components/events/EventListItem.tsx
'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import EventDates from '@/components/events/EventDates';

type ItemProps = {
  slug: string;
  title: string;
  subtitle?: string;
  startDateTime: string;
  endDateTime: string;
  type?: string;
  location?: string;
  isPast?: boolean;
  heroImage?: string;
};

const cardV = { rest: { y: 0 }, hover: { y: -2 } };
const titleV = { rest: { y: 0 }, hover: { y: -1 } };

export default function EventListItem({
  slug,
  title,
  subtitle,
  startDateTime,
  endDateTime,
  type,
  location,
  isPast = false,
  heroImage,
}: ItemProps) {
  return (
    <motion.li
      whileHover="hover"
      animate={{ opacity: 1, y: 0, scale: 1 }}
      variants={cardV}
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ type: `spring`, stiffness: 240, damping: 26 }}
      className="group rounded-2xl border border-slate-200 bg-white p-3 sm:p-4"
    >
      {/* ✅ Single outer Link for the whole card */}
      <Link
        href={`/events/${slug}`}
        className="block rounded-xl focus:outline-none"
        aria-label={`Open event: ${title}`}
      >
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="w-28 shrink-0 sm:w-36">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/60">
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 7rem, 9rem"
                  priority={false}
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200" />
              )}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <motion.h3
              variants={titleV}
              transition={{ duration: 0.2 }}
              className="group-hover:text-primary relative line-clamp-2 text-[1.05rem] leading-snug font-semibold text-slate-900 sm:text-lg"
            >
              <span className="relative inline-block w-fit align-baseline group-hover:underline">
                {title}
              </span>
            </motion.h3>

            {subtitle && (
              <p className="mt-1 line-clamp-2 text-sm text-slate-700">
                {subtitle}
              </p>
            )}

            <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-700">
              <span className="inline-flex rounded-full border border-slate-300 px-2 py-0.5 font-semibold">
                {isPast ? `Past` : `Upcoming`}
              </span>

              <span className="bg-primary inline-flex items-center rounded-lg border-2 border-white px-2 py-0.5">
                <EventDates
                  startDateTime={startDateTime}
                  endDateTime={endDateTime}
                />
              </span>

              {type && (
                <span className="rounded-lg border border-slate-300 px-2 py-0.5">
                  {type}
                </span>
              )}
              {location && (
                <span className="rounded-lg border border-slate-300 px-2 py-0.5">
                  {location}
                </span>
              )}
            </div>

            <span className="group-hover:text-primary mt-3 inline-flex items-center text-sm font-medium underline-offset-4 group-hover:underline">
              {isPast ? `View recap` : `Learn more`}
              <Icon
                icon="solar:arrow-right-broken"
                className="ml-1 inline h-4 w-4"
                aria-hidden
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
