import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.lottiefiles.com",
      },
      {
        protocol: "https",
        hostname: "**.itch.io",
      },
    ],
  },
};

export default nextConfig;
