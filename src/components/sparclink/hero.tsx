import Image from 'next/image';

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
        <div className="absolute bottom-1 right-5 z-0 hidden w-40 opacity-60 sm:bottom-12 lg:block">
          <Image
            src="/backgrounds/dot-grid-grey.svg"
            alt="Grey grid"
            width={500}
            height={500}
          />
        </div>
        <div className="container mx-auto flex w-full flex-col-reverse items-center px-1 py-2 sm:py-4 md:py-10 lg:flex-row">
          <div className="mb-2 flex flex-col items-center pt-5 text-center sm:mb-16 sm:pt-0 md:mb-0 md:items-start md:pr-0 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="mb-1 w-full text-center font-inter text-3xl font-black sm:text-4xl">
              SPARClink
            </h1>
            <h2 className="mb-2 w-full text-center font-inter text-2xl font-medium sm:text-2xl">
              Visualizing the Impact of SPARC
            </h2>
            <p className="mb-8 w-full text-center font-asap text-base leading-relaxed text-black">
              A tool to understand the impact that SPARC and <br />
              the SPARC Data Standard have on the scientfic community
            </p>
            <div className="flex w-full justify-center">
              <a
                href="https://sparclink.vercel.app/sparclink"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex items-center justify-center rounded border-0 border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600">
                  Explore SPARClink
                </button>
              </a>
            </div>
          </div>

          <div className="relative z-10 py-2 sm:py-0 lg:max-w-2xl">
            <div className="absolute left-0 bottom-1 z-0 w-40 opacity-60 sm:bottom-0 lg:hidden">
              <Image
                src="/backgrounds/dot-grid-grey.svg"
                alt="Grey grid"
                width={500}
                height={500}
              />
            </div>
            <img
              className="pointer-events-none relative z-10 mx-auto rounded shadow-xl"
              alt="Knowmore gif"
              src="https://github.com/SPARC-FAIR-Codeathon/SPARClink/raw/main/docs/images/2021-07-25%2013-47-30.gif"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
