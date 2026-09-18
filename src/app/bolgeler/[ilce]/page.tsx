import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Icon from '@/components/Icon'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import DistrictSidebar from '@/components/DistrictSidebar'
import { districts, districtByPath } from '@/data/districts'
import { districtSections } from '@/lib/districtSections'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { pageMeta, serviceJsonLd } from '@/lib/seo'

type Props = { params: { ilce: string } }

export function generateStaticParams() {
  return districts.map((district) => ({ ilce: district.path }))
}

export function generateMetadata({ params }: Props): Metadata {
  const district = districtByPath(params.ilce)
  if (!district) return {}
  return pageMeta({
    title: district.metaTitle,
    description: district.metaDescription,
    path: `/bolgeler/${district.path}`,
  })
}

export default function DistrictPage({ params }: Props) {
  const district = districtByPath(params.ilce)
  if (!district) notFound()

  const sections = districtSections(district)

  const districtFaq = [
    {
      q: `${district.name} evden eve nakliyat fiyatları ne kadar?`,
      a: `${district.name} içinde yapılan taşımalarda fiyat; eşya miktarı, kat durumu, asansör ihtiyacı ve adresler arası mesafeye göre belirlenir. Ücretsiz keşif sonrası yazılı ve değişmeyen fiyat veriyoruz.`,
    },
    {
      q: `${district.name}'de asansörlü taşıma yapıyor musunuz?`,
      a: `Evet. Kendi asansör araçlarımızla çalışıyoruz, bu yüzden ${district.name} taşımalarında asansör ekiple aynı saatte adreste oluyor.`,
    },
    {
      q: `${district.name}'de aynı gün taşıma mümkün mü?`,
      a: 'Program müsaitse aynı gün taşıma yapıyoruz. Yoğun dönemlerde tarihi birkaç gün önceden ayırtmanızı öneriyoruz.',
    },
  ]

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Bölgeler', path: '/bolgeler' },
          { name: `${district.name} Evden Eve Nakliyat`, path: `/bolgeler/${district.path}` },
        ]}
      />

      <section className="bg-brand-950 py-14 text-white">
        <div className="container-site max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
            <Icon name="pin" className="h-4 w-4" />
            Ankara · {district.name}
          </p>
          <h1 className="text-3xl text-white sm:text-4xl">
            {district.name} Evden Eve Nakliyat
          </h1>
          <p className="mt-4 text-lg leading-8 text-brand-100">
            {district.name} ve çevresinde asansörlü, ambalajlı ve sigortalı taşımacılık.
            Ücretsiz keşif, aynı gün kurulum.
          </p>
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
              {district.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>

            <nav
              aria-label="Sayfa içi başlıklar"
              className="mt-6 rounded-xl border border-brand-100 bg-brand-50/60 p-5"
            >
              <p className="mb-3 text-sm font-semibold text-brand-900">Bu sayfada</p>
              <ul className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="inline-block rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-sm text-brand-800 transition hover:border-brand-500"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <h2 className="mb-5 mt-10 text-2xl">
              {district.name}&apos;de taşımayı nasıl planlıyoruz?
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {district.highlights.map((item) => (
                <div key={item.title} className="rounded-xl border border-brand-100 p-5">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <h3 className="text-base">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-xl">
              <Image
                src="/img/slider-1.jpg"
                alt={`${district.name} bölgesinde Cansızoğlu Nakliyat taşıma aracı`}
                width={1920}
                height={600}
                className="h-56 w-full object-cover sm:h-72"
              />
            </div>

            <div className="mt-12 space-y-10">
              {sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="mb-4 text-2xl">{section.heading}</h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)} className="leading-8 text-slate-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.points ? (
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.serviceSlug ? (
                    <Link
                      href={`/hizmetler/${section.serviceSlug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
                    >
                      Hizmet detayını inceleyin
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  ) : (
                    <Link
                      href="/fiyat-teklifi"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
                    >
                      Ücretsiz fiyat teklifi alın
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  )}
                </section>
              ))}
            </div>

            <h2 className="mb-4 mt-12 text-2xl">
              {district.name}&apos;de hizmet verdiğimiz semtler
            </h2>
            <p className="mb-5 leading-7 text-slate-700">
              {district.name} ilçesinin tüm mahallelerinde taşıma yapıyoruz. Aşağıdaki
              semtler için ayrı sayfa hazırladık; semtin taşımaya etkisini ve bizim
              çalışma yöntemimizi orada anlattık.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {district.neighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={`/bolgeler/${district.path}/${n.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-brand-100 px-4 py-3 transition hover:border-brand-400 hover:bg-brand-50/60"
                >
                  <span className="text-sm font-medium text-slate-800">
                    {n.name} Evden Eve Nakliyat
                  </span>
                  <Icon
                    name="arrow"
                    className="h-4 w-4 shrink-0 text-brand-600 transition group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>

            <h2 className="mb-4 mt-12 text-2xl">
              {district.name}&apos;de verdiğimiz özel taşıma hizmetleri
            </h2>
            <p className="mb-4 leading-8 text-slate-700">
              Ev, ofis ve asansörlü taşımanın yanında {district.name} içinde piyano,
              para kasası ve askılı tekstil gibi özel eşya taşımaları ile eşya depolama
              hizmeti de veriyoruz.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {services
                .filter((service) =>
                  [
                    'piyano-tasima',
                    'para-kasasi-tasima',
                    'askili-tekstil-tasima',
                    'esya-depolama',
                    'parca-esya-tasima',
                    'ambalajli-tasima',
                  ].includes(service.slug),
                )
                .map((service) => (
                  <Link
                    key={service.slug}
                    href={`/hizmetler/${service.slug}`}
                    className="flex items-center gap-3 rounded-lg border border-brand-100 px-4 py-3 text-sm text-slate-700 transition hover:border-brand-400 hover:text-brand-800"
                  >
                    <Icon name={service.icon} className="h-5 w-5 shrink-0 text-brand-600" />
                    {service.title}
                  </Link>
                ))}
            </div>
          </div>

          <DistrictSidebar district={district} />
        </div>
      </section>

      <Faq items={districtFaq} title={`${district.name} nakliyat hakkında sık sorulanlar`} />
      <CtaBand
        title={`${district.name} için taşınma tarihinizi ayırtın`}
        text="Ücretsiz keşif yapıyor, yazılı ve değişmeyen fiyat veriyoruz."
      />

      <JsonLd
        data={serviceJsonLd({
          name: `${district.name} Evden Eve Nakliyat`,
          description: district.metaDescription,
          path: `/bolgeler/${district.path}`,
        })}
      />
    </>
  )
}
