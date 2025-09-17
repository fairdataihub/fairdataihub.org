import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import Info from '@/components/sparclink/info';

import PublicationsJSON from '@/assets/data/publications.json';

const aboutData = {
  description: `SPARClink provides a system that queries all external publications
    using open source tools and platforms to create interactable
    visualizations that showcases the impact that SPARC has on the overall
    scientific research community.`,
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
      icon: `game-icons:impact-point`,
      title: `What does Impact mean?`,
      description: `The SPARC program provides datasets, maps and computational
        studies that follow FAIR principles and is used by researchers
        all around the world. The usage of SPARC resouces by platforms
        and programs ouside SPARC is what we view as the meaning of the
        term 'Impact'.`,
    },
    {
      icon: `ph:graph-fill`,
      title: `What does SPARClink do?`,
      description: `SPARClink uses data from existing SPARC publications, datasets
        and protocols to create an interactive visualization that you
        can use to view the impact of SPARC.`,
    },
  ],
};

const SparcLink: React.FC<PublicationsItemList> = ({ publications }) => {
  const heroButtons = [
    {
      text: `Explore SPARClink`,
      href: `https://sparclink.vercel.app`,
      target: `_blank`,
      ariaLabel: `SPARClink website`,
      rel: `noopener`,
    },
  ];

  return (
    <>
      <Seo
        templateTitle="SPARClink - FAIR Data Innovations Hub"
        templateUrl="https://fairdataihub.org/sparclink"
        templateDescription="SPARClink provides a system that queries all external publications using open source tools and platforms to create interactable visualizations that showcases the impact that SPARC has on the overall scientific research community"
        templateImage="https://fairdataihub.org/thumbnails/sparclink.png"
      />

      <section className="bg-gray-50 py-10 pt-16">
        <ProjectHero
          title={`SPARClink`}
          subtitle={`Visualizing the Impact of SPARC`}
          description={`A tool to understand the impact that SPARC and the SPARC Data Standard have on the scientfic community`}
          imageSrc={`https://github.com/SPARC-FAIR-Codeathon/SPARClink/raw/main/docs/images/2021-07-25%2013-47-30.gif`}
          imageAlt={`sparclink gif`}
          imageWidth={672}
          imageHeight={377}
          buttons={heroButtons}
        />
      </section>

      <section className="bg-white py-10">
        <ProjectAbout
          description={aboutData.description}
          features={aboutData.features}
        />
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
