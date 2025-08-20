import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import Carousel from '@/components/gallery/Carousal';
import Seo from '@/components/seo/seo';

import imagesData from '@/public/gallery/images.json';

import getBase64ImageUrl from '../../utils/generateBlurPlaceholder';
import type { ImageProps } from '../../utils/types';

const Gallery: NextPage = ({ currentPhoto }: { currentPhoto: ImageProps }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const index = Number(photoId);

  const _currentPhotoUrl = `https://ucarecdn.com/${currentPhoto.uuid}/-/resize/2560x/-/quality/smart/-/format/auto/`;

  return (
    <>
      <Seo
        templateTitle="Fairdataihub Photo Gallery"
        templateDescription="A collection of photos from the Fairdataihub Organization"
        templateUrl={`https://fairdataihub.org/p/${photoId}`}
        templateImage="https://kalai.fairdataihub.org/api/generate?app=fairdataihub&title=GalleryI&org=fairdataihub"
      />
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  );
};

export default Gallery;

export const getStaticProps: GetStaticProps<{
  currentPhoto: ImageProps;
}> = async (context) => {
  const reducedResults = imagesData.map((img, i) => ({
    id: i,
    width: img.width,
    height: img.height,
    uuid: img.uuid,
    description: img.description,
    date: img.date,
  }));

  const idParam = Number((context.params as { photoId: string }).photoId);
  const currentPhoto = reducedResults.find((img) => img.id === idParam);

  if (!currentPhoto) return { notFound: true };

  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

  return { props: { currentPhoto } };
};

export async function getStaticPaths() {
  const paths = imagesData.map((_, i) => ({
    params: { photoId: i.toString() },
  }));
  return { paths, fallback: false };
}
