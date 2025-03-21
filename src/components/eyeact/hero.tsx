import Image from 'next/image';

import Tooltip from '@/components/ui/tooltip';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="relative mx-auto max-w-screen-2xl py-5">
        <div className="absolute right-0 top-1 z-0 w-40 opacity-60 sm:top-10">
          <Image
            src="/backgrounds/dot-grid-grey.svg"
            alt="Grey grid"
            width={500}
            height={500}
          />
        </div>
        {/* <div className="absolute bottom-1 right-5 z-0 hidden w-40 opacity-60 sm:bottom-12 lg:block">
          <Image
            src="/backgrounds/dot-grid-grey.svg"
            alt="Grey grid"
            width={500}
            height={500}
          />
        </div> */}
        <div className="container mx-auto flex w-full flex-col-reverse items-center px-1 py-2 sm:py-4 md:py-10 lg:flex-row">
          <div className="mb-2 flex flex-col items-center pt-5 text-center sm:mb-16 sm:pt-0 md:mb-0 md:items-start md:pr-0 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="mb-1 w-full text-center text-3xl font-black sm:text-4xl">
              Eye ACT
            </h1>
            <h2 className="mb-4 mt-2 w-full text-center text-2xl font-medium sm:text-2xl">
              Seeing the Future of Brain Health Through the Eyes
            </h2>

            <div className="flex w-full flex-col justify-center space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
              <div className="relative flex flex-row justify-center">
                <Tooltip tooltipContent="Coming soon" placement="bottom">
                  <button
                    disabled
                    aria-label="EyeACT Study website - Coming Soon"
                    className="relative cursor-not-allowed rounded border-0 bg-gray-400 px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all"
                  >
                    Learn More
                  </button>
                </Tooltip>
              </div>
              <div className="relative flex flex-row justify-center">
                <Tooltip tooltipContent="Coming soon" placement="bottom">
                  <button
                    disabled
                    aria-label="EyeACT Study website - Coming Soon"
                    className="relative cursor-not-allowed rounded border-0 bg-gray-400 px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all"
                  >
                    Visit the Envision Portal
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="relative z-10 py-2 sm:py-0 lg:max-w-2xl">
            <div className="absolute bottom-1 left-0 z-0 w-40 opacity-60 sm:bottom-0 lg:hidden">
              <Image
                src="/backgrounds/dot-grid-grey.svg"
                alt="Grey grid"
                width={100}
                height={100}
              />
            </div>

            <Image
              src="/images/hero/eye-act-logo.png"
              alt="Eye Act logo"
              width={150}
              height={150}
              priority={true}
              className="h-auto w-auto object-scale-down"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
