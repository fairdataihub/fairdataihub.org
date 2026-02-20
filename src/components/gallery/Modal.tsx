import { Dialog, DialogBackdrop } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import type { ImageProps } from '@/utils/types';

import Carousel from './Carousal';

export default function Modal({ images }: { images: ImageProps[] }) {
  const router = useRouter();
  const index = Number.isFinite(Number(router.query.photoId))
    ? Number(router.query.photoId)
    : 0;

  function handleClose() {
    router.push(`/gallery`, undefined, { shallow: true });
  }

  function handleSlideChange(current: number) {
    router.replace(
      { pathname: `/gallery`, query: { photoId: current } },
      undefined,
      { shallow: true },
    );
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
          index={images.length - index}
          onClose={handleClose}
          onSlideChange={handleSlideChange}
        />
      </div>
    </Dialog>
  );
}
