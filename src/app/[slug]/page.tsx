import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { District } from '@/data/districts'
import type { Service } from '@/data/services'
import type { Route } from '@/data/routes'
import type { BlogPost } from '@/data/blog'
import type { Neighborhood } from '@/data/districts'
import { districts, districtByPath, neighborhoodBySlug } from '@/data/districts'
import { services, serviceBySlug } from '@/data/services'
import { routes, routeBySlug } from '@/data/routes'
import { posts, postBySlug } from '@/data/blog'
import DistrictView from '@/views/DistrictView'
import ServiceView from '@/views/ServiceView'
import RouteView from '@/views/RouteView'
import PostView from '@/views/PostView'
import NeighborhoodView from '@/views/NeighborhoodView'
import { pageMeta } from '@/lib/seo'
import {
  hizmetYolu,
  ilYolu,
  yaziYolu,
  semtYolu,
  kokSemt,
  urlSemt,
  slugHizmet,
  slugIl,
  slugYazi,
  urlHizmet,
  urlIl,
  urlIlce,
  urlYazi,
} from '@/lib/urls'

/*
  Eski WordPress sitesindeki gibi ilçe, il, hizmet ve blog sayfalarının hepsi
  kök seviyede yayınlanıyor. Tek bir dinamik segment olabildiği için adresin
  hangi içeriğe ait olduğunu burada çözüyoruz; slug'lar birbiriyle çakışmıyor.
*/

type Props = { params: { slug: string } }

type Icerik =
  | { tur: 'ilce'; veri: District }
  | { tur: 'hizmet'; veri: Service }
  | { tur: 'il'; veri: Route }
  | { tur: 'yazi'; veri: BlogPost }
  | { tur: 'semt'; ilce: District; semt: Neighborhood }

function coz(yol: string): Icerik | undefined {
  const ilce = districtByPath(yol)
  if (ilce) return { tur: 'ilce', veri: ilce }

  // Eski sitede kök seviyede duran semtler (Etlik, Eryaman, Çayyolu gibi)
  const kok = kokSemt(yol)
  if (kok) {
    const ilcesi = districtByPath(kok.ilce)
    const semti = ilcesi ? neighborhoodBySlug(ilcesi, kok.semt) : undefined
    if (ilcesi && semti) return { tur: 'semt', ilce: ilcesi, semt: semti }
  }

  const hizmet = serviceBySlug(slugHizmet(yol))
  if (hizmet) return { tur: 'hizmet', veri: hizmet }

  const il = routeBySlug(slugIl(yol))
  if (il) return { tur: 'il', veri: il }

  const yazi = postBySlug(slugYazi(yol))
  if (yazi) return { tur: 'yazi', veri: yazi }

  return undefined
}

export const dynamicParams = false

export function generateStaticParams() {
  return [
    ...districts.map((d) => d.path),
    ...services.map((s) => hizmetYolu[s.slug] ?? s.slug),
    ...routes.map((r) => ilYolu[r.slug] ?? r.slug),
    ...posts.map((p) => yaziYolu[p.slug] ?? p.slug),
    ...Object.values(semtYolu),
  ].map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const icerik = coz(params.slug)
  if (!icerik) return {}

  if (icerik.tur === 'ilce') {
    const d = icerik.veri
    return pageMeta({
      title: d.metaTitle,
      description: d.metaDescription,
      path: urlIlce(d.path),
    })
  }

  if (icerik.tur === 'hizmet') {
    const s = icerik.veri
    return pageMeta({
      title: s.metaTitle,
      description: s.metaDescription,
      path: urlHizmet(s.slug),
    })
  }

  if (icerik.tur === 'il') {
    const r = icerik.veri
    return pageMeta({
      title: `Ankara ${r.city} Evden Eve Nakliyat | ${r.km} km`,
      description: `Ankara ${r.city} evden eve nakliyat: yaklaşık ${r.km} km, ${r.drive} yol. Ambalaj, söküm, montaj ve sigorta dahil, aktarmasız taşıma. Ücretsiz keşif.`,
      path: urlIl(r.slug),
    })
  }

  if (icerik.tur === 'semt') {
    const { ilce: d, semt: n } = icerik
    // "Şereflikoçhisar Merkez | Şereflikoçhisar Ankara" gibi tekrarlarda ilçe adı atlanıyor.
    const scope = n.name.startsWith(d.name) ? 'Ankara' : `${d.name} Ankara`
    return pageMeta({
      title: `${n.name} Evden Eve Nakliyat | ${scope}`,
      description: `${n.name} evden eve nakliyat: ${scope} içinde asansörlü, ambalajlı ve sigortalı ev taşıma. Ücretsiz keşif, aynı gün söküm, taşıma ve kurulum.`,
      path: urlSemt(d.path, n.slug),
    })
  }

  const p = icerik.veri
  return pageMeta({
    title: p.metaTitle,
    description: p.metaDescription,
    path: urlYazi(p.slug),
    images: [p.image],
  })
}

export default function KokSayfa({ params }: Props) {
  const icerik = coz(params.slug)
  if (!icerik) notFound()

  if (icerik.tur === 'ilce') return <DistrictView district={icerik.veri} />
  if (icerik.tur === 'hizmet') return <ServiceView service={icerik.veri} />
  if (icerik.tur === 'il') return <RouteView route={icerik.veri} />
  if (icerik.tur === 'semt')
    return <NeighborhoodView district={icerik.ilce} neighborhood={icerik.semt} />
  return <PostView post={icerik.veri} />
}
