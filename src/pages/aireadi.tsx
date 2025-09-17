// import Impact from '@/components/aireadi/impact';
import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/infoSection';
import PublicationsList from '@/components/project/publicationsList';
import ResearchPartners from '@/components/project/researchPartners';
import TeamMembers from '@/components/project/teamMembers';
import Timeline from '@/components/project/timeline';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const timelineList = [
  {
    longDate: `September 2022 - Aug 2023`,
    title: `Year 1 development`,
    content: `The base framework of fairhub.io will be developed and support will be provided uploading data, structuring high-level data and metadata, and sharing data.`,
  },
];

const Aireadi: React.FC<PublicationsItemList> = ({ publications }) => {
  const heroButtons = [
    {
      text: `Learn more`,
      href: `https://docs.sodaforsparc.io/`,
      target: `_blank`,
      ariaLabel: `SODA for SPARC Documentation`,
      rel: `noopener`,
    },
  ];

  return (
    <div>
      <Seo
        templateTitle="AI-READI"
        templateUrl="https://fairdataihub.org/aireadi"
        templateDescription="The AI-READI project seeks to create a flagship AI-ready and ethically-sourced dataset to provide critical insights into type 2 diabetes mellitus (T2DM), including salutogenic pathways to return to health"
        templateImage="https://kalai.fairdataihub.org/api/generate?app=fairdataihub&title=AI-READI&org=fairdataihub&description=Generating%20a%20flagship%20AI-ready%20and%20ethically-sourced%20dataset%20to%20support%20future%20AI-driven%20discoveries%20in%20diabetes"
      />

      <section className="bg-white py-10 pt-16">
        <ProjectHero
          title="AI-READI"
          subtitle="Artificial Intelligence Ready and Exploratory Atlas for Diabetes Insights"
          description="Generating a flagship AI-ready and ethically-sourced dataset to boost future AI-driven discoveries in type 2 diabetes mellitus (T2DM)"
          imageSrc="/images/hero/aireadi-logo.png"
          imageAlt="AI-READI logo"
          imageWidth={555 / 2}
          imageHeight={569 / 2}
          buttons={heroButtons}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <ProjectAbout
          description={`AI-READI is one of the data generation projects funded by the National
            Institutes of Health (NIH)'s Bridge2AI Program. The AI-READI
            project is structured into six modules: Data Acquisition, Ethics,
            Standards, Teaming, Tools, and Skills & Workforce Development. The
            FAIR Data Innovations Hub is leading the Tools module.`}
          features={[
            {
              icon: `mdi:target-arrow`,
              title: `What is the goal of AI-READI project?`,
              description: `The AI-READI project seeks to create a flagship AI-ready and
                ethically-sourced dataset that will support future AI-drive
                research projects to provide critical insights into type 2
                diabetes mellitus (T2DM), including salutogenic pathways to
                return to health.`,
              link: {
                text: `Learn more about the AI-READI project`,
                href: `https://aireadi.org`,
                target: `_blank`,
                rel: `noopener`,
              },
            },
            {
              icon: `mdi:files`,
              title: `What data will be collected?`,
              description: `The project will aim to collect data from 4,000 participants. To
                ensure the data is population-representative, the participants
                will be balanced for three factors: disease severity,
                race/ethnicity, and sex. Various data types will be collected
                from each participant, including vitals, electrocardiogram,
                glucose monitoring, physical activity, ophthalmic evaluation,
                etc.`,
            },
            {
              icon: `eos-icons:ai`,
              title: `How will the project data be made AI-ready?`,
              description: `The AI-READI project data will be made FAIR to optimize reuse by
                humans and machines (i.e., AI/ML program). The data will
                additionally be shared according to applicable ethical
                guidelines to enhance AI-readiness.`,
              link: {
                text: `Learn more about FAIR`,
                href: `https://doi.org/10.1038/sdata.2016.18`,
                target: `_blank`,
                rel: `noopener`,
              },
            },
            {
              icon: `carbon:cloud-app`,
              title: `What is the fairdataihub's role in the project?`,
              description: `Our team will lead the development of fairhub.io, a web platform
                with intuitive user interfaces and automation tools that will
                help data-collecting researchers from the project (and beyond)
                with managing, curating, and sharing FAIR, ethically-sourced,
                and AI-ready datasets.`,
            },
          ]}
        />
      </section>

      <section className="bg-white py-10 pt-16">
        <ProjectInfoSection
          title="Development Approach"
          description="All software and tools from the AI-READI project, including
            fairhub.io, are developed under an MIT License from the
            AI-READI organization on GitHub."
          sideImageSrc="/images/github-logo.svg"
          sideImageUrl="https://github.com/AI-READI"
          additionalLink={{
            text: `Explore the AI-READI GitHub organization`,
            href: `https://github.com/AI-READI`,
          }}
          sideImageAlt="GitHub logo"
        />

        <ProjectInfoSection
          title="Funding"
          description="The AI-READI project is funded by the National Institutes of
            Health (NIH)'s Bridge2AI program."
          additionalLink={{
            text: `Explore the award on NIH Reporter`,
            href: `https://reporter.nih.gov/project-details/10471118`,
          }}
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

        <ResearchPartners
          researchPartners={{
            description: `The AI-READI project is lead by multiple institutions. In addition to the FAIR Data Innovations Hub, other institutions collaborating on the AI-READI project include: University of Washington, Oregon Health & Science University, Johns Hopkins University, University of California at San Diego, Stanford University, Native BioData Consortium, University of Alabama at Birmingham, and Microsoft.`,
          }}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <Timeline timelineList={timelineList} />
      </section>

      <section className="bg-white py-10">
        <PublicationsList publications={publications} />
      </section>
    </div>
  );
};

export async function getStaticProps() {
  // Filter the publications with the `sodaforsparc` tag
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
