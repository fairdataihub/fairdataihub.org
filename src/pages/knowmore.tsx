import Cite from 'citation-js';
import Head from 'next/head';

import About from '@/components/knowmore/about';
import Hero from '@/components/knowmore/hero';
import Info from '@/components/knowmore/info';
import PublicationsList from '@/components/publications/publicationsList';

import PublicationsJSON from '@/assets/data/publications.json';

const KnowMore: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Head>
        <title>KnowMore - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="KnowMore - Fair Data Innovations Hub"
        />
        <meta
          name="twitter:title"
          content="KnowMore - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/knowmore" />
        <meta property="og:url" content="https://fairdataihub.org/knowmore" />
        <meta name="twitter:url" content="https://fairdataihub.org/knowmore" />

        <meta
          name="description"
          content="KnowMore is a tool readily integrable into the SPARC Portal that allows to find potential relation, difference, and similarities between multiple SPARC datasets in just a few clicks, which can lead to a new discovery, new hypothesis, or simply guide the user to the next logical step in their discovery process"
        />
        <meta
          property="og:description"
          content="KnowMore is a tool readily integrable into the SPARC Portal that allows to find potential relation, difference, and similarities between multiple SPARC datasets in just a few clicks, which can lead to a new discovery, new hypothesis, or simply guide the user to the next logical step in their discovery process"
        />
        <meta
          name="twitter:description"
          content="KnowMore is a tool readily integrable into the SPARC Portal that allows to find potential relation, difference, and similarities between multiple SPARC datasets in just a few clicks, which can lead to a new discovery, new hypothesis, or simply guide the user to the next logical step in their discovery process"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/knowmore.png"
        />
        <meta
          name="twitter:image"
          content="https://fairdataihub.org/thumbnails/knowmore.png"
        />
      </Head>

      <>
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
          <PublicationsList publications={publications} />
        </section>
      </>
    </>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
  const sodaforsparcPublications = PublicationsJSON.filter(
    (publication) => publication.project === `knowmore`,
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

export default KnowMore;
