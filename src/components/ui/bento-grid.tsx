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
  return (
    <div
      className={cn(
        `group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4`,
        // only include transition/hover classes when animations are enabled
        animated ? `transition duration-600 hover:shadow-xl` : ``,
        `dark:border-white/[0.2] dark:bg-black dark:shadow-none`,
        className,
      )}
    >
      {header}
      <div
        className={cn(
          // only include the translate/transition on the inner block when enabled
          animated
            ? `transition-all duration-600 group-hover/bento:translate-x-1`
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
