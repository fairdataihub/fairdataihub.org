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
