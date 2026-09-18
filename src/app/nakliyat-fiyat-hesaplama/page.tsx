import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import PriceCalculator from '@/components/PriceCalculator'
import PriceTable from '@/components/PriceTable'
import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import { pageMeta, breadcrumbJsonLd } from '@/lib/seo'
import { priceFactors, calculator, priceUpdatedAt } from '@/data/pricing'

const faq = [
  {
    q: 'Ankara nakliyat fiyat hesaplama aracı ne kadar doğru sonuç veriyor?',
    a: 'Araç, ev tipi, iki ilçe arasındaki yol mesafesi, kat durumu ve seçtiğiniz ek hizmetleri birleştirip bir aralık verir. Gerçek fiyat bu aralığın içinde kalır; ancak eşya yoğunluğu, dar sokak ya da özel eşya gibi sahada görülen şeyler fiyatı aralığın alt veya üst ucuna yaklaştırır. Kesin rakam için ücretsiz keşif yapıyoruz.',
  },
  {
    q: 'Km hesabı nasıl yapılıyor?',
    a: `İki ilçe merkezi arasındaki mesafe, Ankara'nın yol yapısına göre karayolu mesafesine çevriliyor. İlk ${calculator.freeKm} km fiyata dahil; sonrası km başına ${calculator.perKm} ₺ olarak ekleniyor. Şehir içi taşımalarda çoğu güzergah bu ücretsiz mesafenin biraz üstünde kalır.`,
  },
  {
    q: 'Asansör ücreti neye göre ekleniyor?',
    a: `Mobil asansör seçildiğinde sabit ${calculator.liftFee} ₺ ekleniyor. Asansör kullanılmadığında ise iki adresin kat toplamı dörtten fazlaysa her ek kat için ${calculator.perFloorFee} ₺ el işçiliği ekleniyor. Ankara'da 3. kat ve üzerindeki taşımalarda asansör hem daha hızlı hem çoğu zaman daha ucuz çıkıyor.`,
  },
  {
    q: 'Hesaplanan fiyat bağlayıcı mı?',
    a: 'Hayır, bu araç bir ön bilgidir. Bağlayıcı fiyat, keşiften sonra yazılı olarak verdiğimiz tekliftir. O teklifte yazan rakam taşıma günü değişmez; asansör, ambalaj ve montaj dahil tek fiyat çalışırız.',
  },
  {
    q: 'Fiyatlara neler dahil?',
    a: 'Ambalaj malzemesi ve paketleme işçiliği, mobilya söküm ve yeni adreste montaj, kapalı kasa araç ve taşıma sigortası fiyata dahildir. Depolama ve piyano, kasa gibi özel eşya taşımaları ayrıca hesaplanır.',
  },
]

export const metadata: Metadata = pageMeta({
  title: 'Ankara Nakliyat Fiyat Hesaplama | Evden Eve Nakliyat Km Hesaplama',
  description:
    'Ankara evden eve nakliyat fiyat hesaplama aracı: ilçe, ev tipi, kat ve km bilgisine göre taşınma maliyetinizi saniyeler içinde hesaplayın. Kesin fiyat için ücretsiz keşif.',
  path: '/nakliyat-fiyat-hesaplama',
})

export default function CalculatorPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Fiyat Hesaplama', path: '/nakliyat-fiyat-hesaplama' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Fiyat Hesaplama', path: '/nakliyat-fiyat-hesaplama' },
            ]),
          ),
        }}
      />

      <section className="py-12">
        <div className="container-site">
          <SectionTitle
            as="h1"
            eyebrow="Hesaplama aracı"
            title={
              <>
                Ankara <span className="hl">nakliyat fiyat hesaplama</span> ve km aracı
              </>
            }
            description="Nereden nereye taşınacağınızı, ev tipinizi ve kat durumunuzu seçin; araç iki adres arasındaki yolu km olarak hesaplayıp size gerçekçi bir fiyat aralığı versin. Rakamlar aşağıdaki güncel fiyat listemizden beslenir, uydurma bir tahmin değildir."
          />
          <PriceCalculator />
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50/70 py-14">
        <div className="container-site">
          <h2 className="text-2xl sm:text-3xl">Ankara evden eve nakliyat fiyatları nasıl oluşuyor</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Ankara evden eve nakliyat fiyatları tek bir rakamla anlatılamaz, çünkü iki
            ev birbirinin aynısı değildir. Aynı 3+1 daire, asansörsüz 5. kattaysa ve
            sokağa araç giremiyorsa, aynı dairenin zemin kattaki hâlinden belirgin
            şekilde daha maliyetli taşınır. Aşağıdaki altı başlık, size verilen fiyatı
            doğrudan belirleyen unsurlardır. Hesaplama aracı bunların ölçülebilir
            olanlarını kullanır, geri kalanını keşifte yerinde görürüz.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {priceFactors.map((factor) => (
              <div key={factor.title} className="card">
                <h3 className="text-base">{factor.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{factor.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-site">
          <h2 className="text-2xl sm:text-3xl">
            Ankara evden eve nakliyat fiyat listesi ({priceUpdatedAt})
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Aşağıdaki liste, Ankara içi evden eve nakliyat işlerimizde uyguladığımız
            güncel fiyat aralıklarıdır. Hesaplama aracı da bu rakamları temel alır.
            Şehirler arası taşımalar mesafeye göre ayrıca fiyatlandırılır, bunun için{' '}
            <Link href="/iletisim" className="text-accent-600 underline">
              bize ulaşmanız
            </Link>{' '}
            yeterli.
          </p>
          <div className="mt-8">
            <PriceTable />
          </div>
        </div>
      </section>

      <div className="border-t border-slate-100">
        <Faq items={faq} title="Fiyat hesaplama hakkında sık sorulanlar" />
      </div>

      <CtaBand />
    </>
  )
}
