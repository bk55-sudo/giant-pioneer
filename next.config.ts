import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/giant-pioneer',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
