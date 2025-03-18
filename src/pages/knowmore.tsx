import About from '@/components/knowmore/about';
import Hero from '@/components/knowmore/hero';
import Info from '@/components/knowmore/info';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const KnowMore: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="KnowMore"
        templateUrl="https://fairdataihub.org/knowmore"
        templateDescription="KnowMore is a tool readily integrable into the SPARC Portal that allows to find potential relation, difference, and similarities between multiple SPARC datasets in just a few clicks, which can lead to a new discovery, new hypothesis, or simply guide the user to the next logical step in their discovery process"
        templateImage="https://fairdataihub.org/thumbnails/knowmore.png"
      />

      <>
        <section className="bg-gray-50 py-10 pt-16">
          <Hero />
        </section>

        <section className="bg-white py-10">
          <About />
        </section>

        <section className="bg-gray-50 py-10">
          <Info />
        </section>

        <section className="bg-white py-10">
          <PublicationsList publications={publications} />
        </section>
      </>
    </>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
  const publications = PublicationsJSON.filter((publication) =>
    publication.project.includes(`knowmore`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default KnowMore;
