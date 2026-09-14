import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import authorsData from '@/assets/data/authors.json';

type FeaturedProps = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  timeToRead: number;
  heroImage: string;
  imageAuthor?: string;
  category?: string;
  authors?: string[];
};

export default function BlogFeatured({
  slug,
  title,
  subtitle,
  date,
  timeToRead,
  heroImage,
  imageAuthor,
  category,
  authors,
}: FeaturedProps) {
  const [authorHovered, setAuthorHovered] = useState(false);

  const resolvedAuthors = (authors ?? []).flatMap((id) => {
    const data = authorsData[id as keyof typeof authorsData];
    return data ? [{ id, ...data }] : [];
  });

  return (
    <article
      className="group relative mx-auto w-full overflow-hidden rounded-2xl border border-slate-200 bg-white"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Link href={`/blog/${slug}`} className="block" tabIndex={-1} aria-hidden>
        <div className="relative aspect-video max-h-105 w-full overflow-hidden bg-slate-100 md:aspect-5/2 md:max-h-110 lg:aspect-21/9 lg:max-h-115">
          <Image
            src={heroImage}
            alt={imageAuthor || title}
            fill
            sizes="(min-width:1280px) 1100px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-black/0 to-black/0" />
        </div>
      </Link>

      <div className="p-5 sm:p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-600">
          {resolvedAuthors.length > 0 && (
            <>
              <div
                className="relative z-10 flex items-center gap-1.5"
                onMouseEnter={() => setAuthorHovered(true)}
                onMouseLeave={() => setAuthorHovered(false)}
              >
                <Link
                  href={`/authors/${resolvedAuthors[0].id}`}
                  className="flex -space-x-1.5 transition-opacity hover:opacity-80"
                  tabIndex={-1}
                  aria-hidden
                >
                  {resolvedAuthors.slice(0, 3).map((author) => (
                    <div
                      key={author.name}
                      className="relative h-6 w-6 overflow-hidden rounded-full ring-2 ring-white"
                    >
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        fill
                        sizes="24px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </Link>
                <span>
                  {resolvedAuthors.map((author, i) => (
                    <span key={author.id}>
                      {i > 0 && <span className="mr-0.5">,</span>}
                      <Link
                        href={`/authors/${author.id}`}
                        className="hover:underline"
                      >
                        {author.name}
                      </Link>
                    </span>
                  ))}
                </span>
              </div>
              <span className="text-slate-300 select-none">•</span>
            </>
          )}
          <time dateTime={date}>{dayjs(date).format(`MMMM D, YYYY`)}</time>
          <span className="text-slate-300 select-none">•</span>
          <span>{timeToRead} min read</span>
          {category && (
            <>
              <span className="text-slate-300 select-none">•</span>
              <div
                aria-label={`View posts in ${category} category`}
                className="rounded-full border border-slate-300 px-2 py-0.5 text-[11px] font-medium text-slate-700 hover:border-slate-400 hover:text-slate-900"
              >
                {category}
              </div>
            </>
          )}
        </div>

        <h2
          className={`text-2xl leading-tight font-bold text-balance text-slate-900 transition-all group-hover:underline sm:text-3xl ${authorHovered ? `` : `group-hover:text-primary`}`}
        >
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 max-w-3xl text-base text-slate-700 sm:text-lg">
            {subtitle}
          </p>
        )}

        <span
          className={`mt-4 inline-flex items-center text-sm font-medium underline-offset-4 group-hover:underline ${authorHovered ? `` : `group-hover:text-primary`}`}
        >
          Read the full story
          <Icon
            icon="solar:arrow-right-broken"
            className="ml-1 inline-block h-4 w-4"
            aria-hidden
          />
        </span>
      </div>

      <Link
        href={`/blog/${slug}`}
        className="absolute inset-0"
        aria-label={title}
      />
    </article>
  );
}
