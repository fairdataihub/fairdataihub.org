/* eslint-disable @next/next/no-img-element */

// import Vision from '@/components/home/vision';
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

            <div className="flex w-full flex-col gap-10 rounded-md border border-slate-300 bg-white px-3 py-5">
              <div>SODA for SPARC</div>
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
