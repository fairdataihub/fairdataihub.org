import Link from 'next/link';

import LottieAnimation from '@/components/lotties';

import teamLottie from '../../assets/lotties/team.json';

export default function AboutUs() {
  return (
    <div className="container mx-auto max-w-screen-lg px-6 py-0 sm:pb-4 sm:pt-6">
      <div className="items-center justify-center md:flex">
        <div className="mt-6 flex w-full items-center justify-center p-8 lg:mt-0 lg:w-1/2">
          <LottieAnimation
            animationData={teamLottie}
            width={400}
            height={400}
          />
        </div>

        <div className="h-full w-full p-2 lg:max-w-2xl">
          <h1 className="w-full py-4 pt-6 text-left text-4xl font-black subpixel-antialiased sm:text-center sm:text-3xl md:py-3 md:text-3xl lg:text-4xl">
            About Us
          </h1>

          <p className=" mb-6 mt-2 w-full text-left font-asap text-xl text-black sm:text-center  md:my-2 md:text-lg">
            FAIR Data Innovations Hub is a division of the California Medical
            Innovations Institute (CalMI<sup>2</sup>), a non profit biomedical
            research organization located in San Diego, California. We have a
            multidisciplinary team of enthusiasts about FAIR Data practices and
            software development.
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
  );
}
