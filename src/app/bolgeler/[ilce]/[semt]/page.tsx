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
import { districts, districtByPath, neighborhoodBySlug } from '@/data/districts'
import { neighborhoodSections } from '@/lib/districtSections'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { createLinker } from '@/lib/autolink'
import RelatedLinks from '@/components/RelatedLinks'
import { relatedForNeighborhood } from '@/lib/related'
import { pageMeta, serviceJsonLd } from '@/lib/seo'

type Props = { params: { ilce: string; semt: string } }

export function generateStaticParams() {
  return districts.flatMap((district) =>
    district.neighborhoods.map((n) => ({ ilce: district.path, semt: n.slug })),
  )
}

export function generateMetadata({ params }: Props): Metadata {
  const district = districtByPath(params.ilce)
  const neighborhood = district ? neighborhoodBySlug(district, params.semt) : undefined
  if (!district || !neighborhood) return {}
  return pageMeta({
    title: `${neighborhood.name} Evden Eve Nakliyat | ${district.name} Ankara`,
    description: `${neighborhood.name} evden eve nakliyat: ${district.name} ${neighborhood.name}'de asansörlü, ambalajlı ve sigortalı ev taşıma hizmeti. Ücretsiz keşif ve aynı gün kurulum.`,
    path: `/bolgeler/${district.path}/${neighborhood.slug}`,
  })
}

export default function NeighborhoodPage({ params }: Props) {
  const district = districtByPath(params.ilce)
  const neighborhood = district ? neighborhoodBySlug(district, params.semt) : undefined
  if (!district || !neighborhood) notFound()

  const path = `/bolgeler/${district.path}/${neighborhood.slug}`
  const sections = neighborhoodSections(district, neighborhood)
  const linkify = createLinker(`/bolgeler/${district.path}/${neighborhood.slug}`, 10)
  const related = relatedForNeighborhood(district, neighborhood.slug)

  const faq = [
    {
      q: `${neighborhood.name}'de evden eve nakliyat fiyatı nasıl belirleniyor?`,
      a: `Eşya miktarı, çıkış ve varış katı, asansör ihtiyacı ve mesafe fiyatı belirler. ${neighborhood.name} içinde ücretsiz keşif yapıp yazılı fiyat veriyoruz.`,
    },
    {
      q: `${neighborhood.name}'de asansörlü taşıma yapıyor musunuz?`,
      a: `Evet. ${neighborhood.name} ve çevresindeki taşımalarda kendi mobil asansör araçlarımızı kullanıyoruz.`,
    },
    {
      q: `${neighborhood.name}'den Ankara dışına taşıma yapıyor musunuz?`,
      a: 'Evet, şehirler arası taşımalarda da hizmet veriyoruz. Adres ve tarih bilgisini paylaşmanız yeterli.',
    },
  ]

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Bölgeler', path: '/bolgeler' },
          { name: district.name, path: `/bolgeler/${district.path}` },
          { name: `${neighborhood.name} Evden Eve Nakliyat`, path },
        ]}
      />

      <section className="bg-brand-950 py-14 text-white">
        <div className="container-site max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
            <Icon name="pin" className="h-4 w-4" />
            {district.name} · {neighborhood.name}
          </p>
          <h1 className="text-3xl text-white sm:text-4xl">
            {neighborhood.name} Evden Eve Nakliyat
          </h1>
          <p className="mt-4 text-lg leading-8 text-brand-100">
            {district.name} {neighborhood.name}&apos;de asansörlü, ambalajlı ve sigortalı
            ev taşıma hizmeti.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/fiyat-teklifi" className="btn-white">
              Fiyat Teklifi Al
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a
              href={site.phone.gsmHref}
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.gsm}
            </a>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="prose-tr max-w-none">
              <p>{linkify(neighborhood.intro)}</p>
              <p>
                {neighborhood.name}, {district.name} ilçesine bağlı. Bu bölgedeki
                taşımalarda ekibimiz {site.address.full} adresindeki merkezimizden yola
                çıkar; söküm, ambalajlama, yükleme ve yeni adreste kurulum aynı gün içinde
                tamamlanır.
              </p>
            </div>

            <h2 className="mb-5 mt-10 text-2xl">
              {neighborhood.name}&apos;de taşımada nelere dikkat ediyoruz?
            </h2>
            <ul className="space-y-3">
              {neighborhood.notes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 rounded-lg border border-brand-100 p-4"
                >
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm leading-6 text-slate-700">{linkify(note)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-xl">
              <Image
                src="/img/slider-2.jpg"
                alt={`${neighborhood.name} bölgesinde taşıma yapan Cansızoğlu Nakliyat araçları`}
                width={1920}
                height={600}
                className="h-52 w-full object-cover sm:h-64"
              />
            </div>

            <div className="mt-12 space-y-10">
              {sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="mb-4 text-2xl">{section.heading}</h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)} className="leading-8 text-slate-700">
                        {linkify(paragraph)}
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
              {neighborhood.name}&apos;de verdiğimiz diğer hizmetler
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.slice(0, 6).map((service) => (
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

            <div className="mt-10 rounded-xl bg-brand-50/70 p-6">
              <h2 className="text-lg">
                {district.name} genelinde de hizmet veriyoruz
              </h2>
              <p className="mt-2 leading-7 text-slate-700">
                {neighborhood.name} dışında {district.name} ilçesinin tüm mahallelerinde
                taşıma yapıyoruz. İlçenin genel çalışma şartlarını{' '}
                <Link
                  href={`/bolgeler/${district.path}`}
                  className="font-semibold text-brand-700 underline underline-offset-2"
                >
                  {district.name} evden eve nakliyat
                </Link>{' '}
                sayfasında anlattık.
              </p>
            </div>
          </div>

          <DistrictSidebar district={district} activeNeighborhood={neighborhood.slug} />
        </div>
      </section>

      <div className="container-site">
        <RelatedLinks
          items={related}
          title={`${neighborhood.name} çevresinde işinize yarayacak sayfalar`}
        />
      </div>
      <Faq items={faq} title={`${neighborhood.name} nakliyat hakkında sık sorulanlar`} />
      <CtaBand
        title={`${neighborhood.name} için ücretsiz keşif isteyin`}
        text="Adresinize gelir, eşyanızı yerinde görür ve yazılı fiyat veririz."
      />

      <JsonLd
        data={serviceJsonLd({
          name: `${neighborhood.name} Evden Eve Nakliyat`,
          description: `${district.name} ${neighborhood.name} bölgesinde evden eve nakliyat hizmeti.`,
          path,
        })}
      />
    </>
  )
}
