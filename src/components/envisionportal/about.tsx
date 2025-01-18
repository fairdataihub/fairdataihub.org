import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
          About
        </p>
        <p className="max-w-2xl font-asap text-xl text-black sm:text-xl lg:mx-auto">
          The Envision Portal is a data management and sharing platform
          developed as part of the EyeACT project. It enables researchers to
          efficiently upload, prepare, and share eye imaging data while ensuring
          compliance with FAIR (Findable, Accessible, Interoperable, and
          Reusable) data principles. Designed to advance vision and brain health
          research, the Envision Portal facilitates collaborative efforts and
          supports cutting-edge discoveries.
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
                <Icon icon="mdi:axis-arrow-info" width={24} height={24} />
              </div>
              <p className="ml-16 text-xl font-medium sm:text-lg">
                Why is the Envision Portal important?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The portal supports the EyeACT project and beyond by providing
                tools to streamline workflows, ensure data reusability, and
                enable efficient sharing. It promotes collaboration across
                disciplines while driving advancements in vision and brain
                health research.
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
                What does the Envision Portal offer?
              </p>
            </dt>
            <dd className="ml-16 mt-2 font-asap text-lg text-black sm:text-base md:mt-0">
              <div>
                The portal provides a comprehensive solution for uploading,
                preparing, and sharing clinical research data. It ensures
                compliance with FAIR principles, supports AI-ready datasets, and
                fosters interdisciplinary collaboration to advance discoveries
                in eye and vision science.
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
