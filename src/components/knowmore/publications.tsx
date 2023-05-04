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
            href="https://doi.org/10.1101/2021.08.08.455581"
            target="_blank"
            className="my-2"
            data-umami-event="Publication DOI link"
            data-umami-event-doi="10.1101/2021.08.08.455581"
            rel="noreferrer"
          >
            <p className="text-url text-xl font-semibold">
              KnowMore: An Automated Knowledge Discovery Tool for the FAIR SPARC
              Datasets
            </p>
          </a>
          <div className="m2-3 relative rounded bg-gray-100 p-3">
            <p className="font-lato text-xs text-gray-600">Citation</p>
            <p className="font-asap text-base text-black">
              Quey, Ryan, Matthew A. Schiefer, Anmol Kiran, and Bhavesh Patel.
              &quot;KnowMore: An Automated Knowledge Discovery Tool for the FAIR
              SPARC Datasets.&quot;
              <i> F1000Research</i> 10, no. 1132 (2021).&nbsp;
              <a
                href="https://doi.org/10.1101/2021.08.08.455581"
                target="_blank"
                rel="noreferrer"
                data-umami-event="Publication DOI link"
                data-umami-event-doi="10.1101/2021.08.08.455581"
              >
                <span className="break-words text-blue-600 hover:underline">
                  doi.org/10.1101/2021.08.08.455581
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
