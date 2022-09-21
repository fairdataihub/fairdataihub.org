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
        <meta property="og:title" content="AQUA - Fair Data Innovations Hub" />
        <meta name="twitter:title" content="AQUA - Fair Data Innovations Hub" />

        <link rel="canonical" href="https://fairdataihub.org/aqua" />
        <meta property="og:url" content="https://fairdataihub.org/aqua" />
        <meta name="twitter:url" content="https://fairdataihub.org/aqua" />

        <meta
          name="description"
          content="AQUA (Advanced Query Architecture for the SPARC Portal) an application that aims at improving the search capabilities of the SPARC Portal"
        />
        <meta
          property="og:description"
          content="AQUA (Advanced Query Architecture for the SPARC Portal) an application that aims at improving the search capabilities of the SPARC Portal"
        />
        <meta
          name="twitter:description"
          content="AQUA (Advanced Query Architecture for the SPARC Portal) an application that aims at improving the search capabilities of the SPARC Portal"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/aqua.png"
        />
        <meta
          name="twitter:image"
          content="https://fairdataihub.org/thumbnails/aqua.png"
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
