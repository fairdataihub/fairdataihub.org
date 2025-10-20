import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type FeaturedProps = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  timeToRead: number;
  heroImage: string;
  imageAuthor?: string;
  category?: string;
};

const cardV = {
  rest: { y: 0, boxShadow: `0 0 0 rgba(0,0,0,0)` },
  hover: { y: -4, boxShadow: `0 10px 24px rgba(0,0,0,0.08)` },
};
const mediaV = { rest: { scale: 1 }, hover: { scale: 1.02 } };
const titleV = { rest: { y: 0 }, hover: { y: -1 } };

export default function BlogFeatured({
  slug,
  title,
  subtitle,
  date,
  timeToRead,
  heroImage,
  imageAuthor,
  category,
}: FeaturedProps) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardV}
      transition={{ type: `spring`, stiffness: 220, damping: 24 }}
      className="group mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Link href={`/blog/${slug}`} className="relative block">
        <motion.div
          variants={mediaV}
          transition={{ duration: 0.25 }}
          className="relative aspect-[16/9] max-h-[420px] w-full overflow-hidden bg-slate-100 md:aspect-[5/2] md:max-h-[440px] lg:aspect-[21/9] lg:max-h-[460px]"
        >
          <Image
            src={heroImage}
            alt={imageAuthor || title}
            fill
            sizes="(min-width:1280px) 1100px, 100vw"
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="p-5 sm:p-6">
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-600">
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

          <motion.h2
            variants={titleV}
            transition={{ duration: 0.2 }}
            className="group-hover:text-primary text-2xl leading-tight font-bold text-balance text-slate-900 group-hover:underline sm:text-3xl md:text-[1.9rem]"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <p className="mt-2 max-w-3xl text-base text-slate-700 md:text-lg">
              {subtitle}
            </p>
          )}

          <div className="mt-4">
            <div className="group-hover:text-primary text-sm font-medium underline-offset-4 hover:underline">
              <span>Read the full story</span>
              <Icon
                icon="solar:arrow-right-broken"
                className="ml-1 inline-block h-4 w-4"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
