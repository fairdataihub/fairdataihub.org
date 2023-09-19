import React from 'react';

import InternshipForm from './internshipForm';

const InternshipPositions = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-screen-lg flex flex-col mx-auto">
          <div className="px-6 sm:px-6 lg:px-6 p-6">
            <div className="text-center lg:text-lg lg:text-left mx-12 ">
              <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
                Internship Opportunities
              </p>

              <p className="border-b-4 w-fit mb-2 mt-3 max-w-xs font-asap text-xl text-black sm:text-xl border-b-light-accent">
                Dive into Internship Possibilities
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-lg flex flex-col mx-auto">
          <div className="bg-white px-6 sm:px-6 lg:px-6 p-7">
            <div className="text-center lg:text-left lg:mx-12 flex flex-col items-center">
              <p className="font-asap text-lg">
                We are always eager to welcome fresh perspectives. If
                you&apos;re interested in interning with us, whether on-site or
                remotely, please take a moment to complete the form below. By
                joining our team, you&apos;ll have the chance to make a
                meaningful impact on our projects, especially in the realm of
                improving human health. In return, our experienced team is
                committed to helping you expand and refine your knowledge in
                software development best practices, web development, and more.
              </p>
            </div>
          </div>
          <InternshipForm />
        </div>
      </div>
    </>
  );
};

export default InternshipPositions;
