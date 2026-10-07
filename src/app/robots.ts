import type { MetadataRoute } from 'next'
import { site } from '@/data/site'

/**
 * Vercel preview ve development deploy'larında tüm site kapatılır; aynı içerik
 * geçici adreslerden indexlenmesin. Production'da (ve VERCEL_ENV olmayan yerel
 * build'de) site açıktır ve sitemap bildirilir.
 */
const isProduction = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production'

/**
 * SEO analiz araçlarının (Ahrefs, Semrush, Majestic vb.) tarayıcıları.
 * Arama motorlarını etkilemez; sadece bu araçların sitemizin sayfalarını ve
 * sitemizden çıkan linkleri görmesini engeller. Bize gelen linkler başka
 * sitelerden tarandığı için bu araçlarda yine görünür.
 */
const seoToolBots = [
  'AhrefsBot',
  'AhrefsSiteAudit',
  'SemrushBot',
  'SiteAuditBot',
  'MJ12bot',
  'DotBot',
  'rogerbot',
  'BLEXBot',
  'DataForSeoBot',
  'serpstatbot',
  'SEOkicks',
  'Barkrowler',
  'MegaIndex',
  'linkdexbot',
  'Screaming Frog SEO Spider',
]

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      { userAgent: seoToolBots, disallow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
