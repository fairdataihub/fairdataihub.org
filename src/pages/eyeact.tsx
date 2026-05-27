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

const EyeAct: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="Eye ACT"
        templateUrl="https://fairdataihub.org/eyeact"
        templateDescription="Seeing the Future of Brain Health Through the Eyes"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=Eye%20ACT&description=Seeing%20the%20Future%20of%20Brain%20Health%20Through%20the%20Eyes&app=eyeact&org=fairdataihub"
      />

      <ProjectHero
        title="Eye ACT"
        subtitle="Seeing the Future of Brain Health Through the Eyes"
        description="Exploring how ophthalmic conditions can provide early indicators of Alzheimer’s disease and other neurodegenerative conditions."
        imageSrc="/images/hero/eye-act-logo.png"
        imageAlt="Eye ACT logo"
        imageWidth={400}
        imageHeight={400}
        buttons={[
          {
            text: `Learn more`,
            href: `https://eyeactstudy.org/`,
            target: `_blank`,
            ariaLabel: `Eye ACT website`,
            rel: `noopener`,
          },
          {
            text: `Visit the Envision Portal`,
            href: `https://envisionportal.io/`,
            target: `_blank`,
            ariaLabel: `Envision Portal`,
            rel: `noopener`,
          },
        ]}
      />

      <ProjectAbout
        description={`The Eye ACT study, led by Dr. Cecilia Lee at the University of Washington, aims to provide insights on how ophthalmic conditions such as glaucoma and diabetic retinopathy can provide early indicators to Alzheimer's disease. As part of this project, the FAIR Data Innovations Hub is leading the development of the Envision Portal.`}
        features={[
          {
            icon: `material-symbols:linear-scale`,
            title: `What is the Eye ACT study?`,
            description: `The Eye ACT study investigates the relationship between eye health and cognitive decline. It aims to identify biomarkers in the eye that can predict the onset of Alzheimer's disease and other neurodegenerative conditions.`,
          },
          {
            icon: `mdi:axis-arrow-info`,
            title: `What is the Envision Portal?`,
            description: `The Envision Portal is an open-source platform designed to streamline the management and sharing of eye imaging data. It will help researchers manage, curate, and share their data following the FAIR principles so that datasets are AI-ready and reusable.`,
          },
          {
            icon: `mdi:account-hard-hat`,
            title: `What challenges does it address?`,
            description: `There is currently no platform that helps make eye imaging data FAIR. The Envision Portal enables that through intuitive user interfaces and automation so that making eye imaging data FAIR requires minimal time and effort from researchers.`,
          },
          {
            icon: `ep:guide`,
            title: `Why is this important?`,
            description: `Creating FAIR and AI-ready datasets is crucial for collaborating more effectively, leveraging AI technologies, and accelerating discoveries that could lead to better diagnostic tools and treatments for neurodegenerative diseases.`,
          },
        ]}
      />

      <ProjectStatistics
        title="Snapshot of the Eye ACT project"
        subtitle="Early impact and study scale"
        metrics={[
          {
            value: 1000,
            suffix: `+`,
            description: `Participants in the study`,
            id: `eyeactParticipants`,
          },
          {
            value: 4000,
            suffix: `+`,
            description: `Patient visits`,
            id: `eyeactVisits`,
          },
          {
            value: 300,
            unit: `GB`,
            description: `Data collected`,
            id: `eyeactData`,
          },
        ]}
      />

      <ProjectInfoSection
        title="Development approach"
        description="All software and tools developed by our team for the Eye ACT project, including the Envision Portal, are developed using an open-source approach. This enables transparency, reuse, and collaboration with the broader open-source community."
        sideImageSrc="/images/github-logo.svg"
        sideImageUrl="https://github.com/EyeACT/"
        sideImageAlt="GitHub logo"
        additionalLinks={[
          {
            text: `Explore the Eye ACT GitHub organization`,
            href: `https://github.com/EyeACT/`,
          },
        ]}
      />

      <div className="hidden">
        <ProjectInfoSection
          title="Funding"
          description="Our contribution to the Eye ACT project is funded through a subaward from the National Institute on Aging (NIA) grant R01AG060942."
          additionalLinks={[
            {
              text: `Explore the award on NIH Reporter`,
              href: `https://reporter.nih.gov/project-details/10471118`,
            },
          ]}
        />
      </div>

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
            name: `Nahid Zeinali`,
            href: `/team/#Nahid-Zeinali`,
            external: false,
            image: `/images/people/nahid-head.jpg`,
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
          description: `We are collaborating on this project with Dr. Cecilia Lee's team at the Ophthalmology and Visual Science department (Washington University in St. Louis).`,
        }}
      />

      <HorizontalTimeline
        title="Project milestones"
        description="Key milestones for the Eye ACT study and development of the Envision Portal."
        timelineList={[
          {
            longDate: `September 2024`,
            title: `Development of the Envision Portal`,
            content: `Development of the Envision Portal begins as part of the Eye ACT study, focusing on building FAIR and AI-ready workflows for eye imaging data.`,
          },
        ]}
      />

      <PublicationsList publications={publications} impactProjects="eyeact" />
    </>
  );
};

export async function getStaticProps() {
  const publications = PublicationsJSON.filter((publication) =>
    publication.project.includes(`eyeact`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default EyeAct;
