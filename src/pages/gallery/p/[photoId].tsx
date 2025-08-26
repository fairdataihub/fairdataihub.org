import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import Carousel from '@/components/gallery/Carousal';
import Seo from '@/components/seo/seo';

import updatedGallery from '@/public/gallery/updated_gallery.json';
import getBase64ImageUrl from '@/utils/generateBlurPlaceholder';
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
        templateTitle="Fairdataihub Photo Gallery"
        templateDescription="A collection of photos from the Fairdataihub Organization"
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

  (
    updatedGallery as Array<{
      folder: string;
      date?: string;
      description?: string;
      images: Array<{
        name: string;
        alt?: string;
        width?: number;
        height?: number;
      }>;
    }>
  ).forEach((event) => {
    event.images.forEach((img) => {
      flat.push({
        id: i++,
        folder: event.folder,
        name: img.name,
        alt: img.alt,
        description: event.description,
        date: event.date,
        width: img.width ?? 1920,
        height: img.height ?? 1080,
      });
    });
  });

  const idParam = Number((context.params as { photoId: string }).photoId);
  const currentPhoto = flat.find((img) => img.id === idParam);

  if (!currentPhoto) {
    return { notFound: true };
  }

  // LQIP for this single photo so the modal background looks nice
  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

  return { props: { currentPhoto } };
};

export async function getStaticPaths() {
  const paths: { params: { photoId: string } }[] = [];
  let i = 0;

  (
    updatedGallery as Array<{ folder: string; images: Array<{ name: string }> }>
  ).forEach((event) => {
    event.images.forEach(() => {
      paths.push({ params: { photoId: i.toString() } });
      i++;
    });
  });

  return { paths, fallback: false };
}
