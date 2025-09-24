import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/infoSection';
import PublicationsList from '@/components/project/publicationsList';
import TeamMembers from '@/components/project/teamMembers';
import Timeline from '@/components/project/timeline';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const PostersScience: React.FC<PublicationsItemList> = ({ publications }) => {
  const heroButtons = [
    {
      text: `Learn more`,
      href: `https://posters.science/`,
      target: `_blank`,
      ariaLabel: `Posters.science website`,
      rel: `noopener`,
    },
  ];

  return (
    <>
      <Seo
        templateTitle="Posters.science"
        templateUrl="https://fairdataihub.org/posters-science"
        templateDescription="Posters.science is a free and open-source platform that
                      makes it easier for researchers to share and discover
                      posters, turning them into enduring research assets."
        templateImage="https://fairdataihub.org/thumbnails/posters-science.png"
      />

      <section className="bg-white py-10 pt-16">
        <ProjectHero
          title="Posters.science"
          subtitle="Share Posters, Make Discoveries"
          description=""
          imageSrc="/images/hero/posters-science-process.png"
          imageAlt="DMP Chef logo"
          imageWidth={600}
          imageHeight={600}
          buttons={heroButtons}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <ProjectAbout
          description={`Millions of scientific posters are presented every year, containing
    valuable early-stage ideas and insights, but most quietly vanish after
    a conference ends. Posters.science is a free and open-source platform
    that makes it easier for researchers to share and discover posters,
    turning them into enduring research assets.`}
          features={[
            {
              icon: `material-symbols:linear-scale`,
              title: `What is posters.science?`,
              description: `Posters.science is a platform that enables researchers to easily
        share posters that are FAIR (Findable, Accessible,
        Interoperable, and Reusable) and AI-ready, maximizing their
        reach and impact. It also helps users discover posters so their
        valuable content can be reused to drive discovery, generate new
        hypotheses, start new collaborations, support funding decision,
        and more.`,
            },
            {
              icon: `mdi:axis-arrow-info`,
              title: `How does it work?`,
              description: `With posters.science, researchers can easily upload their
        posters, let AI-powered tools extract rich metadata, generate a
        machine friendly version of their poster and archive everything
        on trusted repositories like Zenodo. Users can also use a
        smart-search feature to ask complex research questions and
        instantly find relevant posters. Posters.science indexes all
        openly available posters on the net to create the largest
        registry of posters users can search from.`,
            },
            {
              icon: `mdi:account-hard-hat`,
              title: `What challenges does it address?`,
              description: `Despite their value, most scientific posters disappear after a
        conference. Even when shared, they are often missing standard
        metadata, making them hard to search, cite, or reuse.
        Posters.science solves this by preserving, indexing, and
        enriching posters with structured, searchable metadata and
        creating machine-friendly posters.`,
            },
            {
              icon: `ep:guide`,
              title: `Why is this important?`,
              description: `Scientific posters often contain first disclosures of research
        ideas, datasets, and methods. Making them FAIR and AI-ready
        means they can be reused to accelerate discoveries.`,
            },
          ]}
        />
      </section>

      {/* <section className="bg-white py-10 pt-16">
        <Impact />
      </section> */}

      <section className="py-10 pt-16">
        <ProjectInfoSection
          title="Development Approach"
          description={`Posters.science is developed using an open-source approach.
      This allows for transparency and collaboration with the open
      source community.`}
          sideImageSrc="/images/github-logo.svg"
          sideImageUrl="https://github.com/fairdataihub/posters-science"
          sideImageAlt="GitHub logo"
          additionalLink={{
            text: `Explore the GitHub repository`,
            href: `https://github.com/fairdataihub/posters-science`,
            target: `_blank`,
            rel: `noopener`,
          }}
        />

        <ProjectInfoSection
          title="Funding"
          description={`This project is funded through a grant from The Navigation
      Fund. Additional details about the grant can be found in the
      DataCite Commons grant record.`}
          additionalLink={{
            text: `Learn more about The Navigation Fund`,
            href: `https://www.navigation.org/`,
            target: `_blank`,
            rel: `noopener`,
          }}
          funders={[
            {
              name: `The Navigation Fund`,
              id: `the-navigation-fund`,
              href: `https://www.navigation.org/`,
              image: `https://os.nav.fund/acknowledge/logos/TNF_Stacked_Logos/stacked_color.svg`,
            },
          ]}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <TeamMembers
          teamMembers={[
            {
              name: `Bhavesh Patel`,
              href: `/team/#Bhavesh-Patel`,
              external: false,
              image: `/images/people/bhavesh-head.jpg`,
            },
            {
              name: `Sanjay Soundarajan`,
              href: `/team/#Sanjay-Soundarajan`,
              external: false,
              image: `/images/people/sanjay-head.jpg`,
            },
            {
              name: `Dorian Portillo`,
              href: `/team/#Dorian-Portillo`,
              external: false,
              image: `/images/people/dorian-head.PNG`,
            },
            {
              name: `Nahid Zeinali`,
              href: `/team/#Nahid-Zeinali`,
              external: false,
              image: `/images/people/nahid-head.jpg`,
            },
            {
              name: `Paapa Mensah-Kane`,
              href: `/team/#Paapa-Mensah-Kane`,
              external: false,
              image: `/images/people/paapa-head.jpg`,
            },
            {
              name: `Gerard Blake`,
              href: `/team/#Gerard-Blake`,
              external: false,
              image: `/images/people/gerard-head.jpg`,
            },
            {
              name: `Aydan Gasimova`,
              href: `/team/#Aydan-Gasimova`,
              external: false,
              image: `/images/people/aydan-head.jpg`,
            },
          ]}
        />
      </section>

      <section className="bg-white py-10">
        <Timeline
          timelineList={[
            {
              longDate: `September 2025 - August 2026`,
              title: `Phase I development`,
              content: `The first version of posters.science is developed. It includes integration with Zenodo, tools to extract metadata and generate machine-friendly posters, and a smart-search tool to discover posters.`,
            },
          ]}
        />
      </section>

      <section className="bg-white pb-12">
        <PublicationsList publications={publications} />

        <div className="flex items-center justify-center">
          <span>Coming soon...</span>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `posters-science` tag
  const publications = PublicationsJSON.filter((publication) =>
    publication.project.includes(`posters-science`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default PostersScience;
