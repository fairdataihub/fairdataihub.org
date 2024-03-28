import React from 'react';

import InternshipPositions from '@/components/careers/internshipPositions';
import WorkPositions from '@/components/careers/workPositions';
import Seo from '@/components/seo/seo';

import Hero from '../components/careers/hero';

export default function Careers() {
  return (
    <>
      <Seo
        templateTitle="Careers"
        templateDescription="View open positions at the FAIR Data Innovations Hub."
        templateImage="https://fairdataihub.org/thumbnails/index.png"
        templateUrl="https://fairdataihub.org/careers"
      />

      <section className="pb-10">
        <Hero />

        <WorkPositions />

        <InternshipPositions />
      </section>
    </>
  );
}
