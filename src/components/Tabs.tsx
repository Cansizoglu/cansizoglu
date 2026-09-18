'use client'

import { useId, useState, type ReactNode } from 'react'

export type TabItem = {
  id: string
  label: string
  content: ReactNode
}

/**
 * Erişilebilir sekme bileşeni.
 * Tüm sekme içerikleri HTML'de bulunur, sadece görünürlükleri değişir;
 * böylece arama motorları içeriğin tamamını okuyabilir.
 */
export default function Tabs({ items, ariaLabel }: { items: TabItem[]; ariaLabel: string }) {
  const [active, setActive] = useState(items[0]?.id)
  const uid = useId()

  return (
    <div>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {items.map((item) => {
          const selected = item.id === active
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${uid}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              className={`whitespace-nowrap rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${
                selected
                  ? 'border-brand-700 bg-brand-700 text-white'
                  : 'border-brand-200 bg-white text-slate-700 hover:border-brand-400 hover:text-brand-800'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${uid}-panel-${item.id}`}
          aria-labelledby={`${uid}-tab-${item.id}`}
          hidden={item.id !== active}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
