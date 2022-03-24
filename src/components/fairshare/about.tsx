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
          FAIRshare is a cross-platform desktop software that allows researchers
          to easily organize and share their biomedical data and software
          according to applicable FAIR guidelines.
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
                What are the FAIR Data Principles?
              </p>
            </dt>
            <dd className="mt-2 ml-16 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The FAIR Data Principles are a set of guidelines for curating
                and sharing research data such that they are optimaly reusable
                by both human and machines.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://doi.org/10.1038/sdata.2016.18"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="text-url hover-underline-animation">
                      Learn more about FAIR
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
                Why are FAIR data practices important?
              </p>
            </dt>
            <dd className="mt-2 ml-16 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                Given the urgency of the pandemic, it is crucial that
                researchers rapidly curate and share their data according to
                applicable FAIR guidelines to promote transparency and increase
                the pace of discoveries.
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
                Support is lacking to educate and assist the researchers, manual
                curation is not suitable to manage the amount of data being
                generated, and there is a lack of standard approach across
                research labs.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <DesktopComputerIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What does FAIRshare do?
              </p>
            </dt>
            <dd className="mt-2 ml-16 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                FAIRshare is a desktop software that streamlines the process of
                making biomedical research data and software FAIR by combining
                intuitive user interface and automation.
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
