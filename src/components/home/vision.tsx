import { useEffect } from 'react';

import {
  CogIcon,
  LightningBoltIcon,
  ScaleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/outline';

import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
const visionVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  hidden: { opacity: 0, y: 100 },
};

export default function Vision() {
  const controls = useAnimation();
  const [visionRef, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      controls.start(`visible`);
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8"
      ref={visionRef}
      animate={controls}
      initial="hidden"
      variants={visionVariants}
    >
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          Our Vision
        </p>
        <p className="max-w-2xl font-asap text-xl text-black sm:text-xl lg:mx-auto">
          Only with tools that support and assist researchers we will achieve a
          widespread adoption of FAIR data practices.
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
                by both humans and machines.
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
                FAIR data practices are crucial for ensuring reproducibility of
                scientific findings, promoting reuse of data, and enabling
                AI/ML-driven analysis to ultimately increase the pace of new
                discoveries. They also ensure proper credits to data generators.
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
                Despite effort from funding agencies, industry, and researchers,
                FAIR data practices are not widely adopted due to their complex
                nature, insufficient support for researchers, and lack of
                awareness.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <CogIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What do we do?
              </p>
            </dt>
            <dd className="mt-2 ml-16 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                We develop open source tools that enhance and streamline FAIR
                data practices for biomedical researchers through automation and
                intuitive user interfaces.
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </motion.div>
  );
}
