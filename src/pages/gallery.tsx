import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import Modal from '@/components/gallery/Modal';
import Seo from '@/components/seo/seo';

import imagesData from '@/public/gallery/images.json';
import { useLastViewedPhoto } from '@/utils/useLastViewedPhoto';

import getBase64ImageUrl from '../utils/generateBlurPlaceholder';
import type { ImageProps } from '../utils/types';

type Props = {
  images: ImageProps[];
};

const Gallery: NextPage<Props> = ({ images }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
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
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content shadow-highlight after:shadow-highlight relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-lg lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                {/* <Bridge /> */}
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            {/* <Logo /> */}
            <h1 className="mb-4 mt-8 text-base font-bold uppercase tracking-widest">
              Gallery Photos
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              If you would like a photo remove, please send us a message with
              the link of the photo through our contact form
            </p>
          </div>
          {images.map(
            ({ id, uuid, width, height, blurDataUrl, description }) => (
              <Link
                key={id}
                href={`/?photoId=${id}`}
                as={`/p/${id}`}
                ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
                shallow
                className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
              >
                <Image
                  alt={description || `Gallery photo`}
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: `translate3d(0, 0, 0)` }}
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  src={`https://ucarecdn.com/${uuid}/-/resize/720x/-/quality/smart/-/format/auto/`}
                  width={720}
                  height={Math.round((height / width) * 720)} // keep aspect ratio
                  sizes="(max-width: 640px) 100vw,
             (max-width: 1280px) 50vw,
             (max-width: 1536px) 33vw,
             25vw"
                />
              </Link>
            ),
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;

export async function getStaticProps() {
  const data: Array<{
    uuid?: string;
    format?: string;
    description?: string;
    date?: string;
    width: number;
    height: number;
  }> = JSON.parse(imagesData);

  // Give each item a numeric id like the article does for routing
  const reducedResults: ImageProps[] = data.map((img, i) => ({
    id: i,
    width: img.width,
    height: img.height,
    public_id: img.public_id, // keep while you finish the swap
    format: img.format,
    uuid: img.uuid, // for Uploadcare later
    description: img.description,
    date: img.date,
  }));

  // Build LQIP placeholders just like the blog (tiny image -> base64)
  const blurImagePromises = reducedResults.map((image) =>
    getBase64ImageUrl(image),
  );
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);
  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return { props: { images: reducedResults } };
}
