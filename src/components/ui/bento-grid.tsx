import { useState } from 'react';

import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  animated = true,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  animated?: boolean;
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    if (animated) {
      setIsPressed(true);
      setIsTouched(true);
    }
  };

  const handleTouchEnd = () => {
    if (animated) {
      setIsPressed(false);
      // Keep touched state for a brief moment to show the effect
      setTimeout(() => setIsTouched(false), 200);
    }
  };

  const handleMouseEnter = () => {
    if (animated) {
      setIsTouched(true);
    }
  };

  const handleMouseLeave = () => {
    if (animated) {
      setIsTouched(false);
      setIsPressed(false);
    }
  };

  return (
    <div
      className={cn(
        `group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4`,
        // Base transition classes when animations are enabled
        animated ? `transition-all duration-300 ease-out` : ``,
        // Hover effects for desktop
        animated ? `hover:scale-[1.02] hover:shadow-xl` : ``,
        // Touch/pressed effects for mobile
        animated && isPressed ? `scale-[0.98] shadow-lg` : ``,
        animated && isTouched ? `shadow-xl` : ``,
        // Dark mode styles
        `dark:border-white/[0.2] dark:bg-black dark:shadow-none`,
        className,
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {header}
      <div
        className={cn(
          // Base transition when animations are enabled
          animated ? `transition-all duration-300 ease-out` : ``,
          // Transform effects for both hover and touch
          animated && (isTouched || isPressed)
            ? `translate-x-1 translate-y-[-2px]`
            : ``,
        )}
      >
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
