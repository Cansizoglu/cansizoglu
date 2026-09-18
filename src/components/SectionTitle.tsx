import type { ReactNode } from 'react'

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
  as: Tag = 'h2',
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  center?: boolean
  as?: 'h1' | 'h2'
}) {
  return (
    <div className={`mb-8 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-600">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-2xl sm:text-3xl">{title}</Tag>
      {description ? (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  )
}
