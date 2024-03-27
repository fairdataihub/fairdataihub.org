import Cite from 'citation-js';
import Head from 'next/head';

import About from '@/components/aireadi/about';
import Hero from '@/components/aireadi/hero';
// import Impact from '@/components/aireadi/impact';
import Info from '@/components/aireadi/info';
import Timeline from '@/components/aireadi/timeline';
import PublicationsList from '@/components/publications/publicationsList';

import PublicationsJSON from '@/assets/data/publications.json';

const Aireadi: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <div>
      <Head>
        <title>AI-READI - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="AI-READI - Fair Data Innovations Hub"
        />
        <meta
          name="twitter:title"
          content="AI-READI - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/aireadi" />
        <meta property="og:url" content="https://fairdataihub.org/aireadi" />
        <meta name="twitter:url" content="https://fairdataihub.org/aireadi" />

        <meta
          name="description"
          content="The AI-READI project seeks to create a flagship AI-ready and ethically-sourced dataset to provide critical insights into type 2 diabetes mellitus (T2DM), including salutogenic pathways to return to health"
        />
        <meta
          property="og:description"
          content="The AI-READI project seeks to create a flagship AI-ready and ethically-sourced dataset to provide critical insights into type 2 diabetes mellitus (T2DM), including salutogenic pathways to return to health"
        />
        <meta
          name="twitter:description"
          content="The AI-READI project seeks to create a flagship AI-ready and ethically-sourced dataset to provide critical insights into type 2 diabetes mellitus (T2DM), including salutogenic pathways to return to health"
        />

        <meta
          property="og:image"
          content="https://kalai.fairdataihub.org/api/generate?app=fairdataihub&title=AI-READI&org=fairdataihub&description=Generating%20a%20flagship%20AI-ready%20and%20ethically-sourced%20dataset%20to%20support%20future%20AI-driven%20discoveries%20in%20diabetes"
        />
        <meta
          name="twitter:image"
          content="https://kalai.fairdataihub.org/api/generate?app=fairdataihub&title=AI-READI&org=fairdataihub&description=Generating%20a%20flagship%20AI-ready%20and%20ethically-sourced%20dataset%20to%20support%20future%20AI-driven%20discoveries%20in%20diabetes"
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
    </div>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
  const sodaforsparcPublications = PublicationsJSON.filter(
    (publication) => publication.project === `aireadi`,
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

export default Aireadi;
