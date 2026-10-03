import Link from 'next/link'
import Logo from './Logo'
import Icon from './Icon'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { districts } from '@/data/districts'
import { aboutPages } from '@/data/aboutPages'

const corporate = [
  { href: '/hakkimizda', label: 'Hakkımızda' },
  ...aboutPages.map((p) => ({ href: `/hakkimizda/${p.slug}`, label: p.navLabel })),
  { href: '/hizmetler', label: 'Hizmetlerimiz' },
  { href: '/bolgeler', label: 'Hizmet Bölgeleri' },
  { href: '/sehirler-arasi', label: 'Şehirler Arası Nakliyat' },
  { href: '/nakliyat-fiyat-hesaplama', label: 'Fiyat Hesaplama' },
  { href: '/esya-hacmi-hesaplama', label: 'Eşya Hacmi Hesaplama' },
  { href: '/tasinma-kontrol-listesi', label: 'Taşınma Kontrol Listesi' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/blog', label: 'Blog' },
  { href: '/fiyat-teklifi', label: 'Fiyat Teklifi' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 bg-brand-950 text-brand-100">
      <div className="container-site grid gap-10 py-9 sm:py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-6 text-brand-200">
            Ankara’nın tüm ilçelerinde çalışan bir nakliyat firmasıyız. Evden eve nakliyat, ofis taşıma, asansörlü taşımacılık ve
            depolama hizmeti veriyoruz.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Hizmetlerimiz
          </h3>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetler/${s.slug}`} prefetch={false} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Hizmet Bölgeleri
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {/* Yalnızca merkez ilçeler; 25 ilçenin tamamı menüde ve Bölgeler sayfasında. */}
            {districts
              .filter((d) => d.zone === 'merkez')
              .map((d) => (
                <li key={d.slug}>
                  <Link href={`/bolgeler/${d.path}`} prefetch={false} className="hover:text-white">
                    {d.name} Nakliyat
                  </Link>
                </li>
              ))}
            <li className="col-span-2">
              <Link href="/bolgeler" prefetch={false} className="font-semibold hover:text-white">
                Tüm ilçeler ve semtler
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            İletişim
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <Icon name="pin" className="h-5 w-5 shrink-0 text-brand-400" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex gap-2">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-brand-400" />
              <a href={site.phone.href} className="hover:text-white">
                {site.phone.display}
              </a>
            </li>
            <li className="flex gap-2">
              <Icon name="whatsapp" className="h-5 w-5 shrink-0 text-brand-400" />
              <a href={site.phone.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp ile yazın
              </a>
            </li>
            <li className="flex min-w-0 gap-2">
              <Icon name="mail" className="h-5 w-5 shrink-0 text-brand-400" />
              {/* Uzun e-posta adresi dar sütunda taşıyordu; kırılmasına izin veriliyor */}
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Icon name="clock" className="h-5 w-5 shrink-0 text-brand-400" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-900">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-xs text-brand-300 sm:flex-row sm:items-start">
          <p className="shrink-0">
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          {/* Bağlantı sayısı arttığı için daralan ekranda sarması gerekiyor */}
          <nav
            className="flex min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end"
            aria-label="Alt menü"
          >
            {corporate.map((c) => (
              <Link key={c.href} href={c.href} className="hover:text-white">
                {c.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
