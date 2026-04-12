import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
import wordsCount from 'words-count';

import EventFeatured from '@/components/events/EventFeatured';
import EventListItem from '@/components/events/EventListItem';
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
    location: string;
    type: string;
    heroImage: string;
  };
};

interface EventsProps {
  eventsList: EventsList[];
}

export default function Events({ eventsList }: EventsProps) {
  const today = dayjs().startOf(`day`);

  const parseStart = (s?: string) => {
    if (!s) return null;
    const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(s);
    const d = isDateOnly ? dayjs(s, `YYYY-MM-DD`).startOf(`day`) : dayjs(s);
    return d.isValid() ? d : null;
  };

  // Upcoming: start >= today
  const upcoming = eventsList
    .map((e) => ({ e, d: parseStart(e.frontMatter.startDateTime) }))
    .filter(({ d }) => d && d.valueOf() >= today.valueOf())
    .sort((a, b) => a.d!.valueOf() - b.d!.valueOf())
    .map(({ e }) => e);

  // Past: start < today
  const past = eventsList
    .map((e) => ({ e, d: parseStart(e.frontMatter.startDateTime) }))
    .filter(({ d }) => d && d.valueOf() < today.valueOf())
    .sort((a, b) => b.d!.valueOf() - a.d!.valueOf())
    .map(({ e }) => e);

  const pastByYear = past.reduce<Record<string, EventsList[]>>((acc, ev) => {
    const y = dayjs(ev.frontMatter.startDateTime).format(`YYYY`);
    (acc[y] ||= []).push(ev);
    return acc;
  }, {});

  // Featured is the soonest upcoming event
  const [featured, ...upcomingRest] = upcoming;

  return (
    <div className="relative pt-26">
      <Seo
        templateTitle="Events"
        templateUrl="https://fairdataihub.org/events"
        templateDescription="Stay up to date with our upcoming events."
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[720px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(211,75,171,0.30),rgba(211,75,171,0.12)_40%,transparent_75%)] blur-3xl" />
      </div>

      <section className="container mx-auto w-full max-w-screen-xl px-4 pt-8 pb-16 xl:min-w-[1280px]">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: `easeOut` }}
          className="mb-8 sm:mb-10"
        >
          <h1 className="text-4xl font-black tracking-tight text-pretty text-stone-900 sm:text-5xl dark:text-stone-100">
            Events
          </h1>
          <p className="font-asap my-2 max-w-2xl text-lg text-stone-700 dark:text-stone-300">
            Join our talks, workshops, and community sessions on FAIR practices.
          </p>
          <div className="via-primary/60 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
        </motion.header>

        <h2 className="mb-3 text-sm font-semibold tracking-wider text-stone-500 uppercase">
          Upcoming Events
        </h2>

        {featured ? (
          <div className="mb-8">
            <EventFeatured
              slug={featured.slug}
              title={featured.frontMatter.title}
              subtitle={featured.frontMatter.subtitle}
              startDateTime={featured.frontMatter.startDateTime}
              endDateTime={featured.frontMatter.endDateTime}
              type={featured.frontMatter.type}
              location={featured.frontMatter.location}
              heroImage={featured.frontMatter.heroImage}
            />
          </div>
        ) : (
          <p className="mb-8 rounded-xl border border-slate-200 bg-white p-4 text-slate-700">
            No upcoming events at the moment, check back soon.
          </p>
        )}

        {upcomingRest.length > 0 && (
          <ul className="mx-auto w-full max-w-5xl space-y-3">
            {upcomingRest.map(({ slug, frontMatter }) => (
              <EventListItem
                key={slug}
                slug={slug}
                title={frontMatter.title}
                subtitle={frontMatter.subtitle}
                startDateTime={frontMatter.startDateTime}
                endDateTime={frontMatter.endDateTime}
                type={frontMatter.type}
                location={frontMatter.location}
                isPast={false}
                heroImage={frontMatter.heroImage}
              />
            ))}
          </ul>
        )}

        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <h2 className="mb-3 text-sm font-semibold tracking-wider text-stone-500 uppercase">
          Past Events
        </h2>

        {Object.keys(pastByYear).length === 0 ? (
          <p className="rounded-xl border border-slate-200 bg-white p-4 text-slate-700">
            No past events yet.
          </p>
        ) : (
          <div className="mx-auto w-full max-w-5xl">
            {Object.entries(pastByYear)
              .sort(([a], [b]) => Number(b) - Number(a))
              .map(([year, items]) => (
                <div key={year} className="mb-6">
                  <h3 className="mb-2 text-sm font-semibold tracking-wide text-slate-500">
                    {year}
                  </h3>
                  <ul className="space-y-3">
                    {items.map(({ slug, frontMatter }) => (
                      <EventListItem
                        key={slug}
                        slug={slug}
                        title={frontMatter.title}
                        subtitle={frontMatter.subtitle}
                        startDateTime={frontMatter.startDateTime}
                        endDateTime={frontMatter.endDateTime}
                        type={frontMatter.type}
                        location={frontMatter.location}
                        heroImage={frontMatter.heroImage}
                        isPast
                      />
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`./events`);

  const eventsList = files.map((fileName) => {
    const slug = fileName.replace(`.md`, ``);
    const raw = fs.readFileSync(`events/${fileName}`, `utf-8`);
    const timeToRead = Math.ceil(wordsCount(raw) / 265);
    const { data: frontMatter } = matter(raw);
    return { slug, frontMatter, timeToRead };
  });

  eventsList.sort((a, b) => {
    const aDate: any = dayjs(a.frontMatter.startDateTime, `YYYY-MM-DD`);
    const bDate: any = dayjs(b.frontMatter.startDateTime, `YYYY-MM-DD`);
    return bDate - aDate;
  });

  return { props: { eventsList } };
}
