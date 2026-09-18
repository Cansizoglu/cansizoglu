import type { Metadata } from 'next'
import { site } from '@/data/site'

type ShareImage = {
  src: string
  width: number
  height: number
  alt?: string
}

type PageMetaInput = {
  title: string
  description: string
  path: string
  images?: (string | ShareImage)[]
}

/**
 * Paylaşım görselinin varsayılanı. WhatsApp, Facebook ve X büyük önizlemeyi
 * yalnızca 1.91:1 oranındaki görselde gösteriyor; bu yüzden slider görseli
 * (1920x600) yerine bu oran için ayrıca hazırlanmış kapak kullanılıyor.
 */
const DEFAULT_SHARE_IMAGE: ShareImage = {
  src: '/img/og-cansizoglu-nakliyat.jpg',
  width: 1200,
  height: 630,
  alt: 'Cansızoğlu Nakliyat taşıma aracı ve mobil asansörü, çağrı hattı 444 0 510',
}

const MIME: Record<string, string> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
}

/**
 * Google başlığı yaklaşık 600 piksel sonra kesiyor; Türkçe metinde bu 60-62
 * karaktere denk geliyor. Marka adı sona sığıyorsa uzun, sığmıyorsa kısa
 * biçimiyle ekleniyor; ikisi de sığmıyorsa başlık markasız kalıyor. Böylece
 * anahtar kelime her zaman başta ve görünür oluyor.
 */
const TITLE_MAX = 62

export function composeTitle(title: string) {
  for (const suffix of [` | ${site.name}`, ' | Cansızoğlu', '']) {
    if (title.length + suffix.length <= TITLE_MAX) return title + suffix
  }
  return title
}

export function pageMeta({ title, description, path, images }: PageMetaInput): Metadata {
  const url = `${site.url}${path}`
  const fullTitle = composeTitle(title)
  /*
    Görselin gerçek ölçüsü bildirilmezse tarayıcı ve sosyal medya tarafı
    önizlemeyi ya küçük gösteriyor ya da hiç göstermiyor. Bu yüzden ölçüsü
    bilinmeyen bir görsel gönderilirse varsayılan kapağa düşülüyor.
  */
  const shareImages: ShareImage[] = (images ?? [DEFAULT_SHARE_IMAGE]).map((img) =>
    typeof img === 'string' ? DEFAULT_SHARE_IMAGE : img,
  )
  const ogImages = shareImages.map((img) => ({
    url: `${site.url}${img.src}`,
    secureUrl: `${site.url}${img.src}`,
    width: img.width,
    height: img.height,
    alt: img.alt ?? fullTitle,
    type: MIME[img.src.split('.').pop() ?? ''] ?? 'image/jpeg',
  }))

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ogImages.map((img) => ({ url: img.url, alt: img.alt })),
    },
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': `${site.url}/#kurulus`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone.gsm,
    email: site.email,
    foundingDate: String(site.foundedYear),
    image: `${site.url}/img/slider-1.jpg`,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.maps.placeUrl,
    areaServed: {
      '@type': 'City',
      name: 'Ankara',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.youtube],
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  }
}

export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

export function serviceJsonLd(input: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: `${site.url}${input.path}`,
    serviceType: input.name,
    provider: { '@id': `${site.url}/#kurulus` },
    areaServed: { '@type': 'City', name: 'Ankara' },
  }
}

export function articleJsonLd(input: {
  title: string
  description: string
  path: string
  date: string
  image?: {
    src: string
    width: number
    height: number
    alt: string
    caption: string
    description: string
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    dateModified: input.date,
    mainEntityOfPage: `${site.url}${input.path}`,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@id': `${site.url}/#kurulus` },
    ...(input.image
      ? {
          image: {
            '@type': 'ImageObject',
            url: `${site.url}${input.image.src}`,
            width: input.image.width,
            height: input.image.height,
            name: input.image.alt,
            caption: input.image.caption,
            description: input.image.description,
          },
        }
      : {}),
  }
}
