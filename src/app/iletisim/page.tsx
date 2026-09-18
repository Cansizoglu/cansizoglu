import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import Icon from '@/components/Icon'
import CtaBand from '@/components/CtaBand'
import { site } from '@/data/site'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'İletişim | Cansızoğlu Nakliyat Ankara',
  description:
    'Ankara evden eve nakliyat için bize ulaşın. Çağrı hattı 444 0 510, 0312 384 45 70, WhatsApp 0532 620 94 30. Altındağ / Ankara.',
  path: '/iletisim',
})

const channels = [
  {
    icon: 'phone',
    title: 'Çağrı hattı',
    value: site.phone.callCenter,
    href: site.phone.callCenterHref,
    note: 'En hızlı ulaşım yolu',
  },
  {
    icon: 'phone',
    title: 'Sabit hat',
    value: site.phone.landline,
    href: site.phone.landlineHref,
    note: 'Ofis hattımız',
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp / GSM',
    value: site.phone.gsm,
    href: site.phone.gsmHref,
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
  const mapQuery = encodeURIComponent('Cansızoğlu Nakliyat Altındağ Ankara')
  return (
    <>
      <Breadcrumbs items={[{ name: 'İletişim', path: '/iletisim' }]} />

      <section className="py-14">
        <div className="container-site">
          <SectionTitle
            as="h1"
            eyebrow="İletişim"
            title="Bize ulaşın"
            description="Taşınma tarihinizi ve adres bilgilerinizi paylaşın; ücretsiz keşif için size en uygun saati birlikte belirleyelim."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <a key={channel.title} href={channel.href} className="card block">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon name={channel.icon} className="h-5 w-5" />
                </span>
                <h2 className="text-base">{channel.title}</h2>
                <p className="mt-1 font-semibold text-brand-800">{channel.value}</p>
                <p className="mt-1 text-sm text-slate-500">{channel.note}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="overflow-hidden rounded-xl border border-brand-100">
              <iframe
                title="Cansızoğlu Nakliyat konumu"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-brand-100 p-6">
                <h2 className="text-lg">Adres ve çalışma saatleri</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex gap-2">
                    <Icon name="pin" className="h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-slate-700">{site.address.full}</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="clock" className="h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-slate-700">{site.hours}</span>
                  </li>
                </ul>
                <Link href="/fiyat-teklifi" className="btn-primary mt-5 w-full">
                  Fiyat Teklifi Formu
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl border border-brand-100 p-6">
                <h2 className="text-lg">Sosyal medya</h2>
                <div className="mt-4 flex gap-3">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="rounded-md border border-brand-200 p-2.5 text-brand-700 hover:bg-brand-50"
                  >
                    <Icon name="instagram" className="h-5 w-5" />
                  </a>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="rounded-md border border-brand-200 p-2.5 text-brand-700 hover:bg-brand-50"
                  >
                    <Icon name="facebook" className="h-5 w-5" />
                  </a>
                  <a
                    href={site.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="rounded-md border border-brand-200 p-2.5 text-brand-700 hover:bg-brand-50"
                  >
                    <Icon name="youtube" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
