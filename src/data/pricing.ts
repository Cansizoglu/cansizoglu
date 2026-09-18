/**
 * Ankara evden eve nakliyat fiyat listesi.
 * Fiyatlar burada tek yerden güncellenir; anasayfadaki tablo ve
 * hesaplama aracı bu dosyadan beslenir.
 */

export type PriceRow = {
  type: string
  note: string
  min: number
  max: number
}

export const priceUpdatedAt = 'Eylül 2026'

export const priceRows: PriceRow[] = [
  { type: '1+1 Evden Eve Nakliyat', note: 'Yaklaşık 15-20 parça eşya', min: 25000, max: 30000 },
  { type: '2+1 Evden Eve Nakliyat', note: 'Yaklaşık 25-35 parça eşya', min: 25000, max: 40000 },
  { type: '3+1 Evden Eve Nakliyat', note: 'Yaklaşık 40-55 parça eşya', min: 30000, max: 45000 },
  { type: '4+1 Evden Eve Nakliyat', note: 'Yaklaşık 55-70 parça eşya', min: 35000, max: 55000 },
  { type: '5+1 Evden Eve Nakliyat', note: 'Villa ve dubleks dahil', min: 45000, max: 65000 },
  { type: 'Parça Eşya Taşıma', note: 'Birkaç mobilya veya beyaz eşya', min: 7000, max: 10000 },
  { type: 'Küçük Eşya / Kamyonet Taşıma', note: 'Tek parça ve küçük hacimli taşıma', min: 7000, max: 10000 },
]

export const priceIncluded = [
  'Ücretsiz keşif ve yazılı fiyat',
  'Ambalaj malzemesi ve paketleme işçiliği',
  'Mobilya söküm ve yeni adreste montaj',
  'Kapalı kasa araç ve sigortalı taşıma',
]

export const priceFactors = [
  {
    title: 'Eşya hacmi',
    text: 'Oda sayısı ve eşya yoğunluğu, kullanılacak aracın boyutunu ve ekip sayısını belirler.',
  },
  {
    title: 'Kat ve asansör durumu',
    text: 'Asansörsüz yüksek katlarda mobil taşıma asansörü gerekir; bu da işçilik süresini değiştirir.',
  },
  {
    title: 'Mesafe',
    text: 'İki adres arasındaki yol, aracın seferde geçirdiği süreyi ve yakıt maliyetini etkiler.',
  },
  {
    title: 'Ek hizmetler',
    text: 'Depolama, piyano veya kasa gibi özel eşya taşıma ve ek ambalaj ayrıca hesaplanır.',
  },
  {
    title: 'Adresin ulaşılabilirliği',
    text: 'Dar sokak, park sıkıntısı ve site giriş kuralları taşıma planını ve süreyi değiştirir.',
  },
  {
    title: 'Taşıma tarihi',
    text: 'Ay başı, ay sonu ve yaz ayları sektörde en yoğun dönemlerdir.',
  },
]

/** Hesaplama aracının kullandığı katsayılar. */
export const calculator = {
  /** Ücretsiz kabul edilen mesafe (km). Bu mesafeden sonrası km başına ücretlendirilir. */
  freeKm: 15,
  /** Ankara içi km başına ek ücret (₺). */
  perKm: 130,
  /** Asansör gerektiren taşımalarda eklenen ücret (₺). */
  liftFee: 3500,
  /** Asansörsüz binada 2. kattan sonra her kat için eklenen ücret (₺). */
  perFloorFee: 900,
  /** Ambalaj hizmeti seçilirse eklenen ücret (₺). */
  packingFee: 2500,
  /** Depolama seçilirse aylık eklenen ücret (₺). */
  storageFee: 4000,
}

/** Tabloda ve hesaplama aracında kullanılan Türk Lirası biçimi. */
export const formatTl = (value: number) =>
  new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(value)

/** Hesaplama aracının ev tipi seçenekleri; fiyat listesiyle aynı kaynaktan gelir. */
export const homeTypes = [
  { id: '1+1', label: '1+1 Daire', min: 25000, max: 30000 },
  { id: '2+1', label: '2+1 Daire', min: 25000, max: 40000 },
  { id: '3+1', label: '3+1 Daire', min: 30000, max: 45000 },
  { id: '4+1', label: '4+1 Daire', min: 35000, max: 55000 },
  { id: '5+1', label: '5+1 Daire / Villa', min: 45000, max: 65000 },
  { id: 'parca', label: 'Parça Eşya', min: 7000, max: 10000 },
  { id: 'kucuk', label: 'Küçük Eşya / Kamyonet', min: 7000, max: 10000 },
] as const
