import { useEffect, useState } from 'react';

import getLatestDownloadLink from '@/lib/getLatestDownloadLink';

import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import Impact from '@/components/sodaforsparc/impact';
import Info from '@/components/sodaforsparc/info';
import Timeline from '@/components/ui/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const timelineList = [
  {
    longDate: `December 2018`,
    title: `Birth of SODA`,
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
  {
    longDate: `Sept 2023 - Aug 2024`,
    title: `Phase V development`,
    content: `The SODA team improved the user interfaces of SODA and enhanced workflows to further simplify data submission for non-SPARC users and worked with the MBF team for integrated MicroFile+ and Biolucida with SODA (and more).`,
  },
  {
    longDate: `Sept 2024 - Aug 2025`,
    title: `Phase VI development`,
    content: `In the final phase of development the SODA team is focusing on bringing the SDS 3.0 to SODA and overall enhancing the user experience by simplifying UIs and presentation.`,
  },
];

const aboutData = {
  description: `SODA is a cross-platform desktop software that helps researchers
    prepare and share FAIR peripheral nervous system (PNS) related data
    and models using the SPARC Data Structure (SDS) and the SPARC Portal.
    Since 2021, SODA has been installed on over 1300 computers, empowering
    researchers worldwide.`,
  features: [
    {
      icon: `material-symbols:linear-scale`,
      title: `What is SPARC?`,
      description: `The NIH's Stimulating Peripheral Activity to Relieve
        Conditions (SPARC) program seeks to accelerate development of
        therapeutic devices that modulate electrical activity in nerves
        to improve organ function.`,
      link: {
        text: `Learn more about SPARC`,
        href: `https://sparc.science/`,
        target: `_blank`,
        rel: `noopener`,
        umamiEvent: `About section link`,
        umamiEventText: `Learn more about SPARC`,
      },
    },
    {
      icon: `mdi:axis-arrow-info`,
      title: `What are the FAIR SPARC Data Guidelines?`,
      description: `All SPARC-funded researchers must curate their datasets
        following the SPARC Data Standards (SDS) and share them openly
        on the Pennsieve data platform as per their funding agreement
        with SPARC.`,
      link: {
        text: `Learn more about SDS`,
        href: `https://doi.org/10.1038/sdata.2016.18`,
        target: `_blank`,
        rel: `noopener`,
        umamiEvent: `About section link`,
        umamiEventText: `Learn more about SPARC`,
      },
    },
    {
      icon: `mdi:account-hard-hat`,
      title: `What are the challenges?`,
      description: `The guidelines are very exhaustive to maximize FAIRness of SPARC
        datasets but are challenging and time-consuming for researchers
        to implement.`,
    },
    {
      icon: `ep:guide`,
      title: `What does SODA do?`,
      description: `SODA combines intuitive user interfaces and automation such that
        researchers can efficiently and accurately curate their SPARC
        datasets.`,
    },
  ],
};

const SodaForSparc: React.FC<PublicationsItemList> = ({ publications }) => {
  const [downloadURL, setDownloadURL] = useState<string | undefined>(``);

  useEffect(() => {
    const func = async () => {
      const url = await getLatestDownloadLink(`fairdataihub/SODA-for-SPARC`);
      setDownloadURL(url);
    };

    func().catch((e) => {
      console.error(e);
    });
  }, []);

  const heroButtons = [
    {
      text: `Download now`,
      href: downloadURL,
      target: `_blank`,
      ariaLabel: `Download SODA for SPARC`,
      rel: `noopener`,
    },
    {
      text: `Explore the docs`,
      href: `https://docs.sodaforsparc.io/`,
      target: `_blank`,
      ariaLabel: `SODA for SPARC Documentation`,
      rel: `noopener`,
    },
  ];

  return (
    <>
      <Seo
        templateTitle="SODA for SPARC"
        templateUrl="https://fairdataihub.org/sodaforsparc"
        templateDescription="SODA is a cross-platform desktop software that helps researchers
          prepare and share FAIR peripheral nervous system (PNS) related data
          and models using the SPARC Data Structure (SDS) and the SPARC Portal."
        templateImage="https://fairdataihub.org/thumbnails/sodaforsparc.png"
      />

      <section className="bg-white py-10 pt-16">
        <ProjectHero
          title="SODA"
          subtitle="Software to organize data automatically"
          description="Streamlining FAIR data sharing"
          imageSrc="/images/hero/soda-app-macos.png"
          imageAlt="Screenshot of SODA for SPARC"
          imageWidth={1342}
          imageHeight={975}
          buttons={heroButtons}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <ProjectAbout
          description={aboutData.description}
          features={aboutData.features}
        />
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
