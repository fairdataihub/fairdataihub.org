import { Icon } from '@iconify/react';

const Timeline: React.FC<TimelineItemList> = ({ timelineList }) => {
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
                      <Icon
                        icon="pepicons-pencil:checkmark-outlined"
                        width="1.5rem"
                        height="1.5rem"
                      />
                    ) : (
                      <Icon
                        icon="f7:waveform-path-ecg"
                        width="1.5rem"
                        height="1.5rem"
                      />
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
};

export default Timeline;
