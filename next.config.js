/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"], // Add the hostname(s) of your image source(s) here
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "localhost",
  //       port: "3000",
  //       pathname: "uploads",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
