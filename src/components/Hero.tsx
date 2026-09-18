'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { site } from '@/data/site'
import Icon from './Icon'

/**
 * Tam genişlik tanıtım slaytı. Ağır bir slider kütüphanesi kullanılmaz;
 * geçişler sadece CSS opacity ile yapılır, bu yüzden sayfa hızını etkilemez.
 * İlk slayt LCP görseli olduğu için priority ile yüklenir.
 */
const slides = [
  {
    image: '/img/slider-1.jpg',
    alt: 'Cansızoğlu Nakliyat kapalı kasa taşıma aracı ve mobil asansör Ankara’da çalışırken',
    eyebrow: `${site.foundedYear}'den beri Ankara'da aile şirketi`,
    title: 'Ankara Evden Eve Nakliyat',
    highlight: 'Evden Eve Nakliyat',
    text: 'Ücretsiz keşif, ambalajlı paketleme, asansörlü taşıma ve sigortalı nakliyat. Söküm, taşıma ve montaj tek fiyata dahil; eviniz aynı gün yeni adresinde kurulur.',
  },
  {
    image: '/img/slider-3.jpg',
    alt: 'Asansörlü nakliyat aracı Ankara’da bir sitenin önünde kurulu',
    eyebrow: 'Kendi asansör ve araç filomuz',
    title: 'Ankara Asansörlü Nakliyat',
    highlight: 'Asansörlü Nakliyat',
    text: 'Asansörsüz binada yüksek kat sorun değil. Mobil taşıma asansörümüz ekiple aynı saatte adreste olur, eşyanız merdivende zarar görmeden iner.',
  },
  {
    image: '/img/slider-2.jpg',
    alt: 'Cansızoğlu Nakliyat araç filosu Ankara’da taşıma sırasında',
    eyebrow: 'Ankara’nın 25 ilçesinde hizmet',
    title: 'Ankara Nakliyat Fiyatları',
    highlight: 'Nakliyat Fiyatları',
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
  const paused = useRef(false)

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="relative isolate overflow-hidden bg-brand-950"
      aria-roledescription="carousel"
      aria-label="Cansızoğlu Nakliyat tanıtım görselleri"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/* Arka plan görselleri */}
      {slides.map((slide, i) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`absolute inset-0 -z-10 object-cover transition-opacity duration-1000 ease-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* Okunabilirlik için koyu degrade */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-950/40"
        aria-hidden="true"
      />

      <div className="container-site relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          {slides.map((slide, i) => {
            const active = i === index
            const Heading = i === 0 ? 'h1' : 'p'
            return (
              <div
                key={slide.image}
                aria-hidden={!active}
                className={
                  active
                    ? 'transition-all duration-700 ease-out'
                    : 'pointer-events-none absolute inset-x-0 top-0 h-0 overflow-hidden opacity-0'
                }
              >
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                  <Icon name="star-full" className="h-3.5 w-3.5" />
                  {slide.eyebrow}
                </p>
                <Heading className="text-3xl font-extrabold leading-tight text-white drop-shadow sm:text-4xl lg:text-5xl">
                  {slide.title.replace(slide.highlight, '').trim()}{' '}
                  <span className="text-accent-400">{slide.highlight}</span>
                </Heading>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-100 sm:text-lg">
                  {slide.text}
                </p>
              </div>
            )
          })}

          <ul className="mt-7 grid gap-2 sm:grid-cols-2">
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

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/fiyat-teklifi" className="btn-primary">
              Ücretsiz Fiyat Teklifi Al
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a href={site.phone.callCenterHref} className="btn-white">
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.callCenter}
            </a>
          </div>
        </div>

        {/* Slayt kontrolleri */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => go(i)}
                aria-label={`${i + 1}. slayta geç: ${slide.title}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-10 bg-accent-500' : 'w-5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Önceki slayt"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Sonraki slayt"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15"
            >
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hızlı hizmet kartları */}
      <div className="relative border-t border-white/10 bg-white">
        <div className="container-site grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {quickServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center gap-3 rounded-xl border border-brand-100 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition group-hover:bg-accent-600 group-hover:text-white">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-brand-900">{service.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
