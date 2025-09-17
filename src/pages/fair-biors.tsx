import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/InfoSection';
import ResearchPartners from '@/components/project/ResearchPartners';
import TeamMembers from '@/components/project/TeamMembers';
import PublicationsList from '@/components/publications/publicationsList';
import Seo from '@/components/seo/seo';
import Timeline from '@/components/ui/timeline';

import PublicationsJSON from '@/assets/data/publications.json';

const timelineList = [
  {
    longDate: `December 2021`,
    title: `Beginning of the idea`,
    content: `The need for actionable guidelines to make biomedical research software FAIR is identified.`,
  },
  {
    longDate: `December 2021 - April 2022`,
    title: `First version`,
    content: `The first version of the guidelines is established based on literature review plus our own assessment.`,
  },
  {
    longDate: `April 2022 - August 2023`,
    title: `Community feedback and improvements`,
    content: `Improvements are made through based on community feedback collected during conferences, webinars, and other means. Our most fruitful outreach effort was at the Biomedical Open Source Conference (BOSC) in 2022 and 2023, especially during the CoFest organized across two days before the conference.`,
  },
  {
    longDate: `September 2023`,
    title: `Publication of the guidelines`,
    content: `The second versions of the guidelines are published in Nature Scientific Data.`,
  },
  {
    longDate: `September 2023 - Present`,
    title: `Promotion and development of user support tools`,
    content: `We continue to promote the guidelines. We are also developing user-support tools such as FAIRshare and codefair so that implementing the guidelines is seamless for researchers.`,
  },
];

const aboutData = {
  description: `The FAIR Biomedical Research Software (FAIR-BioRS) guidelines are a
    set of minimal and actionable step-by-step guidelines for making
    biomedical research software FAIR (Findable, Accessible,
    Interoperable, Reusable), in line with the FAIR Principles for
    Research Software (FAIR4RS Principles).`,
  features: [
    {
      icon: `material-symbols:linear-scale`,
      title: `What are research software?`,
      description: `Research software is any software created during the research
        process or for a research purpose. It can come in many format
        such as artificial intelligence (AI) models as Python scripts or
        data visualization tools as Jupyter notebooks. They are an
        essential aspects of biomedical research and therefore making
        them FAIR, i.e. optimally reusable is critical just like data.`,
      link: {
        text: `Learn more about research software`,
        href: `https://www.researchsoft.org/`,
        target: `_blank`,
        rel: `noopener`,
        umamiEvent: `About section link`,
        umamiEventText: `Learn more research software`,
      },
    },
    {
      icon: `mdi:axis-arrow-info`,
      title: `How to make research software FAIR?`,
      description: `The FAIR Principles for Research Software (FAIR4RS Principles)
        are reformulated versions of the FAIR Principles developed by
        the research software community specifically to make research
        software reusable.`,
      link: {
        text: `Learn more about the FAIR4RS Principles`,
        href: `https://doi.org/10.1038/s41597-022-01710-x`,
        target: `_blank`,
        rel: `noopener`,
        umamiEvent: `About section link`,
        umamiEventText: `Learn more about the FAIR4RS Principles`,
      },
    },
    {
      icon: `mdi:account-hard-hat`,
      title: `What are the challenges?`,
      description: `By design, the FAIR4RS Principles only provide a high-level
        framework for making software FAIR but do not provide practical
        instructions to do so. Therefore, making software FAIR requires
        an in-depth understanding of each of the FAIR4RS Principles, and
        finding out how to practically comply with them.`,
    },
    {
      icon: `ep:guide`,
      title: `How do the FAIR-BioRS guidelines help?`,
      description: `We established the FAIR Biomedical Research Software
        (FAIR-BioRS) guideline, which are clear, actionable, and
        step-by-step guidelines for making biomedical research software
        FAIR. Researchers can simply follow and implement the guidelines
        as they are developing their software to make it compliant with
        the FAIR4RS principles.`,
      link: {
        text: `Learn more about the FAIR-BioRS guidelines`,
        href: `https://doi.org/10.1038/s41597-022-01710-x`,
        target: `_blank`,
        rel: `noopener`,
        umamiEvent: `About section link`,
        umamiEventText: `Learn more about the FAIR-BioRS guidelines`,
      },
    },
  ],
};

const FAIRshare: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="FAIR-BioRS"
        templateUrl="https://fairdataihub.org/fair-biors"
        templateDescription="Minimal and actionable step-by-step guidelines for making
        biomedical research software reusable in line with the FAIR4RS principles"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=FAIR-BioRS&description=Minimal%20and%20actionable%20step-by-step%20guidelines%20for%20making%20biomedical%20research%20software%20reusable%20in%20line%20with%20the%20FAIR4RS%20principles&app=fairdataihub&org=fairdataihub"
      />

      <section className="bg-white py-10 pt-16">
        <ProjectHero
          title="FAIR Biomedical Research Software Guidelines"
          subtitle=""
          description="Minimal and actionable step-by-step guidelines for making biomedical research software reusable in line with the FAIR4RS principles"
          imageSrc="/images/hero/fairbiors.svg"
          imageAlt="Screenshot of FAIRshare"
          imageWidth={1342}
          imageHeight={975}
          buttons={[
            {
              text: `Explore the guidelines`,
              href: `https://fair-biors.org/`,
              target: `_blank`,
              ariaLabel: `FAIRbiors Guidelines`,
              rel: `noopener`,
            },
          ]}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <ProjectAbout
          description={aboutData.description}
          features={aboutData.features}
        />
      </section>

      <section className="bg-white py-10 pt-16">
        <ProjectInfoSection
          title="Development Approach"
          description={`The FAIR-BioRS guidelines were developed in collaboration
            with researchers from UCSF and ELIXIR (E.U.). We first
            established a list of outstanding questions we identified
            for practically implementing the FAIR4RS Principles (e.g.,
            How to obtain a unique identifier for software? How to
            include metadata? and so on). Then we combined literature
            review, community feedback, and our own assessment as
            developers of research software to established answers for
            these questions. Finally, we organized these answers as a
            set of step-by-step instructions that follow the typical
            sofware development process which became the FAIR-BioRS
            guidelines.`}
          additionalLink={{
            text: `Explore the FAIR-BioRS documentation`,
            href: `https://fair-biors.org`,
          }}
        />

        <ProjectInfoSection
          title="Funding"
          description={`The FAIR-BioRS guidelines where conceived while working on a
            project funded through a supplemental award from the
            National Institute of Allergy and Infectious Diseases
            (NIAID). Besides some initial effort through this project
            for the first few months, the development of the guidelines
            has been done without any support, through the sole will of
            the project members to make it easier for our peers wanting
            to develop and share FAIR software.`}
          additionalLink={{
            text: `Explore the parent award on NIH Reporter`,
            href: `https://reporter.nih.gov/project-details/10377989`,
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
          ]}
        />

        <ResearchPartners
          researchPartners={{
            description: `The FAIR-BioRS guidelines were developed in collaboration
              with Dr. Zicheng Hu (UCSF) and Dr. Hervé Ménager (Institut
              Pasteur, ELIXIR).`,
            collaborators: [
              {
                name: `Zicheng Hu (UCSF)`,
                id: `Zicheng-Hu-UCSF`,
                href: `https://profiles.ucsf.edu/zicheng.hu`,
                image: `https://researcherprofiles.org/profile/Modules/CustomViewPersonGeneralInfo/PhotoHandler.ashx?NodeID=189905&cachekey=d77aea77-c8d0-4a86-be9a-12da9da39113`,
                type: `person`,
              },
              {
                name: `Hervé Ménager`,
                id: `Herve-Menager`,
                href: `https://research.pasteur.fr/en/member/herve-menager/`,
                image: `/images/people/herve-head.jpg`,
                type: `person`,
              },
            ],
          }}
        />
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
    publication.project.includes(`fairbiors`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default FAIRshare;
