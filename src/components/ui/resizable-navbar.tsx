'use client';
// import { IconMenu2, IconX } from '@tabler/icons-react';
import { Icon } from '@iconify/react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: [`start start`, `end start`],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, `change`, (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn(`fixed inset-x-0 top-0 z-40 w-full`, className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? `blur(10px)` : `none`,
        boxShadow: visible
          ? `0 0 24px rgba(34,42,53,0.06),0 1px 1px rgba(0,0,0,0.05),0 0 0 1px rgba(34,42,53,0.04),0 0 4px rgba(34,42,53,0.08),0 16px 68px rgba(47,48,55,0.05),0 1px 0 rgba(255,255,255,0.1) inset`
          : `none`,
        width: visible ? `100%` : `100%`,
        y: visible ? 8 : 0,
      }}
      transition={{ ease: `easeInOut`, duration: 0.3 }}
      className={cn(
        `relative z-[60] mx-auto hidden w-full ${
          visible ? `max-w-screen-xl` : `max-w-full`
        } flex flex-row items-center justify-between rounded-full px-8 py-4 lg:flex`,
        visible && `bg-white/80 dark:bg-neutral-950/80`,
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [_hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        `ml-auto flex hidden flex-row items-center justify-end space-x-6 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex`,
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="group relative px-3 py-2 text-neutral-700 transition-all duration-300 hover:text-black"
          key={`link-${idx}`}
          href={item.link}
        >
          <span className="relative z-20">{item.name}</span>
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? `blur(10px)` : `none`,
        boxShadow: visible
          ? `0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset`
          : `none`,
        width: visible ? `90%` : `100%`,
        paddingRight: visible ? `12px` : `0px`,
        paddingLeft: visible ? `12px` : `0px`,
        borderRadius: visible ? `4px` : `2rem`,
        y: visible ? 8 : 0,
      }}
      transition={{
        type: `spring`,
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        `relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden`,
        visible && `bg-white/80 dark:bg-neutral-950/80`,
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        `flex w-full flex-row items-center justify-between`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            `absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950`,
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-md text-black hover:bg-gray-100 lg:hidden dark:text-white dark:hover:bg-neutral-800"
      aria-label={isOpen ? `Close menu` : `Open menu`}
    >
      {isOpen ? (
        <Icon icon="mdi:close" className="h-6 w-6 text-black dark:text-white" />
      ) : (
        <Icon icon="mdi:menu" className="h-6 w-6 text-black dark:text-white" />
      )}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <Link href="/" aria-label="Homepage" passHref>
      <div className="flex items-center space-x-2">
        <Image
          src="https://raw.githubusercontent.com/fairdataihub/logo/refs/heads/main/SVG/04_Main_Logo_W_Horizontal_Text/Main-Logo-Black-Stroke-Transparent-Copy.svg"
          alt="FAIR Data Innovations Hub Logo"
          width={300}
          height={10}
          priority={true}
        />
      </div>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = `a`,
  children,
  className,
  variant = `primary`,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient';
} & (
  | React.ComponentPropsWithoutRef<'a'>
  | React.ComponentPropsWithoutRef<'button'>
)) => {
  const baseStyles = `px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center`;

  const variantStyles = {
    primary: `shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]`,
    secondary: `bg-transparent shadow-none dark:text-white`,
    dark: `bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]`,
    gradient: `bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]`,
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
