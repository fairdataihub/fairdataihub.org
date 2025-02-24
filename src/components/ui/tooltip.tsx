import React from 'react';

export interface TooltipProps {
  tooltipContent: React.ReactNode;
  children: React.ReactNode;
  placement?: 'top' | 'bottom';
}

const Tooltip: React.FC<TooltipProps> = ({
  tooltipContent,
  children,
  placement = `top`,
}) => {
  const containerClass =
    placement === `top`
      ? `absolute bottom-full mb-1 hidden flex-col items-center group-hover:flex`
      : `absolute top-full mt-1 hidden flex-col items-center group-hover:flex`;

  return (
    <div className="group relative flex flex-col items-center">
      {children}
      <div className={containerClass}>
        {placement === `bottom` && (
          <div className="-mb-2 h-3 w-3 rotate-45 bg-black"></div>
        )}
        <span className="whitespace-no-wrap relative z-10 rounded-md bg-black p-4 text-xs leading-none text-white shadow-lg">
          {tooltipContent}
        </span>
        {placement === `top` && (
          <div className="-mt-2 h-3 w-3 rotate-45 bg-black"></div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
