/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['www.themoviedb.org', 'image.tmdb.org', 'i1.fdbimg.pl']
    },
    async redirects() {
      return [
        {
          source: '/tiktok',
          destination: 'https://www.tiktok.com/@filmersipl',
          permanent: true,
        },
        {
          source: '/facebook',
          destination: 'https://www.facebook.com/filmersi',
          permanent: true,
        },
      ]
    },
  }