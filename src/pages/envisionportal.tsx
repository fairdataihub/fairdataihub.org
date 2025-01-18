import About from '@/components/envisionportal/about';
import Hero from '@/components/envisionportal/hero';
// import Impact from '@/components/fairshare/impact';
import Info from '@/components/envisionportal/info';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import Timeline from '@/components/ui/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const timelineList = [
  {
    longDate: `November 2020`,
    title: `Birth of FAIRshare`,
    content: `The first prototype of FAIRshare is developed for demo purpose by the FAIR Data Innovations Hub.`,
  },
  {
    longDate: `September 2021 - Aug 2022`,
    title: `Phase I development`,
    content: `The base framework of the software will be developed and support will be provided for COVID-19
    and other infectious diseases related data types (genomics, immunology, etc.) and software.`,
  },
];

const FAIRshare: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="FAIRshare"
        templateUrl="https://fairdataihub.org/fairshare"
        templateDescription="FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their biomedical data and software according to applicable FAIR guidelines"
        templateImage="https://fairdataihub.org/thumbnails/fairshare.png"
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
    publication.project.includes(`envisionportal`),
  );

  return {
    props: {
      publications,
    },
  };
}

export default FAIRshare;
