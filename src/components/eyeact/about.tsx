import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          About
        </p>
        <p className="max-w-2xl font-asap text-xl text-black sm:text-xl lg:mx-auto">
          The Eye ACT project is advancing vision and brain health research by
          studying the connection between ophthalmic conditions and
          neurodegenerative disease. As part of this effort, the Envision Portal
          is being developed to streamline data management, sharing and analysis
          of eye imaging research while adhering to FAIR principles.
          Fairdataihub leads the development of the Envision Portal, ensuring
          researchers have access to intuitive tools for curation and sharing
          high-quality, AI-ready datasets.
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon
                  icon="material-symbols:linear-scale"
                  width={24}
                  height={24}
                />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What is the Eye ACT Project?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The Eye ACT investigates the relationship between eye health and
                cognitive decline. It aims to identify biomarkers in the eye
                that can predict the onset of Alzheimer&apos;s disease and other
                neurodegenerative conditions.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="mdi:axis-arrow-info" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What is the Envision Portal?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The Envision Portal is a platform designed to simplify data
                management and sharing for eye imaging research. It ensures
                datasets are organized, curated, and shared following FAIR
                principles, making them ready for AI-driven analysis and
                collaborative studies.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="mdi:account-hard-hat" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                What challenges does it address?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                Researchers face difficulties managing vast and diverse datasets
                while adhering to standard practices. The Envision Portal
                provides solutions through intuitive tools, automation, and
                standardization to ensure data readiness for analysis and reuse.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="ep:guide" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                Why is this important?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                Creating FAIR and AI-ready datasets is crucial for advancing
                research in vision and brain health. By ensuring data is
                Findable, Accessible, Interoperable, and Reusable, researchers
                can collaborate more effectively, leverage AI technologies, and
                accelerate discoveries that could lead to better diagnostic
                tools and treatments for neurodegenerative diseases.
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
