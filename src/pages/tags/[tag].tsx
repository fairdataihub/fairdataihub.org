import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import wordsCount from 'words-count';

import { slugifyTag } from '@/lib/utils';

import BlogListItem from '@/components/blog/BlogListItem';
import Seo from '@/components/seo/seo';

type BlogList = {
  slug: string;
  timeToRead: number;
  frontMatter: {
    title: string;
    date: string;
    tags: string[];
    subtitle: string;
    category: string;
    heroImage: string;
    imageAuthor: string;
  };
};

interface BlogProps {
  filteredBlogList: BlogList[];
}

const isTagMatch = (raw: string, desiredSlug: string) =>
  slugifyTag(raw) === desiredSlug;

const labelFromSlug = (slug?: string | string[]) => {
  if (typeof slug !== `string`) return ``;
  if (slug === `metadata-tag`) return `Metadata`;
  return slug.replace(/-/g, ` `);
};

const Blog: React.FC<BlogProps> = ({ filteredBlogList }) => {
  const router = useRouter();
  const { tag } = router.query;

  const niceLabel = labelFromSlug(tag);

  return (
    <section className="relative mx-auto mt-20 flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:px-10 sm:py-10">
      <Seo
        templateTitle={`${niceLabel} - Tags`}
        templateUrl={`https://fairdataihub.org/tags/${tag}`}
        templateDescription={`FAIR Data Innovations Hub blog posts tagged with '${niceLabel}'`}
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="mb-5 px-2 pt-5 sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          {filteredBlogList.length}
          {` `}
          {filteredBlogList.length === 1 ? `post` : `posts`} tagged with &quot;
          {niceLabel}&quot;
        </h1>
        <Link href="/tags" passHref>
          <h2 className="text-url cursor-pointer text-left hover:underline">
            View all tags
          </h2>
        </Link>
      </div>

      <hr className="mx-6 my-2 border-dashed border-slate-200" />

      {filteredBlogList.map((post, idx) => {
        const { slug, frontMatter, timeToRead } = post;

        return (
          <motion.div
            key={slug}
            layout
            className="my-2 list-none"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.2, delay: idx * 0.02, ease: `easeOut` },
            }}
            viewport={{ once: true, amount: 0.1, margin: `0px 0px 150px 0px` }}
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
            />
          </motion.div>
        );
      })}
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(`./blog`);

  // Accumulate slugified tags (stable across case/spacing)
  const tagCount: Record<string, number> = {};

  for (const fileName of files) {
    const raw = fs.readFileSync(`blog/${fileName}`, `utf-8`);
    const { data } = matter(raw);
    const tags: string[] = Array.isArray(data?.tags) ? data.tags : [];
    for (const t of tags) {
      const slug = slugifyTag(t);
      tagCount[slug] = (tagCount[slug] ?? 0) + 1;
    }
  }

  const paths = Object.keys(tagCount).map((slug) => ({
    params: { tag: slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const files = fs.readdirSync(`./blog`);

  const blogList: BlogList[] = files.map((fileName) => {
    const slug = fileName.replace(`.md`, ``);
    const raw = fs.readFileSync(`blog/${fileName}`, `utf-8`);
    const timeToRead = Math.ceil(wordsCount(raw) / 265);
    const { data: frontMatter } = matter(raw);

    return { slug, frontMatter, timeToRead } as BlogList;
  });

  blogList.sort((a, b) => {
    const aDate: any = dayjs(a.frontMatter.date, `YYYY-MM-DD`);
    const bDate: any = dayjs(b.frontMatter.date, `YYYY-MM-DD`);
    return bDate - aDate;
  });

  const desired = typeof params?.tag === `string` ? params.tag : ``;
  console.log(`desired`, desired);

  const filteredBlogList = blogList.filter((post) => {
    const tags: string[] = Array.isArray(post.frontMatter?.tags)
      ? post.frontMatter.tags
      : [];
    return tags.some((t) => isTagMatch(t, desired));
  });

  return { props: { filteredBlogList } };
};

export default Blog;
