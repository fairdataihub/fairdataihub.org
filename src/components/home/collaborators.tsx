import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function Collaborators() {
  const logoImages = [
    {
      src: `/images/ucsf-logo.png`,
      alt: `UCSF logo`,
      width: `200`,
      height: `145`,
    },
    {
      src: `/images/sparc-logo.svg`,
      alt: `NIH SPARC logo`,
      width: `200`,
      height: `111`,
    },
    {
      src: `/images/fdi-lab-logo.png`,
      alt: `FDI Lab logo`,
      width: `200`,
      height: `79.45`,
    },
    {
      src: `/images/calmi-logo.png`,
      alt: `California Medical Innovations Institute logo`,
      width: `200`,
      height: `88`,
    },
    {
      src: `/images/UCL-logo.png`,
      alt: `UCL logo`,
      width: `200`,
      height: `85`,
    },
  ];

  return (
    <section>
      <div className="container mx-auto max-w-screen-lg px-6 pt-4 pb-0 md:p-10">
        <div className="mb-4 flex w-full flex-col items-center">
          <p className="my-2 text-center text-4xl font-extrabold tracking-tight sm:text-4xl">
            Where do our tools make a difference?
          </p>
        </div>
        <div className="mb-2 block">
          <Marquee
            speed={60}
            gradient={true}
            gradientColor={[255, 255, 255]}
            gradientWidth="125px"
          >
            {logoImages.map((logo, index) => (
              // <div className="relative w-[200px] " key={index}>
              <Image
                key={index}
                className="h-full !w-full !px-4"
                src={logo.src}
                alt={logo.alt}
                width="200%"
                height="100%"
                objectFit="scale-down"
              />
              // </div>
            ))}
          </Marquee>
        </div>
        <span className=" text-xs text-gray-400">
          Disclaimer: All logos are used with adequate permissions. Opinions,
          interpretations, conclusions and recommendations are those of the FAIR
          Data Innovations Hub and are not necessarily endorsed by the other
          organizations mentioned on this website.
        </span>
      </div>
    </section>
  );
}
