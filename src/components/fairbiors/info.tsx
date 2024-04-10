import Image from 'next/image';
import Link from 'next/link';

export default function Info() {
  const membersList = [
    {
      name: `Bhavesh Patel`,
      href: `/team/#Bhavesh-Patel`,
      external: false,
      image: `/images/people/bhavesh-head.jpg`,
    },
    {
      name: `Sanjay Soundarajan`,
      href: `/team/#Sanjay-Soundarajan`,
      external: false,
      image: `/images/people/sanjay-head.jpg`,
    },
  ];

  const collaboratorsList = [
    {
      name: `Zicheng Hu (UCSF)`,
      id: `Zicheng-Hu-UCSF`,
      href: `https://profiles.ucsf.edu/zicheng.hu`,
      image: `https://researcherprofiles.org/profile/Modules/CustomViewPersonGeneralInfo/PhotoHandler.ashx?NodeID=189905&cachekey=d77aea77-c8d0-4a86-be9a-12da9da39113`,
      type: `person`,
    },
    {
      name: `Hervé Ménager`,
      id: `Herve-Menager`,
      href: `https://research.pasteur.fr/en/member/herve-menager/`,
      image: `https://elixir-europe.org/sites/default/files/images/herve-menager.jpg`,
      type: `lab`,
    },
  ];

  return (
    <div>
      <section>
        <div className="mx-auto px-5 sm:px-10 sm:pt-10">
          <div className="mx-auto flex max-w-screen-lg flex-col">
            <h1 className="py-5 text-left text-4xl font-black subpixel-antialiased md:mr-8 md:py-0">
              Development Approach
            </h1>
            <div className="w-full py-2">
              <div className="flex w-full flex-col justify-between sm:flex-row">
                <div className="mb-10 pr-10 sm:mb-5">
                  <p className="w-full font-asap text-lg text-black">
                    The FAIR-BioRS guidelines were developed in collaboration
                    with researchers from UCSF and ELIXIR (E.U.). We first
                    establihsed a list of outstanding questions we identified
                    for practically implementing the FAIR4RS Principles (e.g.,
                    How to obtain a unique identifier for software? How to
                    include metadata? and so on). Then we combined literature
                    review, community feedback, and our own assessment as
                    developers of research software to established answers for
                    these questions. Finally, we organized these answers as a
                    set of step-by-step instructions that follow the typical
                    sofware development process which became the FAIR-BioRS
                    guidelines.
                  </p>
                  <div className="mt-2 flex md:mt-1">
                    <a
                      href="https://fair-biors.org"
                      target="_blank"
                      className="text-url hover-underline-animation"
                      data-umami-event="FAIR-BioRS documentation link"
                      data-umami-event-project="FAIR-BioRS"
                      rel="noopener"
                    >
                      <span className="font-lato">
                        Explore the FAIR-BioRS documentation
                      </span>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="arrow-animate ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto px-5 sm:px-10 sm:pt-2">
          <div className="mx-auto flex max-w-screen-lg flex-col">
            <h1 className="py-5 text-left text-4xl font-black subpixel-antialiased md:mr-8 md:py-0">
              Funding
            </h1>
            <div className="w-full py-2">
              <div className="flex w-full flex-col justify-between sm:flex-row">
                <div className="mb-10 pr-10 sm:mb-5">
                  <p className="w-full font-asap text-lg text-black">
                    The FAIR-BioRS guidelines where conceived while working on a
                    project funded through a supplemental award from the
                    National Institute of Allergy and Infectious Diseases
                    (NIAID). Besides some initial effort through this project
                    for the first few months, the development of the guidelines
                    has been done without any support, through the sole will of
                    the project members to make it easier for our peers wanting
                    to develop and share FAIR software.
                  </p>
                  <div className="mt-2 flex md:mt-1">
                    <a
                      href="https://reporter.nih.gov/project-details/10377989"
                      target="_blank"
                      className="text-url hover-underline-animation"
                      data-umami-event="Funding link"
                      data-umami-event-project="FAIRshare"
                      rel="noopener"
                    >
                      <span className="font-lato">
                        Explore the parent award on NIH Reporter
                      </span>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="arrow-animate ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto px-5 sm:px-10 sm:pt-2">
          <div className="mx-auto flex max-w-screen-lg flex-col">
            <h1 className="pb-5 text-left text-4xl font-black subpixel-antialiased md:mr-8">
              Team Members
            </h1>
            <div className="w-full">
              <div>
                <div className="mb-10 w-full sm:mb-5">
                  <div className="grid grid-cols-2 py-0 md:grid-cols-2 md:gap-3 md:py-1 lg:grid-cols-4 lg:gap-4">
                    {membersList.map((member) => (
                      <div key={member.name} className="cursor-pointer">
                        {!member.external ? (
                          <Link href={member.href} passHref>
                            <div className="flex flex-col items-center rounded-lg p-2 transition-all hover:bg-gray-200">
                              <Image
                                src={member.image}
                                alt={member.name + ` profile picture`}
                                width={112}
                                height={112}
                                className="rounded-full"
                                style={{
                                  height: `auto`,
                                  width: `auto`,
                                }}
                              />
                              <p className="ml-2 pt-2 text-center font-asap text-lg font-normal">
                                {member.name}
                              </p>
                            </div>
                          </Link>
                        ) : (
                          <a href={member.href} target="_blank" rel="noopener">
                            <div className="flex flex-col items-center rounded-lg p-2 transition-all hover:bg-gray-200">
                              <Image
                                src={member.image}
                                alt={member.name + ` profile picture`}
                                width={112}
                                height={112}
                                className="rounded-full"
                                style={{
                                  height: `auto`,
                                  width: `auto`,
                                }}
                              />
                              <p className="ml-2 pt-2 text-center font-asap text-lg font-normal">
                                {member.name}
                              </p>
                            </div>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    The FAIR-BioRS guidelines were developed in collaboration
                    with Dr. Zicheng Hu (UCSF) and Dr. Hervé Ménager (Institut
                    Pasteur, ELIXIR).
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>
                <div className="mb-10 w-full sm:mb-5">
                  <div className="grid grid-cols-2 gap-4 py-0 md:grid-cols-2 md:gap-3 md:py-1 lg:grid-cols-4 lg:gap-4">
                    {collaboratorsList.map((collaborator) => (
                      <a
                        key={collaborator.name}
                        href={collaborator.href}
                        target="_blank"
                        rel="noopener"
                        data-umami-event="Collaborator link"
                        data-umami-event-value={collaborator.id}
                      >
                        <div className="flex h-full flex-col items-center justify-end rounded-lg p-2 transition-all hover:bg-gray-200 ">
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
                                height: `auto`,
                                width: `auto`,
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
          </div>
        </div>
      </section>
    </div>
  );
}
