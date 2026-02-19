// import Impact from '@/components/aireadi/impact';
import HorizontalTimeline from '@/components/horizontal-event-timeline-carousel';
import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/infoSection';
import PublicationsList from '@/components/project/publicationsList';
import ResearchPartners from '@/components/project/researchPartners';
import ProjectStatistics from '@/components/project/statistics';
import TeamMembers from '@/components/project/teamMembers';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const Aireadi: React.FC<PublicationsItemList> = ({ publications }) => {
  const heroButtons = [
    {
      text: `Learn more`,
      href: `https://aireadi.org/`, // update later if AI-READI gets its own docs URL
      target: `_blank`,
      ariaLabel: `AI-READI website`,
      rel: `noopener`,
    },
    {
      text: `Visit the FAIRhub Portal`,
      href: `https://fairhub.io/`, // update later if AI-READI gets its own docs URL
      target: `_blank`,
      ariaLabel: `FAIRhub portal`,
      rel: `noopener`,
    },
  ];

  return (
    <>
      <Seo
        templateTitle="AI-READI"
        templateUrl="https://fairdataihub.org/aireadi"
        templateDescription="The AI-READI project seeks to create a flagship AI-ready and ethically-sourced dataset to provide critical insights into type 2 diabetes mellitus (T2DM), including salutogenic pathways to return to health"
        templateImage="https://kalai.fairdataihub.org/api/generate?app=fairdataihub&title=AI-READI&org=fairdataihub&description=Generating%20a%20flagship%20AI-ready%20and%20ethically-sourced%20dataset%20to%20support%20future%20AI-driven%20discoveries%20in%20diabetes"
      />

      <ProjectHero
        title="AI-READI"
        subtitle="Artificial Intelligence Ready and Exploratory Atlas for Diabetes Insights"
        description="Generating a flagship AI-ready and ethically-sourced dataset to boost future AI-driven discoveries in type 2 diabetes mellitus (T2DM)"
        imageSrc="/images/hero/aireadi-logo.png"
        imageAlt="AI-READI logo"
        imageWidth={400}
        imageHeight={400}
        buttons={heroButtons}
      />

      <ProjectAbout
        description={`AI-READI is one of the data generation projects funded by the National Institutes of Health (NIH)'s Bridge2AI Program. The AI-READI project is structured into six modules: Data Acquisition, Ethics, Standards, Teaming, Tools, and Skills & Workforce Development. The FAIR Data Innovations Hub is leading the Tools module.`}
        features={[
          {
            icon: `mdi:target-arrow`,
            title: `AI-READI Project Goal`,
            description: `The AI-READI project aims to build a flagship AI-ready, ethically sourced dataset to advance research on type 2 diabetes (T2DM) and generate insights into pathways toward improved health.`,
            link: {
              text: `Learn more about the AI-READI project`,
              href: `https://aireadi.org`,
              target: `_blank`,
              rel: `noopener`,
            },
          },
          {
            icon: `eos-icons:ai`,
            title: `AI-Readiness Strategy for Project Data`,
            description: `The AI-READI project data will be made FAIR to optimize reuse by humans and machines (i.e., AI/ML program). The data will additionally be shared according to applicable ethical guidelines to enhance AI-readiness.`,
            link: {
              text: `Learn more about FAIR`,
              href: `https://doi.org/10.1038/sdata.2016.18`,
              target: `_blank`,
              rel: `noopener`,
            },
          },
          {
            icon: `carbon:cloud-app`,
            title: `Role of the FAIR Data Innovations Hub`,
            description: `Our team will lead the development of fairhub.io, a web platform with tools to help researchers manage, curate, and share FAIR, AI-ready datasets.`,
          },
        ]}
      />

      <ProjectStatistics
        title="Impact of AI-READI"
        subtitle="Snapshot of key metrics"
        metrics={[
          {
            value: 4000,
            description: `Participants enrolled`,
            id: `participantNum`,
          },
          {
            value: 15,
            suffix: `+`,
            description: `Data types to be collected (vitals, electrocardiogram, etc.)`,
            id: `dataNum`,
          },
          {
            value: 8,
            description: `Institutions collaborating on the project`,
            id: `institutionNum`,
          },
          {
            value: 50,
            suffix: `+`,
            description: `Team members contributing to the project`,
            id: `teamNum`,
          },
        ]}
      />

      <ProjectInfoSection
        title="Funding"
        description="The AI-READI project is funded by the National Institutes of Health (NIH)'s Bridge2AI program."
        additionalLinks={[
          {
            text: `Explore the award on NIH Reporter`,
            href: `https://reporter.nih.gov/project-details/10471118`,
            target: `_blank`,
          },
        ]}
      />

      <ResearchPartners
        researchPartners={{
          description: `The AI-READI project is led by multiple institutions. In addition to the FAIR Data Innovations Hub, other institutions collaborating on the AI-READI project include: University of Washington, Oregon Health & Science University, Johns Hopkins University, University of California at San Diego, Stanford University, Native BioData Consortium, University of Alabama at Birmingham, and Microsoft.`,
        }}
      />

      <HorizontalTimeline
        timelineList={[
          {
            longDate: `September 2022 - Aug 2023`,
            title: `Year 1 development`,
            content: `The base framework of fairhub.io will be developed and support will be provided uploading data, structuring high-level data and metadata, and sharing data.`,
          },
          {
            longDate: `September 2023 - Aug 2024`,
            title: `Year 2 development`,
            content: `Release of AI-READI Dataset v2 through the FAIRhub platform, alongside continued development of FAIRhub, dataset documentation, and FAIR- and AI-ready standards to support broader data access and reuse.`,
          },
          {
            longDate: `September 2024 - Aug 2025`,
            title: `Year 3 development`,
            content: `Expansion of the AI-READI dataset toward full cohort enrollment, continued platform maturation, refinement of FAIR and AI-ready standards, and enhanced support for downstream research use and task-force–driven AI applications.`,
          },
        ]}
      />

      <ProjectInfoSection
        title="Development approach"
        description="All software and tools from the AI-READI project, including fairhub.io, are developed under an MIT License from the AI-READI organization on GitHub."
        sideImageSrc="/images/github-logo.svg"
        sideImageUrl="https://github.com/AI-READI"
        additionalLinks={[
          {
            text: `Explore the AI-READI GitHub organization`,
            href: `https://github.com/AI-READI`,
            target: `_blank`,
          },
        ]}
        sideImageAlt="GitHub logo"
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
            name: `Sanjay Soundarajan`,
            href: `/team/#Sanjay-Soundarajan`,
            external: false,
            image: `/images/people/sanjay-head.jpg`,
          },
          {
            name: `Aydan Gasimova`,
            href: `/team/#Aydan-Gasimova`,
            external: false,
            image: `/images/people/aydan-head.jpg`,
          },
          {
            name: `Dorian Portillo`,
            href: `/team/#Dorian-Portillo`,
            external: false,
            image: `/images/people/dorian-head.PNG`,
          },
          {
            name: `Nada Haboudal`,
            href: `/team/#Nada-Haboudal`,
            external: false,
            image: `/images/people/nada-head.jpg`,
          },
        ]}
      />
      <PublicationsList
        publications={publications}
        impactProjects={`aireadi`}
      />
    </>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `aireadi` tag
  const publications = PublicationsJSON.filter((publication) =>
    publication.project.includes(`aireadi`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default Aireadi;
