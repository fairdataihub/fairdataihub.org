import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="relative mx-auto max-w-screen-2xl py-5">
        <div className="absolute right-0 top-1 z-0 hidden w-40 opacity-60 sm:top-10">
          <Image
            src="/backgrounds/dot-grid-grey.svg"
            alt="Grey grid"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute bottom-1 right-5 z-0 hidden w-40 opacity-60 sm:bottom-12">
          <Image
            src="/backgrounds/dot-grid-grey.svg"
            alt="Grey grid"
            width={500}
            height={500}
          />
        </div>
        <div className="container mx-auto flex w-full flex-col-reverse items-center px-1 py-2 sm:py-4 md:py-10 lg:flex-row">
          <div className="mb-2 flex flex-col items-center pt-5 text-center sm:mb-16 sm:pt-0 md:mb-0 md:items-start md:pr-0 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="mb-1 w-full text-center text-3xl font-black sm:text-4xl">
              FAIR Biomedical Research Software Guidelines
            </h1>

            <p className="mb-8 w-full text-center font-asap text-base leading-relaxed text-black">
              Minimal and actionable step-by-step guidelines for making
              <br />
              biomedical research software reusable in line with the FAIR4RS
              principles
              <br />
            </p>
            <div className="flex w-full flex-col justify-center space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
              <div className="flex flex-row justify-center">
                <a
                  href="https://fair-biors.org/"
                  target="_blank"
                  aria-label="FAIRbiors Guidelines"
                  rel="noopener"
                  className="rounded border-0 border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600 sm:block"
                  data-umami-event="Hero button"
                  data-umami-event-text="FAIRbiors Guidelines"
                >
                  Explore the guidelines
                </a>
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
              src="/images/hero/fairbiors.svg"
              alt="Screenshot of FAIRshare"
              width={1342}
              height={975}
              priority={true}
              className="h-auto w-auto object-scale-down"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
