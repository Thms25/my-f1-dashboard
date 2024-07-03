/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.formula1.com',
      },
      {
        protocol: 'https',
        hostname: 'media.formula1.com',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
