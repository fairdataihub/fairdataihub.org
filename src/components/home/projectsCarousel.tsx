import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { A11y, Autoplay, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/thumbs';

export default function ProjectsCarousel() {
  const thumbnails = [
    {
      src: `/images/carousel/sodasparc.png`,
      alt: `Navigate to SODA for SPARC card`,
      width: 150,
      height: 50,
    },
    {
      src: `/images/carousel/aireadi-logo.png`,
      alt: `Navigate to AI-READI card`,
      width: 555 / 6,
      height: 569 / 6,
    },
    {
      src: `/images/carousel/FAIRshare-full.png`,
      alt: `Navigate to FAIRshare card`,
      width: 200,
      height: 40,
    },
    {
      src: `/images/carousel/knowmore.png`,
      alt: `Navigate to Know More card`,
      width: 150,
      height: 30,
    },
    {
      src: `/images/carousel/sparclink.png`,
      alt: `Navigate to SPARClink card`,
      width: 150,
      height: 40,
    },
    {
      src: `/images/carousel/aqua.png`,
      alt: `Navigate to Aqua card`,
      width: 150,
      height: 85,
    },
  ];

  const projectsList = [
    {
      name: `SODA for SPARC`,
      id: `soda-for-sparc`,
      imageUrl: `/images/carousel/sodasparc.png`,
      imageWidth: 320,
      imageHeight: 103,
      description: `SODA (Software to Organize Data Automatically) is a desktop software intended to facilitate the data organization and submission process according to the FAIR SPARC data standards.`,
      page: `/sodaforsparc`,
    },
    {
      name: `AI-READI`,
      id: `ai-readi`,
      imageUrl: `/images/carousel/aireadi-logo.png`,
      imageWidth: 555 / 4.5,
      imageHeight: 569 / 4.5,
      description: `The AI-READI project seeks to create a flagship AI-ready and ethically-sourced dataset that will support future AI-drive research projects to provide critical insights into type 2 diabetes.`,
      page: `/aireadi`,
    },
    {
      name: `FAIRshare`,
      id: `fairshare`,
      imageUrl: `/images/carousel/FAIRshare-full.png`,
      imageWidth: 320,
      imageHeight: 60,
      description: `FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their biomedical research data and software according to applicable FAIR guidelines.`,
      page: `/fairshare`,
    },
    {
      name: `KnowMore`,
      id: `knowmore`,
      imageUrl: `/images/carousel/knowmore.png`,
      imageWidth: 320,
      imageHeight: 68,
      description: `KnowMore is an automated knowledge discovery tool that allows users of the portal to visualize, in just a few clicks, potential similarities, differences, and connections between multiple SPARC datasets of their choice.`,
      page: `/knowmore`,
    },
    {
      name: `SPARClink`,
      id: `sparclink`,
      imageUrl: `/images/carousel/sparclink.png`,
      imageWidth: 320,
      imageHeight: 80,
      description: `SPARClink is a system that queries publications using open source tools and platforms and create an interactable visualization that showcases the impact that SPARC and their FAIR data practices have in advancing the field of bioelectronic medicine.`,
      page: `/sparclink`,
    },
    {
      name: `AQUA`,
      id: `aqua`,
      imageUrl: `/images/carousel/aqua.png`,
      imageWidth: 3577 / 14,
      imageHeight: 1985 / 14,
      description: `AQUA (Advanced QUery Architecture for the SPARC Portal) improves the SPARC Portal by making the search engine smarter at understanding user search keywords, enhancing the result display, and providing users with better result filtering and sorting options.`,
      page: `/aqua`,
    },
  ];

  const [SwiperThumbs, setSwiperThumbs] = useState(null);

  return (
    <>
      <div className="mx-auto h-auto w-full max-w-screen-lg px-4 pb-3 pt-1">
        <div className="mb-4 flex flex-col items-center justify-center">
          <h2 className="header-gradient-background my-2 text-center text-4xl font-extrabold sm:text-4xl">
            Current Projects
          </h2>
          <p className="w-full max-w-2xl text-center font-asap text-xl">
            These are the projects we are working on at the moment:
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, Thumbs, A11y]}
          slidesPerView={1}
          navigation
          setWrapperSize={true}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 6000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          mousewheel={{ releaseOnEdges: true }}
          thumbs={{
            swiper:
              SwiperThumbs && !SwiperThumbs[`destroyed`] ? SwiperThumbs : null,
          }}
          className="h-full"
        >
          {projectsList.map((project, index) => (
            <SwiperSlide
              key={index}
              className="my-auto flex h-full items-center justify-center py-10"
            >
              <section className="mx-auto my-auto flex h-full w-4/5 flex-row items-center justify-center rounded-lg border border-slate-200 px-5 py-10 text-gray-600 shadow-xl">
                <div className="container mx-auto flex h-full flex-col items-center justify-center">
                  <div className="relative my-5 flex flex-row items-center justify-center sm:py-0 lg:max-w-lg">
                    <Image
                      className="relative"
                      src={project.imageUrl}
                      alt={project.name + ` logo`}
                      width={project.imageWidth}
                      height={project.imageHeight}
                    />
                  </div>
                  <div className="my-4 flex h-full flex-col items-center text-center sm:mb-16 md:mb-0">
                    <p className="w-full text-left font-asap text-base text-black sm:text-center md:text-base lg:text-lg">
                      {project.description}
                    </p>

                    <div className="flex w-full justify-center py-4">
                      <Link href={project.page} passHref>
                        <button
                          className="inline-flex rounded border-0 bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition hover:ring-pink-600 focus:outline-none focus:ring-pink-600 sm:ml-4 md:text-base lg:text-lg"
                          data-umami-event="Projects Carousel link"
                          data-umami-value={project.id}
                        >
                          Learn more about {project.name}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          watchSlidesProgress={true}
          className="thumbs-swiper hidden sm:block"
          // @ts-expect-error will fix this later
          onSwiper={(swiper) => setSwiperThumbs(swiper)}
        >
          {thumbnails.map((thumbnail, index) => (
            <SwiperSlide virtualIndex={index} key={index}>
              <div className="thumbnail relative h-max w-max">
                <Image
                  className="px-3 py-2"
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  width={thumbnail.width}
                  height={thumbnail.height}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
