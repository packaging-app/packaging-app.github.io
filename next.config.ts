import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true
  },
  basePath: isProd ? '/website' : '',
  assetPrefix: isProd ? '/website' : '',
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
