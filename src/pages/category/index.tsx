import fs from 'fs';
import matter from 'gray-matter';

import Link from 'next/link';
import Head from 'next/head';

interface FuncProps {
  categoriesList: string[];
}

const Categories: React.FC<FuncProps> = ({ categoriesList }) => {
  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col  overflow-hidden  px-5   sm:py-10 sm:px-10">
      <Head>
        <title>Categories - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="Categories - Fair Data Innovations Hub "
        />
        <meta
          property="twitter:title"
          content="Categories - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/category" />
        <meta property="og:url" content="https://fairdataihub.org/category" />
        <meta
          property="twitter:url"
          content="https://fairdataihub.org/category"
        />

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

      <div className="mb-5 w-full px-2 pt-5 sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          Category
        </h1>
        <h2>All topics published by the FAIR Data Innovations Hub</h2>
      </div>

      <div className="mb-2 flex w-full flex-col px-2 py-3  md:px-7 md:py-5 ">
        <ul className="flex flex-col">
          {categoriesList.map((category) => {
            return (
              <Link href={`/category/${category}`} key={category}>
                <li className="text-url my-2 w-max cursor-pointer text-xl font-semibold hover:underline">
                  {category}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export async function getStaticProps() {
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

  return {
    props: {
      categoriesList,
    },
  };
}

export default Categories;
