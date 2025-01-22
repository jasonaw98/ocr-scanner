import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
  images: {
    remotePatterns: [{ hostname: "https://example.com/**" }],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    }
  },
};

export default nextConfig;
