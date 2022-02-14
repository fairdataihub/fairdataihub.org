import {
  DesktopComputerIcon,
  LightningBoltIcon,
  ScaleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/outline';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          About
        </p>
        <p className="max-w-2xl font-asap text-xl text-black sm:text-xl lg:mx-auto">
          KnowMore is a tool readily integrable into the SPARC Portal that
          allows to find potential relation, difference, and similarities
          between multiple SPARC datasets in just a few clicks, which can lead
          to a new discovery, new hypothesis, or simply guide the user to the
          next logical step in their discovery process.
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <ScaleIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What is SPARC?
              </p>
            </dt>
            <dd className="mt-2 ml-16 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The NIH&apos;s Stimulating Peripheral Activity to Relieve
                Conditions (SPARC) program seeks to accelerate development of
                therapeutic devices that modulate electrical activity in nerves
                to improve organ function.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://doi.org/10.1038/sdata.2016.18"
                    target="_blank"
                    rel="noreferrer"
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
                <ExclamationCircleIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What are the FAIR SPARC Data Guidelines?
              </p>
            </dt>
            <dd className="mt-2 ml-16 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                All SPARC-funded researchers must curate their datasets
                following the SPARC Data Standards (SDS) and share them openly
                on the Pennsieve data platform as per their funding agreement
                with SPARC.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://doi.org/10.1101/2021.02.10.430563"
                    target="_blank"
                    rel="noreferrer"
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
                <LightningBoltIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What are the challenges?
              </p>
            </dt>
            <dd className="mt-2 ml-16 font-asap text-lg text-black sm:text-base md:mt-0">
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
                <DesktopComputerIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What does KnowMore do?
              </p>
            </dt>
            <dd className="mt-2 ml-16 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                KnowMore uses several SPARC resources, data science methods, and
                knowledge of the SDS to generate various visualizations to help
                the user identify potential relations across datasets of
                interests.
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
