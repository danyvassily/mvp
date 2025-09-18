/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration optimisée pour Netlify
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Optimisations images pour Netlify
  images: {
    unoptimized: true, // Nécessaire pour l'export statique
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.netlify.app',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
    ],
  },
  
  // Configuration pour le déploiement initial (à améliorer ensuite)
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
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  
  // Redirections et réécritures
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
