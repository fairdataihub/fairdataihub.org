import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="min-w-screen sticky top-0 z-30 shadow-lg print:hidden">
      <div className="flex flex-row items-center justify-between bg-gray-50 px-5 py-3">
        <Link href="/" aria-label="Homepage" passHref>
          <div className="flex flex-row">
            <Image
              src="https://cdn.jsdelivr.net/gh/fairdataihub/logo@refs/heads/main/SVG/04_Main_Logo_W_Horizontal_Text/Main-Logo-Black-Stroke-Transparent.svg"
              alt="FAIR Data Innovations Hub Logo"
              width={300}
              height={300}
              priority={true}
            />
          </div>
        </Link>
        <div className="hidden md:block">
          <div className="md:text-md flex h-full flex-row items-center justify-center font-medium sm:text-sm">
            <Link href="/projects" passHref>
              <div
                className={
                  `nav-item hover-underline-animation` +
                  (router.pathname === `/projects`
                    ? ` router-link-active`
                    : ` `)
                }
                data-umami-event="Navigation link"
                data-umami-event-location="Header"
                data-umami-event-value="Our Projects"
              >
                Projects
              </div>
            </Link>

            <Link href="/team" passHref>
              <div
                className={
                  `nav-item hover-underline-animation` +
                  (router.pathname === `/team` ? ` router-link-active` : ` `)
                }
                data-umami-event="Navigation link"
                data-umami-event-location="Header"
                data-umami-event-value="Team"
              >
                Team
              </div>
            </Link>

            <Link href="/impact" passHref>
              <div
                className={
                  `nav-item hover-underline-animation` +
                  (router.pathname === `/impact` ? ` router-link-active` : ` `)
                }
                data-umami-event="Navigation link"
                data-umami-event-location="Header"
                data-umami-event-value="Impact"
              >
                Impact
              </div>
            </Link>

            <Link href="/blog" passHref>
              <div
                className={
                  `nav-item hover-underline-animation` +
                  (router.pathname === `/blog` ? ` router-link-active` : ` `)
                }
                data-umami-event="Navigation link"
                data-umami-event-location="Header"
                data-umami-event-value="Blog"
              >
                Blog
              </div>
            </Link>

            <Link href="/events" passHref>
              <div
                className={
                  `nav-item hover-underline-animation` +
                  (router.pathname === `/events` ? ` router-link-active` : ` `)
                }
                data-umami-event="Navigation link"
                data-umami-event-location="Header"
                data-umami-event-value="Events"
              >
                Events
              </div>
            </Link>

            <div
              id="our-projects-container"
              className="group relative hidden rounded-lg"
            >
              <button className="mx-1 flex flex-row items-center border-none py-2 font-medium sm:px-1 lg:px-3">
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

              <div
                id="project-container"
                className="absolute right-4 z-10 hidden w-max py-1 group-hover:block"
              >
                <div className="text-md rounded-lg border-2 border-gray-200 bg-gray-100 py-4 text-left shadow-lg">
                  <div className="flex flex-col">
                    <Link href="/sodaforsparc" passHref>
                      <div
                        id="soda-page"
                        className={
                          `nav-item hover-underline-animation mt-2` +
                          (router.pathname === `/sodaforsparc`
                            ? ` router-link-active`
                            : ` `)
                        }
                        data-umami-event="Navigation link"
                        data-umami-event-location="Header"
                        data-umami-event-value="SODA for SPARC"
                      >
                        SODA for SPARC
                      </div>
                    </Link>

                    <Link href="/aireadi" passHref>
                      <div
                        id="aireadi-page"
                        className={
                          `nav-item hover-underline-animation mt-2 w-[200px]` +
                          (router.pathname === `/aireadi`
                            ? ` router-link-active`
                            : ` `)
                        }
                        data-umami-event="Navigation link"
                        data-umami-event-location="Header"
                        data-umami-event-value="AI-READI"
                      >
                        AI-READI
                      </div>
                    </Link>

                    <Link href="/eyeact" passHref>
                      <div
                        id="eyeact-page"
                        className={
                          `nav-item hover-underline-animation mt-2 w-[200px]` +
                          (router.pathname === `/eyeact`
                            ? ` router-link-active`
                            : ` `)
                        }
                        data-umami-event="Navigation link"
                        data-umami-event-location="Header"
                        data-umami-event-value="Eye ACT"
                      >
                        Eye ACT
                      </div>
                    </Link>

                    <Link href="/codefair" passHref>
                      <div
                        id="codefair-page"
                        className={
                          `nav-item hover-underline-animation mt-2 w-[200px]` +
                          (router.pathname === `/codefair`
                            ? ` router-link-active`
                            : ` `)
                        }
                        data-umami-event="Navigation link"
                        data-umami-event-location="Header"
                        data-umami-event-value="CodeFair"
                      >
                        Codefair
                      </div>
                    </Link>

                    <Link href="/fairshare" passHref>
                      <div
                        id="fairshare-page"
                        className={
                          `nav-item hover-underline-animation mt-2 w-[200px]` +
                          (router.pathname === `/fairshare`
                            ? ` router-link-active`
                            : ` `)
                        }
                        data-umami-event="Navigation link"
                        data-umami-event-location="Header"
                        data-umami-event-value="FAIRshare"
                      >
                        FAIRshare
                      </div>
                    </Link>

                    <Link href="/knowmore" passHref>
                      <div
                        id="knowmore-page"
                        className={
                          `nav-item hover-underline-animation mt-2` +
                          (router.pathname === `/knowmore`
                            ? ` router-link-active`
                            : ` `)
                        }
                        data-umami-event="Navigation link"
                        data-umami-event-location="Header"
                        data-umami-event-value="KnowMore"
                      >
                        KnowMore
                      </div>
                    </Link>

                    <Link href="/sparclink" passHref>
                      <div
                        id="sparclink-page"
                        className={
                          `nav-item hover-underline-animation mt-2` +
                          (router.pathname === `/sparclink`
                            ? ` router-link-active`
                            : ` `)
                        }
                        data-umami-event="Navigation link"
                        data-umami-event-location="Header"
                        data-umami-event-value="SPARClink"
                      >
                        SPARClink
                      </div>
                    </Link>

                    <Link href="/aqua" passHref>
                      <div
                        id="aqua-page"
                        className={
                          `nav-item hover-underline-animation mt-2` +
                          (router.pathname === `/aqua`
                            ? ` router-link-active`
                            : ` `)
                        }
                        data-umami-event="Navigation link"
                        data-umami-event-location="Header"
                        data-umami-event-value="AQUA"
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
                    ? ` router-link-active`
                    : ` `)
                }
                data-umami-event="Navigation link"
                data-umami-event-location="Header"
                data-umami-event-value="Contact Us"
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
                  (isOpen ? `rotate-45` : `-translate-y-1.5`)
                }
              ></span>
              <span
                aria-hidden="true"
                className={
                  `absolute block h-[3px] w-6 transform bg-light-accent transition duration-200 ease-in-out ` +
                  (isOpen ? `opacity-0` : ` `)
                }
              ></span>
              <span
                aria-hidden="true"
                className={
                  `absolute block h-[3px] w-6 transform bg-light-accent transition duration-200 ease-in-out ` +
                  (isOpen ? `-rotate-45` : `translate-y-1.5`)
                }
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed left-0 top-16 z-10 w-screen bg-white shadow-sm">
            <div className="pb-3 pt-2">
              <Link href="/projects" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="Our Projects"
                  onClick={toggleMobileMenu}
                >
                  Projects
                </div>
              </Link>

              <Link href="/team" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="Team"
                  onClick={toggleMobileMenu}
                >
                  Team
                </div>
              </Link>

              <Link href="/impact" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="Impact"
                  onClick={toggleMobileMenu}
                >
                  Impact
                </div>
              </Link>

              <Link href="/blog" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="Blog"
                  onClick={toggleMobileMenu}
                >
                  Blog
                </div>
              </Link>

              <Link href="/events" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="Events"
                  onClick={toggleMobileMenu}
                >
                  Events
                </div>
              </Link>

              <Link href="/sodaforsparc" passHref className="hidden">
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="SODA for SPARC"
                  onClick={toggleMobileMenu}
                >
                  SODA for SPARC
                </div>
              </Link>

              <Link href="/aireadi" passHref className="hidden">
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="AI-READI"
                  onClick={toggleMobileMenu}
                >
                  AI-READI
                </div>
              </Link>

              <Link href="/fairshare" passHref className="hidden">
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="FAIRshare"
                  onClick={toggleMobileMenu}
                >
                  FAIRshare
                </div>
              </Link>

              <Link href="/knowmore" passHref className="hidden">
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="KnowMore"
                  onClick={toggleMobileMenu}
                >
                  KnowMore
                </div>
              </Link>

              <Link href="/sparclink" passHref className="hidden">
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="SPARClink"
                  onClick={toggleMobileMenu}
                >
                  SPARClink
                </div>
              </Link>

              <Link href="/aqua" passHref className="hidden">
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="AQUA"
                  onClick={toggleMobileMenu}
                >
                  AQUA
                </div>
              </Link>

              <Link href="/contact-us" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  data-umami-event="Navigation link"
                  data-umami-event-location="Header"
                  data-umami-event-value="Contact Us"
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
