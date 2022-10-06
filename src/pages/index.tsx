import Head from 'next/head';

import AboutUs from '@/components/home/aboutUs';
import Collaborators from '@/components/home/collaborators';
import Hero from '@/components/home/hero';
import ProjectsCarousel from '@/components/home/projectsCarousel';
import Vision from '@/components/home/vision';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fair Data Innovations Hub</title>
        <meta property="og:title" content="Fair Data Innovations Hub" />
        <meta name="twitter:title" content="Fair Data Innovations Hub" />

        <link rel="canonical" href="https://fairdataihub.org" />
        <meta property="og:url" content="https://fairdataihub.org" />
        <meta name="twitter:url" content="https://fairdataihub.org" />

        <meta
          name="description"
          content="FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings"
        />
        <meta
          property="og:description"
          content="FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings"
        />
        <meta
          name="twitter:description"
          content="FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings"
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
    </div>
  );
}
