'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from './Icon'
import { site } from '@/data/site'
import { sayfa } from '@/lib/urls'

/**
 * Mobilde ekranın altında duran iletişim ve kısayol alanı:
 *   üstte  → aralarında ve altlarında boşluk bırakılmış iki görsel buton
 *   altta  → Anasayfa, Teklif Al, Hizmetler, Hesaplama kısayolları
 * Masaüstünde yerini sağ alttaki WhatsApp balonu alır.
 * Kapladığı alan layout'taki `pb-[150px] lg:pb-0` ile telafi edilir.
 */
const navItems = [
  { href: '/', label: 'Anasayfa', icon: 'home' },
  { href: sayfa.teklif, label: 'Teklif Al', icon: 'doc' },
  { href: sayfa.hizmetler, label: 'Hizmetler', icon: 'truck' },
  { href: sayfa.hesaplama, label: 'Hesaplama', icon: 'calculator' },
]

export default function ContactBar() {
  const pathname = usePathname()
  const message = encodeURIComponent(
    'Merhaba, Ankara içinde taşınma için fiyat teklifi almak istiyorum.',
  )
  const whatsappHref = `https://wa.me/${site.phone.whatsapp}?text=${message}`

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
        {/* Görsel butonlar: aralarında ve altlarında boşluk var */}
        <div className="flex items-center justify-center gap-2 px-2 pb-2">
          {/* Musa'nın isteğiyle hemen ara butonu cep telefonuna yönleniyor */}
          <a
            href={site.phone.gsmHref}
            className="block w-1/2 max-w-[230px]"
            aria-label={`Telefonla arayın: ${site.phone.gsm}`}
          >
            <Image
              src="/img/btn-hemen-ara.webp"
              alt={`Tıkla hemen telefonla ara: ${site.phone.gsm}`}
              width={527}
              height={175}
              sizes="50vw"
              className="h-auto w-full drop-shadow-md"
            />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-1/2 max-w-[230px]"
            aria-label="WhatsApp ile bilgi ve destek alın"
          >
            <Image
              src="/img/btn-whatsapp.webp"
              alt="WhatsApp bilgi ve destek hattı"
              width={527}
              height={175}
              sizes="50vw"
              className="h-auto w-full drop-shadow-md"
            />
          </a>
        </div>

        {/* Kısayol menüsü */}
        <nav
          aria-label="Hızlı menü"
          className="grid grid-cols-4 bg-brand-950 pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_14px_rgba(0,0,0,.2)]"
        >
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium transition ${
                  active ? 'bg-accent-600 text-white' : 'text-brand-200'
                }`}
              >
                <Icon name={item.icon} className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Masaüstü: sağ alt balon */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-[#178440] py-3 pl-4 pr-5 font-semibold text-white shadow-lg ring-1 ring-black/5 transition hover:bg-[#126a34] lg:inline-flex"
      >
        <Icon name="whatsapp" className="h-6 w-6" />
        <span className="text-sm">WhatsApp</span>
      </a>
    </>
  )
}
