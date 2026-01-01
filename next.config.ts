import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  transpilePackages: [],
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-slot",
    ],
  },
  reactCompiler: true,
};

// // @ts-expect-error Serwist typing issue
// import withSerwistInit from "@serwist/next";

// const withSerwist = withSerwistInit({
//   swSrc: "src/app/sw.ts",
//   swDest: "public/sw.js",
//   disable: true, // S-Tier Bible: Disable Serwist build due to Next.js 16 Canary incompatibility (WorkerError)
// });

// export default withSerwist(nextConfig);
export default nextConfig;
// Orchids restart: 1760612418323
