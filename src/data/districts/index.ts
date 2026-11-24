import type { District } from './types'
import { kecioren } from './kecioren'
import { cankaya } from './cankaya'
import { yenimahalle } from './yenimahalle'
import { altindag } from './altindag'
import { mamak } from './mamak'
import { etimesgut } from './etimesgut'
import {
  sincan,
  pursaklar,
  golbasi,
  cubuk,
  kahramankazan,
  akyurt,
  elmadag,
  polatli,
} from './cevre-yakin'
import {
  beypazari,
  nallihan,
  ayas,
  bala,
  sereflikochisar,
  haymana,
  kizilcahamam,
  gudul,
  camlidere,
  kalecik,
  evren,
} from './cevre-uzak'

import { districtIntros } from './intros'

export type { District, Neighborhood } from './types'

/** Ankara'nın 25 ilçesi. Merkez ilçeler önce, çevre ilçeler mesafeye göre sonra. */
const base: District[] = [
  kecioren,
  cankaya,
  yenimahalle,
  altindag,
  mamak,
  etimesgut,
  sincan,
  pursaklar,
  golbasi,
  cubuk,
  kahramankazan,
  akyurt,
  elmadag,
  polatli,
  beypazari,
  ayas,
  gudul,
  kizilcahamam,
  camlidere,
  kalecik,
  haymana,
  bala,
  sereflikochisar,
  nallihan,
  evren,
]

/**
 * İlçe başlıkları (metaTitle) "{İlçe} Evden Eve Nakliyat - Asansörlü Taşımacılık" kalıbında, semt adı geçmez (2026-11-24).
 * Giriş yazıları intros.ts dosyasından gelir.
 */
export const districts: District[] = base.map((d) => ({
  ...d,
  intro: districtIntros[d.slug] ?? d.intro,
}))

/** Ana menüde ve anasayfada öne çıkan merkez ilçeler. */
export const centralDistricts = districts.filter((d) => d.zone === 'merkez')
export const outerDistricts = districts.filter((d) => d.zone === 'cevre')

export const districtByPath = (path: string) => districts.find((d) => d.path === path)
export const districtBySlug = (slug: string) => districts.find((d) => d.slug === slug)
export const neighborhoodBySlug = (district: District, slug: string) =>
  district.neighborhoods.find((n) => n.slug === slug)

/** Sitede sayfası bulunan toplam semt sayısı. */
export const neighborhoodCount = districts.reduce(
  (total, d) => total + d.neighborhoods.length,
  0,
)
