import Info from '@/components/aqua/info';
import Tools from '@/components/aqua/tools';
import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const aboutData = {
  description: `AQUA (Advanced Query Architecture for the SPARC Portal) an application
    that aims at improving the search capabilities of the SPARC Portal.`,
  features: [
    {
      icon: `material-symbols:linear-scale`,
      title: `What is SPARC?`,
      description: `The NIH's Stimulating Peripheral Activity to Relieve
        Conditions (SPARC) program seeks to accelerate development of
        therapeutic devices that modulate electrical activity in nerves
        to improve organ function.`,
      link: {
        text: `Learn more about SPARC`,
        href: `https://sparc.science/`,
        target: `_blank`,
        rel: `noopener`,
      },
    },
    {
      icon: `mdi:axis-arrow-info`,
      title: `What are the FAIR SPARC Data Guidelines?`,
      description: `All SPARC-funded researchers must curate their datasets
        following the SPARC Data Standards (SDS) and share them openly
        on the Pennsieve data platform as per their funding agreement
        with SPARC.`,
      link: {
        text: `Learn more about SDS`,
        href: `https://doi.org/10.1101/2021.02.10.430563`,
        target: `_blank`,
        rel: `noopener`,
      },
    },
    {
      icon: `mdi:account-hard-hat`,
      title: `What are the challenges?`,
      description: `Currently, the search feature of the SPARC Portal is very
        limited. It does not recognize nearby words (typos and
        close-matches) or synonyms and provides limited result
        information.`,
    },
    {
      icon: `material-symbols:manage-search`,
      title: `What does AQUA do?`,
      description: `AQUA makes the current SPARC Portal search engine smarter at
        understanding user query and improve search result display. The
        end goal is to improve exponentially the visibility of the SPARC
        datasets.`,
    },
  ],
};

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
        <ProjectAbout
          description={aboutData.description}
          features={aboutData.features}
        />
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
