/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable static export for SaaS with client-side authentication
  // This allows dynamic rendering which is required for Firebase auth
  // output: 'standalone', // Uncomment if deploying as standalone server
}

export default nextConfig
