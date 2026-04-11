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
  // Exclude large/native deps from server bundle
  serverExternalPackages: ['playwright', 'playwright-core', 'bullmq', 'ioredis'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Don't bundle playwright — it uses Node APIs not available in Next.js build
      config.externals = [...(config.externals || []), 'playwright', 'playwright-core']
    }
    return config
  },
}

export default nextConfig
