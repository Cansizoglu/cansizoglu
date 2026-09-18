import Link from 'next/link'
import type { ReactNode } from 'react'
import { services } from '@/data/services'
import { districts } from '@/data/districts'
import { posts } from '@/data/blog'
import { routes } from '@/data/routes'

/**
 * Metin içi otomatik iç linkleme.
 *
 * Wikipedia mantığı: bir kavram bir sayfada ilk geçtiği yerde, o kavramı
 * anlatan sayfaya bağlanır. Aynı hedefe ikinci kez link verilmez, okuyanın
 * üzerinde olduğu sayfaya link verilmez ve sayfa başına bir üst sınır vardır.
 * Bu üç kural, linklemenin spama dönüşmesini engeller.
 */

export type LinkTerm = { term: string; href: string }

/** Elle tanımlanan kavramlar. Uzun ifadeler önce denenir. */
const staticTerms: LinkTerm[] = [
  // Şehirler arası
  { term: 'şehirler arası evden eve nakliyat', href: '/sehirler-arasi' },
  { term: 'şehirler arası nakliyat', href: '/sehirler-arasi' },
  { term: 'şehirler arası taşıma', href: '/sehirler-arasi' },
  { term: 'şehirler arası', href: '/sehirler-arasi' },
  // Hesaplama ve teklif
  { term: 'fiyat ve km hesaplama aracı', href: '/nakliyat-fiyat-hesaplama' },
  { term: 'fiyat ve km hesaplama', href: '/nakliyat-fiyat-hesaplama' },
  { term: 'fiyat hesaplama aracı', href: '/nakliyat-fiyat-hesaplama' },
  { term: 'nakliyat fiyat hesaplama', href: '/nakliyat-fiyat-hesaplama' },
  { term: 'km hesaplama', href: '/nakliyat-fiyat-hesaplama' },
  { term: 'fiyat listesi', href: '/nakliyat-fiyat-hesaplama' },
  { term: 'ücretsiz keşif', href: '/fiyat-teklifi' },
  { term: 'keşif', href: '/fiyat-teklifi' },
  { term: 'fiyat teklifi', href: '/fiyat-teklifi' },
  { term: 'yazılı fiyat', href: '/fiyat-teklifi' },

  // Hizmet kavramları
  { term: 'evden eve nakliyat', href: '/hizmetler/ankara-evden-eve-nakliyat' },
  { term: 'ev taşıma', href: '/hizmetler/ankara-evden-eve-nakliyat' },
  { term: 'asansörlü nakliyat', href: '/hizmetler/ankara-asansorlu-nakliyat' },
  { term: 'asansörlü taşıma', href: '/hizmetler/ankara-asansorlu-nakliyat' },
  { term: 'mobil taşıma asansörü', href: '/hizmetler/ankara-asansorlu-nakliyat' },
  { term: 'mobil asansör', href: '/hizmetler/ankara-asansorlu-nakliyat' },
  { term: 'taşıma asansörü', href: '/hizmetler/ankara-asansorlu-nakliyat' },
  { term: 'asansör kiralama', href: '/hizmetler/ankara-asansor-kiralama' },
  { term: 'ofis taşıma', href: '/hizmetler/ankara-ofis-tasima' },
  { term: 'iş yeri taşıma', href: '/hizmetler/ankara-ofis-tasima' },
  { term: 'şehir içi nakliyat', href: '/hizmetler/ankara-sehir-ici-nakliyat' },
  { term: 'eşya depolama', href: '/hizmetler/esya-depolama' },
  { term: 'depolama', href: '/hizmetler/esya-depolama' },
  { term: 'piyano taşıma', href: '/hizmetler/piyano-tasima' },
  { term: 'para kasası taşıma', href: '/hizmetler/para-kasasi-tasima' },
  { term: 'para kasası', href: '/hizmetler/para-kasasi-tasima' },
  { term: 'askılı tekstil taşıma', href: '/hizmetler/askili-tekstil-tasima' },
  { term: 'banka taşıma', href: '/hizmetler/banka-tasima' },
  { term: 'sigortalı taşıma', href: '/hizmetler/sigortali-tasima' },
  { term: 'taşıma sigortası', href: '/hizmetler/sigortali-tasima' },
  { term: 'ambalajlı taşıma', href: '/hizmetler/ambalajli-tasima' },
  { term: 'parça eşya taşıma', href: '/hizmetler/parca-esya-tasima' },
  { term: 'parça eşya', href: '/hizmetler/parca-esya-tasima' },

  // Blog kavramları
  { term: 'nakliyat sigortası', href: '/blog/nakliyat-sigortasi-nedir' },
  { term: 'eşya paketleme', href: '/blog/esya-paketleme-rehberi' },
  { term: 'ambalaj malzemesi', href: '/blog/esya-paketleme-rehberi' },
  { term: 'ambalajlama', href: '/blog/esya-paketleme-rehberi' },
  { term: 'paketleme', href: '/blog/esya-paketleme-rehberi' },
  { term: 'beyaz eşya', href: '/blog/beyaz-esya-tasima-rehberi' },
  { term: 'buzdolabı', href: '/blog/beyaz-esya-tasima-rehberi' },
  { term: 'çamaşır makinesi', href: '/blog/beyaz-esya-tasima-rehberi' },
  { term: 'taşınma hazırlığı', href: '/blog/tasinmadan-once-yapilacaklar-listesi' },
  { term: 'taşınmadan önce', href: '/blog/tasinmadan-once-yapilacaklar-listesi' },
  { term: 'nakliyat firmaları', href: '/blog/ankara-nakliyat-firmasi-secerken' },
  { term: 'taşıma şirketleri', href: '/blog/ankara-nakliyat-firmasi-secerken' },

  // Metinde sık geçen doğal ifadeler
  { term: 'ofis taşımacılığı', href: '/hizmetler/ankara-ofis-tasima' },
  { term: 'kurumsal taşıma', href: '/hizmetler/ankara-ofis-tasima' },
  { term: 'evden eve taşımacılık', href: '/hizmetler/ankara-evden-eve-nakliyat' },
  { term: 'söküm ve montaj', href: '/hizmetler/ankara-evden-eve-nakliyat' },
  { term: 'mobilya montajı', href: '/hizmetler/ankara-evden-eve-nakliyat' },
  { term: 'taşıma sözleşmesi', href: '/hizmetler/sigortali-tasima' },
  { term: 'sözleşme', href: '/hizmetler/sigortali-tasima' },
  { term: 'ambalaj', href: '/hizmetler/ambalajli-tasima' },
  { term: 'arşiv', href: '/blog/ofis-tasima-rehberi' },
  { term: 'yazlık', href: '/hizmetler/esya-depolama' },

  // Kurumsal
  { term: 'araç filomuz', href: '/galeri' },
  { term: 'araç filosu', href: '/galeri' },
  { term: 'aile şirketi', href: '/hakkimizda' },
  { term: 'hizmet bölgelerimiz', href: '/bolgeler' },
  { term: 'tüm hizmetlerimiz', href: '/hizmetler' },
]

function buildTerms(): LinkTerm[] {
  const terms: LinkTerm[] = [...staticTerms]

  for (const service of services) {
    terms.push({ term: service.title, href: `/hizmetler/${service.slug}` })
  }
  for (const district of districts) {
    // "Keçiören evden eve nakliyat" gibi uzun kalıp önce, sade ilçe adı sonra.
    terms.push({
      term: `${district.name} evden eve nakliyat`,
      href: `/bolgeler/${district.path}`,
    })
    terms.push({ term: `${district.name} nakliyat`, href: `/bolgeler/${district.path}` })
  }
  for (const post of posts) {
    terms.push({ term: post.title, href: `/blog/${post.slug}` })
  }
  // Şehirler arası rotalar: "Ankara İzmir evden eve nakliyat" gibi kalıplar
  for (const route of routes) {
    terms.push({
      term: `Ankara ${route.city} evden eve nakliyat`,
      href: `/sehirler-arasi/${route.slug}`,
    })
    terms.push({
      term: `Ankara ${route.city} nakliyat`,
      href: `/sehirler-arasi/${route.slug}`,
    })
  }

  // Uzun ifadeler kısa olanların içinde kaybolmasın diye uzunluğa göre sırala.
  return terms.sort((a, b) => b.term.length - a.term.length)
}

const allTerms = buildTerms()

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/**
 * Türkçe harfleri de kapsayan kelime sınırı. JavaScript'teki \b yalnızca
 * [A-Za-z0-9_] tanıdığı için "nakliyat" ifadesi "nakliyatçı" içinde eşleşirdi.
 */
const pattern = new RegExp(
  `(?<![\\p{L}\\p{N}])(${allTerms.map((t) => escapeRegex(t.term)).join('|')})(?![\\p{L}\\p{N}])`,
  'giu',
)

const hrefByTerm = new Map(allTerms.map((t) => [t.term.toLocaleLowerCase('tr'), t.href]))

export type Linker = (text: string) => ReactNode

/**
 * Bir sayfa için linkleyici üretir. Dönen fonksiyon aynı sayfadaki tüm
 * paragraflarda kullanılır; hangi hedefe link verildiğini kendi içinde tutar.
 *
 * @param currentPath Okunan sayfanın yolu; bu hedefe link verilmez.
 * @param maxLinks    Sayfa başına en fazla link sayısı.
 */
export function createLinker(currentPath: string, maxLinks = 8): Linker {
  const used = new Set<string>([currentPath])
  let count = 0

  return function linkify(text: string): ReactNode {
    if (count >= maxLinks) return text

    const parts: ReactNode[] = []
    let lastIndex = 0
    let match: RegExpExecArray | null
    pattern.lastIndex = 0

    while ((match = pattern.exec(text)) !== null) {
      if (count >= maxLinks) break

      const matched = match[0]
      const href = hrefByTerm.get(matched.toLocaleLowerCase('tr'))
      if (!href || used.has(href)) continue

      used.add(href)
      count += 1

      parts.push(text.slice(lastIndex, match.index))
      parts.push(
        <Link
          key={`${href}-${match.index}`}
          href={href}
          className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 transition hover:text-accent-600 hover:decoration-accent-400"
        >
          {matched}
        </Link>,
      )
      lastIndex = match.index + matched.length
    }

    if (parts.length === 0) return text
    parts.push(text.slice(lastIndex))
    return parts
  }
}
