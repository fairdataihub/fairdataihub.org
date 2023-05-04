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
            href="https://doi.org/10.1101/2021.02.10.430563"
            target="_blank"
            className="my-2"
            data-umami-event="Publication DOI link"
            data-umami-event-doi="10.1101/2021.02.10.430563"
            rel="noreferrer"
          >
            <p className="text-url text-xl font-semibold">
              SPARC Data Structure: Rationale and Design of a FAIR Standard for
              Biomedical Research Data
            </p>
          </a>
          <div className="m2-3 relative rounded bg-gray-100 p-3">
            <p className="font-lato text-xs text-gray-600">Citation</p>
            <p className="font-asap text-base text-black">
              Bandrowski, Anita, Jeffrey S. Grethe, Anna Pilko, Thomas H.
              Gillespie, Gabi Pine, Bhavesh Patel, Monique Surles-Zeiglera, and
              Maryann E. Martone. &quot;Sparc data structure: Rationale and
              design of a fair standard for biomedical research data.&quot;
              <i>bioRxiv</i> (2021).&nbsp;
              <a
                href="https://doi.org/10.1101/2021.02.10.430563"
                target="_blank"
                rel="noreferrer"
                data-umami-event="Publication DOI link"
                data-umami-event-doi="10.1101/2021.02.10.430563"
              >
                <span className="break-words text-blue-600 hover:underline">
                  doi.org/10.1101/2021.02.10.430563
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="mb-4 flex flex-col py-4 font-sans">
          <a
            href="https://doi.org/10.1096/fasebj.2020.34.s1.02483"
            target="_blank"
            className="my-2"
            data-umami-event="Publication DOI link"
            data-umami-event-doi="10.1096/fasebj.2020.34.s1.02483"
            rel="noreferrer"
          >
            <p className="text-url text-xl font-semibold">
              SPARC: SODA, an interactive software for curating SPARC datasets
            </p>
          </a>
          <div className="m2-3 relative rounded bg-gray-100 p-3">
            <p className="font-lato text-xs text-gray-600">Citation</p>
            <p className="font-asap text-base text-black">
              Patel, Bhavesh, Harshit Srivastava, Parya Aghasafari, and Karl
              Helmer. &quot;SPARC: SODA, an interactive software for curating
              SPARC datasets.&quot;
              <i>The FASEB Journal</i> 34, no. S1 (2020).&nbsp;
              <a
                href="https://doi.org/10.1096/fasebj.2020.34.s1.02483"
                target="_blank"
                rel="noreferrer"
                data-umami-event="Publication DOI link"
                data-umami-event-doi="10.1096/fasebj.2020.34.s1.02483"
              >
                <span className="break-words text-blue-600 hover:underline">
                  doi.org/10.1096/fasebj.2020.34.s1.02483
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
