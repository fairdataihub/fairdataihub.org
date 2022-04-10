import Head from 'next/head';

import Hero from '@/components/home/hero';
import Vision from '@/components/home/vision';
import AboutUs from '@/components/home/aboutUs';
import ProjectsCarousel from '@/components/home/projectsCarousel';
import Collaborators from '@/components/home/collaborators';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fair Data Innovations Hub</title>
        <meta property="og:title" content="Fair Data Innovations Hub" />
        <meta property="twitter:title" content="Fair Data Innovations Hub" />

        <link rel="canonical" href="https://fairdataihub.org" />
        <meta property="og:url" content="https://fairdataihub.org" />
        <meta property="twitter:url" content="https://fairdataihub.org" />

        <meta
          name="description"
          content="FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings"
        />
        <meta
          property="og:description"
          content="FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings"
        />
        <meta
          property="twitter:description"
          content="FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
        <meta
          property="twitter:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
      </Head>

      <main>
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

        <section className="bg-white py-10">
          <Collaborators />
        </section>
      </main>
    </div>
  );
}
