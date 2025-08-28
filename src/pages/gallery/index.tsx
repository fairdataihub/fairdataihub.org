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

  const getYear = (img: ImageProps) =>
    img.date
      ? new Date(img.date).getFullYear()
      : Number(img.folder.match(/^\d{4}/)?.[0]) || 0;

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

        {/* gradient glow layer */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[720px] w-[1400px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(211,75,171,0.30),rgba(211,75,171,0.12)_40%,transparent_75%)] blur-3xl" />
        </div>
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
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
            {(() => {
              let lastYear: number | null = null;

              return images.flatMap(
                (
                  {
                    id,
                    folder,
                    name,
                    width,
                    height,
                    blurDataUrl,
                    alt,
                    date,
                    description,
                  },
                  idx,
                ) => {
                  const imageUrl = encodeURI(
                    `https://fairdataihub-gallery-s.b-cdn.net/${folder}/${name}`,
                  );
                  const year = getYear({
                    id,
                    folder,
                    name,
                    width,
                    height,
                    blurDataUrl,
                    alt,
                    date,
                    description,
                  });

                  const pieces: JSX.Element[] = [];

                  if (year && year !== lastYear) {
                    lastYear = year;
                    pieces.push(
                      <div
                        key={`year-${year}-${idx}`}
                        className="my-8 w-full [column-span:all]"
                      >
                        <div className="flex items-center">
                          {/* horizontal line divider */}
                          <div className="h-px flex-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400" />

                          <div className="ml-4 select-none text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                            {year}
                          </div>
                        </div>
                      </div>,
                    );
                  }

                  // the card itself
                  pieces.push(
                    <Link
                      key={id}
                      href={`gallery/?photoId=${id}`}
                      as={`gallery/p/${id}`}
                      ref={
                        id === Number(lastViewedPhoto)
                          ? lastViewedPhotoRef
                          : null
                      }
                      shallow
                      className="group relative mb-5 block w-full cursor-pointer break-inside-avoid"
                    >
                      {/* container grows on hover */}
                      <div className="relative transform-gpu overflow-hidden rounded-lg shadow-sm transition duration-300 group-hover:scale-[1.03] group-hover:shadow-xl group-hover:shadow-black/10">
                        <Image
                          alt={alt || description || `Gallery photo`}
                          src={imageUrl}
                          width={width}
                          height={height}
                          placeholder="blur"
                          blurDataURL={blurDataUrl}
                          className="rounded-lg object-cover"
                        />

                        {/* hover overlay */}
                        <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* caption */}
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
                      </div>
                    </Link>,
                  );

                  return pieces;
                },
              );
            })()}
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
