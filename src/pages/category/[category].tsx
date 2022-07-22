import fs from "fs";
import matter from "gray-matter";
import wordsCount from "words-count";

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import PostEntry from "@/components/blog/postEntry";

import dayjs from "dayjs";

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

// The Blog Page Content

const Blog: React.FC<BlogProps> = ({ filteredBlogList }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:py-10 sm:px-10">
      <Head>
        <title>{category} - Categories | Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content={`${category} - Categories | Fair Data Innovations Hub`}
        />
        <meta
          property="twitter:title"
          content={`${category} - Categories | Fair Data Innovations Hub`}
        />

        <link
          rel="canonical"
          href={`https://fairdataihub.org/category/${category}`}
        />
        <meta
          property="og:url"
          content={`https://fairdataihub.org/category/${category}`}
        />
        <meta
          property="twitter:url"
          content={`https://fairdataihub.org/category/${category}`}
        />

        <meta
          name="description"
          content={`FAIR Data Innovations Hub blog posts under the '${category}' category.`}
        />
        <meta
          property="og:description"
          content={`FAIR Data Innovations Hub blog posts under the '${category}' category.`}
        />
        <meta
          property="twitter:description"
          content={`FAIR Data Innovations Hub blog posts under the '${category}' category.`}
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

      <div className="mb-5 px-2 pt-5 sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          {category}
        </h1>
      </div>

      <hr className="mx-6 my-2 border-dashed border-slate-200" />

      {filteredBlogList.map((post) => {
        const { slug, frontMatter, timeToRead } = post;

        const { title, date, tags, subtitle } = frontMatter;

        return (
          <PostEntry
            key={title}
            title={title}
            timeToRead={timeToRead}
            date={date}
            slug={slug}
            subtitle={subtitle}
            tags={tags}
            category=""
          />
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

  const categoriesList: string[] = [];

  for (const post of blogList) {
    const { frontMatter } = post;

    const { category } = frontMatter;

    if (category && !categoriesList.includes(category)) {
      categoriesList.push(category);
    }
  }

  const paths = [];

  for (const category of categoriesList) {
    paths.push({
      params: {
        category,
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
    const { category } = post.frontMatter;

    return category === params?.category;
  });

  // Return the posts data to the page as props
  return {
    props: {
      filteredBlogList,
    },
  };
};

export default Blog;
