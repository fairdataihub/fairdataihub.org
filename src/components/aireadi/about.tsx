import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          About
        </p>
        <p className="max-w-3xl font-asap text-xl text-black lg:mx-auto">
          AI-READI is one of the data generation projects funded by the National
          Institutes of Health (NIH)&apos;s Bridge2AI Program. The AI-READI
          project is structured into six modules: Data Acquisition, Ethics,
          Standards, Teaming, Tools, and Skills & Workforce Development. The
          FAIR Data Innovations Hub is leading the Tools module.
        </p>
        <div className="mt-2 flex w-full justify-center font-asap md:mt-1">
          <a
            href="https://doi.org/10.1038/sdata.2016.18"
            target="_blank"
            rel="noreferrer"
            data-umami-event="About section link"
            data-umami-event-text="Learn more about the NIH's Bridge2AI Program"
          >
            <p className="text-url hover-underline-animation">
              Learn more about the NIH&apos;s Bridge2AI Program
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
                <path d="M5 12h14M12 5l7 7-7 7" data-v-6a723fb6=""></path>
              </svg>
            </p>
          </a>
        </div>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="mdi:target-arrow" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What is the goal of AI-READI project?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The AI-READI project seeks to create a flagship AI-ready and
                ethically-sourced dataset that will support future AI-drive
                research projects to provide critical insights into type 2
                diabetes mellitus (T2DM), including salutogenic pathways to
                return to health.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://aireadi.org"
                    target="_blank"
                    rel="noreferrer"
                    data-umami-event="About section link"
                    data-umami-event-text="Learn more about the AI-READI project"
                  >
                    <p className="text-url hover-underline-animation">
                      Learn more about the AI-READI project
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
                <Icon icon="mdi:files" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What data will be collected?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The project will aim to collect data from 4,000 participants. To
                ensure the data is population-representative, the participants
                will be balanced for three factors: disease severity,
                race/ethnicity, and sex. Various data types will be collected
                from each participant, including vitals, electrocardiogram,
                glucose monitoring, physical activity, ophthalmic evaluation,
                etc.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="eos-icons:ai" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                How will the project data be made AI-ready?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The AI-READI project data will be made FAIR to optimize reuse by
                humans and machines (i.e., AI/ML program). The data will
                additionally be shared according to applicable ethical
                guidelines to enhance AI-readiness.
                <div className="mt-2 flex md:mt-1">
                  <a
                    href="https://doi.org/10.1038/sdata.2016.18"
                    target="_blank"
                    rel="noreferrer"
                    data-umami-event="About section link"
                    data-umami-event-text="Learn more about FAIR"
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
                <Icon icon="carbon:cloud-app" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What is the fairdataihub&apos;s role in the project?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                Our team will lead the development of fairhub.io, a web platform
                with intuitive user interfaces and automation tools that will
                help data-collecting researchers from the project (and beyond)
                with managing, curating, and sharing FAIR, ethically-sourced,
                and AI-ready datasets.
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
