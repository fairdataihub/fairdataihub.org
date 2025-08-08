import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          About
        </p>
        <p className="max-w-2xl font-asap text-xl text-black sm:text-xl lg:mx-auto">
          Millions of scientific posters are presented every year, containing
          valuable early-stage ideas and insights, but most quietly vanish after
          a conference ends. Posters.science is a free and open-source platform
          that makes it easier for researchers to share and discover posters,
          turning them into enduring research assets.
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon
                  icon="material-symbols:linear-scale"
                  width={24}
                  height={24}
                />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What is posters.science?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                Posters.science is a platform that enables researchers to easily
                share posters that are FAIR (Findable, Accessible,
                Interoperable, and Reusable) and AI-ready, maximizing their
                reach and impact. It also helps users discover posters so their
                valuable content can be reused to drive discovery, generate new
                hypotheses, start new collaborations, support funding decision,
                and more.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="mdi:axis-arrow-info" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                How does it work?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                With posters.science, researchers can easily upload their
                posters, let AI-powered tools extract rich metadata, generate a
                machine friendly version of their poster and archive everything
                on trusted repositories like Zenodo. Users can also use a
                smart-search feature to ask complex research questions and
                instantly find relevant posters. Posters.science indexes all
                openly available posters on the net to create the largest
                registry of posters users can search from.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="mdi:account-hard-hat" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What challenges does it address?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                Despite their value, most scientific posters disappear after a
                conference. Even when shared, they are often missing standard
                metadata, making them hard to search, cite, or reuse.
                Posters.science solves this by preserving, indexing, and
                enriching posters with structured, searchable metadata and
                creating machine-friendly posters.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="ep:guide" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                Why is this important?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                Scientific posters often contain first disclosures of research
                ideas, datasets, and methods. Making them FAIR and AI-ready
                means they can be reused to accelerate discoveries.
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
