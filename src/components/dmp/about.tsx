import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          About
        </p>
        <p className="max-w-2xl font-asap text-xl text-black sm:text-xl lg:mx-auto">
          Data Management Plans (DMPs) are now commonly required by funders with
          all grant proposals. Researchers often struggle to prepare them due to
          the lack of training, the lack of support, the complexity of data, and
          the wide range of best practices, repositories, and metadata choices
          available. DMP Chef is a free and open-source AI-based tool designed
          to assist researchers with drafting funder-compliant DMPs.
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
                What is DMP Chef?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                DMP Chef is a web tool where researchers can easily generate
                drafts of funder-compliant DMPs tailored to their grant
                proposals and even create machine-actionable versions.
              </div>
            </dd>
          </div>
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-light-vision text-white">
                <Icon icon="mdi:axis-arrow-info" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                How does it work?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                Researchers only need to answer a few questions about their
                grant proposal (target funding organization, data to be
                collected, etc.) and DMP Chef will generate a draft of the
                entire DMP in line with the requirements of the target funder.
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
                Writing a DMP is overwhelming, with each funder having its own
                policies, formats, and compliance criteria. Researchers often
                struggle to prepare a compliant DMP due to lack of training and
                support, and technical complexity.
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
                A strong DMP is often a requirement not only for securing
                research funds but, as the first point of data documentation,
                also critical for adopting FAIR data practices. DMP Chef helps
                researchers create high-quality DMPs that ensure compliance with
                funder policies and maximize the long-term impact of their data.
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
