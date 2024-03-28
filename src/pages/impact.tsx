import Cite from 'citation-js';

import Seo from '@/components/seo/seo';

type GroupedItems = { [key: string]: any[] };

interface Props {
  publications: GroupedItems[];
}

import PublicationsJSON from '@/assets/data/publications.json';

const Impact: React.FC<Props> = ({ publications }) => {
  const description = `Resources created by the FAIR Data Innovations`;

  return (
    <section className="relative mx-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden px-5 sm:px-10 sm:py-10">
      <Seo
        templateTitle="Impact"
        templateDescription={description}
        templateUrl="https://fairdataihub.org/impact"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=Impact&description=Resources%20created%20by%20the%20FAIR%20Data%20Innovations&app=fairdataihub&org=fairdataihub"
      />

      <div className="mb-5 px-2 pt-5 sm:pt-0 md:px-7">
        <h1 className="mb-2 text-left text-4xl font-bold sm:text-4xl">
          Impact
        </h1>
        <h2 className="text-left text-xl">{description}</h2>
      </div>

      <hr className="mx-6 my-2 border-dashed border-slate-200" />

      <div className="px-2 pt-5 md:px-7">
        {publications.map((group) => {
          return (
            <div
              key={group.key as unknown as string}
              className="flex flex-col pb-4"
            >
              <div className="flex items-center mb-3">
                <h2 className="text-left text-2xl font-bold">{group.key}</h2>
                <span className="text-base ml-1 font-medium">
                  ({group.value.length})
                </span>
              </div>

              <ul className="list-inside">
                {group.value.map((item) => {
                  return (
                    <li key={item.doi}>
                      <div className="flex-col flex mb-4">
                        <a
                          href={`https://doi.org/${item.doi}`}
                          target="_blank"
                          className="text-url font-medium text-base"
                          data-umami-event="Publication DOI link"
                          data-umami-event-doi={item.doi}
                          rel="noopener"
                        >
                          {item.title}
                        </a>

                        <p className="text-sm bg-slate-50 px-3 py-2">
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
    const cite = new Cite(resource.doi);

    const citation: string = cite.format(`bibliography`, {
      template: `apa`,
    });

    const resourceWithCitation = {
      ...resource,
      citation,
    };

    if (resource.type) {
      if (resource.type in grouped) {
        grouped[resource.type].push(resourceWithCitation);
      } else {
        grouped[resource.type] = [resourceWithCitation];
      }
    }
  }

  Object.keys(grouped).forEach((key) => {
    const group = grouped[key];

    if (group) {
      group.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }

        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }

        return 0;
      });
    }
  });

  // Sort the keys
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }

    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }

    return 0;
  });

  const sortedGrouped = [];

  for (const key of sortedKeys) {
    const item = {
      key,
      value: grouped[key],
    };

    sortedGrouped.push(item);
  }

  return {
    props: {
      publications: sortedGrouped,
    },
  };
}

export default Impact;
