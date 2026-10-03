import type { District } from '@/data/districts'

export type DistrictSection = {
  id: string
  heading: string
  paragraphs: string[]
  points?: string[]
  serviceSlug?: string
}

/**
 * İlçenin semt saha notları arasından konuya uyan bir not seçer. Aynı semt
 * birden fazla bölümde kullanılmasın diye kullanılanlar `used` içinde tutulur.
 * Not bulunamazsa boş metin döner ve bölüm genel metniyle kalır.
 */
function fieldNote(district: District, pattern: RegExp, used: Set<string>): string {
  for (const n of district.neighborhoods) {
    if (used.has(n.slug)) continue
    const note = n.notes.find((t) => pattern.test(t))
    if (note) {
      used.add(n.slug)
      return `${n.name} semtindeki saha notumuz: ${note}`
    }
  }
  return ''
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
  /*
    Bölüm metinlerinin genel kısmı ilçeden ilçeye aynı kalıyor; her bölüme
    ilçenin kendi semtlerinden gerçek bir saha notu eklenerek sayfalar
    arasındaki benzerlik düşürülüyor ve metin o ilçeye özgü hale geliyor.
  */
  const used = new Set<string>()
  const asansorNotu = fieldNote(district, /asansör/i, used)
  const isYeriNotu = fieldNote(district, /iş yeri|ofis|sanayi|depo|atölye|mesai/i, used)
  const darSokakNotu = fieldNote(district, /dar |küçük araç|aktarma|eğim/i, used)
  const yolNotu = fieldNote(district, /yol|mesafe|uzak|trafik|saat/i, used)

  return [
    {
      id: 'evden-eve-nakliyat',
      heading: `${d} Evden Eve Nakliyat`,
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
        ...(asansorNotu ? [asansorNotu] : []),
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
        ...(isYeriNotu ? [isYeriNotu] : []),
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
        `${d} içinde yalnızca asansöre ihtiyacınız varsa, örneğin yeni aldığınız bir dolabı kata çıkaracak ya da tadilat malzemesini balkondan alacaksanız, mobil asansörümüz operatörüyle birlikte saat ücretiyle gelir. Mobilya ve beyaz eşyanın yanı sıra tadilat ve inşaat malzemesi taşımak için de kullanılabilir.`,
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
      id: 'parca-esya-tasima',
      heading: `${d} Parça Eşya Taşıma`,
      serviceSlug: 'parca-esya-tasima',
      paragraphs: [
        `Her taşınma bir ev dolusu eşya olmuyor. ${d} içinde tek koltuk, buzdolabı, çamaşır makinesi, birkaç koli ya da bir odalık eşya taşıtmak isteyenler için parça eşya taşıma yapıyoruz. Bu işler için kamyon yerine küçük nakliye aracı veya panelvan gönderiyoruz; ödediğiniz ücret de tam taşıma fiyatı değil, kapladığı hacim kadar oluyor.`,
        `Öğrenci evi kurulumu, ikinci el mobilya teslimi, tek parça beyaz eşya nakliyesi ve depoya birkaç kutu kaldırma ${d}'de en çok gelen parça eşya taleplerimiz. Yüksek kata çıkacak tek bir eşya varsa mobil asansörümüzü aynı işe yönlendirebiliyoruz.`,
        ...(darSokakNotu ? [darSokakNotu] : []),
      ],
      points: [
        'Tek eşya, birkaç koli veya bir odalık taşıma',
        'Küçük nakliye aracı ve panelvan seçeneği',
        'Hacme göre fiyat, tam taşıma ücreti değil',
        `${d} içinde aynı gün sevkiyat`,
      ],
    },
    {
      id: 'esya-depolama',
      heading: `${d} Eşya Depolama`,
      serviceSlug: 'esya-depolama',
      paragraphs: [
        `Yeni ev hazır olmadığında ya da tadilat uzadığında eşyanın bekleyeceği bir yer gerekiyor. ${d}'deki taşımalarda eşyanızı depomuza alıyor, listeleyip etiketliyor ve siz hazır olduğunuzda aynı ekiple yeni adrese taşıyoruz. Depoya giren her parça listeye işlendiği için çıkarken eşya aranmıyor.`,
        `Depolama süresi bir hafta da olabilir, bir yıl da. Kısa süreli depolamada eşya paletlenip ambalajlı bekler; uzun süreli depolamada mobilya ayrıca örtülür ve nem kontrolü yapılır. ${d} içindeki taşımalarda depoya giriş ve depodan çıkış nakliyesini tek sözleşmede birleştiriyoruz.`,
      ],
      points: [
        'Kısa ve uzun süreli depolama',
        'Her parça listelenir ve etiketlenir',
        'Ambalajlı bekletme ve nem kontrolü',
        'Depoya giriş ve çıkış taşıması tek sözleşmede',
      ],
    },
    {
      id: 'nakliyeci-secimi',
      heading: `${d} Nakliyeci Seçerken Nelere Bakmalı`,
      paragraphs: [
        `${d} nakliyat firmaları arasından seçim yaparken bakılacak ilk şey, işi yapacak olanın firmanın kendi ekibi mi yoksa taşeron mu olduğudur. Telefonda fiyat verip taşımayı başkasına devreden bir nakliyeci, taşıma günü çıkan sorunun muhatabı olmaz. Kendi aracı, kendi asansörü ve kendi kadrosu olan bir firmada bu sorun yaşanmaz.`,
        `İkinci bakılacak şey fiyatın neyi kapsadığıdır. Ambalaj malzemesi, paketleme işçiliği, söküm ve montaj ile sigorta ayrı kalem olarak eklenirse, ilk duyduğunuz düşük fiyat taşıma günü ikiye katlanabilir. Üçüncüsü de açık adres ve yazılı sözleşmedir: ${d}'de ve Ankara genelinde çalışan firmaların bir kısmı yalnızca cep telefonu numarasıyla iş alıyor.`,
      ],
      points: [
        'Taşeron değil, firmanın kendi ekibi',
        'Fiyata neyin dahil olduğu yazılı olsun',
        'Açık adres, sözleşme ve sigorta poliçesi',
        'Keşif yapmadan telefonda verilen kesin fiyata güvenmeyin',
      ],
    },
    {
      id: 'nakliye-fiyatlari',
      heading: `${d} Nakliye Fiyatları`,
      paragraphs: [
        `${d} nakliye fiyatları; taşınacak eşya miktarı, çıkış ve varış adresinin katı, asansör ihtiyacı, iki adres arasındaki mesafe ve istenen ek hizmetlere göre belirlenir. Aynı büyüklükteki iki ev, biri asansörlü binada diğeri asansörsüz dördüncü kattaysa farklı fiyatlanır.`,
        `Fiyat karşılaştırırken fiyatın neyi kapsadığına bakın. Bizde ambalaj malzemesi, paketleme işçiliği, söküm ve montaj ile sigorta verilen fiyata dahildir; taşıma günü ek kalem çıkmaz. ${d} içindeki taşımalarda kısa mesafe avantajını da fiyata yansıtıyoruz.`,
        ...(yolNotu ? [yolNotu] : []),
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
  neighborhood: { slug: string; name: string; notes: string[]; streets?: string[] },
): DistrictSection[] {
  const s = neighborhood.name
  const d = district.name
  const ilkNot = neighborhood.notes[0] ?? ''
  const ikinciNot = neighborhood.notes[1] ?? ''
  const ucuncuNot = neighborhood.notes[2] ?? ''
  /*
    Semt sayfalarında genel metin payı yüksek olduğu için her bölüme o semte
    özgü veri ekleniyor: kalan saha notları, cadde adları, ilçe listesindeki
    komşu semtler ve ilçenin öne çıkan çalışma koşulu. Böylece aynı ilçedeki
    semt sayfaları bile birbirinden ayrışıyor.
  */
  const index = district.neighborhoods.findIndex((n) => n.slug === neighborhood.slug)
  const komsular = [
    district.neighborhoods[index - 1],
    district.neighborhoods[index + 1],
  ]
    .filter((n): n is NonNullable<typeof n> => Boolean(n) && n.slug !== neighborhood.slug)
    .map((n) => n.name)
  const highlight = district.highlights.length
    ? district.highlights[Math.max(index, 0) % district.highlights.length]
    : undefined
  const caddeler = neighborhood.streets?.length
    ? ` ${s}'de en çok ${neighborhood.streets.join(', ')} çevresindeki adreslerden taşıma alıyoruz.`
    : ''

  return [
    {
      id: 'evden-eve-nakliyat',
      heading: `${s} Evden Eve Nakliyat`,
      paragraphs: [
        `${s} evden eve nakliyat işlerimizde ekibimiz sabah erken saatte adreste olur. Mobilyalar sökülür, kırılacak eşya balonlu naylonla ve mobilya streç filmle ambalajlanır, yükleme kapalı kasa araca yapılır. Yeni adreste montaj ve yerleşim aynı gün tamamlanır; ertesi güne iş bırakmıyoruz.`,
        `${ilkNot} Bu yüzden ${s} taşımalarında araç yerleşimini ve yükleme saatini keşif sırasında netleştiriyoruz. ${d} ilçesinde uzun süredir çalıştığımız için bölgenin sokak ve bina yapısını önceden biliyoruz.${caddeler}`,
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
        ...(ikinciNot ? [`${s} için ikinci saha notumuz: ${ikinciNot}`] : []),
      ],
      points: [
        'Dar merdivende bile hasarsız taşıma',
        'Yükleme süresi belirgin şekilde kısalır',
        'Eğitimli operatör ve firmaya ait asansör',
      ],
    },
    {
      id: 'parca-esya-tasima',
      heading: `${s} Parça Eşya Taşıma`,
      serviceSlug: 'parca-esya-tasima',
      paragraphs: [
        `${s} içinde tek eşya, birkaç koli veya bir odalık taşımalar için küçük nakliye aracı gönderiyoruz. Buzdolabı, çamaşır makinesi, koltuk takımı ya da öğrenci evi eşyası gibi işlerde tam araç ücreti ödemenize gerek kalmıyor; fiyat eşyanın kapladığı hacme göre çıkıyor.`,
        ...(komsular.length
          ? [
              `${s} ile ${komsular.join(' ve ')} arasında yapılan kısa mesafeli parça eşya taşımalarında aynı gün içinde birden fazla adrese uğrayabiliyoruz.`,
            ]
          : []),
      ],
      points: [
        'Tek eşya ve küçük hacimli taşıma',
        'Hacme göre fiyat',
        'Yüksek kat için asansör desteği',
      ],
    },
    {
      id: 'nakliyat-fiyatlari',
      heading: `${s} Nakliyat Fiyatları`,
      paragraphs: [
        `${s} nakliyat fiyatları eşya miktarı, kat durumu, asansör ihtiyacı ve mesafeye göre belirlenir. ${d} içi kısa mesafeli taşımalarda fiyat, şehirler arası taşımalara göre belirgin şekilde düşer. Kesin fiyat için adresinize gelip ücretsiz keşif yapıyor, fiyatı sözleşmeye yazıyoruz.`,
        ...(highlight
          ? [`${d} genelinde fiyatı etkileyen koşullardan biri: ${highlight.title.toLocaleLowerCase('tr-TR')}. ${highlight.text}${ucuncuNot ? ` ${ucuncuNot}` : ''}`]
          : []),
      ],
      points: [
        'Keşif ücretsiz, fiyat yazılı ve değişmez',
        'Ambalaj, montaj ve sigorta fiyata dahil',
        'Parça eşya için hacme göre fiyat',
      ],
    },
  ]
}
