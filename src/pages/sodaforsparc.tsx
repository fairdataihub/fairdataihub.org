import Head from 'next/head';

import Hero from '@/components/sodaforsparc/hero';
import About from '@/components/sodaforsparc/about';
import Impact from '@/components/sodaforsparc/impact';
import Info from '@/components/sodaforsparc/info';
import Timeline from '@/components/sodaforsparc/timeline';
import Publications from '@/components/sodaforsparc/publications';

export default function SodaForSparc() {
  return (
    <div>
      <Head>
        <title>SODA for SPARC - Fair Data Innovations Hub</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
      </Head>

      <main>
        <section className="bg-white py-10 pt-16">
          <Hero />
        </section>
        <section className="bg-gray-50 py-10 pt-16">
          <About />
        </section>
        <section className="bg-white py-10 pt-16">
          <Impact />
        </section>
        <section className="bg-gray-50 py-10 pt-16">
          <Info />
        </section>
        <section className="bg-white py-10 pt-16">
          <Timeline />
        </section>
        <section className="bg-white py-10 ">
          <Publications />
        </section>
      </main>
    </div>
  );
}
