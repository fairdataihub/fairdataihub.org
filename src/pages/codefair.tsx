import ProjectAbout from '@/components/project/about';
import ProjectHero from '@/components/project/hero';
import ProjectInfoSection from '@/components/project/infoSection';
import PublicationsList from '@/components/project/publicationsList';
import TeamMembers from '@/components/project/teamMembers';
import Timeline from '@/components/project/timeline';
import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

const Codefair: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <>
      <Seo
        templateTitle="Codefair"
        templateUrl="https://fairdataihub.org/codefair"
        templateDescription="Make your research software reusable without breaking a sweat! Codefair is a platform that helps you make your research software FAIR."
        templateImage="https://kalai.fairdataihub.org/api/generate?title=Codefair&description=Make%20your%20research%20software%20reusable%20without%20breaking%20a%20sweat!%20Codefair%20is%20a%20platform%20that%20helps%20you%20make%20your%20research%20software%20FAIR&app=fairdataihub&org=fairdataihub"
      />

      <section className="bg-white py-10 pt-16">
        <ProjectHero
          title={`Codefair`}
          subtitle={`Make your research software reusable without breaking a sweat!`}
          description={``}
          imageSrc={`/images/hero/codefair-logo.png`}
          imageAlt={`Codefair logo`}
          imageWidth={150}
          imageHeight={150}
          buttons={[
            {
              text: `Get Codefair`,
              href: `https://github.com/marketplace/codefair-app`,
              target: `_blank`,
              ariaLabel: `Codefair app marketplace`,
              rel: `noopener`,
            },
            {
              text: `Learn more`,
              href: `https://codefair.io`,
              target: `_blank`,
              ariaLabel: `Codefair website`,
              rel: `noopener`,
            },
          ]}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <ProjectAbout
          description={`Codefair is a free and open source GitHub app that acts as your personal assistant when it comes to making your research software reusable and especially complying with the Findable, Accessible, Interoperable, Reusable (FAIR) Principles for Research Software (FAIR4RS Principles).`}
          features={[
            {
              icon: `material-symbols:linear-scale`,
              title: `What is a research software?`,
              description: `The commonly accepted definition of research software is "Any software created during the research process or for a research purpose". It can come in many format and could be developed for different applications such as artificial intelligence (AI)/machine learning (ML) models with Python, data visualization tools with Jupyter notebook, or data analysis code with R.`,
              link: {
                text: `Learn more about research software`,
                href: `https://doi.org/10.5281/zenodo.5504016`,
                target: `_blank`,
                rel: `noopener`,
              },
            },
            {
              icon: `mdi:axis-arrow-info`,
              title: `What does making a research software FAIR means?`,
              description: `The FAIR (Findable, Accessible, Interoperable, Reusable) Principles for Research Software (FAIR4RS Principles) are a set of high-level instructions established by the research software community to make software reusable. Making research software FAIR means complying with each of the 17 FAIR principles.`,
              link: {
                text: `Learn more about the FAIR4RS Principles`,
                href: `https://doi.org/10.1038/s41597-022-01710-x`,
                target: `_blank`,
                rel: `noopener`,
              },
            },
            {
              icon: `mdi:account-hard-hat`,
              title: `What are the challenges?`,
              description: `We developed the FAIR-Biomedical Research Software (FAIR-BioRS) guidelines so it is easier for researchers to make their software compliant with the FAIR4RS Principles. However, it still requires time and effort to do so, especially when software is frequently updated and has multiple contributors`,
              link: {
                text: `Learn more about the FAIR-BioRS guidelines`,
                href: `https://fairdataihub.org/fair-biors`,
                target: `_blank`,
                rel: `noopener`,
              },
            },
            {
              icon: `ep:guide`,
              title: `How does Codefair help?`,
              description: `Just install Codefair from the GitHub marketplace on your software's GitHub repository. By communicating with you through GitHub issues and submitting pull requests, Codefair will then make sure that your software follows best coding practices, provides metadata in standard format, includes a license file, and much more to align with the FAIR4RS principles.`,
            },
          ]}
        />
      </section>

      <section className="bg-white py-10 pt-16">
        <ProjectInfoSection
          title="Development Approach"
          description={`The Codefair application is maintained in a GitHub repository and is developed in an open and transparent manner. It ingeniously combines Probot, a serverless environment on Vercel, and the Octokit library. We are always open for contributions from the community.`}
          sideImageSrc="/images/github-logo.svg"
          sideImageUrl="https://github.com/fairdataihub/codefair-app"
          sideImageAlt="GitHub logo"
          githubBadges={[
            {
              type: `contributors` as const,
              href: `https://github.com/fairdataihub/codefair-app/graphs/contributors`,
              alt: `codefair contributors`,
              src: `https://img.shields.io/github/contributors/fairdataihub/codefair-app.svg?style=flat-square`,
            },
            {
              type: `stars` as const,
              href: `https://github.com/fairdataihub/codefair-app/stargazers`,
              alt: `codefair stars`,
              src: `https://img.shields.io/github/stars/fairdataihub/codefair-app.svg?style=flat-square`,
            },
            {
              type: `issues` as const,
              href: `https://github.com/fairdataihub/codefair-app/issues`,
              alt: `codefair issues`,
              src: `https://img.shields.io/github/issues/fairdataihub/codefair-app.svg?style=flat-square`,
            },
          ]}
          additionalLink={{
            text: `Explore the GitHub repository`,
            href: `https://github.com/fairdataihub/codefair-app`,
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
              name: `Dorian Portillo`,
              href: `/team/#Dorian-Portillo`,
              external: false,
              image: `/images/people/dorian-head.PNG`,
            },
            {
              name: `Sanjay Soundarajan`,
              href: `/team/#Sanjay-Soundarajan`,
              external: false,
              image: `/images/people/sanjay-head.jpg`,
            },
          ]}
        />
      </section>

      <section className="bg-gray-50 py-10 pt-16">
        <Timeline
          timelineList={[
            {
              longDate: `December 2022`,
              title: `Birth of codefair`,
              content: `The concept of codefair is mapped out by the FAIR Data Innovations Hub.`,
            },
            {
              longDate: `March 2024`,
              title: `First version released`,
              content: `The first version of codefair is publicly released on the GitHub marketplace.`,
            },
            {
              longDate: `April 2024 - Present`,
              title: `Continued development`,
              content: `Features are added to codefair for helping researchers with all requirements of making software FAIR.`,
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
    publication.project.includes(`codefair`),
  ).sort((a, b) => b.year - a.year);

  return {
    props: {
      publications,
    },
  };
}

export default Codefair;
