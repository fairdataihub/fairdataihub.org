import Seo from '@/components/seo/seo';

type GroupedItems = { [key: string]: any[] };

interface Props {
  publications: GroupedItems[];
}

import PublicationsJSON from '@/assets/data/publications.json';

const Impact: React.FC<Props> = ({ publications }) => {
  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:px-10 sm:py-10">
      <Seo
        templateTitle="Impact"
        templateDescription="Resources created by the FAIR Data Innovations"
        templateUrl="https://fairdataihub.org/impact"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=Impact&description=Resources%20created%20by%20the%20FAIR%20Data%20Innovations&app=fairdataihub&org=fairdataihub"
      />

      <div className="mb-5 px-2 pt-5 sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          Impact
        </h1>
        <h2 className="text-left text-xl">
          Resources created by the FAIR Data Innovations Hub team
        </h2>
      </div>

      <hr className="mx-6 my-2 border-dashed border-slate-200" />

      <div className="px-2 pt-5 md:px-7">
        {publications.map((group) => {
          return (
            <div
              key={group.key as unknown as string}
              className="flex flex-col pb-4"
            >
              <div className="mb-3 flex items-center">
                <h2 className="text-left text-2xl font-bold">{group.key}</h2>
                <span className="ml-1 text-base font-medium">
                  ({group.value.length})
                </span>
              </div>

              <ul className="list-inside">
                {group.value.map((item) => {
                  return (
                    <li key={item.url}>
                      <div className="mb-4 flex flex-col">
                        <a
                          href={item.url}
                          target="_blank"
                          className="text-url max-w-screen-xl text-base font-medium"
                          data-umami-event="Publication link"
                          data-umami-event-url={item.url}
                          rel="noopener"
                        >
                          {item.title}
                        </a>

                        <p className="bg-slate-50 px-3 py-2 text-sm">
                          {item.citation}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const grouped: { [key: string]: any[] } = {};

  for (const resource of PublicationsJSON) {
    const resourceWithCitation = {
      ...resource,
    };

    if (resource.type) {
      if (resource.type in grouped) {
        grouped[resource.type].push(resourceWithCitation);
      } else {
        grouped[resource.type] = [resourceWithCitation];
      }
    }
  }

  const sortingOrder = [
    `Journal Articles`,
    `Preprints`,
    `Software`,
    `Datasets`,
    `Conference Presentations`,
    `Posters`,
    `Webinars/Lectures`,
    `Reports`,
    `Web Articles`,
  ];

  const sortedGrouped = [];

  for (const key of sortingOrder) {
    if (!grouped[key]) {
      continue;
    }

    const item = {
      key,
      value: grouped[key],
    };

    sortedGrouped.push(item);
  }

  // sort each group by year
  for (const group of sortedGrouped) {
    group.value.sort((a, b) => b.year - a.year);
  }

  return {
    props: {
      publications: sortedGrouped,
    },
  };
}

export default Impact;
