import { useEffect, useState } from 'react';

import getLatestDownloadLink from '@/lib/getLatestDownloadLink';

import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/InfoSection';
import ResearchPartners from '@/components/project/ResearchPartners';
import ProjectStatistics from '@/components/project/statistics';
import TeamMembers from '@/components/project/TeamMembers';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
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

const statisticsData = {
  title: `Impact on SPARC datasets`,
  subtitle: `Trusted by researchers all over the world`,
  metrics: [
    {
      value: 35,
      unit: `TB`,
      suffix: `+`,
      description: `Data Curated and Shared`,
      id: `dataNum`,
    },
    {
      value: 432,
      suffix: `k+`,
      description: `Files Curated and Shared`,
      id: `filesNum`,
    },
    {
      value: 234,
      description: `Datasets Published to Sparc.Science`,
      id: `datasetsNum`,
    },
    {
      value: 2158,
      description: `Downloads`,
      id: `assetDownloads`,
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
        <ProjectStatistics
          title={statisticsData.title}
          subtitle={statisticsData.subtitle}
          metrics={statisticsData.metrics}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <ProjectInfoSection
          title={`Development Approach`}
          description={`SODA is distributed as an open-source application with an
            MIT License. Anyone is free to fork our GitHub repository
            and make their own changes if they would like. If you would
            like to submit a feature modification, or feature
            suggestion, please feel free to submit an issue on the
            repository.`}
          githubUrl={`https://github.com/fairdataihub/SODA-for-SPARC`}
          githubBadges={[
            {
              type: `contributors`,
              href: `https://github.com/fairdataihub/SODA-for-SPARC/graphs/contributors`,
              alt: `soda for sparc contributors`,
              src: `https://img.shields.io/github/contributors/fairdataihub/SODA-for-SPARC.svg?style=flat-square`,
            },
            {
              type: `stars`,
              href: `https://github.com/fairdataihub/SODA-for-SPARC/stargazers`,
              alt: `soda for sparc stars`,
              src: `https://img.shields.io/github/stars/fairdataihub/SODA-for-SPARC.svg?style=flat-square`,
            },
            {
              type: `issues`,
              href: `https://github.com/fairdataihub/SODA-for-SPARC/issues`,
              alt: `soda for sparc issues`,
              src: `https://img.shields.io/github/issues/fairdataihub/SODA-for-SPARC.svg?style=flat-square`,
            },
            {
              type: `license`,
              href: `https://github.com/fairdataihub/SODA-for-SPARC/blob/master/LICENSE`,
              alt: `soda for sparc license`,
              src: `https://img.shields.io/github/license/fairdataihub/SODA-for-SPARC.svg?style=flat-square`,
            },
          ]}
          additionalLink={{
            text: `Explore the GitHub repository`,
            href: `https://github.com/fairdataihub/SODA-for-SPARC`,
          }}
        />

        <ProjectInfoSection
          title={`Funding`}
          description={`SODA is funded by the National Institutes of Health
            (NIH)'s SPARC program. The funding was initially
            provided as a supplement to an existing SPARC award at CalMI
            during the first phase of development before now having a
            standalone award.`}
          additionalLink={{
            text: `Explore the award on NIH Reporter`,
            href: `https://reporter.nih.gov/search/ZGaCL05IVE6SWFIbPlZFrg/project-details/10175565`,
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 170.5327 84.5895"
              className="h-20"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  y1="42.7643"
                  x2="170.5327"
                  y2="42.7643"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#0b00bf" />
                  <stop offset="1" stopColor="#bc00fc" />
                </linearGradient>
              </defs>
              <title>sparc-logo-primary</title>
              <g id="primary-logo">
                <path
                  d="M169.0691,57.0889l-60.922-1.5a2.8941,2.8941,0,0,0-2.7225,1.7374l-.0289.0665L99.327,71.3508,87.0724,4.2313l-.0045-.03a3.9867,3.9867,0,0,0-7.8393-.0051L69.6429,55.6522,1.4623,57.3835a1.5,1.5,0,0,0,.0125,3l70.6845,1.2053a2.9235,2.9235,0,0,0,2.9-2.2814l.0259-.1154L83.01,23.8779,95.2029,82.1654l.0113.0551a3,3,0,0,0,5.684.5645l9.237-21.2451,58.9339-1.451a1.5,1.5,0,0,0,0-3Z"
                  style={{ fill: `url(#linear-gradient)` }}
                />
                <path d="M11.3962.9629c6.9756,0,11.2637,4.48,11.2637,11.583V16.77H16.0681V12.5459c0-3.2637-1.7285-5.2471-4.6719-5.2471-3.0078,0-4.7353,1.9834-4.7353,5.2471a6.6109,6.6109,0,0,0,2.4316,5.0557L17.86,25.8574c2.8154,2.6875,5.3115,5.6319,5.3115,10.56,0,7.1035-4.416,11.583-11.5195,11.583-7.167,0-11.583-4.48-11.583-11.583V32.1924H6.6609V36.417c0,3.2637,1.792,5.2471,4.9912,5.2471,3.1357,0,4.9277-1.9834,4.9277-5.2471a7.4448,7.4448,0,0,0-2.6875-5.44l-8.96-8.3828C1.3494,19.2656.0691,16.45.0691,12.3545.0691,5.4424,4.3572.9629,11.3962.9629Z" />
                <path d="M44.2927,31.9365V47.5518H37.7009V1.4111H48.9636c7.1035,0,11.583,4.48,11.583,11.583v7.3594c0,7.168-4.4795,11.583-11.583,11.583ZM48.9,25.73c3.1993,0,5.0557-1.92,5.0557-5.1836V12.8027c0-3.2-1.8564-5.1845-5.0557-5.1845H44.2927V25.73Z" />
                <path d="M116.6443,47.5518h-6.5918V1.4111h11.583c7.1035,0,11.583,4.48,11.583,11.583v6.2715a11.1941,11.1941,0,0,1-5.0557,9.8555c1.8565,5.6318,4.48,13.3115,6.1436,18.4307h-6.72l-5.5674-16.7666h-5.375Zm4.9267-22.9747c3.2,0,5.0557-1.92,5.0557-5.1191V12.8027c0-3.2-1.8555-5.1845-5.0557-5.1845h-4.9267V24.5771Z" />
                <path d="M170.4656,32.1924V36.417c0,7.1035-4.4151,11.583-11.5186,11.583-7.1679,0-11.583-4.48-11.583-11.583V12.5459c0-7.1035,4.4151-11.583,11.583-11.583,7.1035,0,11.5186,4.48,11.5186,11.583V16.77h-6.5908V12.5459c0-3.2637-1.792-5.2471-4.9278-5.2471-3.2,0-4.9922,1.9834-4.9922,5.2471V36.417c0,3.2637,1.792,5.2471,4.9922,5.2471,3.1358,0,4.9278-1.9834,4.9278-5.2471V32.1924Z" />
              </g>
            </svg>
          }
        />

        <TeamMembers
          teamMembers={[
            {
              name: `Bhavesh Patel`,
              href: `/team/#Bhavesh-Patel`,
              external: false,
              image: `/images/people/bhavesh-head.jpg`,
            },
            {
              name: `Tram Ngo`,
              href: `https://www.linkedin.com/in/tramngo1603`,
              external: true,
              image: `/images/people/tram-head.jpg`,
            },
            {
              name: `Sanjay Soundarajan`,
              href: `/team/#Sanjay-Soundarajan`,
              external: false,
              image: `/images/people/sanjay-head.jpg`,
            },
            {
              name: `Christopher Marroquin`,
              href: `/team/#Christopher-Marroquin`,
              external: false,
              image: `/images/people/aaron-head.jpg`,
            },
            {
              name: `Jacob Clark`,
              href: `/team/#Jacob-Clark`,
              external: false,
              image: `/images/people/jacob-head.jpg`,
            },
            {
              name: `Dorian Portillo`,
              href: `/team/#Dorian-Portillo`,
              external: false,
              image: `/images/people/dorian-head.PNG`,
            },
          ]}
        />

        <ResearchPartners
          researchPartners={{
            description: `SODA for SPARC connects with several resources developed by
              the SPARC Data Resource Center (DRC) and we therefore
              collaborate actively with the DRC teams throughout our
              development process.`,
            collaborators: [
              {
                name: `Pennsieve`,
                id: `Pennsieve`,
                href: `https://app.pennsieve.io`,
                image: `/images/collaborators/pennsieve-logo.svg`,
              },
              {
                name: `FAIR Data Informatics Lab`,
                id: `FAIR-Data-Informatics-Lab`,
                href: `https://www.fdilab.org/`,
                image: `/images/collaborators/fdi-lab-logo.png`,
              },
              {
                name: `MBF Bioscience`,
                id: `MBF-Bioscience`,
                href: `https://www.mbfbioscience.com`,
                image: `/images/collaborators/mbf-logo.png`,
              },
            ],
          }}
        />
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
