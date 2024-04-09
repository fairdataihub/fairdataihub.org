/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import Cobe from '@/components/home/cobe';
import Collaborators from '@/components/home/collaborators';
import ProjectsCarousel from '@/components/home/projectsCarousel';
import LottieAnimation from '@/components/lotties';
// import Vision from '@/components/home/vision';
import Seo from '@/components/seo/seo';

import heroLottie from '../assets/lotties/hero.json';
import teamLottie from '../assets/lotties/team.json';

export default function Home() {
  return (
    <div>
      <Seo
        templateDescription="FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings"
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="relative">
        <section className="mb-10 pt-12 sm:pt-16">
          <div className="hero container mx-auto max-w-screen-xl items-center justify-center px-2 py-8 md:flex">
            <div className="w-full p-2 lg:w-7/12 ">
              <h1 className="header-gradient-background w-full text-left text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
                Empowering AI driven discoveries through simplified FAIR data
                practices.
              </h1>

              <p className="mt-2 w-full max-w-lg text-xl font-medium text-black sm:mt-0 sm:text-base md:text-lg lg:text-xl">
                Discover how FAIR data practices are revolutionizing biomedical
                research. Explore our open-source tools designed to guide
                researchers through this transformative journey
              </p>

              <Link href="/contact-us" passHref>
                <button
                  type="button"
                  className="my-3 rounded-lg border-2 border-black bg-transparent p-3 text-center text-base font-semibold text-black transition-all hover:border-light-accent hover:text-accent"
                  data-umami-event="Home page link"
                  data-umami-event-value="Contact us"
                >
                  Contact us
                </button>
              </Link>
            </div>

            <div className="mt-6 flex w-full items-center justify-center p-5 lg:mt-0 lg:w-5/12 lg:p-2">
              <LottieAnimation
                animationData={heroLottie}
                width={400}
                height={400}
              />
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

      <section className="relative mx-auto hidden max-w-screen-xl py-20">
        <div className="mb-8 flex w-full flex-col items-center">
          <h2 className="my-2 text-center text-4xl font-extrabold tracking-tight sm:text-4xl">
            What are we working on?
          </h2>
        </div>

        <div className="flex h-full flex-col items-center justify-center  gap-3 md:flex-row">
          <div className="relative flex h-[450px] w-6/12 cursor-pointer flex-col rounded-lg border border-slate-200 bg-white p-1 shadow-md transition-all hover:border-slate-300 hover:shadow-lg">
            <div className="relative h-[280px]">
              <img
                src="https://i.imgur.com/ZYVW3Sh.png"
                alt="image"
                className="h-full w-full object-cover object-top"
              />
              <div
                className="absolute inset-0 bg-white"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%)`,
                }}
              ></div>
              <div
                className="absolute inset-0 bg-white"
                style={{
                  background: `linear-gradient(90deg, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%)`,
                }}
              ></div>
            </div>

            <div className="px-8 py-4">
              <h3 className="header-gradient-background mb-2 text-2xl font-bold">
                SODA for SPARC
              </h3>

              <p className="font-asap text-lg">
                Easily make bioelectronic, neurophysiology, and other similar
                research data and computational models FAIR following the NIH
                SPARC guidelines
              </p>
            </div>
          </div>

          <div className="flex h-[450px] w-6/12 cursor-pointer flex-col rounded-lg border border-slate-200 bg-white shadow-md transition-all hover:border-slate-300 hover:shadow-lg ">
            <div className="relative h-[280px]">
              <img
                src="https://i.imgur.com/OYy0ZiU.png"
                alt="image"
                className="h-full w-full object-cover object-top"
              />
              <div
                className="absolute inset-0 bg-white"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%)`,
                }}
              ></div>
              {/* <div
                className="absolute inset-0 bg-white"
                style={{
                  background: `linear-gradient(270deg, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%)`,
                }}
              ></div> */}
              <div
                className="absolute inset-0 bg-white"
                style={{
                  background: `linear-gradient(90deg, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%)`,
                }}
              ></div>
            </div>

            <div className="px-8 py-4">
              <h3 className="header-gradient-background mb-2 text-2xl font-bold">
                AI-READI
              </h3>

              <p className="font-asap text-lg">
                Generating a flagship AI-ready and ethically-sourced dataset to
                support future AI-driven discoveries in diabetes
              </p>
            </div>
          </div>
        </div>
        <div></div>

        <p className="mt-6 text-center text-xl">
          There is a lot more in the pipeline. To learn more about all our work
          in this area, please visit our{` `}
          <Link href="/projects" passHref>
            <span className="text-accent hover:underline">Projects</span>
          </Link>
          {` `}
          page.
        </p>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 className="header-gradient-background w-full text-center text-4xl font-extrabold sm:text-4xl">
            Sharing is caring... but also daunting?
          </h2>

          <div className="grid gap-10 pt-8 font-asap md:grid-cols-2">
            <p className="text-center text-xl md:text-left">
              Sharing biomedical data is essential for accelerating discoveries
              in human health. However, it&apos;s not as simple as uploading
              data anywhere. Adherence to FAIR (Findable, Accessible,
              Interoperable, Reusable) Principles and ethical guidelines is
              crucial to ensure data reusability. This involves formatting and
              organizing data according to standards, including metadata, and
              finding appropriate platforms for sharing.
            </p>

            <p className="text-center text-xl md:text-left">
              Unfortunately, many researchers lack the training and support
              needed for these tasks, leading to inadequate or non-existent data
              sharing practices. It&apos;s imperative to equip researchers with
              the necessary tools and resources to navigate these challenges
              effectively. By empowering researchers, we can foster a culture of
              responsible and impactful data sharing in biomedical research,
              ultimately advancing the pace of discoveries for improving human
              health.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="header-gradient-background w-full px-4 pb-10 text-center text-4xl font-extrabold sm:text-4xl">
            Simple guidelines and open-source tools for the win!
          </h2>

          <div className="items-start gap-16 px-4 lg:grid lg:grid-cols-2">
            <div className="pt-8 font-asap">
              <p className="mb-4 text-center text-xl md:text-left">
                We believe that researchers already have enough work and
                responsibilities on their hands. Therefore, sharing data,
                software, and other research outcomes should be made very easy
                and quick for them. We are trying to achieve that through two
                main approaches
              </p>
              <p className="mb-4 text-center text-xl md:text-left">
                Developing minimal, step-by-step, and actionable guidelines for
                preparing and sharing datasets, software, and other research
                outcomes such that they are FAIR and AI-Ready
              </p>
              <p className="text-center text-xl md:text-left">
                Developing open-source and free tools that streamline these
                tasks and minimize researchers&apos; time and effort through a
                combination of intuitive user interfaces, AI, and automation.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img
                className="w-[400px] rounded-lg"
                src="/images/home/high-five.svg"
                alt="office content 1"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative aspect-square rotate-[45deg] bg-gradient-to-tr from-pink-200 to-purple-100 opacity-50"
            style={{
              clipPath: `polygon(10% 15%, 60% 35%, 85% 55%, 70% 90%, 95% 98%, 35% 60%, 55% 15%, 10% 40%, 75% 55%, 70% 70%, 85% 35%, 60% 70%, 65% 25%, 50% 65%, 85% 70%, 95% 72%, 90% 80%)`,
            }}
          ></div>
        </div>
      </section>

      <section className="relative mt-10 hidden w-full py-20">
        <div className="mx-auto w-full max-w-screen-xl">
          <h2 className="header-gradient-background mb-10 w-full text-center text-4xl font-extrabold sm:text-4xl">
            Our solutions are making a difference worldwide
          </h2>
          <div className="mx-auto flex max-w-screen-md items-center justify-center">
            <div className="pt-8 font-asap">
              <p className="mb-4 max-w-md text-center text-xl md:text-left">
                Our solution are helping researchers all over the world with
                managing, curating, and sharing their data, software, and other
                research outcomes.
              </p>
            </div>

            <div className="relative mx-auto h-[350px] w-[350px]">
              <Cobe className={{}} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10">
        <div className="container mx-auto max-w-screen-xl px-6 py-0 sm:pb-4 sm:pt-6">
          <div className="items-center justify-center md:flex">
            <div className="mt-6 flex w-full items-center justify-center p-8 lg:mt-0 lg:w-1/2">
              <LottieAnimation
                animationData={teamLottie}
                width={400}
                height={400}
              />
            </div>

            <div className="h-full w-full p-2 lg:max-w-2xl">
              <h2 className="header-gradient-background my-10 text-center text-4xl font-extrabold sm:text-4xl">
                A little bit about us
              </h2>

              <p className="mb-6 mt-2 w-full text-center font-asap text-xl md:my-2">
                FAIR Data Innovations Hub is a division of the California
                Medical Innovations Institute (CalMI<sup>2</sup>), a non profit
                biomedical research organization located in San Diego,
                California. We have a multidisciplinary team of enthusiasts
                about FAIR Data practices and software development.
              </p>
              <div className="flex w-full justify-center py-5">
                <a
                  href="https://calmi2.org/"
                  target="_blank"
                  className="hidden"
                  rel="noopener"
                ></a>
                <Link href="/team" passHref>
                  <button
                    type="button"
                    className="w-max rounded-md border-none bg-black px-6 py-4 text-center text-base font-semibold text-white ring-2 ring-transparent ring-offset-2 transition duration-200 ease-in-out hover:ring-pink-600 focus:ring-pink-600"
                    data-umami-event="Home page link"
                    data-umami-event-value="Meet our team"
                  >
                    Meet our team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 -z-10 hidden transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative aspect-square rotate-[45deg] bg-gradient-to-tr from-pink-200 to-purple-300 opacity-50"
            style={{
              clipPath: `polygon(10% 15%, 60% 35%, 85% 55%, 70% 90%, 95% 98%, 35% 60%, 55% 15%, 10% 40%, 75% 55%, 70% 70%, 85% 35%, 60% 70%, 65% 25%, 50% 65%, 85% 70%, 95% 72%, 90% 80%)`,
            }}
          ></div>
        </div>
      </section>

      <section className="hidden py-10">
        <ProjectsCarousel />
      </section>

      <section className="py-10">
        <Collaborators />
      </section>
    </div>
  );
}
