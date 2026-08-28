/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output for Docker/Vercel optimization
  output: 'standalone',

  reactStrictMode: true,
  poweredByHeader: false,

  // Image optimization (AVIF/WebP, long cache)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: 'em.realscout.com' },
      { protocol: 'https', hostname: 'www.realscout.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },

  compress: true,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },

  experimental: {
    // Tree-shake barrel imports (lucide-react is also default-optimized in recent Next 14)
    optimizePackageImports: ['lucide-react', '@radix-ui/react-slot', '@radix-ui/react-toast'],
    serverComponentsExternalPackages: ['@anthropic-ai/sdk', 'openai'],
  },

  // Redirect non-www to www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'heyberkshire.com',
          },
        ],
        destination: 'https://www.heyberkshire.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'newbridgehomesforsale.com',
          },
        ],
        destination: 'https://www.newbridgehomesforsale.com/:path*',
        permanent: true,
      },
    ]
  },

  // Proxy only Flask FAQ routes — do not shadow Next.js App Router /api handlers
  rewrites: async () => {
    if (process.env.NODE_ENV !== 'development') {
      return []
    }
    return [
      {
        source: '/api/generate-faq',
        destination: 'http://127.0.0.1:5328/api/generate-faq',
      },
      {
        source: '/api/hello',
        destination: 'http://127.0.0.1:5328/api/hello',
      },
    ]
  },

  // Enhanced security headers including CSP for RealScout + Calendly widgets
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://www.googletagmanager.com https://www.google-analytics.com https://widgetbe.com",
              "style-src 'self' 'unsafe-inline' https://em.realscout.com https://www.realscout.com https://assets.calendly.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' data: https://assets.calendly.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://openrouter.ai https://api.openai.com https://calendly.com https://www.google-analytics.com https://analytics.google.com https://*.ingest.sentry.io https://widgetbe.com",
              "frame-src 'self' https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com https://www.google.com https://maps.google.com https://*.google.com",
              "worker-src 'self' blob:",
            ].join('; '),
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE === 'true' && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze.html',
          openAnalyzer: false,
        })
      )
    }
    return config
  },
}

const { withSentryConfig } = require('@sentry/nextjs')

module.exports = withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
  },
  {
    widenClientFileUpload: true,
    tunnelRoute: '/monitoring',
    hideSourceMaps: true,
    disableLogger: true,
  }
)
