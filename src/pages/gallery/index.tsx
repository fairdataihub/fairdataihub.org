import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import Modal from '@/components/gallery/Modal';
import Seo from '@/components/seo/seo';

import updatedGallery from '@/public/gallery/updated_gallery.json';
import getBase64ImageUrl from '@/utils/generateBlurPlaceholder';
import type { ImageProps } from '@/utils/types';
import { useLastViewedPhoto } from '@/utils/useLastViewedPhoto';

const BUNNY_BASE = `https://fairdataihub-gallery-s.b-cdn.net`;

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
        templateDescription="Welcome to the fairdataihub gallery"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=Gallery&description=Welcome%20to%20the%20fairdataihub%20gallery!&app=fairdataihub&org=fairdataihub"
      />
      <section className="py-10 pt-16">
        {photoId && (
          <Modal images={images} onClose={() => setLastViewedPhoto(photoId)} />
        )}

        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="-mt-4 mb-8 rounded-2xl bg-white/50 px-6 py-10 shadow-xl ring-1 ring-black/5 backdrop-blur sm:px-8">
              <h1 className="text-center text-2xl font-extrabold uppercase tracking-widest text-gray-900">
                FAIRDATAIHUB&apos;S PHOTO GALLERY
              </h1>
              <p className="mx-auto mt-3 max-w-prose text-center text-gray-700">
                If you would like a photo removed, please send us a message with
                the link of the photo through our contact form.
              </p>
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
                  description,
                }) => {
                  const imageUrl = encodeURI(`${BUNNY_BASE}/${folder}/${name}`);
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
                      className="group relative mb-5 block w-full"
                    >
                      <Image
                        alt={alt || description || `Gallery photo`}
                        placeholder={blurDataUrl ? `blur` : `empty`}
                        blurDataURL={blurDataUrl}
                        src={imageUrl}
                        width={720}
                        height={Math.round((height / width) * 720)}
                        sizes="(max-width: 640px) 100vw,
                       (max-width: 1280px) 50vw,
                       (max-width: 1536px) 33vw,
                       25vw"
                        className="rounded-lg brightness-90 transition [content-visibility:auto] group-hover:brightness-110"
                      />
                    </Link>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;

// Currently fetching all images, will improve performance
export const getStaticProps: GetStaticProps<Props> = async () => {
  const reducedResults: ImageProps[] = [];
  let i = 0;

  (
    updatedGallery as Array<{
      folder: string;
      date?: string;
      description?: string;
      images: Array<{ name: string; alt?: string }>;
    }>
  ).forEach((event) => {
    event.images.forEach((img) => {
      reducedResults.push({
        id: i++,
        folder: event.folder,
        name: img.name,
        alt: img.alt,
        description: event.description,
        date: event.date,
        width: 1920,
        height: 1080,
      });
    });
  });

  const blurImagePromises = reducedResults.map((image) =>
    getBase64ImageUrl(image),
  );
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);
  for (let j = 0; j < reducedResults.length; j++) {
    reducedResults[j].blurDataUrl = imagesWithBlurDataUrls[j];
  }

  return { props: { images: reducedResults } };
};
