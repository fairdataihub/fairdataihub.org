import About from '@/components/fairbiors/about';
import Hero from '@/components/fairbiors/hero';
import Info from '@/components/fairbiors/info';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import Timeline from '@/components/ui/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const timelineList = [
  {
    longDate: `December 2021`,
    title: `Beginning of the idea`,
    content: `The need for actionable guidelines to make biomedical research software FAIR is identified.`,
  },
  {
    longDate: `December 2021 - April 2022`,
    title: `First version`,
    content: `The first version of the guidelines is established based on literature review plus our own assessment.`,
  },
  {
    longDate: `April 2022 - August 2023`,
    title: `Community feedback and improvements`,
    content: `Improvements are made through based on community feedback collected during conferences, webinars, and other means. Our most fruitful outreach effort was at the Biomedical Open Source Conference (BOSC) in 2022 and 2023, especially during the CoFest organized across two days before the conference.`,
  },
  {
    longDate: `September 2023`,
    title: `Publication of the guidelines`,
    content: `The second versions of the guidelines are published in Nature Scientific Data.`,
  },
  {
    longDate: `September 2023 - Present`,
    title: `Promotion and development of user support tools`,
    content: `We continue to promote the guidelines. We are also developing user-support tools such as FAIRshare and codefair so that implementing the guidelines is seamless for researchers.`,
  },
];

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
        <Timeline timelineList={timelineList} />
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
