'use client'

import Image, { getImageProps } from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { site } from '@/data/site'
import Icon from './Icon'

/**
 * Tanıtım bannerları. Görsellerin üzerinde marka adı ve telefon zaten yazılı
 * olduğu için üstlerine yazı bindirilmez; başlık ve açıklama bannerın altında
 * durur.
 *
 * Mobilde kare banner, masaüstünde geniş bannerlar gösterilir. İlk görsel
 * <picture> ile ekran boyuna göre seçilir; böylece telefon geniş bannerı,
 * masaüstü kare bannerı hiç indirmez. Geçişler sadece CSS opacity ile yapılır.
 */
const slides = [
  {
    image: '/img/ankara-tasima-banner-1.webp',
    alt: 'Ankara Taşıma ekibi paketlenmiş koltukları kapalı kasa kamyondan indiriyor, telefon 0312 341 53 40',
    caption: 'Evden eve nakliyat',
    text: 'Ücretsiz keşif, ambalajlı paketleme, asansörlü taşıma ve sigortalı nakliyat. Söküm, taşıma ve montaj tek fiyata dahil; eviniz aynı gün yeni adresinde kurulur.',
  },
  {
    image: '/img/ankara-tasima-banner-2.webp',
    alt: 'Ankara Taşıma kapalı kasa kamyonu Ankara yolunda, telefon 0312 341 53 40',
    caption: 'Şehir içi ve şehirler arası taşıma',
    text: 'Keşifte verdiğimiz yazılı fiyat taşıma günü değişmez. Fiyat ve km hesaplama aracımızla taşınma maliyetinizi şimdiden görebilirsiniz.',
  },
]

const BANNER = { width: 2048, height: 768 }
const MOBILE = { src: '/img/ankara-tasima-kare.webp', width: 1254, height: 1254 }

const quickServices = [
  { icon: 'home', label: 'Evden Eve Nakliyat', href: '/hizmetler/ankara-evden-eve-nakliyat' },
  { icon: 'office', label: 'Ofis Taşıma', href: '/hizmetler/ankara-ofis-tasima' },
  { icon: 'lift', label: 'Asansörlü Nakliyat', href: '/hizmetler/ankara-asansorlu-nakliyat' },
  { icon: 'warehouse', label: 'Eşya Depolama', href: '/hizmetler/esya-depolama' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  /**
   * İkinci banner ilk boyamadan sonra DOM'a girer; aksi halde LCP görseli
   * bant genişliğini onunla paylaşırdı.
   */
  const [rest, setRest] = useState(false)
  const paused = useRef(false)
  const active = slides[index]

  const go = useCallback((i: number) => {
    setRest(true)
    setIndex((i + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const mount = window.setTimeout(() => setRest(true), 4000)
    const timer = setInterval(() => {
      // Mobilde tek (kare) banner var, orada döndürmeye gerek yok.
      if (!paused.current && window.matchMedia('(min-width: 640px)').matches) {
        setRest(true)
        setIndex((i) => (i + 1) % slides.length)
      }
    }, 7000)
    return () => {
      window.clearTimeout(mount)
      clearInterval(timer)
    }
  }, [])

  // getImageProps priority desteklemiyor; öncelik img üzerinde fetchPriority ile veriliyor.
  const common = { alt: slides[0].alt, sizes: '100vw', quality: 72, loading: 'eager' as const }
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: slides[0].image, ...BANNER })
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({ ...common, ...MOBILE })

  return (
    <section
      className="relative isolate overflow-hidden bg-brand-950"
      aria-label={`${site.name} tanıtımı`}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="relative w-full">
        <picture>
          <source
            media="(min-width: 640px)"
            srcSet={desktopSrcSet}
            width={BANNER.width}
            height={BANNER.height}
          />
          <source media="(max-width: 639px)" srcSet={mobileSrcSet} width={MOBILE.width} height={MOBILE.height} />
          {/* alt metni imgProps içinden geliyor */}
          <img {...imgProps} fetchPriority="high" className="block h-auto w-full" />
        </picture>
        {slides.slice(1).map((slide, n) =>
          rest ? (
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              fill
              loading="lazy"
              quality={68}
              sizes="100vw"
              className={`hidden object-cover transition-opacity duration-1000 ease-out sm:block ${
                index === n + 1 ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : null,
        )}

      </div>

      <div className="container-site relative grid gap-6 py-7 lg:grid-cols-[1fr_auto] lg:items-center lg:py-10">
        <div className="max-w-3xl">
          <p className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white sm:mb-3 sm:px-3 sm:text-xs">
            <Icon name="star-full" className="h-3 w-3" />
            Ankara&apos;nın her noktasına güvenli taşımacılık
          </p>
          <h1 className="text-[27px] font-extrabold leading-tight text-white sm:text-4xl lg:text-[44px]">
            Ankara <span className="text-accent-400">Evden Eve Nakliyat</span>
          </h1>
          <p className="mt-2.5 max-w-2xl text-[15px] leading-7 text-brand-100 sm:mt-4 sm:text-lg sm:leading-8">
            <span className="sm:hidden">{slides[0].text}</span>
            <span className="hidden sm:inline">{active.text}</span>
          </p>
          <ul className="mt-5 hidden gap-2 sm:grid sm:grid-cols-2">
            {[
              'Keşif ve fiyat teklifi ücretsiz',
              'Ambalaj malzemesi fiyata dahil',
              'Kendi asansör ve araç filomuz',
              'Yazılı sözleşme ve taşıma sigortası',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-brand-100">
                <Icon name="check" className="h-4 w-4 shrink-0 text-accent-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-stretch">
          <a href={site.phone.href} className="btn-primary whitespace-nowrap">
            <Icon name="phone" className="h-4 w-4" />
            {site.phone.display}
          </a>
          <Link href="/fiyat-teklifi" className="btn-white whitespace-nowrap">
            Ücretsiz Teklif Al
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <div className="hidden items-center gap-2 sm:flex lg:justify-center">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => go(i)}
                aria-label={`${i + 1}. görsele geç: ${slide.caption}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-9 bg-accent-500' : 'w-5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Önceki görsel"
              className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15"
            >
              <Icon name="arrow" className="h-3.5 w-3.5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Sonraki görsel"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15"
            >
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-white">
        <div className="container-site grid grid-cols-2 gap-2.5 py-5 sm:gap-4 sm:py-8 lg:grid-cols-4">
          {quickServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col items-center gap-2 rounded-xl border border-brand-100 bg-white px-2.5 py-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-md sm:flex-row sm:gap-3 sm:px-5 sm:py-4 sm:text-left"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition group-hover:bg-accent-600 group-hover:text-white sm:h-11 sm:w-11">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <span className="text-[13px] font-semibold leading-snug text-brand-900 sm:text-sm">{service.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
