'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { cn } from '@/lib/utils';

type FlipWordsProps = {
  words: string[];
  duration?: number;
  className?: string;
  intensity?: 'subtle' | 'minimal' | 'none';
};

export const FlipWords = ({
  words,
  duration = 3000,
  className,
  intensity = `subtle`,
}: FlipWordsProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  const currentWord = words[current];

  const startAnimation = useCallback(() => {
    setCurrent((i) => (i + 1) % words.length);
    setIsAnimating(true);
  }, [words.length]);

  // schedule flips, clean up on unmount/change
  useEffect(() => {
    if (!isAnimating) {
      timerRef.current = window.setTimeout(startAnimation, duration);
    }
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isAnimating, duration, startAnimation]);

  // gentler variants
  const variants = useMemo(() => {
    if (prefersReducedMotion || intensity === `none`) {
      return {
        container: {
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          exit: { opacity: 1 },
          transition: { duration: 0 },
        },
        word: {
          initial: { opacity: 1, y: 0, filter: `blur(0px)` },
          animate: { opacity: 1, y: 0, filter: `blur(0px)` },
          exit: { opacity: 1, y: 0, filter: `blur(0px)` },
          transition: { duration: 0 },
        },
        letter: {
          initial: { opacity: 1, y: 0, filter: `blur(0px)` },
          animate: { opacity: 1, y: 0, filter: `blur(0px)` },
        },
        wordDelay: 0,
        letterDelay: 0,
      };
    }

    const minimal = intensity === `minimal`;

    return {
      container: {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 },
        transition: {
          type: `tween`,
          ease: `easeOut`,
          duration: minimal ? 0.25 : 0.35,
        },
      },
      word: {
        initial: { opacity: 0, y: 6, filter: `blur(0px)` },
        animate: { opacity: 1, y: 0, filter: `blur(0px)` },
        exit: { opacity: 0, y: -6, filter: `blur(2px)` },
        transition: {
          type: `tween`,
          ease: `easeOut`,
          duration: minimal ? 0.25 : 0.35,
        },
      },
      letter: {
        initial: { opacity: 0, y: 4, filter: `blur(2px)` },
        animate: { opacity: 1, y: 0, filter: `blur(0px)` },
      },
      wordDelay: minimal ? 0.12 : 0.18,
      letterDelay: minimal ? 0.02 : 0.035,
    };
  }, [prefersReducedMotion, intensity]);

  return (
    <AnimatePresence
      mode="wait" // ensures exit finishes before the next enters (prevents visual clash)
      onExitComplete={() => setIsAnimating(false)}
    >
      <motion.div
        key={currentWord}
        initial={variants.container.initial}
        animate={variants.container.animate}
        exit={variants.container.exit}
        transition={variants.container.transition}
        className={cn(
          `relative z-10 -mr-2 inline-block pb-2 text-left text-[#D141A6] dark:text-neutral-100`,
          className,
        )}
        aria-live="polite"
      >
        {currentWord.split(` `).map((w, wi) => (
          <motion.span
            key={`${w}-${wi}`}
            initial={variants.word.initial}
            animate={variants.word.animate}
            exit={variants.word.exit}
            transition={{
              ...variants.word.transition,
              delay: wi * variants.wordDelay,
            }}
            className="inline-block whitespace-nowrap"
          >
            {w.split(``).map((ch, ci) => (
              <motion.span
                key={`${w}-${ci}`}
                initial={variants.letter.initial}
                animate={variants.letter.animate}
                transition={{
                  duration: 0.18,
                  delay: wi * variants.wordDelay + ci * variants.letterDelay,
                }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
