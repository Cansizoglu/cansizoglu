import Link from 'next/link'
import Icon from './Icon'
import { site } from '@/data/site'
import { districts, type District } from '@/data/districts'
import { posts } from '@/data/blog'

/**
 * İlçe ve semt sayfalarının sidebar'ı.
 * Semt listesi bu sidebar'da durur; aktif semt vurgulanır.
 */
export default function DistrictSidebar({
  district,
  activeNeighborhood,
}: {
  district: District
  activeNeighborhood?: string
}) {
  const otherDistricts = districts.filter((d) => d.slug !== district.slug)

  return (
    <aside className="space-y-6">
      <nav className="rounded-xl border border-brand-100 p-6" aria-label={`${district.name} semtleri`}>
        <h2 className="text-lg">{district.name} Semtleri</h2>
        <p className="mt-1 text-sm text-slate-500">
          Semtinizi seçerek o bölgedeki çalışma şeklimizi görün.
        </p>
        <ul className="mt-4 space-y-1">
          {district.neighborhoods.map((n) => {
            const active = n.slug === activeNeighborhood
            return (
              <li key={n.slug}>
                <Link
                  href={`/bolgeler/${district.path}/${n.slug}`}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${
                    active
                      ? 'bg-brand-700 font-semibold text-white'
                      : 'text-slate-700 hover:bg-brand-50 hover:text-brand-800'
                  }`}
                >
                  <Icon
                    name="pin"
                    className={`h-4 w-4 shrink-0 ${active ? 'text-white' : 'text-brand-500'}`}
                  />
                  {n.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-6">
        <h2 className="text-lg">Hemen fiyat alın</h2>
        <p className="mt-1.5 text-sm leading-6 text-slate-600">
          Kat, oda sayısı ve adres bilgisini paylaşın, size dönelim.
        </p>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <a
              className="flex items-center gap-2 font-semibold text-brand-800"
              href={site.phone.callCenterHref}
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.callCenter}
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2 text-slate-700" href={site.phone.gsmHref}>
              <Icon name="whatsapp" className="h-4 w-4 text-brand-600" />
              {site.phone.gsm}
            </a>
          </li>
        </ul>
        <Link href="/fiyat-teklifi" className="btn-primary mt-5 w-full justify-center">
          Ücretsiz Teklif Al
        </Link>
        <Link
          href="/nakliyat-fiyat-hesaplama"
          className="mt-3 inline-flex w-full items-center justify-center gap-1.5 text-sm font-semibold text-accent-600"
        >
          Fiyat ve km hesaplama aracı
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>

      <nav className="rounded-xl border border-brand-100 p-6" aria-label="Taşınma rehberi">
        <h2 className="text-lg">Taşınma rehberi</h2>
        <p className="mt-1 text-sm text-slate-500">
          Taşınmadan önce işinize yarayacak yazılarımız.
        </p>
        <ul className="mt-4 space-y-3 text-sm">
          {posts.slice(0, 5).map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex gap-2 text-slate-700 hover:text-accent-600"
              >
                <Icon name="arrow" className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="rounded-xl border border-brand-100 p-6" aria-label="Diğer ilçeler">
        <h2 className="text-lg">Diğer İlçeler</h2>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {otherDistricts.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/bolgeler/${d.path}`}
                title={`${d.name} evden eve nakliyat`}
                className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-800 transition hover:bg-accent-50 hover:text-accent-700"
              >
                {d.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/bolgeler"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600"
        >
          Tüm hizmet bölgelerimiz
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </nav>
    </aside>
  )
}
