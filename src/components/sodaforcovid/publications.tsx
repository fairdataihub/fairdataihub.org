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
          <a href="/#" target="_blank" className="my-2" rel="noreferrer">
            <p className="text-xl font-semibold">Coming soon...</p>
          </a>
          <div className="m2-3 relative rounded bg-gray-100 p-3">
            <p className="font-lato text-xs text-gray-600">Citation</p>
            <p className="font-asap text-base text-black">Coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
