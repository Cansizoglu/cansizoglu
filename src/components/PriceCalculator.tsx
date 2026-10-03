'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Icon from './Icon'
import { calculator, homeTypes, formatTl } from '@/data/pricing'
import { site } from '@/data/site'

/** İki koordinat arası kuş uçuşu mesafe (km). */
function haversineKm(aLat: number, aLon: number, bLat: number, bLon: number) {
  const R = 6371
  const toRad = (v: number) => (v * Math.PI) / 180
  const dLat = toRad(bLat - aLat)
  const dLon = toRad(bLon - aLon)
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(s))
}

/**
 * Kuş uçuşu mesafeyi karayolu mesafesine yaklaştıran katsayı.
 * Ankara'da şehir içi güzergahlar kuş uçuşunun yaklaşık 1,35 katıdır.
 */
const ROAD_FACTOR = 1.35

const floorOptions = ['Giriş / Bahçe', '1', '2', '3', '4', '5', '6', '7', '8+']

function floorValue(label: string) {
  if (label === 'Giriş / Bahçe') return 0
  if (label === '8+') return 9
  return Number(label)
}

/**
 * Seçilen tarihin yoğun döneme denk gelip gelmediğini söyler. Fiyata
 * eklenmez; ziyaretçiye sakin günleri önermek için kullanılır.
 */
function busyNote(value: string) {
  if (!value) return null
  const d = new Date(`${value}T12:00:00`)
  const reasons: string[] = []
  const day = d.getDate()
  const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
  if (day <= 3 || day >= last - 2) reasons.push('ay başı / ay sonu')
  if (d.getDay() === 0 || d.getDay() === 6) reasons.push('hafta sonu')
  if (d.getMonth() >= 5 && d.getMonth() <= 8) reasons.push('yaz sezonu')
  return reasons.length
    ? `Seçtiğiniz gün yoğun döneme denk geliyor (${reasons.join(', ')}). Tarihinizi en az bir hafta önceden ayırtmanızı öneririz; esnekseniz ayın ortasındaki hafta içi günler daha rahattır.`
    : 'Seçtiğiniz gün sakin bir döneme denk geliyor; istediğiniz saati almanız kolay olur.'
}

/** Hesaplama için gereken ilçe bilgisi; tam veri istemci paketine girmesin diye sayfadan geçiriliyor. */
export type CalculatorDistrict = { slug: string; name: string; lat: number; lon: number }

export default function PriceCalculator({ districts }: { districts: CalculatorDistrict[] }) {
  const [fromSlug, setFromSlug] = useState('kecioren')
  const [toSlug, setToSlug] = useState('cankaya')
  const [homeType, setHomeType] = useState<string>('2+1')
  const [fromFloor, setFromFloor] = useState('3')
  const [toFloor, setToFloor] = useState('3')
  const [lift, setLift] = useState(true)
  const [packing, setPacking] = useState(true)
  const [storage, setStorage] = useState(false)
  const [moveDate, setMoveDate] = useState('')

  // Eşya hacmi aracından gelen ev tipi (?ev=2+1) seçili gelir.
  useEffect(() => {
    const ev = new URLSearchParams(window.location.search).get('ev')
    if (ev && homeTypes.some((t) => t.id === ev)) setHomeType(ev)
    // Aynı sayfadaki eşya hacmi aracı ev tipini olayla gönderir.
    const onVolume = (e: Event) => {
      const id = (e as CustomEvent<string>).detail
      if (homeTypes.some((t) => t.id === id)) setHomeType(id)
    }
    window.addEventListener('hacim-ev-tipi', onVolume)
    return () => window.removeEventListener('hacim-ev-tipi', onVolume)
  }, [])

  const result = useMemo(() => {
    const from = districts.find((d) => d.slug === fromSlug)
    const to = districts.find((d) => d.slug === toSlug)
    const type = homeTypes.find((t) => t.id === homeType)
    if (!from || !to || !type) return null

    const straight = haversineKm(from.lat, from.lon, to.lat, to.lon)
    // Aynı ilçe içi taşımalarda mesafe sıfır çıkmasın diye taban değer kullanılır.
    const km = Math.max(5, Math.round(straight * ROAD_FACTOR))

    const distanceFee = Math.max(0, km - calculator.freeKm) * calculator.perKm

    const floors = floorValue(fromFloor) + floorValue(toFloor)
    const liftFee = lift ? calculator.liftFee : 0
    // Asansör kullanılmıyorsa 2. kattan sonrası el işçiliği olarak hesaplanır.
    const stairFee = lift ? 0 : Math.max(0, floors - 4) * calculator.perFloorFee

    const extras =
      (packing ? calculator.packingFee : 0) + (storage ? calculator.storageFee : 0)

    const add = distanceFee + liftFee + stairFee + extras
    return {
      km,
      min: type.min + add,
      max: type.max + add,
      lines: [
        { label: `${type.label} taşıma bedeli`, value: `${formatTl(type.min)} - ${formatTl(type.max)} ₺` },
        {
          label: `Mesafe (${km} km, ilk ${calculator.freeKm} km dahil)`,
          value: distanceFee ? `${formatTl(distanceFee)} ₺` : 'Dahil',
        },
        {
          label: lift ? 'Mobil asansör' : `Merdiven işçiliği (toplam ${floors}. kat)`,
          value: lift ? `${formatTl(liftFee)} ₺` : stairFee ? `${formatTl(stairFee)} ₺` : 'Dahil',
        },
        { label: 'Ambalaj ve paketleme', value: packing ? `${formatTl(calculator.packingFee)} ₺` : 'Seçilmedi' },
        { label: 'Depolama (aylık)', value: storage ? `${formatTl(calculator.storageFee)} ₺` : 'Seçilmedi' },
      ],
    }
  }, [fromSlug, toSlug, homeType, fromFloor, toFloor, lift, packing, storage])

  const waHref = result
    ? `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(
        `Merhaba, siteden hesaplama yaptım. ${
          districts.find((d) => d.slug === fromSlug)?.name
        } (${fromFloor}. kat) adresinden ${
          districts.find((d) => d.slug === toSlug)?.name
        } (${toFloor}. kat) adresine ${homeType} taşınacağım${moveDate ? `, tarih ${moveDate}` : ''}. Yaklaşık ${formatTl(
          result.min,
        )} - ${formatTl(result.max)} ₺ çıktı, kesin fiyat için keşif istiyorum.`,
      )}`
    : '#'

  const selectClass =
    'mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-100'

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-brand-900">
            Nereden (ilçe)
            <select
              className={selectClass}
              value={fromSlug}
              onChange={(e) => setFromSlug(e.target.value)}
            >
              {districts.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium text-brand-900">
            Nereye (ilçe)
            <select
              className={selectClass}
              value={toSlug}
              onChange={(e) => setToSlug(e.target.value)}
            >
              {districts.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium text-brand-900 sm:col-span-2">
            Ev tipi
            <select
              className={selectClass}
              value={homeType}
              onChange={(e) => setHomeType(e.target.value)}
            >
              {homeTypes.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium text-brand-900">
            Çıkılacak kat
            <select
              className={selectClass}
              value={fromFloor}
              onChange={(e) => setFromFloor(e.target.value)}
            >
              {floorOptions.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium text-brand-900">
            Taşınılacak kat
            <select
              className={selectClass}
              value={toFloor}
              onChange={(e) => setToFloor(e.target.value)}
            >
              {floorOptions.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="mt-4 block text-sm font-medium text-brand-900">
          Taşınma tarihi (isteğe bağlı)
          <input
            type="date"
            className={selectClass}
            value={moveDate}
            onChange={(e) => setMoveDate(e.target.value)}
          />
        </label>
        {busyNote(moveDate) ? (
          <p className="mt-2 rounded-lg bg-brand-50 px-3 py-2 text-sm leading-6 text-brand-900">
            {busyNote(moveDate)}
          </p>
        ) : null}

        <fieldset className="mt-5">
          <legend className="text-sm font-medium text-brand-900">Ek hizmetler</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              { id: 'lift', label: 'Mobil asansör', checked: lift, set: setLift },
              { id: 'packing', label: 'Ambalaj ve paketleme', checked: packing, set: setPacking },
              { id: 'storage', label: 'Depolama', checked: storage, set: setStorage },
            ].map((opt) => (
              <label
                key={opt.id}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition ${
                  opt.checked
                    ? 'border-accent-500 bg-accent-50 font-semibold text-accent-700'
                    : 'border-slate-300 text-slate-600 hover:border-slate-400'
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={opt.checked}
                  onChange={(e) => opt.set(e.target.checked)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>
        <p className="mt-5 text-sm text-slate-600">
          Ev tipinden emin değil misiniz?{' '}
          <a href="#esya-listesi" className="font-semibold text-brand-700 underline underline-offset-2">
            Eşyalarınızı sayıp hacmi hesaplayın
          </a>
          , araç size uygun ev tipini seçsin.
        </p>
      </div>

      <div className="lg:col-span-2 rounded-2xl bg-brand-900 p-5 text-white sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
          Tahmini fiyat
        </p>
        {result ? (
          <>
            <p className="mt-2 text-3xl font-bold tabular-nums sm:text-4xl">
              {formatTl(result.min)} - {formatTl(result.max)}
              <span className="ml-1 text-xl">₺</span>
            </p>
            <p className="mt-1 text-sm text-brand-200">
              Yaklaşık {result.km} km yol · KDV dahil
            </p>
            <dl className="mt-5 space-y-2 border-t border-white/15 pt-4 text-sm">
              {result.lines.map((line) => (
                <div key={line.label} className="flex justify-between gap-3">
                  <dt className="text-brand-100">{line.label}</dt>
                  <dd className="shrink-0 font-medium tabular-nums">{line.value}</dd>
                </div>
              ))}
            </dl>
            <a href={waHref} className="btn-primary mt-5 w-full justify-center" target="_blank" rel="noopener">
              <Icon name="whatsapp" className="h-4 w-4" />
              Bu hesapla teklif iste
            </a>
            <Link href="/fiyat-teklifi" className="btn-white mt-2 w-full justify-center">
              Ücretsiz keşif formu
            </Link>
            <p className="mt-4 text-xs leading-5 text-brand-200">
              Bu araç, mesafe ve kat bilgisine göre bir aralık verir. Kesin fiyat için
              eşyanızı yerinde görmemiz gerekir; keşif ücretsizdir ve keşifte verilen
              fiyat taşıma günü değişmez.
            </p>
          </>
        ) : null}
      </div>
    </div>
  )
}
