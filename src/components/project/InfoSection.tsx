/* eslint-disable @next/next/no-img-element */
import { Icon } from '@iconify/react';
import React from 'react';

interface GitHubBadge {
  type: 'contributors' | 'stars' | 'issues' | 'license';
  href: string;
  alt: string;
  src: string;
}

interface InfoSectionProps {
  title: string;
  description: string;
  sideImageSrc?: string;
  githubBadges?: GitHubBadge[];
  additionalLink?: {
    text: string;
    href: string;
    target?: string;
    rel?: string;
  };
  sideImageAlt?: string;
  sideImageUrl?: string;
}

const ProjectInfoSection: React.FC<InfoSectionProps> = ({
  title,
  description,
  sideImageSrc,
  sideImageAlt,
  sideImageUrl,
  githubBadges,
  additionalLink,
}) => {
  return (
    <section>
      <div className="mx-auto px-5 pt-5 sm:px-10">
        <div className="mx-auto flex max-w-screen-lg flex-col">
          <h1 className="py-5 text-left text-4xl font-black subpixel-antialiased md:mr-8 md:py-0">
            {title}
          </h1>
          <div className="w-full py-2">
            <div className="flex w-full flex-col justify-between sm:flex-row">
              <div className="mb-10 flex-1 pr-10 sm:mb-5">
                <p className="w-full font-asap text-lg text-black">
                  {description}
                </p>
                {githubBadges && (
                  <div className="mt-3 flex text-accent">
                    {githubBadges.map((badge) => (
                      <a
                        key={badge.type}
                        href={badge.href}
                        target="_blank"
                        className="mr-2"
                        rel="noopener"
                      >
                        <img
                          src={badge.src}
                          alt={badge.alt}
                          style={{ display: `block` }}
                        />
                      </a>
                    ))}
                  </div>
                )}

                {additionalLink && (
                  <div className="mt-2 flex">
                    <a
                      href={additionalLink.href}
                      target={additionalLink.target || `_blank`}
                      rel={additionalLink.rel || `noopener`}
                    >
                      <p className="text-url hover-underline-animation">
                        {additionalLink.text}
                        <Icon
                          icon="solar:arrow-right-broken"
                          width={20}
                          height={20}
                        />
                      </p>
                    </a>
                  </div>
                )}
              </div>

              {sideImageSrc && (
                <div className="py-3">
                  <a href={sideImageUrl} target="_blank" rel="noopener">
                    <img
                      src={sideImageSrc}
                      alt={sideImageAlt}
                      className="h-auto w-[150px]"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfoSection;
