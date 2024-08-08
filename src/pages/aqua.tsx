import About from '@/components/aqua/about';
import Hero from '@/components/aqua/hero';
import Info from '@/components/aqua/info';
import Tools from '@/components/aqua/tools';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const Aqua: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="AQUA"
        templateUrl="https://fairdataihub.org/aqua"
        templateDescription="AQUA (Advanced Query Architecture for the SPARC Portal) an application that aims at improving the search capabilities of the SPARC Portal"
        templateImage="https://fairdataihub.org/thumbnails/aqua.png"
      />

      <section className="bg-white py-10 pt-16">
        <Hero />
      </section>

      <section className="bg-gray-50 py-10">
        <About />
      </section>

      <section className="bg-white py-10">
        <Tools />
      </section>

      <section className="bg-gray-50 py-10">
        <Info />
      </section>

      <section className="bg-white py-10">
        <PublicationsList publications={publications} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
  const publications = PublicationsJSON.filter((publication) =>
    publication.project.includes(`aqua`),
  );

  return {
    props: {
      publications,
    },
  };
}

export default Aqua;
