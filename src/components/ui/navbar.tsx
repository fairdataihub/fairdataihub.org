'use client';

import { useState } from 'react';

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from '@/components/ui/resizable-navbar';

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: `Projects`, link: `/projects` },
    { name: `Team`, link: `/team` },
    { name: `Impact`, link: `/impact` },
    { name: `Gallery`, link: `/gallery` },
    { name: `Blog`, link: `/blog` },
    { name: `Events`, link: `/events` },
    { name: `Contact Us`, link: `/contact-us` },
  ];

  return (
    <div className="relative top-0 z-90 w-full print:hidden">
      <Navbar>
        <NavBody className="hidden lg:flex">
          <NavbarLogo />
          <NavItems items={navItems} />
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isOpen} onClick={toggleMobileMenu} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen} onClose={toggleMobileMenu}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={toggleMobileMenu}
                className="block w-full px-4 py-2 text-left text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
