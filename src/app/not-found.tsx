import Link from 'next/link'
import Icon from '@/components/Icon'
import { services } from '@/data/services'
import { districts } from '@/data/districts'

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="container-site max-w-2xl text-center">
        <p className="text-6xl font-extrabold text-brand-200">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl">Aradığınız sayfa bulunamadı</h1>
        <p className="mt-3 leading-7 text-slate-600">
          Sayfa taşınmış veya adres yanlış yazılmış olabilir. Aşağıdaki bağlantılardan
          devam edebilirsiniz.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Anasayfaya dön
          </Link>
          <Link href="/fiyat-teklifi" className="btn-outline">
            Fiyat teklifi al
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
          <div className="rounded-xl border border-brand-100 p-5">
            <h2 className="text-base">Hizmetlerimiz</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/hizmetler/${s.slug}`} className="text-slate-700 hover:text-brand-700">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brand-100 p-5">
            <h2 className="text-base">Bölgelerimiz</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {districts.slice(0, 5).map((d) => (
                <li key={d.slug}>
                  <Link href={`/bolgeler/${d.path}`} className="text-slate-700 hover:text-brand-700">
                    {d.name} Evden Eve Nakliyat
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
