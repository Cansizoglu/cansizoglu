import type { MetadataRoute } from 'next'
import { site } from '@/data/site'

/**
 * Vercel preview ve development deploy'larında tüm site kapatılır; aynı içerik
 * geçici adreslerden indexlenmesin. Production'da (ve VERCEL_ENV olmayan yerel
 * build'de) site açıktır ve sitemap bildirilir.
 */
const isProduction = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production'

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
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
