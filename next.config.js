/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'files.stripe.com'
      },
      {
        protocol: 'https',
        hostname: 'placehold.co'
      }
    ]
  }
}

module.exports = nextConfig
