const { platform } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["platform-lookaside.fbsbx.com"],
  },
};

module.exports = nextConfig;
