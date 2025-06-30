/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  }
};

module.exports = nextConfig; 