/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://3.86.206.55:3002/delivery/:path*',
      },
    ]
  },
}

module.exports = nextConfig
