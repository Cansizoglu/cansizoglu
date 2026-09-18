import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import Icon from '@/components/Icon'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { routes, routesByRegion } from '@/data/routes'
import { site } from '@/data/site'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Ankara Şehirler Arası Evden Eve Nakliyat',
  description:
    'Ankara’dan İstanbul, İzmir, Antalya, Gaziantep ve diğer illere şehirler arası evden eve nakliyat. Aktarmasız taşıma, ambalaj ve montaj dahil, ücretsiz keşif.',
  path: '/sehirler-arasi',
})

const faq = [
  {
    q: 'Ankara’dan hangi illere taşıma yapıyorsunuz?',
    a: 'Türkiye’nin her iline taşıma yapıyoruz. Aşağıdaki listede, her bölgeden en çok iş aldığımız illeri topladık ve bu iller için mesafe, güzergâh ve süre bilgisiyle ayrı sayfa hazırladık. Listede olmayan bir il için de bizi arayabilirsiniz.',
  },
  {
    q: 'Eşyam başka müşterilerin eşyasıyla birleştiriliyor mu?',
    a: 'Hayır. Araç sizin evinizden yüklenir ve varış adresinizde boşaltılır, arada depoda toplama veya aktarma yapılmaz. Şehirler arası taşımada hasar ve gecikmenin en büyük sebebi aktarmadır; bu yüzden bu yöntemi kullanmıyoruz.',
  },
  {
    q: 'Şehirler arası taşımada fiyat neye göre belirleniyor?',
    a: 'Eşya miktarı, iki adresin kat ve asansör durumu, iller arası mesafe ve taşıma tarihi belirliyor. Fiyatı en çok düşüren etken dönüş yükü; o yönde dönüş yükü bulunan tarihlerde rakam belirgin şekilde iniyor. Ankara’daki adrese ücretsiz keşfe gelip fiyatı yazılı veriyoruz.',
  },
  {
    q: 'Taşıma kaç gün sürüyor?',
    a: 'Mesafeye bağlı. Eskişehir ve Konya gibi yakın illerde söküm, taşıma ve montaj çoğu zaman aynı gün bitiyor. 500 kilometrenin üzerindeki illerde yükleme bir gün, teslim ve montaj ertesi gün yapılıyor. Her ilin kendi sayfasında o il için planı yazdık.',
  },
  {
    q: 'Sadece birkaç parça eşya gönderebilir miyim?',
    a: 'Gönderebilirsiniz. Tek koltuk, buzdolabı, öğrenci evi eşyası veya birkaç koli için küçük nakliye aracı kullanıyoruz ve ücreti eşyanın kapladığı hacme göre hesaplıyoruz; tam araç ücreti ödemiyorsunuz.',
  },
  {
    q: 'Eşya sigortalı mı taşınıyor?',
    a: 'Evet. Her taşıma yazılı sözleşme ve taşıma sigortası kapsamında yapılıyor. Uzun mesafede sigortanın kapsamını taşımadan önce görmeniz önemli; sözleşmeyi ve poliçeyi keşiften sonra size gösteriyoruz.',
  },
]

export default function RoutesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Şehirler Arası Nakliyat', path: '/sehirler-arasi' }]} />

      <section className="bg-brand-950 py-9 text-white sm:py-14">
        <div className="container-site max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
            <Icon name="truck" className="h-4 w-4" />
            Ankara’dan Türkiye geneline
          </p>
          <h1 className="text-3xl text-white sm:text-4xl">
            Ankara Şehirler Arası Evden Eve Nakliyat
          </h1>
          <p className="mt-4 text-lg leading-8 text-brand-100">
            Eşyanız aktarma yapılmadan, tek araçla Ankara’dan varış adresinize gider.
            Ambalaj, söküm, montaj ve sigorta fiyata dahildir.
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

      <section className="py-9 sm:py-14">
        <div className="container-site">
          <div className="prose-tr max-w-3xl">
            <p>
              Şehirler arası taşımanın şehir içi taşımadan üç farkı var: eşya uzun süre
              yolda kalıyor, ambalajın daha dayanıklı olması gerekiyor ve işin iki ucunda
              iki ayrı şehir bulunuyor. Bu üçünü de kendi aracımız ve kendi ekibimizle
              yönetiyoruz.
            </p>
            <p>
              En çok iş aldığımız iller için mesafe, güzergâh, yolda geçen süre ve teslim
              planını yazdığımız ayrı sayfalar hazırladık. Aşağıdan ilinizi seçin.
              Listede olmayan bir il için de taşıma yapıyoruz, bizi arayın.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {routesByRegion
              .filter((group) => group.routes.length > 0)
              .map((group) => (
                <div key={group.region}>
                  <h2 className="mb-4 text-xl sm:text-2xl">{group.region}</h2>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.routes.map((route) => (
                      <Link
                        key={route.slug}
                        href={`/sehirler-arasi/${route.slug}`}
                        prefetch={false}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-brand-100 px-4 py-3.5 transition hover:border-accent-300 hover:bg-brand-50/60"
                      >
                        <span>
                          <span className="block text-sm font-semibold text-brand-900">
                            Ankara {route.city} Evden Eve Nakliyat
                          </span>
                          <span className="mt-0.5 block text-xs text-slate-600">
                            yaklaşık {route.km} km · {route.drive}
                          </span>
                        </span>
                        <Icon
                          name="arrow"
                          className="h-4 w-4 shrink-0 text-brand-600 transition group-hover:translate-x-0.5"
                        />
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
            eyebrow="Nasıl çalışıyoruz"
            title="Şehirler arası taşımada dikkat ettiğimiz dört şey"
            description="Uzun mesafede hasarın ve gecikmenin sebebi genelde aynı birkaç noktadır. Bunları baştan kapatıyoruz."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Aktarma yok',
                text: 'Araç sizin evinizle çıkar, sizin adresinizde boşalır. Eşya depoda toplanıp başka yüklerle birleştirilmez.',
              },
              {
                title: 'Uzun yol ambalajı',
                text: 'Ambalaj şehir içi taşımaya göre daha kalın yapılır, yük araç içinde kuşaklarla sabitlenir.',
              },
              {
                title: 'Liste üzerinden teslim',
                text: 'Eşya yüklenirken listelenir, varışta aynı liste üzerinden kontrol edilerek teslim edilir.',
              },
              {
                title: 'Yazılı fiyat',
                text: 'Keşiften sonra verilen fiyat sözleşmeye yazılır. Yolda ek ücret çıkmaz.',
              },
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

      <Faq items={faq} title="Şehirler arası nakliyat hakkında sık sorulan sorular" />
      <CtaBand
        title="Şehirler arası taşımanız için ücretsiz keşif"
        text="Ankara’daki adresinize gelip eşyanızı görüyor, taşımanız için yazılı ve değişmeyen fiyat veriyoruz."
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Şehirler arası evden eve nakliyat',
          name: 'Ankara Şehirler Arası Evden Eve Nakliyat',
          description:
            'Ankara’dan Türkiye geneline aktarmasız şehirler arası evden eve nakliyat. Ambalaj, söküm, montaj ve sigorta dahil.',
          provider: { '@id': `${site.url}/#kurulus` },
          areaServed: [
            { '@type': 'City', name: 'Ankara' },
            ...routes.map((r) => ({ '@type': 'City', name: r.city })),
          ],
          url: `${site.url}/sehirler-arasi`,
        }}
      />
    </>
  )
}
