import { AnimatePresence, motion } from 'framer-motion';

import ProjectCard from '@/components/project/projectCard';
import Seo from '@/components/seo/seo';

import PROJECTS from '@/public/projects/projects.json';

type Project = {
  slug: string; // link href
  title: string;
  subtitle?: string;
  description: string;
  completed?: boolean;
  startDate?: string;
  endDate?: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    contain?: boolean;
  };
  // category?: string;
  badges?: string[]; // extra tags
};

export default function ProjectsPage() {
  const projects: Project[] = PROJECTS;
  const ongoingProjects = projects.filter((p) => !p.completed);
  const completedProjects = projects.filter((p) => p.completed);

  return (
    <div className="relative pt-26">
      <Seo
        templateDescription="Explore the projects we build at the FAIR Data Innovations Hub-modern, open-source tools and platforms that help researchers follow FAIR principles."
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[720px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(211,75,171,0.30),rgba(211,75,171,0.12)_40%,transparent_75%)] blur-3xl" />
      </div>

      <section className="container mx-auto max-w-screen-xl px-4 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-col items-start gap-2 sm:mb-10 sm:justify-between"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-black tracking-tight text-pretty text-stone-900 sm:text-5xl dark:text-stone-100">
              Our Projects
            </h1>
            <p className="font-asap max-w-2xl text-lg text-stone-700 dark:text-stone-300">
              Open-source tools and platforms that make FAIR a habit.
            </p>
          </div>
          <div className="via-primary/60 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <h2 className="my-4 text-lg font-bold tracking-wider text-stone-600 uppercase underline underline-offset-5">
            Ongoing
          </h2>
          <motion.ul
            layout
            className="grid auto-rows-[1fr] grid-cols-1 content-start items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial={false}
          >
            {ongoingProjects.map((p, idx) => (
              <motion.li
                layout
                key={p.slug}
                className="h-full"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.25, delay: idx * 0.02 }}
              >
                <ProjectCard project={p} />
              </motion.li>
            ))}
          </motion.ul>

          <h2 className="my-4 mt-24 text-lg font-bold tracking-wider text-stone-600 uppercase underline underline-offset-5">
            Completed
          </h2>
          <motion.ul
            layout
            className="grid auto-rows-[1fr] grid-cols-1 content-start items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial={false}
          >
            {completedProjects.map((p, idx) => (
              <motion.li
                layout
                key={p.slug}
                className="h-full"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.25, delay: idx * 0.02 }}
              >
                <ProjectCard project={p} />
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </section>
    </div>
  );
}
