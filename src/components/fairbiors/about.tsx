import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          About
        </p>
        <p className="max-w-2xl font-asap text-xl text-black sm:text-xl lg:mx-auto">
          The FAIR Biomedical Research Software (FAIR-BioRS) guidelines are a
          set of minimal and actionable step-by-step guidelines for making
          biomedical research software FAIR (Findable, Accessible,
          Interoperable, Reusable), in line with the FAIR Principles for
          Research Software (FAIR4RS Principles).
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
                What are research software?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                Research software is any software created during the research
                process or for a research purpose. It can come in many format
                such as artificial intelligence (AI) models as Python scripts or
                data visualization tools as Jupyter notebooks. They are an
                essential aspects of biomedical research and therefore making
                them FAIR, i.e. optimally reusable is critical just like data.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://www.researchsoft.org/"
                    target="_blank"
                    rel="noopener"
                    data-umami-event="About section link"
                    data-umami-event-text="Learn more research software"
                  >
                    <p className="text-url hover-underline-animation">
                      Learn more about research software
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
                How to make research software FAIR?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The FAIR Principles for Research Software (FAIR4RS Principles)
                are reformulated versions of the FAIR Principles developed by
                the research software community specifically to make research
                software reusable.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://doi.org/10.1038/s41597-022-01710-x"
                    target="_blank"
                    rel="noopener"
                    data-umami-event="About section link"
                    data-umami-event-text="Learn more about the FAIR4RS Principles"
                  >
                    <p className="text-url hover-underline-animation">
                      Learn more about the FAIR4RS Principles
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
                By design, the FAIR4RS Principles only provide a high-level
                framework for making software FAIR but do not provide practical
                instructions to do so. Therefore, making software FAIR requires
                an in-depth understanding of each of the FAIR4RS Principles, and
                finding out how to practically comply with them.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="ep:guide" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                How do the FAIR-BioRS guidelines help?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                We established the FAIR Biomedical Research Software
                (FAIR-BioRS) guideline, which are clear, actionable, and
                step-by-step guidelines for making biomedical research software
                FAIR. Researchers can simply follow and implement the guidelines
                as they are developing their software to make it compliant with
                the FAIR4RS principles.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://doi.org/10.1038/s41597-022-01710-x"
                    target="_blank"
                    rel="noopener"
                    data-umami-event="About section link"
                    data-umami-event-text="Learn more about the FAIR-BioRS guidelines"
                  >
                    <p className="text-url hover-underline-animation">
                      Learn more about the FAIR-BioRS guidelines
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
        </dl>
      </div>
    </div>
  );
}
