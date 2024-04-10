import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import About from '@/components/sodaforsparc/about';
import Hero from '@/components/sodaforsparc/hero';
import Impact from '@/components/sodaforsparc/impact';
import Info from '@/components/sodaforsparc/info';
import Timeline from '@/components/sodaforsparc/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const SodaForSparc: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="SODA for SPARC"
        templateUrl="https://fairdataihub.org/sodaforsparc"
        templateDescription="SODA (Software to Organize Data Automatically) for SPARC is a cross-platform desktop software that allows SPARC-funded researchers to easily comply with the FAIR SPARC Data curation and sharing guidelines"
        templateImage="https://fairdataihub.org/thumbnails/sodaforsparc.png"
      />

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
  const publications = PublicationsJSON.filter((publication) =>
    publication.project.includes(`sodaforsparc`),
  );

  return {
    props: {
      publications,
    },
  };
}

export default SodaForSparc;
