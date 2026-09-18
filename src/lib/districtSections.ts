import type { District } from '@/data/districts'

export type DistrictSection = {
  id: string
  heading: string
  paragraphs: string[]
  points?: string[]
  serviceSlug?: string
}

/**
 * İlçe sayfalarındaki hizmet başlıklarını üretir.
 * Metinler ilçenin kendi semtleri ve saha notlarıyla beslendiği için
 * her ilçe sayfasında farklı çıkar.
 */
export function districtSections(district: District): DistrictSection[] {
  const d = district.name
  const semtler = district.neighborhoods.map((n) => n.name)
  const ilkUc = semtler.slice(0, 3).join(', ')
  const semtSayisi = semtler.length

  return [
    {
      id: 'evden-eve-nakliyat',
      heading: `${d} Evden Eve Nakliyat`,
      serviceSlug: 'ankara-evden-eve-nakliyat',
      paragraphs: [
        `${d} evden eve nakliyat hizmetimiz, eşyanıza ilk dokunulduğu andan yeni evinizde son vida sıkılana kadar tek ekiple yürür. Taşımadan önce adresinize gelip ücretsiz keşif yapıyor, eşya listesini çıkarıyor ve fiyatı yazılı olarak veriyoruz. Keşifte binanın kat durumu, merdiven genişliği ve aracın yanaşacağı alan yerinde görülür; böylece taşıma gününde plan dışı bir durumla karşılaşılmaz.`,
        `Taşıma günü mobilyalar marangoz ekibimizce sökülür, kırılacak eşya balonlu naylonla, mobilya streç filmle ambalajlanır. Yükleme kapalı kasa araçlara yapılır ve eşya araç içinde sabitlenir. Yeni adreste montaj ve yerleşim aynı gün tamamlanır. ${ilkUc} başta olmak üzere ${d}'nin ${semtSayisi} semtinde bu hizmeti veriyoruz.`,
      ],
      points: [
        'Ücretsiz keşif ve değişmeyen yazılı fiyat',
        'Ambalaj malzemesi ve paketleme işçiliği dahil',
        'Söküm ve montaj kendi marangoz ekibimizle',
        'Sözleşmeli ve sigortalı taşıma',
      ],
    },
    {
      id: 'asansorlu-nakliyat',
      heading: `${d} Asansörlü Nakliyat`,
      serviceSlug: 'ankara-asansorlu-nakliyat',
      paragraphs: [
        `${d}'de yaptığımız taşımaların önemli bölümü mobil taşıma asansörüyle yapılıyor. Dar merdiven boşluklarında gardırop, koltuk ve beyaz eşya dönmediği için eşyayı merdivenden indirmek hem zaman kaybı hem de hasar riskidir. Asansör, eşyayı balkondan veya geniş pencereden doğrudan araca indirir; duvar, korkuluk ve mobilya zarar görmez.`,
        `Asansör araçlarımız firmamıza ait olduğu için ${d} taşımalarında asansör ekiple aynı saatte adreste olur, dışarıdan asansör bekleme sorunu yaşanmaz. Asansörü yalnızca eğitimli operatörlerimiz kullanır ve kurulum öncesi zemin eğimi, ağaç dalları ve elektrik hatları kontrol edilir.`,
      ],
      points: [
        'Zeminden 12. kata kadar güvenli yükleme',
        'Merdivenle saatler süren yükleme dakikalara iner',
        'Duvar, korkuluk ve mobilya çizilmez',
        'Sertifikalı operatör ve firmaya ait asansör',
      ],
    },
    {
      id: 'ofis-tasima',
      heading: `${d} Ofis Taşıma`,
      serviceSlug: 'ankara-ofis-tasima',
      paragraphs: [
        `${d}'deki ofis ve iş yeri taşımalarını mesai dışında planlıyoruz. Amaç, iş gününüzün bölünmemesidir; bu yüzden taşımaların çoğunu cuma akşamı başlatıp pazartesi sabahına yetiştirecek şekilde kuruyoruz. Her masa, dolap ve arşiv kutusu numaralandırılır, yeni ofiste aynı numaraya göre yerleşim yapılır.`,
        `Sunucu, ağ dolabı ve hassas cihazlar darbe emici ambalajla ayrı taşınır. Evrak ve arşiv kutuları kapalı ve mühürlü olarak nakledilir. ${d} içindeki iş yeri taşımalarında kurumsal fatura kesiyor ve sözleşmeli çalışıyoruz.`,
      ],
      points: [
        'Akşam ve hafta sonu çalışma',
        'Numaralandırılmış paketleme ve birebir yerleşim',
        'Sunucu, arşiv ve evrak güvenliği',
        'Kurumsal fatura ve sözleşme',
      ],
    },
    {
      id: 'asansor-kiralama',
      heading: `${d} Asansör Kiralama`,
      serviceSlug: 'ankara-asansor-kiralama',
      paragraphs: [
        `Taşımayı kendiniz yapıyor, yalnızca birkaç büyük parçayı kata çıkarmanız gerekiyorsa ${d} içinde operatörlü mobil asansörümüzü saatlik olarak kiralayabilirsiniz. Mobilya ve beyaz eşyanın yanı sıra tadilat ve inşaat malzemesi taşımak için de kullanılabilir.`,
        `Asansör her zaman kendi operatörümüzle gönderilir; güvenlik gereği operatörsüz kiralama yapmıyoruz. Aracın yanaşabileceği düz bir alan ve eşyanın geçebileceği bir balkon veya geniş pencere yeterlidir.`,
      ],
      points: [
        'Saatlik ve günlük kiralama',
        'Operatör ücrete dahil',
        'Mobilya, beyaz eşya ve inşaat malzemesi',
        `${d} içinde kısa sürede sevkiyat`,
      ],
    },
    {
      id: 'nakliye-fiyatlari',
      heading: `${d} Nakliye Fiyatları`,
      paragraphs: [
        `${d} nakliye fiyatları; taşınacak eşya miktarı, çıkış ve varış adresinin katı, asansör ihtiyacı, iki adres arasındaki mesafe ve istenen ek hizmetlere göre belirlenir. Aynı büyüklükteki iki ev, biri asansörlü binada diğeri asansörsüz dördüncü kattaysa farklı fiyatlanır.`,
        `Fiyat karşılaştırırken fiyatın neyi kapsadığına bakın. Bizde ambalaj malzemesi, paketleme işçiliği, söküm ve montaj ile sigorta verilen fiyata dahildir; taşıma günü ek kalem çıkmaz. ${d} içindeki taşımalarda kısa mesafe avantajını da fiyata yansıtıyoruz.`,
      ],
      points: [
        'Keşif ve fiyat teklifi ücretsizdir',
        'Fiyat sözleşmeye yazılır ve değişmez',
        'Ambalaj, montaj ve sigorta fiyata dahildir',
        'Ortalama fiyat aralıkları anasayfadaki listede',
      ],
    },
  ]
}

/**
 * Semt sayfalarındaki hizmet başlıkları.
 * Metin, semtin kendi saha notlarıyla beslenir.
 */
export function neighborhoodSections(
  district: District,
  neighborhood: { name: string; notes: string[] },
): DistrictSection[] {
  const s = neighborhood.name
  const d = district.name
  const ilkNot = neighborhood.notes[0] ?? ''

  return [
    {
      id: 'evden-eve-nakliyat',
      heading: `${s} Evden Eve Nakliyat`,
      serviceSlug: 'ankara-evden-eve-nakliyat',
      paragraphs: [
        `${s} evden eve nakliyat işlerimizde ekibimiz sabah erken saatte adreste olur. Mobilyalar sökülür, kırılacak eşya balonlu naylonla ve mobilya streç filmle ambalajlanır, yükleme kapalı kasa araca yapılır. Yeni adreste montaj ve yerleşim aynı gün tamamlanır; ertesi güne iş bırakmıyoruz.`,
        `${ilkNot} Bu yüzden ${s} taşımalarında araç yerleşimini ve yükleme saatini keşif sırasında netleştiriyoruz. ${d} ilçesinde uzun süredir çalıştığımız için bölgenin sokak ve bina yapısını önceden biliyoruz.`,
      ],
      points: [
        'Ücretsiz keşif ve yazılı fiyat',
        'Ambalaj, söküm ve montaj fiyata dahil',
        'Kapalı kasa araç ve sigortalı taşıma',
        'Aynı gün taşıma ve kurulum',
      ],
    },
    {
      id: 'asansorlu-nakliyat',
      heading: `${s} Asansörlü Nakliyat`,
      serviceSlug: 'ankara-asansorlu-nakliyat',
      paragraphs: [
        `${s}'de asansörsüz veya dar merdivenli binalarda taşımayı mobil asansörle yapıyoruz. Eşya balkondan ya da geniş pencereden doğrudan araca iner; merdivende taşıma sırasında oluşabilecek çizik ve darbe riski ortadan kalkar. Asansör araçları firmamıza ait olduğu için taşıma saatinde hazır olur.`,
      ],
      points: [
        'Dar merdivende bile hasarsız taşıma',
        'Yükleme süresi belirgin şekilde kısalır',
        'Eğitimli operatör ve firmaya ait asansör',
      ],
    },
    {
      id: 'nakliyat-fiyatlari',
      heading: `${s} Nakliyat Fiyatları`,
      paragraphs: [
        `${s} nakliyat fiyatları eşya miktarı, kat durumu, asansör ihtiyacı ve mesafeye göre belirlenir. ${d} içi kısa mesafeli taşımalarda fiyat, şehirler arası taşımalara göre belirgin şekilde düşer. Kesin fiyat için adresinize gelip ücretsiz keşif yapıyor, fiyatı sözleşmeye yazıyoruz.`,
      ],
      points: [
        'Keşif ücretsiz, fiyat yazılı ve değişmez',
        'Ambalaj, montaj ve sigorta fiyata dahil',
        'Parça eşya için hacme göre fiyat',
      ],
    },
  ]
}
