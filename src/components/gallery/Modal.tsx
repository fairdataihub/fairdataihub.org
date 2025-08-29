import { Dialog, DialogBackdrop } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import useKeypress from 'react-use-keypress';

import type { ImageProps } from '@/utils/types';

import SharedModal from './SharedModal';

export default function Modal({
  images,
  onClose,
}: {
  images: ImageProps[];
  onClose?: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const initial = Number.isFinite(Number(router.query.photoId))
    ? Number(router.query.photoId)
    : 0;

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(initial);

  // Keep local state in sync with URL changes (back/forward)
  useEffect(() => {
    const next = Number(router.query.photoId);
    if (Number.isFinite(next) && next !== curIndex) {
      setCurIndex(next);
    }
  }, [router.query.photoId, curIndex]);

  function handleClose() {
    router.push(`/gallery`, undefined, { shallow: true });
    onClose?.();
  }

  function changePhotoId(newVal: number) {
    setDirection(newVal > curIndex ? 1 : -1);
    setCurIndex(newVal);
    router.push({ query: { photoId: newVal } }, `gallery/p/${newVal}`, {
      shallow: true,
    });
  }

  useKeypress(`ArrowRight`, () => {
    if (curIndex + 1 < images.length) {
      changePhotoId(curIndex + 1);
    }
  });
  useKeypress(`ArrowLeft`, () => {
    if (curIndex > 0) {
      changePhotoId(curIndex - 1);
    }
  });

  return (
    <Dialog
      static
      open
      onClose={() => handleClose()}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <DialogBackdrop
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation
      />
    </Dialog>
  );
}
