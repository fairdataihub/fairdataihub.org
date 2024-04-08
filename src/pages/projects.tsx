/* eslint-disable @next/next/no-img-element */

// import Vision from '@/components/home/vision';
import Link from 'next/link';

import Seo from '@/components/seo/seo';

export default function Home() {
  return (
    <div>
      <Seo
        templateDescription="FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings"
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="relative">
        <section className="mb-10 px-2 pt-12 sm:pt-16">
          <div className="hero container mx-auto max-w-screen-xl items-center justify-center px-2 py-8">
            <div className="mb-10 w-full">
              <h1 className="header-gradient-background w-full text-left text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
                We are woking on lots of things
              </h1>

              <p className="mt-2 w-full text-xl font-medium text-black sm:mt-0 sm:text-base md:text-lg lg:text-xl">
                See what we are up to below!
              </p>
            </div>

            <div className="flex w-full flex-col gap-5 ">
              <Link href="/sodaforsparc">
                <div className="group grid w-full cursor-pointer grid-cols-12 rounded-md border border-slate-200 bg-white/90 px-7 py-5 shadow-md transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg">
                  <div className="col-span-10 flex flex-col pr-5">
                    <div>
                      <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                        Software
                      </span>

                      <h2 className="mb-2 mt-2 w-full text-2xl font-semibold sm:text-2xl">
                        SODA for SPARC
                      </h2>
                    </div>

                    <p className="m w-full font-asap text-lg  text-black">
                      SODA (Software to Organize Data Automatically) for SPARC
                      is a cross-platform desktop software that allows
                      SPARC-funded researchers to easily comply with the FAIR
                      SPARC Data curation and sharing guidelines.
                    </p>
                  </div>

                  <div className="relative col-span-2 h-full w-full overflow-hidden transition-all group-hover:scale-[1.02]">
                    <img
                      src="/images/hero/soda-app-macos.png"
                      alt="Screenshot of SODA for SPARC"
                      className="h-full w-full rounded-md object-contain"
                    />
                  </div>
                </div>
              </Link>

              <div className="group grid w-full cursor-pointer grid-cols-12 rounded-md border border-slate-200 bg-white/90 px-7 py-5 shadow-md transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg">
                <div className="col-span-10 flex flex-col pr-5">
                  <div>
                    <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                      Software
                    </span>

                    <h2 className="mb-2 mt-2 w-full text-2xl font-semibold sm:text-2xl">
                      FAIRshare
                    </h2>
                  </div>

                  <p className="m w-full font-asap text-lg  text-black">
                    FAIRshare is a cross-platform desktop software that allows
                    researchers to easily organize and share their biomedical
                    data and software according to applicable FAIR guidelines.
                    The first phase of development of FAIRshare is focused on
                    supporting COVID-19 and other infectious diseases related
                    data and software. Our ultimate goal is to provide support
                    for data and software from all fields of biomedical
                    research.
                  </p>
                </div>

                <div className="relative col-span-2 h-full w-full overflow-hidden transition-all group-hover:scale-[1.02]">
                  <img
                    src="/images/hero/fairshare-macos.png"
                    alt="Screenshot of SODA for SPARC"
                    className="h-full w-full rounded-md object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative aspect-square rotate-[30deg] bg-gradient-to-tr from-pink-300 to-purple-500 opacity-30"
            style={{
              clipPath: `polygon(6% 8%, 52% 29%, 93% 51%, 68% 82%, 99% 94%, 32% 57%, 48% 10%, 5% 37%, 69% 52%, 63% 63%, 81% 28%, 56% 64%, 62% 21%, 46% 61%, 79% 65%, 93% 68%, 88% 75%)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
