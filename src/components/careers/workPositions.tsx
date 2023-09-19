const WorkPositions = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-screen-lg flex flex-col mx-auto">
          <div className="px-6 sm:px-6 lg:px-6 lg:h-40 p-6">
            <div className="text-center lg:text-lg lg:text-left mx-12 ">
              <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
                Open Positions
              </p>

              <p className="border-b-4 w-fit mb-2 mt-3 max-w-xs font-asap text-xl text-black sm:text-xl border-b-light-accent">
                Discover Your FAIR Future Here
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-lg flex flex-col mx-auto">
          <div className="bg-white px-6 sm:px-6 lg:px-6 lg:h-40 p-7">
            <div className="text-center lg:text-left lg:mx-12 flex flex-col items-center">
              <p className="font-asap text-lg h-32">
                No open positions at the moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPositions;
