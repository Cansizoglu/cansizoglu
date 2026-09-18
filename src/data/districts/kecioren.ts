import type { District } from './types'

export const kecioren: District = {
  slug: 'kecioren',
  name: 'Keçiören',
  path: 'kecioren-evden-eve-nakliyat',
  zone: 'merkez',
  lat: 39.985,
  lon: 32.865,
  metaTitle: 'Keçiören Evden Eve Nakliyat | Asansörlü ve Sigortalı Taşıma',
  metaDescription:
    'Keçiören evden eve nakliyat: Etlik, Kalaba, Aşağı Eğlence ve tüm Keçiören semtlerinde asansörlü, ambalajlı ve sigortalı taşıma. Ücretsiz keşif.',
  intro: [
    'Keçiören evden eve nakliyat işi, Ankara’nın en yoğun yerleşim ilçelerinden birinde çalışmak demektir. Bina stoğunun büyük bölümü dar merdivenli ve asansörsüz apartmanlardan oluşur; sokaklar çoğu yerde tek şeritli ve park sıkıntılıdır. Bu iki sebep, Keçiören’de yapılan taşımaların neredeyse tamamında mobil asansör gerektirir.',
    'Bu ilçede yıllardır çalışıyoruz ve hangi sokağa aracın yanaşabileceğini, hangi binada asansörün kurulabileceğini önceden biliyoruz. Kızlarpınarı Caddesi ve Fatih Caddesi gibi ana akslarda yükleme saatini trafiğe göre, ara sokaklarda ise park durumuna göre planlıyoruz. Keşif sırasında bunu yerinde doğruluyor, taşıma gününde sürpriz yaşanmasını engelliyoruz.',
  ],
  highlights: [
    {
      title: 'Asansör hazır gelir',
      text: 'Keçiören taşımalarının çoğu asansörle yapılır, asansör aracı ekiple aynı saatte adreste olur.',
    },
    {
      title: 'Dar sokak planlaması',
      text: 'Aracın yanaşamadığı sokaklarda küçük araçla aktarma yaparak taşımayı sürdürürüz.',
    },
    {
      title: 'Aynı gün teslim',
      text: 'Keçiören içi taşımalar sabah başlar, aynı gün kurulumla biter.',
    },
  ],
  neighborhoods: [
    {
      slug: 'etlik',
      name: 'Etlik',
      intro:
        'Etlik, Keçiören’in en eski ve en yoğun semtlerinden biri. Hastane çevresindeki caddelerde gün içi trafik ağır olduğu için taşımalara erken saatte başlıyoruz.',
      notes: [
        'Eski apartmanlarda merdiven boşlukları dar, taşımaların çoğu asansörle yapılıyor.',
        'Hastane bölgesinde park yeri sınırlı, araç için önceden yer ayırtıyoruz.',
        'Sabah 07:30 - 08:00 arası başlayan taşımalar aynı gün tamamlanıyor.',
      ],
      streets: ['Yunus Emre Caddesi', 'Etlik Caddesi'],
    },
    {
      slug: 'kalaba',
      name: 'Kalaba',
      intro:
        'Kalaba’da hem eski apartmanlar hem de yeni siteler bir arada. Site içi taşımalarda yönetimden giriş izni alınması gerekebiliyor.',
      notes: [
        'Site girişlerinde araç kaydı isteniyor, bunu taşımadan bir gün önce hallediyoruz.',
        'Yeni bloklarda bina asansörü kullanılabiliyor, bu taşıma süresini kısaltıyor.',
        'Eski apartmanlarda mobil asansör standart hale geldi.',
      ],
    },
    {
      slug: 'asagi-eglence',
      name: 'Aşağı Eğlence',
      intro:
        'Aşağı Eğlence, ana cadde üzerinde yoğun bir yerleşim. Cadde üzerindeki binalarda yükleme için kısa süreli şerit kapatma gerekebiliyor.',
      notes: [
        'Cadde üzeri binalarda yükleme saatini trafik yoğunluğuna göre planlıyoruz.',
        'Ara sokaklardaki apartmanlarda asansör kurulumu için genellikle yeterli alan var.',
      ],
    },
    {
      slug: 'yukari-eglence',
      name: 'Yukarı Eğlence',
      intro:
        'Yukarı Eğlence’de eğimli sokaklar taşımanın en belirleyici unsuru. Araç yerleşimini eğime göre yapıyoruz.',
      notes: [
        'Eğimli sokaklarda asansör aracının dengelenmesi için düz bir alan seçiliyor.',
        'Kış aylarında buzlanmaya karşı taşıma saati gün ortasına alınıyor.',
      ],
    },
    {
      slug: 'ovacik',
      name: 'Ovacık',
      intro:
        'Ovacık, Keçiören’in yeni yapılaşan bölgelerinden. Geniş sokaklar ve yeni binalar taşımayı kolaylaştırıyor.',
      notes: [
        'Yeni bloklarda yük asansörü mevcut, taşıma süresi kısalıyor.',
        'Sokaklar geniş olduğu için büyük kasa araçla tek seferde taşıma yapılabiliyor.',
      ],
    },
    {
      slug: 'baglum',
      name: 'Bağlum',
      intro:
        'Bağlum, merkeze uzaklığı nedeniyle taşıma planlamasında yol süresinin hesaba katıldığı bir bölge.',
      notes: [
        'Merkeze mesafe nedeniyle taşımalar sabah erken saatte başlatılıyor.',
        'Müstakil ve bahçeli evlerde taşıma araca doğrudan yükleme ile yapılabiliyor.',
      ],
    },
    {
      slug: 'sanatoryum',
      name: 'Sanatoryum',
      intro:
        'Sanatoryum bölgesi ağaçlıklı ve sakin bir yerleşim; sokak araları dar olduğu için araç yerleşimi önceden planlanıyor.',
      notes: [
        'Ağaç dalları asansör kurulumunu etkileyebiliyor, keşifte bu kontrol ediliyor.',
        'Sokak araları dar, gerektiğinde küçük araçla aktarma yapılıyor.',
      ],
    },
    {
      slug: 'gumusdere',
      name: 'Gümüşdere',
      intro:
        'Gümüşdere’de yeni konut projeleri yoğun. Site içi taşımalarda yönetim izni ve asansör rezervasyonu gerekiyor.',
      notes: [
        'Site yönetiminden taşıma saati için önceden onay alınıyor.',
        'Yük asansörü rezervasyonu taşımadan önce yapılıyor.',
      ],
    },
    {
      slug: 'ayvali',
      name: 'Ayvalı',
      intro:
        'Ayvalı, Keçiören’in merkeze yakın ve yoğun nüfuslu semtlerinden. Apartman girişleri dar, yükleme alanı kısıtlı.',
      notes: [
        'Apartman önlerinde yükleme için kısa süreli alan ayırtmak gerekiyor.',
        'Asansörsüz binalarda mobil asansör kullanılıyor.',
      ],
    },
    {
      slug: 'subayevleri',
      name: 'Subayevleri',
      intro:
        'Subayevleri’nde düzenli blok yerleşimi var; araç blok önüne yanaşabildiği için yükleme mesafesi kısa oluyor.',
      notes: [
        'Blok girişlerine araç yanaşabiliyor.',
        'Çoğu binada asansör mevcut, mobil asansör yalnızca büyük mobilyalar için kuruluyor.',
      ],
    },
    {
      slug: 'incirli',
      name: 'İncirli',
      intro:
        'İncirli, ana cadde üzerinde yoğun ticaretin olduğu bir bölge. Hem konut hem iş yeri taşıması yapıyoruz.',
      notes: [
        'Cadde üzerindeki iş yerlerinde taşıma mesai dışına alınıyor.',
        'Gündüz trafiği nedeniyle konut taşımaları sabah erken başlıyor.',
      ],
    },
    {
      slug: 'aktepe',
      name: 'Aktepe',
      intro:
        'Aktepe’de eğimli sokaklar ve sıkışık apartman yerleşimi taşıma planını belirliyor.',
      notes: [
        'Eğimli sokaklarda asansör için düz zemin aranıyor.',
        'Dar sokaklarda küçük araçla aktarmalı taşıma yapılabiliyor.',
      ],
    },
    {
      slug: 'pinarbasi',
      name: 'Pınarbaşı',
      intro:
        'Pınarbaşı, Keçiören’in yoğun konut bölgelerinden. Apartmanların büyük bölümü asansörsüz.',
      notes: [
        'Asansörsüz binalar nedeniyle mobil asansör standart.',
        'Sokak park yoğunluğu için yükleme alanı önceden ayrılıyor.',
      ],
    },
    {
      slug: 'esertepe',
      name: 'Esertepe',
      intro:
        'Esertepe’de yokuşlu sokaklar ve yüksek katlı apartmanlar bir arada; taşımada asansör kullanımı yaygın.',
      notes: [
        'Yokuş nedeniyle araç yerleşimi için düz nokta seçiliyor.',
        'Yüksek katlarda mobil asansör hem hızlı hem güvenli çözüm.',
      ],
    },
    {
      slug: 'guclukaya',
      name: 'Güçlükaya',
      intro:
        'Güçlükaya, merkeze yakın ve apartman yoğunluğu yüksek bir semt. Taşımalar genellikle sabah erken saatte tamamlanıyor.',
      notes: [
        'Sabah erken saatlerde sokaklar boş olduğu için yükleme hızlı ilerliyor.',
        'Dar merdivenli binalarda asansör tercih ediliyor.',
      ],
    },
    {
      slug: 'basinevleri',
      name: 'Basınevleri',
      intro:
        'Basınevleri’nde planlı yerleşim ve düzenli sokak yapısı taşımayı kolaylaştırıyor.',
      notes: [
        'Sokaklar araç yanaşmasına uygun.',
        'Çoğu binada asansör var, mobil asansör ihtiyaca göre kuruluyor.',
      ],
    },
    {
      slug: 'kuscagiz',
      name: 'Kuşcağız',
      intro:
        'Kuşcağız, Keçiören’in eski yerleşim bölgelerinden. Merdiven boşlukları dar, taşımada asansör yaygın.',
      notes: [
        'Eski yapı stoğu nedeniyle mobil asansör kullanımı yüksek.',
        'Ara sokaklarda küçük araçla aktarma yapılabiliyor.',
      ],
    },
    {
      slug: 'atapark',
      name: 'Atapark',
      intro:
        'Atapark çevresi Keçiören’in en canlı bölgelerinden. Park çevresindeki caddelerde gündüz trafik yoğun.',
      notes: [
        'Park çevresi caddelerde yükleme sabah erken saate alınıyor.',
        'Site ve apartman karışık yerleşim, taşıma yöntemi binaya göre belirleniyor.',
      ],
    },
    {
      slug: 'hasköy',
      name: 'Hasköy',
      intro:
        'Hasköy, Keçiören ile Altındağ sınırında yer alan, ulaşımı kolay bir bölge. Taşımalarda aktarma ihtiyacı az.',
      notes: [
        'Ana yollara yakınlık nedeniyle araç erişimi rahat.',
        'Asansörsüz binalarda mobil asansör kuruluyor.',
      ],
    },
    {
      slug: 'sentepe',
      name: 'Şenlik',
      intro:
        'Şenlik bölgesinde apartman yoğunluğu yüksek, sokaklar dar. Taşımalar mobil asansörle yapılıyor.',
      notes: [
        'Dar sokaklarda araç yerleşimi erken saatte yapılıyor.',
        'Asansörsüz binalar için mobil asansör hazır geliyor.',
      ],
    },
  ],
}
