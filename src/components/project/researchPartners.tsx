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
  if (!researchPartners) return null;

  const { description, collaborators } = researchPartners;
  const hasCollaborators = !!collaborators && collaborators.length > 0;

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-10">
      <div className="mb-6 text-center lg:text-left">
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
          Research partners
        </h2>
        {description && (
          <p className="font-asap mt-3 max-w-2xl text-sm text-stone-700 sm:text-base lg:mt-4">
            {description}
          </p>
        )}
      </div>

      {hasCollaborators && (
        <div className="rounded-3xl border border-stone-200 bg-white/90 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {collaborators!.map((collaborator) => (
              <a
                key={collaborator.id || collaborator.name}
                href={collaborator.href}
                target="_blank"
                rel="noopener"
                className="group flex flex-col items-center rounded-2xl border border-stone-100 bg-stone-50 p-4 text-center transition hover:-translate-y-1 hover:border-pink-200 hover:bg-pink-50"
              >
                {collaborator.type === `person` ? (
                  <div className="relative mb-3 h-20 w-20 sm:h-24 sm:w-24">
                    <Image
                      src={collaborator.image}
                      alt={`${collaborator.name} profile picture`}
                      fill
                      className="rounded-full object-cover ring-2 ring-pink-200"
                    />
                  </div>
                ) : (
                  <div className="mb-3 flex h-14 w-full items-center justify-center sm:h-16">
                    <Image
                      src={collaborator.image}
                      alt={`${collaborator.name} logo`}
                      width={220}
                      height={80}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                )}

                <p className="font-asap text-sm font-semibold text-stone-900 sm:text-base">
                  {collaborator.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ResearchPartners;
