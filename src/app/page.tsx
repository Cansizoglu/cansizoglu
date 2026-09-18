import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import ServiceCard from '@/components/ServiceCard'
import Icon from '@/components/Icon'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import Tabs from '@/components/Tabs'
import PriceTable from '@/components/PriceTable'
import Reviews from '@/components/Reviews'
import { services } from '@/data/services'
import { districts } from '@/data/districts'
import { posts } from '@/data/blog'
import { site } from '@/data/site'
import { processTabs } from '@/data/process'
import { homeArticles } from '@/data/homeArticles'
import GalleryGrid from '@/components/GalleryGrid'
import { galleryItems } from '@/data/gallery'
import { priceFactors, priceUpdatedAt } from '@/data/pricing'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Ankara Evden Eve Nakliyat | Sigortalı ve Asansörlü Taşıma',
  description:
    'Ankara evden eve nakliyat, ofis taşıma, asansörlü nakliyat ve depolama. Ücretsiz keşif, ambalaj dahil, sigortalı taşımacılık. Fiyat listesi ve teklif formu.',
  path: '/',
})

const stats = [
  { value: `${new Date().getFullYear() - site.foundedYear}+`, label: 'yıllık saha tecrübesi' },
  { value: '25', label: 'Ankara ilçesinde hizmet' },
  { value: '13', label: 'farklı taşımacılık hizmeti' },
  { value: '%100', label: 'sigortalı ve sözleşmeli' },
]

const reasons = [
  {
    icon: 'shield',
    title: 'Sigortalı ve sözleşmeli',
    text: 'Taşıma öncesi eşya listesi çıkarılır, sözleşme imzalanır ve eşyanız poliçe kapsamına alınır.',
  },
  {
    icon: 'lift',
    title: 'Kendi asansör filomuz',
    text: 'Asansörü dışarıdan kiralamadığımız için taşıma saatinde gecikme yaşanmaz.',
  },
  {
    icon: 'box',
    title: 'Ambalaj fiyata dahil',
    text: 'Koli, streç, balonlu naylon ve paketleme işçiliği verilen fiyatın içindedir.',
  },
  {
    icon: 'check',
    title: 'Değişmeyen fiyat',
    text: 'Keşifte verilen yazılı fiyat taşıma günü değişmez, sürpriz ek ücret çıkmaz.',
  },
]

const homeFaq = [
  {
    q: 'Ankara evden eve nakliyat fiyatları ne kadar?',
    a: 'Fiyat; eşya miktarı, kat durumu, asansör ihtiyacı ve mesafeye göre değişir. Anasayfadaki fiyat listesinde ortalama aralıkları paylaşıyoruz. Net fiyat için ücretsiz keşif yapıyor ve fiyatı yazılı olarak bildiriyoruz.',
  },
  {
    q: 'Ankara’nın hangi ilçelerinde hizmet veriyorsunuz?',
    a: 'Ankara’nın tüm ilçelerinde hizmet veriyoruz. Keçiören, Çankaya, Yenimahalle, Altındağ, Mamak ve Etimesgut en yoğun çalıştığımız bölgelerdir.',
  },
  {
    q: 'Taşıma sırasında eşyam zarar görürse ne oluyor?',
    a: 'Taşıma sigortalıdır. Eşya listesi ve sözleşme üzerinden karşılıklı kayıt tutulur, oluşabilecek hasar sigorta kapsamında karşılanır.',
  },
  {
    q: 'Aynı gün taşıma yapıyor musunuz?',
    a: 'Program müsaitse aynı gün taşıma yapıyoruz. Yoğun dönemlerde tarihi birkaç gün önceden ayırtmanızı öneriyoruz.',
  },
  {
    q: 'Eşyalarımı bir süre depolayabilir misiniz?',
    a: 'Evet. Kameralı depolarımızda kısa ve uzun süreli depolama yapıyoruz. Eşyanız listelenerek depoya alınır ve aynı listeyle teslim edilir.',
  },
  {
    q: 'Ambalaj malzemesi için ayrıca ödeme yapacak mıyım?',
    a: 'Hayır. Koli, streç film, balonlu naylon ve paketleme işçiliği verilen fiyata dahildir.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Hizmetler */}
      <section className="py-16">
        <div className="container-site">
          <SectionTitle
            eyebrow="Hizmetlerimiz"
            title="Ankara’da ev ve iş yeri taşımacılığının tamamı"
            description="Evden eve nakliyattan ofis taşımaya, asansörlü taşımacılıktan depolamaya kadar taşınma sürecinizin her adımını tek elden yürütüyoruz."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/hizmetler" className="btn-outline">
              Tüm hizmetleri görün
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Taşıma süreci sekmeleri */}
      <section className="bg-slate-50 py-16">
        <div className="container-site">
          <SectionTitle
            eyebrow="Nasıl çalışıyoruz"
            title="Taşınma süreciniz adım adım"
            description="Taşımanın her aşamasını kendi ekibimizle yürütüyoruz. Aşağıdaki başlıklardan hangi aşamada ne yaptığımızı görebilirsiniz."
          />
          <Tabs
            ariaLabel="Taşıma süreci aşamaları"
            items={processTabs.map((tab) => ({
              id: tab.id,
              label: tab.label,
              content: (
                <div className="grid items-center gap-8 rounded-xl bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl">{tab.heading}</h3>
                    <p className="mt-3 leading-8 text-slate-600">{tab.text}</p>
                    <ul className="mt-5 space-y-2.5">
                      {tab.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Image
                    src={tab.image}
                    alt={tab.imageAlt}
                    width={800}
                    height={500}
                    className="h-64 w-full rounded-xl object-cover lg:h-80"
                  />
                </div>
              ),
            }))}
          />
        </div>
      </section>

      {/* Fiyat listesi */}
      <section className="py-16">
        <div className="container-site">
          <SectionTitle
            eyebrow="Fiyat listesi"
            title={
              <>
                Ankara <span className="hl">evden eve nakliyat fiyatları</span>
              </>
            }
            description={`Ankara evden eve nakliyat fiyatları, ev tipine ve taşımanın şartlarına göre değişir. Aşağıdaki liste ${priceUpdatedAt} itibarıyla Ankara içi taşımalarda uyguladığımız güncel aralıkları gösterir. Eviniz için kesin fiyat, ücretsiz keşiften sonra yazılı olarak verilir ve taşıma günü değişmez.`}
          />
          <PriceTable />

          <div className="mt-8 rounded-xl border border-brand-100 bg-brand-50/60 p-6">
            <h3 className="text-base">Fiyatı belirleyen unsurlar</h3>
            <ul className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {priceFactors.map((factor) => (
                <li key={factor.title} className="flex items-start gap-2 text-sm text-slate-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  <span>
                    <strong className="font-semibold text-brand-900">{factor.title}:</strong>{' '}
                    {factor.text}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/nakliyat-fiyat-hesaplama"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600"
            >
              Fiyat ve km hesaplama aracıyla kendi fiyatınızı hesaplayın
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Anahtar kelime makaleleri */}
      <section className="bg-brand-50/50 py-16">
        <div className="container-site">
          <SectionTitle
            eyebrow="Bilgi bankası"
            title="Ankara nakliyat hakkında bilmeniz gerekenler"
            description="Taşınma öncesinde en çok sorulan konuları başlık başlık ayırdık. İlgilendiğiniz başlığa tıklayın."
          />
          <Tabs
            ariaLabel="Nakliyat konu başlıkları"
            items={homeArticles.map((article) => ({
              id: article.id,
              label: article.label,
              content: (
                <article className="rounded-xl bg-white p-6 shadow-sm lg:p-8">
                  <h3 className="text-xl sm:text-2xl">{article.heading}</h3>
                  <div className="mt-4 space-y-4">
                    {article.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)} className="leading-8 text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {article.bullets ? (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {article.bullets.map((bullet) => (
                        <div key={bullet.title} className="rounded-lg bg-brand-50/70 p-4">
                          <h4 className="text-sm font-bold text-brand-900">{bullet.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{bullet.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {article.link ? (
                    <Link
                      href={article.link.href}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
                    >
                      {article.link.label}
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  ) : null}
                </article>
              ),
            }))}
          />
        </div>
      </section>

      {/* Neden biz */}
      <section className="py-16">
        <div className="container-site">
          <SectionTitle
            eyebrow="Neden Cansızoğlu Nakliyat"
            title="Taşınma işini sürprizsiz yapıyoruz"
            description={`${site.foundedYear} yılından bu yana Ankara’da aynı işi yapan bir aile şirketiyiz. Araç, taşıma asansörü ve personelimiz bize ait; taşeron firmalarla çalışmıyoruz.`}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="card">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon name={reason.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-base">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bölgeler */}
      <section className="bg-slate-50 py-16">
        <div className="container-site">
          <SectionTitle
            eyebrow="Hizmet bölgelerimiz"
            title="Ankara’nın tüm ilçelerinde evden eve nakliyat"
            description="Bulunduğunuz ilçeyi seçerek o bölgede nasıl çalıştığımızı ve hangi semtlerde hizmet verdiğimizi görebilirsiniz."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {districts.map((district) => (
              <Link
                key={district.slug}
                href={`/bolgeler/${district.path}`}
                className="card group flex items-center justify-between gap-3"
              >
                <span>
                  <span className="block font-semibold text-brand-900">
                    {district.name} Evden Eve Nakliyat
                  </span>
                  <span className="mt-1 block text-sm text-slate-500">
                    {district.neighborhoods.length} semtte hizmet
                  </span>
                </span>
                <Icon
                  name="arrow"
                  className="h-5 w-5 shrink-0 text-brand-600 transition group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className="py-16">
        <div className="container-site">
          <SectionTitle
            eyebrow="Galeri"
            title="Sahadan fotoğraflar"
            description="Araç filomuz, taşıma asansörümüz ve ekibimiz iş başında. Görsele tıklayınca büyüyerek açılır."
          />
          <GalleryGrid items={galleryItems.slice(0, 4)} />
          <div className="mt-8">
            <Link href="/galeri" className="btn-outline">
              Tüm galeriyi görün
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Müşteri görüşleri */}
      <section className="bg-brand-50/50 py-16">
        <div className="container-site">
          <SectionTitle
            eyebrow="Müşteri görüşleri"
            title="Taşıdığımız ailelerin yorumları"
            description="Taşınma, insanın bütün evini bir güne emanet ettiği bir iştir. Müşterilerimizin bu süreci nasıl anlattığı bizim için en önemli referans."
          />
          <Reviews />
        </div>
      </section>

      {/* Blog */}
      <section className="py-16">
        <div className="container-site">
          <SectionTitle
            eyebrow="Blog"
            title="Taşınmadan önce işinize yarayacak yazılar"
            description="Taşınma hazırlığı, paketleme ve asansörlü nakliyat hakkında sık sorulan konuları yazdık."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                  {post.readingMinutes} dakikalık okuma
                </p>
                <h3 className="mt-2 text-lg">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Yazıyı okuyun
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq items={homeFaq} title="Ankara nakliyat hakkında sık sorulan sorular" />

      {/* Sayaç - sayfanın altında */}
      <section className="border-y border-brand-100 bg-brand-50/60 py-12">
        <div className="container-site grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold tabular-nums text-brand-700 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
