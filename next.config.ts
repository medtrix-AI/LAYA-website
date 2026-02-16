import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/LAYA-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
