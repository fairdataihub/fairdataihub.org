import { Icon } from '@iconify/react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { variants } from '@/utils/animationVariants';
import downloadPhoto from '@/utils/downloadPhoto';
import { range } from '@/utils/range';
import type { ImageProps, SharedModalProps } from '@/utils/types';

export default function SharedModal({
  index,
  images,
  changePhotoId,
  closeModal,
  navigation,
  currentPhoto,
  direction,
}: SharedModalProps) {
  const [loaded, setLoaded] = useState(false);

  const filteredImages = images?.filter((img: ImageProps) =>
    range(index - 15, index + 15).includes(img.id),
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (images && index < images.length - 1) {
        changePhotoId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    },
    trackMouse: true,
  });

  const currentImage = images ? images[index] : currentPhoto;
  const mainUrl = `https://fairdataihub-gallery-s.b-cdn.net/${currentImage?.folder}/${currentImage?.name}`;

  return (
    <MotionConfig
      transition={{
        x: { type: `spring`, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className="relative z-50 flex h-full w-full max-w-7xl items-center justify-center"
        {...handlers}
      >
        <div className="relative h-full w-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex h-full w-full items-center justify-center"
            >
              <Image
                src={mainUrl}
                width={currentImage?.width}
                height={currentImage?.height}
                priority
                className="max-h-[90vh] max-w-[90vw] object-contain"
                alt={
                  currentImage?.alt ||
                  currentImage?.description ||
                  `Gallery image`
                }
                onLoad={() => setLoaded(true)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {loaded && (
          <>
            {navigation && (
              <>
                {index > 0 && (
                  <button
                    className="pointer-events-auto absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                    style={{ transform: `translate3d(0, 0, 0)` }}
                    onClick={() => changePhotoId(index - 1)}
                  >
                    <Icon icon="mdi:chevron-left" className="h-6 w-6" />
                  </button>
                )}
                {images && index + 1 < images.length && (
                  <button
                    className="pointer-events-auto absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                    style={{ transform: `translate3d(0, 0, 0)` }}
                    onClick={() => changePhotoId(index + 1)}
                  >
                    <Icon icon="mdi:chevron-right" className="h-6 w-6" />
                  </button>
                )}
              </>
            )}

            <div className="pointer-events-auto absolute right-0 top-[80px] flex items-center gap-2 p-3 text-white">
              {
                <a
                  href={mainUrl}
                  className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                  target="_blank"
                  title="Open fullsize version"
                  rel="noreferrer"
                >
                  <Icon icon="mdi:open-in-new" className="h-5 w-5" />
                </a>
              }
              <button
                onClick={() => downloadPhoto(mainUrl, `${index}.jpg`)}
                className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                title="Download fullsize version"
              >
                <Icon icon="mdi:download" className="h-5 w-5" />
              </button>
            </div>

            <div className="pointer-events-auto absolute left-0 top-[80px] flex items-center gap-2 p-3 text-white">
              <button
                onClick={() => closeModal()}
                className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
              >
                {navigation ? (
                  <Icon icon="ep:close-bold" className="h-5 w-5" />
                ) : (
                  <Icon icon="mdi:chevron-right" className="h-5 w-5" />
                )}
              </button>
            </div>
          </>
        )}

        {navigation && images && (
          <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
            <motion.div
              initial={false}
              className="mx-auto mb-6 mt-6 flex aspect-[3/2] h-14"
            >
              <AnimatePresence initial={false}>
                {filteredImages?.map(({ folder, name, id }) => {
                  const thumbUrl = `https://fairdataihub-gallery-s.b-cdn.net/${folder}/${name}`;
                  return (
                    <motion.button
                      key={id}
                      initial={{
                        width: `0%`,
                        x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                      }}
                      animate={{
                        scale: id === index ? 1.25 : 1,
                        width: `100%`,
                        x: `${Math.max(index * -100, 15 * -100)}%`,
                      }}
                      exit={{ width: `0%` }}
                      onClick={() => changePhotoId(id)}
                      className={`${
                        id === index
                          ? `z-20 rounded-md shadow shadow-black/50`
                          : `z-10`
                      } ${id === 0 ? `rounded-l-md` : ``} ${
                        id === images.length - 1 ? `rounded-r-md` : ``
                      } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                    >
                      <Image
                        alt="thumbnail"
                        width={180}
                        height={120}
                        className={`${
                          id === index
                            ? `brightness-110 hover:brightness-110`
                            : `brightness-50 contrast-125 hover:brightness-75`
                        } h-full transform object-cover transition`}
                        src={thumbUrl}
                      />
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </div>
    </MotionConfig>
  );
}
