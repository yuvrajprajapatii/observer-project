// next.config.js - Next.js tweaks for Observer
// Excludes Prisma from client bundling & disables ESLint check during build.

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Prevents Prisma from being bundled into client-side code (avoids binary issues)
    serverComponentsExternalPackages: ['@prisma/client'],
  },

  eslint: {
    // Temporarily disable ESLint errors from breaking builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
