import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          About
        </p>
        <p className="max-w-2xl font-asap text-xl text-black sm:text-xl lg:mx-auto">
          SPARClink provides a system that queries all external publications
          using open source tools and platforms to create interactable
          visualizations that showcases the impact that SPARC has on the overall
          scientific research community.
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
                What is SPARC?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The NIH&apos;s Stimulating Peripheral Activity to Relieve
                Conditions (SPARC) program seeks to accelerate development of
                therapeutic devices that modulate electrical activity in nerves
                to improve organ function.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://sparc.science/"
                    target="_blank"
                    rel="noopener"
                    data-umami-event="About section link"
                    data-umami-event-text="Learn more about SPARC"
                  >
                    <p className="text-url hover-underline-animation">
                      Learn more about SPARC
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="arrow-animate ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        data-v-6a723fb6=""
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          data-v-6a723fb6=""
                        ></path>
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="mdi:axis-arrow-info" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What are the FAIR SPARC Data Guidelines?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                All SPARC-funded researchers must curate their datasets
                following the SPARC Data Standards (SDS) and share them openly
                on the Pennsieve data platform as per their funding agreement
                with SPARC.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://doi.org/10.1101/2021.02.10.430563"
                    target="_blank"
                    rel="noopener"
                    data-umami-event="About section link"
                    data-umami-event-text="Learn more about the SDS"
                  >
                    <p className="text-url hover-underline-animation">
                      Learn more about SDS
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="arrow-animate ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        data-v-6a723fb6=""
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          data-v-6a723fb6=""
                        ></path>
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="game-icons:impact-point" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What does Impact mean?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The SPARC program provides datasets, maps and computational
                studies that follow FAIR principles and is used by researchers
                all around the world. The usage of SPARC resouces by platforms
                and programs ouside SPARC is what we view as the meaning of the
                term &apos;Impact&apos;.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="ph:graph-fill" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What does SPARClink do?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                SPARClink uses data from existing SPARC publications, datasets
                and protocols to create an interactive visualization that you
                can use to view the impact of SPARC.
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
