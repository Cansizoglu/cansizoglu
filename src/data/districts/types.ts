export type Neighborhood = {
  slug: string
  name: string
  /** Semt sayfasının giriş metni. Her semt için ayrı yazılır. */
  intro: string
  /** O semtte taşımayı etkileyen saha notları. */
  notes: string[]
  /** Semtte geçen ana cadde ve bölgeler; metin içinde kullanılır. */
  streets?: string[]
  /**
   * Semte özgü, hizmet odaklı uzun metin (2-3 paragraf): bu semtte taşıma
   * nasıl planlanıyor, hangi hizmet öne çıkıyor, taşınacak kişiye pratik
   * öneriler. Saha notlarına dayanır; coğrafi tanıtım yazısı değildir.
   */
  body?: string[]
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
  /** İlçede birlikte çalıştığımız iş ortağı; sayfada dış bağlantı olarak verilir. */
  partner?: {
    /** Bağlantı metni olarak kullanılacak firma adı. */
    name: string
    url: string
    heading: string
    paragraphs: string[]
  }
}
