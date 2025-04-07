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
              <h1 className="w-full text-left text-4xl font-black text-stone-900 sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
                We are cooking a lot of cool stuff!
              </h1>

              <p className="mt-2 w-full text-xl font-medium text-black sm:mt-0 sm:text-base md:text-lg lg:text-xl">
                See what we are up to below
              </p>
            </div>

            <div className="flex w-full flex-col gap-5">
              <Link href="/sodaforsparc">
                <div className="group grid w-full cursor-pointer rounded-md border border-slate-200 bg-white/90 px-7 py-5 shadow-md transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg sm:grid-cols-12">
                  <div className="flex flex-col pb-5 sm:col-span-10 sm:pr-5">
                    <div>
                      <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                        Software
                      </span>

                      <h2 className="mb-2 mt-2 w-full text-2xl font-semibold sm:text-2xl">
                        SODA for SPARC
                      </h2>
                    </div>

                    <p className="w-full font-asap text-lg text-black">
                      SODA (Software to Organize Data Automatically) for SPARC
                      is a cross-platform desktop software that allows
                      SPARC-funded researchers to easily comply with the FAIR
                      SPARC Data curation and sharing guidelines.
                    </p>
                  </div>

                  <div className="relative h-full w-full overflow-hidden transition-all group-hover:scale-[1.02] sm:col-span-2">
                    <img
                      src="/images/hero/soda-app-macos.png"
                      alt="Screenshot of SODA for SPARC"
                      className="h-full w-full rounded-md object-contain"
                    />
                  </div>
                </div>
              </Link>

              <Link href="/aireadi">
                <div className="group grid w-full cursor-pointer rounded-md border border-slate-200 bg-white/90 px-7 py-5 shadow-md transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg sm:grid-cols-12">
                  <div className="flex flex-col pb-5 sm:col-span-10 sm:pr-5">
                    <div>
                      <div className="flex space-x-2">
                        <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                          Platform
                        </span>
                        <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                          Standards
                        </span>
                        <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                          Guidelines
                        </span>
                      </div>

                      <h2 className="mb-2 mt-2 w-full text-2xl font-semibold sm:text-2xl">
                        Artificial Intelligence Ready and Exploratory Atlas for
                        Diabetes Insights
                      </h2>
                    </div>

                    <p className="w-full font-asap text-lg text-black">
                      AI-READI is one of the data generation projects funded by
                      the National Institutes of Health (NIH)&apos;s Bridge2AI
                      Program. The AI-READI project is structured into six
                      modules: Data Acquisition, Ethics, Standards, Teaming,
                      Tools, and Skills & Workforce Development. The FAIR Data
                      Innovations Hub is leading the Tools module.
                    </p>
                  </div>

                  <div className="relative h-full w-full overflow-hidden transition-all group-hover:scale-[1.02] sm:col-span-2">
                    <img
                      src="/images/hero/aireadi-logo.png"
                      alt="Screenshot of SODA for SPARC"
                      className="h-full w-full rounded-md object-contain"
                    />
                  </div>
                </div>
              </Link>

              <Link href="/eyeact">
                <div className="group grid w-full cursor-pointer rounded-md border border-slate-200 bg-white/90 px-7 py-5 shadow-md transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg sm:grid-cols-12">
                  <div className="flex flex-col pb-5 sm:col-span-10 sm:pr-5">
                    <div>
                      <div className="flex space-x-2">
                        <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                          Platform
                        </span>
                        <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                          Standards
                        </span>
                        <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                          Guidelines
                        </span>
                      </div>

                      <h2 className="mb-2 mt-2 w-full text-2xl font-semibold sm:text-2xl">
                        Eye ACT
                      </h2>
                    </div>

                    <p className="w-full font-asap text-lg text-black">
                      The Eye ACT study aims to provide insights on how
                      opthalmic conditions such as glaucoma and diabetic
                      retinopathy can provide early indicators to
                      Alzheimer&apos;s disease. By leveraging the Envision
                      Portal, it enhances data management, sharing, and
                      AI-driven research under FAIR principles to accelerate
                      discoveries in vision and brain health.
                    </p>
                  </div>

                  <div className="relative h-full w-full overflow-hidden transition-all group-hover:scale-[1.02] sm:col-span-2">
                    <img
                      src="/images/hero/eye-act-logo.png"
                      alt="Screenshot of Eye ACT"
                      className="h-full w-full rounded-md object-contain"
                    />
                  </div>
                </div>
              </Link>

              <Link href="/fair-biors">
                <div className="group grid w-full cursor-pointer rounded-md border border-slate-200 bg-white/90 px-7 py-5 shadow-md transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg sm:grid-cols-12">
                  <div className="flex flex-col pb-5 sm:col-span-10 sm:pr-5">
                    <div>
                      <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                        Guidelines
                      </span>

                      <h2 className="mb-2 mt-2 w-full text-2xl font-semibold sm:text-2xl">
                        FAIR Biomedical Research Software Guidelines
                      </h2>
                    </div>

                    <p className="w-full font-asap text-lg text-black">
                      Minimal and actionable step-by-step guidelines for making
                      biomedical research software reusable in line with the
                      FAIR4RS principles.
                    </p>
                  </div>

                  <div className="relative h-full w-full overflow-hidden transition-all group-hover:scale-[1.02] sm:col-span-2">
                    <img
                      src="https://fair-biors.org/img/logo.svg"
                      alt="Screenshot of SODA for SPARC"
                      className="h-full w-full rounded-md object-contain"
                    />
                  </div>
                </div>
              </Link>

              <Link href="/codefair">
                <div className="group grid w-full cursor-pointer rounded-md border border-slate-200 bg-white/90 px-7 py-5 shadow-md transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg sm:grid-cols-12">
                  <div className="flex flex-col pb-5 sm:col-span-10 sm:pr-5">
                    <div>
                      <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                        Software
                      </span>

                      <h2 className="mb-2 mt-2 w-full text-2xl font-semibold sm:text-2xl">
                        Codefair
                      </h2>
                    </div>

                    <p className="w-full font-asap text-lg text-black">
                      Codefair is a automated GitHub app that helps you make
                      your research software reusable and especially complying
                      with the Findable, Accessible, Interoperable, Reusable
                      (FAIR) Principles for Research Software.
                    </p>
                  </div>

                  <div className="relative h-full w-full overflow-hidden transition-all group-hover:scale-[1.02] sm:col-span-2">
                    <img
                      src="/images/hero/codefair-logo.png"
                      alt="Screenshot of SODA for SPARC"
                      className="h-full w-full rounded-md object-contain"
                    />
                  </div>
                </div>
              </Link>

              <Link href="/fairshare">
                <div className="group grid w-full cursor-pointer rounded-md border border-slate-200 bg-white/90 px-7 py-5 shadow-md transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg sm:grid-cols-12">
                  <div className="flex flex-col pb-5 sm:col-span-10 sm:pr-5">
                    <div>
                      <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                        Software
                      </span>

                      <h2 className="mb-2 mt-2 w-full text-2xl font-semibold sm:text-2xl">
                        FAIRshare
                      </h2>
                    </div>

                    <p className="w-full font-asap text-lg text-black">
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

                  <div className="relative h-full w-full overflow-hidden transition-all group-hover:scale-[1.02] sm:col-span-2">
                    <img
                      src="/images/hero/fairshare-macos.png"
                      alt="Screenshot of SODA for SPARC"
                      className="h-full w-full rounded-md object-contain"
                    />
                  </div>
                </div>
              </Link>

              <Link href="/knowmore">
                <div className="group grid w-full cursor-pointer rounded-md border border-slate-200 bg-white/90 px-7 py-5 shadow-md transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg sm:grid-cols-12">
                  <div className="flex flex-col pb-5 sm:col-span-10 sm:pr-5">
                    <div>
                      <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                        Software
                      </span>

                      <h2 className="mb-2 mt-2 w-full text-2xl font-semibold sm:text-2xl">
                        KnowMore
                      </h2>
                    </div>

                    <p className="w-full font-asap text-lg text-black">
                      KnowMore is a tool readily integrable into the SPARC
                      Portal that allows to find potential relation, difference,
                      and similarities between multiple SPARC datasets in just a
                      few clicks, which can lead to a new discovery, new
                      hypothesis, or simply guide the user to the next logical
                      step in their discovery process.
                    </p>
                  </div>

                  <div className="relative h-full w-full overflow-hidden transition-all group-hover:scale-[1.02] sm:col-span-2">
                    <img
                      src="https://github.com/SPARC-FAIR-Codeathon/KnowMore/raw/main/docs/kmlogo-with-text3.png"
                      alt="Screenshot of SODA for SPARC"
                      className="h-full w-full rounded-md object-contain"
                    />
                  </div>
                </div>
              </Link>

              <Link href="/sparclink">
                <div className="group grid w-full cursor-pointer rounded-md border border-slate-200 bg-white/90 px-7 py-5 shadow-md transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg sm:grid-cols-12">
                  <div className="flex flex-col pb-5 sm:col-span-10 sm:pr-5">
                    <div>
                      <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                        Software
                      </span>

                      <h2 className="mb-2 mt-2 w-full text-2xl font-semibold sm:text-2xl">
                        SPARClink
                      </h2>
                    </div>

                    <p className="w-full font-asap text-lg text-black">
                      SPARClink provides a system that queries all external
                      publications using open source tools and platforms to
                      create interactable visualizations that showcases the
                      impact that SPARC has on the overall scientific research
                      community.
                    </p>
                  </div>

                  <div className="relative h-full w-full overflow-hidden transition-all group-hover:scale-[1.02] sm:col-span-2">
                    <img
                      src="https://github.com/SPARC-FAIR-Codeathon/SPARClink/raw/main/docs/images/logo.svg"
                      alt="Screenshot of SODA for SPARC"
                      className="h-full w-full rounded-md object-contain"
                    />
                  </div>
                </div>
              </Link>

              <Link href="/aqua">
                <div className="group grid w-full cursor-pointer rounded-md border border-slate-200 bg-white/90 px-7 py-5 shadow-md transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg sm:grid-cols-12">
                  <div className="flex flex-col pb-5 sm:col-span-10 sm:pr-5">
                    <div>
                      <span className="rounded bg-blue-100 px-2.5 py-0.5 text-base font-medium text-blue-800">
                        Software
                      </span>

                      <h2 className="mb-2 mt-2 w-full text-2xl font-semibold sm:text-2xl">
                        Advanced Query Architecture for the SPARC Portal
                      </h2>
                    </div>

                    <p className="w-full font-asap text-lg text-black">
                      AQUA (Advanced Query Architecture for the SPARC Portal) an
                      application that aims at improving the search capabilities
                      of the SPARC Portal.
                    </p>
                  </div>

                  <div className="relative h-full w-full overflow-hidden transition-all group-hover:scale-[1.02] sm:col-span-2">
                    <img
                      src="/images/hero/aqua-logo-full.png"
                      alt="Screenshot of SODA for SPARC"
                      className="h-full w-full rounded-md object-contain"
                    />
                  </div>
                </div>
              </Link>
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
