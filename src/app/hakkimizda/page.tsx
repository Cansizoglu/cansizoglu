import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import Icon from '@/components/Icon'
import CtaBand from '@/components/CtaBand'
import { site } from '@/data/site'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Hakkımızda | Cansızoğlu Nakliyat Ankara',
  description:
    'Cansızoğlu Nakliyat, 1998’den bu yana Ankara’da faaliyet gösteren bir aile şirketi. Evden eve nakliyat, ofis taşıma, asansörlü taşımacılık ve depolama hizmeti veriyoruz.',
  path: '/hakkimizda',
  images: ['/img/ofis.webp'],
})

const values = [
  {
    icon: 'check',
    title: 'Verilen söz tutulur',
    text: 'Taşıma saati ve fiyat neyse odur. Ekip randevu saatinde adreste olur.',
  },
  {
    icon: 'shield',
    title: 'Her taşıma sözleşmeli',
    text: 'Eşya listesi çıkarılır, sözleşme imzalanır, taşıma sigorta kapsamında yapılır.',
  },
  {
    icon: 'truck',
    title: 'Kendi araç ve ekibimiz',
    text: 'Taşeron kullanmıyoruz; araç, asansör ve personel bize ait.',
  },
  {
    icon: 'star',
    title: 'Aile şirketi',
    text: 'Yirmi yılı aşkın sürede Ankara’nın her ilçesinde taşıma yaptık.',
  },
]

const milestones = [
  { year: '1998', text: 'Cansızoğlu Nakliyat Ankara’da bir aile işletmesi olarak kuruldu.' },
  { year: '2000’ler', text: 'Araç filosu büyütüldü, kapalı kasa araçlarla şehirler arası taşımaya başlandı.' },
  { year: '2010’lar', text: 'Kendi mobil asansör araçlarımız filoya katıldı, asansörlü nakliyat standart hale geldi.' },
  { year: 'Bugün', text: 'Ev, ofis, banka ve depolama hizmetleriyle Ankara genelinde çalışıyoruz.' },
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Hakkımızda', path: '/hakkimizda' }]} />

      <section className="py-14">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              as="h1"
              eyebrow="Hakkımızda"
              title="1998’den bu yana Ankara’da bir aile şirketi"
              description="Cansızoğlu Nakliyat, Ankara’da kurulduğu günden beri aynı işi yapıyor: insanların evini ve iş yerini taşımak. Aile şirketi olmanın getirdiği en önemli fark, her işin arkasında ismini koyan birinin olmasıdır."
            />
            <div className="prose-tr">
              <p>
                Merkez ofisimiz {site.address.full} adresinde. Ekiplerimiz buradan Ankara’nın
                tüm ilçelerine çıkıyor. Araçlarımız, taşıma asansörlerimiz ve personelimiz
                bize ait; taşeron firmalarla çalışmıyoruz. Bu yüzden taşıma günü kimin
                geleceğini ve nasıl çalışacağını biz biliyoruz.
              </p>
              <p>
                Her taşımayı ücretsiz keşifle başlatıyoruz. Keşifte eşya listesi çıkarılır,
                kat ve asansör durumu görülür, fiyat yazılı olarak verilir. Verilen fiyat
                taşıma günü değişmez.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/img/ofis.webp"
              alt="Cansızoğlu Nakliyat Ankara merkez ofisi"
              width={1242}
              height={699}
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container-site">
          <SectionTitle title="Tanıtım videomuz" center description="Sahada nasıl çalıştığımızı kısa videomuzda görebilirsiniz." />
          <div className="mx-auto max-w-[420px]">
            <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-lg" style={{ aspectRatio: '9 / 16' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${site.video.youtubeId}`}
                title={site.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <p className="mt-3 text-center text-sm text-slate-500">
              Videoyu{' '}
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 underline underline-offset-2"
              >
                YouTube kanalımızda
              </a>{' '}
              da izleyebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-site">
          <SectionTitle title="Çalışma prensiplerimiz" center />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="card">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon name={value.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-base">{value.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50/60 py-14">
        <div className="container-site">
          <SectionTitle title="Kısaca yolculuğumuz" />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <li key={m.year} className="rounded-xl bg-white p-6 shadow-sm">
                <p className="text-lg font-extrabold text-brand-700">{m.year}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14">
        <div className="container-site grid gap-6 sm:grid-cols-3">
          <Image
            src="/img/arac-tir.webp"
            alt="Cansızoğlu Nakliyat kapalı kasa taşıma aracı"
            width={300}
            height={170}
            className="h-48 w-full rounded-xl object-cover"
          />
          <Image
            src="/img/arac-filo.webp"
            alt="Asansörlü nakliyat aracı ve taşıma kamyonu"
            width={300}
            height={170}
            className="h-48 w-full rounded-xl object-cover"
          />
          <Image
            src="/img/tasima-kasalari.jpg"
            alt="Taşımada kullanılan kilitli plastik taşıma kasaları"
            width={848}
            height={480}
            className="h-48 w-full rounded-xl object-cover"
          />
        </div>
        <div className="container-site mt-8">
          <Link href="/iletisim" className="btn-outline">
            Bize ulaşın
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
