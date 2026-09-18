'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from './Icon'
import { site } from '@/data/site'

/**
 * Mobilde ekranın altına sabitlenen iki katlı çubuk:
 *   üst sıra  → Hemen Ara ve WhatsApp
 *   alt sıra  → Anasayfa, Teklif Al, Hizmetler, Hesaplama
 * Masaüstünde yerini sağ alttaki WhatsApp balonu alır.
 * Çubuğun kapattığı alan layout'taki `pb-[124px] lg:pb-0` ile telafi edilir.
 */
const navItems = [
  { href: '/', label: 'Anasayfa', icon: 'home' },
  { href: '/fiyat-teklifi', label: 'Teklif Al', icon: 'doc' },
  { href: '/hizmetler', label: 'Hizmetler', icon: 'truck' },
  { href: '/nakliyat-fiyat-hesaplama', label: 'Hesaplama', icon: 'calculator' },
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
      <div className="fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_14px_rgba(0,0,0,.2)] lg:hidden">
        {/* Üst sıra: ara ve WhatsApp */}
        <div className="grid grid-cols-2">
          <a
            href={site.phone.callCenterHref}
            className="flex items-center justify-center gap-2.5 bg-brand-900 px-3 py-2.5 text-white"
            aria-label={`Telefonla arayın: ${site.phone.callCenter}`}
          >
            <Icon name="phone" className="h-5 w-5 shrink-0 text-accent-400" />
            <span className="text-left leading-tight">
              <span className="block text-[10px] font-medium uppercase tracking-wide text-brand-200">
                Hemen Ara
              </span>
              <span className="block text-sm font-bold">{site.phone.callCenter}</span>
            </span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#1f9c4d] px-3 py-2.5 text-white"
          >
            <Icon name="whatsapp" className="h-5 w-5 shrink-0" />
            <span className="text-left leading-tight">
              <span className="block text-[10px] font-medium uppercase tracking-wide text-white/80">
                WhatsApp
              </span>
              <span className="block text-sm font-bold">Bilgi &amp; Destek</span>
            </span>
          </a>
        </div>

        {/* Alt sıra: kısa yol menüsü */}
        <nav aria-label="Hızlı menü" className="grid grid-cols-4 border-t border-white/10 bg-brand-950">
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
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-[#1f9c4d] py-3 pl-4 pr-5 font-semibold text-white shadow-lg ring-1 ring-black/5 transition hover:bg-[#18813f] lg:inline-flex"
      >
        <Icon name="whatsapp" className="h-6 w-6" />
        <span className="text-sm">WhatsApp</span>
      </a>
    </>
  )
}
