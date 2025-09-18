/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour export statique Netlify
  output: "export",
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },

  // Optimisations images pour export statique
  images: {
    unoptimized: true, // Requis pour export statique
    formats: ["image/avif", "image/webp"],
    domains: ["localhost"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.netlify.app",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
    ],
  },

  // Configuration pour le déploiement - désactivation temporaire des warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optimisations performance
  compress: true,
  poweredByHeader: false,

  // Headers de sécurité
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirections et réécritures
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
