import Cite from 'citation-js';
import Head from 'next/head';

import PublicationsList from '@/components/publications/publicationsList';
import About from '@/components/sodaforsparc/about';
import Hero from '@/components/sodaforsparc/hero';
import Impact from '@/components/sodaforsparc/impact';
import Info from '@/components/sodaforsparc/info';
import Timeline from '@/components/sodaforsparc/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const SodaForSparc: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Head>
        <title>SODA for SPARC - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="SODA for SPARC - Fair Data Innovations Hub"
        />
        <meta
          name="twitter:title"
          content="SODA for SPARC - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/sodaforsparc" />
        <meta
          property="og:url"
          content="https://fairdataihub.org/sodaforsparc"
        />
        <meta
          name="twitter:url"
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
          name="twitter:description"
          content="SODA (Software to Organize Data Automatically) for SPARC is a cross-platform desktop software that allows SPARC-funded researchers to easily comply with the FAIR SPARC Data curation and sharing guidelines"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/sodaforsparc.png"
        />
        <meta
          name="twitter:image"
          content="https://fairdataihub.org/thumbnails/sodaforsparc.png"
        />
      </Head>

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
        <PublicationsList publications={publications} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
  const sodaforsparcPublications = PublicationsJSON.filter(
    (publication) => publication.project === `sodaforsparc`,
  );

  const publications = sodaforsparcPublications.map((publication) => {
    const cite = new Cite(publication.doi);

    const citation: string = cite.format(`bibliography`, {
      template: `apa`,
    });

    return {
      title: publication.title,
      doi: publication.doi,
      citation,
      subtitle: publication.subtitle || ``,
    };
  });

  return {
    props: {
      publications,
    },
  };
}

export default SodaForSparc;
