import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
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

// The Author Page Content
const Author: React.FC<BlogProps> = ({ filteredBlogList, authorInfo }) => {
  const router = useRouter();
  const { author } = router.query;

  return (
    <section className="relative mx-auto mt-20 flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:px-10 sm:py-10">
      <Seo
        templateTitle={`${authorInfo.name} - Authors`}
        templateUrl={`https://fairdataihub.org/authors/${author}`}
        templateDescription={`Blog posts by ${authorInfo.name} at FAIR Data Innovations Hub.`}
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="mb-5 px-2 pt-5 sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          {filteredBlogList.length}
          {` `}
          {filteredBlogList.length === 1 ? `post` : `posts`} {` `}
          {`written by`} {` `}
          {authorInfo.name}
        </h1>
        <Link
          href={authorInfo.href}
          passHref
          className="text-url cursor-pointer hover:underline"
          target={authorInfo.external ? `_blank` : `_self`}
          rel={authorInfo.external ? `noopener noreferrer` : undefined}
        >
          <h2 className="text-url cursor-pointer text-left hover:underline">
            View profile
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
            className="my-2"
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
            />
          </motion.div>
        );
      })}
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the posts from the `blog` directory
  const files = fs.readdirSync(`./blog`);

  const blogList = files.map((fileName) => {
    // Read the raw content of the file and parse the frontMatter
    const rawFileContent = fs.readFileSync(`blog/${fileName}`, `utf-8`);

    const { data: frontMatter } = matter(rawFileContent);

    return {
      frontMatter,
    };
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

  const paths = [];

  for (const author of authorsList) {
    paths.push({
      params: {
        author,
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get the posts from the `blog` directory
  const files = fs.readdirSync(`./blog`);

  const blogList = files.map((fileName) => {
    // Remove the .md extension and use the file name as the slug
    const slug = fileName.replace(`.md`, ``);

    // Read the raw content of the file and parse the frontMatter
    const rawFileContent = fs.readFileSync(`blog/${fileName}`, `utf-8`);
    const timeToRead = Math.ceil(wordsCount(rawFileContent) / 265);

    const { data: frontMatter } = matter(rawFileContent);

    return {
      slug,
      frontMatter,
      timeToRead,
    };
  });

  // sort the posts by date in descending order
  blogList.sort((a, b) => {
    const a_date: any = dayjs(a.frontMatter.date, `YYYY-MM-DD`);
    const b_date: any = dayjs(b.frontMatter.date, `YYYY-MM-DD`);

    return b_date - a_date;
  });

  const filteredBlogList = blogList.filter((post) => {
    const { authors } = post.frontMatter;

    return authors && authors.includes(params?.author as string);
  });

  // Get author information
  const authorInfo = authorsJSON[params?.author as string];

  // Return the posts data to the page as props
  return {
    props: {
      filteredBlogList,
      authorInfo,
    },
  };
};

export default Author;
