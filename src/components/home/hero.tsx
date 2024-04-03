import Link from 'next/link';

import LottieAnimation from '@/components/lotties';

import heroLottie from '../../assets/lotties/hero.json';

export default function Hero() {
  return (
    <div className="hero container mx-auto max-w-screen-xl px-6 py-8 items-center justify-center md:flex">
      <div className="w-full p-2 lg:w-1/2 lg:max-w-lg">
        <h1 className="w-full text-left text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
          Simplifying data sharing to propel AI-driven discoveries
        </h1>

        <p className="mt-2 w-full text-xl font-normal text-black sm:mt-0 sm:text-base md:text-lg lg:text-xl">
          Availability of biomedical research data is critical to fuel AI-driven
          discoveries. We develop open source tools, standards, and guidelines
          that support biomedical researchers in preparing and sharing data and
          other research outcomes such that they are optimally reusable by both
          humans and machines, including AI and ML models.
        </p>

        <Link href="/contact-us" passHref>
          <button
            type="button"
            className="my-3 rounded-lg border-2 border-black bg-transparent p-3 text-center text-base font-semibold text-black transition-all hover:border-light-accent hover:text-accent hidden"
            data-umami-event="Home page link"
            data-umami-event-value="Contact us"
          >
            Contact us
          </button>
        </Link>
      </div>

      <div className="mt-6 flex w-full items-center justify-center p-5 lg:mt-0 lg:w-1/2 lg:p-2">
        <LottieAnimation animationData={heroLottie} width={400} height={400} />
      </div>
    </div>
  );
}
