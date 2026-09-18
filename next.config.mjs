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
      /*
        Eski WordPress sitesinde olup yeni sitede birebir karşılığı bulunmayan
        adresler. Sayfaların hepsi kalıcı olarak (301) en yakın içeriğe gidiyor.
      */
      { source: '/s-s-s', destination: '/hakkimizda', permanent: true },
      { source: '/cansizoglu-nakliyat-calisma-sistemi', destination: '/hakkimizda', permanent: true },
      { source: '/kurumsal-referanslar', destination: '/ankara-kurumsal-tasimacilik', permanent: true },
      { source: '/videolarimiz', destination: '/foto-galeri', permanent: true },
      { source: '/evden-eve-nakliyat-araclari', destination: '/foto-galeri', permanent: true },
      { source: '/esya-ambalajlama', destination: '/ambalajli-tasimacilik', permanent: true },
      { source: '/ankara-kucuk-nakliye', destination: '/ankara-parca-esya-tasima', permanent: true },
      {
        source: '/ankara-sehirlerarasi-nakliyat-fiyatlari',
        destination: '/ankara-sehirler-arasi-nakliyat',
        permanent: true,
      },
      {
        source: '/antalya-sehirlerarasi-nakliyat-fiyatlari-2',
        destination: '/antalya-sehirlerarasi-nakliyat-fiyatlari',
        permanent: true,
      },
      { source: '/ankara-adana-ev-tasima', destination: '/adana-sehirlerarasi-nakliyat-fiyatlari', permanent: true },

      /* Sitenin ilk sürümünde kullandığımız iç içe adresler. */
      { source: '/bolgeler', destination: '/hizmet-bolgelerimiz', permanent: true },
      { source: '/bolgeler/:ilce', destination: '/:ilce', permanent: true },
      { source: '/bolgeler/:ilce/:semt', destination: '/:ilce/:semt', permanent: true },
      { source: '/galeri', destination: '/foto-galeri', permanent: true },
      { source: '/fiyat-teklifi', destination: '/fiyat-teklif-formu', permanent: true },
      { source: '/sehirler-arasi', destination: '/ankara-sehirler-arasi-nakliyat', permanent: true },
    ]
  },
  async headers() {
    return [
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
