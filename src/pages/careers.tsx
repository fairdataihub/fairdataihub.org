import Head from 'next/head';

import LottieAnimation from '@/components/lotties';

import careerLottie from '../assets/lotties/careers.json';

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Careers - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="Careers - Fair Data Innovations Hub"
        />
        <meta
          name="twitter:title"
          content="Careers - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/careers" />
        <meta property="og:url" content="https://fairdataihub.org/careers" />
        <meta name="twitter:url" content="https://fairdataihub.org/careers" />

        <meta name="description" content="View careers of fairdataihub.org" />
        <meta
          property="og:description"
          content="View careers of fairdataihub.org"
        />
        <meta
          name="twitter:description"
          content="View careers of fairdataihub.org"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
        <meta
          name="twitter:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
      </Head>

      <section>
        <div className="bg-[#f9f1f3] bg-cover bg-top bg-no-repeat md:bg-right-top 2xl:bg-contain">
          <div className="pt-12 sm:pt-16">
            <div className="careers-hero">
              <div className="mx-auto max-w-screen-lg px-6 py-8">
                <div className="items-center justify-center md:flex">
                  <div className="w-full p-2 lg:w-1/2 lg:max-w-lg">
                    <h1 className="w-full text-center text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
                      Join our wonderful team!
                    </h1>
                  </div>

                  <div className="mt-6 flex w-full items-center justify-center p-5 lg:mt-0 lg:w-1/2 lg:p-2">
                    <LottieAnimation
                      animationData={careerLottie}
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50">
          <div className="max-w-screen-lg flex flex-col mx-auto">
            <div className="px-6 sm:px-6 lg:px-6 lg:h-40 p-6">
              <div className="text-center lg:text-lg lg:text-left mx-12 ">
                <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
                  Open Positions
                </p>

                <p className="border-b-4 w-fit mb-2 mt-3 max-w-xs font-asap text-xl text-black sm:text-xl border-b-light-accent">
                  Discover Your FAIR Future Here
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-screen-lg flex flex-col mx-auto">
            <div className="bg-white px-6 sm:px-6 lg:px-6 lg:h-40 p-7">
              <div className="text-center lg:text-left lg:mx-12 flex flex-col items-center">
                <p className="font-asap text-lg h-32">
                  No open positions at the moment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50">
          <div className="max-w-screen-lg flex flex-col mx-auto">
            <div className="px-6 sm:px-6 lg:px-6 lg:h-40 p-6">
              <div className="text-center lg:text-lg lg:text-left mx-12 ">
                <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
                  Internship Opportunities
                </p>

                <p className="border-b-4 w-fit mb-2 mt-3 max-w-xs font-asap text-xl text-black sm:text-xl border-b-light-accent">
                  Dive into Internship Possibilities
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-screen-lg flex flex-col mx-auto">
            <div className="bg-white px-6 sm:px-6 lg:px-6 lg:h-40 p-7">
              <div className="text-center lg:text-left lg:mx-12 flex flex-col items-center">
                <p className="font-asap text-lg h-32">
                  We are always eager to welcome fresh perspectives. If
                  you&apos;re interested in interning with us, whether on-site
                  or remotely, please take a moment to complete the form below.
                  By joining our team, you&apos;ll have the chance to make a
                  meaningful impact on our projects, especially in the realm of
                  improving human health. In return, our experienced team is
                  committed to helping you expand and refine your knowledge in
                  software development best practices, web development, and
                  more.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-row items-center justify-center space-x-4 py-10">
              <button
                type="submit"
                onClick={() => {
                  console.log(`clicked`);
                }}
                className="cursor-pointer rounded border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600"
                data-umami-event="Intership form link"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
