import Link from 'next/link'
import Icon from './Icon'
import type { Service } from '@/data/services'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/hizmetler/${service.slug}`} className="card group flex flex-col">
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="text-lg">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{service.short}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
        Detaylı bilgi
        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
