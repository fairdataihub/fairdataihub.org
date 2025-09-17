import About from '@/components/aqua/about';
import Info from '@/components/aqua/info';
import Tools from '@/components/aqua/tools';
import ProjectHero from '@/components/project/hero';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const Aqua: React.FC<PublicationsItemList> = ({ publications }) => {
  const heroButtons = [
    {
      text: `Explore AQUA`,
      href: `https://github.com/fairdataihub/aqua`,
      target: `_blank`,
      ariaLabel: `AQUA GitHub repository`,
      rel: `noopener`,
    },
    {
      text: `Documentation`,
      href: `https://github.com/fairdataihub/aqua/blob/main/Documentation/Documentation.md`,
      target: `_blank`,
      ariaLabel: `AQUA Documentation`,
      rel: `noopener`,
    },
  ];

  return (
    <>
      <Seo
        templateTitle="AQUA"
        templateUrl="https://fairdataihub.org/aqua"
        templateDescription="AQUA (Advanced Query Architecture for the SPARC Portal) an application that aims at improving the search capabilities of the SPARC Portal"
        templateImage="https://fairdataihub.org/thumbnails/aqua.png"
      />

      <section className="bg-white py-10 pt-16">
        <ProjectHero
          title={`AQUA`}
          subtitle={`Advanced Query Architecture for the SPARC Portal`}
          description={`Level up your SPARC search with AQUA`}
          imageSrc={`/images/hero/aqua-logo-full.png`}
          imageAlt={`Aqua logo`}
          imageWidth={537}
          imageHeight={522}
          buttons={heroButtons}
        />
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
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default Aqua;
