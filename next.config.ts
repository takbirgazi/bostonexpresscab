import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maamun.xyz',
      },
      {
        protocol: 'https',
        hostname: 'bostonexpresscab.com',
      },
      {
        protocol: 'https',
        hostname: 'admin.bostonexpresscab.com',
      },
    ],
  },

};

export default nextConfig;
