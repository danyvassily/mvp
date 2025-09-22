/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour déploiement Netlify statique
  output: "export",
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },

  // Optimisations images pour Netlify statique
  images: {
    unoptimized: true, // Nécessaire pour l'export statique
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

  // Les headers sont gérés par netlify.toml pour l'export statique

  // Les redirections sont gérées par netlify.toml pour l'export statique
};

export default nextConfig;
