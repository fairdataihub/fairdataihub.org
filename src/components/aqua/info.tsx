import Link from 'next/link';
import Image from 'next/image';

export default function Info() {
  const membersList = [
    {
      name: `Tram Ngo`,
      href: `/team/#Tram-Ngo`,
      external: false,
      image: `/images/people/tram-head.jpg`,
    },
    {
      name: `Laila Bekhet`,
      href: `/aqua`,
      external: false,
      image: `https://avatars.dicebear.com/api/jdenticon/LailaBekhet.svg`,
    },
    {
      name: `Yuda Munarko`,
      href: `/aqua`,
      external: false,
      image: `https://avatars.dicebear.com/api/jdenticon/YudaMunarko.svg`,
    },
    {
      name: `Niloofar Shahidi`,
      href: `/aqua`,
      external: false,
      image: `https://avatars.dicebear.com/api/jdenticon/NiloofarShahidi.svg`,
    },
    {
      name: `Xuanzhi `,
      href: `/aqua`,
      external: false,
      image: `https://avatars.dicebear.com/api/jdenticon/Xuanzhi.svg`,
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
                    AQUA for SPARC is distributed as an open-source application
                    with an MIT License. Anyone is free to fork our GitHub
                    repository and make their own changes if they would like. If
                    you would like to submit a feature modification, or feature
                    suggestion, please feel free to submit an issue on the
                    repository.
                  </p>
                  <div className="mt-3 flex text-accent">
                    <a
                      href="https://github.com/fairdataihub/AQUA/graphs/contributors"
                      target="_blank"
                      className="mr-2"
                      rel="noreferrer"
                    >
                      <Image
                        src="https://img.shields.io/github/contributors/SPARC-FAIR-Codeathon/aqua.svg?style=flat-square"
                        alt="aqua contributors"
                        width={94}
                        height={20}
                      />
                    </a>
                    <a
                      href="https://github.com/fairdataihub/AQUA/stargazers"
                      target="_blank"
                      className="mr-2"
                      rel="noreferrer"
                    >
                      <Image
                        src="https://img.shields.io/github/stars/SPARC-FAIR-Codeathon/aqua.svg?style=flat-square"
                        alt="aqua stars"
                        width={54}
                        height={20}
                      />
                    </a>
                    <a
                      href="https://github.com/fairdataihub/AQUA/issues"
                      target="_blank"
                      className="mr-2"
                      rel="noreferrer"
                    >
                      <Image
                        src="https://img.shields.io/github/issues/SPARC-FAIR-Codeathon/aqua.svg?style=flat-square"
                        alt="aqua issues"
                        width={90}
                        height={20}
                      />
                    </a>
                    <a
                      href="https://github.com/fairdataihub/AQUA/blob/master/LICENSE"
                      target="_blank"
                      className="mr-2"
                      rel="noreferrer"
                    >
                      <Image
                        src="https://img.shields.io/github/license/SPARC-FAIR-Codeathon/aqua.svg?style=flat-square"
                        alt="aqua license"
                        width={78}
                        height={20}
                      />
                    </a>
                  </div>
                  <div className="mt-2 flex md:mt-1">
                    <a
                      href="https://github.com/SPARC-FAIR-Codeathon/AQUA"
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
                    href="https://github.com/fairdataihub/AQUA"
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
              Origin Story
            </h1>
            <div className="w-full py-2">
              <div className="flex w-full flex-col justify-between sm:flex-row">
                <div className="mb-10 pr-10 sm:mb-5">
                  <p className="w-full font-asap text-lg text-black">
                    The AQUA project was first born as an idea at the 2021 NIH
                    SPARC Codeathon. The idea was to improve user query
                    understandability and result display of the SPARC Portal
                    search engine. AQUA received the fourth-place prize at the
                    Codeathon.
                  </p>
                  <div className="mt-2 flex md:mt-1">
                    <a
                      href="https://sparc.science/help/2021-sparc-fair-codeathon"
                      target="_blank"
                      className="text-url hover-underline-animation"
                      rel="noreferrer"
                    >
                      <span className="font-lato">
                        Learn more about the SPARC Codeathon
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 170.5327 84.5895"
                    className="h-20"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        y1="42.7643"
                        x2="170.5327"
                        y2="42.7643"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#0b00bf" />
                        <stop offset="1" stopColor="#bc00fc" />
                      </linearGradient>
                    </defs>
                    <title>sparc-logo-primary</title>
                    <g id="primary-logo">
                      <path
                        d="M169.0691,57.0889l-60.922-1.5a2.8941,2.8941,0,0,0-2.7225,1.7374l-.0289.0665L99.327,71.3508,87.0724,4.2313l-.0045-.03a3.9867,3.9867,0,0,0-7.8393-.0051L69.6429,55.6522,1.4623,57.3835a1.5,1.5,0,0,0,.0125,3l70.6845,1.2053a2.9235,2.9235,0,0,0,2.9-2.2814l.0259-.1154L83.01,23.8779,95.2029,82.1654l.0113.0551a3,3,0,0,0,5.684.5645l9.237-21.2451,58.9339-1.451a1.5,1.5,0,0,0,0-3Z"
                        style={{ fill: `url(#linear-gradient)` }}
                      />
                      <path d="M11.3962.9629c6.9756,0,11.2637,4.48,11.2637,11.583V16.77H16.0681V12.5459c0-3.2637-1.7285-5.2471-4.6719-5.2471-3.0078,0-4.7353,1.9834-4.7353,5.2471a6.6109,6.6109,0,0,0,2.4316,5.0557L17.86,25.8574c2.8154,2.6875,5.3115,5.6319,5.3115,10.56,0,7.1035-4.416,11.583-11.5195,11.583-7.167,0-11.583-4.48-11.583-11.583V32.1924H6.6609V36.417c0,3.2637,1.792,5.2471,4.9912,5.2471,3.1357,0,4.9277-1.9834,4.9277-5.2471a7.4448,7.4448,0,0,0-2.6875-5.44l-8.96-8.3828C1.3494,19.2656.0691,16.45.0691,12.3545.0691,5.4424,4.3572.9629,11.3962.9629Z" />
                      <path d="M44.2927,31.9365V47.5518H37.7009V1.4111H48.9636c7.1035,0,11.583,4.48,11.583,11.583v7.3594c0,7.168-4.4795,11.583-11.583,11.583ZM48.9,25.73c3.1993,0,5.0557-1.92,5.0557-5.1836V12.8027c0-3.2-1.8564-5.1845-5.0557-5.1845H44.2927V25.73Z" />
                      <path d="M116.6443,47.5518h-6.5918V1.4111h11.583c7.1035,0,11.583,4.48,11.583,11.583v6.2715a11.1941,11.1941,0,0,1-5.0557,9.8555c1.8565,5.6318,4.48,13.3115,6.1436,18.4307h-6.72l-5.5674-16.7666h-5.375Zm4.9267-22.9747c3.2,0,5.0557-1.92,5.0557-5.1191V12.8027c0-3.2-1.8555-5.1845-5.0557-5.1845h-4.9267V24.5771Z" />
                      <path d="M170.4656,32.1924V36.417c0,7.1035-4.4151,11.583-11.5186,11.583-7.1679,0-11.583-4.48-11.583-11.583V12.5459c0-7.1035,4.4151-11.583,11.583-11.583,7.1035,0,11.5186,4.48,11.5186,11.583V16.77h-6.5908V12.5459c0-3.2637-1.792-5.2471-4.9278-5.2471-3.2,0-4.9922,1.9834-4.9922,5.2471V36.417c0,3.2637,1.792,5.2471,4.9922,5.2471,3.1358,0,4.9278-1.9834,4.9278-5.2471V32.1924Z" />
                    </g>
                  </svg>
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
                              <p className="ml-2 text-center font-asap text-lg font-normal">
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
                              <p className="ml-2 text-center font-asap text-lg font-normal">
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
    </div>
  );
}
