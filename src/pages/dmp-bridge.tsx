import HorizontalTimeline from '@/components/horizontal-event-timeline-carousel';
import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/infoSection';
import ResearchPartners from '@/components/project/researchPartners';
import TeamMembers from '@/components/project/teamMembers';
import Seo from '@/components/seo/seo';

const DmpBridge: React.FC = () => {
  return (
    <>
      <Seo
        templateTitle="DMP Bridge"
        templateUrl="https://fairdataihub.org/dmp-bridge"
        templateDescription="Convert any Data Management Plan (DMP) PDF into a machine-actionable DMP"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=DMP%20Bridge&description=Convert%20any%20DMP%20PDF%20into%20a%20machine-actionable%20Data%20Management%20Plan&app=dmp&org=fairdataihub"
      />

      <ProjectHero
        title="DMP Bridge"
        subtitle="Create machine-actionable Data Management Plans with AI"
        description="Converting PDF Data Management Plans to machine actionable ones to faciliate processing, enhancement, validation, and more."
        imageSrc="/images/hero/dmp-bridge.png"
        imageAlt="DMP Bridge image"
        imageWidth={450}
        imageHeight={450}
        buttons={[
          {
            text: `Visit DMP Bridge`,
            href: `https://github.com/fairdataihub/dmpbridge`,
            target: `_blank`,
            ariaLabel: `DMP Bridge GitHub repository`,
            rel: `noopener`,
          },
        ]}
      />

      <ProjectAbout
        description={`Data Management Plans (DMPs) are commonly required by funders with every grant proposal, but the formats and requirements imposed by each funder keep evolving, and no two funders' PDFs are structured the same way. DMP Bridge is an open-source (MIT License), Python-based pipeline that converts any DMP PDF, regardless of funder format, into the DMP Tool JSON format, unlocking the ability to import, edit, and continue expanding existing DMPs rather than starting from scratch. This project builds on our earlier DMP Chef pipeline and is part of a broader extension of the DMP Tool platform.`}
        features={[
          {
            icon: `material-symbols:linear-scale`,
            title: `What is DMP Bridge?`,
            description: `DMP Bridge is an open-source, Python-based pipeline that converts DMP PDFs from any funder format into DMP Tool JSON, combining a narrative portion that mirrors DMP Tool's internal structure with the RDA DMP Common Standard JSON for machine-actionable output.`,
          },
          {
            icon: `mdi:axis-arrow-info`,
            title: `How does it work?`,
            description: `DMP Bridge works in three steps. First, it extracts text from PDF using a tool like pdfplumber. Then, it feeds it to an LLM that produces a structured narrative portion following the DMP Tool schema. Finally, it uses that narrative portion with another LLM extraction process, constrained to the RDA schema, to generate a machine-actionable DMP.`,
          },
          {
            icon: `mdi:account-hard-hat`,
            title: `What challenges does it address?`,
            description: `Every funder has its own DMP policies, formats, and compliance criteria, and existing DMPs are usually locked away as static PDFs. DMP Bridge addresses this by turning any DMP PDF into an interoperable, machine-actionable format, laying the foundation for a funder-agnostic tooling ecosystem that's robust to changing DMP guidelines.`,
          },
          {
            icon: `ep:guide`,
            title: `Why is this important?`,
            description: `Turning DMPs into machine-actionable objects enables automated compliance checking, AI-based DMP support, and continued editing throughout the data lifecycle, transforming DMPs from static, one-time funding documents into living objects that evolve as data is collected, managed, and shared.`,
          },
        ]}
      />

      <ProjectInfoSection
        title="Development Approach"
        description={`DMP Bridge is developed using an open-source approach. This allows for transparency and collaboration with the open source community. The GitHub repository will be linked here as we test and develop the tool.`} sideImageSrc={`/images/github-logo.svg`}
        sideImageUrl={`https://github.com/fairdataihub/dmpbridge`}
        sideImageAlt={`GitHub logo`}
        additionalLinks={[
          {
            text: `Explore the GitHub repository`,
            href: `https://github.com/fairdataihub/dmpbridge`,
            target: `_blank`,
            rel: `noopener`,
          },
        ]}
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
            name: `Nahid Zeinali`,
            href: `/team/#Nahid-Zeinali`,
            external: false,
            image: `/images/people/nahid-head.jpg`,
          },
          {
            name: `Xuebin Dong`,
            href: `/team/#Xuebin-Dong`,
            external: false,
            image: `/images/people/xuebin-head.jpg`,
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
              type: `person`,
            },
            {
              name: `Brian Riley`,
              id: ``,
              href: ``,
              image: `/images/collaborators/brian_r.jpg`,
              type: `person`,
            },
            {
              name: `California Digital Library`,
              id: `California Digital Library`,
              href: `https://cdlib.org`,
              image: `/images/collaborators/logo-cdl.svg`,
              type: `lab`,
            },
            {
              name: `DMP Tool`,
              id: `DMP Tool`,
              href: `https://dmptool.org/`,
              image: `/images/collaborators/DMP-Navy-Portrait.svg`,
              type: `lab`,
            },
          ],
        }}
      />

      <ProjectInfoSection
        title="Funding"
        description={`This project is a National Science Foundation (NSF) and Chan Zuckerberg Initiative (CZI)-funded collaboration between the FAIR Data Innovations Hub and California Digital Library (University of California Office of the President) as part of a broader extension of the DMP Tool platform.`}
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
            longDate: `June 2026`,
            title: `Foundations`,
            content: `We selected a set of 10 DMP PDFs to use as a testing set and evaluated pdfplumber for text extraction.`,
          },
          {
            longDate: `July 2026 – September 2026`,
            title: `PDF to narrative portion pipeline`,
            content: `We are developing the pipeline that converts a DMP PDF into the narrative portion of the DMP Tool JSON, testing different LLMs and prompt designs to optimize section classification and minimize hallucination.`,
          },
          {
            longDate: `August 2026 – September 2026`,
            title: `PDF to RDA DMP JSON portion pipeline`,
            content: `We will develop the pipeline that converts the narrative portion into RDA DMP JSON portion (with DMP Tool extensions) of the DMP Tool JSON, focusing on the key entities most likely to appear in DMPs and testing prompt combinations per entity type.`,
          },
          {
            longDate: `October 2026`,
            title: `Deployment and Integration`,
            content: `We will integrate DMP Bridge into DMP Tool, or, if that isn't yet possible, launch a standalone site where users can upload a DMP PDF and view or download a DMP Tool JSON version.`,
          },
        ]}
      />
    </>
  );
};

export default DmpBridge;
