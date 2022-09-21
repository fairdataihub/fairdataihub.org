import fs from 'fs';
import matter from 'gray-matter';
import wordsCount from 'words-count';

import Head from 'next/head';

import PostEntry from '@/components/blog/postEntry';

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
  blogList: BlogList[];
}

// The Blog Page Content

const Blog: React.FC<BlogProps> = ({ blogList }) => {
  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:py-10 sm:px-10">
      <Head>
        <title>Blog - Fair Data Innovations Hub</title>
        <meta property="og:title" content="Blog - Fair Data Innovations Hub " />
        <meta name="twitter:title" content="Blog - Fair Data Innovations Hub" />

        <link rel="canonical" href="https://fairdataihub.org/blog" />
        <meta property="og:url" content="https://fairdataihub.org/blog" />
        <meta name="twitter:url" content="https://fairdataihub.org/blog" />

        <meta
          name="description"
          content="Updates from FAIR Data Innovations Hub and its team."
        />
        <meta
          property="og:description"
          content="Updates from FAIR Data Innovations Hub and its team."
        />
        <meta
          name="twitter:description"
          content="Updates from FAIR Data Innovations Hub and its team."
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
        <meta
          name="twitter:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
      </Head>

      <div className="mb-5 px-2 pt-5  sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          Latest Updates
        </h1>
        <h2 className="text-left text-xl">
          Updates, tips & opinions from the developers at FAIR Data Innovations
          Hub
        </h2>
      </div>

      <hr className="mx-6 my-2 border-dashed border-slate-200" />

      {blogList.map((post) => {
        const { slug, frontMatter, timeToRead } = post;

        const { title, date, tags, subtitle, category } = frontMatter;

        return (
          <PostEntry
            key={title}
            title={title}
            timeToRead={timeToRead}
            date={date}
            slug={slug}
            subtitle={subtitle}
            tags={tags}
            category={category}
          />
        );
      })}
    </section>
  );
};

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
    const a_date: any = dayjs(a.frontMatter.date, `YYYY-MM-DD`);
    const b_date: any = dayjs(b.frontMatter.date, `YYYY-MM-DD`);

    return b_date - a_date;
  });

  // Return the posts data to the page as props
  return {
    props: {
      blogList,
    },
  };
}

export default Blog;
