import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const isDev = process.env.NODE_ENV === `development`;

  return (
    <footer
      id="fairdata-footer"
      className={`${isDev ? `debug-screens` : ``} relative z-30 bg-white`}
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container mx-auto w-full max-w-screen-xl px-6 py-12 lg:px-0">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-6">
          <div className="md:w-5/12 lg:w-4/12">
            <div className="py-2">
              <Link href="/" aria-label="Homepage" className="inline-block">
                <div className="flex w-full max-w-[20rem] flex-row gap-4">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/fairdataihub/logo@refs/heads/main/SVG/05_Main_Logo_W_Stacked_Text/Main-Logo-Black-Stroke-Transparent.svg"
                    width={400}
                    height={400}
                    alt="FAIR Data Innovations Hub logo"
                    priority
                    className="cursor-pointer"
                  />
                </div>
              </Link>
            </div>

            <p className="font-inter py-3 text-gray-600">
              Helping researchers navigate the world of FAIR practices.
            </p>

            <div className="mt-2 flex flex-row gap-4">
              {/* <Link
                href="https://www.twitter.com/fairdataihub"
                className="group rounded-md p-1 transition outline-none hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-400/60"
                data-umami-event="Navigation link"
                data-umami-event-location="Footer"
                data-umami-event-value="Twitter"
                aria-label="Twitter"
                rel="noopener"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6 text-gray-400 transition group-hover:text-pink-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link> */}

              <Link
                href="https://www.linkedin.com/company/california-medical-innovations-institute"
                className="group rounded-md p-1 transition outline-none hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-400/60"
                data-umami-event="Navigation link"
                data-umami-event-location="Footer"
                data-umami-event-value="LinkedIn"
                aria-label="Linked In"
                rel="noopener"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="h-6 w-6 text-gray-400 transition group-hover:text-pink-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>

              <Link
                href="https://github.com/fairdataihub"
                target="_blank"
                className="group rounded-md p-1 transition outline-none hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-400/60"
                data-umami-event="Navigation link"
                data-umami-event-location="Footer"
                data-umami-event-value="GitHub"
                aria-label="Github"
                rel="noopener"
              >
                <svg
                  className="h-6 w-6 fill-current text-gray-400 transition group-hover:text-pink-500"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div
            id="footer-links-container"
            className="grid w-full grid-cols-2 gap-8 md:w-1/2 md:grid-cols-3 md:gap-6"
          >
            <nav aria-label="Company" className="flex flex-col">
              <h3 className="footer-header mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                Company
              </h3>
              <ul className="space-y-2">
                <li className="footer-item">
                  <Link className="transition hover:text-pink-600" href="/team">
                    About
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="transition hover:text-pink-600" href="/blog">
                    Blog
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/careers"
                  >
                    Careers
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Legal" className="flex flex-col">
              <h3 className="footer-header mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                Legal
              </h3>
              <ul className="space-y-2">
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/termsofuse"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/privacypolicy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/cookiepolicy"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Projects" className="flex flex-col">
              <h3 className="footer-header mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                Projects
              </h3>
              <ul className="space-y-2">
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/sodaforsparc"
                  >
                    SODA for SPARC
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/aireadi"
                  >
                    AI-READI
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/eyeact"
                  >
                    Eye ACT
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/codefair"
                  >
                    Codefair
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/posters-science"
                  >
                    Posters.science
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/dmp-chef"
                  >
                    DMP Chef
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    className="transition hover:text-pink-600"
                    href="/actionable-fair4rs"
                  >
                    Actionable FAIR4RS
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 md:flex-row">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} FAIR Data Innovations Hub. All rights
            reserved.
          </p>

          <Link
            href="https://vercel.com/?utm_source=fairdataihub&utm_campaign=oss"
            target="_blank"
            rel="noopener"
            className="rounded-md transition outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-pink-400/60"
            data-umami-event="Navigation link"
            data-umami-event-location="Footer"
            data-umami-event-value="Vercel"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
              alt="Powered by Vercel"
              width={160}
              height={100}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
