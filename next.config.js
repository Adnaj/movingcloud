/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },

  // Optional: Disable Next.js image optimization (only if you use <img> tag instead of <Image> component)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
