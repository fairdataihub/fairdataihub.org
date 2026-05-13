import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import authorsData from '@/assets/data/authors.json';
import { slugifyTag } from '@/lib/utils';

type ListItemProps = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  timeToRead: number;
  heroImage: string;
  imageAuthor?: string;
  tags?: string[];
  category?: string;
  authors?: string[];
};

const cardV = {
  rest: { y: 0, boxShadow: `0 0 0 rgba(0,0,0,0)` },
  hover: { y: -3, boxShadow: `0 10px 20px rgba(0,0,0,0.06)` },
};
const thumbV = { rest: { scale: 1 }, hover: { scale: 1.03 } };
const titleV = { rest: { y: 0 }, hover: { y: -1 } };

export default function BlogListItem({
  slug,
  title,
  subtitle,
  date,
  timeToRead,
  heroImage,
  imageAuthor,
  tags = [],
  category,
  authors,
}: ListItemProps) {
  const resolvedAuthors = (authors ?? []).flatMap((id) => {
    const data = authorsData[id as keyof typeof authorsData];
    return data ? [{ id, ...data }] : [];
  });

  return (
    <motion.li
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardV}
      transition={{ type: `spring`, stiffness: 220, damping: 24 }}
      className="group relative rounded-2xl border border-slate-200 bg-white p-3 sm:p-4"
    >
      <div className="grid grid-cols-[auto_1fr] items-start gap-4 sm:gap-5">
        <div
          aria-hidden
          className="relative col-start-1 row-span-2 aspect-[16/10] w-32 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:w-44 lg:w-52"
        >
          <motion.div
            variants={thumbV}
            transition={{ duration: 0.25 }}
            className="h-full w-full"
          >
            <Image
              src={heroImage}
              alt={imageAuthor || title}
              fill
              sizes="(min-width:1280px) 208px, (min-width:1024px) 176px, 128px"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="col-start-2 row-start-1 block">
          <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600">
            {resolvedAuthors.length > 0 && (
              <>
                <div className="relative z-10 flex items-center gap-1">
                  <Link
                    href={`/authors/${resolvedAuthors[0].id}`}
                    className="flex -space-x-1 transition-opacity hover:opacity-80"
                    tabIndex={-1}
                    aria-hidden
                  >
                    {resolvedAuthors.slice(0, 3).map((author) => (
                      <div
                        key={author.name}
                        className="relative h-5 w-5 overflow-hidden rounded-full ring-2 ring-white"
                      >
                        <Image
                          src={author.avatar}
                          alt={author.name}
                          fill
                          sizes="20px"
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
            <time dateTime={date}>{dayjs(date).format(`MMM D, YYYY`)}</time>
            <span className="text-slate-300 select-none">•</span>
            <span>{timeToRead} min read</span>
          </div>

          <motion.h3
            variants={titleV}
            transition={{ duration: 0.2 }}
            className="group-hover:text-primary line-clamp-2 text-[1.05rem] leading-snug font-semibold text-slate-900 group-hover:underline sm:text-lg"
          >
            {title}
          </motion.h3>

          {subtitle && (
            <p className="mt-1 line-clamp-2 text-sm text-slate-700 sm:text-[0.975rem]">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative z-10 col-start-2 row-start-2 flex flex-wrap items-center gap-2">
          {category && (
            <Link
              href={`/category/${encodeURIComponent(category)}`}
              aria-label={`View posts in ${category} category`}
              className="bg-primary rounded-lg px-2 py-1 text-xs font-medium text-white hover:bg-pink-600"
            >
              {category}
            </Link>
          )}

          <span className="text-slate-300 select-none">|</span>

          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${slugifyTag(tag)}`}
              className="inline-flex items-center rounded-lg border border-slate-300 px-2 py-1 text-xs text-slate-700 transition-all hover:border-pink-400 hover:text-slate-900"
              aria-label={`View posts tagged ${tag}`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <Link
        href={`/blog/${slug}`}
        className="absolute inset-0"
        aria-label={`Open post: ${title}`}
      />
    </motion.li>
  );
}
