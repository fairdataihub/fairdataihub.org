import Head from 'next/head';

import Hero from '@/components/knowmore/hero';
import About from '@/components/knowmore/about';
import Info from '@/components/knowmore/info';
import Publications from '@/components/knowmore/publications';

export default function KnowMore() {
  return (
    <div>
      <Head>
        <title>KnowMore - Fair Data Innovations Hub</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
      </Head>

      <main>
        <section className="bg-gray-50 py-10 pt-16">
          <Hero />
        </section>

        <section className="bg-white py-10">
          <About />
        </section>

        <section className="bg-gray-50 py-10 ">
          <Info />
        </section>

        <section className="bg-white py-10 ">
          <Publications />
        </section>
      </main>
    </div>
  );
}
