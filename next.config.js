/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/steganography-online',
  assetPrefix: '/steganography-online/',
}

module.exports = nextConfig