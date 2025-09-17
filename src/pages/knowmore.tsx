import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/InfoSection';
import TeamMembers from '@/components/project/TeamMembers';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const aboutData = {
  description: `KnowMore is a tool readily integrable into the SPARC Portal that
    allows to find potential relation, difference, and similarities
    between multiple SPARC datasets in just a few clicks, which can lead
    to a new discovery, new hypothesis, or simply guide the user to the
    next logical step in their discovery process.`,
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
        href: `https://doi.org/10.1101/2021.02.10.430563`,
        target: `_blank`,
        rel: `noopener`,
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
      icon: `eos-icons:ai-healing`,
      title: `What does KnowMore do?`,
      description: `KnowMore uses several SPARC resources, data science methods, and
        knowledge of the SDS to generate various visualizations to help
        the user identify potential relations across datasets of
        interests.`,
    },
  ],
};

const infoData = {
  developmentApproach: {
    title: `Development Approach`,
    description: `KnowMore is developed as an open-source application with an
      MIT License. It is currently integrated into our fork of the
      SPARC Portal and is not available in the official SPARC
      Portal release. Anyone is free to fork our GitHub repository
      and make their own changes if they would like. If you would
      like to submit a feature modification, or feature
      suggestion, please feel free to submit an issue on the
      repository.`,
    githubUrl: `https://github.com/fairdataihub/KnowMore`,
    githubBadges: [
      {
        type: `contributors` as const,
        href: `https://github.com/fairdataihub/KnowMore/graphs/contributors`,
        alt: `knowmore contributors`,
        src: `https://img.shields.io/github/contributors/SPARC-FAIR-Codeathon/KnowMore.svg?style=flat-square`,
      },
      {
        type: `stars` as const,
        href: `https://github.com/fairdataihub/KnowMore/stargazers`,
        alt: `knowmore stars`,
        src: `https://img.shields.io/github/stars/SPARC-FAIR-Codeathon/KnowMore.svg?style=flat-square`,
      },
      {
        type: `issues` as const,
        href: `https://github.com/fairdataihub/KnowMore/issues`,
        alt: `knowmore issues`,
        src: `https://img.shields.io/github/issues/SPARC-FAIR-Codeathon/KnowMore.svg?style=flat-square`,
      },
      {
        type: `license` as const,
        href: `https://github.com/fairdataihub/KnowMore/blob/master/LICENSE`,
        alt: `knowmore license`,
        src: `https://img.shields.io/github/license/SPARC-FAIR-Codeathon/KnowMore.svg?style=flat-square`,
      },
    ],
    additionalLink: {
      text: `Explore the GitHub repository`,
      href: `https://github.com/SPARC-FAIR-Codeathon/KnowMore`,
      target: `_blank`,
      rel: `noopener`,
    },
  },
  originStory: {
    title: `Origin Story`,
    description: `KnowMore was introduced as a project during the 2021 NIH
      SPARC Codeathon with the aim of leveraging the FAIR
      characteristics of the SPARC datasets to enable automated
      comparison across them. KnowMore won the Grand Prize at the
      Codeathon.`,
    additionalLink: {
      text: `Learn more about the SPARC Codeathon`,
      href: `https://sparc.science/help/2021-sparc-fair-codeathon`,
      target: `_blank`,
      rel: `noopener`,
    },
    icon: (
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
    ),
  },
  teamMembers: [
    {
      name: `Bhavesh Patel`,
      href: `/team/#Bhavesh-Patel`,
      external: false,
      image: `/images/people/bhavesh-head.jpg`,
    },
    {
      name: `Ryan Quey`,
      href: `https://www.ryanquey.com/`,
      external: true,
      image: `/images/people/ryan-head.jpg`,
    },
    {
      name: `Anmol Kiran`,
      href: `/knowmore`,
      external: false,
      image: `https://api.dicebear.com/7.x/thumbs/svg?seed=AnmolKiran`,
    },
    {
      name: `Matthew Schiefer`,
      href: `/knowmore`,
      external: false,
      image: `https://api.dicebear.com/7.x/thumbs/svg?seed=MatthewSchiefer`,
    },
  ],
};

const KnowMore: React.FC<PublicationsItemList> = ({ publications }) => {
  const heroButtons = [
    {
      text: `Test KnowMore`,
      href: `https://sparc-know-more.herokuapp.com/sparc-app/`,
      target: `_blank`,
      ariaLabel: `KnowMore application`,
      rel: `noopener`,
    },
    {
      text: `Documentation`,
      href: `https://github.com/SPARC-FAIR-Codeathon/KnowMore`,
      target: `_blank`,
      ariaLabel: `KnowMore Documentation`,
      rel: `noopener`,
    },
  ];

  return (
    <>
      <Seo
        templateTitle="KnowMore"
        templateUrl="https://fairdataihub.org/knowmore"
        templateDescription="KnowMore is a tool readily integrable into the SPARC Portal that allows to find potential relation, difference, and similarities between multiple SPARC datasets in just a few clicks, which can lead to a new discovery, new hypothesis, or simply guide the user to the next logical step in their discovery process"
        templateImage="https://fairdataihub.org/thumbnails/knowmore.png"
      />

      <>
        <section className="bg-gray-50 py-10 pt-16">
          <ProjectHero
            title={`KnowMore`}
            subtitle={`Say &quot;no more&quot; to manual discovery`}
            description={`Automated Knowledge Discovery Tool for SPARC Datasets`}
            imageSrc={`https://github.com/fairdataihub/KnowMore/raw/main/docs/knowmore-website.gif`}
            imageAlt={`Knowmore gif`}
            imageWidth={670}
            imageHeight={370}
            buttons={heroButtons}
          />
        </section>

        <section className="bg-white py-10">
          <ProjectAbout
            description={aboutData.description}
            features={aboutData.features}
          />
        </section>

        <section className="bg-gray-50 py-10">
          <ProjectInfoSection {...infoData.developmentApproach} />
          <ProjectInfoSection {...infoData.originStory} />
          <TeamMembers teamMembers={infoData.teamMembers} />
        </section>

        <section className="bg-white py-10">
          <PublicationsList publications={publications} />
        </section>
      </>
    </>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
  const publications = PublicationsJSON.filter((publication) =>
    publication.project.includes(`knowmore`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default KnowMore;
