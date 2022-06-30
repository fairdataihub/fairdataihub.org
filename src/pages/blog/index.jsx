import fs from 'fs';
import matter from 'gray-matter';
import wordsCount from 'words-count';

import Link from 'next/link';
import Head from 'next/head';

import dayjs from 'dayjs';

// The Blog Page Content
export default function Blog({ blogList }) {
  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-xl flex-col  overflow-hidden  px-5   sm:py-10 sm:px-10">
      <Head>
        <title>Fair Data Innovations Hub</title>
        <meta property="og:title" content="Blog - Fair Data Innovations Hub " />
        <meta
          property="twitter:title"
          content="Blog - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/blog" />
        <meta property="og:url" content="https://fairdataihub.org/blog" />
        <meta property="twitter:url" content="https://fairdataihub.org/blog" />

        <meta
          name="description"
          content="Updates from FAIR Data Innovations Hub and its team."
        />
        <meta
          property="og:description"
          content="Updates from FAIR Data Innovations Hub and its team."
        />
        <meta
          property="twitter:description"
          content="Updates from FAIR Data Innovations Hub and its team."
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

      <div className="mb-10 pt-5 sm:pt-0">
        <h1 className="mb-2 text-center text-4xl font-bold sm:text-4xl">
          Latest Updates
        </h1>
        <h2 className="text-center text-xl">
          Updates, tips & opinions from the developers at FAIR Data Innovations
          Hub
        </h2>
      </div>

      {blogList.map((post) => {
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
                {dayjs(date).format('MMMM D, YYYY')}
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
                  {dayjs(date).format('MMMM D, YYYY')}
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
                    <span
                      key={tag}
                      className="mr-2 cursor-pointer rounded-lg border border-slate-300 px-1 transition-all hover:border-light-accent hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/blog/${slug}`} className="text-url text-base">
                  Read more →
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export async function getStaticProps() {
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
    const a_date = dayjs(a.frontMatter.date, 'YYYY-MM-DD');
    const b_date = dayjs(b.frontMatter.date, 'YYYY-MM-DD');

    return b_date - a_date;
  });

  // Return the posts data to the page as props
  return {
    props: {
      blogList,
    },
  };
}
