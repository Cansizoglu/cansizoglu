/**
 * Ankara'dan yurt dışına evden eve nakliyat yapılan ülkeler.
 *
 * Her ülkenin kendi güzergâhı, gümrük kuralı, evrakı ve varış ülkesindeki
 * saha koşulu ayrı yazıldı; sayfalar ülke adı değiştirilerek üretilmiyor.
 *
 * Mesafeler karayolu üzerinden YAKLAŞIK değerlerdir. Gümrük ve muafiyet
 * kuralları değişebildiği için sayfalarda "taşımadan önce güncel durumu
 * birlikte netleştiriyoruz" vurgusu korunmalı. Fiyat verilmiyor (şehirler
 * arası sayfalardaki kuralla aynı).
 */
export type Country = {
  /** URL parçası: /uluslararasi/<slug> */
  slug: string
  /** Başlıkta geçen ad: "Ankara Almanya Evden Eve Nakliyat" */
  name: string
  /** Cümle içinde yönelme hali: "Almanya’ya" */
  toName: string
  /** Bulunma hali: "Almanya’da" */
  inName: string
  group: 'Avrupa Birliği' | 'AB dışı Avrupa' | 'Kıbrıs'
  /** Referans şehre yaklaşık mesafe */
  km: number
  kmTo: string
  /** Yükleme sonrası yolda geçen yaklaşık süre (komple araç) */
  transit: string
  via: string
  /** Gümrük ve muafiyet: sayfanın en çok aranan kısmı */
  customs: string[]
  documents: string[]
  /** Varış ülkesinde taşımayı etkileyen gerçek koşullar */
  notes: string[]
  cities: string[]
  faq: { q: string; a: string }[]
}

const euCustoms = (country: string, extra: string): string[] => [
  `${country} Avrupa Birliği üyesi olduğu için ev eşyası, AB’nin ortak “ikamet nakli” muafiyetiyle vergisiz girebiliyor. Genel şart üç tane: son 12 ay boyunca normal ikametinizin AB dışında (Türkiye’de) olması, eşyanın en az 6 aydır sizin kullanımınızda olması ve eşyanın yeni ikametinizi kurduğunuz tarihten itibaren 12 ay içinde getirilmesi.`,
  `Muafiyet kullanılmış kişisel eşya içindir. Faturası yeni tarihli, ambalajı açılmamış ürünler ve satış amacı taşıyan miktarlar muafiyet dışında kalabilir; bu eşyalar vergilendirilir. ${extra}`,
  'Kurallar ve istisnalar zaman zaman değiştiği için muafiyet şartlarını taşımadan önce sizin durumunuza göre gümrük müşaviriyle birlikte netleştiriyoruz. Son kararı her zaman varış ülkesinin gümrük idaresi verir.',
]

export const countries: Country[] = [
  // ------------------------------------------------------------ Avrupa Birliği
  {
    slug: 'ankara-almanya-evden-eve-nakliyat',
    name: 'Almanya',
    inName: 'Almanya’da',
    toName: 'Almanya’ya',
    group: 'Avrupa Birliği',
    km: 2450,
    kmTo: 'Münih',
    transit: '4 - 6 gün',
    via: 'İstanbul ve Kapıkule üzerinden Bulgaristan, Sırbistan, Macaristan ve Avusturya hattı',
    customs: euCustoms(
      'Almanya',
      'Almanya’da ikamet nakli beyanı için gümrüğün 0350 numaralı formu (Zollanmeldung für Übersiedlungsgut) kullanılır ve numaralı eşya listesi bu forma eklenir.',
    ),
    documents: [
      'Pasaport ve Almanya oturum veya vize belgesi',
      'Gümrük formu 0350 (ikamet nakli beyanı)',
      'Numaralı ve değer bilgili eşya listesi (çeki listesi)',
      'Almanya’daki adresi gösteren kira sözleşmesi veya kayıt belgesi',
      'Türkiye’deki ikametinizi gösteren belge',
      'Gümrük işlemleri için vekaletname',
    ],
    notes: [
      'Almanya’da yeni adrese taşındıktan sonra iki hafta içinde belediyeye (Bürgeramt) adres kaydı (Anmeldung) yaptırmak zorunlu. Gümrükte adres belgesi istendiği için bu kaydı erken yaptırmak işi hızlandırıyor.',
      'Büyük şehirlerde apartman önüne yük aracı park etmek için belediyeden geçici park yasağı (Halteverbotszone) tabelası alınıyor. Tarih netleşince bunu varış adresi için önceden ayarlatmanızı istiyoruz.',
      'Almanya’daki eski binaların çoğunda asansör yok ya da asansör eşya taşımaya uygun değil. Ağır ve büyük eşyalar için varışta dış cephe asansörü planlanıyor.',
      'Türkiye’den Almanya’ya en yoğun taşıma dönemi yaz ayları ve okulların açılışından önceki haftalar. Bu dönemde kapasite erken doluyor; tarihi en az bir ay önceden ayırtmanızı öneriyoruz.',
    ],
    cities: ['Berlin', 'Münih', 'Köln', 'Frankfurt', 'Hamburg', 'Stuttgart', 'Düsseldorf', 'Duisburg'],
    faq: [
      {
        q: 'Ankara’dan Almanya’ya ev eşyası kaç günde gider?',
        a: 'Komple araçla yapılan taşımada eşya, yüklemeden sonra genelde 4 ile 6 gün içinde Almanya’daki adrese ulaşıyor. Sınır kapısındaki bekleme ve gümrük işlemleri bu süreyi etkiliyor. Parsiyel taşımada aracın dolması beklendiği için süre birkaç haftaya uzayabiliyor.',
      },
      {
        q: 'Almanya’ya götürdüğüm ev eşyası için vergi öder miyim?',
        a: 'Son 12 ay Türkiye’de yaşadıysanız ve eşya en az 6 aydır sizin kullanımınızdaysa, AB’nin ikamet nakli muafiyetiyle kullanılmış ev eşyası genelde vergisiz giriyor. Beyan 0350 numaralı formla yapılıyor. Yeni alınmış ürünler muafiyet dışında kalabilir.',
      },
      {
        q: 'Almanya’ya araba da götürebilir miyim?',
        a: 'Araç taşıması ev eşyasından ayrı bir gümrük işlemine tabi. Ev eşyası taşımamızın içinde araç götürmüyoruz; araç için ayrıca bilgi almanızı öneriyoruz.',
      },
    ],
  },
  {
    slug: 'ankara-hollanda-evden-eve-nakliyat',
    name: 'Hollanda',
    inName: 'Hollanda’da',
    toName: 'Hollanda’ya',
    group: 'Avrupa Birliği',
    km: 3250,
    kmTo: 'Amsterdam',
    transit: '5 - 7 gün',
    via: 'Kapıkule üzerinden Balkanlar, Avusturya ve Almanya hattı',
    customs: euCustoms(
      'Hollanda',
      'Hollanda’da muafiyet başvurusu Hollanda gümrüğüne (Douane) yapılır; eşya listesi ve Hollanda’daki adres kaydınız başvurunun temelidir.',
    ),
    documents: [
      'Pasaport ve Hollanda oturum veya vize belgesi',
      'Belediye (gemeente) adres kaydını gösteren belge',
      'Numaralı ve değer bilgili eşya listesi',
      'Hollanda’daki kira veya tapu belgesi',
      'Türkiye’deki ikametinizi gösteren belge',
      'Gümrük işlemleri için vekaletname',
    ],
    notes: [
      'Hollanda’daki eski şehir evlerinin merdivenleri çok dik ve dar. Büyük eşyalar merdivenden çıkmadığı için pencereden dış cephe asansörüyle (verhuislift) alınıyor; bunu varış adresi için önceden planlıyoruz.',
      'Hollanda’ya yerleşince belediyeye (gemeente) adres kaydı yaptırmak gerekiyor. Kayıt tamamlanmadan bazı gümrük işlemleri ilerlemediği için randevuyu erken almanızı öneriyoruz.',
      'Amsterdam’ın kanal çevresindeki sokaklarda büyük araçların girişi ve duruşu kısıtlı. Bu adreslerde eşya ana caddede küçük araca aktarılabiliyor; durum keşifte konuşuluyor.',
      'Rotterdam ve Den Haag gibi şehirlerde yeni yapılaşan bölgelerde asansörlü apartmanlar yaygın; bu adreslerde teslim daha hızlı bitiyor.',
    ],
    cities: ['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven', 'Arnhem'],
    faq: [
      {
        q: 'Ankara’dan Hollanda’ya taşıma ne kadar sürer?',
        a: 'Komple araçla eşya, yüklemeden sonra genelde 5 ile 7 gün içinde Hollanda’daki adrese ulaşıyor. Güzergâh Balkanlar, Avusturya ve Almanya üzerinden geçiyor; sınır beklemeleri süreyi etkileyebiliyor.',
      },
      {
        q: 'Hollanda’da dar merdivenli eve eşya nasıl çıkarılıyor?',
        a: 'Hollanda’daki eski evlerde koltuk, dolap ve yatak gibi büyük eşyalar pencereden dış cephe asansörüyle alınıyor. Varış adresinin fotoğrafını keşifte görüp asansör ihtiyacını baştan planlıyoruz.',
      },
    ],
  },
  {
    slug: 'ankara-belcika-evden-eve-nakliyat',
    name: 'Belçika',
    inName: 'Belçika’da',
    toName: 'Belçika’ya',
    group: 'Avrupa Birliği',
    km: 3200,
    kmTo: 'Brüksel',
    transit: '5 - 7 gün',
    via: 'Kapıkule üzerinden Balkanlar, Avusturya ve Almanya hattı',
    customs: euCustoms(
      'Belçika',
      'Belçika’da muafiyet için eşya listesi ve Belçika’daki belediye (commune / gemeente) kaydınız gümrüğe sunulur.',
    ),
    documents: [
      'Pasaport ve Belçika oturum veya vize belgesi',
      'Belediye kaydını gösteren belge',
      'Numaralı ve değer bilgili eşya listesi',
      'Belçika’daki kira sözleşmesi',
      'Türkiye’deki ikametinizi gösteren belge',
      'Gümrük işlemleri için vekaletname',
    ],
    notes: [
      'Belçika’da yeni adrese yerleştikten sonra 8 iş günü içinde belediyeye kayıt yaptırmak gerekiyor; kayıttan sonra polis memuru adreste ikamet kontrolü yapıyor.',
      'Brüksel ve Anvers’te taşınma günü apartman önüne araç park edebilmek için belediyeden park yeri ayırma izni alınıyor. İzin genelde birkaç gün önceden isteniyor.',
      'Brüksel’in eski mahallelerindeki dar cepheli evlerde büyük eşya pencereden dış cephe asansörüyle alınıyor.',
      'Belçika’da Fransızca ve Felemenkçe konuşulan bölgelerde evrak dili değişiyor; belediye yazışmalarında hangi dilin geçerli olduğunu adrese göre kontrol ediyoruz.',
    ],
    cities: ['Brüksel', 'Anvers', 'Gent', 'Liège', 'Charleroi', 'Genk'],
    faq: [
      {
        q: 'Ankara’dan Belçika’ya eşya kaç günde ulaşır?',
        a: 'Komple araçla yapılan taşımada eşya, yüklemeden sonra genelde 5 ile 7 gün içinde Belçika’daki adrese ulaşıyor. Parsiyel taşımada aracın dolması beklendiği için süre uzayabiliyor.',
      },
      {
        q: 'Brüksel’de taşınma günü araç nereye park ediyor?',
        a: 'Brüksel’de taşınma için belediyeden apartman önüne park yeri ayırma izni alınıyor. Tarih netleşince bu izni zamanında almanızı istiyoruz; böylece araç kapının önüne yanaşabiliyor.',
      },
    ],
  },
  {
    slug: 'ankara-fransa-evden-eve-nakliyat',
    name: 'Fransa',
    inName: 'Fransa’da',
    toName: 'Fransa’ya',
    group: 'Avrupa Birliği',
    km: 3250,
    kmTo: 'Paris',
    transit: '5 - 7 gün',
    via: 'Kapıkule üzerinden Balkanlar, Avusturya ve Almanya hattı',
    customs: euCustoms(
      'Fransa',
      'Fransa’da muafiyet için ikamet değişikliği beyanı ile tarihli, imzalı ve değer bilgili eşya listesi gümrüğe sunulur.',
    ),
    documents: [
      'Pasaport ve Fransa oturum veya vize belgesi',
      'İkamet değişikliği beyanı',
      'Tarihli, imzalı ve değer bilgili eşya listesi',
      'Fransa’daki kira sözleşmesi veya adres belgesi',
      'Türkiye’deki ikametinizi gösteren belge',
      'Gümrük işlemleri için vekaletname',
    ],
    notes: [
      'Paris’te apartmanların çoğu eski ve asansörleri çok küçük. Büyük eşyalar pencereden dış cephe asansörüyle (monte-meuble) alınıyor; bu yüzden varış adresinin kat ve pencere ölçüsünü keşifte soruyoruz.',
      'Paris ve Lyon’da taşınma günü sokakta araç park edebilmek için belediyeden (mairie) park izni alınıyor; izin birkaç gün önceden isteniyor.',
      'Fransa’da Ağustos ayı yoğun tatil dönemi; bazı resmi işlemler ve apartman yönetimleri bu dönemde yavaş çalışıyor. Tarihi buna göre planlamanızı öneriyoruz.',
      'Strazburg ve Lyon gibi doğu şehirleri güzergâha daha yakın olduğu için bu adreslere teslim Paris’e göre daha erken yapılabiliyor.',
    ],
    cities: ['Paris', 'Lyon', 'Strazburg', 'Marsilya', 'Lille', 'Mulhouse'],
    faq: [
      {
        q: 'Ankara’dan Fransa’ya ev taşıma kaç gün sürer?',
        a: 'Komple araçla eşya, yüklemeden sonra genelde 5 ile 7 gün içinde Fransa’daki adrese ulaşıyor. Strazburg ve Lyon gibi doğu şehirlerine teslim, Paris’e göre biraz daha erken yapılabiliyor.',
      },
      {
        q: 'Paris’te asansörsüz binaya eşya nasıl taşınıyor?',
        a: 'Paris’teki eski binalarda büyük eşyalar pencereden dış cephe asansörüyle alınıyor. Pencere ölçüsünü ve katı keşifte öğrenip asansörü varış günü için önceden ayarlıyoruz.',
      },
    ],
  },
  {
    slug: 'ankara-avusturya-evden-eve-nakliyat',
    name: 'Avusturya',
    inName: 'Avusturya’da',
    toName: 'Avusturya’ya',
    group: 'Avrupa Birliği',
    km: 2000,
    kmTo: 'Viyana',
    transit: '3 - 5 gün',
    via: 'İstanbul ve Kapıkule üzerinden Bulgaristan, Sırbistan ve Macaristan hattı',
    customs: euCustoms(
      'Avusturya',
      'Avusturya’da muafiyet için numaralı eşya listesi ve Avusturya’daki adres kaydınız (Meldezettel) gümrüğe sunulur.',
    ),
    documents: [
      'Pasaport ve Avusturya oturum veya vize belgesi',
      'Adres kayıt belgesi (Meldezettel)',
      'Numaralı ve değer bilgili eşya listesi',
      'Avusturya’daki kira sözleşmesi',
      'Türkiye’deki ikametinizi gösteren belge',
      'Gümrük işlemleri için vekaletname',
    ],
    notes: [
      'Avusturya’da yeni adrese taşındıktan sonra 3 gün içinde adres kaydı (Meldezettel) yaptırmak zorunlu. Gümrükte bu belge istendiği için kaydı hemen yaptırmanızı öneriyoruz.',
      'Viyana’da apartman önüne araç park edebilmek için geçici durma yasağı (Halteverbot) tabelası belediyeden önceden alınıyor.',
      'Viyana’nın eski binalarında (Altbau) tavanlar yüksek, merdivenler geniş ama asansörler küçük; büyük dolaplar çoğu zaman merdivenden ya da dış cephe asansörüyle çıkarılıyor.',
      'Avusturya, Avrupa rotalarımızın en yakını. Bu yüzden Viyana teslimleri, Batı Avrupa’ya göre birkaç gün daha erken yapılabiliyor.',
    ],
    cities: ['Viyana', 'Linz', 'Salzburg', 'Graz', 'Innsbruck', 'Vorarlberg'],
    faq: [
      {
        q: 'Ankara’dan Viyana’ya eşya kaç günde gider?',
        a: 'Ankara ile Viyana arası karayoluyla yaklaşık 2.000 kilometre. Komple araçla eşya, yüklemeden sonra genelde 3 ile 5 gün içinde Viyana’daki adrese ulaşıyor.',
      },
      {
        q: 'Avusturya’ya taşınınca hangi kaydı yaptırmam gerekiyor?',
        a: 'Avusturya’da yeni adrese taşındıktan sonra 3 gün içinde Meldezettel denen adres kaydını yaptırmanız gerekiyor. Gümrük işlemlerinde bu belge istendiği için erken yaptırmak teslimi hızlandırıyor.',
      },
    ],
  },
  // ------------------------------------------------------------ AB dışı Avrupa
  {
    slug: 'ankara-isvicre-evden-eve-nakliyat',
    name: 'İsviçre',
    inName: 'İsviçre’de',
    toName: 'İsviçre’ye',
    group: 'AB dışı Avrupa',
    km: 2750,
    kmTo: 'Zürih',
    transit: '5 - 7 gün',
    via: 'Kapıkule üzerinden Balkanlar, Avusturya ve Almanya hattı; AB’den İsviçre’ye ayrı gümrük geçişi',
    customs: [
      'İsviçre AB üyesi değil; bu yüzden eşya önce AB topraklarından transit geçiyor, ardından İsviçre sınırında ayrı bir gümrük işlemi yapılıyor. Bu ikinci gümrük, İsviçre taşımasını AB ülkelerine göre biraz daha uzun sürdürüyor.',
      'İsviçre’ye yerleşenlerin kullanılmış ev eşyası vergisiz girebiliyor. Temel şart, eşyanın en az 6 aydır sizin kullanımınızda olması ve İsviçre’de de kullanmaya devam etmeniz. Beyan, İsviçre gümrüğünün 18.44 numaralı ikamet nakli formuyla yapılıyor.',
      'Kurallar değişebildiği için muafiyet şartlarını taşımadan önce sizin durumunuza göre gümrük müşaviriyle birlikte netleştiriyoruz.',
    ],
    documents: [
      'Pasaport ve İsviçre oturum izni',
      'İsviçre gümrüğünün 18.44 numaralı ikamet nakli formu',
      'Numaralı ve değer bilgili eşya listesi',
      'İsviçre’deki kira sözleşmesi',
      'Türkiye’deki ikametinizi gösteren belge',
      'Gümrük işlemleri için vekaletname',
    ],
    notes: [
      'İsviçre’de yeni adrese taşındıktan sonra 14 gün içinde belediyeye (Gemeinde) kayıt yaptırmak gerekiyor.',
      'İsviçre’de pek çok apartmanın ev kuralları (Hausordnung) pazar günleri ve gece saatlerinde gürültülü iş yapılmasına izin vermiyor; teslim saatini buna göre planlıyoruz.',
      'Zürih ve Cenevre gibi şehirlerde apartman önüne araç park etmek için belediyeden izin alınıyor.',
      'AB ile İsviçre arasındaki ikinci gümrük nedeniyle evrakın eksiksiz olması burada daha da önemli; eksik belge aracı sınırda bekletebiliyor.',
    ],
    cities: ['Zürih', 'Basel', 'Cenevre', 'Bern', 'Lozan', 'Luzern'],
    faq: [
      {
        q: 'İsviçre’ye eşya taşımak AB ülkelerinden neden daha uzun sürüyor?',
        a: 'İsviçre AB üyesi olmadığı için eşya AB’den transit geçtikten sonra İsviçre sınırında ikinci bir gümrük işleminden geçiyor. Bu işlem, evrak eksiksizse kısa sürüyor; eksik belge ise aracı sınırda bekletebiliyor.',
      },
      {
        q: 'İsviçre’ye götürdüğüm eşya için vergi öder miyim?',
        a: 'İsviçre’ye yerleşiyorsanız ve eşya en az 6 aydır sizin kullanımınızdaysa, kullanılmış ev eşyası genelde vergisiz giriyor. Beyan 18.44 numaralı formla yapılıyor. Alkol ve tütün gibi ürünler için ayrı sınırlar var.',
      },
    ],
  },
  {
    slug: 'ankara-ingiltere-evden-eve-nakliyat',
    name: 'İngiltere',
    inName: 'İngiltere’de',
    toName: 'İngiltere’ye',
    group: 'AB dışı Avrupa',
    km: 3550,
    kmTo: 'Londra',
    transit: '6 - 8 gün',
    via: 'Kapıkule üzerinden Balkanlar, Avusturya, Almanya ve Fransa; Calais’den Manş geçişi',
    customs: [
      'İngiltere AB’den ayrıldığı için eşya, AB’den çıkışta ve İngiltere’ye girişte iki ayrı gümrük işleminden geçiyor. Manş Denizi feribotla ya da tünel treniyle geçiliyor.',
      'İngiltere’de ev eşyası için vergi muafiyetine Transfer of Residence (ToR) deniyor. Genel şartlar: son 12 ay İngiltere dışında yaşamış olmanız, eşyanın en az 6 aydır sizin olması ve eşyanın taşınmanızdan sonraki 12 ay içinde getirilmesi.',
      'ToR başvurusu, eşya İngiltere’ye ulaşmadan önce İngiltere vergi idaresine (HMRC) çevrim içi yapılıyor ve verilen referans numarası gümrükte kullanılıyor. Başvuru onaylanmadan araç yola çıkarsa eşya limanda bekleyebiliyor; bu yüzden başvuruyu en başta yaptırıyoruz.',
    ],
    documents: [
      'Pasaport ve İngiltere vize veya oturum belgesi',
      'Onaylanmış ToR (Transfer of Residence) referans numarası',
      'Numaralı ve değer bilgili eşya listesi',
      'İngiltere’deki kira sözleşmesi veya adres belgesi',
      'Türkiye’deki ikametinizi gösteren belge',
      'Gümrük işlemleri için vekaletname',
    ],
    notes: [
      'İngiltere’de araçlar soldan akıyor ve şehir içi sokakların çoğu dar. Londra’da büyük araç giremeyen sokaklarda eşya küçük araca aktarılarak teslim ediliyor.',
      'Londra’nın merkezinde araç girişi için günlük trafik ücretleri (Congestion Charge ve ULEZ) uygulanıyor; bu maliyet teslim planında hesaba katılıyor.',
      'İngiltere’deki eski tip sıra evlerde (terraced house) merdivenler dar; büyük dolap ve yataklar söküm yapılarak çıkarılıyor.',
      'Manş geçişinde hava şartları zaman zaman sefer gecikmelerine yol açabiliyor; kesin teslim günü bu yüzden yola çıktıktan sonra netleşiyor.',
    ],
    cities: ['Londra', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Edinburgh'],
    faq: [
      {
        q: 'Ankara’dan İngiltere’ye eşya göndermek için ne gerekiyor?',
        a: 'En önemli adım Transfer of Residence (ToR) başvurusu. Bu başvuru eşya İngiltere’ye ulaşmadan önce İngiltere vergi idaresine yapılıyor ve onaylanınca verilen numara gümrükte kullanılıyor. Pasaport, vize ve numaralı eşya listesi de hazırlanıyor.',
      },
      {
        q: 'Ankara’dan Londra’ya ev eşyası kaç günde ulaşır?',
        a: 'Ankara ile Londra arası karayoluyla yaklaşık 3.550 kilometre. Komple araçla eşya, yüklemeden sonra genelde 6 ile 8 gün içinde Londra’ya ulaşıyor. Manş geçişi ve iki ayrı gümrük süreyi etkileyebiliyor.',
      },
    ],
  },
  // ------------------------------------------------------------ Kıbrıs
  {
    slug: 'ankara-kibris-evden-eve-nakliyat',
    name: 'Kıbrıs',
    inName: 'Kıbrıs’ta',
    toName: 'Kıbrıs’a',
    group: 'Kıbrıs',
    km: 490,
    kmTo: 'Mersin Limanı',
    transit: '3 - 5 gün',
    via: 'Ankara’dan karayoluyla Mersin veya Taşucu limanı, oradan Ro-Ro gemisiyle Gazimağusa veya Girne',
    customs: [
      'KKTC’ye taşımada eşya kapalı kasa araçla Mersin veya Taşucu limanına götürülüyor, araç Ro-Ro gemisiyle adaya geçiyor ve eşya Gazimağusa ya da Girne limanında gümrükten çıkıyor. Böylece eşya aktarma yapılmadan aynı araçla kapınıza geliyor.',
      'KKTC gümrüğünde kullanılmış kişisel ev eşyası ile ticari mal ayrı tutuluyor. Kullanılmış eşya için muafiyet uygulanabiliyor; sıfır, ambalajı açılmamış ürünler ise vergiye tabi olabiliyor.',
      'Gümrük işlemleri sırasında eşya sahibinin adada bulunması istenebiliyor. Muafiyet şartları kişinin KKTC’deki durumuna (ikamet, çalışma, öğrenim) göre değiştiği için evrakı taşımadan önce sizin durumunuza göre birlikte netleştiriyoruz.',
    ],
    documents: [
      'Kimlik kartı veya pasaport',
      'KKTC’deki ikamet, çalışma izni veya öğrenci belgesi (durumunuza göre)',
      'Numaralı eşya listesi (çeki listesi)',
      'KKTC’deki kira sözleşmesi veya adres belgesi',
      'Gümrük işlemleri için vekaletname',
    ],
    notes: [
      'Ankara’dan KKTC’ye en sık taşınanlardan biri üniversite öğrencileri. Lefkoşa, Gazimağusa ve Girne’deki okullara giden öğrencilerin birkaç koli ve tek oda eşyasını parsiyel olarak gönderiyoruz.',
      'Gemi seferleri hava durumuna ve sezona bağlı. Kış aylarında fırtına nedeniyle seferler ertelenebildiği için teslim günü, aracın limana ulaşmasından sonra kesinleşiyor.',
      'Yaz aylarında adada sıcaklık çok yüksek oluyor; boşaltmayı sabah erken saatlere alıyor, elektronik eşyaları güneşte bekletmiyoruz.',
      'Girne ve İskele çevresindeki yeni sitelerde site yönetimleri taşınma için randevu istiyor; varış tarihini bu randevuya göre ayarlıyoruz.',
    ],
    cities: ['Lefkoşa', 'Girne', 'Gazimağusa', 'İskele', 'Güzelyurt', 'Lefke'],
    faq: [
      {
        q: 'Ankara’dan Kıbrıs’a ev eşyası nasıl gidiyor?',
        a: 'Eşya Ankara’da kapalı kasa araca yükleniyor, araç karayoluyla Mersin veya Taşucu limanına gidiyor ve Ro-Ro gemisiyle adaya geçiyor. Gümrükten sonra aynı araç eşyayı Lefkoşa, Girne veya Gazimağusa’daki adrese teslim ediyor; arada aktarma yapılmıyor.',
      },
      {
        q: 'Kıbrıs’a eşya taşıma kaç gün sürer?',
        a: 'Ankara’dan yükleme yapıldıktan sonra eşya genelde 3 ile 5 gün içinde KKTC’deki adrese ulaşıyor. Süreyi en çok gemi seferlerinin takvimi ve hava durumu belirliyor.',
      },
      {
        q: 'Öğrenci eşyası için Kıbrıs’a parça eşya gönderebilir miyim?',
        a: 'Gönderebilirsiniz. Birkaç koli, yatak, masa gibi tek oda eşyası için tam araç tutmanız gerekmiyor; eşyanız parsiyel olarak diğer yüklerle aynı araçta gidiyor ve ücreti kapladığı hacme göre hesaplanıyor.',
      },
    ],
  },
]

export const countryBySlug = (slug: string) => countries.find((c) => c.slug === slug)

export const countryGroups = (['Kıbrıs', 'Avrupa Birliği', 'AB dışı Avrupa'] as const).map(
  (group) => ({ group, countries: countries.filter((c) => c.group === group) }),
)
