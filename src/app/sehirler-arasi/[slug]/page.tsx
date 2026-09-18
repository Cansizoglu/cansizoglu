import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Icon from '@/components/Icon'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import RelatedLinks from '@/components/RelatedLinks'
import { routes, routeBySlug } from '@/data/routes'
import { routeSections, routeFaq } from '@/lib/routeSections'
import { site } from '@/data/site'
import { createLinker } from '@/lib/autolink'
import { pageMeta } from '@/lib/seo'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return routes.map((route) => ({ slug: route.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const route = routeBySlug(params.slug)
  if (!route) return {}
  return pageMeta({
    title: `Ankara ${route.city} Evden Eve Nakliyat | ${route.km} km`,
    description: `Ankara ${route.city} evden eve nakliyat: yaklaşık ${route.km} km, ${route.drive} yol. Ambalaj, söküm, montaj ve sigorta dahil, aktarmasız taşıma. Ücretsiz keşif.`,
    path: `/sehirler-arasi/${route.slug}`,
  })
}

export default function RoutePage({ params }: Props) {
  const route = routeBySlug(params.slug)
  if (!route) notFound()

  const sections = routeSections(route)
  const faq = routeFaq(route)
  const linkify = createLinker(`/sehirler-arasi/${route.slug}`, 10)

  /* Aynı bölgedeki diğer iller; yoksa listeden ilk birkaçı */
  const sameRegion = routes.filter((r) => r.region === route.region && r.slug !== route.slug)
  const others = (sameRegion.length >= 3 ? sameRegion : routes.filter((r) => r.slug !== route.slug))
    .slice(0, 6)

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Şehirler Arası Nakliyat', path: '/sehirler-arasi' },
          {
            name: `Ankara ${route.city} Evden Eve Nakliyat`,
            path: `/sehirler-arasi/${route.slug}`,
          },
        ]}
      />

      <section className="bg-brand-950 py-9 text-white sm:py-14">
        <div className="container-site max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
            <Icon name="truck" className="h-4 w-4" />
            Şehirler arası · {route.region}
          </p>
          <h1 className="text-3xl text-white sm:text-4xl">
            Ankara {route.city} Evden Eve Nakliyat
          </h1>
          <p className="mt-4 text-lg leading-8 text-brand-100">
            Yaklaşık {route.km} kilometre, {route.drive} yol. Ambalaj, söküm, montaj ve
            sigorta dahil; eşyanız aktarma yapılmadan tek araçla gidiyor.
          </p>

          {/* Sayının kendisi haber değeri taşıdığı için üstte, okunur şekilde */}
          <dl className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { k: 'Mesafe', v: `${route.km} km` },
              { k: 'Yolda süre', v: route.drive },
              { k: 'Bölge', v: route.region },
            ].map((item) => (
              <div key={item.k} className="rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
                <dt className="text-xs uppercase tracking-wider text-brand-200">{item.k}</dt>
                <dd className="mt-1 text-lg font-semibold text-white">{item.v}</dd>
              </div>
            ))}
          </dl>

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

      <section className="py-9 sm:py-14">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="prose-tr max-w-none">
              <p>
                {linkify(
                  `Ankara ${route.city} evden eve nakliyat, şehir içi bir taşımadan üç noktada ayrılıyor: eşya uzun süre yolda kalıyor, ambalajın daha dayanıklı olması gerekiyor ve işin iki ucunda iki ayrı şehir var. Cansızoğlu Nakliyat olarak bu üç noktayı da kendi ekibimiz ve kendi aracımızla yönetiyoruz; eşyanızı başka bir müşterinin yüküyle birleştirip aktarma yapmıyoruz.`,
                )}
              </p>
              <p>
                {linkify(
                  `Taşımadan önce Ankara’daki adrese ücretsiz keşfe geliyor, eşya listesini çıkarıyor ve fiyatı yazılı olarak veriyoruz. ${route.city}’deki varış adresinin kat durumunu, asansör ihtiyacını ve aracın yanaşabileceği alanı da bu görüşmede konuşuyoruz; taşıma günü sürpriz çıkmasının önüne böyle geçiliyor.`,
                )}
              </p>
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

            <div className="mt-10 overflow-hidden rounded-xl">
              <Image
                src="/img/slider-1.jpg"
                alt={`Ankara ${route.city} arası taşıma yapan Cansızoğlu Nakliyat kapalı kasa aracı`}
                title={`Ankara ${route.city} evden eve nakliyat aracı`}
                width={1920}
                height={600}
                sizes="(max-width: 1024px) 100vw, 720px"
                className="h-52 w-full object-cover sm:h-72"
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
                </section>
              ))}
            </div>

            {/* İle özgü saha notları: bu sayfayı diğerlerinden ayıran kısım */}
            <h2 className="mb-4 mt-12 text-2xl">
              {route.city} taşımalarında sahada karşılaştıklarımız
            </h2>
            <ul className="space-y-3">
              {route.notes.map((note) => (
                <li
                  key={note.slice(0, 24)}
                  className="flex items-start gap-3 rounded-xl border border-brand-100 p-4"
                >
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                  <span className="leading-7 text-slate-700">{linkify(note)}</span>
                </li>
              ))}
            </ul>

            <h2 className="mb-4 mt-12 text-2xl">{route.city}’de teslim yaptığımız ilçeler</h2>
            <p className="mb-5 leading-7 text-slate-700">
              {route.city} genelinde teslim yapıyoruz. Taşımanın en çok yoğunlaştığı
              ilçeler şunlar; listede olmayan bir adres için de aynı hizmeti veriyoruz.
            </p>
            <ul className="flex flex-wrap gap-2">
              {route.popular.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-brand-200 bg-brand-50/60 px-3.5 py-1.5 text-sm text-brand-800"
                >
                  {p}
                </li>
              ))}
            </ul>

            <RelatedLinks
              items={[
                {
                  title: 'Nakliyat fiyat hesaplama',
                  text: 'Kat, oda ve mesafeye göre taşınma maliyetinizi hesaplayın.',
                  href: '/nakliyat-fiyat-hesaplama',
                },
                {
                  title: 'Ankara evden eve nakliyat',
                  text: 'Söküm, ambalaj, taşıma ve montajın tamamı tek ekiple.',
                  href: '/hizmetler/ankara-evden-eve-nakliyat',
                },
                {
                  title: 'Parça eşya taşıma',
                  text: 'Tek eşya veya birkaç koli için küçük nakliye aracı.',
                  href: '/hizmetler/parca-esya-tasima',
                },
                {
                  title: 'Eşya depolama',
                  text: 'Yeni ev hazır değilse eşyanız listelenerek depomuzda bekler.',
                  href: '/hizmetler/esya-depolama',
                },
              ]}
              title="Bunlar da işinize yarar"
            />
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-brand-100 p-6">
              <h2 className="text-lg">Ankara {route.city} özet</h2>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ['Mesafe', `yaklaşık ${route.km} km`],
                  ['Yolda süre', route.drive],
                  ['Güzergâh', route.via],
                  ['Teslim planı', route.plan],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-semibold text-brand-900">{k}</dt>
                    <dd className="mt-0.5 leading-6 text-slate-600">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/fiyat-teklifi" className="btn-primary mt-5 w-full">
                Ücretsiz Keşif İsteyin
              </Link>
            </div>

            <nav className="rounded-xl border border-brand-100 p-6" aria-label="Diğer iller">
              <h2 className="text-lg">Diğer iller</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {others.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/sehirler-arasi/${r.slug}`}
                      prefetch={false}
                      className="flex gap-2 text-slate-700 hover:text-accent-600"
                    >
                      <Icon name="arrow" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      Ankara {r.city} Evden Eve Nakliyat
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/sehirler-arasi"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700"
              >
                Tüm iller
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </nav>
          </aside>
        </div>
      </section>

      <Faq items={faq} title={`Ankara ${route.city} nakliyat hakkında sık sorulanlar`} />

      <CtaBand
        title={`Ankara ${route.city} taşımanız için ücretsiz keşif`}
        text={`Ankara’daki adresinize gelip eşyanızı görüyor, ${route.city} taşımanız için yazılı ve değişmeyen fiyat veriyoruz.`}
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: `Ankara ${route.city} evden eve nakliyat`,
          name: `Ankara ${route.city} Evden Eve Nakliyat`,
          description: `Ankara ile ${route.city} arası yaklaşık ${route.km} km. Ambalaj, söküm, montaj ve sigorta dahil, aktarmasız şehirler arası evden eve nakliyat.`,
          provider: { '@id': `${site.url}/#kurulus` },
          areaServed: [
            { '@type': 'City', name: 'Ankara' },
            { '@type': 'City', name: route.city },
          ],
          url: `${site.url}/sehirler-arasi/${route.slug}`,
        }}
      />
    </>
  )
}
