import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import QuoteForm from '@/components/QuoteForm'
import Icon from '@/components/Icon'
import Faq from '@/components/Faq'
import { site } from '@/data/site'
import { pageMeta } from '@/lib/seo'
import { sayfa } from '@/lib/urls'

export const metadata: Metadata = pageMeta({
  title: 'Fiyat Teklifi Al | Ankara Evden Eve Nakliyat Fiyatları',
  description:
    'Ankara evden eve nakliyat fiyat teklifi alın. Nereden nereye, kat, oda sayısı ve tarih bilgisini paylaşın; en kısa sürede size dönelim.',
  path: sayfa.teklif,
})

const info = [
  {
    icon: 'check',
    title: 'Keşif ücretsizdir',
    text: 'Adresinize gelip eşyanızı yerinde görüyoruz, bunun için ücret almıyoruz.',
  },
  {
    icon: 'shield',
    title: 'Fiyat yazılı verilir',
    text: 'Keşif sonrası verilen fiyat sözleşmeye yazılır ve taşıma günü değişmez.',
  },
  {
    icon: 'clock',
    title: 'Hızlı dönüş',
    text: 'Formu doldurduğunuzda çalışma saatleri içinde kısa sürede size dönüyoruz.',
  },
]

const quoteFaq = [
  {
    q: 'Formu doldurduktan sonra ne oluyor?',
    a: 'Bilgileriniz bize ulaşıyor ve ekibimiz sizi arayarak taşınma detaylarını netleştiriyor. Ardından keşif için uygun bir saat belirliyoruz.',
  },
  {
    q: 'Keşif yapılmadan fiyat alabilir miyim?',
    a: 'Eşya listesi ve kat bilgisiyle telefonda tahmini bir fiyat aralığı verebiliyoruz. Ancak kesin ve değişmeyen fiyat için keşif gerekir.',
  },
  {
    q: 'Taşınma tarihimi ne kadar önceden bildirmeliyim?',
    a: 'Yoğun dönemlerde (ay başı, ay sonu ve yaz ayları) en az bir hafta önceden tarih ayırtmanızı öneriyoruz.',
  },
]

export default function QuotePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Fiyat Teklifi', path: sayfa.teklif }]} />

      <section className="py-9 sm:py-14">
        <div className="container-site">
          <SectionTitle
            as="h1"
            eyebrow="Fiyat teklifi"
            title="Ücretsiz fiyat teklifi alın"
            description="Aşağıdaki formu doldurmanız yeterli. Nereden nereye taşınacağınızı, kat ve oda bilgisini paylaşın; size en uygun fiyatı ve taşıma planını çıkaralım."
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <QuoteForm />

            <aside className="space-y-6">
              <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-6">
                <h2 className="text-lg">Telefonla da alabilirsiniz</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      className="flex items-center gap-2 font-semibold text-brand-800"
                      href={site.phone.callCenterHref}
                    >
                      <Icon name="phone" className="h-4 w-4" />
                      {site.phone.callCenter}
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-2 text-slate-700" href={site.phone.landlineHref}>
                      <Icon name="phone" className="h-4 w-4 text-brand-600" />
                      {site.phone.landline}
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-2 text-slate-700" href={site.phone.gsmHref}>
                      <Icon name="whatsapp" className="h-4 w-4 text-brand-600" />
                      {site.phone.gsm}
                    </a>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-slate-600">{site.hours}</p>
              </div>

              {info.map((item) => (
                <div key={item.title} className="rounded-xl border border-brand-100 p-6">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h2 className="text-base">{item.title}</h2>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <Faq items={quoteFaq} title="Teklif süreci hakkında sık sorulanlar" />
    </>
  )
}
