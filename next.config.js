module.exports = {
  reactStrictMode: true,
  images: {
    // In Docker behind a reverse proxy (e.g. Kamal), the /_next/image endpoint can
    // fail (timeouts, wrong host, or container can't fetch remote URLs). Set
    // NEXT_IMAGE_UNOPTIMIZED=true in the container env to serve images directly.
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === 'true',
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'fair-biors.org',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'berkeleybop.github.io',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
      },
      {
        protocol: 'https',
        hostname: 'researcherprofiles.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'elixir-europe.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.fairdataihub.org',
      },
      {
        protocol: 'https',
        hostname: 'os.nav.fund',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'www.dailydoseofds.com',
      },
    ],
  },
};
