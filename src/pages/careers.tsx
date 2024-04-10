import React from 'react';

import InternshipPositions from '@/components/careers/internshipPositions';
import LottieAnimation from '@/components/lotties';
import Seo from '@/components/seo/seo';

import careerLottie from '../assets/lotties/careers.json';

export default function Careers() {
  return (
    <>
      <Seo
        templateTitle="Careers"
        templateDescription="View open positions at the FAIR Data Innovations Hub."
        templateImage="https://fairdataihub.org/thumbnails/index.png"
        templateUrl="https://fairdataihub.org/careers"
      />

      <div className="relative">
        <section className="mb-10 pt-12 sm:pt-16">
          <div className="hero container mx-auto max-w-screen-xl items-center justify-center px-2 py-8 md:flex">
            <div className="w-full p-2 lg:w-7/12 ">
              <h1 className="header-gradient-background w-full text-left text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
                Join our wonderful team!
              </h1>

              <p className="mt-2 w-full max-w-lg text-xl font-medium text-black sm:mt-0 sm:text-base md:text-lg lg:text-xl">
                We are always looking for talented individuals to join our team.
                If you are passionate about data and technology, we want to hear
                from you!
              </p>
            </div>

            <div className="mt-6 flex w-full items-center justify-center p-5 lg:mt-0 lg:w-5/12 lg:p-2">
              <LottieAnimation
                animationData={careerLottie}
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
            className="relative aspect-square rotate-[45deg] bg-gradient-to-tr from-pink-200 to-purple-100 opacity-50"
            style={{
              clipPath: `polygon(10% 15%, 60% 35%, 85% 55%, 70% 90%, 95% 98%, 35% 60%, 55% 15%, 10% 40%, 75% 55%, 70% 70%, 85% 35%, 60% 70%, 65% 25%, 50% 65%, 85% 70%, 95% 72%, 90% 80%)`,
            }}
          ></div>
        </div>
      </div>

      <section className="relative py-20">
        <div className="container mx-auto max-w-screen-xl px-6 ">
          <div className="h-full w-full p-2">
            <h2 className="text-left text-4xl font-extrabold text-stone-900 sm:text-4xl">
              Open Positions
            </h2>

            <p className="mb-4 mt-2 text-left font-asap text-lg">
              Discover your potential at the FAIR Data Innovations Hub.
            </p>
          </div>

          <div className="mx-auto flex max-w-screen-lg flex-col">
            <div className="bg-white p-7 px-6 sm:px-6 lg:h-40 lg:px-6">
              <div className="flex flex-col items-center text-center lg:mx-12 lg:text-left">
                <p className="h-32 font-asap text-lg">
                  No open positions at the moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternshipPositions />
    </>
  );
}
