import fs from 'fs';
import matter from 'gray-matter';
import wordsCount from 'words-count';

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import dayjs from 'dayjs';

type BlogList = {
  slug: string;
  timeToRead: number;
  frontMatter: {
    title: string;
    date: string;
    tags: string[];
    subtitle: string;
    category: string;
  };
};

interface BlogProps {
  filteredBlogList: BlogList[];
}

interface ListOfTags {
  [key: string]: number;
}

// The Blog Page Content

const Blog: React.FC<BlogProps> = ({ filteredBlogList }) => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:py-10 sm:px-10">
      <Head>
        <title>{tag} - Tags | Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content={`${tag} - Tags | Fair Data Innovations Hub`}
        />
        <meta
          property="twitter:title"
          content={`${tag} - Tags | Fair Data Innovations Hub`}
        />

        <link rel="canonical" href="https://fairdataihub.org/blog" />
        <meta property="og:url" content="https://fairdataihub.org/blog" />
        <meta property="twitter:url" content="https://fairdataihub.org/blog" />

        <meta
          name="description"
          content={`FAIR Data Innovations Hub blog posts tagged with '${tag}'`}
        />
        <meta
          property="og:description"
          content={`FAIR Data Innovations Hub blog posts tagged with '${tag}'`}
        />
        <meta
          property="twitter:description"
          content={`FAIR Data Innovations Hub blog posts tagged with '${tag}'`}
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
        <meta
          property="twitter:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
      </Head>

      <div className="mb-5 px-2 pt-5  sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          {filteredBlogList.length}
          {` `}
          {filteredBlogList.length == 1 ? `post` : `posts`} tagged with &quot;
          {tag} &quot;
        </h1>
        <Link href={`/tags`} passHref>
          <h2 className="text-url cursor-pointer text-left hover:underline">
            View all tags
          </h2>
        </Link>
      </div>

      <hr className="mx-6 my-2 border-dashed border-slate-200" />

      {filteredBlogList.map((post) => {
        const { slug, frontMatter, timeToRead } = post;

        const { title, date, tags, subtitle, category } = frontMatter;

        return (
          <article
            key={title}
            className="mb-2 flex w-full flex-col md:flex-row"
          >
            {/* Left panel */}
            <div className="hidden w-full flex-col px-2 py-3 md:flex md:w-3/12 md:px-7 md:py-5 ">
              <h3 className="mb-1 mt-1 text-base font-medium text-slate-600">
                {dayjs(date).format(`MMMM D, YYYY`)}
              </h3>

              <h4 className="text-url mb-1 cursor-pointer text-base font-semibold hover:underline">
                {category}
              </h4>

              <span className="text-sm text-gray-600">
                {timeToRead} min read
              </span>
            </div>

            <div className="flex flex-col rounded-lg px-2 py-7 transition-all hover:bg-stone-100 hover:shadow-sm md:w-8/12 md:py-5 md:px-7">
              <h3 className="text-url mb-1 cursor-pointer text-base font-semibold hover:underline md:hidden">
                {category}
              </h3>

              <div className="mb-1 flex flex-row items-center justify-between md:hidden ">
                <h4 className="text-base font-medium text-slate-600 ">
                  {dayjs(date).format(`MMMM D, YYYY`)}
                </h4>

                <span className=" text-sm text-gray-600">
                  {timeToRead} min read
                </span>
              </div>

              <hr className="my-1 border-dashed border-slate-200 md:hidden" />

              <Link href={`/blog/${slug}`} passHref>
                <h2 className="text-url mb-1 mt-4 cursor-pointer text-2xl font-semibold hover:underline md:mt-0 md:text-xl">
                  {title}
                </h2>
              </Link>

              <p className="mt-2 mb-3 ">{subtitle}</p>

              <div className="flex w-full justify-between">
                <div className=" hidden flex-row items-center text-sm md:flex">
                  <h3 className="mr-2 text-sm font-bold">Tags: </h3>
                  {tags.map((tag) => (
                    <Link href={`/tags/${tag}`} key={tag}>
                      <span className="mr-2 cursor-pointer rounded-lg border border-slate-300 px-1 transition-all hover:border-light-accent hover:text-accent">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
                <a
                  href={`/blog/${slug}`}
                  className="text-url text-base hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          </article>
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

  const tagsList: ListOfTags = {};

  for (const post of blogList) {
    const { frontMatter } = post;

    const { tags } = frontMatter;

    tags.forEach((tag: string) => {
      if (tag in tagsList) {
        tagsList[tag]++;
      } else {
        tagsList[tag] = 1;
      }
    });
  }

  const paths = [];

  for (const tag in tagsList) {
    paths.push({
      params: {
        tag,
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
    const { tags } = post.frontMatter;

    return tags.includes(`${params?.tag}`);
  });

  // Return the posts data to the page as props
  return {
    props: {
      filteredBlogList,
    },
  };
};

export default Blog;
