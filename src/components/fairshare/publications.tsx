export default function Publications() {
  return (
    <section className="mx-auto max-w-screen-lg px-10 py-3">
      <div className="flex w-full flex-col">
        <h2 className="py-2 text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
          Publications
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-gray-200">
        <div className="mb-4 flex flex-col py-4 font-sans">
          <a
            href="https://doi.org/10.1101/2022.04.18.488694"
            target="_blank"
            className="my-2"
            data-umami-event="Publication DOI link"
            data-umami-event-doi="10.1101/2022.04.18.488694"
            rel="noreferrer"
          >
            <p className="text-url text-xl font-semibold">
              Making Biomedical Research Software FAIR: Actionable Step-by-step
              Guidelines with a User-support Tool
            </p>
          </a>
          <div className="m2-3 relative rounded bg-gray-100 p-3">
            <p className="font-lato text-xs text-gray-600">Citation</p>
            <p className="font-asap text-base text-black">
              Patel, Bhavesh, Sanjay Soundarajan, Zicheng Hu. &quot;Making
              Biomedical Research Software FAIR: Actionable Step-by-step
              Guidelines with a User-support Tool.&quot;
              <i>bioRxiv</i> (2022).&nbsp;
              <a
                href="https://doi.org/10.1101/2022.04.18.488694"
                target="_blank"
                rel="noreferrer"
                data-umami-event="Publication DOI link"
                data-umami-event-doi="10.1101/2022.04.18.488694"
              >
                <span className="break-words text-blue-600 hover:underline">
                  https://doi.org/10.1101/2022.04.18.488694
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="mb-4 flex flex-col py-4 font-sans">
          <a
            href="https://doi.org/10.7490/f1000research.1119054.1"
            target="_blank"
            className="my-2"
            data-umami-event="Publication DOI link"
            data-umami-event-doi="10.7490/f1000research.1119054.1"
            rel="noreferrer"
          >
            <p className="text-url text-xl font-semibold ">
              Making biomedical research software FAIR with FAIRshare
            </p>
            <span className="text-url text-sm font-medium ">
              Poster presented at Intelligent Systems for Molecular Biology
              (ISMB) 2022 and Bioinformatics Open Source Conference (BOSC) 2022
            </span>
          </a>
          <div className="m2-3 relative rounded bg-gray-100 p-3">
            <p className="font-lato text-xs text-gray-600">Citation</p>
            <p className="font-asap text-base text-black">
              Patel B and Soundarajan S. &quot;Making biomedical research
              software FAIR with FAIRshare.&quot;
              <i>F1000Research </i> (2022).&nbsp; <strong>11</strong>:835
              (poster).&nbsp;
              <a
                href="https://doi.org/10.7490/f1000research.1119054.1"
                target="_blank"
                rel="noreferrer"
                data-umami-event="Publication DOI link"
                data-umami-event-doi="10.7490/f1000research.1119054.1"
              >
                <span className="break-words text-blue-600 hover:underline">
                  https://doi.org/10.7490/f1000research.1119054.1
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="mb-4 flex flex-col py-4 font-sans">
          <a
            href="https://doi.org/10.7490/f1000research.1119055.1"
            target="_blank"
            className="my-2"
            data-umami-event="Publication DOI link"
            data-umami-event-doi="10.7490/f1000research.1119055.1"
            rel="noreferrer"
          >
            <p className="text-url text-xl font-semibold ">
              Making biomedical research software findable, accessible,
              interoperable, reusable (FAIR) with FAIRshare
            </p>
            <span className="text-url text-sm font-medium ">
              Slides presented at Intelligent Systems for Molecular Biology
              (ISMB) 2022 and Bioinformatics Open Source Conference (BOSC) 2022
            </span>
          </a>
          <div className="m2-3 relative rounded bg-gray-100 p-3">
            <p className="font-lato text-xs text-gray-600">Citation</p>
            <p className="font-asap text-base text-black">
              Patel B and Soundarajan S. &quot;Making biomedical research
              software FAIR with FAIRshare.&quot;
              <i>F1000Research </i> (2022).&nbsp; <strong>11</strong>:836
              (poster).&nbsp;
              <a
                href="https://doi.org/10.7490/f1000research.1119055.1"
                target="_blank"
                rel="noreferrer"
                data-umami-event="Publication DOI link"
                data-umami-event-doi="10.7490/f1000research.1119055.1"
              >
                <span className="break-words text-blue-600 hover:underline">
                  https://doi.org/10.7490/f1000research.1119055.1
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
