'use client'

import { useMemo, useState } from 'react'
import Icon from './Icon'
import { volumeRooms, vehicles, homeTypeForVolume } from '@/data/volume'
import { site } from '@/data/site'

const fmt = (n: number) =>
  new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 1 }).format(n)

/**
 * Oda oda eşya sayılarak toplam hacim, önerilen araç, ekip ve süre çıkarılır.
 * Sonuç fiyat hesaplama aracına ev tipiyle, WhatsApp'a eşya listesiyle aktarılır.
 */
export default function VolumeCalculator() {
  const [counts, setCounts] = useState<Record<string, number>>({})

  const set = (id: string, value: number) =>
    setCounts((c) => ({ ...c, [id]: Math.max(0, Math.min(99, value)) }))

  const { total, pieces, list } = useMemo(() => {
    let total = 0
    let pieces = 0
    const list: string[] = []
    for (const room of volumeRooms) {
      for (const item of room.items) {
        const n = counts[item.id] ?? 0
        if (!n) continue
        total += n * item.m3
        pieces += n
        list.push(`${n} x ${item.name}`)
      }
    }
    return { total, pieces, list }
  }, [counts])

  const vehicle = vehicles.find((v) => total <= v.max) ?? vehicles[vehicles.length - 1]
  const homeType = homeTypeForVolume(total)
  const waHref = `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(
    `Merhaba, siteden eşya hacmi hesapladım. Toplam yaklaşık ${fmt(total)} m³ (${pieces} parça): ${list.join(', ')}. Fiyat ve keşif için bilgi almak istiyorum.`,
  )}`

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="space-y-5 lg:col-span-3">
        {/* Telefonda sonuç paneli listenin altında kaldığı için toplam üstte de görünür. */}
        <div className="sticky top-16 z-10 flex items-center justify-between rounded-xl bg-brand-900 px-4 py-2.5 text-sm text-white shadow lg:hidden">
          <span>
            Toplam: <strong className="tabular-nums">{fmt(total)} m³</strong> · {pieces} parça
          </span>
          <a href="#hacim-sonuc" className="font-semibold underline underline-offset-2">
            Sonuç
          </a>
        </div>
        {volumeRooms.map((room) => (
          <fieldset key={room.id} className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
            <legend className="px-1 text-base font-semibold text-brand-900">{room.name}</legend>
            <ul className="mt-2 divide-y divide-slate-100">
              {room.items.map((item) => {
                const n = counts[item.id] ?? 0
                return (
                  <li key={item.id} className="flex items-center justify-between gap-3 py-2">
                    <span className="text-sm text-slate-700">
                      {item.name}
                      <span className="ml-1.5 text-xs text-slate-500">{fmt(item.m3)} m³</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <button
                        type="button"
                        aria-label={`${item.name} azalt`}
                        onClick={() => set(item.id, n - 1)}
                        className="h-8 w-8 rounded-md border border-slate-300 text-lg leading-none text-slate-700 hover:border-brand-400"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        inputMode="numeric"
                        min={0}
                        max={99}
                        value={n}
                        aria-label={`${item.name} adedi`}
                        onChange={(e) => set(item.id, Number(e.target.value) || 0)}
                        className="h-8 w-12 rounded-md border border-slate-300 text-center text-sm tabular-nums"
                      />
                      <button
                        type="button"
                        aria-label={`${item.name} artır`}
                        onClick={() => set(item.id, n + 1)}
                        className="h-8 w-8 rounded-md border border-slate-300 text-lg leading-none text-slate-700 hover:border-brand-400"
                      >
                        +
                      </button>
                    </span>
                  </li>
                )
              })}
            </ul>
          </fieldset>
        ))}
      </div>

      <div id="hacim-sonuc" className="scroll-mt-24 lg:col-span-2">
        <div className="rounded-2xl bg-brand-900 p-5 text-white sm:p-6 lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            Toplam eşya hacmi
          </p>
          <p className="mt-2 text-4xl font-bold tabular-nums">
            {fmt(total)} <span className="text-xl">m³</span>
          </p>
          <p className="mt-1 text-sm text-brand-200">{pieces} parça eşya seçildi</p>
          {total > 0 ? (
            <>
              <dl className="mt-5 space-y-2 border-t border-white/15 pt-4 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-brand-100">Önerilen araç</dt>
                  <dd className="font-medium">{vehicle.name}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-brand-100">Ekip</dt>
                  <dd className="font-medium">{vehicle.crew}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-brand-100">Tahmini yükleme süresi</dt>
                  <dd className="font-medium">{vehicle.hours}</dd>
                </div>
              </dl>
              <a
                href={`/nakliyat-fiyat-hesaplama?ev=${encodeURIComponent(homeType)}#hesapla`}
                onClick={(e) => {
                  // Fiyat hesaplama sayfasındaysak sayfayı yenilemeden ev tipini aktar.
                  const target = document.getElementById('hesapla')
                  if (!target) return
                  e.preventDefault()
                  window.dispatchEvent(new CustomEvent('hacim-ev-tipi', { detail: homeType }))
                  target.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-white mt-5 w-full justify-center"
              >
                Bu hacimle fiyat hesapla
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a href={waHref} className="btn-primary mt-2 w-full justify-center" target="_blank" rel="noopener">
                <Icon name="whatsapp" className="h-4 w-4" />
                Listeyi WhatsApp ile gönder
              </a>
            </>
          ) : (
            <p className="mt-5 border-t border-white/15 pt-4 text-sm leading-6 text-brand-100">
              Soldaki listeden taşınacak eşyalarınızın adedini girin; toplam hacim, araç ve
              ekip önerisi burada çıkar.
            </p>
          )}
          <p className="mt-4 text-xs leading-5 text-brand-200">
            Hacimler ambalajlı eşyanın araçta kapladığı ortalama yerdir. Kesin hacmi ve
            fiyatı ücretsiz keşifte yerinde çıkarıyoruz.
          </p>
        </div>
      </div>
    </div>
  )
}
