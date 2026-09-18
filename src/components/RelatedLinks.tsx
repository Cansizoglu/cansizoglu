import Link from 'next/link'
import Icon from './Icon'

export type RelatedLink = { href: string; title: string; text: string }

/**
 * "Bunlar da işinize yarar" bloğu. Metin içi otomatik linklemenin yanında,
 * her sayfanın sonunda okuyucuyu ilgili sayfalara yönlendirir. Amaç
 * ziyaretçinin tek sayfada kalıp çıkmasını değil, sitede gezinmesini sağlamak.
 */
export default function RelatedLinks({
  items,
  title = 'Bunlar da işinize yarar',
}: {
  items: RelatedLink[]
  title?: string
}) {
  if (items.length === 0) return null
  return (
    <nav className="mt-10 rounded-xl border border-brand-100 bg-brand-50/50 p-5 sm:p-6" aria-label={title}>
      <h2 className="text-lg">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex gap-3 rounded-lg border border-transparent bg-white p-4 shadow-sm transition hover:border-accent-200 hover:shadow-md"
            >
              <Icon
                name="arrow"
                className="mt-0.5 h-4 w-4 shrink-0 text-accent-500 transition group-hover:translate-x-0.5"
              />
              <span>
                <span className="block text-sm font-semibold text-brand-900">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-xs leading-5 text-slate-600">
                  {item.text}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
