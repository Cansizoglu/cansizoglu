import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import ServiceCard from '@/components/ServiceCard'
import CtaBand from '@/components/CtaBand'
import { services } from '@/data/services'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Hizmetlerimiz | Ankara Nakliyat ve Taşımacılık Hizmetleri',
  description:
    'Ankara evden eve nakliyat, ofis taşıma, asansörlü nakliyat, asansör kiralama, piyano ve kasa taşıma, depolama hizmetlerimizin tamamı.',
  path: '/hizmetler',
})

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Hizmetler', path: '/hizmetler' }]} />
      <section className="py-14">
        <div className="container-site">
          <SectionTitle
            as="h1"
            eyebrow="Hizmetlerimiz"
            title="Ankara nakliyat ve taşımacılık hizmetlerimiz"
            description="Ev taşımadan kurumsal ofis taşımaya, piyano gibi hassas eşyalardan ağır kasalara kadar taşımacılığın her alanında hizmet veriyoruz. Hizmet başlıklarına tıklayarak nasıl çalıştığımızı görebilirsiniz."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
