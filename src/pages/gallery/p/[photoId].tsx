import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { getPlaiceholder } from 'plaiceholder';
import probe from 'probe-image-size';

import Carousel from '@/components/gallery/Carousal';
import Seo from '@/components/seo/seo';

import GALLERY_JSON from '@/public/gallery/images.json';
import type { ImageProps } from '@/utils/types';

type Props = { currentPhoto: ImageProps };

const PhotoPage: NextPage<Props> = ({ currentPhoto }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const index = Number.isFinite(Number(photoId))
    ? Number(photoId)
    : currentPhoto.id;

  return (
    <>
      <Seo
        templateTitle="Gallery"
        templateDescription="A collection of photos from the FAIR Data Innovations Hub"
        templateUrl={`https://fairdataihub.org/gallery/p/${index}`}
        templateImage="https://kalai.fairdataihub.org/api/generate?app=fairdataihub&title=GalleryI&org=fairdataihub"
      />
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  );
};

export default PhotoPage;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const flat: ImageProps[] = [];
  let i = 0;

  const reversed_GALLERY_JSON = GALLERY_JSON.reverse();

  reversed_GALLERY_JSON.forEach((event) => {
    event.images.forEach((img) => {
      flat.push({
        id: i++,
        folder: event.folder,
        name: img.name,
        alt: img.alt,
        description: event.description,
        date: event.date,
        width: 0,
        height: 0,
        blurDataUrl: ``,
      });
    });
  });

  const idParam = Number((context.params as { photoId: string }).photoId);
  const currentPhoto = flat.find((img) => img.id === idParam);

  if (!currentPhoto) {
    return { notFound: true };
  }

  const imageUrl = encodeURI(
    `https://fairdataihub-gallery-s.b-cdn.net/${currentPhoto.folder}/${currentPhoto.name}`,
  );

  const { width, height } = await probe(imageUrl);

  currentPhoto.width = width;
  currentPhoto.height = height;

  const buffer = await fetch(imageUrl).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  // LQIP for this single photo so the modal background looks nice
  currentPhoto.blurDataUrl = (await getPlaiceholder(buffer)).base64;

  return { props: { currentPhoto } };
};

export async function getStaticPaths() {
  const paths: { params: { photoId: string } }[] = [];
  let i = 0;

  // Process all events and their images concurrently
  const reversed_GALLERY_JSON = GALLERY_JSON.reverse();

  reversed_GALLERY_JSON.forEach((event) => {
    event.images.forEach(() => {
      paths.push({ params: { photoId: i.toString() } });
      i++;
    });
  });

  return { paths, fallback: false };
}
