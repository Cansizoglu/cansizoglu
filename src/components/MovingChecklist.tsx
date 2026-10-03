'use client'

import { useEffect, useState } from 'react'
import Icon from './Icon'
import type { checklistGroups as Groups } from '@/data/checklist'

const STORAGE_KEY = 'tasinma-kontrol-listesi'

const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', weekday: 'short' }).format(d)

/**
 * Taşınma tarihine göre tarihlenen kontrol listesi. Görevlerin tamamı sunucuda
 * HTML olarak basılır; tarih ve işaretler yalnızca tarayıcıda eklenir. İşaretler
 * bu tarayıcıda saklanır (sunucuya gitmez).
 */
export default function MovingChecklist({ groups }: { groups: typeof Groups }) {
  const [date, setDate] = useState('')
  const [done, setDone] = useState<Record<string, boolean>>({})

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
      if (saved.date) setDate(saved.date)
      if (saved.done) setDone(saved.done)
    } catch {
      /* depolama kapalıysa liste yine çalışır */
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ date, done }))
    } catch {
      /* yoksay */
    }
  }, [date, done])

  const moveDay = date ? new Date(`${date}T12:00:00`) : null
  const dayOf = (offset: number) => {
    if (!moveDay) return null
    const d = new Date(moveDay)
    d.setDate(d.getDate() + offset)
    return d
  }

  const total = groups.reduce((n, g) => n + g.tasks.length, 0)
  const completed = Object.values(done).filter(Boolean).length

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm print:hidden">
        <label className="text-sm font-medium text-brand-900">
          Taşınma tarihiniz
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1.5 block rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
          />
        </label>
        <p className="text-sm text-slate-600">
          {completed} / {total} görev tamamlandı
        </p>
        <button type="button" onClick={() => window.print()} className="btn-outline ml-auto">
          <Icon name="check" className="h-4 w-4" />
          Yazdır
        </button>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {groups.map((group) => (
          <section key={group.title} className="rounded-2xl border border-brand-100 p-5">
            <h2 className="text-lg">{group.title}</h2>
            <ul className="mt-3 space-y-2.5">
              {group.tasks.map((task) => {
                const when = dayOf(task.day)
                const checked = Boolean(done[task.id])
                return (
                  <li key={task.id}>
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => setDone((d) => ({ ...d, [task.id]: e.target.checked }))}
                        className="mt-1 h-4 w-4 shrink-0 accent-brand-700"
                      />
                      <span className={`text-sm leading-6 ${checked ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                        {when ? (
                          <span className="mr-1.5 font-semibold text-brand-800">{formatDate(when)}:</span>
                        ) : null}
                        {task.text}
                      </span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
