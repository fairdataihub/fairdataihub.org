import About from '@/components/codefair/about';
import Hero from '@/components/codefair/hero';
import Info from '@/components/codefair/info';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import Timeline from '@/components/ui/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const timelineList = [
  {
    longDate: `December 2022`,
    title: `Birth of codefair`,
    content: `The concept of codefair is mapped out by the FAIR Data Innovations Hub.`,
  },
  {
    longDate: `March 2024`,
    title: `First version released`,
    content: `The first version of codefair is publicly released on the GitHub marketplace.`,
  },
  {
    longDate: `April 2024 - Present`,
    title: `Continued development`,
    content: `Features are added to codefair for helping researchers with all requirements of making software FAIR.`,
  },
];

const Codefair: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="Codefair"
        templateUrl="https://fairdataihub.org/codefair"
        templateDescription="Make your research software reusable without breaking a sweat! Codefair is a platform that helps you make your research software FAIR."
        templateImage="https://kalai.fairdataihub.org/api/generate?title=Codefair&description=Make%20your%20research%20software%20reusable%20without%20breaking%20a%20sweat!%20Codefair%20is%20a%20platform%20that%20helps%20you%20make%20your%20research%20software%20FAIR&app=fairdataihub&org=fairdataihub"
      />
      <section className="bg-white py-10 pt-16">
        <Hero />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <About />
      </section>

      <section className="bg-white py-10 pt-16">
        <Info />
      </section>

      <section className="bg-white py-10 pt-16">
        <Timeline timelineList={timelineList} />
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
    publication.project.includes(`codefair`),
  );

  return {
    props: {
      publications,
    },
  };
}

export default Codefair;
