import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
import wordsCount from 'words-count';

import BlogFeatured from '@/components/blog/BlogFeatured';
import BlogListItem from '@/components/blog/BlogListItem';
import Seo from '@/components/seo/seo';
import { TypingAnimation } from '@/components/ui/typing-animation';

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
    imageAuthor: string;
  };
};

interface BlogProps {
  blogList: BlogList[];
}

export default function Blog({ blogList }: BlogProps) {
  const [featured, ...rest] = blogList;

  return (
    <div className="relative pt-20">
      <Seo
        templateDescription="Explore the projects we build at the FAIR Data Innovations Hub—modern, open‑source tools and platforms that help researchers follow FAIR principles."
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[720px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(211,75,171,0.30),rgba(211,75,171,0.12)_40%,transparent_75%)] blur-3xl" />
      </div>
      <section className="container mx-auto max-w-screen-xl px-4 pt-8 pb-16">
        <Seo
          templateTitle="Blog"
          templateUrl="https://fairdataihub.org/blog"
          templateDescription="Updates from FAIR Data Innovations Hub and its team."
          templateImage="https://fairdataihub.org/thumbnails/index.png"
        />

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: `easeOut` }}
          className="mb-8 flex flex-col items-start gap-2 sm:mb-10 sm:justify-between"
        >
          <div className="flex flex-col">
            <h1 className="text-4xl font-black tracking-tight text-pretty text-stone-900 sm:text-5xl dark:text-stone-100">
              <span>Explore</span>
              {` `}
              <TypingAnimation
                words={[`New Tools`, `Guides`, `FAIR Practices`, `Updates`]}
                blinkCursor={true}
                pauseDelay={2000}
                loop
              />
            </h1>
            <p className="font-asap max-w-2xl text-lg text-stone-700 dark:text-stone-300">
              Updates, implementation guides, and FAIR practices from our team.
            </p>
          </div>
          <div className="via-primary/60 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
        </motion.header>

        <h2 className="mb-4 text-sm font-semibold tracking-wider text-stone-500 uppercase">
          Latest Post
        </h2>

        {/* Featured */}
        {featured && (
          <div className="mb-10">
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.25, delay: 0.02 }}
              >
                <BlogFeatured
                  slug={featured.slug}
                  title={featured.frontMatter.title}
                  subtitle={featured.frontMatter.subtitle}
                  date={featured.frontMatter.date}
                  timeToRead={featured.timeToRead}
                  heroImage={featured.frontMatter.heroImage}
                  imageAuthor={featured.frontMatter.imageAuthor}
                  category={featured.frontMatter.category}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        <div className="via-primary/60 mb-6 h-px w-full bg-gradient-to-r from-transparent to-transparent" />

        <h2 className="mb-3 text-sm font-semibold tracking-wider text-stone-500 uppercase">
          Previous posts
        </h2>

        {/* List */}
        <AnimatePresence mode="popLayout">
          <motion.ul layout initial={false} className="space-y-4">
            {rest.map(({ slug, frontMatter, timeToRead }, idx) => (
              <motion.div
                key={slug}
                layout
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
            ))}
          </motion.ul>
        </AnimatePresence>
      </section>
    </div>
  );
}

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
