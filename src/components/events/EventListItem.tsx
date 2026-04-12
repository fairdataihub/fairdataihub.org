// components/events/EventListItem.tsx
'use client';

import { Icon } from '@iconify/react';
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
    <Link
      href={`/events/${slug}`}
      className="block rounded-xl focus:outline-none"
      aria-label={`Open event: ${title}`}
    >
      <div className="group rounded-2xl border border-slate-200 bg-white p-3 sm:p-4">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="w-28 shrink-0 sm:w-36">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/60">
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt=""
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 7rem, 9rem"
                  priority={false}
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200" />
              )}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex-items-center flex justify-between gap-6">
              <h3 className="group-hover:text-primary font-semibold text-slate-900 transition-all sm:text-lg">
                {title}
              </h3>

              <div className="flex w-max items-start gap-2 pt-1 text-xs">
                {type && (
                  <span className="group-hover:border-primary/50 w-max rounded-lg border border-slate-300 px-2 py-0.5 transition-all">
                    {type}
                  </span>
                )}
                {location && (
                  <span className="group-hover:border-primary/50 w-max rounded-lg border border-slate-300 px-2 py-0.5 transition-all">
                    {location}
                  </span>
                )}
              </div>
            </div>

            {subtitle && (
              <p className="line-clamp-2 text-sm text-slate-700">{subtitle}</p>
            )}

            <div className="mt-4 flex items-center justify-between gap-2 text-slate-700">
              <span className="group-hover:text-primary items-center text-sm font-medium transition-all">
                {isPast ? `View recap` : `Learn more`}
                <Icon
                  icon="solar:arrow-right-broken"
                  className="ml-1 inline h-4 w-4"
                  aria-hidden
                />
              </span>

              <span className="bg-primary items-center rounded-lg px-2 py-0.5 text-xs">
                <EventDates
                  startDateTime={startDateTime}
                  endDateTime={endDateTime}
                  short
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
