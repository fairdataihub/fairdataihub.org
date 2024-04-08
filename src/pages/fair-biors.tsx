import About from '@/components/fairbiors/about';
import Hero from '@/components/fairbiors/hero';
import Info from '@/components/fairbiors/info';
import Timeline from '@/components/fairbiors/timeline';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const FAIRshare: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="FAIRshare"
        templateUrl="https://fairdataihub.org/fair-biors"
        templateDescription="FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their biomedical data and software according to applicable FAIR guidelines"
        templateImage="/images/og/fairshare.png"
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
      <section className="bg-gray-50 py-10 pt-16">
        <Timeline />
      </section>

      <section className="bg-white py-10 ">
        <PublicationsList publications={publications} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
  const publications = PublicationsJSON.filter((publication) =>
    publication.project.includes(`fairbiors`),
  );

  return {
    props: {
      publications,
    },
  };
}

export default FAIRshare;
