import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/infoSection';
import PublicationsList from '@/components/project/publicationsList';
import TeamMembers from '@/components/project/teamMembers';
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
        <ProjectHero
          title={`KnowMore`}
          subtitle={`Say "no more" to manual discovery`}
          description={`Automated Knowledge Discovery Tool for SPARC Datasets`}
          imageSrc={`https://github.com/fairdataihub/KnowMore/raw/main/docs/knowmore-website.gif`}
          imageAlt={`Knowmore gif`}
          imageWidth={670}
          imageHeight={370}
          buttons={[
            {
              text: `View on GitHub`,
              href: `https://github.com/SPARC-FAIR-Codeathon/KnowMore`,
              target: `_blank`,
              ariaLabel: `GitHub repository`,
              rel: `noopener`,
            },
          ]}
        />

        <ProjectAbout
          description={`KnowMore is a tool readily integrable into the SPARC Portal that allows to find potential relation, difference, and similarities between multiple SPARC datasets in just a few clicks, which can lead to a new discovery, new hypothesis, or simply guide the user to the next logical step in their discovery process.`}
          features={[
            {
              icon: `material-symbols:linear-scale`,
              title: `What is SPARC?`,
              description: `The NIH's Stimulating Peripheral Activity to Relieve Conditions (SPARC) program seeks to accelerate development of therapeutic devices that modulate electrical activity in nerves to improve organ function.`,
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
              description: `All SPARC-funded researchers must curate their datasets following the SPARC Data Standards (SDS) and share them openly on the Pennsieve data platform as per their funding agreement with SPARC.`,
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
              description: `The guidelines are very exhaustive to maximize FAIRness of SPARC datasets but are challenging and time-consuming for researchers to implement.`,
            },
            {
              icon: `eos-icons:ai-healing`,
              title: `What does KnowMore do?`,
              description: `KnowMore uses several SPARC resources, data science methods, and knowledge of the SDS to generate various visualizations to help the user identify potential relations across datasets of interests.`,
            },
          ]}
        />

        <ProjectInfoSection
          title="Development Approach"
          description={`KnowMore is developed as an open-source application with an MIT License. It is currently integrated into our fork of the SPARC Portal and is not available in the official SPARC Portal release. Anyone is free to fork our GitHub repository and make their own changes if they would like. If you would like to submit a feature modification, or feature suggestion, please feel free to submit an issue on the repository.`}
          sideImageSrc="/images/github-logo.svg"
          sideImageUrl="https://github.com/fairdataihub/KnowMore"
          sideImageAlt="GitHub logo"
          githubBadges={[
            {
              type: `contributors` as const,
              href: `https://github.com/fairdataihub/KnowMore/graphs/contributors`,
              alt: `knowmore contributors`,
              src: `https://img.shields.io/github/contributors/SPARC-FAIR-Codeathon/KnowMore.svg?style=flat-square`,
            },
            {
              type: `stars` as const,
              href: `https://github.com/fairdataihub/KnowMore/stargazers`,
              alt: `knowmore stars`,
              src: `https://img.shields.io/github/stars/SPARC-FAIR-Codeathon/KnowMore.svg?style=flat-square`,
            },
            {
              type: `issues` as const,
              href: `https://github.com/fairdataihub/KnowMore/issues`,
              alt: `knowmore issues`,
              src: `https://img.shields.io/github/issues/SPARC-FAIR-Codeathon/KnowMore.svg?style=flat-square`,
            },
            {
              type: `license` as const,
              href: `https://github.com/fairdataihub/KnowMore/blob/master/LICENSE`,
              alt: `knowmore license`,
              src: `https://img.shields.io/github/license/SPARC-FAIR-Codeathon/KnowMore.svg?style=flat-square`,
            },
          ]}
          additionalLinks={[
            {
              text: `Explore the GitHub repository`,
              href: `https://github.com/SPARC-FAIR-Codeathon/KnowMore`,
              target: `_blank`,
            },
          ]}
        />

        <ProjectInfoSection
          title="Origin Story"
          description={`KnowMore was introduced as a project during the 2021 NIH SPARC Codeathon with the aim of leveraging the FAIR characteristics of the SPARC datasets to enable automated comparison across them. KnowMore won the Grand Prize at the Codeathon.`}
          sideImageSrc="/images/collaborators/sparc-logo.svg"
          sideImageAlt="SPARC logo"
          additionalLinks={[
            {
              text: `Learn more about the SPARC Codeathon`,
              href: `https://sparc.science/help/2021-sparc-fair-codeathon`,
              target: `_blank`,
            },
          ]}
        />

        <TeamMembers
          teamMembers={[
            {
              name: `Bhavesh Patel`,
              href: `/team/#Bhavesh-Patel`,
              external: false,
              image: `/images/people/bhavesh-head.jpg`,
            },
            {
              name: `Ryan Quey`,
              href: `https://www.ryanquey.com/`,
              external: true,
              image: `/images/people/ryan-head.jpg`,
            },
            {
              name: `Anmol Kiran`,
              href: `/knowmore`,
              external: false,
              image: `https://api.dicebear.com/9.x/thumbs/svg?seed=AnmolKiran`,
            },
            {
              name: `Matthew Schiefer`,
              href: `/knowmore`,
              external: false,
              image: `https://api.dicebear.com/9.x/thumbs/svg?seed=MatthewSchiefer`,
            },
          ]}
        />

        <PublicationsList
          publications={publications}
          impactProjects={`knowmore`}
        />
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
