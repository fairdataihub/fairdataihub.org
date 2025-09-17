import Image from 'next/image';

import Tooltip from '@/components/ui/tooltip';

export interface HeroButton {
  text: string;
  href: string | undefined;
  target?: string;
  ariaLabel?: string;
  rel?: string;
  disabled?: boolean;
  tooltipContent?: string;
}

export interface ProjectHeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  buttons?: HeroButton[];
}

export default function ProjectHero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  buttons = [],
}: ProjectHeroProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="relative mx-auto max-w-screen-2xl py-5">
        <div className="container mx-auto flex w-full flex-col-reverse items-center px-1 py-2 sm:py-4 md:py-10 lg:flex-row">
          <div className="mb-2 flex flex-col items-center pt-5 text-center sm:mb-16 sm:pt-0 md:mb-0 md:items-start md:pr-0 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="mb-1 w-full text-center text-3xl font-black sm:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <h2 className="mb-4 mt-2 w-full text-center text-2xl font-medium sm:text-2xl">
                {subtitle}
              </h2>
            )}

            {description && (
              <p className="mb-8 w-full text-center font-asap text-base leading-relaxed text-black">
                {description}
              </p>
            )}
            {buttons.length > 0 && (
              <div className="flex w-full flex-col justify-center space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
                {buttons.map((button, index) => (
                  <div key={index} className="flex flex-row justify-center">
                    {button.disabled && button.tooltipContent ? (
                      <Tooltip
                        tooltipContent={button.tooltipContent}
                        placement="bottom"
                      >
                        <button
                          disabled
                          aria-label={button.ariaLabel}
                          className="relative cursor-not-allowed rounded border-0 bg-gray-400 px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all"
                        >
                          {button.text}
                        </button>
                      </Tooltip>
                    ) : button.href ? (
                      <a
                        href={button.href}
                        target={button.target}
                        aria-label={button.ariaLabel}
                        rel={button.rel}
                      >
                        <button className="rounded border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600">
                          {button.text}
                        </button>
                      </a>
                    ) : (
                      <button className="rounded border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600">
                        {button.text}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative z-10 py-2 sm:py-0 lg:max-w-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              priority={true}
              className="h-auto w-auto object-scale-down"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
