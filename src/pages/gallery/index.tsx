import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import Modal from '@/components/gallery/Modal';
import Seo from '@/components/seo/seo';

import GALLERY_JSON from '@/public/gallery/images.json';
import { groupByYear, toBuckets } from '@/utils/galleryLayout';
import { safeLqip, safeProbe } from '@/utils/imageFetch';
import type { ImageProps } from '@/utils/types';
import { useLastViewedPhoto } from '@/utils/useLastViewedPhoto';
import { useMediaColumns } from '@/utils/useMediaColumns';

type Props = { images: ImageProps[] };

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

  const colCount = useMediaColumns();
  const byYear = groupByYear(images, getYear);

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
          <Modal images={images} onClose={() => setLastViewedPhoto(photoId)} />
        )}

        {/* gradient glow parallax layer */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[720px] w-[1400px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(211,75,171,0.30),rgba(211,75,171,0.12)_40%,transparent_75%)] blur-3xl" />
        </div>

        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="mb-10 w-full">
              <h1 className="py-2 text-4xl font-black">Photo Gallery</h1>
              <p className="font-asap text-xl text-black sm:text-lg">
                If you would like a photo removed, please send us a message with
                the link of the photo through our{` `}
                <Link
                  className="text-url hover-underline-animation"
                  href="/contact-us"
                >
                  contact form
                </Link>
                .
              </p>
            </div>
          </div>

          {byYear.map(([year, yearImages]) => {
            // distribute this year's images across N columns
            const buckets = toBuckets(yearImages, colCount);

            return (
              <div key={`year-section-${year}`} className="mb-10">
                <div className="my-8 w-full">
                  <div className="flex items-center">
                    <div className="h-px flex-1 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400" />

                    <span className="mx-6 select-none text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                      {year}
                    </span>

                    <div className="h-px flex-1 rounded-lg bg-gradient-to-l from-gray-200 via-gray-300 to-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {buckets.map((col, colIdx) => (
                    <div
                      key={`y${year}-col${colIdx}`}
                      className="flex flex-col gap-4"
                    >
                      {col.map(
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
                                id === Number(lastViewedPhoto)
                                  ? lastViewedPhotoRef
                                  : null
                              }
                              shallow
                              className="group relative block cursor-pointer"
                            >
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
                                      ? (() => {
                                          const [y, m, d] = (date || ``).split(
                                            `-`,
                                          );
                                          const local = new Date(
                                            Number(y),
                                            Number(m) - 1,
                                            Number(d),
                                          );
                                          return local.toLocaleDateString(
                                            `en-US`,
                                            {
                                              year: `numeric`,
                                              month: `short`,
                                              day: `numeric`,
                                            },
                                          );
                                        })()
                                      : null}
                                  </p>
                                  <p className="line-clamp-2 text-sm font-semibold text-white">
                                    {description || alt || ` `}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          );
                        },
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;

export const getStaticProps: GetStaticProps<Props> = async () => {
  let i = 0;

  //reverse the GALLERY_JSON
  const reversed_GALLERY_JSON = [...GALLERY_JSON].reverse();

  // Process all events and their images concurrently
  const imagePromises = reversed_GALLERY_JSON.flatMap((event) =>
    event.images.map(async (img) => {
      const imageUrl = encodeURI(
        `https://fairdataihub-gallery-s.b-cdn.net/${event.folder}/${img.name}`,
      );
      const { width, height } = await safeProbe(imageUrl);
      const blurDataUrl = await safeLqip(imageUrl);

      return {
        id: i++,
        folder: event.folder,
        name: img.name,
        alt: img.alt,
        description: event.description,
        date: event.date,
        width,
        height,
        blurDataUrl,
      };
    }),
  );

  const results = (await Promise.all(imagePromises)).flat();

  //reassign the id to the images
  results.forEach((img, idx) => (img.id = idx));

  return { props: { images: results } };
};
