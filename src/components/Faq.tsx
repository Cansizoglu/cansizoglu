import JsonLd from './JsonLd'
import { faqJsonLd } from '@/lib/seo'
import SectionTitle from './SectionTitle'

export default function Faq({
  items,
  title = 'Sık Sorulan Sorular',
}: {
  items: { q: string; a: string }[]
  title?: string
}) {
  if (items.length === 0) return null
  return (
    <section className="py-12">
      <div className="container-site">
        <SectionTitle title={title} />
        <div className="divide-y divide-brand-100 overflow-hidden rounded-xl border border-brand-100">
          {items.map((item) => (
            <details key={item.q} className="group bg-white p-5 open:bg-brand-50/50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-900">
                {item.q}
                <span className="shrink-0 text-brand-600 transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-7 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqJsonLd(items)} />
    </section>
  )
}
