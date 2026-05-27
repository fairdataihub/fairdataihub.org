import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { slugifyTag } from '@/lib/utils';

interface PostCardProps {
  title: string;
  timeToRead: number;
  date: string;
  slug: string;
  subtitle: string;
  tags: string[];
  category: string;
  heroImage: string;
  imageAuthor: string;
}

export default function PostCard({
  title,
  timeToRead,
  date,
  slug,
  subtitle,
  tags,
  category,
  heroImage,
  imageAuthor,
}: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: `spring`, stiffness: 120, damping: 18, mass: 0.6 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors focus-within:border-slate-300 hover:border-slate-300 hover:shadow-md"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Link
        href={`/blog/${slug}`}
        className="relative block"
        aria-label={title}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <Image
            src={heroImage}
            alt={imageAuthor || title}
            fill
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            priority={false}
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <time
            dateTime={date}
            itemProp="datePublished"
            className="whitespace-nowrap"
          >
            {dayjs(date).format(`MMMM D, YYYY`)}
          </time>
          <span className="mx-1 text-slate-300 select-none">•</span>
          <span className="whitespace-nowrap">{timeToRead} min read</span>

          {category ? (
            <>
              <span className="mx-1 hidden text-slate-300 select-none sm:inline">
                •
              </span>
              <Link
                href={`/category/${category}`}
                className="inline-flex items-center rounded-full border border-slate-300 px-2 py-0.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                {category}
              </Link>
            </>
          ) : null}
        </div>

        <Link href={`/blog/${slug}`} className="focus:outline-none">
          <h2
            itemProp="headline"
            className="line-clamp-2 text-xl leading-tight font-semibold text-slate-900 transition-colors group-hover:text-slate-950"
          >
            {title}
          </h2>
        </Link>

        {subtitle ? (
          <p className="line-clamp-3 text-slate-700" itemProp="description">
            {subtitle}
          </p>
        ) : null}

        {tags?.length ? (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${slugifyTag(tag)}`}
                className="inline-flex items-center rounded-lg border border-slate-300 px-2 py-1 text-xs text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                aria-label={`Tag: ${tag}`}
              >
                {tag}
              </Link>
            ))}
          </div>
        ) : null}

        <div className="pt-1">
          <Link
            href={`/blog/${slug}`}
            className="group-hover:text-primary focus-visible:ring-primary inline-flex items-center text-sm font-medium underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2"
          >
            <span>Read more</span>
            <Icon
              icon="solar:arrow-right-broken"
              className="ml-1 inline-block h-4 w-4"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
