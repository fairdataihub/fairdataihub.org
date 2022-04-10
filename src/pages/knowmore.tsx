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
          property="og:title"
          content="KnowMore - Fair Data Innovations Hub"
        />
        <meta
          property="twitter:title"
          content="KnowMore - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/knowmore" />
        <meta property="og:url" content="https://fairdataihub.org/knowmore" />
        <meta
          property="twitter:url"
          content="https://fairdataihub.org/knowmore"
        />

        <meta
          name="description"
          content="KnowMore is a tool readily integrable into the SPARC Portal that allows to find potential relation, difference, and similarities between multiple SPARC datasets in just a few clicks, which can lead to a new discovery, new hypothesis, or simply guide the user to the next logical step in their discovery process"
        />
        <meta
          property="og:description"
          content="KnowMore is a tool readily integrable into the SPARC Portal that allows to find potential relation, difference, and similarities between multiple SPARC datasets in just a few clicks, which can lead to a new discovery, new hypothesis, or simply guide the user to the next logical step in their discovery process"
        />
        <meta
          property="twitter:description"
          content="KnowMore is a tool readily integrable into the SPARC Portal that allows to find potential relation, difference, and similarities between multiple SPARC datasets in just a few clicks, which can lead to a new discovery, new hypothesis, or simply guide the user to the next logical step in their discovery process"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/knowmore.png"
        />
        <meta
          property="twitter:image"
          content="https://fairdataihub.org/thumbnails/knowmore.png"
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
