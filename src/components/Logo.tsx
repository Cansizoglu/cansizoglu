import { site } from '@/data/site'

export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-800'
  const subColor = variant === 'light' ? 'text-brand-100' : 'text-slate-600'
  return (
    <span className="flex shrink-0 items-center gap-2 whitespace-nowrap sm:gap-2.5">
      {/* Bannerlardaki çatı motifi: lacivert zemin, beyaz çatı, kırmızı alt çizgi */}
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" aria-hidden="true">
        <rect width="40" height="40" rx="9" className="fill-brand-700" />
        <path
          d="M8 20.5 20 10l12 10.5"
          fill="none"
          stroke="white"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="17.2" y="17" width="5.6" height="5.6" rx="0.8" className="fill-white" />
        <path d="M9 29.5c7-3.2 15-3.2 22 0" fill="none" strokeWidth="3.2" strokeLinecap="round" className="stroke-accent-500" />
      </svg>
      <span className="leading-tight">
        <span className={`block text-base font-extrabold tracking-tight sm:text-lg ${textColor}`}>
          ANKARA TAŞIMA
        </span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px] sm:tracking-[0.12em] ${subColor}`}>
          Evden Eve Nakliyat
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  )
}
