import type { MetadataRoute } from 'next'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { districts } from '@/data/districts'
import { posts } from '@/data/blog'
import { aboutPages } from '@/data/aboutPages'
import { routes } from '@/data/routes'
import { sayfa, urlHizmet, urlIl, urlIlce, urlKurumsal, urlSemt, urlYazi } from '@/lib/urls'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const tam = (path: string) => `${site.url}${path}`

  const staticPages: MetadataRoute.Sitemap = [
    { url: tam('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: tam(sayfa.hizmetler), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: tam(sayfa.bolgeler), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: tam(sayfa.teklif), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: tam(sayfa.hakkimizda), lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    ...aboutPages.map((page) => ({
      url: tam(urlKurumsal(page.slug)),
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    })),
    { url: tam(sayfa.iletisim), lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: tam(sayfa.galeri), lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: tam(sayfa.hesaplama), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: tam(sayfa.blog), lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: tam(sayfa.sehirlerArasi), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...routes.map((route) => ({
      url: tam(urlIl(route.slug)),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: tam(urlHizmet(service.slug)),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const districtPages: MetadataRoute.Sitemap = districts.map((district) => ({
    url: tam(urlIlce(district.path)),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const neighborhoodPages: MetadataRoute.Sitemap = districts.flatMap((district) =>
    district.neighborhoods.map((n) => ({
      url: tam(urlSemt(district.path, n.slug)),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  )

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: tam(urlYazi(post.slug)),
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
