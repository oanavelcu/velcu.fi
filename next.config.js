/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove assetPrefix and basePath for custom domain deployment
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/velcu.fi' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/velcu.fi' : '',
}

module.exports = nextConfig