// components/project/infoSection.tsx
/* eslint-disable @next/next/no-img-element */
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

import { MagicCard } from '@/components/magicui/magic-card';

interface GitHubBadge {
  type: 'contributors' | 'stars' | 'issues' | 'license';
  href: string;
  alt: string;
  src: string;
}

interface Funder {
  name: string;
  id: string;
  href: string;
  image: string;
}

interface InfoSectionProps {
  title: string;
  description: string;
  sideImageSrc?: string;
  githubBadges?: GitHubBadge[];
  additionalLinks?: {
    text: string;
    href: string;
    target?: string;
    rel?: string;
  }[];
  sideImageAlt?: string;
  sideImageUrl?: string;
  funders?: Funder[];
}

const ProjectInfoSection: React.FC<InfoSectionProps> = ({
  title,
  description,
  sideImageSrc,
  sideImageAlt,
  sideImageUrl,
  githubBadges,
  additionalLinks,
  funders,
}) => {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-10">
      <MagicCard
        gradientColor="oklch(0.592 0.2157 349.761)"
        className="w-full rounded-3xl p-[2px]"
      >
        <div className="rounded-3xl border border-stone-200 bg-white/90 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] lg:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="md:max-w-[80%]">
              <h3 className="text-2xl font-bold text-stone-900">{title}</h3>
              <p className="font-asap mt-3 text-sm text-stone-700 sm:text-base">
                {description}
              </p>

              {githubBadges && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {githubBadges.map((badge) => (
                    <a
                      key={badge.type}
                      href={badge.href}
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        src={badge.src}
                        alt={badge.alt}
                        className="h-6"
                        style={{ display: `block` }}
                      />
                    </a>
                  ))}
                </div>
              )}

              {additionalLinks && additionalLinks.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-6">
                  {additionalLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.target || `_blank`}
                      rel={link.rel || `noopener`}
                      className="text-primary group/link relative inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-300 hover:text-pink-700"
                    >
                      <span className="relative z-20 inline-flex items-center gap-1">
                        {link.text}
                        <Icon
                          icon="solar:arrow-right-broken"
                          width={18}
                          height={18}
                        />
                      </span>
                      <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover/link:left-0 group-hover/link:w-full" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {sideImageSrc && (
              <div className="shrink-0">
                <a
                  href={sideImageUrl}
                  target={sideImageUrl ? `_blank` : undefined}
                  rel={sideImageUrl ? `noopener` : undefined}
                >
                  <img
                    src={sideImageSrc}
                    alt={sideImageAlt}
                    className="h-auto w-[150px]"
                  />
                </a>
              </div>
            )}
          </div>

          {funders && funders.length > 0 && (
            <div className="mt-6 border-t border-stone-200 pt-6">
              <p className="mb-4 text-sm font-semibold tracking-wide text-stone-500 uppercase">
                Funders & collaborators
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {funders.map((funder) => (
                  <a
                    key={funder.id}
                    href={funder.href}
                    target="_blank"
                    rel="noopener"
                    className="group flex flex-col items-center rounded-2xl border border-stone-100 bg-stone-50/60 p-3 transition hover:border-pink-200 hover:bg-pink-50/60"
                  >
                    <Image
                      src={funder.image}
                      alt={`${funder.name} logo`}
                      width={220}
                      height={150}
                      className="h-16 w-auto object-contain"
                    />
                    <p className="font-asap mt-2 text-center text-sm text-stone-800">
                      {funder.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </MagicCard>
    </section>
  );
};

export default ProjectInfoSection;
