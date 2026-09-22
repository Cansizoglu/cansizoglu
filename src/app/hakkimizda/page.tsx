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
  title: 'Hakkımızda | Ankara Taşıma Evden Eve Nakliyat',
  description:
    'Ankara Taşıma, Ankara’nın her ilçesinde evden eve nakliyat, ofis taşıma, asansörlü taşımacılık ve depolama hizmeti veren nakliyat firmasıdır.',
  path: '/hakkimizda',
  images: [
    {
      src: '/img/ankara-tasima-kare.webp',
      width: 1254,
      height: 1254,
      alt: 'Ankara Taşıma ekibi paketlenmiş eşyaları kapalı kasa kamyona yüklüyor',
    },
  ],
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
    title: 'Ankara’nın her noktası',
    text: 'Çayyolu’ndaki ofisimizden Ankara’nın 25 ilçesine ve şehirler arası taşımaya çıkıyoruz.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Hakkımızda', path: '/hakkimizda' }]} />

      <section className="py-9 sm:py-14">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              as="h1"
              eyebrow="Hakkımızda"
              title="Ankara’nın her noktasına güvenli taşımacılık"
              description="Ankara Taşıma’nın işi insanların evini ve iş yerini taşımak. Eşyanızı paketlemekten yeni adreste kurmaya kadar her aşamayı aynı ekip yürütür; taşıma günü kimin geleceğini ve işin nasıl yapılacağını baştan bilirsiniz."
            />
            <div className="prose-tr">
              <p>
                Ofisimiz {site.address.full} adresinde. Ekiplerimiz buradan Ankara’nın
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
              src="/img/ankara-tasima-kare.webp"
              alt="Ankara Taşıma ekibi paketlenmiş eşyaları kapalı kasa kamyona yüklüyor"
              width={1254}
              height={1254}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-9 sm:py-14">
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

      <section className="py-9 sm:py-14">
        <div className="container-site grid gap-6 sm:grid-cols-3">
          <Image
            src="/img/koltuk-takimi-ambalaj.webp"
            alt="Balonlu naylon ve streç filmle sarılmış koltuk takımı"
            width={1600}
            height={1200}
            sizes="(max-width: 640px) 100vw, 33vw"
            className="h-48 w-full rounded-xl object-cover"
          />
          <Image
            src="/img/kamyon-ici-yukleme.webp"
            alt="Kamyon kasasında iple sabitlenmiş, ambalajlı dolaplar"
            width={1536}
            height={2048}
            sizes="(max-width: 640px) 100vw, 33vw"
            className="h-48 w-full rounded-xl object-cover"
          />
          <Image
            src="/img/paketlenmis-mobilyalar.webp"
            alt="Streç film ve balonlu naylonla paketlenmiş mobilyalar"
            width={1047}
            height={1119}
            sizes="(max-width: 640px) 100vw, 33vw"
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
