import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.instagram.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
