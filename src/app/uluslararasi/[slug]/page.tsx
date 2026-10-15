import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Icon from '@/components/Icon'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import RelatedLinks from '@/components/RelatedLinks'
import { countries, countryBySlug } from '@/data/countries'
import { site } from '@/data/site'
import { createLinker } from '@/lib/autolink'
import { pageMeta } from '@/lib/seo'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const c = countryBySlug(params.slug)
  if (!c) return {}
  return pageMeta({
    title: `Ankara ${c.name} Evden Eve Nakliyat | Gümrük ve Evrak`,
    description: `Ankara ${c.name} evden eve nakliyat: ${c.kmTo} yaklaşık ${c.km.toLocaleString('tr-TR')} km, yolda ${c.transit}. Gümrük muafiyeti, gerekli evrak, ambalaj ve kapıya teslim.`,
    path: `/uluslararasi/${c.slug}`,
  })
}

export default function CountryPage({ params }: Props) {
  const c = countryBySlug(params.slug)
  if (!c) notFound()

  const linkify = createLinker(`/uluslararasi/${c.slug}`, 10)
  const others = countries.filter((o) => o.slug !== c.slug)
  const km = c.km.toLocaleString('tr-TR')

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Uluslararası Nakliyat', path: '/uluslararasi' },
          { name: `Ankara ${c.name} Evden Eve Nakliyat`, path: `/uluslararasi/${c.slug}` },
        ]}
      />

      <section className="bg-brand-950 py-9 text-white sm:py-14">
        <div className="container-site max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
            <Icon name="truck" className="h-4 w-4" />
            Uluslararası · {c.group}
          </p>
          <h1 className="text-3xl text-white sm:text-4xl">Ankara {c.name} Evden Eve Nakliyat</h1>
          <p className="mt-4 text-lg leading-8 text-brand-100">
            Ankara’dan {c.toName} ev taşıma: ambalaj, numaralı eşya listesi, gümrük evrakı ve
            kapıya teslim.
          </p>
          <dl className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { k: `${c.kmTo} mesafe`, v: `≈ ${km} km` },
              { k: 'Yolda süre', v: c.transit },
              { k: 'Bölge', v: c.group },
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
            <a href={site.phone.href} className="btn-outline border-white text-white hover:bg-white/10">
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.display}
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
                  `Ankara ${c.name} evden eve nakliyatta eşya, yüklemeden sonra komple araçla genelde ${c.transit} içinde varış adresine ulaşıyor. Güzergâh: ${c.via}. Kesin teslim günü sınır ve gümrük işlemlerine bağlı olduğu için yola çıktıktan sonra netleşiyor.`,
                )}
              </p>
              <p>
                {linkify(
                  `Taşımadan önce Ankara’daki adresinize ücretsiz keşfe geliyor, eşyanın hacmini ölçüyor ve ${c.name} gümrüğünün istediği numaralı eşya listesini birlikte hazırlıyoruz. Eşya uzun yol ambalajıyla paketleniyor, sigortalanıyor ve koliler listeye göre numaralanıyor; varışta aynı liste üzerinden teslim ediliyor.`,
                )}
              </p>
            </div>

            <section id="gumruk" className="mt-12">
              <h2 className="mb-4 text-2xl">{c.name} gümrüğü ve ev eşyası muafiyeti</h2>
              <div className="space-y-4">
                {c.customs.map((p) => (
                  <p key={p.slice(0, 24)} className="leading-8 text-slate-700">{linkify(p)}</p>
                ))}
              </div>
            </section>

            <section id="evrak" className="mt-12">
              <h2 className="mb-4 text-2xl">{c.toName} taşınırken gerekli evraklar</h2>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {c.documents.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Belge listesi kişinin durumuna göre değişebilir. Taşımadan önce sizin durumunuza
                göre eksik belge kalmadığını birlikte kontrol ediyoruz.
              </p>
            </section>

            <section id="komple-parsiyel" className="mt-12">
              <h2 className="mb-4 text-2xl">Komple mi parsiyel mi?</h2>
              <p className="leading-8 text-slate-700">
                {linkify(
                  `Bütün bir ev ${c.toName} taşınıyorsa komple araç daha hızlı ve güvenli: araç yalnızca sizin eşyanızı taşır, yüklemeden sonra doğrudan yola çıkar. Birkaç koli, öğrenci eşyası ya da tek oda eşyası için parsiyel taşıma daha ekonomik: eşyanız aynı yöne giden diğer yüklerle birlikte gider, ücreti kapladığı hacme göre ödersiniz. Parsiyelde araç dolana kadar beklendiği için teslim süresi uzar.`,
                )}
              </p>
            </section>

            <h2 className="mb-4 mt-12 text-2xl">{c.name} taşımalarında dikkat ettiklerimiz</h2>
            <ul className="space-y-3">
              {c.notes.map((n) => (
                <li key={n.slice(0, 24)} className="flex items-start gap-3 rounded-xl border border-brand-100 p-4">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                  <span className="leading-7 text-slate-700">{linkify(n)}</span>
                </li>
              ))}
            </ul>

            <h2 className="mb-4 mt-12 text-2xl">{c.inName} en çok teslim yapılan şehirler</h2>
            <ul className="flex flex-wrap gap-2">
              {c.cities.map((city) => (
                <li key={city} className="rounded-full border border-brand-200 bg-brand-50/60 px-3.5 py-1.5 text-sm text-brand-800">
                  {city}
                </li>
              ))}
            </ul>

            <h2 className="mb-4 mt-12 text-2xl">Gönderilmemesi gereken eşyalar</h2>
            <p className="leading-8 text-slate-700">
              Tüp, boya, tiner ve akaryakıt gibi yanıcı maddeler, silah ve mühimmat, bitki,
              toprak ve bozulabilir gıdalar ev eşyasıyla gönderilmez. Alkol, tütün ve ilaç için
              {` ${c.name}`} gümrüğünün ayrı sınırları var. Emin olmadığınız ürünleri keşifte
              sorun; kolinin içine koymayın.
            </p>

            <RelatedLinks
              title="Bunlar da işinize yarar"
              items={[
                { title: 'Ambalajlı taşıma', text: 'Uzun yol ve gümrük kontrolüne uygun paketleme.', href: '/hizmetler/ambalajli-tasima' },
                { title: 'Eşya depolama', text: 'Yeni ev hazır değilse eşyanız Ankara’da depomuzda bekler.', href: '/hizmetler/esya-depolama' },
                { title: 'Eşya hacmi hesaplama', text: 'Kaç metreküp eşyanız olduğunu önceden hesaplayın.', href: '/esya-hacmi-hesaplama' },
                { title: 'Şehirler arası nakliyat', text: 'Ankara’dan Türkiye’nin her iline aktarmasız taşıma.', href: '/sehirler-arasi' },
              ]}
            />
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-brand-100 p-6">
              <h2 className="text-lg">Ankara {c.name} özet</h2>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ['Mesafe', `${c.kmTo} yaklaşık ${km} km`],
                  ['Yolda süre', `${c.transit} (komple araç)`],
                  ['Güzergâh', c.via],
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
            <nav className="rounded-xl border border-brand-100 p-6" aria-label="Diğer ülkeler">
              <h2 className="text-lg">Diğer ülkeler</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/uluslararasi/${o.slug}`} prefetch={false} className="flex gap-2 text-slate-700 hover:text-accent-600">
                      <Icon name="arrow" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      Ankara {o.name} Evden Eve Nakliyat
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/uluslararasi" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
                Uluslararası nakliyat
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </nav>
          </aside>
        </div>
      </section>

      <Faq items={c.faq} title={`Ankara ${c.name} nakliyat hakkında sık sorulanlar`} />
      <CtaBand
        title={`Ankara ${c.name} taşımanız için ücretsiz keşif`}
        text={`Ankara’daki adresinize gelip eşyanızı görüyor, ${c.name} için gerekli evrakı ve yazılı fiyatı birlikte netleştiriyoruz.`}
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: `Ankara ${c.name} evden eve nakliyat`,
          name: `Ankara ${c.name} Evden Eve Nakliyat`,
          description: `Ankara’dan ${c.toName} uluslararası evden eve nakliyat; ambalaj, gümrük evrakı ve kapıya teslim.`,
          provider: { '@id': `${site.url}/#kurulus` },
          areaServed: [{ '@type': 'City', name: 'Ankara' }, { '@type': 'Country', name: c.name }],
          url: `${site.url}/uluslararasi/${c.slug}`,
        }}
      />
    </>
  )
}
