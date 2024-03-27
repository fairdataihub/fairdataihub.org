import Cite from 'citation-js';
import Head from 'next/head';

import About from '@/components/fairshare/about';
import Hero from '@/components/fairshare/hero';
// import Impact from '@/components/fairshare/impact';
import Info from '@/components/fairshare/info';
import Timeline from '@/components/fairshare/timeline';
import PublicationsList from '@/components/publications/publicationsList';

import PublicationsJSON from '@/assets/data/publications.json';
const FAIRshare: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Head>
        <title>FAIRshare - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="FAIRshare - Fair Data Innovations Hub"
        />
        <meta
          name="twitter:title"
          content="FAIRshare - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/fairshare" />
        <meta property="og:url" content="https://fairdataihub.org/fairshare" />
        <meta name="twitter:url" content="https://fairdataihub.org/fairshare" />

        <meta
          name="description"
          content="FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their biomedical data and software according to applicable FAIR guidelines"
        />
        <meta
          property="og:description"
          content="FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their biomedical data and software according to applicable FAIR guidelines"
        />
        <meta
          name="twitter:description"
          content="FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their biomedical data and software according to applicable FAIR guidelines"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/fairshare.png"
        />
        <meta
          name="twitter:image"
          content="https://fairdataihub.org/thumbnails/fairshare.png"
        />
      </Head>

      <section className="bg-white py-10 pt-16">
        <Hero />
      </section>
      <section className="bg-gray-50 py-10 pt-16">
        <About />
      </section>
      {/* <section className="bg-white py-10 pt-16">
        <Impact />
      </section> */}
      <section className="bg-white py-10 pt-16">
        <Info />
      </section>
      <section className="bg-gray-50 py-10 pt-16">
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
  const Publications = PublicationsJSON.filter(
    (publication) => publication.project === `fairshare`,
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

export default FAIRshare;
