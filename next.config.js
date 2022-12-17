/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  env: {
    CLIENT_ID: process.env.CLIENT_ID
  }
}

module.exports = nextConfig
