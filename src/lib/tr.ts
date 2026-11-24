/**
 * Özel isimlere Türkçe ses uyumuna göre ek getirir: "Mamak'ta", "Etlik'te",
 * "Çankaya'da", "Keçiören'in", "Polatlı'ya". Kalıp metinlerde sabit "'de"
 * yazmak "Mamak'de" gibi hatalı sonuç veriyordu.
 */

const BACK = 'aıouâû'
const FRONT = 'eiöüîê'
const VOWELS = BACK + FRONT
const VOICELESS = 'fstkçşhp'

function lastVowel(word: string): string {
  const lower = word.toLocaleLowerCase('tr')
  for (let i = lower.length - 1; i >= 0; i -= 1) {
    if (VOWELS.includes(lower[i])) return lower[i]
  }
  return 'e'
}

function lastLetter(word: string): string {
  const lower = word.toLocaleLowerCase('tr').replace(/[^\p{L}]+$/u, '')
  return lower[lower.length - 1] ?? ''
}

const isBack = (v: string) => BACK.includes(v)
/** Dört yönlü uyum için: ı, i, u, ü */
function fourWay(v: string): string {
  if ('aıâ'.includes(v)) return 'ı'
  if ('ei'.includes(v) || v === 'î' || v === 'ê') return 'i'
  if ('ouû'.includes(v)) return 'u'
  return 'ü'
}

export type Suffix = 'de' | 'den' | 'deki' | 'nin' | 'ye' | 'yi'

/** İsmin sonuna kesme işaretiyle eki ekler. */
export function ek(name: string, suffix: Suffix): string {
  const v = lastVowel(name)
  const a = isBack(v) ? 'a' : 'e'
  const i = fourWay(v)
  const last = lastLetter(name)
  const endsVowel = VOWELS.includes(last)
  const d = VOICELESS.includes(last) ? 't' : 'd'
  let tail: string
  switch (suffix) {
    case 'de':
      tail = `${d}${a}`
      break
    case 'den':
      tail = `${d}${a}n`
      break
    case 'deki':
      tail = `${d}${a}ki`
      break
    case 'nin':
      tail = endsVowel ? `n${i}n` : `${i}n`
      break
    case 'ye':
      tail = endsVowel ? `y${a}` : a
      break
    case 'yi':
      tail = endsVowel ? `y${i}` : i
      break
  }
  return `${name}’${tail}`
}
