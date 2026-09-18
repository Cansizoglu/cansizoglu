import { site } from '@/data/site'

export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-800'
  const subColor = variant === 'light' ? 'text-brand-100' : 'text-slate-500'
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden="true">
        <circle cx="20" cy="20" r="19" className="fill-brand-700" />
        <path
          d="M27 13.5a9.5 9.5 0 1 0 1.6 10.2"
          fill="none"
          stroke="white"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="4.4" className="fill-white" />
      </svg>
      <span className="leading-tight">
        <span className={`block text-lg font-extrabold tracking-tight ${textColor}`}>
          CANSIZOĞLU
        </span>
        <span className={`block text-[11px] font-semibold uppercase tracking-[0.18em] ${subColor}`}>
          Nakliyat · Ankara
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  )
}
