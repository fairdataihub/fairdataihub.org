import Image from 'next/image';
import React from 'react';

interface Collaborator {
  name: string;
  id: string;
  href: string;
  image: string;
  type?: 'person' | 'lab';
}

interface ResearchPartnersProps {
  researchPartners?: {
    description: string;
    collaborators?: Collaborator[];
  };
}

const ResearchPartners: React.FC<ResearchPartnersProps> = ({
  researchPartners,
}) => {
  if (!researchPartners) {
    return null;
  }

  return (
    <section>
      <div className="mx-auto px-5 sm:px-10 sm:pt-2">
        <div className="mx-auto flex max-w-screen-lg flex-col">
          <h1 className="pb-5 text-left text-4xl font-black subpixel-antialiased md:mr-8">
            Research Partners
          </h1>
          <div className="w-full py-2">
            <div className="flex w-full flex-col justify-between sm:flex-row">
              <div className="mb-10 pr-10 sm:mb-5">
                <p className="w-full font-asap text-lg text-black">
                  {researchPartners.description}
                </p>
              </div>
            </div>
          </div>

          {researchPartners.collaborators &&
            researchPartners.collaborators.length > 0 && (
              <div className="w-full">
                <div>
                  <div className="mb-10 w-full sm:mb-5">
                    <div className="grid grid-cols-2 gap-4 py-0 md:grid-cols-2 md:gap-3 md:py-1 lg:grid-cols-4 lg:gap-4">
                      {researchPartners.collaborators.map((collaborator) => (
                        <a
                          key={collaborator.name}
                          href={collaborator.href}
                          target="_blank"
                          rel="noopener"
                        >
                          <div className="flex h-full flex-col items-center justify-end rounded-lg p-2 transition-all hover:bg-gray-200">
                            {collaborator.type === `person` ? (
                              <div className="relative h-[135px] w-[135px]">
                                <Image
                                  src={collaborator.image}
                                  alt={collaborator.name + ` profile picture`}
                                  fill
                                  className="my-auto rounded-full"
                                />
                              </div>
                            ) : (
                              <Image
                                src={collaborator.image}
                                alt={collaborator.name + ` profile picture`}
                                width={220}
                                height={150}
                                className="my-auto"
                                style={{
                                  maxWidth: `220px`,
                                  maxHeight: `150px`,
                                }}
                              />
                            )}
                            <p className="ml-2 mt-3 text-center font-asap text-lg font-normal">
                              {collaborator.name}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default ResearchPartners;
