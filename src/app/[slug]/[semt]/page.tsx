import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { districts, districtByPath, neighborhoodBySlug } from '@/data/districts'
import NeighborhoodView from '@/views/NeighborhoodView'
import { pageMeta } from '@/lib/seo'
import { semtKokte, urlSemt } from '@/lib/urls'

type Props = { params: { slug: string; semt: string } }

export const dynamicParams = false

export function generateStaticParams() {
  // Eski sitede kök seviyede yayınlanan semtler burada değil, /[slug] altında.
  return districts.flatMap((district) =>
    district.neighborhoods
      .filter((n) => !semtKokte(district.path, n.slug))
      .map((n) => ({ slug: district.path, semt: n.slug })),
  )
}

export function generateMetadata({ params }: Props): Metadata {
  const district = districtByPath(params.slug)
  const neighborhood = district ? neighborhoodBySlug(district, params.semt) : undefined
  if (!district || !neighborhood) return {}
  // "Şereflikoçhisar Merkez | Şereflikoçhisar Ankara" gibi tekrarlarda ilçe adı atlanıyor.
  const scope = neighborhood.name.startsWith(district.name) ? 'Ankara' : `${district.name} Ankara`
  return pageMeta({
    title: `${neighborhood.name} Evden Eve Nakliyat | ${scope}`,
    description: `${neighborhood.name} evden eve nakliyat: ${scope} içinde asansörlü, ambalajlı ve sigortalı ev taşıma. Ücretsiz keşif, aynı gün söküm, taşıma ve kurulum.`,
    path: urlSemt(district.path, neighborhood.slug),
  })
}

export default function SemtSayfasi({ params }: Props) {
  const district = districtByPath(params.slug)
  const neighborhood = district ? neighborhoodBySlug(district, params.semt) : undefined
  if (!district || !neighborhood) notFound()

  return <NeighborhoodView district={district} neighborhood={neighborhood} />
}
