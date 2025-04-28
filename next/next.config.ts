import type { NextConfig } from "next";

const nextConfig: NextConfig = {

// <<<<<<< resource-page
  /* config options here */

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
