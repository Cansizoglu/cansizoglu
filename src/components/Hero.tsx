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
    eyebrow: `${site.foundedYear}'den beri Ankara'da`,
    title: 'Ankara Evden Eve Nakliyat',
    highlight: 'Evden Eve Nakliyat',
    short: 'Ücretsiz keşif, ambalajlı paketleme, asansörlü ve sigortalı taşıma.',
    text: 'Ücretsiz keşif, ambalajlı paketleme, asansörlü taşıma ve sigortalı nakliyat. Söküm, taşıma ve montaj tek fiyata dahil; eviniz aynı gün yeni adresinde kurulur.',
  },
  {
    image: '/img/slider-3.jpg',
    alt: 'Asansörlü nakliyat aracı Ankara’da bir sitenin önünde kurulu',
    eyebrow: 'Kendi asansör ve araç filomuz',
    title: 'Ankara Asansörlü Nakliyat',
    highlight: 'Asansörlü Nakliyat',
    short: 'Asansörsüz binada yüksek kat sorun değil, mobil asansörümüz ekiple gelir.',
    text: 'Asansörsüz binada yüksek kat sorun değil. Mobil taşıma asansörümüz ekiple aynı saatte adreste olur, eşyanız merdivende zarar görmeden iner.',
  },
  {
    image: '/img/slider-2.jpg',
    alt: 'Cansızoğlu Nakliyat araç filosu Ankara’da taşıma sırasında',
    eyebrow: 'Ankara’nın 25 ilçesinde',
    title: 'Ankara Nakliyat Fiyatları',
    highlight: 'Nakliyat Fiyatları',
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
      aria-label="Cansızoğlu Nakliyat tanıtımı"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/*
        Mobilde: akış içinde, kenarlardan boşluklu, yuvarlatılmış bir kart.
        Görselin en boy oranı 16/5 olduğu için 16/6 kutuda neredeyse tamamı görünür.
        Masaüstünde: bölümün tamamını kaplayan zemin.
      */}
      <div className="relative mx-auto mt-5 aspect-[16/6] w-[calc(100%-2rem)] max-w-site overflow-hidden rounded-xl sm:w-[calc(100%-3rem)] lg:absolute lg:inset-0 lg:mt-0 lg:aspect-auto lg:w-full lg:max-w-none lg:rounded-none">
        {slides.map((slide, i) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            loading={i === 0 ? 'eager' : 'lazy'}
            sizes="(max-width: 1024px) 100vw, 100vw"
            className={`object-cover transition-opacity duration-1000 ease-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Okunabilirlik degradesi sadece masaüstünde gerekli */}
        <div
          className="absolute inset-0 hidden bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-950/40 lg:block"
          aria-hidden="true"
        />
      </div>

      <div className="container-site relative py-7 lg:py-28">
        <div className="max-w-2xl">
          {slides.map((slide, i) => {
            const active = i === index
            const Heading = i === 0 ? 'h1' : 'p'
            return (
              <div
                key={slide.image}
                className={
                  active
                    ? ''
                    : 'pointer-events-none absolute inset-x-0 top-0 h-0 overflow-hidden opacity-0'
                }
              >
                <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white sm:text-xs">
                  <Icon name="star-full" className="h-3 w-3" />
                  {slide.eyebrow}
                </p>
                <Heading className="text-[26px] font-extrabold leading-tight text-white drop-shadow sm:text-4xl lg:text-5xl">
                  {slide.title.replace(slide.highlight, '').trim()}{' '}
                  <span className="text-accent-400">{slide.highlight}</span>
                </Heading>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-brand-100 sm:mt-5 sm:text-lg sm:leading-8">
                  <span className="lg:hidden">{slide.short}</span>
                  <span className="hidden lg:inline">{slide.text}</span>
                </p>
              </div>
            )
          })}

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

          <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
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

        <div className="mt-6 flex items-center gap-4 lg:mt-10">
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => go(i)}
                aria-label={`${i + 1}. slayta geç: ${slide.title}`}
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

      <div className="relative border-t border-white/10 bg-white">
        <div className="container-site grid gap-3 py-6 sm:grid-cols-2 sm:gap-4 sm:py-8 lg:grid-cols-4">
          {quickServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center gap-3 rounded-xl border border-brand-100 bg-white px-4 py-3.5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-md sm:px-5 sm:py-4"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition group-hover:bg-accent-600 group-hover:text-white sm:h-11 sm:w-11">
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
