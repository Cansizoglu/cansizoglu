import Link from 'next/link'
import Icon from './Icon'
import { site } from '@/data/site'

export default function CtaBand({
  title = 'Taşınma tarihinizi bugünden ayırtın',
  text = 'Ücretsiz keşif yapıyor, net ve yazılı fiyat veriyoruz. Fiyat taşıma günü değişmez.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="bg-brand-800 py-12 text-white">
      <div className="container-site flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-2xl text-white sm:text-3xl">{title}</h2>
          <p className="mt-2 leading-7 text-brand-100">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/fiyat-teklifi" className="btn-white">
            Fiyat Teklifi Al
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <a
            href={site.phone.callCenterHref}
            className="btn-outline border-white text-white hover:bg-white/10"
          >
            <Icon name="phone" className="h-4 w-4" />
            {site.phone.callCenter}
          </a>
        </div>
      </div>
    </section>
  )
}
