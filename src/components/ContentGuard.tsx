'use client'

import { useEffect } from 'react'

/**
 * Sağ tık menüsünü ve kaynak görüntüleme / geliştirici araçları kısayollarını
 * kapatır (Musa'nın isteği).
 *
 * Not: Bu yalnızca sıradan ziyaretçiyi yavaşlatan bir önlemdir. Sayfanın HTML'i
 * tarayıcıya zaten gönderildiği için `view-source:` adresi, tarayıcı menüsü veya
 * herhangi bir indirme aracı metni yine de görebilir. Bu yüzden arama motoru
 * botlarını ve klavyeyle gezen kullanıcıları engellememesine dikkat edildi:
 *   - form alanlarında sağ tık serbest (yapıştırma çalışsın diye)
 *   - metin seçme ve kopyalama kapatılmadı (telefon numarası kopyalanabilsin)
 */
const BLOCKED_KEYS = new Set(['u', 's', 'i', 'j', 'c'])

function isFormField(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  return (
    target.isContentEditable ||
    ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
  )
}

export default function ContentGuard() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      if (isFormField(e.target)) return
      e.preventDefault()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      // F12 → geliştirici araçları
      if (e.key === 'F12') {
        e.preventDefault()
        return
      }
      const key = e.key.toLowerCase()
      if (!BLOCKED_KEYS.has(key)) return
      const mod = e.ctrlKey || e.metaKey
      if (!mod) return
      // Ctrl+U kaynak, Ctrl+S kaydet, Ctrl+Shift+I/J/C geliştirici araçları
      if (key === 'u' || key === 's') {
        e.preventDefault()
        return
      }
      if (e.shiftKey) e.preventDefault()
    }

    const onDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) e.preventDefault()
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('dragstart', onDragStart)
    return () => {
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('dragstart', onDragStart)
    }
  }, [])

  return null
}
