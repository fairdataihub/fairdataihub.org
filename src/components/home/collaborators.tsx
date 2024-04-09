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
  ];

  return (
    <section>
      <div className="container mx-auto max-w-screen-xl px-6 pb-0 pt-4 md:p-10">
        <div className="mb-8 flex w-full flex-col items-center">
          <p className="my-2 text-center text-4xl font-extrabold text-black sm:text-4xl">
            Where do our tools make a difference?
          </p>
        </div>
        <div className="mb-2 block">
          <Marquee
            speed={60}
            gradient={true}
            gradientColor={[255, 255, 255]}
            gradientWidth="25p"
          >
            {logoImages.map((logo, index) => (
              <div
                key={index}
                className="mx-2 flex h-full w-full items-center justify-center"
              >
                <Image
                  className="!px-4 "
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            ))}
          </Marquee>
        </div>
        <span className=" text-xs font-medium text-gray-500">
          Disclaimer: All logos are used with adequate permissions. Opinions,
          interpretations, conclusions and recommendations are those of the FAIR
          Data Innovations Hub and are not necessarily endorsed by the other
          organizations mentioned on this website.
        </span>
      </div>
    </section>
  );
}
