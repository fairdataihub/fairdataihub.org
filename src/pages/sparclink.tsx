import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/infoSection';
import PublicationsList from '@/components/project/publicationsList';
import TeamMembers from '@/components/project/teamMembers';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const SparcLink: React.FC<PublicationsItemList> = ({ publications }) => {
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
          buttons={[
            {
              text: `Explore SPARClink`,
              href: `https://sparclink.vercel.app`,
              target: `_blank`,
              ariaLabel: `SPARClink website`,
              rel: `noopener`,
            },
          ]}
        />
      </section>

      <section className="bg-white py-10">
        <ProjectAbout
          description={`SPARClink provides a system that queries all external publications
    using open source tools and platforms to create interactable
    visualizations that showcases the impact that SPARC has on the overall
    scientific research community.`}
          features={[
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
          ]}
        />
      </section>

      <section className="bg-gray-50 py-10">
        <ProjectInfoSection
          title="Development Approach"
          description={`SPARClink was created as an open-source application with an
            MIT License. Anyone is free to fork our GitHub repository
            and make their own changes if they would like. If you would
            like to submit a feature modification, or feature
            suggestion, please feel free to submit an issue on the
            repository.`}
          sideImageSrc="/images/github-logo.svg"
          sideImageUrl="https://github.com/fairdataihub/SPARClink"
          sideImageAlt="GitHub logo"
          githubBadges={[
            {
              type: `contributors`,
              href: `https://github.com/fairdataihub/SPARClink/graphs/contributors`,
              alt: `SPARClink contributors`,
              src: `https://img.shields.io/github/contributors/SPARC-FAIR-Codeathon/SPARClink.svg?style=flat-square`,
            },
            {
              type: `stars`,
              href: `https://github.com/fairdataihub/SPARClink/stargazers`,
              alt: `SPARClink stars`,
              src: `https://img.shields.io/github/stars/SPARC-FAIR-Codeathon/SPARClink.svg?style=flat-square`,
            },
            {
              type: `issues`,
              href: `https://github.com/fairdataihub/SPARClink/issues`,
              alt: `SPARClink issues`,
              src: `https://img.shields.io/github/issues/SPARC-FAIR-Codeathon/SPARClink.svg?style=flat-square`,
            },
            {
              type: `license`,
              href: `https://github.com/fairdataihub/SPARClink/blob/master/LICENSE`,
              alt: `SPARClink license`,
              src: `https://img.shields.io/github/license/SPARC-FAIR-Codeathon/SPARClink.svg?style=flat-square`,
            },
          ]}
          additionalLink={{
            text: `Explore the GitHub repository`,
            href: `https://github.com/fairdataihub/SPARClink`,
          }}
        />

        <ProjectInfoSection
          title="Origin Story"
          description={`The SPARClink project was first born as an idea at the 2021
            NIH SPARC Codeathon. The idea behind the topic was created
            as a method of visualizing citation data to determine the
            degree of use of SPARC material outside of the official
            channels. SPARClink received the third-place prize at the
            Codeathon.`}
          additionalLink={{
            text: `Learn more about the SPARC Codeathon`,
            href: `https://sparc.science/help/2021-sparc-fair-codeathon`,
          }}
          sideImageSrc="/images/collaborators/sparc-logo.svg"
          sideImageAlt="SPARC logo"
        />

        <TeamMembers
          teamMembers={[
            {
              name: `Sanjay Soundarajan`,
              href: `/team/#Sanjay-Soundarajan`,
              external: false,
              image: `/images/people/sanjay-head.jpg`,
            },
            {
              name: `Sachira Kuruppu`,
              href: `https://www.linkedin.com/in/sachirakuruppu/`,
              external: true,
              image: `https://api.dicebear.com/7.x/thumbs/svg?seed=SachiraKuruppu`,
            },
            {
              name: `Ashutosh Singh`,
              href: `/sparclink`,
              external: false,
              image: `https://api.dicebear.com/7.x/thumbs/svg?seed=AshutoshSingh`,
            },
            {
              name: `Monalisa Achalla`,
              href: `/sparclink`,
              external: false,
              image: `https://api.dicebear.com/7.x/thumbs/svg?seed=MonalisaAchalla`,
            },
            {
              name: `Jongchan Kim`,
              href: `/sparclink`,
              external: false,
              image: `https://api.dicebear.com/7.x/thumbs/svg?seed=JongchanKim`,
            },
          ]}
        />
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
