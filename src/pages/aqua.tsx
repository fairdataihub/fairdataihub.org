import Head from 'next/head';

import Hero from '@/components/aqua/hero';
import About from '@/components/aqua/about';
import Info from '@/components/aqua/info';
import Publications from '@/components/aqua/publications';
import Tools from '@/components/aqua/tools';

export default function Aqua() {
  return (
    <div>
      <Head>
        <title>AQUA - Fair Data Innovations Hub</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
      </Head>

      <main>
        <section className="bg-white py-10 pt-16">
          <Hero />
        </section>

        <section className="bg-gray-50 py-10">
          <About />
        </section>

        <section className="bg-white py-10">
          <Tools />
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
