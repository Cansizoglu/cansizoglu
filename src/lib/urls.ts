/**
 * Sitenin bütün adresleri tek yerden üretilir.
 *
 * Eski WordPress sitesinin adresleri korunuyor: bir sayfa eskiden hangi
 * adreste yayındaysa yeni sitede de aynı adreste duruyor. Böylece Google'daki
 * sıralamalar yönlendirmeye bile gerek kalmadan yerinde kalıyor.
 *
 * Adresler kök seviyededir (`/kecioren-evden-eve-nakliyat`), eski sitedeki
 * gibi. Eski karşılığı olmayan sayfalar da aynı düzende, kendi slug'ıyla
 * kök seviyede yayınlanır.
 */

/** Şehirler arası il sayfaları: bizim slug -> yayın yolu */
export const ilYolu: Record<string, string> = {
  'ankara-adana-evden-eve-nakliyat': 'adana-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-adiyaman-evden-eve-nakliyat': 'adiyaman-sehirlerarasi-nakliyat-fiyatlari-ucretleri',
  'ankara-afyonkarahisar-evden-eve-nakliyat': 'afyon-sehirlerarasi-nakliyat-fiyatlari-ucretleri',
  'ankara-agri-evden-eve-nakliyat': 'agri-sehirlerarasi-nakliyat-fiyatlari-guncel',
  'ankara-amasya-evden-eve-nakliyat': 'amasya-sehirlerarasi-nakliyat-fiyatlari-firmalari',
  'ankara-antalya-evden-eve-nakliyat': 'antalya-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-artvin-evden-eve-nakliyat': 'artvin-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-aydin-evden-eve-nakliyat': 'aydin-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-balikesir-evden-eve-nakliyat': 'balikesir-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-bilecik-evden-eve-nakliyat': 'bilecik-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-bingol-evden-eve-nakliyat': 'bingol-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-bitlis-evden-eve-nakliyat': 'bitlis-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-bolu-evden-eve-nakliyat': 'bolu-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-burdur-evden-eve-nakliyat': 'burdur-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-bursa-evden-eve-nakliyat': 'bursa-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-canakkale-evden-eve-nakliyat': 'canakkale-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-cankiri-evden-eve-nakliyat': 'cankiri-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-corum-evden-eve-nakliyat': 'corum-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-denizli-evden-eve-nakliyat': 'denizli-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-diyarbakir-evden-eve-nakliyat': 'diyarbakir-sehirlerarasi-nakliye-ucretleri',
  'ankara-edirne-evden-eve-nakliyat': 'edirne-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-elazig-evden-eve-nakliyat': 'elazig-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-erzincan-evden-eve-nakliyat': 'erzincan-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-erzurum-evden-eve-nakliyat': 'erzurum-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-eskisehir-evden-eve-nakliyat': 'eskisehir-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-gaziantep-evden-eve-nakliyat': 'gaziantep-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-giresun-evden-eve-nakliyat': 'giresun-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-gumushane-evden-eve-nakliyat': 'gumushane-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-hakkari-evden-eve-nakliyat': 'hakkari-sehirlerarasi-nakliyat-fiyatlar',
  'ankara-hatay-evden-eve-nakliyat': 'hatay-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-isparta-evden-eve-nakliyat': 'isparta-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-istanbul-evden-eve-nakliyat': 'istanbul-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-izmir-evden-eve-nakliyat': 'izmir-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-kars-evden-eve-nakliyat': 'kars-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-kastamonu-evden-eve-nakliyat': 'kastamonu-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-kayseri-evden-eve-nakliyat': 'kayseri-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-kirklareli-evden-eve-nakliyat': 'kirklareli-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-kirsehir-evden-eve-nakliyat': 'kirsehir-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-kocaeli-evden-eve-nakliyat': 'kocaeli-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-konya-evden-eve-nakliyat': 'konya-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-kutahya-evden-eve-nakliyat': 'kutahya-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-malatya-evden-eve-nakliyat': 'malatya-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-manisa-evden-eve-nakliyat': 'manisa-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-mardin-evden-eve-nakliyat': 'mardin-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-mersin-evden-eve-nakliyat': 'mersin-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-mugla-evden-eve-nakliyat': 'mugla-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-mus-evden-eve-nakliyat': 'mus-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-nevsehir-evden-eve-nakliyat': 'nevsehir-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-nigde-evden-eve-nakliyat': 'nigde-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-ordu-evden-eve-nakliyat': 'ordu-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-rize-evden-eve-nakliyat': 'rize-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-sakarya-evden-eve-nakliyat': 'sakarya-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-samsun-evden-eve-nakliyat': 'samsun-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-sanliurfa-evden-eve-nakliyat': 'sanliurfa-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-siirt-evden-eve-nakliyat': 'siirt-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-sinop-evden-eve-nakliyat': 'sinop-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-sivas-evden-eve-nakliyat': 'sivas-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-tekirdag-evden-eve-nakliyat': 'tekirdag-sehirlerarasi-nakliyat-fiyatlari',
  'ankara-tokat-evden-eve-nakliyat': 'tokat-sehirler-arasi-nakliyat-fiyatlari',
  'ankara-trabzon-evden-eve-nakliyat': 'trabzon-sehirlerarasi-nakliyat-fiyatlari',
}

/** Hizmet sayfaları: bizim slug -> yayın yolu */
export const hizmetYolu: Record<string, string> = {
  'ambalajli-tasima': 'ambalajli-tasimacilik',
  'ankara-asansor-kiralama': 'ankara-asansor-kiralama',
  'ankara-asansorlu-nakliyat': 'ankara-asansorlu-nakliyat',
  'ankara-kurumsal-tasimacilik': 'ankara-kurumsal-tasimacilik',
  'ankara-ofis-tasima': 'ankara-ofis-tasima',
  'ankara-okul-tasima': 'ankara-okul-tasima',
  'ankara-sehir-ici-nakliyat': 'ankara-sehir-ici-nakliyat',
  'askili-tekstil-tasima': 'ankara-askili-tekstil-tasima',
  'banka-tasima': 'ankara-banka-tasima',
  'esya-depolama': 'ankara-esya-depolama',
  'parca-esya-tasima': 'ankara-parca-esya-tasima',
  'piyano-tasima': 'ankara-piyano-tasima',
  'sigortali-tasima': 'ankara-sigortali-tasimacilik',
}

/** Blog yazıları: bizim slug -> yayın yolu (eski sitede aynı konuda sayfa varsa) */
export const yaziYolu: Record<string, string> = {
  'ankara-evden-eve-nakliyat-fiyatlari': 'ankara-evden-eve-nakliyat-fiyatlari-nasil-belirlenir',
  'ankara-nakliyat-firmasi-secerken': 'nakliyat-firmasi-secerken-dikkat-edilmesi-gerekenler',
  'beyaz-esya-tasima-rehberi': 'tasinirken-beyaz-esyalar-nasil-paketlenir',
  'evden-eve-nakliyat-ne-kadar-surer': 'tasinma-gunu-nasil-ilerler',
  'tasinmadan-once-yapilacaklar-listesi': 'tasinma-oncesi-hazirlik-listesi',
}

/**
 * Eski sitede kök seviyede yayınlanan semtler.
 * Bu sayfalar Google'da kendi adresleriyle sıralandığı için yeni sitede de
 * ilçenin altına inmiyor, aynı adreste kalıyor. Anahtar: "ilçeYolu/semtSlug".
 */
export const semtYolu: Record<string, string> = {
  'cankaya-evden-eve-nakliyat/balgat': 'balgat-evden-eve-nakliyat',
  'cankaya-evden-eve-nakliyat/bilkent': 'bilkent-evden-eve-nakliyat',
  'cankaya-evden-eve-nakliyat/cayyolu': 'cayyolu-evden-eve-nakliyat',
  'cankaya-evden-eve-nakliyat/dikmen': 'dikmen-evden-eve-nakliyat',
  'cankaya-evden-eve-nakliyat/esat': 'esat-evden-eve-nakliyat',
  'cankaya-evden-eve-nakliyat/umitkoy': 'umitkoy-evden-eve-nakliyat',
  'etimesgut-evden-eve-nakliyat/baglica': 'baglica-evden-eve-nakliyat',
  'etimesgut-evden-eve-nakliyat/elvankent': 'elvankent-evden-eve-nakliyat',
  'etimesgut-evden-eve-nakliyat/eryaman': 'eryaman-evden-eve-nakliyat',
  'etimesgut-evden-eve-nakliyat/yapracik': 'yapracik-evden-eve-nakliyat',
  'kecioren-evden-eve-nakliyat/etlik': 'etlik-evden-eve-nakliyat',
  'mamak-evden-eve-nakliyat/abidinpasa': 'abidinpasa-evden-eve-nakliyat',
  'mamak-evden-eve-nakliyat/huseyingazi': 'huseyin-gazi-evden-eve-nakliyat',
  'yenimahalle-evden-eve-nakliyat/batikent': 'batikent-evden-eve-nakliyat',
  'yenimahalle-evden-eve-nakliyat/sentepe': 'sentepe-evden-eve-nakliyat',
}

/** Sabit sayfalar */
export const sayfa = {
  anasayfa: '/',
  hakkimizda: '/hakkimizda',
  iletisim: '/iletisim',
  hizmetler: '/hizmetler',
  bolgeler: '/hizmet-bolgelerimiz',
  sehirlerArasi: '/ankara-sehirler-arasi-nakliyat',
  blog: '/blog',
  galeri: '/foto-galeri',
  teklif: '/fiyat-teklif-formu',
  hesaplama: '/nakliyat-fiyat-hesaplama',
} as const

export const urlIlce = (path: string) => `/${path}`
export const urlSemt = (ilcePath: string, semtSlug: string) => {
  const kok = semtYolu[`${ilcePath}/${semtSlug}`]
  return kok ? `/${kok}` : `/${ilcePath}/${semtSlug}`
}
export const urlIl = (slug: string) => `/${ilYolu[slug] ?? slug}`
export const urlHizmet = (slug: string) => `/${hizmetYolu[slug] ?? slug}`
export const urlYazi = (slug: string) => `/${yaziYolu[slug] ?? slug}`
export const urlKurumsal = (slug: string) => `/hakkimizda/${slug}`

/** Yayın yolundan bizim slug'a dönen ters harita. */
const ters = (harita: Record<string, string>) =>
  Object.fromEntries(Object.entries(harita).map(([slug, yol]) => [yol, slug]))

const ilSlugu = ters(ilYolu)
const hizmetSlugu = ters(hizmetYolu)
const yaziSlugu = ters(yaziYolu)

/**
 * Kök seviyedeki bir adresi hangi içeriğe ait olduğunu bilmeden çözer.
 * Eski karşılığı olmayan sayfalar kendi slug'ıyla yayınlandığı için,
 * haritada bulunamayan yol olduğu gibi denenir.
 */
export const slugIl = (yol: string) => ilSlugu[yol] ?? yol
export const slugHizmet = (yol: string) => hizmetSlugu[yol] ?? yol
export const slugYazi = (yol: string) => yaziSlugu[yol] ?? yol

/** Kök seviyede yayınlanan semtin yolundan "ilçeYolu/semtSlug" anahtarını verir. */
const semtAnahtari = ters(semtYolu)
export const kokSemt = (yol: string) => {
  const anahtar = semtAnahtari[yol]
  if (!anahtar) return undefined
  const [ilce, semt] = anahtar.split('/')
  return { ilce, semt }
}

/** Bu semtin sayfası ilçenin altında değil, kök seviyede mi yayınlanıyor? */
export const semtKokte = (ilcePath: string, semtSlug: string) =>
  semtYolu[`${ilcePath}/${semtSlug}`] !== undefined
