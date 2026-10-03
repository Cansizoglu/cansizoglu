import type { MetadataRoute } from 'next'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { districts } from '@/data/districts'
import { posts } from '@/data/blog'
import { aboutPages } from '@/data/aboutPages'
import { routes } from '@/data/routes'

/**
 * Yalnızca indexlenmesi gereken kanonik adresler. `lastModified` sadece gerçek
 * tarihi bilinen blog yazılarında veriliyor; her build'de değişen bir tarih
 * Google'ın lastmod sinyaline güvenmemesine yol açar.
 */
export default function sitemap(): MetadataRoute.Sitemap {

  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/hizmetler`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/bolgeler`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/fiyat-teklifi`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/hakkimizda`, changeFrequency: 'yearly', priority: 0.6 },
    ...aboutPages.map((page) => ({
      url: `${site.url}/hakkimizda/${page.slug}`,
     
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    })),
    { url: `${site.url}/iletisim`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${site.url}/galeri`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${site.url}/nakliyat-fiyat-hesaplama`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/esya-hacmi-hesaplama`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/tasinma-kontrol-listesi`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${site.url}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${site.url}/sehirler-arasi`, changeFrequency: 'monthly', priority: 0.9 },
    ...routes.map((route) => ({
      url: `${site.url}/sehirler-arasi/${route.slug}`,
     
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.url}/hizmetler/${service.slug}`,
   
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const districtPages: MetadataRoute.Sitemap = districts.map((district) => ({
    url: `${site.url}/bolgeler/${district.path}`,
   
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const neighborhoodPages: MetadataRoute.Sitemap = districts.flatMap((district) =>
    district.neighborhoods.map((n) => ({
      url: `${site.url}/bolgeler/${district.path}/${n.slug}`,
     
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  )

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...districtPages,
    ...neighborhoodPages,
    ...blogPages,
  ]
}
