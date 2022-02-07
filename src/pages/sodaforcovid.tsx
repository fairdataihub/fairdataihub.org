import Head from 'next/head';

import Hero from '@/components/sodaforcovid/hero';
import About from '@/components/sodaforcovid/about';
import Impact from '@/components/sodaforcovid/impact';
import Info from '@/components/sodaforcovid/info';
import Timeline from '@/components/sodaforcovid/timeline';
import Publications from '@/components/sodaforcovid/publications';

export default function SodaForCovid() {
  return (
    <div>
      <Head>
        <title>SODA for COVID-19 Research - Fair Data Innovations Hub</title>
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
