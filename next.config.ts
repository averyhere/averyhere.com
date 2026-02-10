import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "toolbox.marketingtools.apple.com",
        port: "",
        pathname: "/api/v2/badges/download-on-the-app-store/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/bio",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/archive",
        destination: "/",
        permanent: true,
      },
      {
        source: "/my-work",
        destination: "/experience/",
        permanent: true,
      },
      {
        source: "/archive/:path",
        destination: "/",
        permanent: true,
      },
      {
        source: "/boker",
        destination: "/boker.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
