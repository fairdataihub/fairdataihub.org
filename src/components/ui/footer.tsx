import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      id="fairdata-footer"
      className={
        process.env.NODE_ENV === `development`
          ? `debug-screens z-30 bg-gray-50 pt-5`
          : `z-30 bg-gray-50 pt-5`
      }
    >
      <div className="container mx-auto flex w-full max-w-screen-lg flex-col px-6 py-8">
        <div className="flex flex-col justify-between pb-3 pr-3 md:flex-row">
          <div className="mb-5 flex w-full flex-col md:mb-0 md:w-4/12">
            <div className="py-3">
              <Link href="/" aria-label="Homepage" passHref>
                <Image
                  src="/logo.svg"
                  width="250"
                  height="80"
                  objectFit="scale-down"
                  alt="FAIR Data Innovations Hub logo"
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <p className="py-3 font-inter font-medium text-gray-600">
              Helping researchers navigate the world of FAIR data sharing.
            </p>
            <div className="flex flex-row justify-start py-3">
              <a
                href="https://www.twitter.com/fairdataihub"
                className="icon-style umami--click--twitter-profile"
                aria-label="Twitter"
                rel="noopener"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-7 w-7 text-gray-400 transition-all hover:text-accent"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/california-medical-innovations-institute"
                className="icon-style umami--click--linkedin-profile"
                aria-label="Linked In"
                rel="noopener"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="h-7 w-7 text-gray-400 transition-all hover:text-accent"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/fairdataihub"
                target="_blank"
                className="icon-style umami--click--github-profile"
                aria-label="Github"
                rel="noreferrer"
              >
                <svg
                  className="h-7 w-7 fill-current transition-all hover:text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            id="footer-links-container"
            className="grid w-full grid-cols-2 gap-10 md:w-7/12 md:grid-cols-3 md:gap-6"
          >
            <div className="flex flex-col">
              <h3 className="footer-header">Company</h3>
              <ul>
                <li className="footer-item umami--click--about-footer">
                  <Link href="/team"> About </Link>
                </li>
                <li className="footer-item umami--click--blog-footer">
                  <Link href="/blog"> Blog </Link>
                </li>
                <li className="footer-item  umami--click--contact-us-footer">
                  <Link href="/contact-us"> Contact Us </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="footer-header">Legal</h3>
              <ul>
                <li className="footer-item umami--click--terms-of-use-footer">
                  <Link href="/termsofuse"> Terms of Use </Link>
                </li>
                <li className="footer-item umami--click--privacy-policy-footer">
                  <Link href="/privacypolicy"> Privacy Policy </Link>
                </li>
                <li className="footer-item umami--click--cookie-policy-footer">
                  <Link href="/cookiepolicy"> Cookie Policy </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col font-inter">
              <h3 className="footer-header">Products</h3>
              <ul>
                <li className="footer-item umami--click--soda-for-sparc-footer">
                  <Link href="/sodaforsparc"> SODA for SPARC </Link>
                </li>
                <li className="footer-item umami--click--fairshare-footer">
                  <Link href="/fairshare">FAIRshare</Link>
                </li>
                <li className="footer-item umami--click--knowmore-footer">
                  <Link href="/knowmore"> KnowMore </Link>
                </li>
                <li className="footer-item umami--click--sparclink-footer">
                  <Link href="/sparclink"> SPARClink </Link>
                </li>
                <li className="footer-item umami--click--aqua-footer">
                  <Link href="/aqua"> AQUA </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className=" h-[1px] border-none border-gray-200 bg-gray-200 text-gray-200" />

        <div className="mt-3 flex h-full flex-col items-center justify-center space-y-4 space-x-0 divide-x-2 divide-none divide-gray-200 py-5 md:flex-row md:space-y-0 md:space-x-4 md:divide-solid">
          <div className="text-center text-gray-500">
            <p>© 2022 FAIR Data Innovations Hub.</p>
            <p>All rights reserved.</p>
          </div>

          <div className=" mt-0  flex flex-row items-center justify-center">
            <a
              href="https://vercel.com/?utm_source=fairdataihub&utm_campaign=oss"
              target="_blank"
              rel="noreferrer"
              className="umami--click--vercel-footer mx-0 md:mx-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
                alt="Powered by Vercel"
                className="w-40"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
