import Link from 'next/link';
import Image from 'next/image';

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
    {
      name: `Taiji Yang`,
      href: `/team/#Taiji-Yang`,
      external: false,
      image: `https://ucarecdn.com/12fea441-c679-4471-923f-dbdcd5bece51/-/scale_crop/200x200/smart/`,
    },
  ];

  const collaboratorsList = [
    {
      name: `Zicheng Hu (UCSF)`,
      href: `https://profiles.ucsf.edu/zicheng.hu`,
      image: `https://researcherprofiles.org/profile/Modules/CustomViewPersonGeneralInfo/PhotoHandler.ashx?NodeID=189905&cachekey=d77aea77-c8d0-4a86-be9a-12da9da39113`,
      type: `person`,
    },
    {
      name: `The Butte Lab`,
      href: `https://buttelab.ucsf.edu/`,
      image: `/images/collaborators/ucsf-logo.png`,
      type: `lab`,
    },
    {
      name: `The Jagannathan Lab`,
      href: `https://med.stanford.edu/jagannathan-lab.html`,
      image: `/images/collaborators/stanford-medicine-logo.png`,
      type: `lab`,
    },
    {
      name: `Dr. Greenhouse Lab`,
      href: `https://profiles.ucsf.edu/bryan.greenhouse#toc-id2`,
      image: `/images/collaborators/ucsf-logo.png`,
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
                    SODA for COVID-19 is distributed as an open-source
                    application with an MIT License. Anyone is free to fork our
                    GitHub repository and make their own changes if they would
                    like. If you would like to submit a feature modification, or
                    feature suggestion, please feel free to submit an issue on
                    the repository.
                  </p>
                  <div className="mt-3 flex text-accent">
                    <a
                      href="https://github.com/fairdataihub/SODA-for-COVID-19-Research/graphs/contributors"
                      target="_blank"
                      className="mr-2"
                      rel="noreferrer"
                    >
                      {/*  eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://img.shields.io/github/contributors/fairdataihub/SODA-for-COVID-19-Research.svg?style=flat-square"
                        alt="fairshare contributors"
                      />
                    </a>
                    <a
                      href="https://github.com/fairdataihub/SODA-for-COVID-19-Research/stargazers"
                      target="_blank"
                      className="mr-2"
                      rel="noreferrer"
                    >
                      {/*  eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://img.shields.io/github/stars/fairdataihub/SODA-for-COVID-19-Research.svg?style=flat-square"
                        alt="fairshare stars"
                      />
                    </a>
                    <a
                      href="https://github.com/fairdataihub/SODA-for-COVID-19-Research/issues"
                      target="_blank"
                      className="mr-2"
                      rel="noreferrer"
                    >
                      {/*  eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://img.shields.io/github/issues/fairdataihub/SODA-for-COVID-19-Research.svg?style=flat-square"
                        alt="fairshare issues"
                      />
                    </a>
                    <a
                      href="https://github.com/fairdataihub/SODA-for-COVID-19-Research/blob/master/LICENSE"
                      target="_blank"
                      className="mr-2"
                      rel="noreferrer"
                    >
                      {/*  eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://img.shields.io/github/license/fairdataihub/SODA-for-COVID-19-Research.svg?style=flat-square"
                        alt="fairshare license"
                      />
                    </a>
                  </div>
                  <div className="mt-2 flex md:mt-1">
                    <a
                      href="https://github.com/fairdataihub/SODA-for-COVID-19-Research"
                      target="_blank"
                      className="text-url hover-underline-animation"
                      rel="noreferrer"
                    >
                      <span className="font-lato">
                        Explore the GitHub repository
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
                <div className="py-3">
                  <a
                    href="https://github.com/fairdataihub/SODA-for-COVID-19-Research"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Github"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-0.122 175.062 480.244 129.875"
                      className="h-10 transition-all hover:drop-shadow-xl hover:filter"
                    >
                      <g fill="#121110">
                        <path d="M92.375 230.65H52.019a1.887 1.887 0 0 0-1.886 1.886v19.731a1.89 1.89 0 0 0 1.886 1.889h15.743v24.513s-3.535 1.206-13.308 1.206c-11.53 0-27.637-4.214-27.637-39.632 0-35.425 16.772-40.087 32.518-40.087 13.63 0 19.502 2.401 23.238 3.556 1.174.36 2.26-.808 2.26-1.851l4.502-19.063c0-.487-.165-1.075-.721-1.474-1.517-1.082-10.774-6.262-34.16-6.262-26.941 0-54.576 11.463-54.576 66.562 0 55.103 31.64 63.313 58.302 63.313 22.076 0 35.468-9.434 35.468-9.434.552-.306.612-1.077.612-1.431v-61.537c0-1.04-.844-1.885-1.885-1.885M300.354 181.664a1.88 1.88 0 0 0-1.873-1.896h-22.724a1.889 1.889 0 0 0-1.882 1.896l.006 43.913h-35.419v-43.913a1.882 1.882 0 0 0-1.875-1.896h-22.722a1.887 1.887 0 0 0-1.877 1.896v118.904c0 1.048.843 1.901 1.877 1.901h22.722c1.039 0 1.875-.854 1.875-1.901v-50.86h35.419l-.062 50.86c0 1.048.844 1.901 1.883 1.901h22.777c1.041 0 1.873-.854 1.875-1.901V181.664M135.254 197.268c0-8.183-6.56-14.795-14.653-14.795-8.085 0-14.65 6.612-14.65 14.795 0 8.173 6.565 14.802 14.65 14.802 8.093 0 14.653-6.629 14.653-14.802M133.629 275.486V220.6a1.89 1.89 0 0 0-1.88-1.895h-22.651c-1.039 0-1.969 1.072-1.969 2.115v78.634c0 2.312 1.44 2.998 3.304 2.998h20.408c2.239 0 2.788-1.1 2.788-3.034v-23.932M386.71 218.884h-22.549c-1.034 0-1.876.852-1.876 1.901v58.302s-5.729 4.192-13.859 4.192c-8.13 0-10.287-3.689-10.287-11.65v-50.844c0-1.049-.841-1.901-1.875-1.901h-22.886c-1.032 0-1.879.852-1.879 1.901v54.693c0 23.646 13.179 29.431 31.31 29.431 14.873 0 26.864-8.216 26.864-8.216s.571 4.329.829 4.843c.259.512.932 1.029 1.659 1.029l14.56-.064c1.032 0 1.879-.854 1.879-1.898l-.008-79.817c0-1.05-.843-1.902-1.882-1.902M439.445 283.207c-7.821-.238-13.126-3.788-13.126-3.788v-37.653s5.233-3.208 11.654-3.782c8.12-.727 15.944 1.726 15.944 21.095.001 20.426-3.53 24.457-14.472 24.128zm8.894-66.993c-12.807 0-21.518 5.714-21.518 5.714v-40.263c0-1.05-.839-1.897-1.875-1.897h-22.787a1.887 1.887 0 0 0-1.878 1.897v118.903c0 1.048.842 1.901 1.881 1.901h15.811c.711 0 1.25-.367 1.648-1.009.393-.639.96-5.482.96-5.482s9.318 8.83 26.957 8.83c20.708 0 32.584-10.504 32.584-47.154 0-36.651-18.967-41.44-31.783-41.44M198.936 218.695h-17.045l-.026-22.519c0-.852-.439-1.278-1.424-1.278h-23.228c-.903 0-1.388.398-1.388 1.265v23.271s-11.64 2.809-12.427 3.037a1.886 1.886 0 0 0-1.361 1.812v14.623c0 1.052.84 1.898 1.879 1.898h11.909v35.178c0 26.13 18.328 28.697 30.696 28.697 5.651 0 12.411-1.814 13.527-2.228.675-.248 1.067-.947 1.067-1.705l.019-16.086c0-1.05-.886-1.897-1.884-1.897-.993 0-3.534.404-6.15.404-8.372 0-11.209-3.893-11.209-8.932l-.001-33.432h17.046c1.039 0 1.88-.847 1.88-1.898v-18.317a1.884 1.884 0 0 0-1.88-1.893" />
                      </g>
                    </svg>
                  </a>
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
                    SODA for COVID-19 Research is funded through a supplemental
                    award from the National Institute of Allergy and Infectious
                    Diseases (NIAID).
                  </p>
                  <div className="mt-2 flex md:mt-1">
                    <a
                      href="https://www.niaid.nih.gov/funding/covid19-research"
                      target="_blank"
                      className="text-url hover-underline-animation"
                      rel="noreferrer"
                    >
                      <span className="font-lato">
                        Explore the award on NIH Reporter
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
                              />
                              <p className="ml-2 pt-2 text-center font-asap text-lg font-normal">
                                {member.name}
                              </p>
                            </div>
                          </Link>
                        ) : (
                          <a
                            href={member.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="flex flex-col items-center rounded-lg p-2 transition-all hover:bg-gray-200">
                              <Image
                                src={member.image}
                                alt={member.name + ` profile picture`}
                                width={112}
                                height={112}
                                className="rounded-full"
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
                    SODA for COVID-19 Research is developed in collaboration
                    with Dr. Zicheng Hu (UCSF) and his colleagues at University
                    of California, San Francisco and Stanford University who are
                    conducting a clinical trial for a novel treatment approach
                    for COVID-19. They will be providing overall guidance on the
                    applicable FAIR guidelines as well as conducting beta
                    testing of the software.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>
                <div className="mb-10 w-full sm:mb-5">
                  <div className="grid grid-cols-2 py-0 md:grid-cols-2 md:gap-3 md:py-1 lg:grid-cols-4 lg:gap-4">
                    {collaboratorsList.map((collaborator) => (
                      <a
                        key={collaborator.name}
                        href={collaborator.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex h-full flex-col items-center justify-end rounded-lg p-2 transition-all hover:bg-gray-200">
                          {collaborator.type === `person` ? (
                            <Image
                              src={collaborator.image}
                              alt={collaborator.name + ` profile picture`}
                              width={128}
                              height={128}
                              className="rounded-full"
                            />
                          ) : (
                            <Image
                              src={collaborator.image}
                              alt={collaborator.name + ` profile picture`}
                              width={220}
                              height={150}
                              objectFit="scale-down"
                            />
                          )}
                          <p className="mt-3 ml-2 text-center font-asap text-lg font-normal">
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
