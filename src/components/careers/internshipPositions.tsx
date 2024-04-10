import React from 'react';

import InternshipForm from './internshipForm';

const InternshipPositions = () => {
  return (
    <section className="relative pb-20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="h-full w-full p-2">
          <h2 className="text-left text-4xl font-extrabold text-stone-900 sm:text-4xl">
            Internship Opportunities
          </h2>

          <p className="mb-4 mt-2 text-left font-asap text-lg">
            We are always eager to welcome fresh perspectives. If you&apos;re
            interested in interning with us, whether on-site or remotely, please
            take a moment to complete the form below. <br /> By joining our
            team, you&apos;ll have the chance to make a meaningful impact on our
            projects, especially in the realm of improving human health. In
            return, our experienced team is committed to helping you expand and
            refine your knowledge in software development best practices, web
            development, data management and more.
          </p>
        </div>

        <div className="flex justify-center">
          <InternshipForm />
        </div>
      </div>
    </section>
  );
};

export default InternshipPositions;
