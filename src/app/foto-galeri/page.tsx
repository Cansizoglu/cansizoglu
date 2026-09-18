import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import Icon from '@/components/Icon'
import CtaBand from '@/components/CtaBand'
import GalleryGrid from '@/components/GalleryGrid'
import { galleryItems } from '@/data/gallery'
import { site } from '@/data/site'
import { pageMeta } from '@/lib/seo'
import { sayfa } from '@/lib/urls'

export const metadata: Metadata = pageMeta({
  title: 'Galeri | Cansızoğlu Nakliyat Araç Filosu ve Çalışmalarımız',
  description:
    'Cansızoğlu Nakliyat araç filosu, taşıma asansörü, ambalaj malzemeleri ve sahadaki çalışmalarımızdan fotoğraflar.',
  path: sayfa.galeri,
})

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Galeri', path: sayfa.galeri }]} />

      <section className="py-9 sm:py-14">
        <div className="container-site">
          <SectionTitle
            as="h1"
            eyebrow="Galeri"
            title="Araç filomuz ve sahadan kareler"
            description="Taşıma araçlarımız, mobil asansörümüz, ambalaj malzemelerimiz ve merkez ofisimiz. Araç ve ekipmanın tamamı firmamıza aittir. Görsele tıklayarak büyütebilir, ok tuşlarıyla galeride gezebilirsiniz."
          />

          <GalleryGrid items={galleryItems} />

          <div className="mt-10 grid gap-6 rounded-xl bg-brand-50/60 p-6 sm:grid-cols-2 lg:p-8">
            <div>
              <h2 className="text-xl">Ekipmanın tamamı bize ait</h2>
              <p className="mt-3 leading-8 text-slate-600">
                Kapalı kasa taşıma araçlarımız, mobil taşıma asansörlerimiz, kilitli
                taşıma kasalarımız ve ambalaj malzemelerimiz firmamıza aittir. Bu yüzden
                taşıma gününde araç veya asansör bekleme sorunu yaşanmaz, adresinize
                hangi ekibin geleceğini önceden biliriz.
              </p>
            </div>
            <div>
              <h2 className="text-xl">Videolarımız</h2>
              <p className="mt-3 leading-8 text-slate-600">
                Sahadaki çalışmalarımızı YouTube ve Instagram hesaplarımızda
                paylaşıyoruz. Tanıtım videomuzu hakkımızda sayfasında da
                izleyebilirsiniz.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/hakkimizda" className="btn-outline">
                  Tanıtım videomuz
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <Icon name="instagram" className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
