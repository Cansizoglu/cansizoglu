/**
 * Eşya hacmi hesaplama aracının eşya listesi.
 *
 * Hacimler (m³) ambalajlı hâlde araçta kapladığı yaklaşık yerdir; söküldüğünde
 * küçülen mobilyalar (gardırop, yatak) sökülmüş hâline göre yazıldı. Rakamlar
 * sektörde kullanılan ortalama değerlerdir, kesin hacim keşifte çıkar.
 */
export type VolumeItem = { id: string; name: string; m3: number }
export type VolumeRoom = { id: string; name: string; items: VolumeItem[] }

export const volumeRooms: VolumeRoom[] = [
  {
    id: 'salon',
    name: 'Salon',
    items: [
      { id: 'koltuk-3', name: 'Üçlü koltuk', m3: 2 },
      { id: 'koltuk-2', name: 'İkili koltuk', m3: 1.5 },
      { id: 'berjer', name: 'Tekli koltuk / berjer', m3: 0.8 },
      { id: 'kose', name: 'Köşe koltuk', m3: 3.5 },
      { id: 'sehpa', name: 'Orta sehpa', m3: 0.3 },
      { id: 'tv-unite', name: 'TV ünitesi', m3: 0.8 },
      { id: 'tv', name: 'Televizyon', m3: 0.3 },
      { id: 'vitrin', name: 'Vitrin / büfe', m3: 1.5 },
      { id: 'yemek-masasi', name: 'Yemek masası', m3: 1.2 },
      { id: 'sandalye', name: 'Sandalye', m3: 0.25 },
      { id: 'kitaplik', name: 'Kitaplık', m3: 1 },
      { id: 'hali', name: 'Halı (rulo)', m3: 0.2 },
    ],
  },
  {
    id: 'yatak',
    name: 'Yatak odası',
    items: [
      { id: 'cift-yatak', name: 'Çift kişilik yatak ve baza', m3: 2 },
      { id: 'tek-yatak', name: 'Tek kişilik yatak', m3: 1 },
      { id: 'gardirop-3', name: 'Gardırop (3 kapaklı ve üzeri)', m3: 2 },
      { id: 'gardirop-2', name: 'Gardırop (2 kapaklı)', m3: 1.4 },
      { id: 'sifonyer', name: 'Şifonyer', m3: 0.8 },
      { id: 'komodin', name: 'Komodin', m3: 0.2 },
      { id: 'makyaj', name: 'Makyaj masası', m3: 0.5 },
    ],
  },
  {
    id: 'cocuk',
    name: 'Çocuk / çalışma odası',
    items: [
      { id: 'ranza', name: 'Ranza', m3: 1.5 },
      { id: 'calisma-masasi', name: 'Çalışma masası', m3: 0.6 },
      { id: 'besik', name: 'Bebek beşiği', m3: 0.6 },
      { id: 'ofis-koltugu', name: 'Ofis koltuğu', m3: 0.4 },
    ],
  },
  {
    id: 'mutfak',
    name: 'Mutfak ve beyaz eşya',
    items: [
      { id: 'buzdolabi', name: 'Buzdolabı', m3: 1 },
      { id: 'camasir', name: 'Çamaşır makinesi', m3: 0.6 },
      { id: 'bulasik', name: 'Bulaşık makinesi', m3: 0.5 },
      { id: 'kurutma', name: 'Kurutma makinesi', m3: 0.6 },
      { id: 'firin', name: 'Fırın / ocak', m3: 0.5 },
      { id: 'mutfak-masasi', name: 'Mutfak masası', m3: 0.6 },
    ],
  },
  {
    id: 'diger',
    name: 'Koli ve diğer',
    items: [
      { id: 'koli', name: 'Koli (standart)', m3: 0.1 },
      { id: 'bavul', name: 'Bavul', m3: 0.15 },
      { id: 'bisiklet', name: 'Bisiklet', m3: 0.5 },
      { id: 'balkon', name: 'Balkon takımı', m3: 0.8 },
      { id: 'klima', name: 'Klima (iç ve dış ünite)', m3: 0.3 },
    ],
  },
]

/** Toplam hacme göre önerilen araç. Sınırlar ambalajlı yükün sığdığı hacimdir. */
export const vehicles = [
  { max: 6, name: 'Panelvan', crew: '1-2 kişi', hours: '1-2 saat' },
  { max: 14, name: 'Kamyonet', crew: '2-3 kişi', hours: '2-4 saat' },
  { max: 24, name: 'Küçük kapalı kasa kamyon', crew: '3-4 kişi', hours: '4-6 saat' },
  { max: 40, name: 'Kapalı kasa kamyon', crew: '4-5 kişi', hours: '6-8 saat' },
  { max: Infinity, name: 'İki araç veya büyük kamyon', crew: '5-6 kişi', hours: 'Tam gün' },
]

/** Toplam hacme göre fiyat listesindeki en yakın ev tipi (hesaplama aracındaki id). */
export function homeTypeForVolume(m3: number) {
  if (m3 <= 6) return 'parca'
  if (m3 <= 14) return '1+1'
  if (m3 <= 22) return '2+1'
  if (m3 <= 32) return '3+1'
  if (m3 <= 42) return '4+1'
  return '5+1'
}
