import About from '@/components/aireadi/about';
import Hero from '@/components/aireadi/hero';
// import Impact from '@/components/aireadi/impact';
import Info from '@/components/aireadi/info';
import Timeline from '@/components/aireadi/timeline';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const Aireadi: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <div>
      <Seo
        templateTitle="AI-READI"
        templateUrl="https://fairdataihub.org/aireadi"
        templateDescription="The AI-READI project seeks to create a flagship AI-ready and ethically-sourced dataset to provide critical insights into type 2 diabetes mellitus (T2DM), including salutogenic pathways to return to health"
        templateImage="https://kalai.fairdataihub.org/api/generate?app=fairdataihub&title=AI-READI&org=fairdataihub&description=Generating%20a%20flagship%20AI-ready%20and%20ethically-sourced%20dataset%20to%20support%20future%20AI-driven%20discoveries%20in%20diabetes"
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
        <Timeline />
      </section>

      <section className="bg-white py-10 ">
        <PublicationsList publications={publications} />
      </section>
    </div>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
  const publications = PublicationsJSON.filter((publication) =>
    publication.project.includes(`aireadi`),
  );

  return {
    props: {
      publications,
    },
  };
}

export default Aireadi;
