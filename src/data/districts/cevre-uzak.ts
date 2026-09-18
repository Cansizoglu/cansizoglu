import type { District } from './types'

/**
 * Ankara'nın merkeze uzak ilçeleri. Bu ilçelerde taşımalar şehirlerarası
 * değil, "Ankara içi uzun mesafe" olarak planlanır: ekip Ankara'dan çıkar,
 * aynı gün içinde yükleme ve teslimi tamamlar.
 */

export const beypazari: District = {
  slug: 'beypazari',
  name: 'Beypazarı',
  path: 'beypazari-evden-eve-nakliyat',
  zone: 'cevre',
  lat: 40.167,
  lon: 31.921,
  metaTitle: 'Beypazarı Evden Eve Nakliyat | Ankara Beypazarı Taşıma',
  metaDescription:
    'Beypazarı evden eve nakliyat: tarihi konaklar ve dar sokaklar için özel planlama, asansörlü ve sigortalı taşıma. Ankara Beypazarı arası aynı gün teslim.',
  intro: [
    'Beypazarı evden eve nakliyat, Ankara merkezine yaklaşık 100 kilometre mesafedeki bu ilçeye çıkan ekibin günü baştan planlamasını gerektirir. Taşımayı tek güne sığdırmak için ekip Ankara’dan sabah erken saatte yola çıkar, öğleden önce yüklemeye başlar ve akşam olmadan kurulumu bitirir.',
    'İlçenin tarihi dokusu taşımanın en belirleyici tarafı. Eski Beypazarı evlerinin bulunduğu sokaklar dar ve eğimlidir, büyük araç çoğu sokağa giremez. Bu adreslerde yüklemeyi küçük araçla ana caddeye aktararak yapıyoruz; bunu keşifte yerinde görüp fiyata dahil ediyoruz, taşıma günü ek ücret çıkmıyor.',
  ],
  highlights: [
    {
      title: 'Aynı gün teslim',
      text: 'Ankara - Beypazarı arası taşımalar sabah başlar, aynı gün kurulumla biter.',
    },
    {
      title: 'Tarihi sokaklarda aktarma',
      text: 'Aracın giremediği dar sokaklarda küçük araçla aktarma yaparız, ek ücret çıkmaz.',
    },
    {
      title: 'Uzun yol ambalajı',
      text: 'Mesafe uzun olduğu için eşya ambalajı şehir içi taşımaya göre daha sıkı yapılır.',
    },
  ],
  neighborhoods: [
    {
      slug: 'merkez',
      name: 'Beypazarı Merkez',
      intro:
        'Beypazarı merkez evden eve nakliyat işlerinde çarşı çevresindeki sokakların darlığı belirleyici. Yükleme saatini pazar ve çarşı yoğunluğuna göre ayarlıyoruz.',
      notes: [
        'Çarşı çevresinde araç park alanı sınırlı, yükleme için erken saat seçiliyor.',
        'Tarihi konaklarda merdivenler dar; hassas eşya elle, tek tek indiriliyor.',
        'Cumartesi pazar kurulan bölgelerde taşıma hafta içine alınıyor.',
      ],
      streets: ['Cumhuriyet Caddesi', 'İnözü Caddesi'],
    },
    {
      slug: 'kurtulus',
      name: 'Kurtuluş',
      intro:
        'Kurtuluş mahallesinde yeni apartmanlar ağırlıkta. Bina önleri geniş olduğu için asansör kurulumu sorunsuz yapılıyor.',
      notes: [
        'Bina önü alan yeterli, mobil asansör doğrudan kurulabiliyor.',
        'Üst katlarda asansörlü taşıma süreyi yarıya indiriyor.',
      ],
    },
    {
      slug: 'zafer',
      name: 'Zafer',
      intro:
        'Zafer mahallesi eğimli bir yerleşim. Asansör aracının dengeli kurulabileceği düz alanı keşifte önceden belirliyoruz.',
      notes: [
        'Eğimli sokaklarda asansör için düz zemin seçimi keşifte yapılıyor.',
        'Kış aylarında taşıma saati buzlanma nedeniyle gün ortasına alınıyor.',
      ],
    },
  ],
}

export const nallihan: District = {
  slug: 'nallihan',
  name: 'Nallıhan',
  path: 'nallihan-evden-eve-nakliyat',
  zone: 'cevre',
  lat: 40.186,
  lon: 31.349,
  metaTitle: 'Nallıhan Evden Eve Nakliyat | Ankara Nallıhan Taşıma',
  metaDescription:
    'Nallıhan evden eve nakliyat: Ankara’nın en batı ilçesine sigortalı, ambalajlı ve planlı taşıma. Ücretsiz keşif, sabit fiyat, aynı gün teslim.',
  intro: [
    'Nallıhan evden eve nakliyat, Ankara’nın en batıdaki ilçesine yapılan taşıma demektir; merkeze mesafe 160 kilometreyi bulur. Bu mesafede taşımayı güvenli tamamlamanın yolu, yükleme ve yolculuğu tek güne doğru sırayla yerleştirmektir: sabah yükleme, öğlen yol, ikindi teslim ve kurulum.',
    'Uzun yolda en çok zarar gören eşya, iyi sabitlenmemiş mobilya ve beyaz eşyadır. Bu yüzden Nallıhan taşımalarında eşyayı araç içinde kuşaklarla sabitliyor, kırılabilir parçaları çift kat ambalajla koruyoruz. Taşıma sigortası bu mesafedeki her işte standart olarak uygulanır.',
  ],
  highlights: [
    {
      title: 'Uzun yol sabitlemesi',
      text: 'Eşya araç içinde kuşakla sabitlenir, yolda kayma ve çizilme olmaz.',
    },
    {
      title: 'Sigorta standart',
      text: 'Nallıhan gibi uzun mesafeli taşımalarda sigorta poliçesi her işte düzenlenir.',
    },
    {
      title: 'Tek seferde taşıma',
      text: 'Eşya hacmine uygun araç seçilir, ikinci sefere gerek kalmaz.',
    },
  ],
  neighborhoods: [
    {
      slug: 'merkez',
      name: 'Nallıhan Merkez',
      intro:
        'Nallıhan merkezde taşımalar genellikle üç ve dört katlı apartmanlarda yapılıyor. Asansör aracı Ankara’dan ekiple birlikte geliyor.',
      notes: [
        'Mobil asansör Ankara’dan getiriliyor, adreste ekiple aynı anda oluyor.',
        'Merkez sokaklarda araç yanaşması çoğu adreste mümkün.',
      ],
    },
    {
      slug: 'cayirhan',
      name: 'Çayırhan',
      intro:
        'Çayırhan, Nallıhan’ın en kalabalık beldesi. Lojman ve site tipi yapılarda taşıma izni önceden alınıyor.',
      notes: [
        'Lojman girişlerinde araç kaydı gerekiyor, bir gün önceden hallediyoruz.',
        'Blok aralarında geniş alan var, asansör kurulumu rahat yapılıyor.',
      ],
    },
  ],
}

export const ayas: District = {
  slug: 'ayas',
  name: 'Ayaş',
  path: 'ayas-evden-eve-nakliyat',
  zone: 'cevre',
  lat: 40.018,
  lon: 32.334,
  metaTitle: 'Ayaş Evden Eve Nakliyat | Ankara Ayaş Taşıma Firması',
  metaDescription:
    'Ayaş evden eve nakliyat: Ankara Ayaş arası asansörlü, ambalajlı ve sigortalı taşıma. Dar sokaklarda aktarmalı çözüm, ücretsiz keşif ve sabit fiyat.',
  intro: [
    'Ayaş evden eve nakliyat işlerinde mesafe Ankara merkezine yaklaşık 60 kilometredir; bu da taşımanın rahatlıkla tek güne sığdığı anlamına gelir. Ekip sabah Ankara’dan çıkar, öğleden önce yüklemeyi bitirir, öğleden sonra yeni adreste kurulumu tamamlar.',
    'İlçenin eski mahallelerinde sokaklar dar ve bahçeli evler yaygındır. Bahçeli evlerde taşıma apartmana göre daha kolay görünse de bahçe kapısından araca kadar olan mesafe yükleme süresini uzatır. Keşifte bu mesafeyi ölçüp ekip sayısını ona göre belirliyoruz.',
  ],
  highlights: [
    {
      title: 'Aynı gün tamamlanır',
      text: 'Ankara - Ayaş arası mesafe taşımanın tek güne sığmasına elverir.',
    },
    {
      title: 'Bahçeli ev tecrübesi',
      text: 'Bahçe kapısı ile araç arası mesafe ekip sayısı belirlenirken hesaba katılır.',
    },
    {
      title: 'Sabit fiyat',
      text: 'Keşifte verilen fiyat taşıma günü değişmez, yol ve mesafe farkı sonradan eklenmez.',
    },
  ],
  neighborhoods: [
    {
      slug: 'merkez',
      name: 'Ayaş Merkez',
      intro:
        'Ayaş merkezde eski taş evler ile yeni apartmanlar yan yana. Taşıma planı bina tipine göre ayrı yapılıyor.',
      notes: [
        'Dar sokaklarda büyük araç yerine küçük araçla aktarma yapılıyor.',
        'Yeni apartmanlarda asansörlü taşıma tercih ediliyor.',
      ],
    },
    {
      slug: 'sinanli',
      name: 'Sinanlı',
      intro:
        'Sinanlı bölgesinde bahçeli ev taşımaları yaygın. Bahçe eşyası ve tarım aletleri için ayrı ambalaj planı yapıyoruz.',
      notes: [
        'Bahçe eşyası ayrı paketlenip araca en son yükleniyor.',
        'Yol güzergahı taşıma öncesi kontrol ediliyor.',
      ],
    },
  ],
}

export const bala: District = {
  slug: 'bala',
  name: 'Balâ',
  path: 'bala-evden-eve-nakliyat',
  zone: 'cevre',
  lat: 39.556,
  lon: 33.122,
  metaTitle: 'Balâ Evden Eve Nakliyat | Ankara Balâ Taşıma',
  metaDescription:
    'Balâ evden eve nakliyat: Ankara Balâ arası sigortalı ve ambalajlı taşıma, ücretsiz keşif, sabit fiyat ve aynı gün kurulum.',
  intro: [
    'Balâ evden eve nakliyat, Ankara merkezinin güneydoğusunda yaklaşık 60 kilometre mesafedeki bu ilçeye yapılan taşımaları kapsar. Kentsel yoğunluğun düşük olması taşımayı kolaylaştırır: sokaklar geniştir, araç çoğu adrese kapıya kadar yanaşır.',
    'Buradaki asıl planlama konusu mevsimdir. Kış aylarında güzergahta kar ve buzlanma olabildiği için taşıma saatini gün ortasına alıyor, yola çıkmadan önce hava durumunu kontrol ediyoruz. Yaz aylarında ise erken saatte başlayıp sıcak saatlerden önce yüklemeyi bitiriyoruz.',
  ],
  highlights: [
    {
      title: 'Geniş sokak avantajı',
      text: 'Araç çoğu adreste kapıya yanaşır, yükleme süresi kısalır.',
    },
    {
      title: 'Mevsime göre saat',
      text: 'Kışın gün ortası, yazın sabah erken saat seçilerek taşıma planlanır.',
    },
    {
      title: 'Sigortalı taşıma',
      text: 'Uzun mesafeli her taşımada olduğu gibi eşya sigorta kapsamında taşınır.',
    },
  ],
  neighborhoods: [
    {
      slug: 'merkez',
      name: 'Balâ Merkez',
      intro:
        'Balâ merkezde apartman katları genelde düşük, taşımaların önemli bölümü asansörsüz ve elle yapılabiliyor.',
      notes: [
        'Düşük katlı binalarda asansör gerekmeyebiliyor, bu maliyeti düşürüyor.',
        'Araç park alanı bol, yükleme rahat yapılıyor.',
      ],
    },
    {
      slug: 'kesikkopru',
      name: 'Kesikköprü',
      intro:
        'Kesikköprü beldesinde taşımalar ilçe merkezine göre daha uzun sürüyor; yol mesafesi plana ekleniyor.',
      notes: [
        'Ek yol mesafesi taşıma süresine baştan yansıtılıyor.',
        'Tek seferde taşıma için araç hacmi önceden hesaplanıyor.',
      ],
    },
  ],
}

export const sereflikochisar: District = {
  slug: 'sereflikochisar',
  name: 'Şereflikoçhisar',
  path: 'sereflikochisar-evden-eve-nakliyat',
  zone: 'cevre',
  lat: 38.938,
  lon: 33.542,
  metaTitle: 'Şereflikoçhisar Evden Eve Nakliyat | Ankara Taşıma',
  metaDescription:
    'Şereflikoçhisar evden eve nakliyat: Ankara’nın güneydoğusuna sigortalı, ambalajlı ve planlı taşıma. Ücretsiz keşif, sabit fiyat, tek seferde teslim.',
  intro: [
    'Şereflikoçhisar evden eve nakliyat, Ankara merkezine 150 kilometreyi aşan mesafesiyle planlaması en dikkatli yapılması gereken taşımalardan biridir. Ekip sabah erken yola çıkar, yüklemeyi öğleden önce bitirir ve akşam olmadan kurulumu tamamlar.',
    'Bu mesafede ikinci sefer yapmak hem zaman hem maliyet kaybıdır. Bu yüzden keşifte eşya hacmini olduğundan geniş hesaplıyor, tek seferde taşınacak araç gönderiyoruz. Uzun yol boyunca eşyanın yerinden oynamaması için araç içi sabitleme kuşakla yapılır.',
  ],
  highlights: [
    {
      title: 'Tek sefer garantisi',
      text: 'Eşya hacmi geniş hesaplanır, ikinci sefer gerekmeden taşıma biter.',
    },
    {
      title: 'Uzun yol koruması',
      text: 'Mobilya köşeleri ve beyaz eşya yolda darbe almaması için ekstra korunur.',
    },
    {
      title: 'Sabit fiyat',
      text: 'Yol, yakıt ve mesafe keşif fiyatına dahildir, sonradan fark çıkmaz.',
    },
  ],
  neighborhoods: [
    {
      slug: 'merkez',
      name: 'Şereflikoçhisar Merkez',
      intro:
        'İlçe merkezinde apartman taşımaları yaygın. Mobil asansör Ankara’dan ekiple birlikte getiriliyor.',
      notes: [
        'Asansör aracı Ankara’dan geliyor, adreste ekiple aynı saatte oluyor.',
        'Merkez caddelerde yükleme için kısa süreli park izni alınıyor.',
      ],
    },
    {
      slug: 'sekerciler',
      name: 'Şekerciler',
      intro:
        'Şekerciler bölgesinde bahçeli ev ve müstakil yapı ağırlıkta; yükleme mesafesi ekip planına yansıtılıyor.',
      notes: [
        'Kapı ile araç arası mesafe uzunsa ekip sayısı artırılıyor.',
        'Bahçe ve depo eşyası ayrı ambalajlanıyor.',
      ],
    },
  ],
}

export const haymana: District = {
  slug: 'haymana',
  name: 'Haymana',
  path: 'haymana-evden-eve-nakliyat',
  zone: 'cevre',
  lat: 39.433,
  lon: 32.497,
  metaTitle: 'Haymana Evden Eve Nakliyat | Ankara Haymana Taşıma',
  metaDescription:
    'Haymana evden eve nakliyat: Ankara Haymana arası asansörlü, ambalajlı ve sigortalı taşıma. Ücretsiz keşif, sabit fiyat, aynı gün teslim.',
  intro: [
    'Haymana evden eve nakliyat işlerinde Ankara merkezine mesafe yaklaşık 75 kilometredir ve taşıma rahatlıkla bir günde tamamlanır. Ekip sabah yola çıkar, öğleden önce yüklemeyi bitirir, öğleden sonra yeni evde mobilya montajını yapar.',
    'İlçede kaplıca çevresindeki bölgede pansiyon ve apart taşımaları da sık yapılır. Bu tip taşımalarda oda oda etiketleme yapıyoruz; eşya yeni adreste doğrudan ait olduğu odaya çıkıyor, yerleşme süresi kısalıyor.',
  ],
  highlights: [
    {
      title: 'Aynı gün teslim',
      text: 'Mesafe taşımanın tek güne sığmasına elverir, ertesi güne sarkmaz.',
    },
    {
      title: 'Oda oda etiketleme',
      text: 'Kutular odasına göre etiketlenir, yeni evde yerleşme çok daha hızlı olur.',
    },
    {
      title: 'Montaj dahil',
      text: 'Sökülen mobilya aynı ekip tarafından yeni adreste kurulur.',
    },
  ],
  neighborhoods: [
    {
      slug: 'merkez',
      name: 'Haymana Merkez',
      intro:
        'Haymana merkezde eğimli sokaklar yaygın. Asansör aracının kurulacağı düz alan keşifte belirleniyor.',
      notes: [
        'Eğim nedeniyle asansör konumu önceden planlanıyor.',
        'Merkez caddede yükleme saati esnaf yoğunluğuna göre seçiliyor.',
      ],
    },
    {
      slug: 'kaplicalar',
      name: 'Kaplıcalar Bölgesi',
      intro:
        'Kaplıca çevresinde pansiyon, apart ve yazlık taşımaları yapılıyor. Bu taşımalarda eşya listesi baştan çıkarılıyor.',
      notes: [
        'Pansiyon taşımalarında eşya sayımı ve listesi taşıma öncesi yapılıyor.',
        'Sezon dışı dönemde taşıma daha hızlı tamamlanıyor.',
      ],
    },
  ],
}

export const kizilcahamam: District = {
  slug: 'kizilcahamam',
  name: 'Kızılcahamam',
  path: 'kizilcahamam-evden-eve-nakliyat',
  zone: 'cevre',
  lat: 40.469,
  lon: 32.646,
  metaTitle: 'Kızılcahamam Evden Eve Nakliyat | Ankara Kızılcahamam Taşıma',
  metaDescription:
    'Kızılcahamam evden eve nakliyat: villa ve yazlık taşımalarında tecrübeli ekip, asansörlü ve sigortalı taşıma, ücretsiz keşif ve sabit fiyat.',
  intro: [
    'Kızılcahamam evden eve nakliyat, Ankara merkezine yaklaşık 80 kilometre mesafedeki bu ilçeye yapılan taşımaları kapsar. İlçede villa, dağ evi ve yazlık taşımaları merkez ilçelere göre çok daha yaygındır; bu da eşya hacminin büyük, yükleme mesafesinin uzun olması demektir.',
    'Villa taşımalarında en çok vakit alan iş, bahçe ve depo eşyasının paketlenmesidir. Bu eşyayı ev eşyasından ayrı planlıyor, araca en son yüklüyoruz. Orman içi yollarda kış şartları taşımayı etkileyebildiği için kar döneminde güzergahı taşıma sabahı tekrar kontrol ediyoruz.',
  ],
  highlights: [
    {
      title: 'Villa ve yazlık tecrübesi',
      text: 'Büyük hacimli villa taşımaları için araç ve ekip baştan buna göre seçilir.',
    },
    {
      title: 'Bahçe eşyası planı',
      text: 'Bahçe ve depo eşyası ayrı paketlenir, ev eşyasıyla karışmaz.',
    },
    {
      title: 'Kış güzergah kontrolü',
      text: 'Kar döneminde yol durumu taşıma sabahı yeniden kontrol edilir.',
    },
  ],
  neighborhoods: [
    {
      slug: 'merkez',
      name: 'Kızılcahamam Merkez',
      intro:
        'Merkezde apartman taşımaları ağırlıkta. Mobil asansör Ankara’dan ekiple aynı saatte adreste oluyor.',
      notes: [
        'Asansörlü taşıma merkezdeki üst kat dairelerde standart.',
        'Termal tesis çevresinde sezon yoğunluğuna göre saat seçiliyor.',
      ],
    },
    {
      slug: 'soguksu',
      name: 'Soğuksu',
      intro:
        'Soğuksu çevresindeki villa ve dağ evlerinde yükleme mesafesi uzun; ekip sayısı buna göre artırılıyor.',
      notes: [
        'Orman içi yollarda büyük araç yerine uygun hacimli araç tercih ediliyor.',
        'Villa taşımalarında iki günlük plan yapılabiliyor.',
      ],
    },
    {
      slug: 'guvem',
      name: 'Güvem',
      intro:
        'Güvem beldesinde müstakil ev taşımaları yaygın. Yol mesafesi taşıma planına baştan ekleniyor.',
      notes: [
        'Ek yol mesafesi süreye dahil ediliyor, taşıma aynı gün bitiyor.',
        'Kış aylarında güzergah sabah kontrol ediliyor.',
      ],
    },
  ],
}

export const gudul: District = {
  slug: 'gudul',
  name: 'Güdül',
  path: 'gudul-evden-eve-nakliyat',
  zone: 'cevre',
  lat: 40.213,
  lon: 32.245,
  metaTitle: 'Güdül Evden Eve Nakliyat | Ankara Güdül Taşıma',
  metaDescription:
    'Güdül evden eve nakliyat: Ankara Güdül arası ambalajlı, sigortalı ve planlı taşıma. Dar sokaklarda aktarmalı çözüm, ücretsiz keşif.',
  intro: [
    'Güdül evden eve nakliyat, Ankara merkezine yaklaşık 85 kilometre mesafedeki bu küçük ilçeye yapılan taşımaları kapsar. İlçe merkezi eğimli bir yamaca kurulu olduğu için taşımanın planlaması, aracın nereye kadar çıkabileceğinin önceden bilinmesiyle başlar.',
    'Yukarı mahallelerdeki bazı sokaklara büyük araç giremez. Bu adreslerde eşyayı küçük araçla ana caddedeki büyük araca aktarıyoruz. Keşifte bu durumu tespit edip fiyata dahil ediyoruz; taşıma günü sürpriz bir ücret çıkmıyor.',
  ],
  highlights: [
    {
      title: 'Eğimli sokak planı',
      text: 'Aracın çıkabileceği nokta keşifte belirlenir, gerekirse aktarma yapılır.',
    },
    {
      title: 'Ücretsiz keşif',
      text: 'Ankara’dan ekip gelip eşyayı yerinde görür, fiyat ondan sonra verilir.',
    },
    {
      title: 'Sigortalı taşıma',
      text: 'Uzun mesafeli taşımalarda eşya sigorta kapsamında taşınır.',
    },
  ],
  neighborhoods: [
    {
      slug: 'merkez',
      name: 'Güdül Merkez',
      intro:
        'Güdül merkezde sokaklar dar ve eğimli. Aracın yanaşabileceği en yakın nokta keşifte belirleniyor.',
      notes: [
        'Dar sokaklarda küçük araçla aktarma yapılıyor.',
        'Asansör kurulumu için düz zemin önceden seçiliyor.',
      ],
    },
    {
      slug: 'sorgun',
      name: 'Sorgun',
      intro:
        'Sorgun bölgesinde bahçeli ev taşımaları yaygın; bahçe eşyası için ayrı ambalaj planı yapılıyor.',
      notes: [
        'Bahçe ve depo eşyası ayrı paketlenip en son yükleniyor.',
        'Yükleme mesafesi uzunsa ekip sayısı artırılıyor.',
      ],
    },
  ],
}

export const camlidere: District = {
  slug: 'camlidere',
  name: 'Çamlıdere',
  path: 'camlidere-evden-eve-nakliyat',
  zone: 'cevre',
  lat: 40.489,
  lon: 32.474,
  metaTitle: 'Çamlıdere Evden Eve Nakliyat | Ankara Çamlıdere Taşıma',
  metaDescription:
    'Çamlıdere evden eve nakliyat: dağ evi ve yazlık taşımalarında tecrübeli ekip, ambalajlı ve sigortalı taşıma, ücretsiz keşif ve sabit fiyat.',
  intro: [
    'Çamlıdere evden eve nakliyat işlerinde taşıma, Ankara merkezine yaklaşık 110 kilometre mesafede ve orman içi yollarda yapılır. İlçede dağ evi ve yazlık taşımaları ağırlıktadır; eşya hacmi genellikle şehir dairelerine göre daha büyüktür.',
    'Bu tip taşımalarda soba, odunluk, bahçe mobilyası gibi şehir taşımasında karşılaşılmayan parçalar çıkar. Bunları ayrı paketleyip araca en son yüklüyoruz, yeni adreste ilk onları indiriyoruz. Kış aylarında güzergah kar sebebiyle kapanabildiği için taşıma tarihi hava durumuna göre belirleniyor.',
  ],
  highlights: [
    {
      title: 'Dağ evi tecrübesi',
      text: 'Yazlık ve dağ evi taşımalarında araç ve ekip hacme göre seçilir.',
    },
    {
      title: 'Özel parça planı',
      text: 'Soba, odunluk ve bahçe mobilyası ayrı paketlenip ayrı yüklenir.',
    },
    {
      title: 'Hava durumuna göre tarih',
      text: 'Kış aylarında taşıma tarihi yol durumuna göre birlikte belirlenir.',
    },
  ],
  neighborhoods: [
    {
      slug: 'merkez',
      name: 'Çamlıdere Merkez',
      intro:
        'Merkezde düşük katlı binalar yaygın, taşımaların bir bölümü asansörsüz tamamlanabiliyor.',
      notes: [
        'Düşük katlı binalarda asansör gerekmeyebiliyor, maliyet düşüyor.',
        'Merkez sokaklarda araç yanaşması çoğu adreste mümkün.',
      ],
    },
    {
      slug: 'peclin',
      name: 'Peçenek',
      intro:
        'Peçenek çevresinde yazlık ve bahçeli ev taşımaları yapılıyor. Yol mesafesi plana baştan ekleniyor.',
      notes: [
        'Orman içi yollarda uygun hacimli araç seçiliyor.',
        'Yaz sezonunda taşıma talebi arttığı için tarih önceden alınıyor.',
      ],
    },
  ],
}

export const kalecik: District = {
  slug: 'kalecik',
  name: 'Kalecik',
  path: 'kalecik-evden-eve-nakliyat',
  zone: 'cevre',
  lat: 40.097,
  lon: 33.409,
  metaTitle: 'Kalecik Evden Eve Nakliyat | Ankara Kalecik Taşıma',
  metaDescription:
    'Kalecik evden eve nakliyat: Ankara Kalecik arası asansörlü, ambalajlı ve sigortalı taşıma. Ücretsiz keşif, sabit fiyat ve aynı gün teslim.',
  intro: [
    'Kalecik evden eve nakliyat, Ankara merkezine yaklaşık 80 kilometre mesafedeki bu ilçeye yapılan taşımaları kapsar. Samsun yolu üzerinden ulaşım rahat olduğu için taşıma tek günde, sabah yükleme ve öğleden sonra kurulum şeklinde tamamlanır.',
    'İlçede kale eteğindeki eski mahallelerde sokaklar dar ve eğimlidir, yeni yerleşim bölgelerinde ise sokaklar geniştir. Bu iki bölge için taşıma planı ayrı yapılır: eskide aktarmalı, yenide doğrudan araç yanaşmalı yükleme.',
  ],
  highlights: [
    {
      title: 'Aynı gün teslim',
      text: 'Ulaşım rahat olduğu için taşıma sabah başlar, aynı gün kurulumla biter.',
    },
    {
      title: 'İki ayrı plan',
      text: 'Eski mahallelerde aktarmalı, yeni bölgelerde doğrudan yükleme yapılır.',
    },
    {
      title: 'Montaj dahil',
      text: 'Sökülen mobilya yeni adreste aynı ekip tarafından kurulur.',
    },
  ],
  neighborhoods: [
    {
      slug: 'merkez',
      name: 'Kalecik Merkez',
      intro:
        'Kalecik merkezde kale eteğindeki sokaklar dar; bu adreslerde küçük araçla aktarma yapılıyor.',
      notes: [
        'Dar ve eğimli sokaklarda aktarmalı yükleme uygulanıyor.',
        'Yeni yerleşim bölgesinde araç kapıya kadar yanaşabiliyor.',
      ],
    },
    {
      slug: 'tavsan',
      name: 'Tavşancıl',
      intro:
        'Tavşancıl çevresinde bahçeli ev taşımaları yapılıyor, yükleme mesafesi ekip planına yansıtılıyor.',
      notes: [
        'Bahçe eşyası ayrı paketleniyor.',
        'Yol mesafesi taşıma süresine baştan ekleniyor.',
      ],
    },
  ],
}

export const evren: District = {
  slug: 'evren',
  name: 'Evren',
  path: 'evren-evden-eve-nakliyat',
  zone: 'cevre',
  lat: 39.023,
  lon: 33.805,
  metaTitle: 'Evren Evden Eve Nakliyat | Ankara Evren Taşıma',
  metaDescription:
    'Evren evden eve nakliyat: Ankara’nın en küçük ilçesine sigortalı, ambalajlı ve tek seferde taşıma. Ücretsiz keşif ve sabit fiyat.',
  intro: [
    'Evren evden eve nakliyat, Ankara’nın nüfusça en küçük ilçesine yapılan taşımaları kapsar. Merkeze mesafe 170 kilometreyi bulduğu için taşımanın tek seferde tamamlanması şarttır; ikinci sefer hem bir gün hem ciddi maliyet demektir.',
    'Bu yüzden keşifte eşya hacmini olduğundan geniş hesaplıyor, araç seçimini buna göre yapıyoruz. Uzun yolda eşyanın zarar görmemesi için araç içi sabitleme kuşakla yapılır, kırılabilir parçalar çift kat ambalajlanır ve taşıma sigorta kapsamında yürütülür.',
  ],
  highlights: [
    {
      title: 'Tek seferde taşıma',
      text: 'Araç hacmi geniş hesaplanır, uzun mesafede ikinci sefer gerekmez.',
    },
    {
      title: 'Uzun yol ambalajı',
      text: 'Kırılabilir eşya çift kat ambalajlanır, mobilya kuşakla sabitlenir.',
    },
    {
      title: 'Sabit fiyat',
      text: 'Yol ve mesafe farkı keşif fiyatına dahildir, sonradan eklenmez.',
    },
  ],
  neighborhoods: [
    {
      slug: 'merkez',
      name: 'Evren Merkez',
      intro:
        'Evren merkezde düşük katlı binalar ve geniş sokaklar var; araç çoğu adreste kapıya kadar yanaşıyor.',
      notes: [
        'Geniş sokaklar sayesinde yükleme hızlı tamamlanıyor.',
        'Gerektiğinde mobil asansör Ankara’dan getiriliyor.',
      ],
    },
  ],
}
