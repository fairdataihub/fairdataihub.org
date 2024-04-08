const WorkPositions = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto flex max-w-screen-lg flex-col">
          <div className="p-6 px-6 sm:px-6 lg:h-40 lg:px-6">
            <div className="mx-12 text-center lg:text-left lg:text-lg ">
              <p className="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
                Open Positions
              </p>

              <p className="mb-2 mt-3 w-fit max-w-xs border-b-4 border-b-light-accent font-asap text-xl text-black sm:text-xl">
                Discover Your FAIR Future Here
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex max-w-screen-lg flex-col">
          <div className="bg-white p-7 px-6 sm:px-6 lg:h-40 lg:px-6">
            <div className="flex flex-col items-center text-center lg:mx-12 lg:text-left">
              <p className="h-32 font-asap text-lg">
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
