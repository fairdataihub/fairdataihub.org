import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const getOS = async function () {
    let userAgent = window.navigator.userAgent;
    let platform = window.navigator.platform;
    let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    let iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = 'null';
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'macOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'all';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'windows';
    } else if (/Android/.test(userAgent)) {
      os = 'all';
    } else if (/Linux/.test(platform)) {
      os = 'linux';
    } else {
      os = 'all';
    }
    return os;
  };

  const getLatestVersion = async function (os) {
    const res = await fetch(
      'https://api.github.com/repos/fairdataihub/SODA-for-SPARC/releases',
    );
    const data = await res.json();
    const release = data[0];
    let link = '';
    release.assets.forEach((asset) => {
      let file_name = asset.name;
      let file_ext = file_name.split('.').pop();
      if (os === 'macOS') {
        if (file_ext === 'dmg') {
          link = asset.browser_download_url;
        }
      }
      if (os === 'windows') {
        if (file_ext === 'exe') {
          link = asset.browser_download_url;
        }
      }
      if (os === 'linux') {
        if (file_ext === 'AppImage') {
          link = asset.browser_download_url;
        }
      }
    });
    return link;
  };

  const downloadSODA = async function () {
    const os = await getOS();
    console.log(os);
    const downloadLink = await getLatestVersion(os);
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href: downloadLink,
    }).click();
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href: 'https://docs.sodaforsparc.io/docs/getting-started/download-soda',
    }).click();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="relative mx-auto max-w-screen-2xl py-5">
        <div className="absolute right-0 top-1 z-0 w-40 opacity-60 sm:top-10">
          <Image
            src="/backgrounds/dot-grid-grey.svg"
            alt="Grey grid"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute bottom-1 right-5 z-0 hidden w-40 opacity-60 sm:bottom-12 lg:block">
          <Image
            src="/backgrounds/dot-grid-grey.svg"
            alt="Grey grid"
            width={500}
            height={500}
          />
        </div>
        <div className="container mx-auto flex w-full flex-col-reverse items-center px-1 py-2 sm:py-4 md:py-10 lg:flex-row">
          <div className="mb-2 flex flex-col items-center pt-5 text-center sm:mb-16 sm:pt-0 md:mb-0 md:items-start md:pr-0 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="mb-1 w-full text-center text-3xl font-black sm:text-4xl">
              SODA for SPARC
            </h1>
            <h2 className="mb-2 w-full text-center text-2xl font-medium sm:text-2xl">
              Keep Calm and Curate!
            </h2>
            <p className="mb-8 w-full text-center font-asap text-base leading-relaxed text-black">
              Your one-stop tool for curating and submitting SPARC datasets
              <br />
              <i> By SPARC investigators, for SPARC investigators </i>
            </p>
            <div className="flex w-full justify-center">
              <button
                className="hidden items-center justify-center rounded border-0 border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600 sm:block"
                onClick={downloadSODA}
              >
                Download now
              </button>
              <a
                href="https://docs.sodaforsparc.io/"
                target="_blank"
                aria-label="SODA for SPARC Documentation"
                rel="noreferrer"
              >
                <button className="rounded border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600 sm:ml-4">
                  Explore the docs
                </button>
              </a>
              <Link
                href="/sodaforsparc/docs/getting-started/User-Interface"
                passHref
              >
                <button className="hidden rounded bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600 sm:ml-4">
                  Explore the OLD docs
                </button>
              </Link>
            </div>
          </div>

          <div className="relative z-10 py-2 sm:py-0 lg:max-w-2xl">
            <div className="absolute left-0 bottom-1 z-0 w-40 opacity-60 sm:bottom-0 lg:hidden">
              <Image
                src="/backgrounds/dot-grid-grey.svg"
                alt="Grey grid"
                width={100}
                height={100}
              />
            </div>
            <img
              src="https://ucarecdn.com/2c9abf3a-ee20-4c9a-aefc-334f4e8360e6/"
              alt="SODA for SPARC app screenshot"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
