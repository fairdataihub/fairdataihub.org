import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import wordsCount from 'words-count';

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
    imageAuthor?: string;
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
    <section className="relative mx-auto mt-20 flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:px-10 sm:py-10">
      <Seo
        templateTitle={`${category} - Categories`}
        templateUrl={`https://fairdataihub.org/category/${category}`}
        templateDescription={`FAIR Data Innovations Hub blog posts under the '${category}' category.`}
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="mb-5 px-2 pt-5 sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          {category}
        </h1>
      </div>

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
