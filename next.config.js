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
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fair-biors.org',
        port: '',
        pathname: '/**',
      },
      { protocol: 'https', hostname: 'github.com', port: '', pathname: '/**' },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/**',
      },
      { protocol: 'https', hostname: 'i.imgur.com', port: '', pathname: '/**' },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'berkeleybop.github.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'researcherprofiles.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'elixir-europe.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.fairdataihub.org',
        port: '',
        pathname: '/**',
      },
      { protocol: 'https', hostname: 'os.nav.fund', port: '', pathname: '/**' },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dailydoseofds.com',
        port: '',
        pathname: '/**',
      },

      // often needed for GitHub-hosted images
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
