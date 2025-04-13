import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/bio',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/archive',
        destination: '/',
        permanent: true,
      },
      {
        source: '/my-work',
        destination: '/experience',
        permanent: true,
      },
      {
        source: '/archive/:path',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
