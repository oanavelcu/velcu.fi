import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for custom domain (velcu.fi)
  // Remove basePath and assetPrefix for custom domain deployment
};

export default nextConfig;
