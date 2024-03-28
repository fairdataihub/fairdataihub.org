import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

import Seo from '@/components/seo/seo';

interface ListOfTags {
  [key: string]: number;
}

interface TagsProps {
  [key: string]: ListOfTags;
}
interface TagEntry {
  tag: string;
  count: number;
}

interface AllTagsProps {
  [key: string]: TagEntry[];
}

// The Tags Page Content

const Tags: React.FC<TagsProps> = ({ tagsList }) => {
  const alphabet = `abcdefghijklmnopqrstuvwxyz`.split(``);

  const tagsWithLetter: AllTagsProps = {};

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

  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:px-10 sm:py-10">
      <Seo
        templateTitle="Tags"
        templateUrl="https://fairdataihub.org/tags"
        templateDescription="Updates from FAIR Data Innovations Hub and its team."
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="mb-5 w-full px-2 pt-5 sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">Tags</h1>
      </div>

      <div className="mb-2 flex w-full flex-col px-2 py-3  md:px-7 md:py-5 ">
        {Object.keys(tagsWithLetter).map((letter) => {
          return (
            <div className="mb-8 flex w-full flex-col" key={letter}>
              <h2 className="mb-4 text-3xl font-medium">{letter}</h2>

              <div className=" flex w-full flex-row flex-wrap">
                {tagsWithLetter[letter].map(({ tag, count }) => {
                  return (
                    <Link href={`/tags/${tag}`} key={tag} passHref>
                      <div
                        key={tag}
                        className="group mr-2 flex cursor-pointer items-center rounded-lg border border-slate-300 px-2 py-1 text-sm transition-all hover:border-light-accent hover:text-accent"
                      >
                        <div className="mr-2 font-medium">{tag}</div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 p-1 transition-all group-hover:bg-light-accent/20">
                          {count}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <hr className="mb-2 mt-8 border-slate-200" />
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

  // Return the posts data to the page as props
  return {
    props: {
      tagsList,
    },
  };
}

export default Tags;
