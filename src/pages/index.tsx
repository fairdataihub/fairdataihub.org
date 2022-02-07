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
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
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
