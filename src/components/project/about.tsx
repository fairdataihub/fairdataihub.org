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
  title = `About`,
  description,
  features,
}: ProjectAboutProps) {
  return (
    <div className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </p>
        <p className="font-asap max-w-2xl text-xl text-black sm:text-xl lg:mx-auto">
          {description}
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-8 md:gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <dt>
                <div className="bg-light-vision absolute flex h-12 w-12 items-center justify-center rounded-md text-white">
                  <Icon icon={feature.icon} width={24} height={24} />
                </div>
                <p className="ml-16 text-xl font-medium sm:text-lg">
                  {feature.title}
                </p>
              </dt>
              <dd className="font-asap mt-2 ml-16 text-lg text-black sm:text-base md:mt-0">
                <div>
                  {feature.description}
                  {feature.link && (
                    <div className="mt-2 flex md:mt-1">
                      <a
                        href={feature.link.href}
                        target={feature.link.target}
                        rel={feature.link.rel}
                      >
                        <p className="text-url hover-underline-animation">
                          {feature.link.text}
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
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
