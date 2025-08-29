import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import wordsCount from 'words-count';

import PostEntry from '@/components/blog/postEntry';
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
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:px-10 sm:py-10">
      <Seo
        templateTitle={`${typeof tag === `string` && tag.toLowerCase() === `metadata-tag` ? `Metadata` : tag} - Tags`}
        templateUrl={`https://fairdataihub.org/tags/${tag}`}
        templateDescription={`FAIR Data Innovations Hub blog posts tagged with '${tag}'`}
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="mb-5 px-2 pt-5 sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          {filteredBlogList.length}
          {` `}
          {filteredBlogList.length == 1 ? `post` : `posts`} tagged with &quot;
          {typeof tag === `string` && tag.toLowerCase() === `metadata-tag`
            ? `Metadata`
            : tag}
          &quot;
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
        // /metadata is a reserved tag within nextjs
        tag: tag.toLowerCase() === `metadata` ? `metadata-tag` : tag,
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

    const t = params?.tag || ``;

    if (typeof t === `string`) {
      return tags.includes(
        `${t.toLowerCase() === `metadata-tag` ? `metadata` : t}`,
      );
    }

    return false;
  });

  // Return the posts data to the page as props
  return {
    props: {
      filteredBlogList,
    },
  };
};

export default Blog;
