import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === "production"
      ? "/omniebee-global-solutions"
      : "",

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/omniebee-global-solutions/"
      : "",
};

export default nextConfig;
