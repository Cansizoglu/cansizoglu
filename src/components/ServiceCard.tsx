import Link from 'next/link'
import Icon from './Icon'
import type { Service } from '@/data/services'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/hizmetler/${service.slug}`} className="card group flex flex-col">
      {/* Mobilde ikon ve başlık yan yana durur, kart yarı yarıya kısalır */}
      <span className="flex items-center gap-3 sm:block">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white sm:mb-4 sm:h-12 sm:w-12">
          <Icon name={service.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
        </span>
        <h3 className="text-base sm:text-lg">{service.title}</h3>
      </span>
      <p className="mt-2.5 flex-1 text-sm leading-6 text-slate-600 sm:mt-2">{service.short}</p>
      <span className="mt-3 hidden items-center gap-1.5 text-sm font-semibold text-brand-700 sm:mt-4 sm:inline-flex">
        Detaylı bilgi
        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
