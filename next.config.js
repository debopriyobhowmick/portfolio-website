// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/portfolio-website',
    assetPrefix: '/portfolio-website',
  }
  
  module.exports = nextConfig