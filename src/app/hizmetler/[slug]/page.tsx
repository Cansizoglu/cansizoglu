import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Icon from '@/components/Icon'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { services, serviceBySlug } from '@/data/services'
import { districts } from '@/data/districts'
import { site } from '@/data/site'
import { pageMeta, serviceJsonLd } from '@/lib/seo'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = serviceBySlug(params.slug)
  if (!service) return {}
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/hizmetler/${service.slug}`,
  })
}

export default function ServiceDetailPage({ params }: Props) {
  const service = serviceBySlug(params.slug)
  if (!service) notFound()

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4)

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Hizmetler', path: '/hizmetler' },
          { name: service.title, path: `/hizmetler/${service.slug}` },
        ]}
      />

      <section className="bg-brand-950 py-14 text-white">
        <div className="container-site max-w-3xl">
          <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
            <Icon name={service.icon} className="h-6 w-6" />
          </span>
          <h1 className="text-3xl sm:text-4xl text-white">{service.h1}</h1>
          <p className="mt-4 text-lg leading-8 text-brand-100">{service.short}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/fiyat-teklifi" className="btn-white">
              Fiyat Teklifi Al
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a
              href={site.phone.callCenterHref}
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.callCenter}
            </a>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="prose-tr max-w-none">
              {service.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mb-5 mt-10 text-2xl">
              {service.title} hizmetinde neler yapıyoruz?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-brand-100 p-5">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <h3 className="text-base">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{feature.text}</p>
                </div>
              ))}
            </div>

            {service.steps ? (
              <>
                <h2 className="mb-5 mt-10 text-2xl">Taşıma günü nasıl ilerliyor?</h2>
                <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {service.steps.map((step, i) => (
                    <li key={step.title} className="rounded-xl bg-brand-50/70 p-5">
                      <span className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <h3 className="text-base">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </>
            ) : null}

            <div className="mt-10 overflow-hidden rounded-xl">
              <Image
                src="/img/slider-3.jpg"
                alt={`${service.title} - Cansızoğlu Nakliyat aracı`}
                width={1920}
                height={600}
                className="h-56 w-full object-cover sm:h-72"
              />
            </div>

            <h2 className="mb-4 mt-10 text-2xl">Bu hizmeti hangi bölgelerde veriyoruz?</h2>
            <p className="mb-4 leading-7 text-slate-700">
              {service.title} hizmetini Ankara’nın tüm ilçelerinde veriyoruz. En yoğun
              çalıştığımız bölgeler için hazırladığımız sayfalara aşağıdan ulaşabilirsiniz.
            </p>
            <div className="flex flex-wrap gap-2">
              {districts.map((district) => (
                <Link
                  key={district.slug}
                  href={`/bolgeler/${district.path}`}
                  className="rounded-full border border-brand-200 px-4 py-2 text-sm text-brand-800 transition hover:border-brand-500 hover:bg-brand-50"
                >
                  {district.name}
                </Link>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-6">
              <h2 className="text-lg">Hızlı iletişim</h2>
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
                  <a className="flex items-center gap-2 text-slate-700" href={site.phone.landlineHref}>
                    <Icon name="phone" className="h-4 w-4 text-brand-600" />
                    {site.phone.landline}
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-2 text-slate-700" href={site.phone.gsmHref}>
                    <Icon name="whatsapp" className="h-4 w-4 text-brand-600" />
                    {site.phone.gsm}
                  </a>
                </li>
              </ul>
              <Link href="/fiyat-teklifi" className="btn-primary mt-5 w-full">
                Ücretsiz Teklif Al
              </Link>
            </div>

            <div className="rounded-xl border border-brand-100 p-6">
              <h2 className="text-lg">Diğer hizmetlerimiz</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/hizmetler/${item.slug}`}
                      className="flex items-center gap-2 text-slate-700 hover:text-brand-700"
                    >
                      <Icon name="arrow" className="h-4 w-4 text-brand-500" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Faq items={service.faq} title={`${service.title} hakkında sık sorulanlar`} />
      <CtaBand />

      <JsonLd
        data={serviceJsonLd({
          name: service.title,
          description: service.metaDescription,
          path: `/hizmetler/${service.slug}`,
        })}
      />
    </>
  )
}
