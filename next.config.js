// next.config.js - Next.js tweaks for Observer
// Excludes Prisma from client bundling—fixes binary errors in App Router.

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],  // Server-only: No browser bundling
  },
};

module.exports = nextConfig;