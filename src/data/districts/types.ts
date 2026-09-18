export type Neighborhood = {
  slug: string
  name: string
  /** Semt sayfasının giriş metni. Her semt için ayrı yazılır. */
  intro: string
  /** O semtte taşımayı etkileyen saha notları. */
  notes: string[]
  /** Semtte geçen ana cadde ve bölgeler; metin içinde kullanılır. */
  streets?: string[]
}

export type District = {
  slug: string
  name: string
  /** URL'de kullanılan anahtar kelimeli yol parçası: kecioren-evden-eve-nakliyat */
  path: string
  /** Bölge grubu: merkez ilçeler ana menüde öne çıkar. */
  zone: 'merkez' | 'cevre'
  /** Yaklaşık ilçe merkezi koordinatı; km hesaplama aracı kullanır. */
  lat: number
  lon: number
  metaTitle: string
  metaDescription: string
  intro: string[]
  highlights: { title: string; text: string }[]
  neighborhoods: Neighborhood[]
}
