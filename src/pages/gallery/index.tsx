import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getPlaiceholder } from 'plaiceholder';
import probe from 'probe-image-size';
import { useEffect, useRef } from 'react';

import Modal from '@/components/gallery/Modal';
import Seo from '@/components/seo/seo';

import GALLERY_JSON from '@/public/gallery/images.json';
import type { ImageProps } from '@/utils/types';
import { useLastViewedPhoto } from '@/utils/useLastViewedPhoto';

type Props = {
  images: ImageProps[];
};

const Gallery: NextPage<Props> = ({ images }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current?.scrollIntoView({ block: `center` });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Seo
        templateTitle="Gallery"
        templateUrl="https://fairdataihub.org/gallery"
        templateDescription="A collection of photos from the FAIR Data Innovations Hub"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=Gallery&description=A%20collection%20of%20photos%20from%20the%20FAIR%20Data%20Innovations%20Hub&app=fairdataihub&org=fairdataihub"
      />
      <section className="py-10 pt-16">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}

        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* gradient glow layer */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              {/* centered ellipse that fades out */}
              <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(211,75,171,0.28),rgba(211,75,171,0.12)_35%,transparent_70%)] blur-2xl" />
            </div>

            <div className="-mt-4 mb-8 overflow-hidden rounded-2xl bg-white/60 shadow-md backdrop-blur">
              <div className="mx-0 my-0 rounded-[1.05rem]">
                <div className="px-6 py-10 sm:px-8">
                  <h1 className="text-center text-2xl font-extrabold uppercase tracking-widest text-gray-900">
                    FAIRDATAIHUB&apos;S PHOTO GALLERY
                  </h1>
                  <p className="mx-auto mt-3 max-w-prose text-center text-gray-700">
                    If you would like a photo removed, please send us a message
                    with the link of the photo through our contact form.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            {images.map(
              ({
                id,
                folder,
                name,
                width,
                height,
                blurDataUrl,
                alt,
                date,
                description,
              }) => {
                const imageUrl = encodeURI(
                  `https://fairdataihub-gallery-s.b-cdn.net/${folder}/${name}`,
                );
                return (
                  <Link
                    key={id}
                    href={`gallery/?photoId=${id}`}
                    as={`gallery/p/${id}`}
                    ref={
                      id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null
                    }
                    shallow
                    className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
                  >
                    <Image
                      alt={alt || description || `Gallery photo`}
                      className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                      style={{ transform: `translate3d(0, 0, 0)` }}
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                      src={imageUrl}
                      width={width}
                      height={height}
                    />

                    <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-[11px] font-medium tracking-wide text-white/80">
                        {date
                          ? new Date(date).toLocaleDateString(`en-US`, {
                              year: `numeric`,
                              month: `short`,
                              day: `numeric`,
                            })
                          : null}
                      </p>
                      <p className="line-clamp-2 text-sm font-semibold text-white">
                        {description || alt || ` `}
                      </p>
                    </div>
                  </Link>
                );
              },
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;

export const getStaticProps: GetStaticProps<Props> = async () => {
  let i = 0;

  //reverse the GALLERY_JSON
  const reversed_GALLERY_JSON = GALLERY_JSON.reverse();

  // Process all events and their images concurrently
  const imagePromises = reversed_GALLERY_JSON.flatMap(async (event) => {
    return Promise.all(
      event.images.map(async (img) => {
        const imageUrl = encodeURI(
          `https://fairdataihub-gallery-s.b-cdn.net/${event.folder}/${img.name}`,
        );

        const { width, height } = await probe(imageUrl);

        const buffer = await fetch(imageUrl).then(async (res) =>
          Buffer.from(await res.arrayBuffer()),
        );

        const { base64 } = await getPlaiceholder(buffer);

        return {
          id: i++,
          folder: event.folder,
          name: img.name,
          alt: img.alt,
          description: event.description,
          date: event.date,
          width,
          height,
          blurDataUrl: base64,
        };
      }),
    );
  });

  const reducedResults = await Promise.all(imagePromises);
  const flattenedResults = reducedResults.flat();

  //reassign the id to the images
  flattenedResults.forEach((image, index) => {
    image.id = index;
  });

  return { props: { images: flattenedResults } };
};
