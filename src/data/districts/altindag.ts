import type { District } from './types'

export const altindag: District = {
  slug: 'altindag',
  name: 'Altındağ',
  path: 'altindag-evden-eve-nakliyat',
  zone: 'merkez',
  lat: 39.955,
  lon: 32.87,
  metaTitle: 'Altındağ Evden Eve Nakliyat | Ulus ve Siteler Taşıma',
  metaDescription:
    'Altındağ evden eve nakliyat: Ulus, Siteler, Hacettepe, Aydınlıkevler ve çevresinde asansörlü, ambalajlı ve sigortalı taşıma. Merkez ofisimiz Altındağ’da.',
  intro: [
    'Altındağ evden eve nakliyat bizim için en yakın iş alanı; merkez ofisimiz bu ilçede. Ulus ve Siteler çevresindeki taşımalara ekibimiz en kısa sürede ulaşıyor.',
    'İlçede eski yapı stoğu yoğun; merdivenler dar, sokaklar sıkışık. Bu yüzden Altındağ taşımalarında asansör ve küçük araç aktarması sık kullanılıyor. Siteler’de ise mobilya imalatçılarından alınan yeni ürünlerin adrese teslim ve montajını yapıyoruz.',
  ],
  highlights: [
    {
      title: 'Merkez ofis burada',
      text: 'Altındağ taşımalarında ekip en kısa sürede adreste oluyor.',
    },
    {
      title: 'Siteler mobilya tecrübesi',
      text: 'Siteler’den alınan yeni mobilyaların nakliyesini ve montajını yapıyoruz.',
    },
    {
      title: 'Eski yapı çözümü',
      text: 'Dar merdivenli binalarda asansörle güvenli taşıma yapıyoruz.',
    },
  ],
  neighborhoods: [
    {
      slug: 'ulus',
      name: 'Ulus',
      intro:
        'Ulus’ta hem konut hem de iş yeri taşıması yapıyoruz. Bölgedeki trafik nedeniyle yükleme saatleri erken planlanıyor.',
      notes: [
        'Gündüz trafiği yoğun, taşımalar sabah erken başlıyor.',
        'İş hanlarında asansör kabinleri küçük, mobil asansör kullanılıyor.',
      ],
    },
    {
      slug: 'siteler',
      name: 'Siteler',
      intro:
        'Siteler, mobilya üretiminin merkezi. Buradan alınan yeni mobilyaların adrese teslim ve montajını yapıyoruz.',
      notes: [
        'Yeni mobilya teslimatlarında montaj hizmeti de veriliyor.',
        'Atölye ve imalathane taşımaları mesai dışına planlanıyor.',
      ],
    },
    {
      slug: 'hacettepe',
      name: 'Hacettepe',
      intro:
        'Hacettepe çevresinde öğrenci ve aile taşımaları yoğun. Küçük hacimli parça eşya taşıma talebi fazla.',
      notes: [
        'Öğrenci taşımalarında parça eşya hizmeti tercih ediliyor.',
        'Hastane çevresinde park için önceden yer ayırtılıyor.',
      ],
    },
    {
      slug: 'aydinlikevler',
      name: 'Aydınlıkevler',
      intro:
        'Aydınlıkevler’de düzenli apartman yerleşimi var, taşımalar genellikle sorunsuz ilerliyor.',
      notes: [
        'Sokaklar araç yanaşmasına uygun.',
        'Asansörsüz binalarda mobil asansör tercih ediliyor.',
      ],
    },
    {
      slug: 'hamamonu',
      name: 'Hamamönü',
      intro:
        'Hamamönü’nde restore edilmiş eski yapılar ve dar sokaklar var. Taşıma burada özel dikkat gerektiriyor.',
      notes: [
        'Dar tarihi sokaklara büyük araç giremiyor, küçük araçla aktarma yapılıyor.',
        'Restore yapılarda duvar ve kapı korumaları seriliyor.',
      ],
    },
    {
      slug: 'samanpazari',
      name: 'Samanpazarı',
      intro:
        'Samanpazarı, ticaretin yoğun olduğu eski bir bölge. İş yeri taşımaları gün içinde zor, mesai dışına alınıyor.',
      notes: [
        'Esnaf yoğunluğu nedeniyle yükleme sabah erken yapılıyor.',
        'Dar sokaklarda aktarmalı taşıma gerekebiliyor.',
      ],
    },
    {
      slug: 'solfasol',
      name: 'Solfasol',
      intro:
        'Solfasol’da müstakil ve az katlı yapılar yoğun. Taşıma doğrudan araca yükleme ile ilerliyor.',
      notes: [
        'Az katlı binalarda asansöre ihtiyaç duyulmuyor.',
        'Sokak genişliği araç yanaşmasına uygun.',
      ],
    },
    {
      slug: 'karapurcek',
      name: 'Karapürçek',
      intro:
        'Karapürçek’te toplu konut blokları yaygın. Yük asansörü olan binalarda taşıma hızlanıyor.',
      notes: [
        'Blok girişlerine araç yanaşabiliyor.',
        'Site yönetiminden taşıma saati onayı alınıyor.',
      ],
    },
    {
      slug: 'onder',
      name: 'Önder',
      intro:
        'Önder Mahallesi’nde apartman yoğunluğu yüksek, sokaklar dar. Mobil asansör sıkça kullanılıyor.',
      notes: [
        'Dar sokaklarda yükleme için alan önceden ayrılıyor.',
        'Asansörsüz binalar için mobil asansör hazır geliyor.',
      ],
    },
    {
      slug: 'battalgazi',
      name: 'Battalgazi',
      intro:
        'Battalgazi, Altındağ’ın yoğun konut bölgelerinden. Eğimli sokaklar araç yerleşimini etkiliyor.',
      notes: [
        'Eğimli sokaklarda asansör için düz zemin seçiliyor.',
        'Sabah erken saatte yükleme daha hızlı ilerliyor.',
      ],
    },
    {
      slug: 'dogantepe',
      name: 'Doğantepe',
      intro:
        'Doğantepe’de apartman ve müstakil yapı bir arada; taşıma yöntemi binaya göre belirleniyor.',
      notes: [
        'Müstakil evlerde doğrudan araca yükleme yapılıyor.',
        'Apartmanlarda kat durumuna göre asansör kuruluyor.',
      ],
    },
    {
      slug: 'zubeyde-hanim',
      name: 'Zübeyde Hanım',
      intro:
        'Zübeyde Hanım Mahallesi, ana yollara yakın olduğu için araç erişiminin rahat olduğu bir bölge.',
      notes: [
        'Ana yol bağlantısı sayesinde araç kolay yanaşıyor.',
        'Yüksek katlarda mobil asansör tercih ediliyor.',
      ],
    },
  ],
}
