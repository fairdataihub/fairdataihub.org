import React from 'react';

import InternshipForm from './internshipForm';

const InternshipPositions = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto flex max-w-screen-lg flex-col">
          <div className="p-6 px-6 sm:px-6 lg:px-6">
            <div className="mx-12 text-center lg:text-left lg:text-lg ">
              <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
                Internship Opportunities
              </p>

              <p className="mb-2 mt-3 w-fit max-w-xs border-b-4 border-b-light-accent font-asap text-xl text-black sm:text-xl">
                Dive into Internship Possibilities
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center">
          <div className="bg-white p-7 px-6 sm:px-6 lg:px-6">
            <div className="flex flex-col items-center text-center lg:mx-12 lg:text-left">
              <p className="font-asap text-lg">
                We are always eager to welcome fresh perspectives. If
                you&apos;re interested in interning with us, whether on-site or
                remotely, please take a moment to complete the form below. By
                joining our team, you&apos;ll have the chance to make a
                meaningful impact on our projects, especially in the realm of
                improving human health. In return, our experienced team is
                committed to helping you expand and refine your knowledge in
                software development best practices, web development, data
                management and more.
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
