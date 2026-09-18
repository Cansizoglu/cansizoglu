import type { MetadataRoute } from 'next'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { districts } from '@/data/districts'
import { posts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/hizmetler`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/bolgeler`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/fiyat-teklifi`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/hakkimizda`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${site.url}/iletisim`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${site.url}/galeri`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${site.url}/nakliyat-fiyat-hesaplama`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.url}/hizmetler/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const districtPages: MetadataRoute.Sitemap = districts.map((district) => ({
    url: `${site.url}/bolgeler/${district.path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const neighborhoodPages: MetadataRoute.Sitemap = districts.flatMap((district) =>
    district.neighborhoods.map((n) => ({
      url: `${site.url}/bolgeler/${district.path}/${n.slug}`,
      lastModified: now,
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
