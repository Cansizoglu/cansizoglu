'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import Icon from './Icon'
import type { GalleryItem } from '@/data/gallery'

/**
 * Galeri ızgarası ve tıklayınca aynı sekmede açılan slider (lightbox).
 * Ek bir kütüphane kullanılmaz; görseller zaten sayfada olduğu için
 * lightbox açılması ek istek oluşturmaz.
 */
export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const go = useCallback(
    (step: number) =>
      setOpen((current) =>
        current === null ? null : (current + step + items.length) % items.length,
      ),
    [items.length],
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    // Lightbox açıkken arkadaki sayfa kaymasın.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open, close, go])

  const active = open === null ? null : items[open]

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <figure
            key={item.src}
            className={`group overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm transition hover:border-accent-300 hover:shadow-md ${
              i === 0 ? 'sm:col-span-2' : ''
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="relative block w-full cursor-zoom-in"
              aria-label={`${item.caption} görselini büyüt`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                  i === 0 ? 'h-64 sm:h-80' : 'h-56'
                }`}
              />
              <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-950/60 text-white opacity-0 transition group-hover:opacity-100">
                <Icon name="search" className="h-4 w-4" />
              </span>
            </button>
            <figcaption className="px-5 py-4 text-sm text-slate-600">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[60] flex flex-col bg-brand-950/95 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-3 text-white sm:px-6">
            <p className="text-sm text-brand-200">
              {open! + 1} / {items.length}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Galeriyi kapat"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition hover:bg-white/15"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-2 pb-4 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Önceki görsel"
              className="absolute left-1 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/15 sm:left-4"
            >
              <Icon name="arrow" className="h-5 w-5 rotate-180" />
            </button>

            <figure className="max-h-full">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="100vw"
                className="max-h-[75vh] w-auto rounded-lg object-contain"
                priority
              />
              <figcaption className="mt-3 text-center text-sm text-brand-100">
                {active.caption}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Sonraki görsel"
              className="absolute right-1 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/15 sm:right-4"
            >
              <Icon name="arrow" className="h-5 w-5" />
            </button>
          </div>

          <div
            className="flex gap-2 overflow-x-auto px-4 pb-5 sm:justify-center sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`${i + 1}. görsele geç`}
                aria-current={i === open}
                className={`h-14 w-20 shrink-0 overflow-hidden rounded border-2 transition ${
                  i === open ? 'border-accent-500' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={item.src}
                  alt=""
                  width={160}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}
