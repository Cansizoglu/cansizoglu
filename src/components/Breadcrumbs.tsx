import Link from 'next/link'
import JsonLd from './JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo'

export type Crumb = { name: string; path: string }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: 'Anasayfa', path: '/' }, ...items]
  return (
    <div className="border-b border-brand-100 bg-brand-50/60">
      <nav className="container-site py-3 text-sm" aria-label="Site haritası">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-500">
          {all.map((item, i) => {
            const last = i === all.length - 1
            return (
              <li key={item.path} className="flex items-center gap-2">
                {last ? (
                  <span className="font-medium text-brand-800" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.path} className="hover:text-brand-700">
                      {item.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(all)} />
    </div>
  )
}
