import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import { LinkPreview } from '@/components/ui/link-preview';

export default function Collaborators() {
  const logoImages = [
    {
      src: `/images/collaborators/ucsf-logo.png`,
      alt: `UCSF logo`,
      width: 200,
      height: 145,
      href: `https://www.ucsf.edu`,
    },
    {
      src: `/images/collaborators/sparc-logo.svg`,
      alt: `NIH SPARC logo`,
      width: 200,
      height: 111,
      href: `https://sparc.science`,
    },
    {
      src: `/images/collaborators/fdi-lab-logo.png`,
      alt: `FDI Lab logo`,
      width: 200,
      height: 79.45,
      href: `https://www.fdilab.org/`,
    },
    {
      src: `/images/collaborators/calmi-logo.png`,
      alt: `California Medical Innovations Institute logo`,
      width: 200,
      height: 88,
      href: `https://www.calmi2.org/`,
    },
    {
      src: `/images/collaborators/UCL-logo.png`,
      alt: `UCL logo`,
      width: 200,
      height: 85,
      href: `https://www.ucl.ac.uk`,
    },
    {
      src: `/images/collaborators/bridge2ai.png`,
      alt: `Bridge2AI logo`,
      width: 200,
      height: 200,
      href: `https://bridge2ai.org/`,
    },
    {
      src: `/images/collaborators/ucsd-logo.png`,
      alt: `UCSD logo`,
      width: 200,
      height: 218,
      href: `https://www.ucsd.edu`,
    },
    {
      src: `/images/collaborators/university-michigan.png`,
      alt: `University of Michigan logo`,
      width: 200,
      height: 113,
      href: `https://umich.edu`,
    },
    {
      src: `/images/collaborators/pennsieve-logo.svg`,
      alt: `Pennsieve logo`,
      width: 200,
      height: 145,
      href: `https://discover.pennsieve.io/`,
    },
    {
      src: `/images/collaborators/mbf-logo.png`,
      alt: `MBF logo`,
      width: 200,
      height: 140,
      href: `https://www.mbfbioscience.com`,
    },
    {
      src: `https://os.nav.fund/acknowledge/logos/TNF_Stacked_Logos/stacked_color.svg`,
      alt: `The Navigation Fund logo`,
      width: 250,
      height: 200,
      href: `https://www.navigation.org/grants/open-science`,
    },
    {
      src: `/images/dmp/logo-cdl.svg`,
      alt: `California Digital Library (CDL) logo`,
      width: 200,
      height: 60,
      href: `https://cdlib.org`,
    },
    {
      src: `/images/collaborators/nih-text.png`,
      alt: `National Institutes of Health (NIH)`,
      width: 200,
      height: 60,
      href: `https://www.nih.gov`,
    },
  ];

  return (
    <div className="mx-auto w-full px-6 pt-4 pb-0">
      <div className="mb-4 flex w-full flex-col items-center">
        <h2 className="text-left text-4xl font-extrabold text-stone-900 sm:text-4xl">
          We won&apos;t be able to do this alone!
        </h2>

        <p className="my-2 text-left text-xl md:text-center">
          Our work would not be possible without our incredible collaborators
          and funders
        </p>
      </div>

      <div className="mb-2">
        <Marquee
          speed={60}
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth="25p"
          pauseOnHover={true}
          className="marquee-override"
        >
          {/* Duplicate the logos to make the marquee longer */}
          {[...logoImages, ...logoImages].map((logo, index) => (
            <div
              key={index}
              className="mx-2 flex h-full w-full items-center justify-center"
            >
              <LinkPreview url={logo.href}>
                <Image
                  className="!px-4 transition-all duration-100 hover:grayscale-0 sm:grayscale"
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </LinkPreview>
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
