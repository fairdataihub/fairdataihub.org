import Info from '@/components/eyeact/info';
import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import Timeline from '@/components/ui/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const aboutData = {
  description: `The Eye ACT study, led by Dr. Cecilia Lee at the University of
    Washington, aims to provide insights on how opthalmic conditions such
    as glaucoma and diabetic retinopathy can provide early indicators to
    Alzheimer's disease. As part of this project, the FAIR Data
    Innovations Hub is leading the development of the Envision Portal.`,
  features: [
    {
      icon: `material-symbols:linear-scale`,
      title: `What is the Eye ACT study?`,
      description: `The Eye ACT study investigates the relationship between eye
        health and cognitive decline. It aims to identify biomarkers in
        the eye that can predict the onset of Alzheimer's disease
        and other neurodegenerative conditions.`,
    },
    {
      icon: `mdi:axis-arrow-info`,
      title: `What is the Envision Portal?`,
      description: `The Envision Portal is an open-source platform designed to
        streamline the management and sharing of eye imaging data.
        Specifically, it will be designed to help researchers manage,
        curate and share their data following the FAIR principles, such
        that the data is ready for AI-driven analysis and collaborative
        studies.`,
    },
    {
      icon: `mdi:account-hard-hat`,
      title: `What challenges does it address?`,
      description: `There is currently no platform that helps making eye imaging
        data FAIR. The Envision Portal enables that through intuitive
        user interfaces and automation such that making eye imaging data
        FAIR requires minimal time and effort from researchers.`,
    },
    {
      icon: `ep:guide`,
      title: `Why is this important?`,
      description: `Creating FAIR and AI-ready datasets is crucial for collaborating
        more effectively, leverage AI technologies and accelerate
        discoveries that could lead to better diagnostic tools and
        treatments for neurodegenerative diseases.`,
    },
  ],
};

const timelineList = [
  {
    longDate: `September 2024`,
    title: `Development of the Envision Portal`,
    content: `The development of the Envision Portal begins as part of the Eye ACT study.`,
  },
];
const EyeAct: React.FC<PublicationsItemList> = ({ publications }) => {
  const heroButtons = [
    {
      text: `Learn More`,
      href: `https://eyeactstudy.org/`,
      target: `_blank`,
      ariaLabel: `Eye ACT Documentation`,
      rel: `noopener`,
      disabled: true,
      tooltipContent: `Coming soon`,
    },
    {
      text: `Visit the Envision Portal`,
      href: `https://envisionportal.io/`,
      target: `_blank`,
      ariaLabel: `Envision Portal`,
      rel: `noopener`,
      disabled: true,
      tooltipContent: `Coming soon`,
    },
  ];

  return (
    <>
      <Seo
        templateTitle="Eye ACT"
        templateUrl="https://fairdataihub.org/eyeact"
        templateDescription="Seeing the Future of Brain Health Through the Eyes"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=Eye%20ACT&description=Seeing%20the%20Future%20of%20Brain%20Health%20Through%20the%20Eyes&app=eyeact&org=fairdataihub"
      />

      <section className="bg-white py-10 pt-16">
        <ProjectHero
          title="Eye ACT"
          subtitle="Seeing the Future of Brain Health Through the Eyes"
          description=""
          imageSrc="/images/hero/eye-act-logo.png"
          imageAlt="Eye ACT logo"
          imageWidth={150}
          imageHeight={150}
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
  // Filter the publications with the `eyeact` tag and sort by the "year" key
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
