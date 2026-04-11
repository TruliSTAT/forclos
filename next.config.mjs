/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  env: {
    PRISMA_TELEMETRY_SUPPRESSED: '1',
  },
  experimental: {
    // Exclude large/native packages from server bundle (Next.js 14 key)
    serverComponentsExternalPackages: ['playwright', 'playwright-core', 'bullmq', 'ioredis', 'cheerio'],
  },
}

export default nextConfig
