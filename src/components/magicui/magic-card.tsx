'use client';

import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import React, { useCallback, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = `#262626`,
  gradientOpacity = 0.8,
  gradientFrom = `#9E7AFF`,
  gradientTo = `#FE8BBB`,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        const { clientX, clientY } = e;
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    },
    [mouseX, mouseY],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (cardRef.current && e.touches.length > 0) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        const { clientX, clientY } = e.touches[0];
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    },
    [mouseX, mouseY],
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (cardRef.current && e.touches.length > 0) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        const { clientX, clientY } = e.touches[0];
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    },
    [mouseX, mouseY],
  );

  // Reset on re-enter so we don't show a stale glow
  const handleMouseOut = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  const handleTouchEnd = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  useEffect(() => {
    // Mouse listeners on window
    window.addEventListener(`mousemove`, handleMouseMove, { passive: true });
    window.addEventListener(`mouseleave`, handleMouseOut);
    window.addEventListener(`mouseenter`, handleMouseEnter);

    // Touch listeners on the card element
    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener(`touchstart`, handleTouchStart, {
        passive: true,
      });
      cardElement.addEventListener(`touchmove`, handleTouchMove, {
        passive: true,
      });
      cardElement.addEventListener(`touchend`, handleTouchEnd, {
        passive: true,
      });
      cardElement.addEventListener(`touchcancel`, handleTouchEnd, {
        passive: true,
      });
    }

    // Also reset when the window/tab is not active
    const handleWindowBlur = () => handleMouseOut();
    const handleVisibility = () => {
      if (document.visibilityState !== `visible`) {
        handleMouseOut();
      }
    };
    window.addEventListener(`blur`, handleWindowBlur);
    document.addEventListener(`visibilitychange`, handleVisibility);

    return () => {
      window.removeEventListener(`mousemove`, handleMouseMove);
      window.removeEventListener(`mouseleave`, handleMouseOut);
      window.removeEventListener(`mouseenter`, handleMouseEnter);
      window.removeEventListener(`blur`, handleWindowBlur);
      document.removeEventListener(`visibilitychange`, handleVisibility);

      // Clean up touch listeners
      if (cardElement) {
        cardElement.removeEventListener(`touchstart`, handleTouchStart);
        cardElement.removeEventListener(`touchmove`, handleTouchMove);
        cardElement.removeEventListener(`touchend`, handleTouchEnd);
        cardElement.removeEventListener(`touchcancel`, handleTouchEnd);
      }
    };
  }, [
    handleMouseMove,
    handleMouseOut,
    handleMouseEnter,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  return (
    <div
      ref={cardRef}
      className={cn(`group relative rounded-[inherit]`, className)}
    >
      <motion.div
        className="bg-border pointer-events-none absolute inset-0 rounded-[inherit] duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
          ${gradientFrom}, 
          ${gradientTo}, 
          var(--border) 100%
          )
          `,
        }}
      />
      <div className="bg-background absolute inset-px rounded-[inherit]" />
      <motion.div
        className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
