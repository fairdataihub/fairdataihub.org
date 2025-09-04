import Image from 'next/image';
import { useRouter } from 'next/router';
import useKeypress from 'react-use-keypress';

import type { ImageProps } from '@/utils/types';
import { useLastViewedPhoto } from '@/utils/useLastViewedPhoto';

import SharedModal from './SharedModal';

export default function Carousel({
  index,
  currentPhoto,
}: {
  index: number;
  currentPhoto: ImageProps;
}) {
  const router = useRouter();
  const [, setLastViewedPhoto] = useLastViewedPhoto();

  function closeModal() {
    setLastViewedPhoto(currentPhoto.id);
    router.push(`/gallery`, undefined, { shallow: true });
  }

  useKeypress(`Escape`, closeModal);

  return (
    <div className="relative">
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          className="absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl"
          onClick={closeModal}
        >
          {currentPhoto.blurDataUrl && (
            <Image
              src={currentPhoto.blurDataUrl}
              className="pointer-events-none"
              alt="blurred background"
              fill
              priority
            />
          )}
        </button>
        <SharedModal
          index={index}
          changePhotoId={() => {}}
          currentPhoto={currentPhoto}
          closeModal={closeModal}
          navigation={false}
        />
      </div>
    </div>
  );
}
