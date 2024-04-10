import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Collaborators() {
  const logoImages = [
    {
      src: `/images/collaborators/ucsf-logo.png`,
      alt: `UCSF logo`,
      width: 200,
      height: 145,
    },
    {
      src: `/images/collaborators/sparc-logo.svg`,
      alt: `NIH SPARC logo`,
      width: 200,
      height: 111,
    },
    {
      src: `/images/collaborators/fdi-lab-logo.png`,
      alt: `FDI Lab logo`,
      width: 200,
      height: 79.45,
    },
    {
      src: `/images/collaborators/calmi-logo.png`,
      alt: `California Medical Innovations Institute logo`,
      width: 200,
      height: 88,
    },
    {
      src: `/images/collaborators/UCL-logo.png`,
      alt: `UCL logo`,
      width: 200,
      height: 85,
    },
    {
      src: `/images/collaborators/bridge2ai.png`,
      alt: `Bridge2AI logo`,
      width: 200,
      height: 200,
    },
    {
      src: `/images/collaborators/ucsd-logo.png`,
      alt: `UCSD logo`,
      width: 200,
      height: 218,
    },
    {
      src: `/images/collaborators/university-michigan.png`,
      alt: `UCSD logo`,
      width: 200,
      height: 113,
    },
    {
      src: `/images/collaborators/pennsieve-logo.svg`,
      alt: `Pennsieve logo`,
      width: 200,
      height: 145,
    },
    {
      src: `/images/collaborators/mbf-logo.png`,
      alt: `MBF logo`,
      width: 200,
      height: 140,
    },
  ];

  return (
    <div className="mx-auto w-full pb-0 pt-4">
      <div className="mb-4 flex w-full flex-col items-center">
        <h2 className="text-left text-4xl font-extrabold text-stone-900 sm:text-4xl">
          We won&apos;t be able to do this alone!
        </h2>

        <p className="my-2 text-center text-xl md:text-left">
          Our work would not be possible without our incredible collaborators at
          various institutions all over the world.
        </p>
      </div>

      <div className="mb-2 block">
        <Marquee
          speed={60}
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth="25p"
        >
          {/* Duplicate the logos to make the marquee longer */}
          {[...logoImages, ...logoImages].map((logo, index) => (
            <div
              key={index}
              className="mx-2 flex h-full w-full items-center justify-center"
            >
              <Image
                className="!px-4 transition-all duration-100 hover:grayscale-0 sm:grayscale"
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <p className="w-full text-center text-xs font-medium text-gray-500">
        Disclaimer: All logos are used with adequate permissions. Opinions,
        interpretations, conclusions and recommendations are those of the FAIR
        Data Innovations Hub and are not necessarily endorsed by the other
        organizations mentioned on this website.
      </p>
    </div>
  );
}
