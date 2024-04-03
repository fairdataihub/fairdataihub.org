import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import wordsCount from 'words-count';

import EventDates from '@/components/events/EventDates';
import Seo from '@/components/seo/seo';

type EventsList = {
  slug: string;
  timeToRead: number;
  frontMatter: {
    title: string;
    startDateTime: string;
    endDateTime: string;
    tags: string[];
    subtitle: string;
    type: string;
  };
};

interface BlogProps {
  eventsList: EventsList[];
}

// The Blog Page Content

const Events: React.FC<BlogProps> = ({ eventsList }) => {
  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:px-10 sm:py-10">
      <Seo
        templateTitle="Events"
        templateUrl="https://fairdataihub.org/events"
        templateDescription="Stay up to date with our upcoming events."
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="mb-5 px-2 pt-5  sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          Events
        </h1>
        <h2 className="text-left text-xl">
          Stay up to date with our upcoming events.
        </h2>
      </div>

      <hr className="mx-6 my-2 border-dashed border-slate-200" />

      {eventsList.map((post) => {
        const { slug, frontMatter, timeToRead } = post;

        const { title, startDateTime, endDateTime, subtitle, type } =
          frontMatter;

        return (
          <article
            key={title}
            className="mb-2 flex w-full flex-col md:flex-row"
          >
            <div className="flex flex-col rounded-lg px-2 py-7 transition-all hover:bg-stone-100 hover:shadow-sm  md:px-7 md:py-5">
              <div className="mb-1 flex flex-row items-center justify-between md:hidden ">
                <div className="bg-pink-200 px-1 py-1 rounded-md text-sm font-medium">
                  {type}
                </div>

                <span className=" text-sm text-gray-600">
                  {timeToRead} min read
                </span>
              </div>

              <hr className="my-1 border-dashed border-slate-200 md:hidden" />

              <Link href={`/events/${slug}`} passHref>
                <h2 className="text-url mb-1 mt-4 cursor-pointer text-2xl font-semibold hover:underline md:mt-0 md:text-xl">
                  {title}
                </h2>
              </Link>

              <div className="flex justify-between items-center">
                <EventDates
                  startDateTime={startDateTime}
                  endDateTime={endDateTime}
                />

                <div className="bg-pink-200 px-1 py-1 rounded-md text-sm font-medium w-max md:block hidden">
                  {type}
                </div>
              </div>

              <p className="mb-3 mt-2 border-t pt-2 border-slate-200">
                {subtitle}
              </p>

              <div className="flex w-full flex-col justify-end md:flex-row">
                <Link href={`/events/${slug}`} passHref>
                  <span className="text-url cursor-pointer text-base hover:underline">
                    Read more →
                  </span>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export async function getStaticProps() {
  // Get the posts from the `blog` directory
  const files = fs.readdirSync(`./events`);

  const eventsList = files.map((fileName) => {
    // Remove the .md extension and use the file name as the slug
    const slug = fileName.replace(`.md`, ``);

    // Read the raw content of the file and parse the frontMatter
    const rawFileContent = fs.readFileSync(`events/${fileName}`, `utf-8`);
    const timeToRead = Math.ceil(wordsCount(rawFileContent) / 265);

    const { data: frontMatter } = matter(rawFileContent);

    return {
      slug,
      frontMatter,
      timeToRead,
    };
  });

  // sort the posts by date in descending order
  eventsList.sort((a, b) => {
    const a_date: any = dayjs(a.frontMatter.startDateTime, `YYYY-MM-DD`);
    const b_date: any = dayjs(b.frontMatter.startDateTime, `YYYY-MM-DD`);

    return b_date - a_date;
  });

  // Return the posts data to the page as props
  return {
    props: {
      eventsList,
    },
  };
}

export default Events;
