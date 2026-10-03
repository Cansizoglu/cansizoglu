import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import VolumeCalculator from '@/components/VolumeCalculator'
import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import { pageMeta } from '@/lib/seo'
import { vehicles } from '@/data/volume'

export const metadata: Metadata = pageMeta({
  title: 'Eşya Hacmi Hesaplama | Kaç m³ Eşyam Var, Hangi Araç Gerekir?',
  description:
    'Taşınacak eşyalarınızı oda oda seçin; toplam m³ hacmi, gereken nakliye aracını, ekip sayısını ve yükleme süresini görün. Sonucu fiyat hesaplamaya aktarın.',
  path: '/esya-hacmi-hesaplama',
})

const faq = [
  {
    q: 'Bir ev kaç metreküp eşya çıkarır?',
    a: 'Ortalama bir 1+1 ev 10-14 m³, 2+1 ev 15-22 m³, 3+1 ev 23-32 m³, 4+1 ev 33-42 m³ eşya çıkarır. Eşya yoğunluğu, kitap ve koli sayısı bu rakamı belirgin şekilde değiştirir; aynı oda sayısındaki iki ev arasında iki kat fark olabilir.',
  },
  {
    q: 'Hacim neden nakliyat fiyatını etkiler?',
    a: 'Hacim, hangi aracın gönderileceğini, kaç kişilik ekip gerektiğini ve yüklemenin ne kadar süreceğini belirler. Bu üçü de fiyatın ana kalemleridir. Hacmi bilmek, aldığınız teklifleri karşılaştırırken de işe yarar: aynı hacme çok farklı fiyat veren firmayı sorgulayabilirsiniz.',
  },
  {
    q: 'Koli sayısını nasıl tahmin ederim?',
    a: 'Mutfak için 8-12, her yatak odası için 4-6, salon için 5-8, kitaplık başına 6-10 koli iyi bir başlangıçtır. Ambalaj malzemesi ve koliler fiyatımıza dahildir; keşifte gereken koli sayısını biz çıkarıyoruz.',
  },
  {
    q: 'Bu araçtaki hacim kesin mi?',
    a: 'Hayır, ortalama değerlerle yapılan bir ön hesaptır. Mobilyanın ölçüsü, söküm yapılıp yapılmayacağı ve ambalaj kalınlığı gerçek hacmi değiştirir. Kesin hacim ve fiyat için ücretsiz keşif yapıyoruz.',
  },
]

export default function VolumePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Eşya Hacmi Hesaplama', path: '/esya-hacmi-hesaplama' }]} />
      <section className="py-12">
        <div className="container-site">
          <SectionTitle
            as="h1"
            eyebrow="Hesaplama aracı"
            title={
              <>
                <span className="hl">Eşya hacmi hesaplama</span>: kaç m³ eşyanız var?
              </>
            }
            description="Evinizdeki eşyaları oda oda seçin. Araç toplam hacmi metreküp olarak hesaplar, hangi nakliye aracının ve kaç kişilik ekibin gerektiğini söyler. Sonucu tek tıkla fiyat hesaplama aracına aktarabilir ya da listeyi WhatsApp ile bize gönderebilirsiniz."
          />
          <VolumeCalculator />
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50/70 py-9 sm:py-14">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl sm:text-3xl">Hacme göre hangi nakliye aracı gerekir?</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Taşınacak eşyanın hacmi, gönderilecek aracı ve ekibi belirler. Küçük bir araca
            sığmayan yük iki sefere bölünür, gereğinden büyük araç ise boşa yer taşır. Aşağıdaki
            tablo, ambalajlı eşya için kullandığımız araç sınıflarını gösteriyor.
          </p>
          <div className="mt-5 overflow-x-auto rounded-xl border border-brand-100 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-50 text-brand-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Toplam hacim</th>
                  <th className="px-4 py-3 font-semibold">Araç</th>
                  <th className="px-4 py-3 font-semibold">Ekip</th>
                  <th className="px-4 py-3 font-semibold">Yükleme süresi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {vehicles.map((v, i) => (
                  <tr key={v.name}>
                    <td className="px-4 py-3 tabular-nums">
                      {i === 0
                        ? `${v.max} m³'e kadar`
                        : v.max === Infinity
                          ? `${vehicles[i - 1].max} m³ üzeri`
                          : `${vehicles[i - 1].max}-${v.max} m³`}
                    </td>
                    <td className="px-4 py-3">{v.name}</td>
                    <td className="px-4 py-3">{v.crew}</td>
                    <td className="px-4 py-3">{v.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 leading-7 text-slate-700">
            Hacmi çıkardıktan sonra{' '}
            <Link href="/nakliyat-fiyat-hesaplama" className="font-semibold text-brand-700 underline underline-offset-2">
              nakliyat fiyat hesaplama
            </Link>{' '}
            aracıyla mesafe ve kat bilgisini ekleyip fiyat aralığını görebilir, taşınma
            hazırlığınızı{' '}
            <Link href="/tasinma-kontrol-listesi" className="font-semibold text-brand-700 underline underline-offset-2">
              taşınma kontrol listesi
            </Link>{' '}
            ile tarihinize göre planlayabilirsiniz.
          </p>
        </div>
      </section>

      <Faq items={faq} title="Eşya hacmi hakkında sık sorulanlar" />
      <CtaBand
        title="Kesin hacmi keşifte çıkaralım"
        text="Adresinize gelir, eşyanızı yerinde görür ve yazılı fiyat veririz. Keşif ücretsizdir."
      />
    </>
  )
}
