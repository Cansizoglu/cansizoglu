import Link from 'next/link'
import type { ReactNode } from 'react'
import { services } from '@/data/services'
import { districts } from '@/data/districts'
import { posts } from '@/data/blog'
import { routes } from '@/data/routes'
import { sayfa, urlHizmet, urlIl, urlIlce, urlYazi } from '@/lib/urls'

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
  { term: 'şehirler arası evden eve nakliyat', href: sayfa.sehirlerArasi },
  { term: 'şehirler arası nakliyat', href: sayfa.sehirlerArasi },
  { term: 'şehirler arası taşıma', href: sayfa.sehirlerArasi },
  { term: 'şehirler arası', href: sayfa.sehirlerArasi },
  // Hesaplama ve teklif
  { term: 'fiyat ve km hesaplama aracı', href: sayfa.hesaplama },
  { term: 'fiyat ve km hesaplama', href: sayfa.hesaplama },
  { term: 'fiyat hesaplama aracı', href: sayfa.hesaplama },
  { term: 'nakliyat fiyat hesaplama', href: sayfa.hesaplama },
  { term: 'km hesaplama', href: sayfa.hesaplama },
  { term: 'fiyat listesi', href: sayfa.hesaplama },
  { term: 'ücretsiz keşif', href: sayfa.teklif },
  { term: 'keşif', href: sayfa.teklif },
  { term: 'fiyat teklifi', href: sayfa.teklif },
  { term: 'yazılı fiyat', href: sayfa.teklif },

  // Hizmet kavramları
  { term: 'evden eve nakliyat', href: urlHizmet('ankara-evden-eve-nakliyat') },
  { term: 'ev taşıma', href: urlHizmet('ankara-evden-eve-nakliyat') },
  { term: 'asansörlü nakliyat', href: urlHizmet('ankara-asansorlu-nakliyat') },
  { term: 'asansörlü taşıma', href: urlHizmet('ankara-asansorlu-nakliyat') },
  { term: 'mobil taşıma asansörü', href: urlHizmet('ankara-asansorlu-nakliyat') },
  { term: 'mobil asansör', href: urlHizmet('ankara-asansorlu-nakliyat') },
  { term: 'taşıma asansörü', href: urlHizmet('ankara-asansorlu-nakliyat') },
  { term: 'asansör kiralama', href: urlHizmet('ankara-asansor-kiralama') },
  { term: 'ofis taşıma', href: urlHizmet('ankara-ofis-tasima') },
  { term: 'iş yeri taşıma', href: urlHizmet('ankara-ofis-tasima') },
  { term: 'şehir içi nakliyat', href: urlHizmet('ankara-sehir-ici-nakliyat') },
  { term: 'eşya depolama', href: urlHizmet('esya-depolama') },
  { term: 'depolama', href: urlHizmet('esya-depolama') },
  { term: 'piyano taşıma', href: urlHizmet('piyano-tasima') },
  { term: 'para kasası taşıma', href: urlHizmet('para-kasasi-tasima') },
  { term: 'para kasası', href: urlHizmet('para-kasasi-tasima') },
  { term: 'askılı tekstil taşıma', href: urlHizmet('askili-tekstil-tasima') },
  { term: 'banka taşıma', href: urlHizmet('banka-tasima') },
  { term: 'sigortalı taşıma', href: urlHizmet('sigortali-tasima') },
  { term: 'taşıma sigortası', href: urlHizmet('sigortali-tasima') },
  { term: 'ambalajlı taşıma', href: urlHizmet('ambalajli-tasima') },
  { term: 'parça eşya taşıma', href: urlHizmet('parca-esya-tasima') },
  { term: 'parça eşya', href: urlHizmet('parca-esya-tasima') },

  // Blog kavramları
  { term: 'nakliyat sigortası', href: urlYazi('nakliyat-sigortasi-nedir') },
  { term: 'eşya paketleme', href: urlYazi('esya-paketleme-rehberi') },
  { term: 'ambalaj malzemesi', href: urlYazi('esya-paketleme-rehberi') },
  { term: 'ambalajlama', href: urlYazi('esya-paketleme-rehberi') },
  { term: 'paketleme', href: urlYazi('esya-paketleme-rehberi') },
  { term: 'beyaz eşya', href: urlYazi('beyaz-esya-tasima-rehberi') },
  { term: 'buzdolabı', href: urlYazi('beyaz-esya-tasima-rehberi') },
  { term: 'çamaşır makinesi', href: urlYazi('beyaz-esya-tasima-rehberi') },
  { term: 'taşınma hazırlığı', href: urlYazi('tasinmadan-once-yapilacaklar-listesi') },
  { term: 'taşınmadan önce', href: urlYazi('tasinmadan-once-yapilacaklar-listesi') },
  { term: 'nakliyat firmaları', href: urlYazi('ankara-nakliyat-firmasi-secerken') },
  { term: 'taşıma şirketleri', href: urlYazi('ankara-nakliyat-firmasi-secerken') },

  // Metinde sık geçen doğal ifadeler
  { term: 'ofis taşımacılığı', href: urlHizmet('ankara-ofis-tasima') },
  { term: 'kurumsal taşıma', href: urlHizmet('ankara-ofis-tasima') },
  { term: 'evden eve taşımacılık', href: urlHizmet('ankara-evden-eve-nakliyat') },
  { term: 'söküm ve montaj', href: urlHizmet('ankara-evden-eve-nakliyat') },
  { term: 'mobilya montajı', href: urlHizmet('ankara-evden-eve-nakliyat') },
  { term: 'taşıma sözleşmesi', href: urlHizmet('sigortali-tasima') },
  { term: 'sözleşme', href: urlHizmet('sigortali-tasima') },
  { term: 'ambalaj', href: urlHizmet('ambalajli-tasima') },
  { term: 'arşiv', href: urlYazi('ofis-tasima-rehberi') },
  { term: 'yazlık', href: urlHizmet('esya-depolama') },

  // Kurumsal
  { term: 'araç filomuz', href: sayfa.galeri },
  { term: 'araç filosu', href: sayfa.galeri },
  { term: 'aile şirketi', href: '/hakkimizda' },
  { term: 'hizmet bölgelerimiz', href: sayfa.bolgeler },
  { term: 'tüm hizmetlerimiz', href: sayfa.hizmetler },
]

function buildTerms(): LinkTerm[] {
  const terms: LinkTerm[] = [...staticTerms]

  for (const service of services) {
    terms.push({ term: service.title, href: urlHizmet(service.slug) })
  }
  for (const district of districts) {
    // "Keçiören evden eve nakliyat" gibi uzun kalıp önce, sade ilçe adı sonra.
    terms.push({
      term: `${district.name} evden eve nakliyat`,
      href: urlIlce(district.path),
    })
    terms.push({ term: `${district.name} nakliyat`, href: urlIlce(district.path) })
  }
  for (const post of posts) {
    terms.push({ term: post.title, href: urlYazi(post.slug) })
  }
  // Şehirler arası rotalar: "Ankara İzmir evden eve nakliyat" gibi kalıplar
  for (const route of routes) {
    terms.push({
      term: `Ankara ${route.city} evden eve nakliyat`,
      href: urlIl(route.slug),
    })
    terms.push({
      term: `Ankara ${route.city} nakliyat`,
      href: urlIl(route.slug),
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
