/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import BentoProjects from '@/components/home/bentoProjects';
import Cobe from '@/components/home/cobe';
import Collaborators from '@/components/home/collaborators';
// import Vision from '@/components/home/vision';
import Seo from '@/components/seo/seo';
import { FlipWords } from '@/components/ui/flip-words';
import { SparklesCore } from '@/components/ui/sparkles';

export default function Home() {
  const wordsFlips = [
    `Simplifying`,
    `Streamlining`,
    `Automating`,
    `Empowering`,
  ];
  return (
    <div>
      <Seo
        templateDescription="FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings"
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="relative">
        <section className="relative isolate mb-10 overflow-visible pt-12 sm:pt-16">
          <div className="hero container relative z-10 mx-auto max-w-screen-xl items-center justify-center px-2 py-8 md:flex">
            <div className="flex w-full flex-col items-center justify-center p-2">
              <h1 className="header-gradient-background w-full text-center text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:w-3/4 lg:text-5xl">
                <FlipWords words={wordsFlips} /> FAIR data practices to empower
                AI-driven discoveries
              </h1>

              <div className="relative mx-auto mt-2 h-48 w-full sm:h-40">
                <div
                  aria-hidden
                  className="spotlight [--spot-bleed:28rem] [--spot-bottom-left:2%] [--spot-bottom-right:98%] [--spot-end:90%] [--spot-h:860px] [--spot-mid:34%] [--spot-top-left:40%] [--spot-top-right:60%] [--spot-w:2000px] md:[--spot-end:92%] md:[--spot-top-left:32%] md:[--spot-top-right:66%]"
                >
                  <SparklesCore
                    background="transparent"
                    minSize={1.5}
                    maxSize={4.5}
                    particleDensity={100}
                    className="absolute inset-0"
                    particleColor="#F098D4"
                  />
                </div>

                <div className="absolute left-1/2 top-0 z-10 h-[2px] w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-400 to-transparent blur-sm" />
                <div className="absolute left-1/2 top-0 z-10 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
                <div className="absolute left-1/2 top-0 z-10 h-[5px] w-[28%] -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-400 to-transparent blur-sm" />
                <div className="absolute left-1/2 top-0 z-10 h-px w-[28%] -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />

                <div className="absolute inset-0 z-10 h-full w-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
                <div className="absolute inset-0 z-20 flex items-end justify-center">
                  <p className="mb-1 w-full max-w-2xl text-center text-xl font-medium text-black sm:text-base md:text-lg lg:text-xl">
                    We develop open source tools, standards, and guidelines that
                    support biomedical researchers in preparing and sharing
                    data, software, and other research outcomes such that they
                    are FAIR, i.e. optimally reusable by both humans and
                    machines.
                  </p>
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

      <BentoProjects />

      <section className="pb-20 pt-4">
        <Collaborators />
      </section>

      <section className="relative py-10">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="flex flex-col-reverse items-center justify-center md:flex-row">
            <div className="h-full w-full p-2 lg:max-w-2xl">
              <h2 className="text-left text-4xl font-extrabold text-stone-900 sm:text-4xl">
                The FAIR Data wave
              </h2>

              <div className="pt-8 font-asap">
                <p className="mb-4 text-left text-xl">
                  The FAIR (Findable, Accessible, Interoperable, Reusable)
                  Principles are a set of instructions for sharing data and
                  other research outcomes such that they are optimally reusable.
                  Since their publication in 2016, they have been promoted and
                  adopted by a large number of stakeholders in research data
                  including the National Institutes of Health (NIH).
                </p>
              </div>

              <div className="flex w-full justify-start py-5">
                <Link href="https://doi.org/10.1038/sdata.2016.18" passHref>
                  <button
                    type="button"
                    className="w-max rounded-md border-none bg-black px-5 py-3 text-center text-base font-semibold text-white ring-2 ring-transparent ring-offset-2 transition duration-200 ease-in-out hover:ring-pink-600 focus:ring-pink-600"
                    data-umami-event="Home page link"
                    data-umami-event-value="Learn more about the FAIR Principles"
                  >
                    Learn more about the FAIR Principles
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex w-full items-center justify-center p-8 lg:mt-0 lg:w-1/2">
              <img
                className="w-[400px] rounded-lg"
                src="/images/home/collaboration.svg"
                alt="office content 1"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="items-center justify-center md:flex">
            <div className="mt-6 flex w-full items-center justify-center p-8 lg:mt-0 lg:w-1/2">
              <img
                className="w-[400px] rounded-lg"
                src="/images/home/difficult.svg"
                alt="office content 1"
              />
            </div>

            <div className="h-full w-full p-2 lg:max-w-2xl">
              <h2 className="text-left text-4xl font-extrabold text-stone-900 sm:text-4xl">
                Sharing is caring... but also daunting
              </h2>

              <p className="mb-6 mt-8 w-full text-left font-asap text-xl">
                Sharing FAIR data is not trivial as this involves formatting
                data into specific file format, organizing data files
                consistently, including metadata according to applicable
                standards, uploading data to a suitable repository, and more.
                This adds significant burden on researchers who are typically
                not trained or supported to do this. As result, they are either
                not making data FAIR or not doing it properly.
              </p>
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

      <section className="relative py-10">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="flex flex-col-reverse items-center justify-center md:flex-row">
            <div className="h-full w-full p-2 lg:max-w-2xl">
              <h2 className="text-left text-4xl font-extrabold text-stone-900 sm:text-4xl">
                Simple guidelines and open-source tools for the win!
              </h2>

              <div className="pt-8 font-asap">
                <p className="mb-4 text-left text-xl">
                  We believe that researchers already have enough work and
                  responsibilities on their hands. Therefore, making data,
                  software, and other research outcomes FAIR should be made very
                  easy for them. We are trying to achieve that through two main
                  approaches:
                </p>
                <ul className="list list-outside list-decimal px-5">
                  <li className="mb-4 text-left text-xl">
                    Developing minimal, step-by-step, and actionable guidelines
                    for preparing and sharing FAIR datasets, software, and other
                    research outcomes such that researchers can easily follow
                    and implement them.
                  </li>
                  <li className="text-left text-xl">
                    Developing open-source and free tools that streamline the
                    implementation of these guidelines and minimize
                    researchers&apos; time and effort through a combination of
                    intuitive user interfaces, AI, and automation.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex w-full items-center justify-center p-8 lg:mt-0 lg:w-1/2">
              <img
                className="w-[400px] rounded-lg"
                src="/images/home/high-five.svg"
                alt="office content 1"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative hidden w-full py-20">
        <div className="mx-auto w-full max-w-screen-xl">
          <h2 className="mb-10 w-full text-center text-4xl font-extrabold text-stone-900 sm:text-4xl">
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
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="items-center justify-center md:flex">
            <div className="flex w-full items-center justify-center p-8 lg:mt-0 lg:w-1/2">
              <img
                className="w-[400px] rounded-lg"
                src="/images/home/team.svg"
                alt="office content 1"
              />
            </div>

            <div className="h-full w-full p-2 lg:max-w-2xl">
              <h2 className="my-10 text-left text-4xl font-extrabold text-stone-900 sm:text-4xl">
                A little bit about us
              </h2>

              <p className="mb-6 mt-2 w-full text-left font-asap text-xl md:my-2">
                FAIR Data Innovations Hub is a division of the California
                Medical Innovations Institute (CalMI<sup>2</sup>), a non profit
                biomedical research organization located in San Diego,
                California. We started this division in 2019 and now have a
                multidisciplinary team of enthusiasts about FAIR Data practices
                and software development.
              </p>

              <div className="flex w-full justify-start py-5">
                <Link href="/team" passHref>
                  <button
                    type="button"
                    className="w-max rounded-md border-none bg-black px-5 py-3 text-center text-base font-semibold text-white ring-2 ring-transparent ring-offset-2 transition duration-200 ease-in-out hover:ring-pink-600 focus:ring-pink-600"
                    data-umami-event="Home page link"
                    data-umami-event-value="Team"
                  >
                    Meet our team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
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

      <section className="relative py-10">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="flex flex-col-reverse items-center justify-center md:flex-row">
            <div className="h-full w-full p-2 lg:max-w-2xl">
              <h2 className="text-left text-4xl font-extrabold text-stone-900 sm:text-4xl">
                We are making a difference
              </h2>

              <div className="pt-8 font-asap">
                <p className="mb-4 text-left text-xl">
                  Our work has led to peer-reviewed publications, development of
                  open-source software, establishment of new standards and
                  guidelines, conference presentations, and much more.
                </p>

                <div className="flex w-full justify-start py-5">
                  <Link href="/impact" passHref>
                    <button
                      type="button"
                      className="w-max rounded-md border-none bg-black px-5 py-3 text-center text-base font-semibold text-white ring-2 ring-transparent ring-offset-2 transition duration-200 ease-in-out hover:ring-pink-600 focus:ring-pink-600"
                      data-umami-event="Home page link"
                      data-umami-event-value="See our impact"
                    >
                      See our impact
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center p-8 lg:mt-0 lg:w-1/2">
              <img
                className="w-[400px] rounded-lg"
                src="/images/home/impact.svg"
                alt="office content 1"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="items-center justify-center md:flex">
            <div className="flex w-full items-center justify-center p-8 lg:mt-0 lg:w-1/2">
              <img
                className="w-[400px] rounded-lg"
                src="/images/home/contact.svg"
                alt="office content 1"
              />
            </div>

            <div className="h-full w-full p-2 lg:max-w-2xl">
              <h2 className="my-10 text-left text-4xl font-extrabold text-stone-900 sm:text-4xl">
                Let&apos;s get in touch
              </h2>

              <p className="mb-6 mt-2 w-full text-left font-asap text-xl md:my-2">
                Need help with sharing data or research software? Want to
                collaborate on a cool new project or grant proposal? Have
                feedback or suggestions? Reach out to us!
              </p>

              <div className="flex w-full justify-start py-5">
                <Link href="/contact-us" passHref>
                  <button
                    type="button"
                    className="w-max rounded-md border-none bg-black px-5 py-3 text-center text-base font-semibold text-white ring-2 ring-transparent ring-offset-2 transition duration-200 ease-in-out hover:ring-pink-600 focus:ring-pink-600"
                    data-umami-event="Home page link"
                    data-umami-event-value="Team"
                  >
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
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
    </div>
  );
}
