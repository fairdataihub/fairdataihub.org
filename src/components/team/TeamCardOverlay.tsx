'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export type ShowLink = { show: boolean; link: string };

export type Profile = {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  image: string;
  blurDataURL?: string;
  width?: number;
  height?: number;
  education?: { degree?: string; institution?: string; year?: string }[];
  twitter?: ShowLink;
  github?: ShowLink;
  linkedin?: ShowLink;
  badges?: string[];
  organization?: string;
  location?: string;
};

export default function TeamCardOverlay({
  profile,
  onOpen,
  className,
  cardHeight = `h-[420px] sm:h-[460px] lg:h-[520px]`,
}: {
  profile: Profile;
  onOpen: (p: Profile) => void;
  className?: string;
  cardHeight?: string;
}) {
  const firstDegree =
    Array.isArray(profile.education) && profile.education.length > 0
      ? profile.education[0]?.degree
      : undefined;

  return (
    <motion.button
      type="button"
      layout
      onClick={() => onOpen(profile)}
      aria-label={`Open profile for ${profile.name}`}
      className={[
        `group relative w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm hover:cursor-pointer`,
        `focus-visible:ring-primary/40 focus:outline-none focus-visible:ring-2`,
        `transition-shadow hover:shadow-lg`,
        className ?? ``,
      ].join(` `)}
    >
      <div className={[`relative w-full`, cardHeight].join(` `)}>
        <Image
          src={profile.image}
          alt={`Portrait of ${profile.name}`}
          placeholder={profile.blurDataURL ? `blur` : `empty`}
          blurDataURL={profile.blurDataURL}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Text overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-4">
          <h3 className="text-left text-2xl leading-tight font-extrabold text-white drop-shadow">
            {profile.name}
          </h3>
          {firstDegree && (
            <div className="mt-1 flex items-start text-white/95">
              <Icon
                icon="lucide:graduation-cap"
                className="mr-2 h-5 w-5"
                aria-hidden
              />
              <p className="text-sm font-semibold">{firstDegree}</p>
            </div>
          )}
        </div>
      </div>
    </motion.button>
  );
}
