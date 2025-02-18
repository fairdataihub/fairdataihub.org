import About from '@/components/eyeact/about';
import Hero from '@/components/eyeact/hero';
// import Impact from '@/components/fairshare/impact';
import Info from '@/components/eyeact/info';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import Timeline from '@/components/ui/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const timelineList = [
  {
    longDate: `January 2025`,
    title: `Development of Envision Portal`,
    content: `The development of the Envision Portal begins as part of the EyeACT project.`,
  },
];
const EyeAct: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="Eye ACT"
        templateUrl="https://fairdataihub.org/eyeact"
        templateDescription="Seeing the Future of Brain Health Through the Eyes"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=Eye%20ACT&description=Seeing%20the%20Future%20of%20Brain%20Health%20Through%20the%20Eyes&app=eyeact&org=fairdataihub"
      />

      <section className="bg-white py-10 pt-16">
        <Hero />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <About />
      </section>

      {/* <section className="bg-white py-10 pt-16">
        <Impact />
      </section> */}

      <section className="bg-white py-10 pt-16">
        <Info />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
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
    publication.project.includes(`eyeact`),
  );

  return {
    props: {
      publications,
    },
  };
}

export default EyeAct;
