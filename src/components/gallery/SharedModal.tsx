import { Icon } from '@iconify/react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { variants } from '@/utils/animationVariants';
import downloadPhoto from '@/utils/downloadPhoto';
import { range } from '@/utils/range';
import type { ImageProps, SharedModalProps } from '@/utils/types';
import { bunnyUrl } from '@/utils/url';

const _BUNNY_BASE =
  process.env.NEXT_PUBLIC_BUNNY_BASE ||
  `https://fairdataihub-gallery-s.b-cdn.net`;

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
  const mainUrl = bunnyUrl(
    currentImage?.folder || ``,
    currentImage?.name || ``,
  );

  console.log(mainUrl);

  return (
    <MotionConfig
      transition={{
        x: { type: `spring`, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className="wide:h-full xl:taller-than-854:h-auto relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center"
        {...handlers}
      >
        <div className="w-full overflow-hidden">
          <div className="relative flex aspect-[3/2] items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute"
              >
                <Image
                  src={mainUrl}
                  width={navigation ? 1280 : 1920}
                  height={navigation ? 853 : 1280}
                  priority
                  className="object-contain"
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
        </div>

        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
          {loaded && (
            <div className="relative aspect-[3/2] max-h-full w-full">
              {navigation && (
                <>
                  {index > 0 && (
                    <button
                      className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                      style={{ transform: `translate3d(0, 0, 0)` }}
                      onClick={() => changePhotoId(index - 1)}
                    >
                      <Icon icon="mdi:chevron-left" className="h-6 w-6" />
                    </button>
                  )}
                  {images && index + 1 < images.length && (
                    <button
                      className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                      style={{ transform: `translate3d(0, 0, 0)` }}
                      onClick={() => changePhotoId(index + 1)}
                    >
                      <Icon icon="mdi:chevron-right" className="h-6 w-6" />
                    </button>
                  )}
                </>
              )}

              <div className="absolute right-0 top-0 flex items-center gap-2 p-3 text-white">
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

              <div className="absolute left-0 top-0 flex items-center gap-2 p-3 text-white">
                <button
                  onClick={() => closeModal()}
                  className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                >
                  {navigation ? (
                    <Icon icon="mdi:chevron-left" className="h-5 w-5" />
                  ) : (
                    <Icon icon="mdi:chevron-right" className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          )}

          {navigation && images && (
            <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
              <motion.div
                initial={false}
                className="mx-auto mb-6 mt-6 flex aspect-[3/2] h-14"
              >
                <AnimatePresence initial={false}>
                  {filteredImages?.map(({ folder, name, id }) => {
                    const thumbUrl = bunnyUrl(folder, name);
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
      </div>
    </MotionConfig>
  );
}
