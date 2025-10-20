'use client';

import { AnimatePresence, motion } from 'framer-motion';

import ProjectCard from '@/components/project/projectCard';
import Seo from '@/components/seo/seo';

/**
 * Projects Page
 * - Modern, formal presentation with subtle motion
 * - Search + filter by category (Software, Platform, Standards, Guidelines)
 * - Accessible, keyboard‑friendly cards
 * - Responsive grid with image/logo preview and concise copy
 * - Dark‑mode friendly (relies on your existing `.dark` class toggling)
 */

type Project = {
  slug: string; // link href
  title: string;
  subtitle?: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    contain?: boolean;
  };
  // category?: string;
  badges?: string[]; // extra tags
};

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      slug: `/sodaforsparc`,
      title: `SODA`,
      subtitle: `Streamlined Organization of Data for the SPARC Portal`,
      description: `SODA is a cross-platform desktop app that helps researchers prepare and share peripheral nervous system data and research in line with the SPARC Data Structure (SDS).`,
      image: {
        src: `/images/hero/soda-app-macos.png`,
        alt: `Screenshot of SODA for SPARC`,
        contain: true,
      },
      badges: [`Desktop`, `SPARC`, `Data Curation`],
    },
    {
      slug: `/aireadi`,
      title: `AI-READI`,
      subtitle: `AI-Ready and Exploratory Atlas for Diabetes Insights`,
      description: `A Bridge2AI initiative where we lead the Tools module, developing FAIR-forward infrastructure across Data, Ethics, Standards, Teaming, Tools, and Skills.`,
      image: {
        src: `/images/hero/aireadi-logo.png`,
        alt: `AI-READI Logo`,
        contain: true,
      },
      badges: [`Platform`, `Standards`, `Guidelines`],
    },
    {
      slug: `/eyeact`,
      title: `Eye ACT`,
      description: `A study leveraging the Envision Portal to explore links between glaucoma, diabetic retinopathy, and early indicators of Alzheimer's by advancing FAIR data sharing and AI-driven research.`,
      image: {
        src: `/images/hero/eye-act-logo.png`,
        alt: `Eye ACT Logo`,
        contain: true,
      },
      badges: [`Platform`, `Standards`, `Guidelines`],
    },
    {
      slug: `/dmp-chef`,
      title: `DMP Chef`,
      description: `An open-source, AI-powered platform to draft funder-compliant Data Management Plans through guided, researcher-friendly workflows. With a few clicks, generate comprehensive DMPs that meet funding requirements and support FAIR data practices.`,
      image: {
        src: `/images/dmp/dmp-chef-logo-transparent.svg`,
        alt: `DMP Chef Logo`,
        width: 220,
        height: 220,
        contain: true,
      },
      badges: [`Platform`, `AI-Assisted`, `Workflows`],
    },
    {
      slug: `/posters-science`,
      title: `Posters.science`,
      description: `A free, open-source platform that turns conference posters into enduring, findable research assets. Transform fleeting conference moments into a searchable, citable knowledge base that amplifies research impact and accelerates scientific discovery.`,
      image: {
        src: `/images/hero/posters-science-process.png`,
        alt: `Posters.science process`,
        contain: true,
      },
      badges: [`Platform`, `Open Science`, `Discovery`],
    },
    {
      slug: `/fair-biors`,
      title: `FAIR-BioRS Guidelines`,
      description: `Minimal, actionable steps to make biomedical research software reusable, aligned with FAIR4RS principles. Reduce compliance overhead while maximizing software citations and fostering collaboration across research institutions.`,
      image: {
        src: ``,
        alt: `FAIR-BioRS Logo`,
        width: 220,
        height: 220,
        contain: true,
      },
      badges: [`FAIR4RS`, `Guidelines`, `Publication`],
    },
    {
      slug: `/codefair`,
      title: `Codefair`,
      description: `An free automated GitHub App that helps make research software reusable and FAIR-aligned by surfacing license, metadata, documentation, and archival through Zenodo.`,
      image: {
        src: `/images/hero/codefair-logo.png`,
        alt: `Codefair Logo`,
        contain: true,
      },
      badges: [`FAIR`, `Automation`, `Zenodo`],
    },
    {
      slug: `/fairshare`,
      title: `FAIRshare`,
      description: `A cross-platform desktop software that empowers researchers to effortlessly organize and share biomedical data and software according to applicable FAIR guidelines.`,
      image: {
        src: `/images/hero/fairshare-macos.png`,
        alt: `FAIRshare macOS screenshot`,
        contain: true,
      },
      badges: [`Desktop`, `FAIR`, `Biomedical`],
    },
    {
      slug: `/knowmore`,
      title: `KnowMore`,
      description: `An integrable tool for the SPARC Portal that reveals relationships, differences, and similarities between datasets to guide discovery.`,
      image: {
        src: `https://github.com/SPARC-FAIR-Codeathon/KnowMore/raw/main/docs/kmlogo-with-text3.png`,
        alt: `KnowMore Logo`,
        width: 280,
        height: 120,
        contain: true,
      },
      badges: [`SPARC`, `Comparison`, `Insights`],
    },
    {
      slug: `/sparclink`,
      title: `SPARClink`,
      description: `Open tools to visualize how SPARC outputs influence the wider research community through linked publications and networks.`,
      image: {
        src: `https://github.com/SPARC-FAIR-Codeathon/SPARClink/raw/main/docs/images/logo.svg`,
        alt: `SPARClink Logo`,
        width: 220,
        height: 220,
        contain: true,
      },
      badges: [`Software`, `Visualization`, `SPARC`],
    },
    {
      slug: `/aqua`,
      title: `AQUA`,
      subtitle: `Advanced Query Architecture for the SPARC Portal`,
      description: `Improving discovery on the SPARC Portal with richer, faster, more precise search capabilities.`,
      image: {
        src: `/images/hero/aqua-logo-full.png`,
        alt: `AQUA logo`,
        contain: true,
      },
      badges: [`Software`, `Search`, `SPARC`],
    },
  ];

  return (
    <div className="relative pt-20">
      <Seo
        templateDescription="Explore the projects we build at the FAIR Data Innovations Hub—modern, open‑source tools and platforms that help researchers follow FAIR principles."
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[720px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(211,75,171,0.30),rgba(211,75,171,0.12)_40%,transparent_75%)] blur-3xl" />
      </div>

      <section className="container mx-auto max-w-screen-xl px-4 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-col items-start gap-2 sm:mb-10 sm:justify-between"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-black tracking-tight text-pretty text-stone-900 sm:text-5xl dark:text-stone-100">
              Our Projects
            </h1>
            <p className="font-asap max-w-2xl text-lg text-stone-700 dark:text-stone-300">
              Open-source tools and platforms that make FAIR a habit.
            </p>
          </div>
          <div className="via-primary/60 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.ul
            layout
            className="grid auto-rows-[1fr] grid-cols-1 content-start items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial={false}
          >
            {projects.map((p, idx) => (
              <motion.li
                layout
                key={p.slug}
                className="h-full"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.25, delay: idx * 0.02 }}
              >
                <ProjectCard project={p} />
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </section>
    </div>
  );
}
