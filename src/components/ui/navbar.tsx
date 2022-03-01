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
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-auto md:h-6 lg:h-7"
            viewBox="0 0 451.84 61.44"
          >
            <path
              d="M475.44,366.35v1.21h8.22v7.54h-8.22v32.36H463.67V375.1h-4.29v-7.54h4.29V366.5c0-1.28,0-3.17.08-4.53.6-7.09,5.2-11.38,16.07-11.38a21.39,21.39,0,0,1,4.52.52v8c-4.9-.91-8.37.45-8.75,3.92A24.6,24.6,0,0,0,475.44,366.35Z"
              transform="translate(-459.38 -350.59)"
            />
            <path
              d="M511.79,401.57l-1.81,4.3a18.36,18.36,0,0,1-10,2.64c-6.79,0-12.9-4.15-12.9-11.76,0-8.75,7.77-13.88,21.95-13.88h2.56v-.68a29.27,29.27,0,0,0-.15-3.47c-.22-2.41-2-4.38-5.58-4.38s-5.73,2.27-6,6.26H488.56c.23-9.2,8-14.4,17.8-14.4,11.92,0,16.22,5.2,16.82,12.37.15,1.88.23,4.15.23,6.48v12.22a69.8,69.8,0,0,0,.75,10.19H512.62Zm-.15-8.75v-2.94c-7.31-.6-12.37,1.21-12.37,5.88,0,3,2.19,4.61,5.43,4.61C508.25,400.37,511.64,397.8,511.64,392.82Z"
              transform="translate(-459.38 -350.59)"
            />
            <path
              d="M544.6,357.68c0,3.69-2.56,6-6.33,6s-6.26-2.34-6.26-6,2.49-6,6.26-6S544.6,354.06,544.6,357.68Zm-12.22,49.78V367.25h11.85v40.21Z"
              transform="translate(-459.38 -350.59)"
            />
            <path
              d="M578.39,366.5v9.58c-9.35-.6-13.35,3.17-13.35,14.56v16.82H553.2V367.25H565V375l3-5.58a10.61,10.61,0,0,1,7.31-3.17A16.24,16.24,0,0,1,578.39,366.5Z"
              transform="translate(-459.38 -350.59)"
            />
            <path
              d="M623.49,407.46H611.65v-6l-3,4.45c-2.27,1.74-6.26,2.64-10.34,2.64-11.09,0-17.8-8.45-17.8-20.36,0-14.41,8.83-21.95,19.16-21.95,3.32,0,7.32.83,9.35,2.11l2.64,4.22V352h11.84Zm-11.84-19.61V386c0-8.6-4.75-11.62-9.2-11.62-5.73,0-9.8,4.38-9.8,13.13,0,7.92,3.84,12.9,9.42,12.9C607.43,400.37,611.65,397.05,611.65,387.85Z"
              transform="translate(-459.38 -350.59)"
              fill="#CB128D"
            />
            <path
              d="M655.09,401.57l-1.8,4.3a18.42,18.42,0,0,1-10,2.64c-6.79,0-12.9-4.15-12.9-11.76,0-8.75,7.77-13.88,22-13.88h2.56v-.68a29.27,29.27,0,0,0-.15-3.47c-.22-2.41-2-4.38-5.58-4.38s-5.73,2.27-6,6.26H631.86c.23-9.2,8-14.4,17.8-14.4,11.92,0,16.22,5.2,16.82,12.37.15,1.88.23,4.15.23,6.48v12.22a69.8,69.8,0,0,0,.75,10.19H655.92Zm-.15-8.75v-2.94c-7.31-.6-12.37,1.21-12.37,5.88,0,3,2.19,4.61,5.43,4.61C651.55,400.37,654.94,397.8,654.94,392.82Z"
              transform="translate(-459.38 -350.59)"
              fill="#CB128D"
            />
            <path
              d="M689.86,392c0,1.36,0,2.72.08,3.77.3,4,1.66,4.91,7.69,4.53v7.54a45.92,45.92,0,0,1-7.31.61c-8.83,0-11.69-2.87-12.15-8.75-.15-2-.15-3.85-.15-6.11V375.1h-6.11v-7.54H678V357.45h11.84v10.11h8.53v7.54h-8.53Z"
              transform="translate(-459.38 -350.59)"
              fill="#CB128D"
            />
            <path
              d="M726.82,401.57l-1.81,4.3a18.39,18.39,0,0,1-10,2.64c-6.78,0-12.89-4.15-12.89-11.76,0-8.75,7.77-13.88,22-13.88h2.56v-.68a29.27,29.27,0,0,0-.15-3.47c-.23-2.41-2-4.38-5.58-4.38-3.7,0-5.73,2.27-6,6.26H703.59c.23-9.2,8-14.4,17.8-14.4,11.92,0,16.22,5.2,16.82,12.37.15,1.88.23,4.15.23,6.48v12.22a69.8,69.8,0,0,0,.75,10.19H727.65Zm-.15-8.75v-2.94c-7.32-.6-12.37,1.21-12.37,5.88,0,3,2.19,4.61,5.43,4.61C723.28,400.37,726.67,397.8,726.67,392.82Z"
              transform="translate(-459.38 -350.59)"
              fill="#CB128D"
            />
            <path
              d="M759.63,357.68c0,3.69-2.57,6-6.34,6s-6.26-2.34-6.26-6,2.49-6,6.26-6S759.63,354.06,759.63,357.68Zm-12.22,49.78V367.25h11.84v40.21Z"
              transform="translate(-459.38 -350.59)"
              fill="#000"
            />
            <path
              d="M807.37,384.75v22.71H795.53v-20.9c0-1.51,0-3.54-.15-5.58-.3-4.07-2.57-6.64-7.17-6.64s-8.14,4.23-8.14,14.49v18.63H768.23V351.64h11.84v21.95l3.32-4.83a15.82,15.82,0,0,1,9.35-2.56c8.45,0,13.35,4.07,14.25,11.09A50.83,50.83,0,0,1,807.37,384.75Z"
              transform="translate(-459.38 -350.59)"
            />
            <path
              d="M854.21,407.46H842.44v-6.87L839.05,406a15.85,15.85,0,0,1-9.36,2.56c-8.29,0-13.27-4.67-14.18-10.18a51.19,51.19,0,0,1-.37-7.47V367.25H826.9V388.3a53.42,53.42,0,0,0,.31,5.5c.52,4.08,2.63,6.49,7.24,6.49,4.82,0,8-4.15,8-11.54v-21.5h11.77Z"
              transform="translate(-459.38 -350.59)"
            />
            <path
              d="M906.17,386.49c0,14.48-8.82,22-19.15,22-3.32,0-7.32-.83-9.36-2.11L875,402.18v5.28H863.18V352H875v21.27l3-4.45c2.26-1.74,6.26-2.64,10.33-2.64C899.46,366.2,906.17,374.65,906.17,386.49Zm-12.14.75c0-7.92-3.85-12.9-9.43-12.9S875,377.66,875,386.87v1.8c0,8.68,4.68,11.7,9.2,11.7C890,400.37,894,396,894,387.24Z"
              transform="translate(-459.38 -350.59)"
            />
          </svg>
        </Link>
        <div className="hidden sm:block">
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
        <div className="block sm:hidden">
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
