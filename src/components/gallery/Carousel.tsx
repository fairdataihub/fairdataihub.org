/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import useKeypress from 'react-use-keypress';

import downloadPhoto from '@/utils/downloadPhoto';
import type { ImageProps } from '@/utils/types';

const CDN_BASE = `https://cdn.fairdataihub.org/gallery`;
type CarouselProps = {
  images: ImageProps[];
  index: number;
  onClose?: () => void;
  onSlideChange?: (index: number) => void;
};

export default function Carousel({
  images,
  index,
  onClose,
  onSlideChange,
}: CarouselProps) {
  const router = useRouter();
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  useEffect(() => {
    if (nav1 != null) {
      sliderRef1.current?.slickGoTo(index);
    }
  }, [index, nav1]);

  function closeModal() {
    if (onClose) {
      onClose();
    } else {
      router.push(`/gallery`);
    }
  }

  useKeypress(`Escape`, closeModal);

  const mainSettings = {
    asNavFor: nav2 ?? undefined,
    ref: (slider: Slider | null) => {
      (sliderRef1 as React.MutableRefObject<Slider | null>).current = slider;
    },
    initialSlide: index,
    afterChange: (current: number) => {
      if (onSlideChange) {
        onSlideChange(current);
      } else {
        const img = images[current];
        if (img) {
          router.replace(`/gallery/p/${img.id}`, undefined, {
            shallow: true,
          });
        }
      }
    },
    arrows: true,
    fade: true,
  };

  const thumbSettings = {
    asNavFor: nav1 ?? undefined,
    ref: (slider: Slider | null) => {
      (sliderRef2 as React.MutableRefObject<Slider | null>).current = slider;
    },
    slidesToShow: Math.min(images.length, 10),
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: true,
    centerMode: images.length > 10,
    centerPadding: `8px`,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(images.length, 4) },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: Math.min(images.length, 3) },
      },
    ],
  };

  if (!images?.length) return null;

  return (
    <div className="relative">
      <div className="fixed inset-0 z-[5] flex flex-col bg-black pt-20">
        <button
          type="button"
          className="absolute inset-0 z-0 cursor-default"
          onClick={closeModal}
          aria-label="Close"
        />
        <div className="relative z-20 flex min-h-0 flex-1 flex-col items-center justify-center px-4 pt-20 pb-4">
          <Slider
            {...mainSettings}
            className="gallery-main-slider min-h-0 w-full max-w-[90vw] flex-1"
          >
            {images.map((img) => {
              return (
                <div
                  key={img.id}
                  className="flex h-full w-full items-center justify-center py-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${CDN_BASE}/${img.folder}/${img.name}`}
                    alt={img.alt || img.description || `Gallery image`}
                    className="z-5 h-full w-full object-contain"
                  />
                </div>
              );
            })}
          </Slider>
          <style jsx global>{`
            .gallery-main-slider .slick-list,
            .gallery-main-slider .slick-track {
              height: 100%;
            }
            .gallery-main-slider .slick-slide {
              height: 100%;
            }
            .gallery-main-slider .slick-slide > div {
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>

          <div className="pointer-events-none absolute top-4 right-0 left-0 z-30 flex justify-center px-4">
            <div className="max-w-[80ch] rounded-full bg-black/55 px-4 py-2 text-white shadow-lg backdrop-blur">
              <span className="text-xs opacity-80 sm:text-sm">
                {images[index]?.date ?? ``}
              </span>
              {(images[index]?.description || images[index]?.alt) && (
                <>
                  <span className="mx-2 opacity-40">•</span>
                  <span className="text-xs sm:text-sm">
                    {images[index]?.description || images[index]?.alt}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="pointer-events-auto absolute top-4 right-0 z-30 flex items-center gap-2 p-3 text-white">
            <a
              href={`${CDN_BASE}/${images[index]?.folder}/${images[index]?.name}`}
              className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
              target="_blank"
              rel="noreferrer"
              title="Open fullsize version"
            >
              <Icon icon="mdi:open-in-new" className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => {
                const img = images[index];
                const filename =
                  img?.name || (img?.id ? `${img.id}.jpg` : `${index}.jpg`);
                downloadPhoto(
                  `${CDN_BASE}/${img?.folder}/${img?.name}`,
                  filename,
                );
              }}
              className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
              title="Download fullsize version"
            >
              <Icon icon="mdi:download" className="h-5 w-5" />
            </button>
          </div>

          <div className="pointer-events-auto absolute top-4 left-0 z-30 p-3 text-white">
            <button
              type="button"
              onClick={closeModal}
              className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
              aria-label="Close"
            >
              <Icon icon="ep:close-bold" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {images.length > 1 && (
          <div className="z-20 border-t border-white/10 bg-black/40 py-4">
            <div className="mx-auto max-w-[90vw] px-2">
              <Slider {...thumbSettings}>
                {images.map((img) => {
                  const thumbUrl = `${CDN_BASE}/${img.folder}/${img.name}`;
                  return (
                    <div key={img.id} className="px-1">
                      <div className="aspect-[3/2] overflow-hidden rounded-md text-white">
                        <Image
                          src={thumbUrl}
                          alt=""
                          width={90}
                          height={60}
                          className="z-5 h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
