import { useEffect, useState } from 'react';

import getLatestDownloadLink from '@/lib/getLatestDownloadLink';

// import Impact from '@/components/fairshare/impact';
import Info from '@/components/fairshare/info';
import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import Timeline from '@/components/ui/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const aboutData = {
  description: `FAIRshare is a cross-platform desktop software that allows researchers
    to easily organize and share their biomedical data and software
    according to applicable FAIR guidelines. The first phase of
    development of FAIRshare is focused on supporting COVID-19 and other
    infectious diseases related data and software. Our ultimate goal is to
    provide support for data and software from all fields of biomedical
    research.`,
  features: [
    {
      icon: `material-symbols:linear-scale`,
      title: `What are the FAIR Data Principles?`,
      description: `The FAIR Data Principles are a set of guidelines for curating
        and sharing research data such that they are optimaly reusable
        by both humans and machines.`,
      link: {
        text: `Learn more about FAIR`,
        href: `https://doi.org/10.1038/sdata.2016.18`,
        target: `_blank`,
        rel: `noopener`,
      },
    },
    {
      icon: `mdi:axis-arrow-info`,
      title: `Why are FAIR data practices important?`,
      description: `FAIR data practices are crucial for ensuring reproducibility of
        scientific findings, promoting reuse of data, and enabling
        AI/ML-driven analysis to ultimately increase the pace of new
        discoveries. They also ensure proper credits to data generators.`,
    },
    {
      icon: `mdi:account-hard-hat`,
      title: `What are the challenges?`,
      description: `Support is lacking to educate and assist the researchers, manual
        curation is not suitable to manage the amount of data being
        generated, and there is a lack of standard approach across
        research labs.`,
    },
    {
      icon: `ep:guide`,
      title: `What does FAIRshare do?`,
      description: `FAIRshare is a desktop software that streamlines the process of
        making biomedical research data and software FAIR by combining
        intuitive user interface and automation.`,
    },
  ],
};

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
  const [downloadURL, setDownloadURL] = useState<string | undefined>(``);

  useEffect(() => {
    const func = async () => {
      const url = await getLatestDownloadLink(`fairdataihub/FAIRshare`);
      setDownloadURL(url);
    };

    func().catch((e) => {
      console.error(e);
    });
  }, []);

  const heroButtons = [
    ...(downloadURL && downloadURL !== ``
      ? [
          {
            text: `Download now`,
            href: downloadURL,
            target: `_blank`,
            ariaLabel: `Download FAIRshare`,
            rel: `noopener`,
          },
        ]
      : []),
    {
      text: `Explore the docs`,
      href: `https://docs.fairshareapp.io/`,
      target: `_blank`,
      ariaLabel: `FAIRshare Documentation`,
      rel: `noopener`,
    },
  ];

  return (
    <>
      <Seo
        templateTitle="FAIRshare"
        templateUrl="https://fairdataihub.org/fairshare"
        templateDescription="FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their biomedical data and software according to applicable FAIR guidelines"
        templateImage="https://fairdataihub.org/thumbnails/fairshare.png"
      />

      <section className="bg-white py-10 pt-16">
        <ProjectHero
          title="FAIRshare"
          subtitle="FAIR data and software sharing made easy"
          description="Your one-stop tool for rapidly curating and sharing biomedical research data and software according to applicable FAIR guidelines"
          imageSrc="/images/hero/fairshare-macos.png"
          imageAlt="Screenshot of FAIRshare"
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
    publication.project.includes(`fairshare`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default FAIRshare;
