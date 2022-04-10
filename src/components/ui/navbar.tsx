import Link from 'next/link';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="min-w-screen sticky top-0 z-30 shadow-lg print:hidden">
      <div className=" flex flex-row items-center justify-between bg-gray-50 px-5 py-3">
        <Link href="/" aria-label="Homepage" passHref>
          <svg
            className="h-6 w-auto cursor-pointer md:h-6 lg:h-7"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1083.51 98.11"
          >
            <g id="e519d7e1-35fc-4c2a-8551-90059c17a07a" data-name="Layer 14">
              <path
                d="M9.71,76.64V42.1L8.85,43H31a10.23,10.23,0,0,1,5.41,1.54c4.67,2.88,6.8,8.64,6.81,13.93,0,2.78,0,5.56,0,8.35V77.87c0,1.13,0,2.26-.08,3.38a17.69,17.69,0,0,1-3,8.33,12,12,0,0,1-6,4.69,12.11,12.11,0,0,1-3.83.49H9.58a.87.87,0,0,0,0,1.73H29.06c.79,0,1.58,0,2.37,0a12.19,12.19,0,0,0,7.49-2.93C43.11,90.09,45,84.49,45,79.18v-20c0-4.77-1.14-9.46-4.24-13.2A13.19,13.19,0,0,0,34,41.59a15,15,0,0,0-3.83-.36H8.84a.87.87,0,0,0-.86.86V76.64a.87.87,0,0,0,1.73,0Z"
                fill="#231f20"
              />
              <path
                d="M13.49,63.11l0-8.55,0-13.56V37.85l-.86.86H31.27c2.6,0,5.37-.28,7.79.87,5.26,2.5,7.76,8.63,7.78,14.18,0,2.45,0,4.9,0,7.35V72.38c0,.78,0,1.56,0,2.35a19.82,19.82,0,0,1-2.26,9,13.35,13.35,0,0,1-5.52,5.76,9,9,0,0,1-4.14.88H14.74a.86.86,0,0,0,0,1.71h19A23.63,23.63,0,0,0,36.56,92a11.56,11.56,0,0,0,6.92-3.78C47,84.42,48.56,79.14,48.56,74V54.25c0-5-1.48-10-5.05-13.57a12.16,12.16,0,0,0-7-3.6A22.68,22.68,0,0,0,33.73,37H12.55a.88.88,0,0,0-.86.86l0,8.54,0,13.57v3.14a.86.86,0,0,0,1.72,0Z"
                fill="#c5258f"
              />
              <path
                d="M5.66,26.58C5.87,16.23,11.87,5.44,22.3,2.45A21.24,21.24,0,0,1,38.87,4.84,22.5,22.5,0,0,1,45.38,11a32.14,32.14,0,0,1,4.47,8.45,23.63,23.63,0,0,1,1.34,7.68V57.76c0,4.9-.08,9.82,0,14.74v.23a.86.86,0,0,0,1.72,0V29.08a31.84,31.84,0,0,0-.75-7.84A31.28,31.28,0,0,0,48.09,12a27.81,27.81,0,0,0-6.09-7A23.22,23.22,0,0,0,24.63.21C13.69,1.75,6,11.69,4.35,22.15A31.17,31.17,0,0,0,4,26.58a.86.86,0,0,0,1.72,0Z"
                fill="#c5258f"
              />
              <path
                d="M5.65,27.12v-.59a.86.86,0,0,0-1.72,0h0v.59a.86.86,0,0,0,1.72,0Z"
                fill="#c5258f"
              />
              <path
                d="M14.74,90.39a7.8,7.8,0,0,1-4.11-.82A9.53,9.53,0,0,1,6.9,85.31,14.29,14.29,0,0,1,5.65,79V36.13c0-2.77.1-5.56,0-8.34v-.12a.86.86,0,0,0-1.72,0V78.78A17.59,17.59,0,0,0,4.7,84.4c1.24,3.71,4.16,7.29,8.3,7.68.58,0,1.16,0,1.74,0a.86.86,0,0,0,0-1.71Z"
                fill="#c5258f"
              />
              <path
                d="M10.77,94.77a8.67,8.67,0,0,1-3.61-.5A8.37,8.37,0,0,1,3.56,91a13.38,13.38,0,0,1-1.83-7.1V36c0-4-.13-8,.74-11.91C4,17.12,8.1,10.55,14.35,6.85a20.27,20.27,0,0,1,19.53-.68c6.41,3.27,10.84,9.55,12.72,16.41,1.44,5.25,1.09,10.74,1.09,16.13v1.75a.86.86,0,0,0,1.72,0v-6c0-2.33.07-4.66-.16-7C48.49,19.91,45,12.42,39,7.52A22.38,22.38,0,0,0,18.88,3c-7.08,2-12.74,7.48-15.82,14a32,32,0,0,0-3,11.64C0,31,0,33.22,0,35.46V83.14a20.27,20.27,0,0,0,.36,4.33c.76,3.61,3,7.17,6.54,8.54a10.54,10.54,0,0,0,3.87.48.86.86,0,0,0,0-1.72Z"
                fill="#231f20"
              />
              <path
                d="M8,76.59c0,1.51,1,3.2,2.71,3.18s2.65-1.65,2.7-3.18c0-1.1-1.67-1.1-1.71,0,0,.56-.28,1.48-1,1.47s-1-.91-1-1.47C9.66,75.49,8,75.49,8,76.59Z"
                fill="#231f20"
              />
              <ellipse
                cx="12.55"
                cy="68.6"
                rx="0.91"
                ry="0.97"
                fill="#c5258f"
                stroke="#c5258f"
                strokeMiterlimit="10"
                strokeWidth="0.93"
              />
              <ellipse
                cx="12.55"
                cy="74.03"
                rx="0.91"
                ry="0.97"
                fill="#231f20"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="0.93"
              />
              <ellipse
                cx="12.55"
                cy="65.89"
                rx="0.91"
                ry="0.97"
                fill="#c5258f"
                stroke="#c5258f"
                strokeMiterlimit="10"
                strokeWidth="0.93"
              />
              <ellipse
                cx="12.55"
                cy="71.32"
                rx="0.91"
                ry="0.97"
                fill="#231f20"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="0.93"
              />
            </g>
            <text
              transform="translate(72.36 75.47)"
              fontSize="77"
              fill="#c5258f"
              fontFamily="AauxNext-SemiBold, Aaux Next"
              fontWeight="600"
            >
              <tspan letterSpacing="-0.07em">F</tspan>
              <tspan x="38.11" y="0">
                AIR
              </tspan>
              <tspan x="155.23" y="0" fill="#000">
                {` `}
              </tspan>
              <tspan x="177.48" y="0" letterSpacing="-0.03em" fill="#000">
                D
              </tspan>
              <tspan x="224.45" y="0" letterSpacing="-0.08em" fill="#000">
                AT
              </tspan>
              <tspan x="305.84" y="0" fill="#000">
                A{` `}
              </tspan>
              <tspan x="377.76" y="0">
                INN
              </tspan>
              <tspan x="496.49" y="0" letterSpacing="-0.02em">
                O
              </tspan>
              <tspan x="545.31" y="0" letterSpacing="-0.07em">
                V
              </tspan>
              <tspan x="585.96" y="0" letterSpacing="-0.08em">
                A
              </tspan>
              <tspan x="629.47" y="0">
                TIONS
              </tspan>
              <tspan x="840.14" y="0" xmlSpace="preserve" fill="#000">
                {` `}
                HUB
              </tspan>
            </text>
          </svg>
        </Link>
        <div className="hidden md:block">
          <div className="md:text-md flex h-full flex-row items-center justify-center font-medium sm:text-sm">
            <Link href="/" passHref>
              <div
                className={
                  `nav-item hover-underline-animation` +
                  (router.pathname === `/` ? ` router-link-active ` : ` `)
                }
              >
                Home
              </div>
            </Link>
            <Link href="/team" passHref>
              <div
                className={
                  `nav-item hover-underline-animation` +
                  (router.pathname === `/team` ? ` router-link-active ` : ` `)
                }
              >
                Meet The Team
              </div>
            </Link>
            <div className="group relative rounded-lg">
              <button className=" mx-1 flex flex-row items-center border-none py-2 font-medium sm:px-1 lg:px-3">
                <div className="flex w-max flex-row items-center justify-center">
                  Our Projects
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="ml-2 h-4 w-4 text-lg transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </button>
              <div className="absolute right-4 z-10 hidden w-max py-1 group-hover:block">
                <div className="text-md rounded-lg border-2 border-gray-200 bg-gray-100 py-4 text-left shadow-lg">
                  <div className="flex flex-col">
                    <Link href="/sodaforsparc" passHref>
                      <div
                        className={
                          `nav-item hover-underline-animation mt-2` +
                          (router.pathname === `/sodaforsparc`
                            ? ` router-link-active `
                            : ` `)
                        }
                      >
                        SODA for SPARC
                      </div>
                    </Link>
                    <Link href="/fairshare" passHref>
                      <div
                        className={
                          `nav-item hover-underline-animation mt-2 w-[200px]` +
                          (router.pathname === `/fairshare`
                            ? ` router-link-active `
                            : ` `)
                        }
                      >
                        FAIRshare
                      </div>
                    </Link>
                    <Link href="/knowmore" passHref>
                      <div
                        className={
                          `nav-item hover-underline-animation mt-2` +
                          (router.pathname === `/knowmore`
                            ? ` router-link-active `
                            : ` `)
                        }
                      >
                        KnowMore
                      </div>
                    </Link>
                    <Link href="/sparclink" passHref>
                      <div
                        className={
                          `nav-item hover-underline-animation mt-2` +
                          (router.pathname === `/sparclink`
                            ? ` router-link-active `
                            : ` `)
                        }
                      >
                        SPARClink
                      </div>
                    </Link>
                    <Link href="/aqua" passHref>
                      <div
                        className={
                          `nav-item hover-underline-animation mt-2` +
                          (router.pathname === `/aqua`
                            ? ` router-link-active `
                            : ` `)
                        }
                      >
                        AQUA
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/contact-us" passHref>
              <div
                className={
                  `nav-item hover-underline-animation` +
                  (router.pathname === `/contact-us`
                    ? ` router-link-active `
                    : ` `)
                }
              >
                Contact Us
              </div>
            </Link>
          </div>
        </div>

        {/* mobile menu toggle */}
        <div className="block md:hidden">
          <button
            className="relative h-10 w-10 text-gray-500 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className={
                  `absolute block h-[3px] w-6 transform bg-light-accent transition duration-200 ease-in-out ` +
                  (isOpen ? `rotate-45 ` : `-translate-y-1.5 `)
                }
              ></span>
              <span
                aria-hidden="true"
                className={
                  `absolute block h-[3px] w-6 transform bg-light-accent transition duration-200 ease-in-out ` +
                  (isOpen ? `opacity-0 ` : ` `)
                }
              ></span>
              <span
                aria-hidden="true"
                className={
                  `absolute block h-[3px] w-6 transform bg-light-accent transition duration-200 ease-in-out ` +
                  (isOpen ? `-rotate-45 ` : `translate-y-1.5 `)
                }
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed top-16 left-0 z-10 w-screen bg-white shadow-sm">
            <div className="pt-2 pb-3">
              <Link href="/" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  Home
                </div>
              </Link>
              <Link href="/team" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  Meet The Team
                </div>
              </Link>
              <Link href="/sodaforsparc" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  SODA for SPARC
                </div>
              </Link>
              <Link href="/fairshare" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  FAIRshare
                </div>
              </Link>
              <Link href="/knowmore" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  KnowMore
                </div>
              </Link>
              <Link href="/sparclink" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  SPARClink
                </div>
              </Link>
              <Link href="/aqua" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  AQUA
                </div>
              </Link>
              <Link href="/contact-us" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
