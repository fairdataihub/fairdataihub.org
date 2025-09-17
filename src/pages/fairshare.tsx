import { useEffect, useState } from 'react';

import getLatestDownloadLink from '@/lib/getLatestDownloadLink';

import About from '@/components/fairshare/about';
// import Impact from '@/components/fairshare/impact';
import Info from '@/components/fairshare/info';
import ProjectHero from '@/components/project/hero';
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
    publication.project.includes(`fairshare`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default FAIRshare;
