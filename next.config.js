/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.edamam.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      }
    ],
  },
};

module.exports = nextConfig;