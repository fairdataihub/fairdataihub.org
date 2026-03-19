import { Dialog, DialogBackdrop } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import type { ImageProps } from '@/utils/types';

import Carousel from './Carousel';

export default function Modal({ images }: { images: ImageProps[] }) {
  const router = useRouter();
  const photoId =
    typeof router.query.photoId === `string` ? router.query.photoId : ``;
  const index =
    photoId === ``
      ? 0
      : Math.max(
          0,
          images.findIndex((img) => img.id === photoId),
        );

  function handleClose() {
    router.push(`/gallery`, undefined, { shallow: true });
  }

  function handleSlideChange(slideIndex: number) {
    const img = images[slideIndex];
    if (img) {
      router.replace(
        { pathname: `/gallery`, query: { photoId: img.id } },
        undefined,
        { shallow: true },
      );
    }
  }

  return (
    <Dialog
      static
      open
      onClose={handleClose}
      className="fixed inset-0 z-[5] flex items-center justify-center"
    >
      <DialogBackdrop
        as={motion.div}
        className="fixed inset-0 z-[5] bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <div className="relative z-[5] h-full w-full">
        <Carousel
          images={images}
          index={index}
          onClose={handleClose}
          onSlideChange={handleSlideChange}
        />
      </div>
    </Dialog>
  );
}
