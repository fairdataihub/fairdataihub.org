import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/InfoSection';
import ResearchPartners from '@/components/project/ResearchPartners';
import TeamMembers from '@/components/project/TeamMembers';
import Seo from '@/components/seo/seo';
import Timeline from '@/components/ui/timeline';

const aboutData = {
  description: `Data Management Plans (DMPs) are now commonly required by funders with
    all grant proposals. Researchers often struggle to prepare them due to
    the lack of training, the lack of support, the complexity of data, and
    the wide range of best practices, repositories, and metadata choices
    available. DMP Chef is a free and open-source AI-based tool designed
    to assist researchers with drafting funder-compliant DMPs.`,
  features: [
    {
      icon: `material-symbols:linear-scale`,
      title: `What is DMP Chef?`,
      description: `DMP Chef is a web tool where researchers can easily generate
        drafts of funder-compliant DMPs tailored to their grant
        proposals and even create machine-actionable versions.`,
    },
    {
      icon: `mdi:axis-arrow-info`,
      title: `How does it work?`,
      description: `Researchers only need to answer a few questions about their
        grant proposal (target funding organization, data to be
        collected, etc.) and DMP Chef will generate a draft of the
        entire DMP in line with the requirements of the target funder.`,
    },
    {
      icon: `mdi:account-hard-hat`,
      title: `What challenges does it address?`,
      description: `Writing a DMP is overwhelming, with each funder having its own
        policies, formats, and compliance criteria. Researchers often
        struggle to prepare a compliant DMP due to lack of training and
        support, and technical complexity.`,
    },
    {
      icon: `ep:guide`,
      title: `Why is this important?`,
      description: `A strong DMP is often a requirement not only for securing
        research funds but, as the first point of data documentation,
        also critical for adopting FAIR data practices. DMP Chef helps
        researchers create high-quality DMPs that ensure compliance with
        funder policies and maximize the long-term impact of their data.`,
    },
  ],
};

const infoData = {
  developmentApproach: {
    title: `Development Approach`,
    description: `DMP Chef is developed using an open-source approach. This
      allows for transparency and collaboration with the open
      source community. The GitHub repository will be linked here
      as we develop the platform.`,
    githubUrl: `https://github.com/fairdataihub/dmp`,
    additionalLink: {
      text: `Explore the GitHub repository`,
      href: `https://github.com/fairdataihub/dmp`,
      target: `_blank`,
      rel: `noopener`,
    },
  },
  teamMembers: [
    {
      name: `Bhavesh Patel`,
      href: `/team/#Bhavesh-Patel`,
      external: false,
      image: `/images/people/bhavesh-head.jpg`,
    },
    {
      name: `Sanjay Soundarajan`,
      href: `/team/#Sanjay-Soundarajan`,
      external: false,
      image: `/images/people/sanjay-head.jpg`,
    },
    {
      name: `Dorian Portillo`,
      href: `/team/#Dorian-Portillo`,
      external: false,
      image: `/images/people/dorian-head.PNG`,
    },
    {
      name: `Xuebin Dong`,
      href: `/team/#Xuebin-Dong`,
      external: false,
      image: `/images/people/xuebin-head.jpg`,
    },
    {
      name: `Nahid Zeinali`,
      href: `/team/#Nahid-Zeinali`,
      external: false,
      image: `/images/people/nahid-head.jpg`,
    },
  ],
  researchPartners: {
    description: `We are collaborating on this project with the developers and
      maintainers of the DMPTool at the California Digital Library (University of
      California).`,
  },
};

const timelineList = [
  {
    longDate: `January 2025 – August 2025`,
    title: `Phase 0`,
    content: `We are evaluating the performance of various Large Language Models (LLMs) in drafting DMP compliant with the requirements of the National Institutes of Health (NIH).`,
  },
];
const DmpChef: React.FC<PublicationsItemList> = ({}) => {
  const heroButtons = [
    {
      text: `Visit DMP Chef`,
      href: `https://survey.dmpchef.org/`,
      target: `_blank`,
      ariaLabel: `DMP Chef website`,
      rel: `noopener`,
    },
  ];

  return (
    <>
      <Seo
        templateTitle="DMP Chef"
        templateUrl="https://fairdataihub.org/dmp-chef"
        templateDescription="Draft funder-compliant Data Management Plans with AI"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=DMP%20Chef&description=Draft%20funder-compliant%20Data%20Management%20Plans%20with%20AI&app=dmp&org=fairdataihub"
      />

      <section className="bg-white py-10 pt-16">
        <ProjectHero
          title="DMP Chef"
          subtitle="Draft funder-compliant Data Management Plans with AI"
          description=""
          imageSrc="/images/hero/dmp-chef-logo-transparent.png"
          imageAlt="DMP Chef logo"
          imageWidth={200}
          imageHeight={200}
          buttons={heroButtons}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-10">
        <ProjectAbout
          description={aboutData.description}
          features={aboutData.features}
        />
      </section>

      {/* <section className="bg-white py-10 pt-16">
        <Impact />
      </section> */}

      <section className="pt-16">
        <ProjectInfoSection {...infoData.developmentApproach} />
        <TeamMembers teamMembers={infoData.teamMembers} />
        <ResearchPartners researchPartners={infoData.researchPartners} />
      </section>

      <section className="bg-white py-10 pt-16">
        <Timeline timelineList={timelineList} />
      </section>

      {/* <section className="bg-white py-10">
        <PublicationsList publications={publications} />
      </section> */}
    </>
  );
};

// export async function getStaticProps() {
//   // Filter the publications with the `eyeact` tag and sort by the "year" key
//   const publications = PublicationsJSON.filter((publication) =>
//     publication.project.includes(`eyeact`),
//   ).sort((a, b) => b.year - a.year);

//   return {
//     props: {
//       publications,
//     },
//   };
// }

export default DmpChef;
