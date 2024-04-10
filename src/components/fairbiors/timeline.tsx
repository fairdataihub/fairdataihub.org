export default function Timeline() {
  const timelineList = [
    {
      longDate: `December 2021`,
      title: `Beginning of the idea`,
      content: `The need for actionable guidelines to make biomedical research software FAIR is identified.`,
    },
    {
      longDate: `December 2021 - April 2022`,
      title: `First version`,
      content: `The first version of the guidelines is established based on literature review plus our own assessment.`,
    },
    {
      longDate: `April 2022 - August 2023`,
      title: `Community feedback and improvements`,
      content: `Improvements are made through based on community feedback collected during conferences, webinars, and other means. Our most fruitful outreach effort was at the Biomedical Open Source Conference (BOSC) in 2022 and 2023, especially during the CoFest organized across two days before the conference.`,
    },
    {
      longDate: `September 2023`,
      title: `Publication of the guidelines`,
      content: `The second versions of the guidelines are published in Nature Scientific Data.`,
    },
    {
      longDate: `September 2023 - Present`,
      title: `Promotion and development of user support tools`,
      content: `We continue to promote the guidelines. We are also developing user-support tools such as FAIRshare and codefair so that implementing the guidelines is seamless for researchers.`,
    },
  ];

  return (
    <section>
      <div className="container mx-auto h-full w-full max-w-screen-lg pl-2 pr-3 sm:px-10">
        <div className="wrap relative h-full overflow-hidden p-2 sm:p-4">
          <h2 className="mb-10 text-center text-4xl font-bold sm:text-5xl">
            Timeline
          </h2>

          <div className="container mx-auto flex flex-wrap px-1 py-5">
            <div className="flex w-full flex-wrap">
              {timelineList.map((item, index) => (
                <div className="relative flex pb-8" key={item.longDate}>
                  {index != timelineList.length - 1 && (
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                  )}
                  <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-light-accent text-white">
                    {index != timelineList.length - 1 ? (
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        v-if="index != timelineList.length - 1"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    ) : (
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        v-if="index == timelineList.length - 1"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    )}
                  </div>
                  <div className="flex-grow pl-4">
                    <h3 className="font-semibold">
                      {item.longDate} - {item.title}
                    </h3>
                    <p className="w-full font-asap text-base text-black">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
