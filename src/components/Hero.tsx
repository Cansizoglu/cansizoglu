'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { site } from '@/data/site'
import Icon from './Icon'

/**
 * Tanıtım slaytı. Ağır bir slider kütüphanesi kullanılmaz; geçişler sadece
 * CSS opacity ile yapılır, bu yüzden sayfa hızını etkilemez.
 *
 * Mobilde görsel akış içinde bir kart olarak durur ve tamamı görünür;
 * masaüstünde aynı görsel tam genişlik zemine geçer, yazı üstüne biner.
 * İlk slayt LCP görseli olduğu için priority ile yüklenir.
 */
const slides = [
  {
    image: '/img/slider-1.jpg',
    alt: 'Cansızoğlu Nakliyat kapalı kasa taşıma aracı ve mobil asansör Ankara’da çalışırken',
    caption: 'Evden eve nakliyat',
    short: 'Ücretsiz keşif, ambalajlı paketleme, asansörlü ve sigortalı taşıma.',
    text: 'Ücretsiz keşif, ambalajlı paketleme, asansörlü taşıma ve sigortalı nakliyat. Söküm, taşıma ve montaj tek fiyata dahil; eviniz aynı gün yeni adresinde kurulur.',
  },
  {
    image: '/img/slider-3.jpg',
    alt: 'Asansörlü nakliyat aracı Ankara’da bir sitenin önünde kurulu',
    caption: 'Asansörlü nakliyat',
    short: 'Asansörsüz binada yüksek kat sorun değil, mobil asansörümüz ekiple gelir.',
    text: 'Asansörsüz binada yüksek kat sorun değil. Mobil taşıma asansörümüz ekiple aynı saatte adreste olur, eşyanız merdivende zarar görmeden iner.',
  },
  {
    image: '/img/slider-2.jpg',
    alt: 'Cansızoğlu Nakliyat araç filosu Ankara’da taşıma sırasında',
    caption: 'Nakliyat fiyatları',
    short: 'Keşifte verdiğimiz yazılı fiyat taşıma günü değişmez.',
    text: 'Keşifte verdiğimiz yazılı fiyat taşıma günü değişmez. Fiyat ve km hesaplama aracımızla taşınma maliyetinizi şimdiden görebilirsiniz.',
  },
]

const quickServices = [
  { icon: 'home', label: 'Evden Eve Nakliyat', href: '/hizmetler/ankara-evden-eve-nakliyat' },
  { icon: 'office', label: 'Ofis Taşıma', href: '/hizmetler/ankara-ofis-tasima' },
  { icon: 'lift', label: 'Asansörlü Nakliyat', href: '/hizmetler/ankara-asansorlu-nakliyat' },
  { icon: 'warehouse', label: 'Eşya Depolama', href: '/hizmetler/esya-depolama' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  /**
   * Diğer slaytlar ilk boyamadan sonra DOM'a girer. Hepsi baştan basılsaydı
   * ekranda görünmeseler bile tarayıcı üçünü birden indirir ve LCP görseli
   * bant genişliğini onlarla paylaşırdı.
   */
  const [rest, setRest] = useState(false)
  const paused = useRef(false)
  const active = slides[index]

  const go = useCallback((i: number) => {
    setRest(true)
    setIndex((i + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const mount = window.setTimeout(() => setRest(true), 2000)
    const timer = setInterval(() => {
      if (!paused.current) {
        setRest(true)
        setIndex((i) => (i + 1) % slides.length)
      }
    }, 7000)
    return () => {
      window.clearTimeout(mount)
      clearInterval(timer)
    }
  }, [])

  return (
    <section
      className="relative isolate overflow-hidden bg-brand-950"
      aria-label="Cansızoğlu Nakliyat tanıtımı"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/*
        Mobilde: akış içinde, kenarlardan boşluklu, yuvarlatılmış bir kart.
        Görselin en boy oranı 16/5 olduğu için 16/6 kutuda neredeyse tamamı görünür.
        Masaüstünde: bölümün tamamını kaplayan zemin.
      */}
      <div className="relative aspect-[16/7] w-full overflow-hidden sm:aspect-[16/6] lg:absolute lg:inset-0 lg:aspect-auto">
        {slides.map((slide, i) =>
          i === 0 || rest ? (
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              loading={i === 0 ? 'eager' : 'lazy'}
              quality={i === 0 ? 70 : 72}
              sizes="100vw"
              className={`object-cover transition-opacity duration-1000 ease-out ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : null,
        )}
        {/* Okunabilirlik degradesi sadece masaüstünde gerekli */}
        <div
          className="absolute inset-0 hidden bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-950/40 lg:block"
          aria-hidden="true"
        />
      </div>

      <div className="container-site relative py-6 lg:py-28">
        <div className="max-w-2xl">
          {/*
            H1 sabittir ve her zaman görünür. Slayt değiştikçe yalnızca görsel
            ve altındaki kısa cümle değişir; başlığın kaybolması hem okuyucuyu
            şaşırtır hem de sayfanın ana başlığını zayıflatırdı.
          */}
          <p className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white sm:mb-3 sm:px-3 sm:text-xs">
            <Icon name="star-full" className="h-3 w-3" />
            {site.foundedYear}&apos;den beri Ankara&apos;da aile şirketi
          </p>
          <h1 className="text-[27px] font-extrabold leading-tight text-white drop-shadow sm:text-4xl lg:text-5xl">
            Ankara <span className="text-accent-400">Evden Eve Nakliyat</span>
          </h1>
          <p className="mt-2.5 max-w-xl text-[15px] leading-7 text-brand-100 sm:mt-5 sm:text-lg sm:leading-8">
            <span className="lg:hidden">{active.short}</span>
            <span className="hidden lg:inline">{active.text}</span>
          </p>

          <ul className="mt-6 hidden gap-2 sm:grid sm:grid-cols-2">
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

        <div className="mt-4 flex items-center gap-3 lg:mt-8 lg:gap-4">
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => go(i)}
                aria-label={`${i + 1}. görsele geç: ${slide.caption}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-9 bg-accent-500' : 'w-5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Önceki görsel"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15 lg:h-9 lg:w-9"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Sonraki görsel"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15 lg:h-9 lg:w-9"
            >
              <Icon name="arrow" className="h-4 w-4" />
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
