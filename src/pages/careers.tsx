import Head from 'next/head';
import React from 'react';

import InternshipPositions from '@/components/careers/internshipPositions';
import WorkPositions from '@/components/careers/workPositions';

import Hero from '../components/careers/hero';

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="Careers - Fair Data Innovations Hub"
        />
        <meta
          name="twitter:title"
          content="Careers - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/careers" />
        <meta property="og:url" content="https://fairdataihub.org/careers" />
        <meta name="twitter:url" content="https://fairdataihub.org/careers" />

        <meta name="description" content="View careers of fairdataihub.org" />
        <meta
          property="og:description"
          content="View careers of fairdataihub.org"
        />
        <meta
          name="twitter:description"
          content="View careers of fairdataihub.org"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
        <meta
          name="twitter:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
      </Head>

      <section className="pb-10">
        <Hero />

        <WorkPositions />

        <InternshipPositions />
      </section>
    </>
  );
}
