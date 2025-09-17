import { useEffect, useState } from 'react';

import getLatestDownloadLink from '@/lib/getLatestDownloadLink';

import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/infoSection';
import PublicationsList from '@/components/project/publicationsList';
import ResearchPartners from '@/components/project/researchPartners';
import TeamMembers from '@/components/project/teamMembers';
import Timeline from '@/components/project/timeline';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const FAIRshare: React.FC<PublicationsItemList> = ({ publications }) => {
  const [downloadURL, setDownloadURL] = useState<string | undefined>(``);

  useEffect(() => {
    const func = async () => {
      const url = await getLatestDownloadLink(`fairdataihub/FAIRshare`);
      setDownloadURL(url);
    };

    func().catch((e) => {
      console.error(e);
    });
  }, []);

  const heroButtons = [
    ...(downloadURL && downloadURL !== ``
      ? [
          {
            text: `Download now`,
            href: downloadURL,
            target: `_blank`,
            ariaLabel: `Download FAIRshare`,
            rel: `noopener`,
          },
        ]
      : []),
    {
      text: `Explore the docs`,
      href: `https://docs.fairshareapp.io/`,
      target: `_blank`,
      ariaLabel: `FAIRshare Documentation`,
      rel: `noopener`,
    },
  ];

  return (
    <>
      <Seo
        templateTitle="FAIRshare"
        templateUrl="https://fairdataihub.org/fairshare"
        templateDescription="FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their biomedical data and software according to applicable FAIR guidelines"
        templateImage="https://fairdataihub.org/thumbnails/fairshare.png"
      />

      <section className="bg-white py-10 pt-16">
        <ProjectHero
          title="FAIRshare"
          subtitle="FAIR data and software sharing made easy"
          description="Your one-stop tool for rapidly curating and sharing biomedical research data and software according to applicable FAIR guidelines"
          imageSrc="/images/hero/fairshare-macos.png"
          imageAlt="Screenshot of FAIRshare"
          imageWidth={1342}
          imageHeight={975}
          buttons={heroButtons}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <ProjectAbout
          description={`FAIRshare is a cross-platform desktop software that allows researchers
    to easily organize and share their biomedical data and software
    according to applicable FAIR guidelines. The first phase of
    development of FAIRshare is focused on supporting COVID-19 and other
    infectious diseases related data and software. Our ultimate goal is to
    provide support for data and software from all fields of biomedical
    research.`}
          features={[
            {
              icon: `material-symbols:linear-scale`,
              title: `What are the FAIR Data Principles?`,
              description: `The FAIR Data Principles are a set of guidelines for curating
                and sharing research data such that they are optimaly reusable
                by both humans and machines.`,
              link: {
                text: `Learn more about FAIR`,
                href: `https://doi.org/10.1038/sdata.2016.18`,
                target: `_blank`,
                rel: `noopener`,
              },
            },
            {
              icon: `mdi:axis-arrow-info`,
              title: `Why are FAIR data practices important?`,
              description: `FAIR data practices are crucial for ensuring reproducibility of
                scientific findings, promoting reuse of data, and enabling
                AI/ML-driven analysis to ultimately increase the pace of new
                discoveries. They also ensure proper credits to data generators.`,
            },
            {
              icon: `mdi:account-hard-hat`,
              title: `What are the challenges?`,
              description: `Support is lacking to educate and assist the researchers, manual
                curation is not suitable to manage the amount of data being
                generated, and there is a lack of standard approach across
                research labs.`,
            },
            {
              icon: `ep:guide`,
              title: `What does FAIRshare do?`,
              description: `FAIRshare is a desktop software that streamlines the process of
                making biomedical research data and software FAIR by combining
                intuitive user interface and automation.`,
            },
          ]}
        />
      </section>

      <section className="bg-white py-10 pt-16">
        <ProjectInfoSection
          title="Development Approach"
          description={`FAIRshare is distributed as an open-source desktop
            application with an MIT License. Anyone is free to fork our
            GitHub repository and make their own changes if they would
            like. If you would like to submit a feature modification, or
            feature suggestion, please feel free to submit an issue on
            the repository.`}
          sideImageSrc="/images/github-logo.svg"
          sideImageUrl="https://github.com/fairdataihub/FAIRshare"
          sideImageAlt="GitHub logo"
          githubBadges={[
            {
              type: `contributors`,
              href: `https://github.com/fairdataihub/FAIRshare/graphs/contributors`,
              alt: `fairshare contributors`,
              src: `https://img.shields.io/github/contributors/fairdataihub/FAIRshare.svg?style=flat-square`,
            },
            {
              type: `stars`,
              href: `https://github.com/fairdataihub/FAIRshare/stargazers`,
              alt: `fairshare stars`,
              src: `https://img.shields.io/github/stars/fairdataihub/FAIRshare.svg?style=flat-square`,
            },
            {
              type: `issues`,
              href: `https://github.com/fairdataihub/FAIRshare/issues`,
              alt: `fairshare issues`,
              src: `https://img.shields.io/github/issues/fairdataihub/FAIRshare.svg?style=flat-square`,
            },
            {
              type: `license`,
              href: `https://github.com/fairdataihub/FAIRshare/blob/master/LICENSE`,
              alt: `fairshare license`,
              src: `https://img.shields.io/github/license/fairdataihub/FAIRshare.svg?style=flat-square`,
            },
          ]}
          additionalLink={{
            text: `Explore the GitHub repository`,
            href: `https://github.com/fairdataihub/FAIRshare`,
          }}
        />

        <ProjectInfoSection
          title="Funding"
          description={`FAIRshare is funded through a supplemental award from the
            National Institute of Allergy and Infectious Diseases
            (NIAID).`}
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
            {
              name: `Taiji Yang`,
              href: `https://www.linkedin.com/in/taiji-yang-1b4b8620b/`,
              external: true,
              image: `https://ucarecdn.com/12fea441-c679-4471-923f-dbdcd5bece51/-/scale_crop/200x200/smart/`,
            },
          ]}
        />

        <ResearchPartners
          researchPartners={{
            description: `The first phase of development of FAIRshare is focused on
              supporting COVID-19 and other infectious diseases data and
              software. FAIRshare is developed in collaboration with Dr.
              Zicheng Hu (UCSF) and his colleagues at University of
              California, San Francisco and Stanford University who are
              conducting a clinical trial for a novel treatment approach
              for COVID-19. They will be providing overall guidance on the
              applicable FAIR guidelines as well as conducting beta
              testing of the software.`,
            collaborators: [
              {
                name: `Zicheng Hu (UCSF)`,
                id: `Zicheng-Hu-UCSF`,
                href: `https://profiles.ucsf.edu/zicheng.hu`,
                image: `https://researcherprofiles.org/profile/Modules/CustomViewPersonGeneralInfo/PhotoHandler.ashx?NodeID=189905&cachekey=d77aea77-c8d0-4a86-be9a-12da9da39113`,
                type: `person`,
              },
              {
                name: `The Butte Lab`,
                id: `The-Butte-Lab`,
                href: `https://buttelab.ucsf.edu/`,
                image: `/images/collaborators/ucsf-logo.png`,
                type: `lab`,
              },
              {
                name: `The Jagannathan Lab`,
                id: `The-Jagannathan-Lab`,
                href: `https://med.stanford.edu/jagannathan-lab.html`,
                image: `/images/collaborators/stanford-medicine-logo.png`,
                type: `lab`,
              },
              {
                name: `Dr. Greenhouse Lab`,
                id: `Dr-Greenhouse-Lab`,
                href: `https://profiles.ucsf.edu/bryan.greenhouse#toc-id2`,
                image: `/images/collaborators/ucsf-logo.png`,
                type: `lab`,
              },
            ],
          }}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <Timeline
          timelineList={[
            {
              longDate: `November 2020`,
              title: `Birth of FAIRshare`,
              content: `The first prototype of FAIRshare is developed for demo purpose by the FAIR Data Innovations Hub.`,
            },
            {
              longDate: `September 2021 - Aug 2022`,
              title: `Phase I development`,
              content: `The base framework of the software will be developed and support will be provided for COVID-19
    and other infectious diseases related data types (genomics, immunology, etc.) and software.`,
            },
          ]}
        />
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
    publication.project.includes(`fairshare`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default FAIRshare;
