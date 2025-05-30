import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          About
        </p>
        <p className="max-w-2xl font-asap text-xl text-black sm:text-xl lg:mx-auto">
          SODA is a cross-platform desktop software that helps researchers
          prepare and share FAIR peripheral nervous system (PNS) related data
          and models using the SPARC Data Structure (SDS) and the SPARC Portal.
          Since 2021, SODA has been installed on over 1300 computers, empowering
          researchers worldwide.
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
                    href="https://doi.org/10.1038/sdata.2016.18"
                    target="_blank"
                    rel="noopener"
                    data-umami-event="About section link"
                    data-umami-event-text="Learn more about SPARC"
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
                <Icon icon="mdi:account-hard-hat" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What are the challenges?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The guidelines are very exhaustive to maximize FAIRness of SPARC
                datasets but are challenging and time-consuming for researchers
                to implement.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="ep:guide" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What does SODA do?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                SODA combines intuitive user interfaces and automation such that
                researchers can efficiently and accurately curate their SPARC
                datasets.
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
