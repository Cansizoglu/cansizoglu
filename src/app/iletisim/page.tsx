import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import Icon from '@/components/Icon'
import CtaBand from '@/components/CtaBand'
import { site } from '@/data/site'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'İletişim | Ankara Taşıma Evden Eve Nakliyat',
  description:
    'Ankara evden eve nakliyat için bize ulaşın. Telefon ve WhatsApp 0312 341 53 40. Adres: Çayyolu, Çankaya / Ankara.',
  path: '/iletisim',
})

const channels = [
  {
    icon: 'phone',
    title: 'Telefon',
    value: site.phone.display,
    href: site.phone.href,
    note: 'En hızlı ulaşım yolu',
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp',
    value: 'WhatsApp ile yazın',
    href: site.phone.whatsappHref,
    note: 'Fotoğraf göndererek de fiyat alabilirsiniz',
  },
  {
    icon: 'mail',
    title: 'E-posta',
    value: site.email,
    href: `mailto:${site.email}`,
    note: 'Kurumsal talepler için',
  },
]

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'İletişim', path: '/iletisim' }]} />

      <section className="py-9 sm:py-14">
        <div className="container-site">
          <SectionTitle
            as="h1"
            eyebrow="İletişim"
            title="Bize ulaşın"
            description="Taşınma tarihinizi ve adres bilgilerinizi paylaşın; ücretsiz keşif için size en uygun saati birlikte belirleyelim."
          />

          <div className="grid gap-5 sm:grid-cols-3">
            {channels.map((channel) => (
              <a key={channel.title} href={channel.href} className="card block min-w-0">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon name={channel.icon} className="h-5 w-5" />
                </span>
                <h2 className="text-base">{channel.title}</h2>
                {/* Uzun e-posta adresi dar sütunda taşıyordu; kırılmasına izin veriliyor */}
                <p className="mt-1 break-words font-semibold text-brand-800">{channel.value}</p>
                <p className="mt-1 text-sm text-slate-600">{channel.note}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="overflow-hidden rounded-xl border border-brand-100">
              {/* Adres araması üzerinden harita. Google İşletme kaydı açılınca onun gömme adresi kullanılmalı */}
              <iframe
                title="Ankara Taşıma konumu"
                src={site.maps.embedSrc}
                className="h-[380px] w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-brand-100 p-6">
                <h2 className="text-lg">Adres, telefon ve çalışma saatleri</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex gap-2">
                    <Icon name="pin" className="h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-slate-700">{site.address.full}</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="phone" className="h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-slate-700">
                      Telefon:{' '}
                      <a href={site.phone.href} className="font-semibold text-brand-800 hover:text-accent-600">
                        {site.phone.display}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="whatsapp" className="h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-slate-700">
                      WhatsApp:{' '}
                      <a href={site.phone.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-800 hover:text-accent-600">
                        {site.phone.display}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="clock" className="h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-slate-700">{site.hours}</span>
                  </li>
                </ul>
                <a
                  href={site.maps.placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-5 w-full"
                >
                  <Icon name="pin" className="h-4 w-4" />
                  Yol tarifi al
                </a>
                <Link href="/fiyat-teklifi" className="btn-primary mt-3 w-full">
                  Fiyat Teklifi Formu
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
