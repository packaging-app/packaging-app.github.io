import type { NextConfig } from "next";

// Force basePath and assetPrefix for GitHub Pages deployment branch
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,

  basePath: '/website',
  assetPrefix: '/website/',
  images: {
    unoptimized: true
  },
  eslint:{
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
