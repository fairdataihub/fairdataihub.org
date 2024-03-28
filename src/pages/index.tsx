import AboutUs from '@/components/home/aboutUs';
import Collaborators from '@/components/home/collaborators';
import Hero from '@/components/home/hero';
import ProjectsCarousel from '@/components/home/projectsCarousel';
import Vision from '@/components/home/vision';
import Seo from '@/components/seo/seo';

export default function Home() {
  return (
    <div>
      <Seo
        templateDescription="FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings"
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="bg-haikeiWavy bg-cover bg-top bg-no-repeat md:bg-right-top 2xl:bg-contain">
        <section className="mb-10 pt-12 sm:pt-16">
          <Hero />
        </section>

        <section className="py-10">
          <Vision />
        </section>
      </div>

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
