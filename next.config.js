/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,

  experimental: {
    adjustFontFallbacks: true,
    appDir: true,
  },
};

module.exports = nextConfig;
