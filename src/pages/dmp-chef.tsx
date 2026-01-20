import HorizontalTimeline from '@/components/horizontal-event-timeline-carousel';
import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/infoSection';
import FundingInfo from '@/components/project/fundingInfo';
import ResearchPartners from '@/components/project/researchPartners';
import TeamMembers from '@/components/project/teamMembers';
import Seo from '@/components/seo/seo';

const DmpChef: React.FC = () => {
  return (
    <>
      <Seo
        templateTitle="DMP Chef"
        templateUrl="https://fairdataihub.org/dmp-chef"
        templateDescription="Draft funder-compliant Data Management Plans with AI"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=DMP%20Chef&description=Draft%20funder-compliant%20Data%20Management%20Plans%20with%20AI&app=dmp&org=fairdataihub"
      />

      <ProjectHero
        title="DMP Chef"
        subtitle="Draft funder-compliant Data Management Plans with AI"
        description="Helping researchers create compliant and machine-actionable Data Management Plans in minutes."
        imageSrc="/images/hero/dmp-chef-logo-transparent.png"
        imageAlt="DMP Chef logo"
        imageWidth={450}
        imageHeight={450}
        buttons={[
          {
            text: `Visit DMP Chef`,
            href: `https://survey.dmpchef.org/`,
            target: `_blank`,
            ariaLabel: `DMP Chef website`,
            rel: `noopener`,
          },
        ]}
      />

      <ProjectAbout
        description={`Data Management Plans (DMPs) are now commonly required by funders with all grant proposals. Researchers often struggle to prepare them due to the lack of training, the lack of support, the complexity of data, and the wide range of best practices, repositories, and metadata choices available. DMP Chef is an open-source (MIT License), Python-based pipeline that leverages AI to draft funder-compliant DMPs. This project is part of a broader extension of the DMP Tool platform. The ultimate goal is to integrate the DMP Chef pipeline into the DMP Tool platform, providing researchers with a familiar and convenient user interface that does not require any coding knowledge.`}
        features={[
          {
            icon: `material-symbols:linear-scale`,
            title: `What is DMP Chef?`,
            description: `DMP Chef is an open-source, Python-based pipeline where researchers can easily generate drafts of funder-compliant DMPs tailored to their grant proposals and even create machine-actionable versions.`,
          },
          {
            icon: `mdi:axis-arrow-info`,
            title: `How does it work?`,
            description: `Researchers only need to answer a few questions about their grant proposal (target funding organization, data to be collected, etc.) and DMP Chef will generate a draft of the entire DMP in line with the requirements of the target funder.`,
          },
          {
            icon: `mdi:account-hard-hat`,
            title: `What challenges does it address?`,
            description: `Writing a DMP is overwhelming, with each funder having its own policies, formats, and compliance criteria. Researchers often struggle to prepare a compliant DMP due to lack of training and support, and technical complexity. DMP Chef addresses this challenge by translating high-level project descriptions into funder-compliant DMP, using a tailored prompt, funder templates, funder guidelines, and an open source large language model (LLM) enhanced with a custom Retrieval-augmented generation (RAG) pipeline.`,
          },
          {
            icon: `ep:guide`,
            title: `Why is this important?`,
            description: `A strong DMP is often a requirement not only for securing research funds but, as the first point of data documentation, also critical for adopting  FAIR data practices. DMP Chef helps researchers create high-quality, DMPs that ensure compliance with funder policies and maximize the long-term impact of their data.`,
          },
        ]}
      />

      <ProjectInfoSection
        title="Development Approach"
        description={`DMP chief is developed using an open-source approach. This allows for transparency and collaboration with the open source community. The GitHub repository will be linked here as we test and develop the platform.`}
        sideImageSrc={`/images/github-logo.svg`}
        sideImageUrl={`https://github.com/fairdataihub/dmpchef`}
        sideImageAlt={`GitHub logo`}
        additionalLink={{
          text: `Explore the GitHub repository`,
          href: `https://github.com/fairdataihub/dmpchef`,
          target: `_blank`,
          rel: `noopener`,
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
        ]}
      />

      <ResearchPartners
        researchPartners={{
          description: `We are collaborating on this project with the developers and maintainers of the DMP Tool at the  California Digital Library (University of California).`,
          collaborators: [
            {
              name: `Becky Hofstein Grady`,
              image: `/images/collaborators/grady_photo-265x300.jpg`,
              id: ``,
              href: ``,
            },
            {
              name: `Brian Riley`,
              id: ``,
              href: ``,
              image: `/images/collaborators/brian_r.jpg`,
            },
            {
              name: `California Digital Library`,
              id: `California Digital Library`,
              href: `https://cdlib.org`,
              image: `/images/collaborators/logo-cdl.svg`,
            },
            {
              name: `DMP Tool`,
              id: `DMP Tool`,
              href: `https://dmptool.org/`,
              image: `/images/collaborators/DMP-Navy-Portrait.svg`,
            },
          ],
        }}
      />

      <FundingInfo
        title="Funding"
        description="This project is a National Science Foundation (NSF) and Chan Zuckerberg Initiative (CZI)-funded collaboration between the FAIR Data Innovations Hub and California Digital Library (University of California Office of the President) as part of a broader extension of the DMP Tool platform."
        additionalLinks={[
          {
            text: `National Science Foundation (NSF)`,
            href: `https://new.nsf.gov/`,
          },
          {
            text: `Chan Zuckerberg Initiative (CZI)`,
            href: `https://chanzuckerberg.com/`,
          },
        ]}
      />

      <HorizontalTimeline
        title="Project milestones"
        description="Key milestones in the early development of DMP Chef."
        timelineList={[
          {
            longDate: `January 2025 – August 2025`,
            title: `Phase 0`,
            content: `We are evaluated the performance of various LLMs off-the-shelf in drafting DMP compliant with the requirements of the National Institutes of Health (NIH).`,
          },
          {
            longDate: `October 2025 - March 2026`,
            title: `Phase 1`,
            content: `We are investigating how different approaches like Retrieval Augmented Generation (RAG) can improve the performance of open-source LLMs like Llama in drafting DMPs that comply with various funders’ requirements like NIH and NSF.`,
          },
        ]}
      />
    </>
  );
};

export default DmpChef;
