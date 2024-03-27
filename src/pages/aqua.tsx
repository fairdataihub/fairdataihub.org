import Cite from 'citation-js';
import Head from 'next/head';

import About from '@/components/aqua/about';
import Hero from '@/components/aqua/hero';
import Info from '@/components/aqua/info';
import Tools from '@/components/aqua/tools';
import PublicationsList from '@/components/publications/publicationsList';

import PublicationsJSON from '@/assets/data/publications.json';

const Aqua: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
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
        <PublicationsList publications={publications} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
  const Publications = PublicationsJSON.filter(
    (publication) => publication.project === `aqua`,
  );

  const publications = Publications.map((publication) => {
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

export default Aqua;
