import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

import Seo from '@/components/seo/seo';

interface FuncProps {
  categoriesList: string[];
}

const Categories: React.FC<FuncProps> = ({ categoriesList }) => {
  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:px-10 sm:py-10">
      <Seo
        templateTitle="Categories"
        templateUrl="https://fairdataihub.org/category"
        templateDescription="Updates from FAIR Data Innovations Hub and its team."
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="mb-5 w-full px-2 pt-5 sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          Category
        </h1>
        <h2>All topics published by the FAIR Data Innovations Hub</h2>
      </div>

      <div className="mb-2 flex w-full flex-col px-2 py-3 md:px-7 md:py-5">
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
