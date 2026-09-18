import type { District } from './types'

export const cankaya: District = {
  slug: 'cankaya',
  name: 'Çankaya',
  path: 'cankaya-evden-eve-nakliyat',
  zone: 'merkez',
  lat: 39.9,
  lon: 32.855,
  metaTitle: 'Çankaya Evden Eve Nakliyat | Ankara Çankaya Taşıma',
  metaDescription:
    'Çankaya evden eve nakliyat: Kızılay, Bahçelievler, Çukurambar, Çayyolu ve tüm Çankaya semtlerinde asansörlü, ambalajlı ve sigortalı taşımacılık.',
  intro: [
    'Çankaya evden eve nakliyat, Ankara’nın en merkezi ve trafiğin en yoğun olduğu ilçesinde çalışmak demektir. Kızılay, Tunalı Hilmi ve Bahçelievler çevresinde gündüz saatlerinde araç park etmek neredeyse imkânsız olduğu için taşımaları sabah erken saatlere veya hafta sonuna alıyoruz.',
    'İlçede yüksek katlı rezidanslardan eski müstakil apartmanlara, Çayyolu ve Ümitköy’deki sitelerden Dikmen’in eğimli sokaklarına kadar çok farklı yapı tipi var. Her bina için taşıma yöntemini ayrı planlıyor, rezidanslarda yük asansörü rezervasyonunu ve yönetim iznini biz takip ediyoruz.',
  ],
  highlights: [
    {
      title: 'Trafik dostu saat planı',
      text: 'Merkezdeki taşımaları sabah erken veya hafta sonu yaparak zaman kaybını önlüyoruz.',
    },
    {
      title: 'Rezidans deneyimi',
      text: 'Yüksek katlı binalarda yük asansörü rezervasyonu ve yönetim iznini biz takip ediyoruz.',
    },
    {
      title: 'Ofis taşımada güçlüyüz',
      text: 'Çankaya’daki iş merkezlerinde mesai dışı ofis taşıma yapıyoruz.',
    },
  ],
  neighborhoods: [
    {
      slug: 'kizilay',
      name: 'Kızılay',
      intro:
        'Kızılay’da taşımanın en zor tarafı araç park etmek. Bu yüzden taşımaları sabah 07:00 gibi başlatıyoruz.',
      notes: [
        'Gündüz saatlerinde yükleme yapmak çok zor, erken saat şart.',
        'Çoğu binada asansör var ancak kabin küçük, büyük mobilyalar için mobil asansör kullanılıyor.',
        'Yaya yoğunluğu nedeniyle yükleme alanı bariyerle ayrılıyor.',
      ],
    },
    {
      slug: 'bahcelievler',
      name: 'Bahçelievler',
      intro:
        'Bahçelievler’de eski ve bakımlı apartmanlar yoğun. Merdiven boşlukları dar, taşımalar genelde asansörle yapılıyor.',
      notes: [
        'Dar merdiven nedeniyle gardırop ve koltuklar asansörle indiriliyor.',
        'Sokak aralarında park için önceden yer ayırtmak gerekiyor.',
      ],
    },
    {
      slug: 'cukurambar',
      name: 'Çukurambar',
      intro:
        'Çukurambar, yeni ve yüksek katlı yapılarıyla öne çıkıyor. Site kuralları taşıma saatini belirliyor.',
      notes: [
        'Site yönetimleri genellikle 09:00 - 18:00 arası taşımaya izin veriyor.',
        'Yük asansörü rezervasyonu taşımadan önce yapılıyor.',
        'Kapalı otoparklarda araç yüksekliği sınırı olabiliyor, keşifte ölçülüyor.',
      ],
    },
    {
      slug: 'oran',
      name: 'Oran',
      intro:
        'Oran’da geniş yollar ve düzenli site yerleşimi taşımayı kolaylaştırıyor.',
      notes: [
        'Site içi araç girişi için plaka bildirimi yapılıyor.',
        'Geniş yollar sayesinde büyük kasa araçla çalışılabiliyor.',
      ],
    },
    {
      slug: 'dikmen',
      name: 'Dikmen',
      intro:
        'Dikmen’de eğimli sokaklar ve dar geçitler taşıma planını doğrudan etkiliyor.',
      notes: [
        'Eğimli sokaklarda asansör için düz zemin aranıyor.',
        'Bazı sokaklara sadece küçük araç girebiliyor, aktarmalı taşıma yapılıyor.',
      ],
    },
    {
      slug: 'cayyolu',
      name: 'Çayyolu',
      intro:
        'Çayyolu, site ve villa ağırlıklı planlı bir bölge. Bahçeli evlerde taşıma doğrudan araca yükleme ile yapılabiliyor.',
      notes: [
        'Villa taşımalarında bahçe ve teras eşyaları ayrı ambalajlanıyor.',
        'Site giriş izni için taşıma öncesi yönetim bilgilendiriliyor.',
        'Geniş yollar sayesinde tek seferde taşıma mümkün.',
      ],
    },
    {
      slug: 'umitkoy',
      name: 'Ümitköy',
      intro:
        'Ümitköy’de site yoğunluğu yüksek; yük asansörü kullanımı ve yönetim koordinasyonu işin ana parçası.',
      notes: [
        'Yük asansörü saatleri site yönetimiyle önceden konuşuluyor.',
        'Blok girişine araç yanaşabiliyor, yükleme mesafesi kısa.',
      ],
    },
    {
      slug: 'balgat',
      name: 'Balgat',
      intro:
        'Balgat, konut ve iş merkezlerinin iç içe olduğu bir bölge. Hem ev hem ofis taşıması yoğun.',
      notes: [
        'İş merkezlerinde taşıma mesai dışına planlanıyor.',
        'Ana cadde üzerinde yükleme için kısa süreli alan ayrılıyor.',
      ],
    },
    {
      slug: 'ayranci',
      name: 'Ayrancı',
      intro:
        'Ayrancı’da eski apartmanlar ve dar sokaklar var; taşımada asansör kullanımı yaygın.',
      notes: [
        'Dar sokaklarda araç yerleşimi erken saatte yapılıyor.',
        'Eski binalarda merdiven boşluğu dar, mobil asansör tercih ediliyor.',
      ],
    },
    {
      slug: 'kavaklidere',
      name: 'Kavaklıdere',
      intro:
        'Kavaklıdere, Tunalı Hilmi çevresindeki yoğun ticaret nedeniyle taşıma saatinin dikkatle seçildiği bir bölge.',
      notes: [
        'Tunalı çevresinde gündüz yükleme yapmak zor, sabah erken saat tercih ediliyor.',
        'Apartman asansörleri küçük, büyük mobilyalar için mobil asansör kuruluyor.',
      ],
    },
    {
      slug: 'gaziosmanpasa',
      name: 'Gaziosmanpaşa',
      intro:
        'Gaziosmanpaşa’da müstakil binalar ve rezidanslar bir arada. Güvenlikli girişlerde önceden bildirim gerekiyor.',
      notes: [
        'Güvenlikli sitelerde araç ve personel bildirimi yapılıyor.',
        'Bahçeli binalarda yükleme doğrudan araca yapılabiliyor.',
      ],
    },
    {
      slug: 'ovecler',
      name: 'Öveçler',
      intro:
        'Öveçler’de eğimli sokaklar ve yoğun apartman yerleşimi var. Taşımalar asansörle hızlandırılıyor.',
      notes: [
        'Eğim nedeniyle araç yerleşimi için uygun nokta keşifte belirleniyor.',
        'Asansörsüz binalarda mobil asansör standart.',
      ],
    },
    {
      slug: 'emek',
      name: 'Emek',
      intro:
        'Emek, düzenli sokak yapısıyla taşımaya elverişli bir semt. Apartmanların çoğu orta katlı.',
      notes: [
        'Sokaklar araç yanaşmasına uygun.',
        'Orta katlı binalarda taşıma merdiven veya asansörle hızlı ilerliyor.',
      ],
    },
    {
      slug: 'maltepe',
      name: 'Maltepe',
      intro:
        'Maltepe’de konut ve iş yeri karışık; ana cadde üzerinde yükleme planlaması önem taşıyor.',
      notes: [
        'Cadde üzeri binalarda yükleme saati trafiğe göre seçiliyor.',
        'İş yeri taşımaları mesai dışına alınıyor.',
      ],
    },
    {
      slug: 'sokullu',
      name: 'Sokullu',
      intro:
        'Sokullu, Dikmen hattında yer alan yoğun bir konut bölgesi. Sokak eğimi taşımayı etkiliyor.',
      notes: [
        'Eğimli sokaklarda asansör kurulumu için düz alan seçiliyor.',
        'Araç yanaşamayan sokaklarda aktarmalı taşıma yapılıyor.',
      ],
    },
    {
      slug: 'birlik',
      name: 'Birlik',
      intro:
        'Birlik Mahallesi’nde villa ve site yerleşimi öne çıkıyor. Bahçeli evlerde taşıma rahat ilerliyor.',
      notes: [
        'Villa taşımalarında bahçe eşyaları ayrı paketleniyor.',
        'Site girişinde araç bildirimi yapılıyor.',
      ],
    },
    {
      slug: 'yildiz',
      name: 'Yıldız',
      intro:
        'Yıldız, sakin sokakları ve düzenli apartman yerleşimiyle taşımanın kolay planlandığı bir semt.',
      notes: [
        'Sokaklar geniş, araç bina önüne yanaşabiliyor.',
        'Yüksek katlarda mobil asansör tercih ediliyor.',
      ],
    },
    {
      slug: 'asagi-ovecler',
      name: 'Küçükesat',
      intro:
        'Küçükesat’ta eski apartman stoğu yoğun; dar merdiven nedeniyle asansörlü taşıma yaygın.',
      notes: [
        'Dar merdiven boşlukları için mobil asansör kuruluyor.',
        'Sokaklarda park yoğunluğu var, yükleme alanı önceden ayrılıyor.',
      ],
    },
    {
      slug: 'mebusevleri',
      name: 'Mebusevleri',
      intro:
        'Mebusevleri, merkeze yakın ve sakin bir bölge. Taşımalar genellikle sorunsuz ilerliyor.',
      notes: [
        'Sokaklar araç erişimine uygun.',
        'Çoğu binada asansör mevcut.',
      ],
    },
    {
      slug: 'yasamkent',
      name: 'Yaşamkent',
      intro:
        'Yaşamkent, yeni site projelerinin yoğun olduğu bir bölge. Yük asansörü ve yönetim koordinasyonu gerekiyor.',
      notes: [
        'Yük asansörü rezervasyonu taşımadan önce yapılıyor.',
        'Site içi hız ve giriş kurallarına uyuluyor.',
      ],
    },
    {
      slug: 'alacaatli',
      name: 'Alacaatlı',
      intro:
        'Alacaatlı’da yeni konut alanları hızla büyüyor. Geniş yollar taşımayı kolaylaştırıyor.',
      notes: [
        'Geniş yollar sayesinde büyük araçla tek seferde taşıma yapılabiliyor.',
        'Yeni bloklarda yük asansörü kullanılabiliyor.',
      ],
    },
    {
      slug: 'konutkent',
      name: 'Konutkent',
      intro:
        'Konutkent, planlı site yerleşiminin olduğu bir bölge; taşımalar yönetim izniyle programlanıyor.',
      notes: [
        'Site yönetimi taşıma saatini belirleyebiliyor.',
        'Blok önüne araç yanaşabiliyor.',
      ],
    },
  ],
}
