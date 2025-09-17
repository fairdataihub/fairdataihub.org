import Info from '@/components/posters-science/info';
import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import Timeline from '@/components/ui/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const aboutData = {
  description: `Millions of scientific posters are presented every year, containing
    valuable early-stage ideas and insights, but most quietly vanish after
    a conference ends. Posters.science is a free and open-source platform
    that makes it easier for researchers to share and discover posters,
    turning them into enduring research assets.`,
  features: [
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
  ],
};

const timelineList = [
  {
    longDate: `September 2025 - August 2026`,
    title: `Phase I development`,
    content: `The first version of posters.science is developed. It includes integration with Zenodo, tools to extract metadata and generate machine-friendly posters, and a smart-search tool to discover posters.`,
  },
];

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
          description={aboutData.description}
          features={aboutData.features}
        />
      </section>

      {/* <section className="bg-white py-10 pt-16">
        <Impact />
      </section> */}

      <section className="py-10 pt-16">
        <Info />
      </section>

      <section className="bg-white py-10">
        <Timeline timelineList={timelineList} />
      </section>

      <section className="bg-white pb-12">
        <PublicationsList publications={publications} />
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
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
