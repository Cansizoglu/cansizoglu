import type { RelatedLink } from '@/components/RelatedLinks'
import { services } from '@/data/services'
import { posts } from '@/data/blog'
import { districts, type District } from '@/data/districts'
import { sayfa, urlHizmet, urlIlce, urlSemt, urlYazi } from '@/lib/urls'

/** Her hizmet için konuyla gerçekten ilgili blog yazısı eşleşmesi. */
const serviceToPost: Record<string, string> = {
  'ankara-evden-eve-nakliyat': 'evden-eve-nakliyat-ne-kadar-surer',
  'ankara-ofis-tasima': 'ofis-tasima-rehberi',
  'ankara-asansorlu-nakliyat': 'asansorlu-nakliyat-ne-zaman-gerekir',
  'ankara-asansor-kiralama': 'asansorlu-nakliyat-ne-zaman-gerekir',
  'esya-depolama': 'esya-depolama-rehberi',
  'sigortali-tasima': 'nakliyat-sigortasi-nedir',
  'ambalajli-tasima': 'esya-paketleme-rehberi',
  'parca-esya-tasima': 'evden-eve-nakliyat-ne-kadar-surer',
  'ankara-sehir-ici-nakliyat': 'ankara-evden-eve-nakliyat-fiyatlari',
}

const postLink = (slug: string): RelatedLink | null => {
  const post = posts.find((p) => p.slug === slug)
  if (!post) return null
  return { href: urlYazi(post.slug), title: post.title, text: post.excerpt.slice(0, 95) + '…' }
}

const serviceLink = (slug: string): RelatedLink | null => {
  const service = services.find((s) => s.slug === slug)
  if (!service) return null
  return { href: urlHizmet(service.slug), title: service.title, text: service.short }
}

const calculatorLink: RelatedLink = {
  href: sayfa.hesaplama,
  title: 'Fiyat ve km hesaplama aracı',
  text: 'İlçe, ev tipi ve kat bilgisiyle taşınma maliyetinizi hesaplayın.',
}

const quoteLink: RelatedLink = {
  href: sayfa.teklif,
  title: 'Ücretsiz keşif ve fiyat teklifi',
  text: 'Eşyanızı yerinde görüp yazılı fiyat veriyoruz, taşıma günü değişmez.',
}

const compact = (items: (RelatedLink | null)[], limit: number, exclude: string) =>
  items.filter((i): i is RelatedLink => i !== null && i.href !== exclude).slice(0, limit)

/** Hizmet sayfası için: iki komşu hizmet, konuyla ilgili yazı, hesaplama ve teklif. */
export function relatedForService(slug: string): RelatedLink[] {
  const index = services.findIndex((s) => s.slug === slug)
  const neighbours = [
    services[(index + 1) % services.length],
    services[(index + 2) % services.length],
  ].map((s) => serviceLink(s.slug))

  return compact(
    [...neighbours, postLink(serviceToPost[slug] ?? 'ankara-evden-eve-nakliyat-fiyatlari'), calculatorLink, quoteLink],
    4,
    urlHizmet(slug),
  )
}

/** İlçe sayfası için: en yakın iki ilçe, iki ana hizmet, hesaplama aracı. */
export function relatedForDistrict(district: District): RelatedLink[] {
  const others = districts
    .filter((d) => d.slug !== district.slug && d.zone === district.zone)
    .slice(0, 2)
    .map<RelatedLink>((d) => ({
      href: urlIlce(d.path),
      title: `${d.name} Evden Eve Nakliyat`,
      text: d.intro[0].slice(0, 95) + '…',
    }))

  return compact(
    [...others, serviceLink('ankara-asansorlu-nakliyat'), calculatorLink],
    4,
    urlIlce(district.path),
  )
}

/** Semt sayfası için: bağlı olduğu ilçe, komşu semt, hizmet ve teklif. */
export function relatedForNeighborhood(district: District, slug: string): RelatedLink[] {
  const sibling = district.neighborhoods.find((n) => n.slug !== slug)
  const items: (RelatedLink | null)[] = [
    {
      href: urlIlce(district.path),
      title: `${district.name} Evden Eve Nakliyat`,
      text: `${district.name} genelinde nasıl çalıştığımızı ve tüm semtleri görün.`,
    },
    sibling
      ? {
          href: urlSemt(district.path, sibling.slug),
          title: `${sibling.name} Evden Eve Nakliyat`,
          text: sibling.intro.slice(0, 95) + '…',
        }
      : null,
    calculatorLink,
    quoteLink,
  ]
  return compact(items, 4, urlSemt(district.path, slug))
}

/** Blog yazısı için: iki komşu yazı, konuyla ilgili hizmet, hesaplama aracı. */
export function relatedForPost(slug: string): RelatedLink[] {
  const index = posts.findIndex((p) => p.slug === slug)
  const neighbours = [
    posts[(index + 1) % posts.length],
    posts[(index + 2) % posts.length],
  ].map((p) => postLink(p.slug))

  const service = Object.entries(serviceToPost).find(([, postSlug]) => postSlug === slug)
  return compact(
    [...neighbours, service ? serviceLink(service[0]) : serviceLink('ankara-evden-eve-nakliyat'), calculatorLink],
    4,
    urlYazi(slug),
  )
}
