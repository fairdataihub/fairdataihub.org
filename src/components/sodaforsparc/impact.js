import Link from 'next/link';

export default function Impact() {
  const filesNum = 70;
  const datasetsNum = 122;
  const dataNum = 5.1;

  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="flex w-full flex-col">
        <h2 className="py-1 text-center text-2xl font-bold sm:text-2xl md:text-3xl lg:text-5xl">
          Impact on SPARC datasets
        </h2>

        <h3 className="text-center text-lg md:text-xl lg:text-2xl">
          Trusted by researchers all over the world
        </h3>
      </div>

      <div className="flex flex-col justify-around p-6 sm:flex-row">
        <div className="m-2 mb-5 flex flex-col items-center justify-center lg:m-6">
          <p className="my-1 hidden text-center font-lato text-5xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"></p>

          <p className="my-1 text-center font-lato text-5xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            <span id="filesNum">{filesNum}</span>
            <span>k+</span>
          </p>

          <p className="text-center font-asap text-xl text-black sm:text-lg md:text-xl lg:text-2xl">
            Files touched
          </p>
        </div>
        <div className="m-2 mb-5 flex flex-col items-center justify-center lg:m-6">
          <p className="my-1 hidden text-center font-lato text-5xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"></p>

          <p className="my-1 text-center font-lato text-5xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            <span id="datasetsNum">{datasetsNum}</span>
            <span>+</span>
          </p>

          <p className="text-center font-asap text-xl text-black sm:text-lg md:text-xl lg:text-2xl">
            Datasets modified
          </p>
        </div>
        <div className="m-2 mb-5 flex flex-col items-center justify-center lg:m-6">
          <p className="my-1 hidden text-center font-lato text-5xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"></p>

          <p className="my-1 text-center font-lato text-5xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            <span id="dataNum">{dataNum}</span>
            <span>+ TB</span>
          </p>

          <p className="text-center font-asap text-xl text-black sm:text-lg md:text-xl lg:text-2xl">
            Data uploaded
          </p>
        </div>
      </div>
    </section>
  );
}
