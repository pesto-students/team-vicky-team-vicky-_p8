/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "gigmarket-deploy-58pp5.kinsta.app",
      "gigmarket-backend-5ktlf.kinsta.app",
    ], // Add the hostname(s) of your image source(s) here
  },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "gigmarket-deploy-58pp5.kinsta.app",
  //       port: "8080",
  //       pathname: "/uploads",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
