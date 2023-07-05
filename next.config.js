/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio', 'https://car-rental-showcase-mu.vercel.app/_next/image?url=https%3A%2F%2Fcdn.imagin.studio'],
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        appDir: true,
      },
}

module.exports = nextConfig
