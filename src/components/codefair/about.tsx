import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          About
        </p>
        <p className="max-w-2xl font-asap text-xl text-black sm:text-xl lg:mx-auto">
          codefair is a free and open source GitHub app that acts as your
          personal assistant when it comes to making your research software
          reusable and especially complying with the Findable, Accessible,
          Interoperable, Reusable (FAIR) Principles for Research Software
          (FAIR4RS Principles).
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
                What is a research software?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The commonly accepted definition of research software is
                &quot;Any software created during the research process or for a
                research purpose&quot;. It can come in many format and could be
                developed for different applications such as artificial
                intelligence (AI)/machine learning (ML) models with Python, data
                visualization tools with Jupyter notebook, or data analysis code
                with R.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://doi.org/10.5281/zenodo.5504016"
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
                What does making a research software FAIR means?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The FAIR (Findable, Accessible, Interoperable, Reusable)
                Principles for Research Software (FAIR4RS Principles) are a set
                of high-level instructions established by the research software
                community to make software reusable. Making research software
                FAIR means complying with each of the 17 FAIR principles.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://doi.org/10.1038/s41597-022-01710-x"
                    target="_blank"
                    rel="noopener"
                    data-umami-event="About section link"
                    data-umami-event-text="Learn more research software"
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
                We developed the FAIR-Biomedical Research Software (FAIR-BioRS)
                guidelines so it is easier for researchers to make their
                software compliant with the FAIR4RS Principles. However, it
                still requires time and effort to do so, especially when
                software is frequently updated and has multiple contributors
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://fairdataihub.org/fair-biors"
                    target="_blank"
                    rel="noopener"
                    data-umami-event="About section link"
                    data-umami-event-text="Learn more FAIR-BioRS guidelines"
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
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="ep:guide" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                How does codefair help?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                Just install codefair from the GitHub marketplace on your
                software’s GitHub repository. By communicating with you through
                GitHub issues and submitting pull requests, codefair will then
                make sure that your software follows best coding practices,
                provides metadata in standard format, includes a license file,
                and much more to align with the FAIR4RS principles.
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
