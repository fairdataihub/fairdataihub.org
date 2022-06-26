import fs from 'fs';
import matter from 'gray-matter';
import wordsCount from 'words-count';
import Link from 'next/link';

import dayjs from 'dayjs';

// The Blog Page Content
export default function Blog({ blogList }) {
  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col  overflow-hidden  px-5   sm:py-10 sm:px-10">
      <div className="mb-10">
        <h1 className="mb-2 text-center text-4xl font-bold sm:text-4xl">
          Latest Updates
        </h1>
        <h2 className="text-center text-xl">
          Updates, tips & opinions from the developers at FAIR Data Innovations
          Hub
        </h2>
      </div>

      {blogList.map((post) => {
        const { slug, frontmatter, timeToRead } = post;

        const { title, date, tags, subtitle } = frontmatter;

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

              <span className="text-sm text-gray-600">
                {timeToRead} min read
              </span>
            </div>

            <div className="flex  flex-col rounded-lg px-2 py-10 transition-all hover:bg-stone-100 hover:shadow-sm md:w-8/12 md:py-5 md:px-7">
              <div className="mb-1 flex flex-row items-center justify-between md:hidden ">
                <h3 className="  text-base font-medium text-slate-600 ">
                  {dayjs(date).format('MMMM D, YYYY')}
                </h3>

                <span className=" text-sm text-gray-600">
                  {timeToRead} min read
                </span>
              </div>

              <Link href={`/blog/${slug}`} passHref>
                <h2 className="text-url mb-1 cursor-pointer text-xl font-semibold">
                  {title}
                </h2>
              </Link>

              <p className="mt-2 mb-3 line-clamp-3">{subtitle}</p>

              <div className="flex w-full justify-between">
                <div className="flex flex-row items-center text-sm">
                  <h4 className="mr-2 text-sm font-bold">Tags: </h4>
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

    // Read the raw content of the file and parse the frontmatter
    const rawFileContent = fs.readFileSync(`blog/${fileName}`, `utf-8`);
    const timeToRead = Math.ceil(wordsCount(rawFileContent) / 265);

    const { data: frontmatter } = matter(rawFileContent);

    return {
      slug,
      frontmatter,
      timeToRead,
    };
  });

  // Return the posts data to the page as props
  return {
    props: {
      blogList,
    },
  };
}
