import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Linker } from '@/lib/autolink'

/**
 * Elle yazılmış içerik metinleri için küçük işaretleme:
 *   **kalın**            → <strong>
 *   [metin](/yol)        → site içi link
 *   [metin](semt:slug)   → aynı ilçenin semt sayfasına link
 * Geri kalan düz metin otomatik iç linkleyiciden geçer.
 */

const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g

const linkClass =
  'font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 transition hover:text-accent-600 hover:decoration-accent-400'

export function stripMarkup(text: string): string {
  return text.replace(TOKEN, (_m, bold, label) => bold ?? label)
}

export function richText(
  text: string,
  linkify: Linker,
  options: { semtBase?: string } = {},
): ReactNode {
  const out: ReactNode[] = []
  let last = 0
  let key = 0
  TOKEN.lastIndex = 0
  const matches = Array.from(text.matchAll(TOKEN))

  for (const m of matches) {
    const index = m.index ?? 0
    if (index > last) out.push(linkify(text.slice(last, index)))
    const [, bold, label, target] = m
    if (bold !== undefined) {
      out.push(<strong key={`b${key++}`}>{richText(bold, linkify, options)}</strong>)
    } else {
      const href = target.startsWith('semt:')
        ? `${options.semtBase ?? ''}/${target.slice(5)}`
        : target
      linkify.use(href)
      out.push(
        <Link key={`l${key++}`} href={href} prefetch={false} className={linkClass}>
          {label}
        </Link>,
      )
    }
    last = index + m[0].length
  }
  if (last < text.length) out.push(linkify(text.slice(last)))
  return out
}
