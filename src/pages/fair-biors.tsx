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
        templateTitle="FAIR-BioRS"
        templateUrl="https://fairdataihub.org/fair-biors"
        templateDescription="Minimal and actionable step-by-step guidelines for making
        biomedical research software reusable in line with the FAIR4RS principles"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=FAIR-BioRS&description=Minimal%20and%20actionable%20step-by-step%20guidelines%20for%20making%20biomedical%20research%20software%20reusable%20in%20line%20with%20the%20FAIR4RS%20principles&app=fairdataihub&org=fairdataihub"
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
