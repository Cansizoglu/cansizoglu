import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import Icon from '@/components/Icon'
import CtaBand from '@/components/CtaBand'
import {
  districts,
  centralDistricts,
  outerDistricts,
  neighborhoodCount,
  type District,
} from '@/data/districts'
import { pageMeta } from '@/lib/seo'
import { sayfa, urlIlce, urlSemt } from '@/lib/urls'

export const metadata: Metadata = pageMeta({
  title: 'Ankara Evden Eve Nakliyat Bölgeleri | 25 İlçe, Tüm Semtler',
  description:
    'Ankara evden eve nakliyat hizmeti verdiğimiz 25 ilçe ve semtleri. Keçiören, Çankaya, Yenimahalle, Altındağ, Mamak, Etimesgut ve tüm çevre ilçeler.',
  path: sayfa.bolgeler,
})

function DistrictCard({ district }: { district: District }) {
  return (
    <div className="card">
      <h3 className="text-lg">
        <Link href={urlIlce(district.path)} prefetch={false} className="hover:text-accent-600">
          {district.name} Evden Eve Nakliyat
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {district.intro[0].slice(0, 130)}…
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {district.neighborhoods.slice(0, 5).map((n) => (
          <li key={n.slug}>
            <Link
              href={urlSemt(district.path, n.slug)} prefetch={false}
              className="rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-800 hover:bg-accent-50 hover:text-accent-700"
            >
              {n.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={urlIlce(district.path)} prefetch={false}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600"
      >
        {district.name} sayfasına gidin
        <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </div>
  )
}

export default function DistrictsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Bölgeler', path: sayfa.bolgeler }]} />
      <section className="py-9 sm:py-14">
        <div className="container-site">
          <SectionTitle
            as="h1"
            eyebrow="Hizmet bölgeleri"
            title={
              <>
                Ankara <span className="hl">evden eve nakliyat</span> bölgeleri
              </>
            }
            description={`Ankara evden eve nakliyat hizmetimiz 25 ilçenin tamamını ve ${neighborhoodCount} semti kapsıyor. Her ilçenin taşımayı zorlaştıran kendine özgü şartları var: sokak genişliği, bina yaşı, kat sayısı ve park imkânı. Aşağıdaki sayfalarda her ilçede nasıl çalıştığımızı, hangi semtte neye dikkat ettiğimizi tek tek anlattık.`}
          />

          <h2 className="text-xl">Merkez ilçeler</h2>
          <p className="mt-2 max-w-3xl leading-7 text-slate-700">
            Ankara nakliyat işlerimizin büyük bölümü bu altı ilçede geçiyor. Bina
            stoğunu, sokak genişliklerini ve hangi adrese aracın yanaşabileceğini
            yıllardır aynı sokaklarda çalıştığımız için biliyoruz.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {centralDistricts.map((district) => (
              <DistrictCard key={district.slug} district={district} />
            ))}
          </div>

          <h2 className="mt-14 text-xl">Çevre ilçeler</h2>
          <p className="mt-2 max-w-3xl leading-7 text-slate-700">
            Ankara’nın çevre ilçelerine yapılan taşımalar şehirlerarası değil, uzun
            mesafeli şehir içi taşıma olarak planlanır. Ekip Ankara’dan sabah çıkar,
            yüklemeyi öğleden önce bitirir ve aynı gün kurulumu tamamlar.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {outerDistricts.map((district) => (
              <DistrictCard key={district.slug} district={district} />
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-brand-100 bg-brand-50/60 p-6">
            <h2 className="text-lg">Semtinizi bulamadınız mı?</h2>
            <p className="mt-2 max-w-3xl leading-7 text-slate-700">
              Ankara’da {districts.length} ilçenin tamamında çalışıyoruz. Sayfası
              açılmamış bir mahalle ya da sokak için de aynı fiyat ve aynı ekip
              geçerli. Adresi telefonda söylemeniz yeterli, keşif için aynı gün
              geliyoruz.
            </p>
            <Link href={sayfa.teklif} className="btn-primary mt-4 inline-flex">
              Ücretsiz keşif ve fiyat teklifi
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
