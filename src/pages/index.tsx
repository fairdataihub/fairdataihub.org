/* eslint-disable @next/next/no-img-element */
import AboutUs from '@/components/home/aboutUs';
import Collaborators from '@/components/home/collaborators';
import Hero from '@/components/home/hero';
import ProjectsCarousel from '@/components/home/projectsCarousel';
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
        <section className="mb-10 pt-12 sm:pt-16">
          <Hero />
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

      <section className="py-10 mx-auto max-w-screen-xl">
        <div className="flex gap-3 items-center">
          <div className="bg-white w-3/5 flex h-full flex-col border rounded-md border-slate-200">
            <div className="h-[280px]">
              <img
                src="https://medusajs.com/images/image%20(13)-fd0d0376.png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-3 py-4">
              <h3>Project 1</h3>
            </div>
          </div>

          <div className="bg-white w-2/5 flex h-full flex-col border rounded-md border-slate-200">
            <div className="h-[280px]">
              <img
                src="https://medusajs.com/images/image%20(7)-df85652f.png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-3 py-4">
              <h3>Project 2</h3>
            </div>
          </div>
        </div>
        <div></div>
      </section>

      {/* <section className="py-10">
        <Vision />
      </section> */}

      <section className="bg-gray-50 py-10">
        <AboutUs />
      </section>

      <section className="bg-white py-10">
        <ProjectsCarousel />
      </section>

      <section className="bg-[#f9f1f3] py-10">
        <Collaborators />
      </section>
    </div>
  );
}
