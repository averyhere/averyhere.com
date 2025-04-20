import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
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
