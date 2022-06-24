import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

import dayjs from 'dayjs';

// The Blog Page Content
export default function Blog({ blogList }) {
  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col  overflow-hidden  px-5  sm:p-4 sm:px-10 ">
      {blogList.map((post) => {
        const { slug, frontmatter } = post;

        const { title, author, category, date, bannerImage, tags, subtitle } =
          frontmatter;

        return (
          <article
            key={title}
            className="mb-2 flex w-full flex-col md:flex-row"
          >
            <div className="hidden w-full px-2 py-3 md:block md:w-3/12 md:px-7 md:py-5">
              <h3 className="mb-1 text-base font-medium text-slate-600">
                {dayjs(date).format('MMMM D, YYYY')}
              </h3>
            </div>

            <Link href={`/blog/${slug}`} passHref>
              <div className="flex cursor-pointer flex-col rounded-lg px-2 py-3 transition-all hover:bg-stone-100 hover:shadow-sm md:w-8/12 md:py-5 md:px-7">
                <h3 className="mb-1  text-base font-medium text-slate-600 md:hidden">
                  {dayjs(date).format('MMMM D, YYYY')}
                </h3>

                <h1 className="mb-1 cursor-pointer text-xl font-semibold">
                  {title}
                </h1>

                <p className="mt-2 mb-3 line-clamp-3">{subtitle}</p>

                <a href={`/blog/${slug}`} className="text-url text-base">
                  Read more →
                </a>
              </div>
            </Link>
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
    const { data: frontmatter } = matter(rawFileContent);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the posts data to the page as props
  return {
    props: {
      blogList,
    },
  };
}
