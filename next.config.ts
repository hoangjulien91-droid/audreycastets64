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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https: blob:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' data: https:; connect-src 'self' https: wss:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; frame-src 'self' https://zcal.co https://*.zcal.co https://static.zcal.co https://*.google.com; child-src 'self' https://zcal.co https://*.zcal.co https://static.zcal.co;",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
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
