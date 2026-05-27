import Image from 'next/image';

import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/infoSection';
import PublicationsList from '@/components/project/publicationsList';
import TeamMembers from '@/components/project/teamMembers';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const Aqua: React.FC<{ publications: any[] }> = ({ publications }) => {
  return (
    <section>
      <Seo
        templateTitle="AQUA"
        templateUrl="https://fairdataihub.org/aqua"
        templateDescription="AQUA (Advanced Query Architecture for the SPARC Portal) an application that aims at improving the search capabilities of the SPARC Portal"
        templateImage="https://fairdataihub.org/thumbnails/aqua.png"
      />

      <ProjectHero
        title="AQUA"
        subtitle="Advanced Query Architecture for the SPARC Portal"
        description="Level up your SPARC search with AQUA"
        imageSrc="/images/hero/aqua-logo-full.png"
        imageAlt="Aqua logo"
        imageWidth={400}
        imageHeight={400}
        buttons={[
          {
            text: `View on GitHub`,
            href: `https://github.com/fairdataihub/AQUA`,
            target: `_blank`,
            rel: `noopener`,
          },
        ]}
      />

      <ProjectAbout
        description={`AQUA (Advanced Query Architecture for the SPARC Portal) an application that aims at improving the search capabilities of the SPARC Portal.`}
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
            description: `Currently, the search feature of the SPARC Portal is very limited. It does not recognize nearby words (typos and close-matches) or synonyms and provides limited result information.`,
          },
          {
            icon: `mdi:lightbulb-on`,
            title: `How does AQUA solve this?`,
            description: `AQUA provides an advanced search interface that includes fuzzy matching, synonym recognition, and enhanced result display to improve the user experience when searching for SPARC data.`,
          },
        ]}
      />

      <div className="mx-auto px-5 sm:px-10">
        <div className="mx-auto flex max-w-screen-lg flex-col">
          <h1 className="pb-5 text-left text-4xl font-black subpixel-antialiased md:mr-8">
            Technology Stack
          </h1>

          <p className="font-asap mb-10 w-full text-lg text-black">
            AQUA utilized the main tool groups to develop the User Back end
            former includes the HTML, JS trio, VueJS, and NuxtJS. The latter is
            implemented with Python, Docker, SciGraph, and SQLite.
          </p>

          <dl>
            <div className="grid grid-cols-2 items-center justify-center gap-4 py-0 md:grid-cols-2 md:gap-3 md:py-1 lg:grid-cols-4 lg:gap-4">
              {[
                {
                  src: `/images/aqua/python-logo.png`,
                  alt: `Python logo`,
                },
                {
                  src: `/images/aqua/docker-logo.png`,
                  alt: `Docker logo`,
                },
                {
                  src: `/images/aqua/scigraph-logo.png`,
                  alt: `SciGraph logo`,
                },
                {
                  src: `/images/aqua/sqlite-logo.png`,
                  alt: `SQLite logo`,
                },
              ].map((logo, index) => (
                <Image
                  key={index}
                  className="h-auto !w-full object-scale-down !px-1"
                  src={logo.src}
                  alt={logo.alt}
                  width={238}
                  height={70}
                />
              ))}
            </div>
          </dl>
        </div>
      </div>

      <ProjectInfoSection
        title={`Development Approach`}
        description={`AQUA for SPARC is distributed as an open-source application with an MIT License. Anyone is free to fork our GitHub repository and make their own changes if they would like. If you would like to submit a feature modification, or feature suggestion, please feel free to submit an issue on the repository.`}
        sideImageSrc="/images/github-logo.svg"
        sideImageUrl="https://github.com/fairdataihub/AQUA"
        sideImageAlt="GitHub logo"
        githubBadges={[
          {
            type: `contributors`,
            href: `https://github.com/fairdataihub/AQUA/graphs/contributors`,
            alt: `aqua contributors`,
            src: `https://img.shields.io/github/contributors/SPARC-FAIR-Codeathon/aqua.svg?style=flat-square`,
          },
          {
            type: `stars`,
            href: `https://github.com/fairdataihub/AQUA/stargazers`,
            alt: `aqua stars`,
            src: `https://img.shields.io/github/stars/SPARC-FAIR-Codeathon/aqua.svg?style=flat-square`,
          },
          {
            type: `issues`,
            href: `https://github.com/fairdataihub/AQUA/issues`,
            alt: `aqua issues`,
            src: `https://img.shields.io/github/issues/SPARC-FAIR-Codeathon/aqua.svg?style=flat-square`,
          },
          {
            type: `license`,
            href: `https://github.com/fairdataihub/AQUA/blob/main/LICENSE`,
            alt: `aqua license`,
            src: `https://img.shields.io/github/license/SPARC-FAIR-Codeathon/aqua.svg?style=flat-square`,
          },
        ]}
        additionalLinks={[
          {
            text: `Explore the GitHub repository`,
            href: `https://github.com/fairdataihub/AQUA`,
            target: `_blank`,
          },
        ]}
      />
      <ProjectInfoSection
        title={`Origin Story`}
        description={`The AQUA project was first born as an idea at the 2021 NIH SPARC Codeathon. The idea was to improve user query understandability and result display of the SPARC Portal search engine. AQUA received the fourth-place prize at the Codeathon.`}
        sideImageSrc="/images/collaborators/sparc-logo.svg"
        sideImageAlt="SPARC logo"
        additionalLinks={[
          {
            text: `Learn more about the 2021 SPARC FAIR Codeathon`,
            href: `https://sparc.science/help/2021-sparc-fair-codeathon`,
          },
        ]}
      />
      <TeamMembers
        teamMembers={[
          {
            name: `Tram Ngo`,
            href: `https://www.linkedin.com/in/tramngo1603`,
            external: true,
            image: `/images/people/tram-head.jpg`,
          },
          {
            name: `Laila Bekhet`,
            href: `/aqua`,
            external: false,
            image: `https://api.dicebear.com/9.x/thumbs/svg?seed=LailaBekhet`,
          },
          {
            name: `Yuda Munarko`,
            href: `/aqua`,
            external: false,
            image: `https://api.dicebear.com/9.x/thumbs/svg?seed=YudaMunarko1`,
          },
          {
            name: `Niloofar Shahidi`,
            href: `/aqua`,
            external: false,
            image: `https://api.dicebear.com/9.x/thumbs/svg?seed=NiloofarShahidi`,
          },
          {
            name: `Xuanzhi `,
            href: `/aqua`,
            external: false,
            image: `https://api.dicebear.com/9.x/thumbs/svg?seed=Xuanzhi`,
          },
        ]}
      />

      <PublicationsList publications={publications} impactProjects={`aqua`} />
    </section>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `aqua` tag
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
