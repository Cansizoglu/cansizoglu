import { site } from '@/data/site'

export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-800'
  const subColor = variant === 'light' ? 'text-brand-100' : 'text-slate-600'
  return (
    <span className="flex items-center gap-2 sm:gap-2.5">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" aria-hidden="true">
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
        <span className={`block text-base font-extrabold tracking-tight sm:text-lg ${textColor}`}>
          CANSIZOĞLU
        </span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px] sm:tracking-[0.18em] ${subColor}`}>
          Nakliyat · Ankara
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  )
}
