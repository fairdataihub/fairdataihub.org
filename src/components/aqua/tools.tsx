import Image from 'next/image';

export default function Tools() {
  const logoList = [
    {
      src: `/images/aqua/python-logo.png`,
      alt: `python logo`,
    },
    {
      src: `/images/aqua/docker-logo.png`,
      alt: `docker logo`,
    },
    {
      src: `/images/aqua/scigraph-logo.png`,
      alt: `scigraph logo`,
    },
    {
      src: `/images/aqua/sqlite-logo.png`,
      alt: `sqlite logo`,
    },
  ];
  return (
    <section>
      <div className="mx-auto px-5 sm:px-10">
        <div className="mx-auto flex max-w-screen-lg flex-col">
          <h1 className="py-5 text-4xl font-black md:mr-8 md:py-0">
            Technology
          </h1>
          <dl className="py-2">
            <div className="flex flex-col justify-between sm:flex-row">
              <dd className="mb-10 sm:mb-5">
                <p className="font-asap text-lg text-black sm:text-base">
                  AQUA for SPARC utilized 2 main tool groups to develop the User
                  interface and the Back end. The former includes the
                  HTML-CSS-JS trio using: VueJS and NuxtJS. The latter is
                  implemented using Python, Docker, SciGraph, and SQLite.
                </p>
              </dd>
            </div>
            <div className="pointer-events-none grid grid-cols-2 items-center justify-center gap-6 sm:grid-cols-4 md:py-1">
              {logoList.map((logo, index) => (
                <Image
                  key={index}
                  className="h-full !w-full !px-1"
                  src={logo.src}
                  alt={logo.alt}
                  width="238"
                  height="70"
                  objectFit="scale-down"
                />
              ))}
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
