import Link from 'next/link';
import ImpactNumber from './impactNumber';

export default function Impact() {
  const ImpactList = [
    {
      description: 'Files touched',
      amount: '19300',
      unit: '',
    },
    {
      description: 'Datasets Modified',
      amount: '90',
      unit: '',
    },
    {
      description: 'Data uploaded',
      amount: '4',
      unit: 'TB',
    },
  ];

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
        {ImpactList.map((impact) => {
          return (
            <div
              key={impact.description}
              className="m-2 mb-5 flex flex-col items-center justify-center lg:m-6"
            >
              <p className="my-1 text-center font-lato text-5xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                <ImpactNumber countTo={impact.amount} animationDuration="2" />
                <span>+</span>
                {impact.unit && <span> {impact.unit}</span>}
              </p>
              <p className="text-center font-asap text-xl text-black sm:text-lg md:text-xl lg:text-2xl">
                {impact.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
