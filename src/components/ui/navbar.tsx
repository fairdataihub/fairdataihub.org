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
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-auto cursor-pointer md:h-6 lg:h-7"
            viewBox="0 0 1724 156.11"
          >
            <g id="b">
              <path
                d="M15.45,121.94v-54.96l-1.38,1.38H49.39c3.04,0,6.02,.84,8.61,2.44,7.44,4.59,10.82,13.75,10.84,22.16,.01,4.43,0,8.86,0,13.29v17.65c0,1.8,.03,3.59-.14,5.39-.44,4.71-2.01,9.34-4.7,13.24-2.32,3.36-5.63,6.2-9.55,7.48-2.01,.65-4.01,.77-6.09,.77H15.25c-1.77,0-1.78,2.76,0,2.76h30.99c1.26,0,2.51,.02,3.77,0,4.42-.1,8.55-1.86,11.93-4.67,6.66-5.53,9.66-14.44,9.66-22.88v-31.79c0-7.6-1.81-15.05-6.75-21.01-2.76-3.32-6.48-5.93-10.69-7.02-2.01-.52-4.04-.58-6.1-.58H14.07c-.76,.01-1.37,.62-1.38,1.38v54.96c0,1.77,2.76,1.77,2.76,0h0Z"
                fill="#231f20"
              />
              <path
                d="M21.47,100.41l-.05-13.6-.07-21.58-.02-5-1.36,1.36h29.79c4.14,0,8.54-.45,12.39,1.38,8.37,3.98,12.35,13.74,12.39,22.56,.01,3.9,0,7.79,0,11.69v17.93c0,1.25,.01,2.49,0,3.74-.07,4.96-1.26,9.96-3.6,14.34-2.01,3.77-4.91,7.21-8.77,9.17-2.09,1.06-4.29,1.4-6.59,1.4H23.45c-1.75,0-1.76,2.73,0,2.73h30.28c1.47,0,2.97,.07,4.44-.11,4.29-.53,8.11-2.88,11.02-6.02,5.65-6.1,8.08-14.49,8.08-22.67v-31.43c0-7.88-2.36-15.89-8.04-21.59-3.03-3.04-6.91-5.19-11.2-5.73-1.44-.18-2.91-.13-4.36-.13H19.97c-.75,0-1.36,.61-1.36,1.36l.05,13.6,.07,21.58,.02,5c0,1.75,2.73,1.76,2.73,0h0Z"
                fill="#c5258f"
              />
              <path
                d="M9,42.29c.34-16.46,9.89-33.64,26.47-38.38,8.79-2.52,18.59-.92,26.37,3.79,4.16,2.52,7.51,5.96,10.35,9.87,2.99,4.11,5.47,8.62,7.12,13.44,1.38,3.93,2.1,8.06,2.14,12.22v48.67c0,7.81-.13,15.63,0,23.45v.37c0,1.75,2.73,1.76,2.73,0V46.26c0-4.21-.16-8.34-1.18-12.46-1.3-5.22-3.59-10.21-6.48-14.74-2.65-4.17-5.79-8.16-9.69-11.22C59.12,1.79,48.9-1.03,39.19,.34,21.79,2.78,9.55,18.59,6.92,35.24c-.37,2.33-.58,4.69-.63,7.05-.04,1.76,2.69,1.76,2.73,0h0Z"
                fill="#c5258f"
              />
              <path
                d="M8.99,43.16v-.94c0-.75-.61-1.36-1.36-1.36s-1.36,.61-1.36,1.36h0v.94c0,.71,.63,1.4,1.36,1.36,.75,0,1.36-.61,1.36-1.36Z"
                fill="#c5258f"
              />
              <path
                d="M23.45,143.82c-2.34,0-4.44-.1-6.53-1.3-2.67-1.53-4.62-4.04-5.94-6.78-1.51-3.14-1.99-6.56-1.99-10V57.49c0-4.41,.15-8.86,0-13.27v-.2c0-1.76-2.73-1.76-2.73,0V125.34c0,3.03,.25,6.04,1.22,8.94,1.97,5.91,6.62,11.61,13.2,12.22,.92,.09,1.86,.04,2.78,.04,1.76,0,1.76-2.73,0-2.73h0Z"
                fill="#c5258f"
              />
              <path
                d="M17.14,150.79c-1.99,0-3.88,.02-5.75-.8-2.42-1.07-4.36-3.04-5.73-5.28-2.09-3.41-2.91-7.33-2.91-11.29V57.32c0-6.33-.2-12.72,1.18-18.94,2.45-11.13,8.96-21.6,18.89-27.49,9.47-5.61,21.24-6.1,31.07-1.08,10.21,5.21,17.25,15.2,20.24,26.11,2.29,8.35,1.73,17.09,1.73,25.66v2.79c0,1.76,2.74,1.77,2.74,0v-9.47c0-3.7,.11-7.42-.26-11.1-1.21-12.12-6.7-24.04-16.25-31.84C53.17,4.64,41.27,1.67,30.04,4.82,18.78,7.98,9.78,16.72,4.87,27.16,2.14,32.98,.55,39.27,.16,45.68-.07,49.25,.02,52.85,0,56.42,0,59.82,0,63.21,0,66.6v65.68c0,2.32,.08,4.61,.56,6.9,1.22,5.74,4.73,11.41,10.4,13.58,2,.77,4.06,.77,6.17,.77,1.77,0,1.77-2.74,0-2.74h0Z"
                fill="#231f20"
              />
              <path
                d="M12.71,121.87c.08,2.4,1.61,5.08,4.31,5.06s4.23-2.63,4.31-5.06c.06-1.75-2.66-1.75-2.72,0-.03,.89-.46,2.35-1.59,2.34s-1.56-1.45-1.59-2.34c-.06-1.75-2.78-1.75-2.72,0Z"
                fill="#231f20"
              />
              <ellipse
                cx="19.97"
                cy="109.16"
                rx="1.45"
                ry="1.54"
                fill="#c5258f"
                stroke="#c5258f"
                strokeMiterlimit="10"
                strokeWidth=".93"
              />
              <ellipse
                cx="19.97"
                cy="117.79"
                rx="1.45"
                ry="1.54"
                fill="#231f20"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth=".93"
              />
              <ellipse
                cx="19.97"
                cy="104.84"
                rx="1.45"
                ry="1.54"
                fill="#c5258f"
                stroke="#c5258f"
                strokeMiterlimit="10"
                strokeWidth=".93"
              />
              <ellipse
                cx="19.97"
                cy="113.47"
                rx="1.45"
                ry="1.54"
                fill="#231f20"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth=".93"
              />
            </g>
            <g>
              <path
                d="M179.45,46.58h-43.37v23.65h38.71v11.39h-38.71v38.47h-12.13V34.57h55.5v12.01Z"
                fill="#c5258f"
              />
              <path
                d="M254.06,120.08h-13.23l-8.7-23.52h-33.81l-8.7,23.52h-13.11l32.83-85.51h11.76l32.96,85.51Zm-25.85-34.3l-12.99-34.43-12.86,34.43h25.85Z"
                fill="#c5258f"
              />
              <path
                d="M276.85,120.08h-12.25V34.57h12.25V120.08Z"
                fill="#c5258f"
              />
              <path
                d="M334.31,81.98c1.96,1.47,3.8,4.17,5.15,6.37l19.72,31.73h-14.21l-17.64-29.65c-2.57-4.41-4.66-7.23-10.41-7.23h-9.19v36.88h-12.25V34.57h30.38c16.29,0,28.42,7.35,28.42,24.63,0,11.88-7.23,20.34-19.97,22.79Zm-8.45-35.53h-18.13v25.97h18.13c9.07,0,16.17-2.69,16.17-13.11s-7.35-12.86-16.17-12.86Z"
                fill="#c5258f"
              />
              <path d="M430.6,120.08h-24.26V34.57h24.26c33.57,0,38.84,12.01,38.84,42.76s-5.27,42.76-38.84,42.76Zm23.52-66.4c-3.19-5.15-9.43-7.11-21.07-7.11h-14.46v61.38h14.46c11.76,0,18.01-1.96,21.19-7.35,2.7-4.66,2.94-12.13,2.94-23.15s-.24-18.99-3.06-23.77Z" />
              <path d="M550.55,120.08h-13.23l-8.7-23.52h-33.81l-8.7,23.52h-13.11l32.83-85.51h11.76l32.96,85.51Zm-25.85-34.3l-12.99-34.43-12.86,34.43h25.85Z" />
              <path d="M608.37,46.58h-25.73V120.08h-12.25V46.58h-25.73v-12.01h63.71v12.01Z" />
              <path d="M680.05,120.08h-13.23l-8.7-23.52h-33.81l-8.7,23.52h-13.11l32.83-85.51h11.76l32.96,85.51Zm-25.85-34.3l-12.99-34.43-12.86,34.43h25.85Z" />
              <path
                d="M738.24,120.08h-12.25V34.57h12.25V120.08Z"
                fill="#c5258f"
              />
              <path
                d="M817.75,120.08h-10.54l-38.1-60.89v60.89h-12.25V34.57h10.66l37.98,60.89V34.57h12.25V120.08Z"
                fill="#c5258f"
              />
              <path
                d="M896.29,120.08h-10.54l-38.1-60.89v60.89h-12.25V34.57h10.66l37.98,60.89V34.57h12.25V120.08Z"
                fill="#c5258f"
              />
              <path
                d="M945.17,121.07c-25.73,0-34.92-21.2-34.92-43.74s9.19-43.74,34.92-43.74,34.92,21.07,34.92,43.74-9.31,43.74-34.92,43.74Zm0-75.47c-18.87,0-22.67,17.03-22.67,31.73s3.8,31.73,22.67,31.73,22.54-17.03,22.54-31.73-3.68-31.73-22.54-31.73Z"
                fill="#c5258f"
              />
              <path
                d="M1054.33,34.57l-28.91,85.51h-12.01l-28.91-85.51h12.86l22.05,67.26,22.05-67.26h12.86Z"
                fill="#c5258f"
              />
              <path
                d="M1125.76,120.08h-13.23l-8.7-23.52h-33.81l-8.7,23.52h-13.11l32.83-85.51h11.76l32.96,85.51Zm-25.85-34.3l-12.99-34.43-12.86,34.43h25.85Z"
                fill="#c5258f"
              />
              <path
                d="M1183.58,46.58h-25.73V120.08h-12.25V46.58h-25.73v-12.01h63.71v12.01Z"
                fill="#c5258f"
              />
              <path
                d="M1208.82,120.08h-12.25V34.57h12.25V120.08Z"
                fill="#c5258f"
              />
              <path
                d="M1258.69,121.07c-25.73,0-34.92-21.2-34.92-43.74s9.19-43.74,34.92-43.74,34.92,21.07,34.92,43.74-9.31,43.74-34.92,43.74Zm0-75.47c-18.87,0-22.67,17.03-22.67,31.73s3.8,31.73,22.67,31.73,22.54-17.03,22.54-31.73-3.68-31.73-22.54-31.73Z"
                fill="#c5258f"
              />
              <path
                d="M1368.46,120.08h-10.54l-38.1-60.89v60.89h-12.25V34.57h10.66l37.98,60.89V34.57h12.25V120.08Z"
                fill="#c5258f"
              />
              <path
                d="M1416,121.31c-17.52,0-29.65-7.47-33.69-24.01l11.64-2.21c2.82,10.78,11.76,14.58,22.05,14.58,8.58,0,18.87-4.53,18.87-14.58,0-20.83-49.62-7.84-49.62-38.35,0-15.68,14.09-23.15,28.3-23.15s24.26,5.27,30.63,18.13l-10.54,4.78c-4.41-8.21-10.54-11.39-20.09-11.39-6.74,0-16.17,2.82-16.17,11.64,0,17.89,49.74,6.49,49.74,38.35,0,16.91-15.31,26.22-31.12,26.22Z"
                fill="#c5258f"
              />
              <path d="M1559.83,120.08h-12.25v-38.35h-39.2v38.35h-12.25V34.57h12.25v35.65h39.2V34.57h12.25V120.08Z" />
              <path d="M1639.95,84.31c0,21.81-8.33,36.75-31.73,36.75s-31.85-15.19-31.85-36.75V34.57h12.25v49.13c0,13.35,2.94,25.48,19.48,25.48s19.72-11.88,19.72-25.48V34.57h12.13v49.74Z" />
              <path d="M1689.08,120.08h-32.47V34.57h30.38c16.05,0,28.67,6.49,28.67,23.89,0,6.37-2.7,12.86-9.19,17.03,8.7,3.92,12.37,11.76,12.37,19.72,0,18.25-12.99,24.87-29.77,24.87Zm-1.96-73.88h-18.25v25.11h18.62c8.82,0,16.17-2.21,16.17-12.74s-7.96-12.37-16.54-12.37Zm1.96,35.77h-20.21v26.46h20.21c9.07,0,17.52-1.84,17.52-13.11s-8.33-13.35-17.52-13.35Z" />
            </g>
          </svg>
        </Link>
        <div className="hidden md:block">
          <div className="md:text-md flex h-full flex-row items-center justify-center font-medium sm:text-sm">
            <Link href="/blog" passHref>
              <div
                className={
                  `nav-item hover-underline-animation` +
                  (router.pathname === `/blog` ? ` router-link-active ` : ` `)
                }
              >
                Blog
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
              <Link href="/blog" passHref>
                <div
                  className="mobile-menu z-20 block cursor-pointer rounded-md px-3 py-2 text-center text-base font-medium text-black transition-all hover:bg-light-accent hover:text-white"
                  onClick={toggleMobileMenu}
                >
                  Blog
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
