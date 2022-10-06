import Link from 'next/link';

import LottieAnimation from '@/components/lotties';

import heroLottie from '../assets/lotties/404.json';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container mx-auto max-w-screen-lg px-6 py-8">
        <div className="flex flex-col items-center justify-center md:flex md:flex-row">
          <div className="mt-6 hidden w-full items-center justify-center p-5 md:flex lg:mt-0 lg:w-1/2 lg:p-2">
            <LottieAnimation
              animationData={heroLottie}
              width={500}
              height={500}
            />
          </div>
          <div className="mt-6 flex w-full items-center justify-center p-5 md:hidden lg:mt-0 lg:w-1/2 lg:p-2">
            <LottieAnimation
              animationData={heroLottie}
              width={400}
              height={400}
            />
          </div>

          <div className="w-full p-2 lg:w-1/2 lg:max-w-lg">
            <h1 className="w-full text-left text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
              Oops!
            </h1>

            <p className="mt-2 w-full text-xl font-normal text-black sm:mt-0 sm:text-base md:text-lg lg:text-xl">
              The page you are looking for might have been removed, had its name
              changed or is temporarily unavailable.
            </p>

            <Link href="/" passHref>
              <button
                type="button"
                className="my-3 rounded-lg border-2 border-black bg-transparent p-3 text-center text-base font-semibold text-black transition-all hover:border-light-accent hover:text-accent"
              >
                Go to Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
