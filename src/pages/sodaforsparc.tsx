import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import About from '@/components/sodaforsparc/about';
import Hero from '@/components/sodaforsparc/hero';
import Impact from '@/components/sodaforsparc/impact';
import Info from '@/components/sodaforsparc/info';
import Timeline from '@/components/ui/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const timelineList = [
  {
    longDate: `December 2018`,
    title: `Birth of SODA for SPARC`,
    content: `The first prototype of SODA for SPARC is developed during the 2018 NIH SPARC Hackathon where it won the People's Choice Award.`,
  },
  {
    longDate: `May 2019 - Aug 2020`,
    title: `Phase I development`,
    content: `The base framework of the software is developed and support for high-level requirements of the SDS are integrated.`,
  },
  {
    longDate: `Sept 2020 - Aug 2021`,
    title: `Phase II development`,
    content: `The user interface is upgraded to become more intuitive, support is included for additional elements of the SDS, and the transition of SPARC from Blackfynn to Pennsieve is achieved.`,
  },
  {
    longDate: `Sept 2021 - Aug 2022`,
    title: `Phase III development`,
    content: `Support is provided for the evolving SPARC guidelines. A Guided Mode is implement to further streamline data curation and sharing. Integration with the SDS validator is initiated.`,
  },
  {
    longDate: `Sept 2022 - Aug 2023`,
    title: `Phase IV development`,
    content: `The SPARC data curation and sharing worflows will be further streamlined. Full integration will be achieved with the SDS validator and the new Pennsieve upload method. Support will be provided for the submission of non-SPARC data.`,
  },
];

const SodaForSparc: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="SODA for SPARC"
        templateUrl="https://fairdataihub.org/sodaforsparc"
        templateDescription="SODA (Software to Organize Data Automatically) for SPARC is a cross-platform desktop software that allows SPARC-funded researchers to easily comply with the FAIR SPARC Data curation and sharing guidelines"
        templateImage="https://fairdataihub.org/thumbnails/sodaforsparc.png"
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
      </section>
    </>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
  const publications = PublicationsJSON.filter((publication) =>
    publication.project.includes(`sodaforsparc`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default SodaForSparc;
