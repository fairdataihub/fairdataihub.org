import { useState, useEffect } from 'react';

import Link from 'next/link';

import Lottie from '@/components/lotties';

import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
const heroVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

export default function Hero() {
  const [clientSide, setClientSide] = useState(false);
  useEffect(() => {
    setClientSide(true);
  }, []);

  const controls = useAnimation();
  const [heroRef, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      controls.start(`visible`);
    }
  }, [controls, inView]);

  return (
    <motion.section
      className="hero"
      ref={heroRef}
      animate={controls}
      initial="hidden"
      variants={heroVariants}
    >
      <div className="container mx-auto max-w-screen-lg px-6 py-8">
        <div className="items-center justify-center md:flex">
          <div className="w-full p-2 lg:w-1/2 lg:max-w-lg">
            <h1 className="w-full text-left text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
              Making FAIR
              <span className="text-accent"> data </span>
              practices more accessible
            </h1>

            <p className="mt-2 w-full text-xl font-normal text-black sm:mt-0 sm:text-base md:text-lg lg:text-xl">
              <span className="font-medium">F</span>indable,&nbsp;
              <span className="font-medium">A</span>ccessible,&nbsp;
              <span className="font-medium">I</span>nteroperable, and&nbsp;
              <span className="font-medium">R</span>eusable (FAIR) data
              practices are taking the biomedical research world by storm. We
              build open source tools to help researchers navigate through them.
            </p>

            <Link href="/contact-us" passHref>
              <button
                type="button"
                className="my-3 rounded-lg border-2 border-black bg-transparent p-3 text-center text-base font-semibold text-black transition-all hover:border-light-accent hover:text-accent"
              >
                Contact us
              </button>
            </Link>
          </div>

          <div className="mt-6 flex w-full items-center justify-center p-5 lg:mt-0 lg:w-1/2 lg:p-2">
            {clientSide ? (
              <Lottie id="home-page-hero" width={400} height={400} />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
