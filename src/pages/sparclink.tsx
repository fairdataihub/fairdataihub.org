import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import About from '@/components/sparclink/about';
import Hero from '@/components/sparclink/hero';
import Info from '@/components/sparclink/info';

import PublicationsJSON from '@/assets/data/publications.json';

const SparcLink: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="SPARClink - Fair Data Innovations Hub"
        templateUrl="https://fairdataihub.org/sparclink"
        templateDescription="SPARClink provides a system that queries all external publications using open source tools and platforms to create interactable visualizations that showcases the impact that SPARC has on the overall scientific research community"
        templateImage="https://fairdataihub.org/thumbnails/sparclink.png"
      />

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
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
  const publications = PublicationsJSON.filter((publication) =>
    publication.project.includes(`sparclink`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default SparcLink;
