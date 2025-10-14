import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,

  basePath: isProd ? '/website' : '',
  assetPrefix: isProd ? '/website/' : '',
  images: {
    unoptimized: true
  },
  eslint:{
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
