import type { District } from './types'

export const mamak: District = {
  slug: 'mamak',
  name: 'Mamak',
  path: 'mamak-evden-eve-nakliyat',
  zone: 'merkez',
  lat: 39.93,
  lon: 32.93,
  metaTitle: 'Mamak Evden Eve Nakliyat | Abidinpaşa ve Natoyolu Taşıma',
  metaDescription:
    'Mamak evden eve nakliyat: Abidinpaşa, Natoyolu, Kayaş ve çevresinde asansörlü, ambalajlı ve sigortalı ev taşıma hizmeti. Ücretsiz keşif.',
  intro: [
    'Mamak evden eve nakliyat, eğimli arazi ve dar sokaklar nedeniyle özel planlama gerektiren bir iştir. Aracın nereye yanaşacağı çoğu zaman taşımanın süresini doğrudan belirler.',
    'Bölgede uzun süredir çalıştığımız için hangi sokakta hangi araçla çalışılacağını önceden biliyoruz. Büyük aracın giremediği yerlerde küçük araçla aktarma yapıyor, taşımayı kesintisiz sürdürüyoruz.',
  ],
  highlights: [
    {
      title: 'Eğimli arazi tecrübesi',
      text: 'Yokuşlu sokaklarda araç ve asansör yerleşimini güvenli şekilde yapıyoruz.',
    },
    {
      title: 'Aktarmalı taşıma',
      text: 'Büyük aracın giremediği sokaklarda küçük araçla aktarma yapıyoruz.',
    },
    {
      title: 'Uygun fiyat',
      text: 'Mamak içi taşımalarda kısa mesafe avantajını fiyata yansıtıyoruz.',
    },
  ],
  neighborhoods: [
    {
      slug: 'abidinpasa',
      name: 'Abidinpaşa',
      intro:
        'Abidinpaşa’da apartman yoğunluğu yüksek, sokaklar dar. Taşımalarda mobil asansör sıklıkla kullanılıyor.',
      notes: [
        'Dar sokaklarda araç yerleşimi için erken saat tercih ediliyor.',
        'Asansörsüz binalarda mobil asansör standart.',
      ],
    },
    {
      slug: 'natoyolu',
      name: 'Natoyolu',
      intro:
        'Natoyolu hattında yeni siteler yaygınlaşıyor. Site içi taşımalarda yönetim koordinasyonu gerekiyor.',
      notes: [
        'Site girişinde araç kaydı yapılıyor.',
        'Yeni bloklarda yük asansörü kullanılabiliyor.',
      ],
    },
    {
      slug: 'kutludugun',
      name: 'Kutludüğün',
      intro:
        'Kutludüğün, merkeze uzak bir bölge. Taşıma planında yol süresi ayrıca hesaplanıyor.',
      notes: [
        'Mesafe nedeniyle taşıma sabah erken başlatılıyor.',
        'Müstakil evlerde doğrudan araca yükleme yapılabiliyor.',
      ],
    },
    {
      slug: 'kayas',
      name: 'Kayaş',
      intro:
        'Kayaş, Mamak’ın doğusunda banliyö hattı çevresinde gelişen bir bölge. Taşımalarda yol süresi planlamaya dahil ediliyor.',
      notes: [
        'Merkeze mesafe nedeniyle erken saatte yola çıkılıyor.',
        'Az katlı binalarda taşıma merdivenle hızlı ilerliyor.',
      ],
    },
    {
      slug: 'akdere',
      name: 'Akdere',
      intro:
        'Akdere’de eğimli sokaklar ve sıkışık apartman yerleşimi var. Araç yerleşimi keşifte belirleniyor.',
      notes: [
        'Yokuşlu sokaklarda asansör için düz alan aranıyor.',
        'Dar sokaklarda aktarmalı taşıma yapılabiliyor.',
      ],
    },
    {
      slug: 'demirlibahce',
      name: 'Demirlibahçe',
      intro:
        'Demirlibahçe, merkeze yakın ve ulaşımı kolay bir semt. Taşımalar genellikle aynı gün tamamlanıyor.',
      notes: [
        'Ana yollara yakınlık araç erişimini kolaylaştırıyor.',
        'Asansörsüz binalarda mobil asansör kuruluyor.',
      ],
    },
    {
      slug: 'saimekadin',
      name: 'Saimekadın',
      intro:
        'Saimekadın’da orta katlı apartmanlar yoğun; taşıma yöntemi kat durumuna göre belirleniyor.',
      notes: [
        'Orta katlarda merdivenle taşıma mümkün, üst katlarda asansör kuruluyor.',
        'Sokak park yoğunluğu için alan önceden ayrılıyor.',
      ],
    },
    {
      slug: 'gulveren',
      name: 'Gülveren',
      intro:
        'Gülveren, Mamak’ın eski yerleşim bölgelerinden. Dar sokaklar taşımanın planını belirliyor.',
      notes: [
        'Dar sokaklarda küçük araçla aktarma yapılıyor.',
        'Eski binalarda merdiven boşluğu dar, asansör tercih ediliyor.',
      ],
    },
    {
      slug: 'turkozu',
      name: 'Türközü',
      intro:
        'Türközü’nde apartman ve müstakil yapı bir arada. Taşıma yöntemi binaya göre değişiyor.',
      notes: [
        'Müstakil evlerde doğrudan yükleme yapılıyor.',
        'Apartmanlarda kat durumuna göre asansör kuruluyor.',
      ],
    },
    {
      slug: 'bogazici',
      name: 'Boğaziçi',
      intro:
        'Boğaziçi Mahallesi’nde yokuşlu sokaklar yaygın; araç yerleşimi için düz nokta seçmek gerekiyor.',
      notes: [
        'Eğim nedeniyle asansör kurulumu keşifte planlanıyor.',
        'Kış aylarında taşıma saati gün ortasına alınıyor.',
      ],
    },
    {
      slug: 'huseyingazi',
      name: 'Hüseyingazi',
      intro:
        'Hüseyingazi, yeni yapılaşmanın hızlandığı bir bölge. Geniş yollar taşımayı kolaylaştırıyor.',
      notes: [
        'Yeni binalarda yük asansörü kullanılabiliyor.',
        'Geniş yollarda büyük araçla tek seferde taşıma yapılabiliyor.',
      ],
    },
    {
      slug: 'mutlu',
      name: 'Mutlu',
      intro:
        'Mutlu Mahallesi’nde toplu konut blokları yoğun; yükleme mesafesi kısa.',
      notes: [
        'Blok girişine araç yanaşabiliyor.',
        'Site yönetiminden taşıma saati onayı alınıyor.',
      ],
    },
    {
      slug: 'ege',
      name: 'Ege',
      intro:
        'Ege Mahallesi, Mamak merkezine yakın ve ulaşımı rahat bir bölge.',
      notes: [
        'Araç erişimi kolay, yükleme hızlı ilerliyor.',
        'Yüksek katlarda mobil asansör tercih ediliyor.',
      ],
    },
  ],
}
