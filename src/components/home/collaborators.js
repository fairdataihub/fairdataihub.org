import Marquee from 'react-fast-marquee';

export default function Collaborators() {
  // const logoImages = [
  //   {
  //     url: 'https://i.ibb.co/CKXDZzf/ucsf-logo.png',
  //     alt: 'UCSF logo',
  //   },
  //   {
  //     url: 'https://sparc.science/_nuxt/img/logo-sparc-wave-primary.8ed83a5.svg',
  //     alt: 'NIH SPARC logo',
  //   },
  //   {
  //     url: 'https://i.ibb.co/XLGBZvG/fdilab-inverted-logo.png',
  //     alt: 'FDI Lab logo',
  //   },
  //   {
  //     url: 'https://i.ibb.co/0r83YnL/calmi-logo.png',
  //     alt: 'California Medical Innovations Institute logo',
  //   },
  // ];

  return (
    <section>
      <div className="container mx-auto max-w-screen-lg px-6 pt-4 pb-0 md:p-10">
        <div className="mb-4 flex w-full flex-col items-center">
          <p className="my-2 text-center text-4xl font-extrabold tracking-tight sm:text-4xl">
            Where do our tools make a difference?
          </p>
        </div>
        <div className="block">
          <Marquee
            speed={60}
            gradient={true}
            gradientColor={[255, 255, 255]}
            gradientWidth="125px"
          >
            <img
              src="https://ucarecdn.com/fb093e0f-5363-4710-b543-296553408fdb/"
              alt="UCSF logo"
              width="200"
              className="mx-4 py-2"
            />
            <img
              src="https://ucarecdn.com/a4d32fd6-1b0d-4dc7-b0f4-7807ce96f76d/"
              alt="NIH SPARC logo"
              width="200"
              className="mx-4 py-2"
            />
            <img
              src="https://ucarecdn.com/dd8fcd39-25dc-4460-a02c-402631a00c25/"
              alt="FDI Lab logo"
              width="200"
              className="mx-4 py-2"
            />
            <img
              src="https://ucarecdn.com/1ece10bc-75a1-4750-b9ac-395a17e6ca2f/"
              alt="California Medical Innovations Institute logo"
              width="200"
              className="mx-4 py-2"
            />
            <img
              src="https://ucarecdn.com/58385a01-96b0-4063-a066-f2c83b14e5d9/"
              alt="University College London"
              width="200"
              className="mx-4 py-2"
            />
          </Marquee>
        </div>
        <span className="text-xs text-gray-400">
          Disclaimer: All logos are used with adequate permissions. Opinions,
          interpretations, conclusions and recommendations are those of the FAIR
          Data Innovations Hub and are not necessarily endorsed by the other
          organizations mentioned on this website.
        </span>
      </div>
    </section>
  );
}
