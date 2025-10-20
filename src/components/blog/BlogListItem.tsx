import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
}: ListItemProps) {
  return (
    <motion.li
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardV}
      transition={{ type: `spring`, stiffness: 220, damping: 24 }}
      className="group relative rounded-2xl border border-slate-200 bg-white p-3 sm:p-4"
    >
      <Link href={`/blog/${slug}`}>
        <div className="flex gap-4 sm:gap-5">
          <div
            aria-label={title}
            className="relative aspect-[16/10] w-32 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:w-44 lg:w-52"
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

          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
              <time dateTime={date}>{dayjs(date).format(`MMM D, YYYY`)}</time>
              <span className="text-slate-300 select-none">•</span>
              <span>{timeToRead} min read</span>
              {category && (
                <>
                  <span className="text-slate-300 select-none">•</span>
                  <div
                    aria-label={`View posts in ${category} category`}
                    className="rounded-full border border-slate-300 px-2 py-0.5 text-[10px] font-medium text-slate-700 hover:border-slate-400 hover:text-slate-900"
                  >
                    {category}
                  </div>
                </>
              )}
            </div>

            <motion.h3
              variants={titleV}
              transition={{ duration: 0.2 }}
              className="group-hover:text-primary line-clamp-2 text-[1.05rem] leading-snug font-semibold text-slate-900 group-hover:underline sm:text-lg"
            >
              {title}
            </motion.h3>

            {subtitle && (
              <p className="mt-1 line-clamp-2 text-sm text-slate-700 sm:line-clamp-2 sm:text-[0.975rem]">
                {subtitle}
              </p>
            )}

            {tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag) => {
                  // const target =
                  //   tag.toLowerCase() === `metadata` ? `metadata-tag` : tag;
                  return (
                    <div
                      key={tag}
                      className="inline-flex items-center rounded-lg border border-slate-300 px-2 py-1 text-[11px] text-slate-700 hover:border-slate-400 hover:text-slate-900"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
