import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import wordsCount from 'words-count';

import BlogListItem from '@/components/blog/BlogListItem';
import Seo from '@/components/seo/seo';

const authorsJSON = require(`../../assets/data/authors.json`);

type BlogList = {
  slug: string;
  timeToRead: number;
  frontMatter: {
    title: string;
    date: string;
    authors: string[];
    tags: string[];
    subtitle: string;
    category: string;
    heroImage: string;
    imageAuthor: string;
  };
};

interface BlogProps {
  filteredBlogList: BlogList[];
  authorInfo: {
    name: string;
    href: string;
    external: boolean;
    avatar: string;
    social: string;
  };
}

const Author: React.FC<BlogProps> = ({ filteredBlogList, authorInfo }) => {
  const router = useRouter();
  const { author } = router.query;

  return (
    <div className="relative pt-24">
      <Seo
        templateTitle={`${authorInfo.name} - Authors`}
        templateUrl={`https://fairdataihub.org/authors/${author}`}
        templateDescription={`Blog posts by ${authorInfo.name} at FAIR Data Innovations Hub.`}
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-180 w-250 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(211,75,171,0.30),rgba(211,75,171,0.12)_40%,transparent_75%)] blur-3xl" />
      </div>

      <section className="container mx-auto max-w-7xl px-4 pt-8 pb-16">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: `easeOut` }}
          className="mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-slate-200 sm:h-20 sm:w-20">
              <Image
                src={authorInfo.avatar}
                alt={authorInfo.name}
                fill
                sizes="(min-width:640px) 80px, 64px"
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-tight text-stone-900 sm:text-4xl dark:text-stone-100">
                {filteredBlogList.length}
                {` `}
                {filteredBlogList.length === 1 ? `post` : `posts`} by{` `}
                {authorInfo.name}
              </h1>
              <Link
                href={authorInfo.href}
                passHref
                className="text-url cursor-pointer text-sm hover:underline"
                target={authorInfo.external ? `_blank` : `_self`}
                rel={authorInfo.external ? `noopener noreferrer` : undefined}
              >
                View profile
              </Link>
            </div>
          </div>

          <div className="via-primary/60 mt-6 h-px w-full bg-linear-to-r from-transparent to-transparent" />
        </motion.header>

        <AnimatePresence mode="popLayout">
          <motion.ul layout initial={false} className="list-none space-y-4">
            {filteredBlogList.map(({ slug, frontMatter, timeToRead }, idx) => (
              <motion.div
                key={slug}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.2,
                    delay: idx * 0.02,
                    ease: `easeOut`,
                  },
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                  margin: `0px 0px 150px 0px`,
                }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
              >
                <BlogListItem
                  slug={slug}
                  title={frontMatter.title}
                  subtitle={frontMatter.subtitle}
                  date={frontMatter.date}
                  timeToRead={timeToRead}
                  heroImage={frontMatter.heroImage}
                  imageAuthor={frontMatter.imageAuthor}
                  tags={frontMatter.tags}
                  category={frontMatter.category}
                  authors={frontMatter.authors}
                />
              </motion.div>
            ))}
          </motion.ul>
        </AnimatePresence>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(`./blog`);

  const blogList = files.map((fileName) => {
    const rawFileContent = fs.readFileSync(`blog/${fileName}`, `utf-8`);
    const { data: frontMatter } = matter(rawFileContent);
    return { frontMatter };
  });

  const authorsList: string[] = [];

  for (const post of blogList) {
    const { frontMatter } = post;
    const { authors } = frontMatter;
    if (authors) {
      authors.forEach((author: string) => {
        if (!authorsList.includes(author)) {
          authorsList.push(author);
        }
      });
    }
  }

  const paths = authorsList.map((author) => ({ params: { author } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const files = fs.readdirSync(`./blog`);

  const blogList = files.map((fileName) => {
    const slug = fileName.replace(`.md`, ``);
    const rawFileContent = fs.readFileSync(`blog/${fileName}`, `utf-8`);
    const timeToRead = Math.ceil(wordsCount(rawFileContent) / 265);
    const { data: frontMatter } = matter(rawFileContent);
    return { slug, frontMatter, timeToRead };
  });

  blogList.sort((a, b) => {
    const a_date: any = dayjs(a.frontMatter.date, `YYYY-MM-DD`);
    const b_date: any = dayjs(b.frontMatter.date, `YYYY-MM-DD`);
    return b_date - a_date;
  });

  const filteredBlogList = blogList.filter((post) => {
    const { authors } = post.frontMatter;
    return authors && authors.includes(params?.author as string);
  });

  const authorInfo = authorsJSON[params?.author as string];

  return { props: { filteredBlogList, authorInfo } };
};

export default Author;
