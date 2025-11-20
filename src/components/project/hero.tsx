import clsx from 'clsx';
import { motion } from 'framer-motion';
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

export type HeroImageVariant = 'logo' | 'screenshot';

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
    <section className="relative overflow-hidden pt-15">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-pink-50/80 via-white to-white"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-4 -z-10 flex justify-center"
      >
        <div className="h-[460px] w-[1100px] bg-[radial-gradient(ellipse_at_center,rgba(205,50,159,0.24),rgba(205,50,159,0.08)_45%,transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-screen-2xl flex-col items-center px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-14 md:py-16 lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="order-2 mt-8 flex w-full flex-col items-center text-center md:order-1 md:mt-0 md:max-w-xl md:items-start md:text-left"
        >
          <span className="bg-primary/10 text-primary inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase">
            Project
          </span>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-balance text-stone-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-2 text-lg font-medium text-stone-700 sm:text-xl">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="font-asap mt-4 max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base">
              {description}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="mt-6 flex w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              {buttons.map((button, index) => {
                const btn = (
                  <button
                    type="button"
                    disabled={button.disabled}
                    aria-label={button.ariaLabel}
                    className={clsx(
                      `relative inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all`,
                      button.disabled
                        ? `cursor-not-allowed bg-stone-300 text-stone-600`
                        : `bg-stone-900 text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:ring-2 hover:ring-pink-500 hover:ring-offset-2 hover:ring-offset-pink-100 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-100 focus-visible:outline-none`,
                    )}
                  >
                    {button.text}
                  </button>
                );

                if (button.disabled && button.tooltipContent) {
                  return (
                    <Tooltip
                      key={index}
                      tooltipContent={button.tooltipContent}
                      placement="bottom"
                    >
                      <div>{btn}</div>
                    </Tooltip>
                  );
                }

                if (button.href) {
                  return (
                    <a
                      key={index}
                      href={button.href}
                      target={button.target}
                      aria-label={button.ariaLabel}
                      rel={button.rel}
                    >
                      {btn}
                    </a>
                  );
                }

                return (
                  <div key={index} className="inline-flex">
                    {btn}
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="order-1 flex w-full justify-center md:order-2 md:flex-1 md:justify-end"
        >
          <div className="relative z-10 py-4 sm:py-0">
            <div className="relative mx-auto flex justify-center md:justify-end">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                priority
                style={{
                  width: imageWidth ? `${imageWidth}px` : `auto`,
                  height: imageHeight ? `${imageHeight}px` : `auto`,
                }}
                className="h-auto w-auto max-w-full rounded-[32px] object-contain shadow-[0_24px_80px_rgba(0,0,0,0.10)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
