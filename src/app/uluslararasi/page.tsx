import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import Icon from '@/components/Icon'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { countries, countryGroups } from '@/data/countries'
import { site } from '@/data/site'
import { createLinker } from '@/lib/autolink'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Uluslararası Evden Eve Nakliyat | Ankara’dan Yurt Dışına',
  description:
    'Ankara’dan Almanya, Hollanda, Belçika, Fransa, Avusturya, İsviçre, İngiltere ve Kıbrıs’a uluslararası evden eve nakliyat. Gümrük evrakı, ambalaj ve sigorta.',
  path: '/uluslararasi',
})

const faq = [
  {
    q: 'Uluslararası evden eve nakliyat nasıl işliyor?',
    a: 'Ankara’daki adresinize keşfe geliyor, eşya listesini ve hacmini çıkarıyoruz. Taşıma günü eşya deniz ve uzun yol şartlarına uygun ambalajlanıp numaralandırılıyor, gümrük evrakıyla birlikte araca yükleniyor. Araç sınır ve gümrük işlemlerinden geçtikten sonra eşya varış ülkesindeki adrese teslim ediliyor.',
  },
  {
    q: 'Parsiyel ve komple taşıma arasındaki fark nedir?',
    a: 'Komple taşımada araç yalnızca sizin eşyanızı taşır, yüklemeden hemen sonra yola çıkar ve teslim daha hızlıdır. Parsiyel taşımada eşyanız aynı ülkeye giden başka yüklerle birlikte gider; ücreti eşyanın kapladığı hacme göre ödersiniz ama araç dolana kadar beklendiği için süre uzar. Az eşyada parsiyel, bütün ev taşımasında komple taşıma daha mantıklıdır.',
  },
  {
    q: 'Yurt dışına taşınırken ev eşyası için gümrük vergisi ödenir mi?',
    a: 'Çoğu ülkede, yerleşmek için taşınan ve bir süredir kullanılan ev eşyası vergiden muaf tutuluyor. AB ülkelerinde genel şart son 12 ay AB dışında yaşamış olmak ve eşyanın en az 6 aydır sizin kullanımınızda olması. Şartlar ülkeye göre değiştiği için her ülkenin sayfasında ayrıca yazdık.',
  },
  {
    q: 'Yurt dışına hangi eşyalar gönderilemez?',
    a: 'Yanıcı ve patlayıcı maddeler (tüp, boya, tiner, akaryakıt), silah ve mühimmat, bitki ve toprak ile bozulabilir gıdalar ev eşyasıyla gönderilmez. AB ülkelerine et ve süt ürünleri sokulamıyor. Alkol, tütün ve ilaç için ülkelerin ayrı sınırları var; emin olmadığınız ürünleri keşifte sorun.',
  },
  {
    q: 'Uluslararası taşımada fiyat neye göre belirleniyor?',
    a: 'Eşyanın hacmi (metreküp), varış şehri, komple veya parsiyel seçim, iki adresin kat ve asansör durumu ve gümrük işlemleri fiyatı belirliyor. Ankara’daki adrese ücretsiz keşfe gelip fiyatı yazılı veriyoruz.',
  },
]

export default function InternationalHubPage() {
  const linkify = createLinker('/uluslararasi', 8)
  return (
    <>
      <Breadcrumbs items={[{ name: 'Uluslararası Nakliyat', path: '/uluslararasi' }]} />

      <section className="bg-brand-950 py-9 text-white sm:py-14">
        <div className="container-site max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
            <Icon name="truck" className="h-4 w-4" />
            Ankara’dan yurt dışına
          </p>
          <h1 className="text-3xl text-white sm:text-4xl">Uluslararası Evden Eve Nakliyat</h1>
          <p className="mt-4 text-lg leading-8 text-brand-100">
            Ankara’dan Avrupa’ya ve Kıbrıs’a ev taşıma. Ambalaj, eşya listesi, gümrük evrakı
            ve kapıya teslim tek elden.
          </p>
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
        <div className="container-site">
          <div className="prose-tr max-w-3xl">
            <p>
              {linkify(
                'Uluslararası evden eve nakliyat, şehirler arası taşımadan iki noktada ayrılıyor: eşya bir ya da birkaç sınır kapısından ve gümrükten geçiyor, ve teslim günü yalnızca yola değil evrakın eksiksiz olmasına da bağlı. Bu yüzden işin yarısı yükleme gününden önce, evrak hazırlığında yapılıyor.',
              )}
            </p>
            <p>
              {linkify(
                'Ankara’daki adresinize ücretsiz keşfe geliyor, numaralı eşya listesini birlikte çıkarıyor ve varış ülkesinin istediği belgeleri tek tek söylüyoruz. Eşya uzun yol ambalajıyla paketlenip sigortalanıyor. Aşağıdan taşınacağınız ülkeyi seçin; her ülke için güzergâhı, süreyi, gümrük kuralını ve gerekli evrakı ayrı sayfada yazdık.',
              )}
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {countryGroups.map((g) => (
              <div key={g.group}>
                <h2 className="mb-4 text-xl sm:text-2xl">{g.group}</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {g.countries.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/uluslararasi/${c.slug}`}
                      prefetch={false}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-brand-100 px-4 py-3.5 transition hover:border-accent-300 hover:bg-brand-50/60"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-brand-900">
                          Ankara {c.name} Evden Eve Nakliyat
                        </span>
                        <span className="mt-0.5 block text-xs text-slate-600">
                          {c.kmTo} yaklaşık {c.km.toLocaleString('tr-TR')} km · yolda {c.transit}
                        </span>
                      </span>
                      <Icon name="arrow" className="h-4 w-4 shrink-0 text-brand-600 transition group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 sm:py-16">
        <div className="container-site">
          <SectionTitle
            eyebrow="Süreç"
            title="Yurt dışı taşımada adım adım"
            description="Gecikmelerin çoğu yolda değil, eksik evrak yüzünden sınırda yaşanır. Bu yüzden sırayı baştan kuruyoruz."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: '1. Keşif ve liste', text: 'Ankara’daki adreste eşya görülür, hacim ölçülür ve numaralı eşya listesi çıkarılır.' },
              { title: '2. Evrak hazırlığı', text: 'Varış ülkesinin istediği muafiyet formu, adres belgesi ve vekaletname taşımadan önce tamamlanır.' },
              { title: '3. Ambalaj ve yükleme', text: 'Eşya uzun yol ve gümrük kontrolüne uygun ambalajlanır, koliler listeye göre numaralanır.' },
              { title: '4. Gümrük ve teslim', text: 'Sınır ve gümrük işlemlerinden sonra eşya varış adresinde liste üzerinden kontrol edilerek teslim edilir.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-brand-100 bg-white p-5">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <h3 className="text-base">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faq} title="Uluslararası nakliyat hakkında sık sorulan sorular" />
      <CtaBand
        title="Yurt dışı taşımanız için ücretsiz keşif"
        text="Ankara’daki adresinize gelip eşyanızı görüyor, gerekli evrakı ve yazılı fiyatı birlikte netleştiriyoruz."
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Uluslararası evden eve nakliyat',
          name: 'Uluslararası Evden Eve Nakliyat',
          description: 'Ankara’dan Avrupa ülkelerine ve Kıbrıs’a evden eve nakliyat; ambalaj, gümrük evrakı ve kapıya teslim.',
          provider: { '@id': `${site.url}/#kurulus` },
          areaServed: [{ '@type': 'City', name: 'Ankara' }, ...countries.map((c) => ({ '@type': 'Country', name: c.name }))],
          url: `${site.url}/uluslararasi`,
        }}
      />
    </>
  )
}
