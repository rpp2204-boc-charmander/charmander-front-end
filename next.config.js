/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    AUTH: process.env.AUTH,
    STRAVA_ID: process.env.STRAVA_ID,
    STRAVA_SECRET: process.env.STRAVA_SECRET,
    BACKEND_URL: process.env.BACKEND_URL
  },
  async redirects () {
    return [
      {
        source: "/strava/:slug*",
        destination: "/overview", // Matched parameters can be used in the destination
        permanent: true
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.edamam.com'
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      }
    ],
  },
};

module.exports = nextConfig
