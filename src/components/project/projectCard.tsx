import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

export type ProjectImage = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  contain?: boolean;
};

export type Project = {
  slug: string; // e.g., '/projects/codefair'
  title: string;
  subtitle?: string;
  description: string;
  image: ProjectImage;
  badges?: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, title, subtitle, description, image, badges } = project;

  return (
    <Link
      href={slug}
      className="group block focus:outline-none"
      aria-label={`${title} — open project`}
    >
      <motion.article
        whileHover={{ y: -4 }}
        transition={{
          duration: 0.15,
          ease: `easeOut`,
        }}
        whileNotHover={{
          y: 0,
          transition: { duration: 0.2 },
        }}
        className="relative grid h-full min-h-[28rem] overflow-hidden rounded-xl border border-stone-200 bg-white/90 shadow-sm transition dark:border-stone-700 dark:bg-stone-900/60"
        style={{ gridTemplateRows: `auto 1fr` }}
      >
        <div className="relative h-44 w-full overflow-hidden bg-gradient-to-b from-stone-50 to-white dark:from-stone-900 dark:to-stone-900">
          {/* hover vignette */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0)_60%)]" />
          </div>

          <div className="relative h-full w-full p-3">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className={[
                `h-full w-full object-contain`,
                `scale-[.95] transform-gpu transition-transform duration-300`,
                // `group-hover:scale-[.9] group-focus:scale-[.9]`, //turn on if you want image to scale on hover
              ].join(` `)}
              draggable={false}
              priority={false}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <h3 className="text-lg font-semibold text-stone-900 transition-colors group-hover:text-stone-950 dark:text-stone-100 dark:group-hover:text-white">
            {title}
          </h3>

          {subtitle && (
            <p className="text-sm font-medium text-stone-600 dark:text-stone-300">
              {subtitle}
            </p>
          )}

          <p className="font-asap text-sm leading-6 text-stone-700 dark:text-stone-300">
            {description}
          </p>

          {/* Badges */}
          {!!badges?.length && (
            <div className="mt-1 flex flex-wrap gap-1.5">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded border border-pink-300/70 bg-pink-50 px-2 py-0.5 text-[11px] text-pink-700 dark:border-stone-700 dark:text-stone-300"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          <div className="flex-end mt-auto flex pt-2">
            {/* shrink-to-content and align right */}
            <div className="relative ml-auto inline-flex items-center gap-2 pl-1">
              <span className="group-hover:text-primary text-xs text-stone-500 dark:text-stone-400">
                Learn more
              </span>
              <Icon
                icon="solar:arrow-right-broken"
                className="group-hover:text-primary h-4 w-4"
                aria-hidden="true"
              />
              <span className="bg-primary absolute -bottom-1 left-1/2 h-[2px] w-0 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
