import About from '@/components/posters-science/about';
import Hero from '@/components/posters-science/hero';
import Impact from '@/components/posters-science/impact';
import Info from '@/components/posters-science/info';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import Timeline from '@/components/ui/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const timelineList = [
  {
    longDate: `September 2025 - August 2026`,
    title: `Phase I development`,
    content: `The first version of posters.science is developed. It includes integration with Zenodo, tools to extract metadata and generate machine-friendly posters, and a smart-search tool to discover posters.`,
  },
];

const PostersScience: React.FC<PublicationsItemList> = ({ publications }) => {
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
        <Hero />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <About />
      </section>

      <section className="bg-white py-10 pt-16">
        <Impact />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <Info />
      </section>

      <section className="bg-white py-10 pt-16">
        <Timeline timelineList={timelineList} />
      </section>

      <section className="bg-white py-10">
        <PublicationsList publications={publications} />
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          Coming soon...
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
