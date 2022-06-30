import fs from 'fs';
import matter from 'gray-matter';

import Link from 'next/link';
import Head from 'next/head';

interface TagsProps {
  tagsList: string[];
}

// The Tags Page Content

const Tags: React.FC<TagsProps> = ({ tagsList }) => {
  const alphabet = `abcdefghijklmnopqrstuvwxyz`.split(``);

  const tagsWithLetter: any = {};

  for (const letter of alphabet) {
    // if tag starts with letter, add to list
    for (const tag in tagsList) {
      if (tag.toLowerCase().startsWith(letter)) {
        if (!tagsWithLetter[letter]) {
          tagsWithLetter[letter] = [];
        }
        tagsWithLetter[letter].push({
          tag,
          count: tagsList[tag],
        });
      }
    }
  }

  console.log(tagsWithLetter);

  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col  overflow-hidden  px-5   sm:py-10 sm:px-10">
      <Head>
        <title>Tags - Fair Data Innovations Hub</title>
        <meta property="og:title" content="Tags - Fair Data Innovations Hub " />
        <meta
          property="twitter:title"
          content="Tags - Fair Data Innovations Hub"
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

      <div className="mb-5 w-full px-2 pt-5 sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">Tags</h1>
      </div>

      <div className="mb-2 flex w-full flex-col px-2 py-3  md:px-7 md:py-5 ">
        {Object.keys(tagsWithLetter).map((letter) => {
          return (
            <div className="mb-8 flex w-full flex-col" key={letter}>
              <h2 className="mb-4 text-3xl font-bold">{letter}</h2>

              <div className=" flex w-full flex-row flex-wrap">
                {tagsWithLetter[letter].map(({ tag, count }) => {
                  return (
                    <div
                      key={tag}
                      className="group mr-2 flex cursor-pointer items-center rounded-lg border border-slate-300 px-2 py-1 text-sm transition-all hover:border-light-accent hover:text-accent"
                    >
                      <div className="mr-2 font-medium">{tag}</div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 p-1 transition-all group-hover:bg-light-accent/20">
                        {count}
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr className="mt-8 mb-2 border-slate-200" />
            </div>
          );
        })}
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

  const tagsList: any = {};

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

  console.log(tagsList);

  // Return the posts data to the page as props
  return {
    props: {
      tagsList,
    },
  };
}

export default Tags;
