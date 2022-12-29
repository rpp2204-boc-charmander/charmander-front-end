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
    STRAVA_REFRESH: process.env.STRAVA_REFRESH,
    STRAVA_REDIRECT: process.env.STRAVA_REDIRECT,
    FITBIT_ID: process.env.FITBIT_ID,
    FITBIT_SECRET: process.env.FITBIT_SECRET,
    FITBIT_SCOPE: process.env.FITBIT_SCOPE,
    FITBIT_RESPONSE_TYPE: process.env.FITBIT_CODE,
    DB_ENDPOINT: process.env.DB_ENDPOINT
  }
  // async redirects() {
  //   return [
  //     {
  //       source: "/strava/:slug*",
  //       destination: "/overview", // Matched parameters can be used in the destination
  //       permanent: true,
  //     },
  //   ];
  // },
}

module.exports = nextConfig
