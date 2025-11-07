import Image from 'next/image';
import Link from 'next/link';

import HorizontalEventTimelineCarousel from '@/components/horizontal-event-timeline-carousel';

export default function ImpactSection() {
  return (
    <section className="relative py-10">
      <div className="container mx-auto max-w-screen-xl px-6">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row">
          <div className="h-full w-full p-2 lg:max-w-2xl">
            <h2 className="text-left text-4xl font-extrabold text-stone-900 sm:text-4xl">
              We are making a difference
            </h2>

            <div className="font-asap pt-8">
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
            <Image
              className="w-[400px] rounded-lg"
              src="/images/home/3d-impact.png"
              alt="office content 1"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
      <HorizontalEventTimelineCarousel />
    </section>
  );
}
