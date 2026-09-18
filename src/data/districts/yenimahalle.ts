import type { District } from './types'

export const yenimahalle: District = {
  slug: 'yenimahalle',
  name: 'Yenimahalle',
  path: 'yenimahalle-evden-eve-nakliyat',
  zone: 'merkez',
  lat: 39.965,
  lon: 32.76,
  metaTitle: 'Yenimahalle Evden Eve Nakliyat | Batıkent ve Demetevler Taşıma',
  metaDescription:
    'Yenimahalle evden eve nakliyat: Batıkent, Demetevler, Ostim, İvedik ve çevresinde asansörlü, ambalajlı ve sigortalı ev ve ofis taşıma hizmeti.',
  intro: [
    'Yenimahalle evden eve nakliyat, hem yoğun toplu konut bölgelerini hem de Ostim ve İvedik gibi sanayi alanlarını kapsayan bir iş demektir. Bu nedenle ilçede hem ev hem de iş yeri taşıması yoğun şekilde yapılır.',
    'Batıkent ve Demetevler gibi blok yerleşimlerinde yük asansörü kullanımı ve site yönetimi koordinasyonu taşımanın en önemli parçasıdır; Ostim ve İvedik’te ise makine, tezgâh ve depo taşımaları öne çıkar. İki farklı iş tipini de kendi araç ve ekibimizle yürütüyoruz.',
  ],
  highlights: [
    {
      title: 'Toplu konut tecrübesi',
      text: 'Batıkent ve Demetevler bloklarında yük asansörü planlamasını biz yapıyoruz.',
    },
    {
      title: 'İş yeri taşıma',
      text: 'Ostim ve İvedik’te atölye, depo ve ofis taşımaları yapıyoruz.',
    },
    {
      title: 'Geniş araç erişimi',
      text: 'Bölgedeki geniş yollar sayesinde tek seferde taşıma yapılabiliyor.',
    },
  ],
  neighborhoods: [
    {
      slug: 'batikent',
      name: 'Batıkent',
      intro:
        'Batıkent’te blok yerleşimi düzenli, çoğu binada yük asansörü var. Taşıma süresi bu sayede kısalıyor.',
      notes: [
        'Blok girişlerine araç yanaşabiliyor, yükleme mesafesi kısa.',
        'Yük asansörü rezervasyonu site yönetimiyle önceden yapılıyor.',
        'Metro hattına yakın caddelerde yükleme saati trafiğe göre seçiliyor.',
      ],
    },
    {
      slug: 'demetevler',
      name: 'Demetevler',
      intro:
        'Demetevler’de yoğun apartman yerleşimi ve dar sokaklar var. Taşımaların çoğu mobil asansörle yapılıyor.',
      notes: [
        'Dar sokaklarda araç yerleşimi için erken saat tercih ediliyor.',
        'Asansörsüz binalarda mobil asansör standart hale geldi.',
      ],
    },
    {
      slug: 'ostim',
      name: 'Ostim',
      intro:
        'Ostim’de ağırlıklı olarak iş yeri, atölye ve depo taşıması yapıyoruz. Makine ve tezgâh taşımaları ayrı planlanıyor.',
      notes: [
        'Makine ve tezgâh taşımaları için forklift ve transpalet kullanılıyor.',
        'İş yeri taşımaları mesai dışına alınarak üretim durdurulmuyor.',
      ],
    },
    {
      slug: 'ivedik',
      name: 'İvedik',
      intro:
        'İvedik Organize Sanayi bölgesinde depo ve ofis taşımaları yoğun. Yükleme rampaları taşımayı hızlandırıyor.',
      notes: [
        'Rampalı yükleme sayesinde ağır malzeme hızlı taşınıyor.',
        'Sanayi sitesi içi araç trafiği için giriş izni alınıyor.',
      ],
    },
    {
      slug: 'sentepe',
      name: 'Şentepe',
      intro:
        'Şentepe’de eğimli sokaklar ve yoğun apartman yerleşimi taşımanın planını belirliyor.',
      notes: [
        'Eğimli sokaklarda asansör aracı için düz alan seçiliyor.',
        'Dar sokaklarda küçük araçla aktarma yapılıyor.',
      ],
    },
    {
      slug: 'ergazi',
      name: 'Ergazi',
      intro:
        'Ergazi, Batıkent hattında yer alan düzenli bir konut bölgesi. Blok yerleşimi taşımayı kolaylaştırıyor.',
      notes: [
        'Blok önüne araç yanaşabiliyor.',
        'Yük asansörü olan binalarda taşıma süresi kısalıyor.',
      ],
    },
    {
      slug: 'karsiyaka',
      name: 'Karşıyaka',
      intro:
        'Karşıyaka’da orta katlı apartmanlar yoğun; taşımalar genellikle aynı gün tamamlanıyor.',
      notes: [
        'Sokaklar araç erişimine uygun.',
        'Asansörsüz binalarda mobil asansör kuruluyor.',
      ],
    },
    {
      slug: 'ragip-tuzun',
      name: 'Ragıp Tüzün',
      intro:
        'Ragıp Tüzün, ana cadde çevresinde yoğun ticaretin olduğu bir bölge. Yükleme saati trafiğe göre planlanıyor.',
      notes: [
        'Cadde üzeri binalarda sabah erken yükleme yapılıyor.',
        'Ticari alanlarda taşıma mesai dışına alınabiliyor.',
      ],
    },
    {
      slug: 'yahyalar',
      name: 'Yahyalar',
      intro:
        'Yahyalar’da apartman yoğunluğu yüksek, sokaklar dar. Mobil asansör kullanımı yaygın.',
      notes: [
        'Dar sokaklarda yükleme alanı önceden ayrılıyor.',
        'Asansörsüz binalarda mobil asansör hazır geliyor.',
      ],
    },
    {
      slug: 'macunkoy',
      name: 'Macunköy',
      intro:
        'Macunköy’de konut ve iş yeri bir arada. Depo ve showroom taşımaları da yapıyoruz.',
      notes: [
        'Depo taşımalarında transpalet ve rampa kullanılıyor.',
        'Ana yollara yakınlık araç erişimini kolaylaştırıyor.',
      ],
    },
    {
      slug: 'cigdemtepe',
      name: 'Çiğdemtepe',
      intro:
        'Çiğdemtepe, Batıkent çevresinde sakin bir konut bölgesi. Taşımalar sorunsuz ilerliyor.',
      notes: [
        'Sokaklar geniş, araç bina önüne yanaşabiliyor.',
        'Yeni bloklarda bina asansörü kullanılabiliyor.',
      ],
    },
    {
      slug: 'susuz',
      name: 'Susuz',
      intro:
        'Susuz, Batıkent hattının kuzeyinde gelişen bir konut bölgesi. Yeni yapılar taşımayı kolaylaştırıyor.',
      notes: [
        'Yeni binalarda yük asansörü mevcut.',
        'Geniş yollar sayesinde tek seferde taşıma yapılabiliyor.',
      ],
    },
    {
      slug: 'gayret',
      name: 'Gayret',
      intro:
        'Gayret Mahallesi, Ostim’e yakınlığı nedeniyle hem konut hem küçük iş yeri taşımasının yoğun olduğu bir bölge.',
      notes: [
        'İş yeri taşımaları mesai dışına planlanıyor.',
        'Konut taşımalarında mobil asansör sıkça kullanılıyor.',
      ],
    },
    {
      slug: 'anadolu',
      name: 'Anadolu',
      intro:
        'Anadolu Mahallesi’nde toplu konut blokları yoğun; yükleme mesafesi kısa ve taşıma hızlı ilerliyor.',
      notes: [
        'Blok girişine araç yanaşabiliyor.',
        'Site yönetiminden taşıma saati onayı alınıyor.',
      ],
    },
    {
      slug: 'serhat',
      name: 'Serhat',
      intro:
        'Serhat Mahallesi, İvedik ve Ostim hattına yakın, konut ile sanayinin komşu olduğu bir bölge.',
      notes: [
        'Sanayi trafiği nedeniyle taşıma saati dikkatle seçiliyor.',
        'Asansörsüz binalarda mobil asansör kullanılıyor.',
      ],
    },
  ],
}
