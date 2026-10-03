/**
 * Tek kanonik adres: https://www.ankaraevdenevenakliye.net.tr
 * Vercel dışındaki bir ortamda (yerel build vb.) VERCEL_ENV boş gelir;
 * o durumda production kabul ediliyor.
 */
const CANONICAL_HOST = 'www.ankaraevdenevenakliye.net.tr'
const isProduction = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production'

/** Arama motorunun bu adreste hiçbir şeyi indexlememesi için. */
const NOINDEX = { key: 'X-Robots-Tag', value: 'noindex, nofollow' }

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  async redirects() {
    return [
      {
        // non-www → www (Vercel alan adı yönlendirmesi kapalı kalsa bile)
        source: '/:path*',
        has: [{ type: 'host', value: 'ankaraevdenevenakliye.net.tr' }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      // Preview / development deploy'ları tamamen indexlenmez.
      ...(isProduction ? [] : [{ source: '/:path*', headers: [NOINDEX] }]),
      {
        // Production deploy'unun *.vercel.app adresleri de indexlenmez;
        // aynı içerik yalnızca www alan adında indexlenir.
        source: '/:path*',
        has: [{ type: 'host', value: '(?<vercelhost>.*)\\.vercel\\.app' }],
        headers: [NOINDEX],
      },
      {
        // Statik varlıklar için uzun süreli önbellek (LiteSpeed cache karşılığı)
        source: '/img/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ]
  },
}

export default nextConfig
