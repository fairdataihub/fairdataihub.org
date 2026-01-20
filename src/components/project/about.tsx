// components/project/about.tsx
import { Icon } from '@iconify/react';

export interface AboutFeature {
  icon: string;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
    target?: string;
    rel?: string;
  };
}

export interface ProjectAboutProps {
  title?: string;
  description: string;
  features: AboutFeature[];
}

export default function ProjectAbout({
  title = `Overview`,
  description,
  features,
}: ProjectAboutProps) {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-10">
      <div className="text-center lg:text-left">
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
          {title}
        </h2>
        <p className="font-asap mt-3 text-base text-stone-700 sm:text-lg lg:mt-4">
          {description}
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-pink-100 bg-white/90 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_24px_70px_rgba(203,67,142,0.20)]"
          >
            <div className="bg-primary/10 text-primary mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full">
              <Icon icon={feature.icon} width={22} height={22} />
            </div>
            <h3 className="text-lg font-semibold text-stone-900">
              {feature.title}
            </h3>
            <p className="font-asap mt-2 text-sm leading-relaxed text-stone-700">
              {feature.description}
            </p>
            {feature.link && (
              <div className="mt-3 inline-flex md:mt-2">
                <a
                  href={feature.link.href}
                  target={feature.link.target}
                  rel={feature.link.rel}
                  className="group/link text-primary relative inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-300 hover:text-pink-700"
                >
                  <span className="relative z-20 inline-flex items-center gap-1">
                    {feature.link.text}
                    <Icon
                      icon="solar:arrow-right-broken"
                      width={18}
                      height={18}
                    />
                  </span>
                  <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:left-0 group-hover/link:w-full" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
