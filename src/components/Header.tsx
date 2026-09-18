'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Icon from './Icon'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { districts } from '@/data/districts'

const mainNav = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hizmetler', label: 'Hizmetler', mega: 'services' as const },
  { href: '/bolgeler', label: 'Bölgeler', mega: 'districts' as const },
  { href: '/nakliyat-fiyat-hesaplama', label: 'Fiyat Hesapla' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/blog', label: 'Blog' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="hidden bg-brand-800 text-white lg:block">
        <div className="container-site flex h-10 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4" />
            {site.address.full} · {site.hours}
          </p>
          <div className="flex items-center gap-5">
            <a className="flex items-center gap-1.5 hover:text-brand-200" href={site.phone.landlineHref}>
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.landline}
            </a>
            <a className="flex items-center gap-1.5 hover:text-brand-200" href={site.phone.gsmHref}>
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.gsm}
            </a>
          </div>
        </div>
      </div>

      <div className="container-site flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label={`${site.name} anasayfa`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {mainNav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-semibold transition ${
                  isActive(item.href)
                    ? 'text-accent-600'
                    : 'text-slate-700 hover:text-accent-600'
                }`}
              >
                {item.label}
              </Link>
              {item.mega === 'services' ? (
                <div className="invisible absolute left-0 top-full w-[520px] rounded-xl border border-brand-100 bg-white p-4 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1">
                    {services.slice(0, 10).map((s) => (
                      <Link
                        key={s.slug}
                        href={`/hizmetler/${s.slug}`}
                        className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-800"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/hizmetler"
                    className="mt-2 block border-t border-brand-100 px-3 pt-3 text-sm font-semibold text-brand-700"
                  >
                    Tüm hizmetler
                  </Link>
                </div>
              ) : null}
              {item.mega === 'districts' ? (
                <div className="invisible absolute left-0 top-full w-[640px] rounded-xl border border-brand-100 bg-white p-4 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-3 gap-0.5">
                    {districts.map((d) => (
                      <Link
                        key={d.slug}
                        href={`/bolgeler/${d.path}`}
                        className="rounded-md px-2.5 py-1.5 text-sm text-slate-700 hover:bg-accent-50 hover:text-accent-700"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/bolgeler"
                    className="mt-2 block border-t border-brand-100 px-3 pt-3 text-sm font-semibold text-brand-700"
                  >
                    Tüm bölgeler
                  </Link>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phone.callCenterHref} className="btn-primary hidden whitespace-nowrap sm:inline-flex">
            <Icon name="phone" className="h-4 w-4" />
            {site.phone.callCenter}
          </a>
          <Link href="/fiyat-teklifi" className="btn-outline hidden whitespace-nowrap xl:inline-flex">
            Fiyat Teklifi Al
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-brand-200 p-2 text-brand-800 lg:hidden"
            aria-expanded={open}
            aria-label="Menüyü aç"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-brand-100 bg-white lg:hidden">
          <nav className="container-site flex flex-col py-3" aria-label="Mobil menü">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/fiyat-teklifi" className="btn-primary mt-4">
              Ücretsiz Fiyat Teklifi Al
            </Link>
            <a href={site.phone.gsmHref} className="btn-outline mt-2">
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.gsm}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
