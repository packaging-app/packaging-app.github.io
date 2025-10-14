import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  ESLint:{
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
