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
          property="og:title"
          content="SODA for SPARC - Fair Data Innovations Hub"
        />
        <meta
          property="twitter:title"
          content="SODA for SPARC - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/sodaforsparc" />
        <meta
          property="og:url"
          content="https://fairdataihub.org/sodaforsparc"
        />
        <meta
          property="twitter:url"
          content="https://fairdataihub.org/sodaforsparc"
        />

        <meta
          name="description"
          content="SODA (Software to Organize Data Automatically) for SPARC is a cross-platform desktop software that allows SPARC-funded researchers to easily comply with the FAIR SPARC Data curation and sharing guidelines"
        />
        <meta
          property="og:description"
          content="SODA (Software to Organize Data Automatically) for SPARC is a cross-platform desktop software that allows SPARC-funded researchers to easily comply with the FAIR SPARC Data curation and sharing guidelines"
        />
        <meta
          property="twitter:description"
          content="SODA (Software to Organize Data Automatically) for SPARC is a cross-platform desktop software that allows SPARC-funded researchers to easily comply with the FAIR SPARC Data curation and sharing guidelines"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/sodaforsparc.png"
        />
        <meta
          property="twitter:image"
          content="https://fairdataihub.org/thumbnails/sodaforsparc.png"
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
