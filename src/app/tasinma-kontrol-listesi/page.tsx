import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import MovingChecklist from '@/components/MovingChecklist'
import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import { pageMeta } from '@/lib/seo'
import { checklistGroups } from '@/data/checklist'

export const metadata: Metadata = pageMeta({
  title: 'Taşınma Kontrol Listesi | Tarihli ve Yazdırılabilir',
  description:
    'Taşınma tarihinizi girin, 4 hafta önceden taşındıktan sonraya kadar yapılacakları günü gününe görün. Başkentgaz, ASKİ, elektrik, adres değişikliği dahil.',
  path: '/tasinma-kontrol-listesi',
})

const faq = [
  {
    q: 'Taşınmaya ne kadar önce hazırlanmaya başlamalıyım?',
    a: 'Dört hafta idealdir. Nakliyat firmasının keşfi, sözleşme ve abonelik nakilleri zaman alır; ay başı ve yaz dönemlerinde istediğiniz günü alabilmek için tarihi erken ayırtmak gerekir.',
  },
  {
    q: 'Abonelikleri ne zaman taşımalıyım?',
    a: 'Doğalgaz, su ve elektrik için taşınmadan yaklaşık bir hafta önce başvurmak, yeni adreste kesintisiz başlamanızı sağlar. İnternet nakli kurulum randevusu gerektirdiği için iki hafta önceden başvurmak daha güvenlidir.',
  },
  {
    q: 'İşaretlediğim görevler kaydediliyor mu?',
    a: 'Evet, işaretler ve tarih yalnızca bu tarayıcıda saklanır, bize ya da başka bir sunucuya gönderilmez. Aynı cihazdan tekrar girdiğinizde listeniz kaldığı yerden devam eder.',
  },
]

export default function ChecklistPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Taşınma Kontrol Listesi', path: '/tasinma-kontrol-listesi' }]} />
      <section className="py-12">
        <div className="container-site">
          <SectionTitle
            as="h1"
            eyebrow="Planlama aracı"
            title={
              <>
                <span className="hl">Taşınma kontrol listesi</span>: tarihinize göre yapılacaklar
              </>
            }
            description="Taşınma tarihinizi girin; liste her görevin hangi gün yapılması gerektiğini gösterir. İşaretledikleriniz bu cihazda kalır, isterseniz listeyi yazdırıp buzdolabının kapağına asabilirsiniz."
          />
          <MovingChecklist groups={checklistGroups} />
          <p className="mt-8 max-w-3xl leading-7 text-slate-700 print:hidden">
            Kaç parça eşyanız olduğunu ve hangi aracın gerektiğini{' '}
            <Link href="/esya-hacmi-hesaplama" className="font-semibold text-brand-700 underline underline-offset-2">
              eşya hacmi hesaplama
            </Link>{' '}
            aracıyla, yaklaşık maliyeti{' '}
            <Link href="/nakliyat-fiyat-hesaplama" className="font-semibold text-brand-700 underline underline-offset-2">
              nakliyat fiyat hesaplama
            </Link>{' '}
            aracıyla görebilirsiniz. Eşyaları nasıl paketleyeceğinizi{' '}
            <Link href="/blog/esya-paketleme-rehberi" className="font-semibold text-brand-700 underline underline-offset-2">
              eşya paketleme rehberinde
            </Link>{' '}
            anlattık.
          </p>
        </div>
      </section>
      <div className="print:hidden">
        <Faq items={faq} title="Taşınma hazırlığı hakkında sık sorulanlar" />
        <CtaBand
          title="Tarihinizi bugünden ayırtın"
          text="Ücretsiz keşif için arayın; fiyatı yazılı veriyor, taşıma günü değiştirmiyoruz."
        />
      </div>
    </>
  )
}
