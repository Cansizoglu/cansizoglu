import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import Icon from '@/components/Icon'
import CtaBand from '@/components/CtaBand'
import GalleryGrid from '@/components/GalleryGrid'
import { galleryItems } from '@/data/gallery'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Galeri | Ankara Taşıma Sahadan Fotoğraflar',
  description:
    'Ankara Taşıma ekibinin ambalajlama, yükleme ve taşıma sırasında çektiği saha fotoğrafları.',
  path: '/galeri',
})

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Galeri', path: '/galeri' }]} />

      <section className="py-9 sm:py-14">
        <div className="container-site">
          <SectionTitle
            as="h1"
            eyebrow="Galeri"
            title="Sahadan kareler"
            description="Ambalajlama, yükleme ve taşıma sırasında çektiğimiz fotoğraflar. Görsele tıklayarak büyütebilir, ok tuşlarıyla galeride gezebilirsiniz."
          />

          <GalleryGrid items={galleryItems} />

          <div className="mt-10 grid gap-6 rounded-xl bg-brand-50/60 p-6 sm:grid-cols-2 lg:p-8">
            <div>
              <h2 className="text-xl">Ekipmanın tamamı bize ait</h2>
              <p className="mt-3 leading-8 text-slate-600">
                Kapalı kasa taşıma araçlarımız, mobil taşıma asansörlerimiz ve ambalaj
                malzemelerimiz firmamıza aittir. Bu yüzden
                taşıma gününde araç veya asansör bekleme sorunu yaşanmaz, adresinize
                hangi ekibin geleceğini önceden biliriz.
              </p>
            </div>
            <div>
              <h2 className="text-xl">Her eşyaya kendi ambalajı</h2>
              <p className="mt-3 leading-8 text-slate-600">
                Koltuklar balonlu naylon ve streç filmle, dolaplar köşe koruyucuyla, kırılacak
                eşyalar tek tek sarılır. Fotoğraflardaki ambalaj malzemesinin tamamı taşıma
                fiyatına dahildir.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/fiyat-teklifi" className="btn-outline">
                  Ücretsiz teklif alın
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
