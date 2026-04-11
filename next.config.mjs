/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  // Suppress Prisma telemetry during build
  env: {
    PRISMA_TELEMETRY_SUPPRESSED: '1',
  },
}

export default nextConfig
