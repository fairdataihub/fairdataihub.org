import HorizontalTimeline from '@/components/horizontal-event-timeline-carousel';
import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/infoSection';
import PublicationsList from '@/components/project/publicationsList';
import TeamMembers from '@/components/project/teamMembers';
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
    <section>
      <Seo
        templateTitle="Posters.science"
        templateUrl="https://fairdataihub.org/posters-science"
        templateDescription="Posters.science is a free and open-source platform that makes it easier for researchers to share and discover posters, turning them into enduring research assets."
        templateImage="https://fairdataihub.org/thumbnails/posters-science.png"
      />

      <ProjectHero
        title="Posters.science"
        subtitle="Share posters, make discoveries"
        description="A free and open-source platform that makes scientific posters FAIR and AI-ready so they can be discovered, cited, and reused long after the conference ends."
        imageSrc="/images/hero/posters-science-process.png"
        imageAlt="Illustration of the Posters.science upload and discovery workflow"
        imageWidth={650}
        imageHeight={350}
        buttons={heroButtons}
      />

      <ProjectAbout
        description={`Millions of scientific posters are presented every year, containing valuable early-stage ideas and insights, but most vanish quietly after a conference ends. Posters.science is a free and open-source platform that makes it easier for researchers to share and discover posters, turning them into enduring research assets.`}
        features={[
          {
            icon: `material-symbols:linear-scale`,
            title: `What is Posters.science?`,
            description: `Posters.science enables researchers to share posters that are FAIR (Findable, Accessible, Interoperable, and Reusable) and AI-ready, maximizing their reach and impact. It also helps users discover posters so their content can drive new discoveries, collaborations, hypotheses, and funding decisions.`,
          },
          {
            icon: `mdi:axis-arrow-info`,
            title: `How does it work?`,
            description: `Researchers can upload their posters and let AI-powered tools extract rich metadata, generate a machine-friendly version, and archive everything on trusted repositories like Zenodo. Users can then ask complex research questions via smart search and instantly find relevant posters from a growing registry of openly available content.`,
          },
          {
            icon: `mdi:account-hard-hat`,
            title: `What challenges does it address?`,
            description: `Most posters disappear after a conference or are shared without standardized metadata, making them hard to search, cite, or reuse. Posters.science preserves and indexes posters, enriches them with structured metadata, and creates machine-friendly representations.`,
          },
          {
            icon: `ep:guide`,
            title: `Why is this important?`,
            description: `Posters often contain first disclosures of research ideas, datasets, and methods. Making them FAIR and AI-ready ensures they can be discovered, connected, and reused to accelerate scientific progress.`,
          },
        ]}
      />

      <ProjectInfoSection
        title="Development approach"
        description={`Posters.science is developed using an open-source approach, enabling transparency, reuse, and collaboration with the broader community of researchers, institutions, and tool builders.`}
        sideImageSrc="/images/github-logo.svg"
        sideImageUrl="https://github.com/fairdataihub/poster2json"
        sideImageAlt="GitHub logo"
        additionalLinks={[
          {
            text: `Explore the GitHub repository`,
            href: `https://github.com/fairdataihub/poster2json`,
            target: `_blank`,
          },
        ]}
      />

      <ProjectInfoSection
        title="Funding"
        description={`This project is funded through a grant from The Navigation Fund. Additional details about the grant and its goals are available through The Navigation Fund and associated records in DataCite Commons.`}
        additionalLinks={[
          {
            text: `Learn more about The Navigation Fund`,
            href: `https://www.navigation.org/`,
            target: `_blank`,
          },
        ]}
        funders={[
          {
            name: `The Navigation Fund`,
            id: `the-navigation-fund`,
            href: `https://www.navigation.org/`,
            image: `/images/posters-science/nav-fund.svg`,
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
          {
            name: `James ONeill`,
            href: `/team/#James-ONeill`,
            external: false,
            image: `/images/people/james-head.jpg`,
          },
        ]}
      />

      <HorizontalTimeline
        title="Project milestones"
        description="Key milestones in the early development of Posters.science."
        timelineList={[
          {
            longDate: `September 2025 – August 2026`,
            title: `Phase I development`,
            content: `The first version of Posters.science is developed with integration to Zenodo, tools to extract metadata and generate machine-friendly posters, and a smart-search experience to discover posters across the registry.`,
          },
        ]}
      />

      <PublicationsList
        publications={publications}
        impactProjects={`posters-science`}
      />
    </section>
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
