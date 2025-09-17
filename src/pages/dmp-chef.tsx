import About from '@/components/dmp/about';
import Info from '@/components/dmp/info';
import ProjectHero from '@/components/project/hero';
import Seo from '@/components/seo/seo';
import Timeline from '@/components/ui/timeline';

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
        <About />
      </section>

      {/* <section className="bg-white py-10 pt-16">
        <Impact />
      </section> */}

      <section className="pt-16">
        <Info />
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
