export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  date: string
  readingMinutes: number
  /**
   * Yazının kapak görseli. Alanlar Rank Math'in görsel SEO kutularının
   * karşılığı: dosya adı (ana isim), alt etiketi, title özniteliği,
   * görselin altında görünen kısa açıklama ve yapısal veriye giden
   * uzun açıklama.
   */
  image: {
    src: string
    width: number
    height: number
    alt: string
    title: string
    caption: string
    description: string
  }
  /** Basit blok yapısı: paragraf, ara başlık, liste */
  body: (
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'ul'; items: string[] }
  )[]
}

export const posts: BlogPost[] = [
  {
    slug: 'tasinmadan-once-yapilacaklar-listesi',
    title: 'Taşınmadan Önce Yapılacaklar: 2 Haftalık Hazırlık Listesi',
    metaTitle: 'Taşınmadan Önce Yapılacaklar Listesi | Ankara Taşıma',
    metaDescription:
      'Taşınmadan önce iki hafta içinde yapmanız gerekenler: abonelik işlemleri, paketleme sırası, adres değişikliği ve taşıma günü hazırlığı.',
    excerpt:
      'Taşınmanın zor kısmı taşıma günü değil, öncesindeki hazırlıktır. İki haftaya yayılmış bir plan, taşınma gününü çok daha sakin geçirmenizi sağlar.',
    date: '2026-09-10',
    readingMinutes: 6,
    image: {
      src: '/img/tasima-oncesi-salon.webp',
      width: 1600,
      height: 1200,
      alt: 'Taşınma öncesi salonda sarılıp paketlenmiş mobilyalar ve koliler',
      title: 'Taşımaya hazırlanmış salon',
      caption: 'Hazırlığa erken başlayınca taşıma günü sadece yükleme gününe dönüşüyor.',
      description: 'Taşınma gününden önce paketlenmiş mobilyalar, televizyon kutusu ve kolilerle hazırlanmış bir salon. Eşyalar yükleme sırasına göre bir araya toplanmış.',
    },
    body: [
      {
        type: 'p',
        text: 'Taşınma sürecinde en çok yaşanan sorun, her şeyin son iki güne sıkışmasıdır. Oysa hazırlığı iki haftaya yayarsanız, taşıma günü sadece eşyanın araca yüklendiği bir güne dönüşür. Aşağıdaki liste, Ankara içinde yaptığımız taşımalarda müşterilerimize önerdiğimiz sıralamadır.',
      },
      { type: 'h2', text: 'Taşınmaya 14 gün kala' },
      {
        type: 'ul',
        items: [
          'Nakliyat firmasından keşif isteyin ve fiyatı yazılı olarak alın.',
          'Taşıma tarihini netleştirin, mümkünse ay başı ve ay sonu yoğunluğundan kaçının.',
          'Kullanmadığınız eşyaları ayırın; satmak, bağışlamak veya atmak için zamanınız olsun.',
          'Yeni evde tadilat yapılacaksa taşınmadan önce bitmesini planlayın.',
        ],
      },
      { type: 'h2', text: 'Taşınmaya 7 gün kala' },
      {
        type: 'ul',
        items: [
          'Elektrik, su, doğalgaz ve internet abonelikleri için nakil başvurularını yapın.',
          'Az kullandığınız eşyaları (kitap, mevsimlik kıyafet, yedek mutfak gereçleri) paketlemeye başlayın.',
          'Kolilerin üzerine hangi odaya ait olduğunu yazın, bu yerleşimde çok zaman kazandırır.',
          'Buzdolabını boşaltmaya başlayın, taşımadan 24 saat önce kapatılması gerekir.',
        ],
      },
      { type: 'h2', text: 'Taşınmaya 1 gün kala' },
      {
        type: 'ul',
        items: [
          'Buzdolabını kapatın ve suyunu boşaltın.',
          'Çamaşır makinesinin tamburunu sabitleyen nakliye vidalarını bulun.',
          'Değerli evrak, mücevher ve ilaçları ayrı bir çantada kendinizde tutun.',
          'Taşıma günü ilk ihtiyaç duyacağınız şeyler için bir kutu hazırlayın: temizlik malzemesi, havlu, şarj aleti, temel mutfak gereçleri.',
        ],
      },
      { type: 'h2', text: 'Taşıma günü' },
      {
        type: 'p',
        text: 'Taşıma günü sizin yapmanız gereken tek şey, ekibe hangi eşyanın nereye gideceğini söylemektir. Söküm, ambalajlama, yükleme ve montaj bizim işimizdir. Eşya listesi üzerinden kontrol yaparak teslim alırsanız, süreci eksiksiz kapatmış olursunuz.',
      },
      {
        type: 'p',
        text: 'Ankara içinde taşınacaksanız keşif için bizi arayabilir, taşıma tarihinizi önceden yer ayırtarak netleştirebilirsiniz.',
      },
    ],
  },
  {
    slug: 'asansorlu-nakliyat-ne-zaman-gerekir',
    title: 'Asansörlü Nakliyat Ne Zaman Gerekir?',
    metaTitle: 'Asansörlü Nakliyat Ne Zaman Gerekir? | Ankara Taşıma',
    metaDescription:
      'Asansörlü nakliyat hangi durumlarda gerekir, maliyeti neye göre değişir ve merdivenle taşımaya göre avantajları nelerdir?',
    excerpt:
      'Her taşımada asansör gerekmez. Ancak dar merdiven, yüksek kat ve büyük mobilya bir aradaysa asansör hem daha güvenli hem de daha ekonomiktir.',
    date: '2026-09-05',
    readingMinutes: 5,
    image: {
      src: '/img/ankara-tasima-banner-1.webp',
      width: 2048,
      height: 768,
      alt: 'Ankara Taşıma ekibi paketlenmiş koltukları kapalı kasa kamyondan indiriyor',
      title: 'Ambalajlı eşyanın araçtan indirilmesi',
      caption: 'Asansörsüz binada eşya merdivene hiç girmiyor, pencereden iniyor.',
      description: 'Ankara Taşıma ekibinin streç filmle sarılmış koltuk ve mobilyaları kapalı kasa kamyondan indirdiği an.',
    },
    body: [
      {
        type: 'p',
        text: 'Asansörlü nakliyat, mobil bir taşıma asansörünün binanın dışına kurularak eşyanın balkondan veya pencereden indirilip çıkarılmasıdır. Ankara’da özellikle Keçiören, Mamak ve Altındağ gibi eski yapı stoğunun yoğun olduğu ilçelerde taşımaların çoğu bu yöntemle yapılır.',
      },
      { type: 'h2', text: 'Asansör hangi durumlarda gerekir?' },
      {
        type: 'ul',
        items: [
          'Merdiven boşluğu dar ve gardırop, koltuk gibi büyük parçalar dönmüyor ise.',
          'Bina asansörsüz ve daire 3. kattan yüksekteyse.',
          'Bina asansörü var ancak kabin büyük mobilyalar için küçük kalıyorsa.',
          'Merdivenler mermer veya dar döner tipteyse ve çizilme riski yüksekse.',
          'Piyano, para kasası gibi ağır ve hassas eşyalar taşınacaksa.',
        ],
      },
      { type: 'h2', text: 'Asansör maliyeti artırır mı?' },
      {
        type: 'p',
        text: 'İlk bakışta ek bir kalem gibi görünse de asansör çoğu zaman toplam maliyeti düşürür. Merdivenle 6 saat süren bir yükleme asansörle 2 saatte biter; bu da daha az işçilik saati demektir. Ayrıca merdivende oluşabilecek hasar riski ortadan kalkar.',
      },
      { type: 'h2', text: 'Asansör her binaya kurulabilir mi?' },
      {
        type: 'p',
        text: 'Kurulum için asansör aracının binaya yanaşabileceği bir alan ve eşyanın geçebileceği bir balkon veya geniş pencere gerekir. Ağaç dalları, elektrik hatları ve dar sokaklar kurulumu engelleyebilir. Bu yüzden keşif sırasında binayı yerinde kontrol ediyoruz.',
      },
      {
        type: 'p',
        text: 'Binanızın asansöre uygun olup olmadığını öğrenmek için ücretsiz keşif talebinde bulunabilirsiniz.',
      },
    ],
  },
  {
    slug: 'esya-paketleme-rehberi',
    title: 'Eşya Paketleme Rehberi: Hangi Eşya Nasıl Ambalajlanır?',
    metaTitle: 'Eşya Paketleme Rehberi | Ambalajlama Nasıl Yapılır?',
    metaDescription:
      'Cam, porselen, beyaz eşya, mobilya ve elektronik ürünlerin taşıma için doğru ambalajlanma yöntemleri ve kullanılan malzemeler.',
    excerpt:
      'Taşımada oluşan hasarların çoğu yolda değil, yetersiz ambalaj yüzünden yükleme sırasında olur. Her eşyanın kendi ambalaj yöntemi vardır.',
    date: '2026-08-28',
    readingMinutes: 7,
    image: {
      src: '/img/koltuk-takimi-ambalaj.webp',
      width: 1600,
      height: 1200,
      alt: 'Balonlu naylon ve streç filmle sarılmış koltuk takımı',
      title: 'Ambalajlanmış koltuk takımı',
      caption: 'Koltuklar balonlu naylon ve streç filmle sarılınca taşımada çizilmiyor.',
      description: 'Salonda taşınmaya hazır, her parçası balonlu naylon ve streç filmle ayrı ayrı sarılmış koltuk takımı ve orta sehpa.',
    },
    body: [
      {
        type: 'p',
        text: 'Paketleme, taşımanın en çok küçümsenen ama sonuca en çok etki eden aşamasıdır. Doğru ambalajlanmış bir eşya, uzun yolda bile zarar görmez; yanlış ambalajlanmış bir eşya ise iki kat merdivende kırılabilir.',
      },
      { type: 'h2', text: 'Cam, porselen ve kırılacak eşya' },
      {
        type: 'p',
        text: 'Her parça tek tek kraft kâğıda sarılır, ardından balonlu naylonla kaplanır. Tabaklar düz değil, dik olarak yerleştirilir; bu şekilde kırılma riski belirgin şekilde azalır. Kutunun boşlukları kâğıtla doldurulur, içeride eşya oynamamalıdır.',
      },
      { type: 'h2', text: 'Mobilya' },
      {
        type: 'p',
        text: 'Sökülebilen mobilyalar sökülür, vidaları poşetlenip kendi parçasına bantlanır. Ahşap yüzeyler önce battaniye sonra streç filmle sarılır. Streç doğrudan cilaya temas ettirilmez, sıcak havada cilaya yapışabilir.',
      },
      { type: 'h2', text: 'Beyaz eşya' },
      {
        type: 'ul',
        items: [
          'Buzdolabı taşımadan 24 saat önce kapatılır ve suyu boşaltılır, dik taşınır.',
          'Çamaşır makinesinin tamburu nakliye vidalarıyla sabitlenir.',
          'Bulaşık makinesinin su bağlantıları sökülür ve hortumları içine alınır.',
          'Fırın camı ve rafları ayrı ambalajlanır.',
        ],
      },
      { type: 'h2', text: 'Elektronik ürünler' },
      {
        type: 'p',
        text: 'Televizyon ve monitörler mümkünse kendi kutusunda taşınır. Kutusu yoksa köşe koruyucu takılıp kartonlanır ve mutlaka dik taşınır. Kabloları fotoğraflayıp poşetlemek, yeni evde kurulumu çok hızlandırır.',
      },
      { type: 'h2', text: 'Tablo, ayna ve cam masa' },
      {
        type: 'p',
        text: 'Cam yüzeylere önce koruyucu bant çapraz şekilde yapıştırılır, sonra köşe koruyucu takılır ve çift katlı kartonla kaplanır. Bu eşyalar araçta her zaman dik konumda ve sabitlenmiş şekilde taşınır.',
      },
      {
        type: 'p',
        text: 'Ambalaj malzemesi ve paketleme işçiliği hizmetimize dahildir; isterseniz paketlemenin tamamını biz yaparız.',
      },
    ],
  },
  {
    slug: 'ankara-evden-eve-nakliyat-fiyatlari',
    title: 'Ankara Evden Eve Nakliyat Fiyatları: Rakamı Neler Belirler?',
    metaTitle: 'Ankara Evden Eve Nakliyat Fiyatları 2026 | Güncel Liste',
    metaDescription:
      'Ankara evden eve nakliyat fiyatları nasıl hesaplanır? 1+1’den 5+1’e güncel fiyat aralıkları, asansör ve mesafe farkı, fiyatı yükselten gizli kalemler.',
    excerpt:
      'Ankara evden eve nakliyat fiyatları tek bir rakamla anlatılamaz. Aynı daire, kat ve sokak şartlarına göre çok farklı maliyetlerle taşınır. Fiyatı belirleyen kalemleri tek tek açtık.',
    date: '2026-09-16',
    readingMinutes: 8,
    image: {
      src: '/img/ankara-tasima-banner-2.webp',
      width: 2048,
      height: 768,
      alt: 'Ankara Taşıma kapalı kasa kamyonu şehir içi yolda',
      title: 'Ankara Taşıma kapalı kasa kamyonu',
      caption: 'Fiyatı belirleyen ilk iki şey araç boyu ve mesafe.',
      description: 'Ankara Taşıma’nın evden eve nakliyatta kullandığı kapalı kasa kamyon. Fiyatı belirleyen ilk iki şey araç boyu ve mesafe.',
    },
    body: [
      {
        type: 'p',
        text: 'Ankara evden eve nakliyat fiyatları, telefonda duyduğunuz ilk rakamla taşıma günü ödediğiniz rakam arasında fark çıkmasın diye anlaşılması gereken bir konudur. Fiyat; eşya hacmi, iki adres arası mesafe, kat ve asansör durumu ve seçtiğiniz ek hizmetlerin toplamıdır. Bu yazıda her kalemi tek tek açıyoruz ki size verilen teklifi okuyabilin, karşılaştırabilin.',
      },
      { type: 'h2', text: 'Fiyatın temeli: eşya hacmi' },
      {
        type: 'p',
        text: 'Bir nakliyat firmasının ilk baktığı şey, eşyanızın kaç metreküp tuttuğudur. Çünkü hacim, kullanılacak aracın boyutunu ve kaç kişilik ekip geleceğini doğrudan belirler. 1+1 bir daire tek araçla ve üç kişilik ekiple taşınırken, 4+1 bir daire çoğu zaman daha büyük araç ve beş kişilik ekip gerektirir. Oda sayısı bu hacim için kaba bir göstergedir; asıl belirleyici, dolapların doluluğu ve depo, balkon, kiler gibi alanlardaki eşyadır.',
      },
      { type: 'h2', text: 'Kat ve asansör farkı' },
      {
        type: 'p',
        text: 'Ankara’nın özellikle Keçiören, Altındağ ve Mamak gibi ilçelerinde bina stoğunun büyük bölümü asansörsüzdür. Asansörsüz 4. kattan eşya indirmek, aynı eşyayı zemin kattan indirmeye göre belirgin şekilde daha fazla işçilik demektir. Bu noktada mobil taşıma asansörü hem daha hızlı hem çoğu zaman daha ucuz çözümdür: merdivende geçen saatleri ortadan kaldırır, eşyanın duvara çarpma riskini sıfıra indirir.',
      },
      { type: 'h2', text: 'Mesafe ve güzergah' },
      {
        type: 'p',
        text: 'Ankara içi taşımalarda mesafe çoğu zaman fiyatın küçük bir kalemidir; Çankaya’dan Yenimahalle’ye taşınmakla Keçiören’den Etimesgut’a taşınmak arasında büyük bir fark oluşmaz. Fark, çevre ilçelere çıkıldığında başlar. Polatlı, Şereflikoçhisar, Nallıhan veya Beypazarı gibi ilçelere yapılan taşımalarda yol, günün önemli bir bölümünü alır ve fiyata yansır.',
      },
      { type: 'h2', text: 'Fiyatı sonradan yükselten kalemler' },
      {
        type: 'ul',
        items: [
          'Sokağa araç girememesi: eşyanın küçük araçla ana caddeye aktarılması ek işçilik demektir.',
          'Site giriş kuralları: bazı sitelerde araç kaydı ve belirli saat aralığı zorunludur, plan buna göre değişir.',
          'Özel eşya: piyano, para kasası, büyük akvaryum ve mermer masa ayrı ekipman ve ekip gerektirir.',
          'Depolama: yeni eve giriş tarihi ileri bir güne kaydıysa eşya depoda bekletilir, bu ayrı hesaplanır.',
          'Tarih: ay başı, ay sonu ve yaz ayları sektörün en yoğun dönemleridir.',
        ],
      },
      { type: 'h2', text: 'Ucuz teklifte nelere dikkat etmeli' },
      {
        type: 'p',
        text: 'Piyasadaki en düşük teklif çoğu zaman eksik teklifdir. Bir fiyatın gerçekten karşılaştırılabilir olması için ambalaj malzemesinin, söküm ve montaj işçiliğinin, asansör ücretinin ve sigortanın dahil olup olmadığının yazılı olması gerekir. Telefonda eşyayı görmeden verilen rakamlar taşıma günü büyüme eğilimindedir. Bizim çalışma şeklimiz şudur: keşif ücretsizdir, fiyat keşiften sonra yazılı verilir ve o rakam taşıma günü değişmez.',
      },
      { type: 'h2', text: 'Kendi fiyatınızı hesaplayın' },
      {
        type: 'p',
        text: 'Sitemizdeki fiyat ve km hesaplama aracı, ev tipinizi, iki ilçe arasındaki yolu, kat durumunuzu ve ek hizmet tercihlerinizi birleştirip size gerçekçi bir aralık verir. Bu araç bağlayıcı bir teklif değildir ama pazarlık masasına oturmadan önce beklentinizi doğru yere koymanızı sağlar.',
      },
    ],
  },
  {
    slug: 'ankara-nakliyat-firmasi-secerken',
    title: 'Ankara Nakliyat Firmaları Arasından Doğru Olanı Seçmek',
    metaTitle: 'Ankara Nakliyat Firmaları | Güvenilir Firma Nasıl Seçilir?',
    metaDescription:
      'Ankara nakliyat firmaları arasından güvenilir olanı seçmenin yolları: sözleşme, sigorta, kendi aracı olan firma, keşif ve yazılı fiyat kontrolü.',
    excerpt:
      'Ankara nakliyat firmaları arasında fiyat farkı büyük olabiliyor. Ucuz teklifin altında ne olduğunu ve güvenilir firmayı nasıl ayırt edeceğinizi anlattık.',
    date: '2026-09-14',
    readingMinutes: 7,
    image: {
      src: '/img/paketlenmis-mobilyalar.webp',
      width: 1047,
      height: 1119,
      alt: 'Streç film ve balonlu naylonla paketlenmiş koltuk, sandalye ve sehpalar',
      title: 'Taşımaya hazır paketlenmiş mobilyalar',
      caption: 'Eşyayı özenle paketleyen ekip, taşıma gününde de aynı özeni gösteriyor.',
      description: 'Taşıma öncesi kırmızı ve mavi balonlu naylonla sarılmış, köşeleri bantlanmış koltuk, sandalye ve sehpalar.',
    },
    body: [
      {
        type: 'p',
        text: 'Ankara nakliyat firmaları arasında seçim yaparken elinizdeki tek veri genelde fiyattır ve bu yanıltıcıdır. Eşyanız bir günlüğüne tanımadığınız insanlara teslim edilir; o yüzden bakılması gereken şey rakamdan önce firmanın nasıl çalıştığıdır. Aşağıdaki başlıklar, teklif alırken sorabileceğiniz somut sorulardır.',
      },
      { type: 'h2', text: 'Keşif yapıyor mu?' },
      {
        type: 'p',
        text: 'Eşyayı görmeden verilen fiyat tahmindir. Ciddi bir firma adrese gelir, oda oda bakar, dolapların doluluğunu görür, sokağa aracın girip giremeyeceğini kontrol eder ve ancak ondan sonra fiyat verir. Keşif ücretsiz olmalıdır ve keşif sonrası fiyat yazılı verilmelidir. Sözlü fiyat, taşıma günü tartışmaya açıktır.',
      },
      { type: 'h2', text: 'Araç ve asansör firmanın kendisinin mi?' },
      {
        type: 'p',
        text: 'Ankara’da bazı firmalar aracı ve mobil asansörü taşıma günü dışarıdan kiralar. Bu, taşıma gününde asansörün geç gelmesi veya hiç gelmemesi riski demektir. Araç ve asansörün firmaya ait olup olmadığını sorun; aitse ekip ve ekipman aynı planla hareket eder, adresinize hangi ekibin geleceği önceden bellidir.',
      },
      { type: 'h2', text: 'Yazılı sözleşme ve sigorta var mı?' },
      {
        type: 'p',
        text: 'Taşıma sözleşmesi, fiyatı ve kapsamı belgeleyen tek şeydir. Sözleşmede taşıma tarihi, iki adres, fiyat, fiyata dahil hizmetler ve sigorta kapsamı yer almalıdır. Sigorta konusunda net soru şudur: eşyada oluşabilecek hasar hangi tutara kadar karşılanıyor ve hasar durumunda süreç nasıl işliyor.',
      },
      { type: 'h2', text: 'Teklifleri karşılaştırırken aynı şeyi karşılaştırın' },
      {
        type: 'ul',
        items: [
          'Ambalaj malzemesi fiyata dahil mi, yoksa metrekare başına ayrı mı ücretlendiriliyor?',
          'Mobilya söküm ve yeni adreste montaj dahil mi?',
          'Mobil asansör ücreti teklifin içinde mi?',
          'Taşıma sigortası var mı, poliçe düzenleniyor mu?',
          'Verilen fiyat KDV dahil mi?',
        ],
      },
      { type: 'h2', text: 'Bölgeyi tanıyan firma zaman kazandırır' },
      {
        type: 'p',
        text: 'Ankara’nın her ilçesinin kendine özgü sorunları var: Keçiören’de dar sokaklar ve park sıkıntısı, Çankaya’da site kuralları ve trafik, Etimesgut ve Sincan’da geniş yerleşkeler arası mesafe. Bölgede yıllardır çalışan bir ekip, hangi sokağa aracın yanaşacağını ve hangi saatte yükleme yapılacağını önceden bilir. Bu bilgi taşıma süresini ve dolayısıyla maliyeti doğrudan düşürür.',
      },
    ],
  },
  {
    slug: 'nakliyat-sigortasi-nedir',
    title: 'Nakliyat Sigortası Nedir, Neyi Kapsar?',
    metaTitle: 'Nakliyat Sigortası Nedir? | Evden Eve Taşıma Sigortası',
    metaDescription:
      'Nakliyat sigortası nedir, evden eve taşımada neyi kapsar, hasar durumunda süreç nasıl işler? Sigortalı taşıma hakkında bilinmesi gerekenler.',
    excerpt:
      'Sigortalı taşıma denince akla gelen ilk soru, hasar çıkarsa ne olacağıdır. Nakliyat sigortasının kapsamını ve hasar sürecini sade bir dille anlattık.',
    date: '2026-09-12',
    readingMinutes: 5,
    image: {
      src: '/img/kamyon-ici-yukleme.webp',
      width: 1536,
      height: 2048,
      alt: 'Kamyon kasasında iple sabitlenmiş, balonlu naylonla sarılı dolaplar',
      title: 'Kasada sabitlenmiş eşyalar',
      caption: 'Sigorta, yazılı sözleşme olmadan hüküm ifade etmiyor.',
      description: 'Kapalı kasa kamyonun içinde balonlu naylon ve streç filmle sarılmış, yol boyunca kaymaması için iple sabitlenmiş dolaplar.',
    },
    body: [
      {
        type: 'p',
        text: 'Nakliyat sigortası, evden eve taşıma sırasında eşyanızda oluşabilecek hasarları güvence altına alan poliçedir. Sigortalı taşıma, firmanın dikkatli çalışacağının garantisi değil; her şeye rağmen bir şey olursa zararın karşılanacağının belgesidir. İkisini karıştırmamak, taşıma öncesi doğru soruları sormanızı sağlar.',
      },
      { type: 'h2', text: 'Poliçe neyi kapsar?' },
      {
        type: 'p',
        text: 'Standart bir evden eve nakliyat sigortası; yükleme, taşıma ve boşaltma sırasında eşyanın düşmesi, çarpması, kırılması ve araç kaynaklı kazalarda oluşan hasarları kapsar. Poliçede bir üst limit bulunur; bu limit taşınan eşyanın beyan edilen değerine göre belirlenir. Değerli bir eşyanız varsa (antika, piyano, sanat eseri) bunu taşıma öncesinde ayrıca beyan etmeniz gerekir.',
      },
      { type: 'h2', text: 'Neler kapsam dışında kalır?' },
      {
        type: 'ul',
        items: [
          'Müşterinin kendi paketlediği kolilerin içindeki kırılmalar genelde kapsam dışıdır.',
          'Eşyanın taşımadan önce var olan eskime ve çizikleri sayılmaz.',
          'Nakit para, mücevher ve resmi evrak poliçe kapsamına girmez; bunları kendinizde taşıyın.',
          'Elektronik cihazların iç arızaları, dış darbe izi yoksa tartışmalıdır.',
        ],
      },
      { type: 'h2', text: 'Hasar çıkarsa ne yapmalı?' },
      {
        type: 'p',
        text: 'Hasarı teslim anında, ekip hâlâ adresteyken tespit etmek en sağlıklısıdır. Hasarlı parçayı fotoğraflayın, taşıma sözleşmesinin arkasına yazdırın ve ekipten imza alın. Sonrasında firma sigorta şirketine dosyayı iletir. Eşya yerleştikten günler sonra ortaya çıkan hasarlarda, taşıma sırasında oluştuğunu kanıtlamak zorlaşır.',
      },
      { type: 'h2', text: 'Taşımadan önce yapılacak tek şey' },
      {
        type: 'p',
        text: 'Poliçenin taşıma tarihinden önce düzenlenmiş olduğundan emin olun ve bir kopyasını isteyin. Sigortası olduğunu söyleyip poliçe gösteremeyen bir firmayla çalışmayın. Biz Ankara içi ve çevre ilçe taşımalarının tamamında poliçeyi taşıma öncesinde düzenler, kopyasını sözleşmeyle birlikte veririz.',
      },
    ],
  },
  {
    slug: 'beyaz-esya-tasima-rehberi',
    title: 'Beyaz Eşya Taşıma: Buzdolabı ve Çamaşır Makinesi Kuralları',
    metaTitle: 'Beyaz Eşya Taşıma | Buzdolabı ve Makine Nakliyesi',
    metaDescription:
      'Beyaz eşya taşıma kuralları: buzdolabı neden dik taşınmalı, çamaşır makinesi nakliye vidaları, bulaşık makinesi ve fırın için taşıma hazırlığı.',
    excerpt:
      'Taşınmada en sık zarar gören eşyalar beyaz eşyalardır ve hasarların çoğu taşımadan değil, yanlış hazırlıktan çıkar. Doğru hazırlığı adım adım yazdık.',
    date: '2026-09-08',
    readingMinutes: 6,
    image: {
      src: '/img/ambalajli-dolaplar.webp',
      width: 1600,
      height: 901,
      alt: 'Taşımaya hazır, balonlu naylonla sarılmış iki büyük dolap',
      title: 'Ambalajlanmış büyük eşyalar',
      caption: 'Buzdolabı dik taşınır, indirildikten sonra en az altı saat çalıştırılmaz.',
      description: 'Taşıma öncesi balonlu naylon ve streç filmle sarılıp dik durumda bekletilen iki büyük dolap.',
    },
    body: [
      {
        type: 'p',
        text: 'Beyaz eşya taşıma, evden eve nakliyatın en çok hasar çıkan kalemidir ve bu hasarların büyük bölümü araçta değil, taşımadan önceki hazırlıkta yapılan hatalardan doğar. Buzdolabının kompresörü, çamaşır makinesinin tamburu ve bulaşık makinesinin su hattı, taşınmadan önce belirli bir şekilde hazırlanmadığında yolda zarar görür.',
      },
      { type: 'h2', text: 'Buzdolabı' },
      {
        type: 'p',
        text: 'Buzdolabı taşımadan en az 24 saat önce fişten çekilip boşaltılmalı, buzu çözülmeli ve biriken su tamamen alınmalıdır. Taşıma sırasında dolap mümkün olduğunca dik konumda taşınır; yatırmak zorunlu kalınırsa, yeni adreste fişe takmadan önce en az 6 saat dik bekletilmelidir. Bunun sebebi kompresördeki yağın soğutma hattına kaçmasıdır; beklenmeden çalıştırılan dolap soğutmaz.',
      },
      { type: 'h2', text: 'Çamaşır ve kurutma makinesi' },
      {
        type: 'p',
        text: 'Çamaşır makinesinin en kritik parçası tamburu sabitleyen nakliye vidalarıdır. Makine ilk kurulurken sökülen bu vidalar, taşımadan önce mutlaka geri takılmalıdır; takılmazsa tambur yolda salınır ve amortisörler zarar görür. Vidalar kayıpsa yetkili servisten temin edilebilir. Ayrıca su giriş ve tahliye hortumları sökülüp içindeki su boşaltılmalıdır.',
      },
      { type: 'h2', text: 'Bulaşık makinesi ve fırın' },
      {
        type: 'ul',
        items: [
          'Bulaşık makinesinin su hattı kapatılır, hortumlar sökülür ve makine eğilerek içindeki su tamamen boşaltılır.',
          'Ankastre fırın dolabından çıkarılırken elektrik bağlantısı yetkili kişi tarafından ayrılmalıdır.',
          'Fırın rafları ve tepsileri çıkarılıp ayrı paketlenir, cam kapak strafor veya battaniyeyle korunur.',
          'Ocak, doğalgaz bağlantısı yetkili servis tarafından sökülmeden taşınmaz.',
        ],
      },
      { type: 'h2', text: 'Taşıma ve yeni adreste kurulum' },
      {
        type: 'p',
        text: 'Beyaz eşya araca en son yüklenir ve ilk indirilir; böylece yeni adreste hemen yerine konur ve dinlenmeye bırakılır. Biz taşımalarımızda beyaz eşyayı battaniye ve streçle sarar, araç içinde kuşakla sabitleriz. Yeni adreste su ve elektrik bağlantılarını ekip yapar; doğalgaz bağlantısı için yetkili servis gerektiğini taşımadan önce hatırlatırız.',
      },
    ],
  },
  {
    slug: 'ofis-tasima-rehberi',
    title: 'Ankara Ofis Taşıma: İşi Durdurmadan Taşınmak',
    metaTitle: 'Ankara Ofis Taşıma Rehberi | İş Kaybı Olmadan Taşınma',
    metaDescription:
      'Ankara ofis taşıma sürecini planlama rehberi: numaralandırma sistemi, sunucu ve bilgisayar taşıma, hafta sonu taşıma planı ve dosya arşivi düzeni.',
    excerpt:
      'Ofis taşımada asıl maliyet eşya değil, kapalı geçen iş günüdür. Taşımayı iş kaybı olmadan bitirmenin yolunu adım adım anlattık.',
    date: '2026-09-06',
    readingMinutes: 7,
    image: {
      src: '/img/paketli-esyalar-oda.webp',
      width: 1200,
      height: 600,
      alt: 'Boş odada paketlenmiş halde yüklemeyi bekleyen mobilyalar',
      title: 'Yüklemeyi bekleyen paketli eşyalar',
      caption: 'Ofis taşımasını hafta sonuna almak, iş kaybını neredeyse sıfırlıyor.',
      description: 'Boşaltılmış bir odada balonlu naylonla paketlenmiş, yükleme sırasını bekleyen mobilya ve parçalar.',
    },
    body: [
      {
        type: 'p',
        text: 'Ankara ofis taşıma işlerinde asıl maliyet, taşınan masa ve dolaplar değil; ofisin kapalı kaldığı süredir. Bu yüzden ofis taşıma, evden eve nakliyattan farklı planlanır: hedef eşyayı taşımak değil, ertesi sabah herkesin oturup çalışabileceği bir ofis teslim etmektir. Aşağıdaki plan, Ankara’da taşıdığımız ofislerde uyguladığımız sıralamadır.',
      },
      { type: 'h2', text: 'Numaralandırma sistemi' },
      {
        type: 'p',
        text: 'Taşımadan önce yeni ofisin yerleşim planı çıkarılır ve her çalışanın masasına bir numara verilir. Aynı numara, o masadan çıkan tüm kolilere, bilgisayara ve kişisel dolaba yapıştırılır. Yeni adreste eşya doğrudan numaralı yerine gider; kimse kutusunu aramaz. Bu tek uygulama, yerleşme süresini yarıya indirir.',
      },
      { type: 'h2', text: 'Bilgisayar, sunucu ve kablolama' },
      {
        type: 'ul',
        items: [
          'Her bilgisayarın kablo düzeni sökülmeden önce fotoğraflanır, yeni adreste aynı şekilde kurulur.',
          'Sunucu ve network dolabı en son sökülür, yeni adreste ilk kurulan şey olur.',
          'Sabit disklerin yedeği taşımadan önce alınır; bu sorumluluk firmanın değil, işletmenindir.',
          'Monitörler orijinal kutusu yoksa köşe koruyuculu özel kolilerle taşınır.',
        ],
      },
      { type: 'h2', text: 'Dosya arşivi' },
      {
        type: 'p',
        text: 'Arşiv, ofis taşımanın en çok vakit alan kısmıdır. Klasörler raf sırası bozulmadan, kilitli taşıma kasalarına dizilerek taşınır ve yeni adreste aynı sırayla raflara yerleştirilir. Gizlilik içeren evrak için kasalar mühürlenir ve sadece yetkili kişi açar. Bu yöntem hem evrak kaybını hem de yeni ofiste haftalarca süren düzenleme işini ortadan kaldırır.',
      },
      { type: 'h2', text: 'Taşıma zamanı' },
      {
        type: 'p',
        text: 'Ofis taşımalarını mümkün olduğunca cuma akşamı başlatıp pazar akşamı bitiriyoruz; böylece pazartesi sabahı çalışma düzeni kurulmuş oluyor. Ankara’da plaza ve iş merkezlerinde yük asansörü kullanımı için yönetimden saat almak gerekir, bunu taşımadan bir hafta önce ayarlıyoruz. Küçük ofislerde tek gün yeterli oluyor.',
      },
    ],
  },
  {
    slug: 'esya-depolama-rehberi',
    title: 'Eşya Depolama: Ne Zaman Gerekir, Nelere Dikkat Edilir?',
    metaTitle: 'Ankara Eşya Depolama | Güvenli Depolama Nasıl Olmalı?',
    metaDescription:
      'Ankara eşya depolama hizmeti ne zaman gerekir, depoda eşya nasıl korunur, nem ve sıcaklık neden önemli? Depolama öncesi hazırlık rehberi.',
    excerpt:
      'Yeni eve giriş tarihi ileriye kaydığında eşyanın bir yerde beklemesi gerekir. Depolamada eşyanın zarar görmemesi için bilinmesi gerekenleri yazdık.',
    date: '2026-09-04',
    readingMinutes: 5,
    image: {
      src: '/img/ambalajli-kanepe.webp',
      width: 901,
      height: 1600,
      alt: 'Streç film ve balonlu naylonla sarılıp dik bekletilen kanepe',
      title: 'Depolamaya hazır ambalajlı kanepe',
      caption: 'Depoya giren her kasa listelenmezse, çıkarken aranan eşya bulunmuyor.',
      description: 'Depolama veya taşıma için balonlu naylon ve streç filmle tamamen sarılmış, dik konumda bekletilen kanepe.',
    },
    body: [
      {
        type: 'p',
        text: 'Ankara eşya depolama ihtiyacı çoğunlukla plansız doğar: eski evden çıkış tarihi ile yeni eve giriş tarihi arasında birkaç hafta veya birkaç ay boşluk kalır. Bu dönemde eşyanın bir garajda ya da tanıdık deposunda beklemesi, taşınmanın en çok hasar üreten kısmıdır. Doğru depolama, eşyayı taşımak kadar teknik bir iştir.',
      },
      { type: 'h2', text: 'Depoda nem ve sıcaklık' },
      {
        type: 'p',
        text: 'Ahşap mobilya, deri koltuk ve elektronik cihaz için asıl tehlike nemdir. Nemli bir ortamda ahşap şişer, sünger küflenir, metal aksam paslanır. Depolama alanının kuru, havalandırmalı ve zemininden rutubet almayan bir yer olması gerekir. Eşya asla doğrudan betona konulmaz; paletle zeminden yükseltilir.',
      },
      { type: 'h2', text: 'Depolama öncesi hazırlık' },
      {
        type: 'ul',
        items: [
          'Tüm eşya depoya girmeden önce temizlenir ve tamamen kurutulur; nemli giren eşya küflenir.',
          'Koltuk ve yatak nefes alan örtüyle sarılır, streçle tamamen kapatılmaz.',
          'Buzdolabı boşaltılıp kurutulur ve kapağı hafif aralık bırakılır.',
          'Her koli numaralandırılır ve içeriği liste hâlinde kayda geçer.',
          'Kitap ve evrak nem almaması için zeminden yüksek raflara konur.',
        ],
      },
      { type: 'h2', text: 'Depolamada sorulacak sorular' },
      {
        type: 'p',
        text: 'Depoya bırakacağınız firmadan şunları isteyin: eşya listesi ve teslim tutanağı, depolama süresince geçerli sigorta, eşyanıza ne zaman ulaşabileceğiniz bilgisi ve aylık ücretin net tutarı. Eşyanızın başka müşterilerin eşyasıyla karışmayacak şekilde ayrı bölmede tutulup tutulmadığını da sorun.',
      },
      { type: 'h2', text: 'Depodan çıkış' },
      {
        type: 'p',
        text: 'Eşya depodan çıkarken teslim alınırken hazırlanan liste üzerinden tek tek kontrol edilir. Biz depolama hizmetinde eşyayı taşıyan ekiple depodan çıkaran ekibi aynı tutarız; eşyanın nasıl paketlendiğini bilen kişi, yeni adreste montajı da en hızlı yapan kişidir.',
      },
    ],
  },
  {
    slug: 'evden-eve-nakliyat-ne-kadar-surer',
    title: 'Evden Eve Nakliyat Ne Kadar Sürer?',
    metaTitle: 'Evden Eve Nakliyat Ne Kadar Sürer? | Ankara Taşıma Süreleri',
    metaDescription:
      'Evden eve nakliyat ne kadar sürer? 1+1’den 5+1’e ortalama taşıma süreleri, asansörün ve kat farkının süreye etkisi, aynı gün teslim şartları.',
    excerpt:
      'Taşınma gününü planlarken en çok sorulan soru bu. Ev tipine ve kat durumuna göre gerçekçi süreleri ve süreyi uzatan şeyleri yazdık.',
    date: '2026-09-02',
    readingMinutes: 5,
    image: {
      src: '/img/ankara-tasima-kare.webp',
      width: 1254,
      height: 1254,
      alt: 'Ankara Taşıma ekibi paketlenmiş eşyaları kamyona yüklüyor',
      title: 'Yükleme sırasında Ankara Taşıma ekibi',
      caption: 'Asansör kurulumu 20 dakika sürüyor, gerisini kat ve mesafe belirliyor.',
      description: 'Ankara Taşıma ekibinin ambalajlı koltukları ve odası yazılı kolileri kapalı kasa kamyona yüklediği an.',
    },
    body: [
      {
        type: 'p',
        text: 'Evden eve nakliyat ne kadar sürer sorusunun tek bir cevabı yok, ama Ankara içinde yaptığımız taşımalardan çıkan oldukça net ortalamalar var. Standart bir 2+1 daire, asansörle ve ambalaj hizmeti dahil olmak üzere yaklaşık 5-6 saatte yeni adreste kurulmuş oluyor. Aşağıda ev tipine göre gerçekçi süreleri ve bu süreyi uzatan şeyleri sıraladık.',
      },
      { type: 'h2', text: 'Ev tipine göre ortalama süre' },
      {
        type: 'ul',
        items: [
          '1+1 daire: paketleme dahil yaklaşık 4-5 saat.',
          '2+1 daire: yaklaşık 5-6 saat.',
          '3+1 daire: yaklaşık 6-8 saat, çoğu taşıma aynı gün biter.',
          '4+1 ve 5+1: 8-10 saat; eşya yoğunsa iki güne yayılabilir.',
          'Parça eşya: 1-2 saat.',
        ],
      },
      { type: 'h2', text: 'Süreyi uzatan şeyler' },
      {
        type: 'p',
        text: 'Süreyi en çok uzatan üç şey şunlardır: asansörsüz yüksek kat, sokağa aracın girememesi ve müşterinin paketlemeyi taşıma sabahına bırakmış olması. Asansörsüz 5. kattan yapılan bir taşıma, aynı evin mobil asansörle taşınmasına göre üç dört saat daha uzun sürebilir. Aracın sokağa girememesi durumunda eşyanın küçük araçla aktarılması gerekir, bu da bir iki saat ekler.',
      },
      { type: 'h2', text: 'Aynı gün teslim için ne yapmalı' },
      {
        type: 'p',
        text: 'Taşımanın aynı gün bitmesi için tek gerçek şart, sabah erken başlamaktır. Ankara içi taşımalarda 07:30-08:00 arasında yüklemeye başlayan bir ekip, öğleden sonra yeni adreste montaja geçer. Paketlemeyi biz yapacaksak, bir gün önceden gelip kolileme yapmamız taşıma gününü belirgin şekilde kısaltır.',
      },
      { type: 'h2', text: 'Montaj süreye dahil mi?' },
      {
        type: 'p',
        text: 'Evet. Verdiğimiz süreler, mobilyanın yeni adreste kurulup yerine yerleştirilmesini de kapsar. Taşıma, eşyanın kapıya bırakılmasıyla değil; yatak odası takımı kurulup, beyaz eşya bağlantıları yapılıp ev yaşanabilir hâle geldiğinde biter.',
      },
    ],
  },
  {
    slug: 'abonelik-ve-adres-nakli-rehberi',
    title: 'Taşınırken Abonelik Nakli: Elektrik, Su, Doğalgaz ve İnternet',
    metaTitle: 'Taşınırken Abonelik ve Adres Nakli',
    metaDescription:
      'Taşınırken elektrik, su, doğalgaz ve internet aboneliği nasıl nakledilir, adres değişikliği nereden yapılır? Sırasıyla ne zaman ne yapılacağını yazdık.',
    excerpt:
      'Taşınmanın eşyayla hiç ilgisi olmayan bir tarafı var: abonelikler ve resmi adres. Sırası karışınca yeni evde elektrik kesik, eski evin faturası hâlâ üstünüzde kalıyor.',
    date: '2026-09-22',
    readingMinutes: 8,
    image: {
      src: '/img/paketli-esyalar-oda.webp',
      width: 1200,
      height: 600,
      alt: 'Boş odada balonlu naylonla paketlenmiş, yüklemeyi bekleyen mobilyalar',
      title: 'Taşınmaya hazır, paketlenmiş ev eşyası',
      caption: 'Eşya hazır olduğunda aboneliklerin de hazır olması gerekiyor; ikisi ayrı takvim.',
      description: 'Boşaltılmış bir odada balonlu naylonla sarılıp streçlenmiş koltuk, yatak ve dolap parçaları; yükleme sırasını bekliyor.',
    },
    body: [
      {
        type: 'p',
        text: 'Taşınmanın eşyayla hiç ilgisi olmayan bir tarafı var: abonelikler ve resmi adres. Bunlar taşıma gününde değil, öncesinde ve sonrasında halledilen işler. Sırası karışınca yeni eve girdiğiniz gün elektrik kesik oluyor, eski evin faturası aylarca üstünüze işlemeye devam ediyor. Ankara’da evden eve nakliyat yaptığımız ailelere anlattığımız sırayı burada topladık.',
      },
      { type: 'h2', text: 'Nakil mi, kapatıp yeniden açtırmak mı?' },
      {
        type: 'p',
        text: 'İki yol var. Aboneliği yeni adrese nakletmek, sözleşmeyi taşımak demek; güvence bedeliniz genellikle sizde kalır ve işlem daha hızlı yürür. Kapatma ve yeni abonelik ise eski adresle bağınızı tamamen keser, yeni adreste sıfırdan sözleşme açılır. Eski evi devrettiyseniz ya da arkanızdan hemen başka biri oturacaksa kapatma daha temiz sonuç verir.',
      },
      {
        type: 'p',
        text: 'Hangisini seçerseniz seçin, eski adresteki sayaç okumasının taşındığınız güne göre yapılması önemli. O tarihten sonra tüketilen hiçbir şey sizin faturanıza girmemeli.',
      },
      { type: 'h2', text: 'Elektrik aboneliği nasıl nakledilir?' },
      {
        type: 'p',
        text: 'Elektrik genellikle en hızlı halledilen kalem. Bölgenizdeki perakende satış şirketine başvurup nakil ya da kapama talebi açıyorsunuz. Yeni adres için sözleşme açarken kimlik, adres bilgisi ve çoğu zaman tapu veya kira sözleşmesi isteniyor. Yeni evde sayaç kapalıysa açılması için ayrı bir talep gerekebiliyor; bu yüzden başvuruyu taşınma gününe bırakmayın.',
      },
      {
        type: 'p',
        text: 'Eski evden çıkarken sayaç değerini fotoğraflayın. Tarihli bir fotoğraf, sonradan çıkan bir tüketim itirazında elinizdeki tek somut kayıt oluyor.',
      },
      { type: 'h2', text: 'Su aboneliği ve DASK' },
      {
        type: 'p',
        text: 'Su aboneliği belediyenin su idaresine bağlı; Ankara’da işlem ASKİ üzerinden yürüyor. Burada da eski adreste kapama, yeni adreste açma diye iki ayrı iş var. Su aboneliği açılırken kimlik, tapu ya da kira sözleşmesi ve çoğu binada DASK poliçesi isteniyor. Poliçeniz yoksa ya da süresi geçtiyse işlem takılır, bu yüzden yeni eve geçmeden önce kontrol edin.',
      },
      {
        type: 'p',
        text: 'Kapama işlemini taşındıktan sonraya bırakmayın. Eski adreste su açık kaldığı sürece, orada kim oturursa otursun tüketim sizin aboneliğinize işlemeye devam eder.',
      },
      { type: 'h2', text: 'Doğalgaz en çok zaman isteyen kalem' },
      {
        type: 'p',
        text: 'Doğalgazda işin içinde randevu olduğu için süre uzuyor. Eski adreste aboneliği kapatmak ve yeni adreste açtırmak için başvuru yapılıyor, ardından sayaç açma ve gaz verme için teknik ekip randevusu veriliyor. Yoğun dönemlerde bu randevu birkaç gün ileriye düşebiliyor. Kışın taşınıyorsanız gaz randevusunu ilk halledeceğiniz iş olarak planlayın; yoksa yeni evde birkaç gün ısıtmasız kalırsınız.',
      },
      {
        type: 'p',
        text: 'Kombi sökümü ve montajı ayrı bir konu. Kombi nakliyat firmasının değil, markanın yetkili servisinin işidir. Biz kombiyi paketleyip taşırız ama söküp takmayız; servis randevusunu taşımadan önceye ayarlamanız gerekiyor. Aynı şey split klimalar için de geçerli, çünkü sökümden önce gazın toplanması lazım.',
      },
      { type: 'h2', text: 'İnternet ve telefon nakli' },
      {
        type: 'p',
        text: 'İnternet nakli çoğu operatörde çevrim içi yapılabiliyor ve genellikle bir kurulum randevusu içeriyor. Yeni adreste altyapının durumu değişebildiği için başvuruyu taşınma tarihinden bir iki hafta önce yapmak en doğrusu. Altyapı uygun değilse operatör değiştirmek gerekebiliyor ve bu iş tek başına bir haftayı bulabiliyor.',
      },
      {
        type: 'p',
        text: 'Modemi, kablolarını ve varsa uydu alıcısını kendi yanınızda bir çantada taşıyın. Modem koliye girdiğinde yeni evde ilk aranan şey oluyor ve bulunması saat alıyor.',
      },
      { type: 'h2', text: 'Resmi adres değişikliği' },
      {
        type: 'p',
        text: 'Adres değişikliği e-Devlet üzerinden yapılabiliyor, çoğu durumda nüfus müdürlüğüne gitmeye gerek kalmıyor. Adresinizi güncellemediğiniz sürece bankadan, vergi dairesinden, okuldan ve sağlık kurumlarından gelen yazışmalar eski adrese gitmeye devam eder. Taşındıktan sonraki ilk hafta içinde halletmekte fayda var.',
      },
      {
        type: 'p',
        text: 'Adres güncellemesini yaptıktan sonra haber vermeniz gereken yerler de var:',
      },
      {
        type: 'ul',
        items: [
          'Banka ve kredi kartı şirketleri',
          'Sigorta şirketiniz ve DASK poliçeniz',
          'Çocuğun okulu ve servis şirketi',
          'Aile hekimi kaydı',
          'Kargo ve e-ticaret hesaplarındaki kayıtlı adresler',
          'İş yerinizin insan kaynakları birimi',
        ],
      },
      { type: 'h2', text: 'Gözden kaçan abonelikler' },
      {
        type: 'ul',
        items: [
          'Apartman aidatı ve yönetim kaydı; eski binada kaydınızın kapandığından emin olun.',
          'Dijital yayın, uydu ve spor salonu üyelikleri.',
          'Ayrı kiraladığınız otopark ya da depo varsa sözleşmeleri.',
          'Eski adrese tanımlı otomatik ödeme talimatları; iptal etmezseniz başkasının faturasını ödemeye devam edebilirsiniz.',
        ],
      },
      { type: 'h2', text: 'Hangi işi ne zaman yapmalı?' },
      {
        type: 'ul',
        items: [
          'Taşınmaya iki hafta kala: internet nakil başvurusu, doğalgaz randevusu, elektrik ve su için nakil ya da kapama talebi.',
          'Taşınmaya bir hafta kala: kombi ve klima için yetkili servis randevusu, DASK poliçesinin kontrolü.',
          'Taşınma günü: eski adreste elektrik, su ve gaz sayaçlarının tarihli fotoğrafı.',
          'İlk hafta içinde: e-Devlet’ten adres değişikliği, banka ve sigorta bildirimleri, otomatik ödeme talimatlarının güncellenmesi.',
        ],
      },
      { type: 'h2', text: 'Eşya tarafını biz üstleniyoruz' },
      {
        type: 'p',
        text: 'Abonelikler sizin takip etmeniz gereken kısım; ambalaj, söküm, yükleme, taşıma ve yeni adreste montaj bizim işimiz. Taşıma günü sizden tek istediğimiz, hangi eşyanın nereye gideceğini söylemeniz.',
      },
      {
        type: 'p',
        text: 'Ankara içinde ya da şehirler arası taşınacaksanız ücretsiz keşif için bize ulaşabilirsiniz. Taşınmadan önce yapılacakların tamamını da ayrı bir yazıda iki haftalık liste hâlinde topladık.',
      },
    ],
  },
  {
    slug: 'kisin-tasinmak-rehberi',
    title: 'Kışın Taşınmak: Soğukta ve Karda Ev Taşıma Rehberi',
    metaTitle: 'Kışın Taşınmak: Soğukta Ev Taşıma Rehberi',
    metaDescription:
      'Kışın taşınırken kar, buz ve soğuk taşımayı nasıl etkiler? Hangi eşya dondan zarar görür, araç nereye yanaşır, gün nasıl planlanır? Saha notlarımız.',
    excerpt:
      'Kışın taşınmak sanıldığı kadar zor değil, ama yazdan farklı planlanıyor. Kar, buz ve kısa gün taşımanın üç ayrı yerine dokunuyor.',
    date: '2026-09-29',
    readingMinutes: 8,
    image: {
      src: '/img/ambalajli-dolaplar.webp',
      width: 1600,
      height: 901,
      alt: 'Balonlu naylon ve streç filmle sarılıp odada yüklemeyi bekleyen iki uzun dolap',
      title: 'Naylonla sarılmış dolaplar',
      caption: 'Kışın ambalaj sadece çiziğe karşı değil, kar ve yağmur suyuna karşı da çalışıyor.',
      description: 'Boşaltılmış bir odada mavi balonlu naylonla kaplanıp streç filmle sarılmış, yüklemeyi bekleyen iki uzun dolap.',
    },
    body: [
      {
        type: 'p',
        text: 'Ankara’da kış taşımaları yazdan daha sakin geçer, çünkü yoğunluk düşüktür ve istediğiniz tarihi bulmak kolaydır. Ama plan aynı plan değildir. Kar, buz ve günün erken kararması taşımanın üç ayrı yerine dokunur: aracın nereye yanaşacağına, eşyanın nasıl ambalajlanacağına ve işin kaçta başlaması gerektiğine. Aşağıdakiler sahada öğrendiklerimiz.',
      },
      { type: 'h2', text: 'Kışın taşınmanın iyi tarafı' },
      {
        type: 'p',
        text: 'Ev taşıma trafiği yaz aylarında ve ay sonlarında yoğunlaşır. Kışın tarih bulmak çok daha rahattır, ekip ve araç aynı gün içinde tek işe ayrılabilir. Asansör aracı da benzer şekilde daha müsait olur. Taşınma tarihiniz esnekse kış, iş kalitesi açısından dezavantajlı bir dönem değil.',
      },
      { type: 'h2', text: 'Hava durumunu tarihten önce takip edin' },
      {
        type: 'p',
        text: 'Taşımadan birkaç gün önce hava tahminine bakın ve kar beklenen bir güne denk geliyorsa bizimle konuşun. Tarihi bir gün öne ya da arkaya almak çoğu zaman mümkün olur ve bütün günü kolaylaştırır. Kar yağışının kendisinden çok, gece donup sabah buz tutan yollar sorun çıkarır.',
      },
      { type: 'h2', text: 'Araç nereye yanaşacak?' },
      {
        type: 'p',
        text: 'Kışın en sık yaşanan aksaklık, aracın binaya yanaşamamasıdır. Kar küreme sonrası yol kenarına yığılan kar, park yerlerini kapatır; eğimli sokaklarda buz varsa büyük araç rampayı çıkamaz. Keşif sırasında bunları konuşuyoruz, ama taşımadan bir gün önce sizin de bakmanız iyi olur:',
      },
      {
        type: 'ul',
        items: [
          'Bina önünde aracın duracağı yeri boş tutun, gerekiyorsa apartman yönetimiyle konuşun.',
          'Kaldırım ve giriş yolundaki karı bir gün önceden temizletin.',
          'Buz varsa girişe ve merdivenlere tuz ya da kum atın.',
          'Sokak dar ve eğimliyse bunu bize önceden söyleyin, aracı ona göre seçelim.',
        ],
      },
      { type: 'h2', text: 'Kapı önü ve zemin koruması' },
      {
        type: 'p',
        text: 'Kışın eşyadan çok ev zarar görür. Islak ayakkabılar, kar suyu ve çamur parkeyi ve halıyı lekeler. Biz iki adreste de giriş yoluna ve koridorlara koruyucu örtü seriyoruz, ama siz de eski bir halıyı kapı önüne koyarsanız iş daha temiz biter. Yeni eve ilk giren kolilerin dibi ıslanmasın diye kolileri doğrudan zemine değil, palet ya da örtü üstüne koyuyoruz.',
      },
      { type: 'h2', text: 'Soğuktan etkilenen eşyalar' },
      {
        type: 'p',
        text: 'Kapalı kasa araçta eşya kar ve yağmurdan korunur, ancak kasa ısıtmalı değildir. Yolda geçen sürede içerisi dışarıyla aynı sıcaklığa iner. Bunun etkilediği birkaç eşya var:',
      },
      {
        type: 'ul',
        items: [
          'Televizyon ve monitör: soğuktan gelen ekranda yoğuşma olur. Yeni evde hemen fişe takmayın, birkaç saat oda sıcaklığında beklesin.',
          'Ahşap mobilya ve piyano: ani sıcaklık ve nem değişimi cilada çatlama yapabilir. Ambalajı yeni evde hemen açmayın, eşya ortama alışsın.',
          'Sıvılar: temizlik malzemesi, içecek ve boya donarak kabını patlatabilir. Bunları kendi aracınızda taşıyın.',
          'Bitkiler: birkaç dakikalık soğuk bile hassas bitkiyi yakar. Saksıları en son yükleyip en önce indiriyoruz, siz de yanınızda götürebilirsiniz.',
          'İlaç ve kozmetik: donmaması gereken ürünleri el çantanızda tutun.',
        ],
      },
      { type: 'h2', text: 'Beyaz eşyada donma riski' },
      {
        type: 'p',
        text: 'Çamaşır ve bulaşık makinesinin pompasında, hortumunda ve filtresinde her zaman bir miktar su kalır. Bu su eksi derecede donar ve plastik parçaları çatlatır. Taşımadan önce makineyi boşaltın: filtreyi açıp suyunu alın, giriş ve tahliye hortumlarını söküp ters çevirin. Çamaşır makinesinin nakliye cıvatalarını takmayı da unutmayın, bu her mevsim geçerli.',
      },
      {
        type: 'p',
        text: 'Buzdolabını ise taşımadan en az birkaç saat önce kapatıp suyunu boşaltın ve yeni adreste fişe takmadan önce dik bekletin. Beyaz eşyanın tamamının nasıl paketlendiğini ayrı bir yazıda anlattık.',
      },
      { type: 'h2', text: 'Yeni evde ısınma hazır olsun' },
      {
        type: 'p',
        text: 'Kışın en can sıkıcı durum, eşya yerleştikten sonra evin soğuk olmasıdır. Doğalgaz açma randevusunu ve kombi montajını taşıma gününden önceye alın. Elektrik aboneliği de aynı şekilde taşınmadan önce açılmış olsun; kısa günde ışıksız ev, montajı da yavaşlatır.',
      },
      { type: 'h2', text: 'Gün kısa, iş erken başlar' },
      {
        type: 'p',
        text: 'Kışın hava erken kararır ve karanlıkta yükleme hem yavaşlar hem risklidir. Bu yüzden kış taşımalarında sabah erken başlıyoruz. Paketleme bir gün önceden bitmişse, ekip geldiğinde doğrudan yüklemeye geçilir ve iş gün ışığında biter.',
      },
      {
        type: 'ul',
        items: [
          'Paketlemeyi taşıma sabahına bırakmayın.',
          'Taşıma gününde ilk ihtiyaç kutusuna termos, sıcak içecek ve ekstra kıyafet koyun.',
          'İki adreste de ışıkların çalıştığından emin olun.',
          'Kapılar uzun süre açık kalacağı için evdeki çocuk ve evcil hayvan için ayrı bir oda ayırın.',
        ],
      },
      { type: 'h2', text: 'Kışa özel kısa liste' },
      {
        type: 'ul',
        items: [
          'Hava tahminini takip edin, gerekirse tarihi bir gün kaydırın.',
          'Araç yanaşma yerini ve giriş yolunu bir gün önceden karsız ve buzsuz hâle getirin.',
          'Makinelerin içindeki suyu boşaltın.',
          'Sıvıları, bitkileri ve ekranları ayrı planlayın.',
          'Yeni evde gaz ve elektrik açık olsun.',
          'Sabah erken başlayın.',
        ],
      },
      {
        type: 'p',
        text: 'Kış taşımalarında ambalajı daha kalın kullanıyor, iki adreste de zemin koruması yapıyor ve günü gün ışığına göre planlıyoruz. Ankara içinde ya da şehirler arası taşınacaksanız ücretsiz keşif için bize ulaşabilirsiniz; tarihi önceden ayırtmak kışın çok daha kolay.',
      },
    ],
  },
  {
    slug: 'mobilya-sokum-ve-montaj-rehberi',
    title: 'Mobilya Söküm ve Montaj: Taşınmada Nelere Dikkat Ediyoruz',
    metaTitle: 'Mobilya Söküm ve Montaj Rehberi',
    metaDescription:
      'Mobilya söküm ve montajda hangi parça sökülür, vidalar nasıl saklanır, suntada neye dikkat edilir? Ankara’da sahada uyguladığımız yöntemi anlattık.',
    excerpt:
      'Taşınmada hasarın çoğu söküm ve montaj sırasında çıkar. Hangi mobilya sökülür, vidalar nerede durur, montaj yeni eve göre nasıl yapılır?',
    date: '2026-10-06',
    readingMinutes: 7,
    image: {
      src: '/img/paketlenmis-mobilyalar.webp',
      width: 1047,
      height: 1119,
      alt: 'Parçalarına ayrılıp kırmızı ve mavi nakliye örtüleriyle sarılmış koltuk takımı ve yataklar',
      title: 'Ambalajlanmış koltuk takımı parçaları',
      caption: 'Sökülen parçalar ayrı ayrı sarılıp yüklemeden önce aynı odada toplanıyor.',
      description: 'Boşaltılmış bir odada, kırmızı ve mavi nakliye örtüleriyle kaplanıp streç filmle sarılmış koltuk, berjer, puf ve yatak parçaları yan yana bekliyor.',
    },
    body: [
      {
        type: 'p',
        text: 'Taşınmada hasarın çoğu kırılan bir bardaktan değil, yanlış sökülen bir mobilyadan çıkar. İş görünüşte basittir, bir tornavida bulan herkes başlayabilir. Ama mobilyanın hangi sırayla açılacağını, hangi parçanın ikinci montaja dayanmayacağını ve yeni evde neyin değişeceğini bilmek gerekir. Aşağıda Ankara’da her hafta yaptığımız söküm ve montaj işinde nelere dikkat ettiğimizi anlattık.',
      },
      { type: 'h2', text: 'Hangi mobilya sökülür, hangisi sökülmeden taşınır?' },
      {
        type: 'p',
        text: 'Her mobilyayı sökmek gerekmiyor. Söküm, parçayı küçültüp kapıdan, merdivenden ya da asansörden geçirmek için yapılan bir iştir. Eşya olduğu gibi çıkabiliyorsa ya da binada mobil asansör kurulabiliyorsa sökmeden taşımayı tercih ediyoruz, çünkü her söküm mobilyanın birleşim noktalarını bir kez daha yorar. Genel ayrımımız şöyle:',
      },
      {
        type: 'ul',
        items: [
          'Genelde sökülenler: gardırop, karyola ve baza, yemek masası ayakları, büyük televizyon ünitesi, raflı kitaplık, köşe koltuk modülleri.',
          'Genelde sökülmeyenler: tek parça koltuk ve berjer, komodin, şifonyer, küçük sehpa, beyaz eşya.',
          'Sökmesi riskli olanlar: çok eski masif dolaplar, cam kapaklı vitrinler, marangoz işi özel mobilyalar. Bunları zorunlu kalmadıkça açmıyoruz.',
        ],
      },
      { type: 'h2', text: 'Sökülmeyen mobilya kapıdan çıkmazsa' },
      {
        type: 'p',
        text: 'Bazı mobilyalar ya hiç sökülmez ya da sökülmesi mobilyayı bitirir. Tek parça masif yemek masası, büyük cam vitrin ve bazı köşe koltuklar böyledir. Kapıdan, sahanlıktan ve asansör kabininden geçmiyorsa iki yolumuz kalır: balkondan ya da pencereden asansörle almak, veya o mobilyayı taşımamaya karar vermek. Keşifte kapı genişliğini, merdiven sahanlığını ve balkon korkuluğunu ölçmemizin sebebi bu. Ölçüyü taşıma sabahı değil, tarih verirken bilmek istiyoruz.',
      },
      { type: 'h2', text: 'Söküme başlamadan fotoğraf çekiyoruz' },
      {
        type: 'p',
        text: 'Montajda en çok vakit, parçanın hangi yöne baktığını hatırlamaya çalışırken gider. Bu yüzden söküme başlamadan mobilyanın birkaç açıdan fotoğrafını alıyoruz. Arkalığın yönü, rafların sırası, menteşenin tarafı ve kapak hizası fotoğraftan çok hızlı anlaşılıyor. Siz de kendi telefonunuzdan birkaç kare çekerseniz, yeni evde kapak hizasını tartışmak zorunda kalmazsınız.',
      },
      { type: 'h2', text: 'Vidalar nereye gidiyor?' },
      {
        type: 'p',
        text: 'Kaybolan bir vida, montajı saatlerce uzatabilen tek şeydir. Bütün vidaları aynı kutuda toplamak pratik görünür, ama yeni evde hangi vidanın nereye ait olduğunu ayırmak uzun sürer. Bizim yöntemimiz basit:',
      },
      {
        type: 'ul',
        items: [
          'Her mobilyanın vidası, dübeli ve küçük parçası kendi kilitli poşetine girer.',
          'Poşetin üstüne mobilyanın adı yazılır.',
          'Poşet, ait olduğu parçanın üstüne bantlanır.',
          'Sökülen menteşe, kulp ve mobilyadan çıkan montaj anahtarı da aynı poşette durur.',
        ],
      },
      { type: 'h2', text: 'Suntada tek şansınız vardır' },
      {
        type: 'p',
        text: 'Masif ahşap mobilya sökülüp yeniden toplanmaya nispeten dayanıklıdır. Sunta ve MDF ise öyle değil. Vida bir kez söküldüğünde yuvası genişler, ikinci montajda aynı sıkılığı vermez. Bu yüzden sunta mobilyada gereksiz söküm yapmıyor, zorunlu olduğunda da vidayı aşırı sıkmadan çalışıyoruz. Yuvası boşalmış bir vida için yeni evde dübel ya da tutkal gerekiyorsa bunu o anda size söylüyoruz, sonradan sallanan bir dolapla karşılaşmayın.',
      },
      {
        type: 'p',
        text: 'Mobilyanın dış yüzeyi de en az birleşim yerleri kadar hassas. Söktüğümüz her parçayı ayrı sarıyor, kapakları ve cam rafları kendi başına ambalajlıyoruz. Hangi malzemenin nerede kullanıldığını eşya paketleme yazımızda ayrıntılı anlattık.',
      },
      { type: 'h2', text: 'Gardırop, karyola ve yatak odası' },
      {
        type: 'p',
        text: 'Yatak odası, sökümün en çok işe yaradığı yer. Gardıropta önce kapaklar çıkar, sonra raflar alınır, en son gövde yan panellere ayrılır. Aynalı kapaklar ayrı sarılır ve yatay istiflenmez, ayakta taşınır. Karyolada baza ile başlık ayrılır, baza sandıklıysa kapağı taşıma boyunca sabitlenir. Yatağı katlamıyoruz; yatak kılıfına geçirip düz taşıyoruz, çünkü katlanan yaylı yatak eski hâline dönmüyor.',
      },
      { type: 'h2', text: 'Mutfak, ankastre ve duvara sabit parçalar' },
      {
        type: 'p',
        text: 'Mutfak dolapları çoğu taşımada yerinde kalır, ama ankastre fırın, ocak ve davlumbaz sökülür. Gaz bağlantısı olan cihazlarda sökümü yetkili servise bırakmanızı öneriyoruz, biz gaz hattına müdahale etmiyoruz. Duvara monte televizyon askısı, raf ve perde kornişlerini biz söküyoruz, bunların vidaları da kendi poşetine giriyor. Kombi ve klima de servis işi, randevusunu taşıma gününden ayrı bir güne almak en rahatı.',
      },
      { type: 'h2', text: 'Yeni evde montaj neye göre yapılıyor?' },
      {
        type: 'p',
        text: 'Montaj, sökümün aynen tersi değildir; yeni evin şartlarına göre yapılır. Vardığımızda üç şeye bakıyoruz: zeminin düzlüğü, duvarın cinsi ve prizlerin yeri. Zemin düzgün değilse gardırop kapakları hizalanmaz, ayak altına takoz koymak gerekir. Duvar alçıpan ya da gazbetonsa normal dübel tutmaz, o duvara uygun dübel kullanılır. Prizi arkasında kalacak bir ünite varsa, mobilyayı duvara dayamadan önce kabloyu geçiriyoruz.',
      },
      {
        type: 'p',
        text: 'Montajı aynı gün bitiriyoruz. Eşya yerleştikten sonra kapak hizalarını, çekmece raylarını ve dolap ayaklarını birlikte kontrol ediyoruz. O sırada fark edilen bir aksaklık biz oradayken birkaç dakikada çözülür, ertesi güne kalırsa iş büyür.',
      },
      { type: 'h2', text: 'Sizden beklediğimiz birkaç şey' },
      {
        type: 'ul',
        items: [
          'Dolap, çekmece ve raflar taşıma gününden önce boşalmış olsun.',
          'Sökülecek mobilyanın etrafında çalışma alanı kalsın.',
          'Daha önce sökülüp yanlış monte edilmiş, sallanan bir mobilya varsa önceden söyleyin.',
          'Yeni evde hangi mobilyanın nereye konacağına önceden karar verin, montaj ona göre yapılır.',
          'Servis gerektiren cihazların randevusunu taşıma saatine denk getirmeyin.',
        ],
      },
      {
        type: 'p',
        text: 'Keşif sırasında hangi mobilyanın sökülmesi gerektiğini yerinde belirliyor, aynalı ve cam parçaları ayrıca not ediyoruz. Böylece taşıma günü sürpriz olmuyor ve ekip yanında doğru aparatla geliyor. Ankara içinde ya da şehirler arası taşınacaksanız ücretsiz keşif için bize ulaşabilirsiniz.',
      },
    ],
  },
  {
    slug: 'evcil-hayvanla-tasinmak-rehberi',
    title: 'Evcil Hayvanla Taşınmak: Kedi ve Köpek İçin Taşınma Günü',
    metaTitle: 'Evcil Hayvanla Taşınmak Rehberi',
    metaDescription:
      'Kedi ve köpekle taşınırken hangi oda ayrılır, taşıyıcı kutuya nasıl alıştırılır, yeni evde ilk gün nasıl geçer? Ankara’daki saha notlarımız.',
    excerpt:
      'Hayvanı asıl huzursuz eden taşıma değil, evin günler öncesinden şekil değiştirmesi. Taşıma gününü ikiniz için de sakin geçirmenin yolları.',
    date: '2026-10-13',
    readingMinutes: 7,
    image: {
      src: '/img/paketli-esyalar-oda.webp',
      width: 1200,
      height: 600,
      alt: 'Boşalmış bir odada duvar kenarına dizilmiş, pembe ve mavi örtülerle sarılı eşyalar',
      title: 'Paketlenmiş eşyalarla boşalan oda',
      caption: 'Ev bu hâle geldiğinde hayvan için tanıdık düzen de ortadan kalkmış oluyor.',
      description: 'Boşaltılmış bir odanın duvarlarına yaslanmış, pembe ve mavi nakliye örtüleriyle kaplanıp streç filmle sarılmış koltuk, yatak ve dolap parçaları.',
    },
    body: [
      {
        type: 'p',
        text: 'Taşınma, evdeki en sakin canlıyı bile huzursuz eder. Kedisi günlerce kanepenin altından çıkmayan, köpeği yeni evde geceleri yerinde duramayan evleri sık görüyoruz. İyi tarafı şu: bu huzursuzluğun büyük kısmı önlenebilir bir şey. Çünkü hayvanı asıl rahatsız eden taşımanın kendisi değil, evin günler öncesinden şekil değiştirmesi. Aşağıda evcil hayvanıyla taşınanlara önerdiklerimizi topladık.',
      },
      { type: 'h2', text: 'Hayvanı asıl rahatsız eden, evin değişmesi' },
      {
        type: 'p',
        text: 'Hayvanlar evi koku ve düzen üzerinden tanır. Kolilerin ortaya çıkması, mobilyaların yerinden oynaması ve odaların boşalması onlar için evin ortadan kalkması demektir. Bu yüzden stres taşıma gününde değil, paketleme başladığı gün başlar. Paketlemeyi birkaç güne yayar ve hayvanın en çok vakit geçirdiği odayı en sona bırakırsanız, süreci baştan yumuşatmış olursunuz.',
      },
      { type: 'h2', text: 'Taşıyıcı kutuyu haftalar öncesinden ortaya çıkarın' },
      {
        type: 'p',
        text: 'Taşıyıcı kutuyu yılda bir kez, sadece veterinere giderken çıkarıyorsanız hayvan o kutuyu kötü bir şeyle eşleştirmiştir. Taşıma tarihinden birkaç hafta önce kutuyu salonun bir köşesine kapısı açık bırakın, içine kendi battaniyesini ve birkaç ödül maması koyun. Kendisi girip çıksın, uyusun. Taşıma günü yapmanız gereken tek şey kapısını kapatmak olur.',
      },
      {
        type: 'p',
        text: 'Köpekler için de mantık aynı. Taşıma günü kullanacağınız tasma, taşıma çantası ya da araç kemeri varsa birkaç gün önceden denenmiş olsun; o gün ilk kez takılan bir şey işi zorlaştırır.',
      },
      { type: 'h2', text: 'Taşıma günü bir odayı tamamen ayırın' },
      {
        type: 'p',
        text: 'Taşıma günü ev kapısı saatlerce açık kalır, merdivende sürekli gidiş geliş olur. Kaçma riskinin en yüksek olduğu an burasıdır. Ekibimiz eve girmeden önce evde hayvan olup olmadığını soruyor, çünkü açık kalan bir apartman kapısı yüzünden kaybolan kedi, taşınmanın en kötü ihtimali.',
      },
      {
        type: 'p',
        text: 'Çözüm basit: en son boşaltılacak bir odayı hayvana ayırın ve kapısına “içeride hayvan var, açmayın” diye bir kâğıt asın. Odada mama, su, tuvalet kabı ve tanıdık bir battaniye bulunsun. Sıra o odaya geldiğinde hayvanı taşıyıcı kutusuna alıp doğrudan kendi aracınıza götürün.',
      },
      { type: 'h2', text: 'Kedi, köpek ve kafes hayvanları aynı değildir' },
      {
        type: 'ul',
        items: [
          'Kedi saklanır. Taşıma günü serbest gezerse büyük ihtimalle bir dolabın arkasına girer ve yükleme sırasında bulunamaz. Kapalı oda ve kapalı taşıyıcı şart.',
          'Köpek huzursuzlanıp ayak altında dolaşır. Mümkünse o gün bir yakınınızda ya da gündüz bakımında kalması ikisi için de rahat olur.',
          'Kuş ani sesten ve hava akımından etkilenir. Kafesi örtüyle gölgeleyin, kapılar açıkken kafesi koridora ya da kapı önüne koymayın.',
          'Akvaryum en zahmetlisi. Balıklar ayrı kapta, suyun bir kısmı saklanarak taşınır; akvaryum boş ve kuru gider. Bunu taşıma gününden önce planlayın.',
        ],
      },
      { type: 'h2', text: 'Hayvanı kendi aracınızda taşıyın' },
      {
        type: 'p',
        text: 'Nakliye aracının kasası eşya için tasarlanmıştır. Havalandırması, ısısı ve yol boyunca aldığı sarsıntı canlı taşımaya uygun değildir; biz hiçbir koşulda hayvanı kasada taşımıyoruz. Hayvanın yeri sizin aracınızın içi. Taşıyıcı kutuyu koltuğa sabitleyin, camı tam açmayın, klimayı doğrudan kutuya üflemeyin. Yol uzunsa mola verin ama kutuyu araç dışında açmayın.',
      },
      { type: 'h2', text: 'Yolculuk kaygısı varsa veterinerinize önceden sorun' },
      {
        type: 'p',
        text: 'Araçta aşırı huzursuzlanan, salyası akan ya da kusan bir hayvanınız varsa bunu taşıma gününe bırakmayın. Veterinerinizle önceden konuşun; yol öncesi beslenme düzeninden sakinleştirici kullanımına kadar kararı o verir, internetteki önerilerle kendi başınıza ilaç vermeyin. Uzun yol planlıyorsanız randevuyu taşımadan birkaç gün önceye alın ki önerilen yöntemi kısa bir araç yolculuğunda deneme şansınız olsun.',
      },
      { type: 'h2', text: 'Şehirler arası taşımada fazladan plan gerekir' },
      {
        type: 'p',
        text: 'Ankara içinde taşınmak hayvan için birkaç saatlik bir mesele. Şehirler arası taşımada ise yol saatler sürer ve gün çok uzar. Böyle durumlarda hayvanı eşyadan bir gün önce yeni şehre götürmek ya da eşya yerleştikten sonra almak genellikle daha iyi sonuç veriyor. Tarihi konuşurken evde hayvan olduğunu söyleyin, programı buna göre kuralım.',
      },
      { type: 'h2', text: 'Yeni evde ilk gün' },
      {
        type: 'p',
        text: 'Yeni eve varınca hayvanı hemen serbest bırakmayın. Önce tek bir odayı hazırlayın: mama, su, tuvalet kabı, eski battaniyesi ve eski evden gelen tanıdık bir eşya. Kapıyı kapatıp taşıyıcıyı o odada açın. Eşya yerleşip ekip evden çıktıktan sonra kapıyı aralayın, hayvan evi kendi hızında keşfetsin.',
      },
      {
        type: 'ul',
        items: [
          'Eski battaniye ve oyuncakları ilk günlerde yıkamayın, tanıdık koku hayvanı rahatlatıyor.',
          'Balkon kapısını, sineklikleri ve pencere kilitlerini hayvan dolaşmaya başlamadan önce kontrol edin.',
          'Kedi tuvaletini eski evdeki kumla doldurup üstüne yeni kum ekleyin.',
          'İlk birkaç gün hayvanı dışarı çıkarmayın, köpeği de tasmasız gezdirmeyin.',
        ],
      },
      { type: 'h2', text: 'Adres değişikliğini kayıtlara da işleyin' },
      {
        type: 'p',
        text: 'Hayvanın çipi varsa kayıtlı adres ve telefonu güncelletin; kaybolma durumunda bulan kişinin ulaşacağı bilgi orasıdır. Aşı karnesini kolilerin arasına koymayın, el çantanızda tutun. Yeni mahallenizdeki veterineri ve gece açık olan en yakın kliniği taşınmadan önce not edin, ihtiyaç olduğunda aramak için vakit kalmıyor.',
      },
      { type: 'h2', text: 'Kısa liste' },
      {
        type: 'ul',
        items: [
          'Paketlemeye erken başlayın, hayvanın odasını en sona bırakın.',
          'Taşıyıcı kutuyu haftalar öncesinden açık bırakın.',
          'Taşıma günü kapısı kapalı bir oda ayırın, kapıya not asın.',
          'Hayvanı kendi aracınızda taşıyın, asla araç kasasında değil.',
          'Yeni evde önce tek oda, sonra bütün ev.',
          'Çip kaydını ve aşı karnesini yanınızda tutun.',
        ],
      },
      {
        type: 'p',
        text: 'Evinde hayvan olan taşımalarda bize önceden haber verirseniz kapıları daha dikkatli kullanır, hayvanın bulunduğu odayı en son boşaltırız. Ücretsiz keşif sırasında bunu da konuşuyoruz; Ankara içinde ya da şehirler arası taşınacaksanız bize ulaşabilirsiniz.',
      },
    ],
  },
  {
    slug: 'apartman-yonetimi-tasinma-izni',
    title: 'Apartman Yönetiminden Taşınma İzni: Asansör ve Araç Kuralları',
    metaTitle: 'Apartman Yönetiminden Taşınma İzni',
    metaDescription:
      'Site ve apartman yönetimleri taşınmaya saat, araç ve asansör kuralı koyuyor. Taşınma gününden önce kime ne sorulur, neler ayarlanır? Saha notlarımız.',
    excerpt:
      'Taşınmanın en çok aksayan yeri çoğu zaman eşya değil bina oluyor. Yöneticiyle önceden yapılan iki telefon, taşıma gününü kurtarıyor.',
    date: '2026-10-20',
    readingMinutes: 7,
    image: {
      src: '/img/kamyon-ici-yukleme.webp',
      width: 1536,
      height: 2048,
      alt: 'Kapalı kasa aracın içinde yan yana duran, balonlu naylonla sarılıp iple bağlanmış iki dolap',
      title: 'Araç kasasında sabitlenmiş dolaplar',
      caption: 'Araç binaya ne kadar yakın durursa yükleme o kadar hızlı ve güvenli ilerliyor.',
      description: 'Kırmızı ahşap kaplı bir nakliye aracının kasasında, mavi balonlu naylonla sarılmış ve biri iple bağlanmış iki uzun dolap yan yana duruyor; arkada yatak bazası, yerde katlanmış nakliye örtüleri var.',
    },
    body: [
      {
        type: 'p',
        text: 'Taşınmada en çok aksayan yer çoğu zaman eşya değil binadır. Araç kapıya yanaşamaz, güvenlik aracı siteye almaz, asansör taşımada kullanılamaz ve ekip kaldırımda bekler. Bunların neredeyse hepsi, taşınmadan önce yapılacak iki üç telefonla çözülebilen şeyler. Aşağıda Ankara’daki sitelerde ve apartmanlarda en sık karşılaştığımız kuralları ve yöneticiye ne sormanız gerektiğini topladık.',
      },
      { type: 'h2', text: 'Önce şunu öğrenin: binanın yazılı bir kuralı var mı?' },
      {
        type: 'p',
        text: 'Normal apartmanların çoğunda yazılı bir taşınma kuralı yoktur, yönetici ya da kapıcıyla konuşmak yeter. Kapalı sitelerde durum farklı: taşınma saatleri, kullanılacak kapı, aracın gireceği yol ve asansörün taşımada kullanılıp kullanılamayacağı çoğu zaman site kurallarında yazılıdır. Bu kuralları kiralama ya da satın alma aşamasında isteyin. Taşıma gününden bir hafta önce öğrenmek bazen geç kalıyor, çünkü bazı kısıtlar tarihin kendisini değiştiriyor.',
      },
      { type: 'h2', text: 'Taşınma saatine sınır koyan siteler var' },
      {
        type: 'p',
        text: 'En yaygın kural saat sınırı. Bazı siteler taşınmayı hafta içi mesai saatlerine bağlıyor, bazıları sabah belirli bir saatten önce araç sokmuyor, pazar günü taşınmaya hiç izin vermeyenler de var. Biz programı buna göre kurabiliyoruz, yeter ki kuralı bilelim. Saat sınırı olan bir binaya sabahın köründe gitmek yerine, izin verilen ilk saatte kapıda olacak şekilde planlıyoruz.',
      },
      { type: 'h2', text: 'Aracın duracağı yeri önceden ayırtın' },
      {
        type: 'p',
        text: 'Araç binaya ne kadar yakın durursa iş o kadar hızlı ve güvenli ilerler. Ankara’da en sık yaşadığımız sorun, bina önündeki yerlerin dolu olması. Yöneticiye ya da güvenliğe önceden haber verip o alanı taşıma saatinde boş tutturmak çoğu zaman mümkün oluyor. Sitelerde ayrıca araç boyuna göre kısıt çıkabiliyor: bariyer yüksekliği, kapalı otopark girişi ve dönüş yarıçapı büyük araç için sorun yaratır. Siteden gelen “büyük araç giremez” cevabı planı baştan değiştirdiği için bunu erken öğrenmek istiyoruz.',
      },
      { type: 'h2', text: 'Bina asansörü ve kabin koruması' },
      {
        type: 'p',
        text: 'Bina asansörünü kullanmak serbest olsa bile kabine sığmayan eşyayı zorlamak doğru değildir. Kabinin kapı genişliği, derinliği ve taşıma kapasitesi bellidir; kapıyı açık tutup eşya sıkıştırmak hem kapı mekanizmasına hem eşyaya zarar verir. Yönetimlerin çoğu taşıma boyunca kabine koruyucu örtü serilmesini ister, biz bunu zaten standart yapıyoruz.',
      },
      {
        type: 'ul',
        items: [
          'Asansörün kapı ölçüsünü, kabin derinliğini ve kaç kiloya kadar taşıdığını önceden öğrenin.',
          'Binada yük asansörü varsa hangi saatlerde kullanılabildiğini sorun.',
          'Kabinde mevcut bir çizik ya da arıza varsa taşıma başlamadan yöneticiyle birlikte görün.',
          'Asansör taşımada kullanılamıyorsa bunu tarih verirken bize söyleyin, plan tamamen değişir.',
        ],
      },
      { type: 'h2', text: 'Mobil asansör kurulacaksa yer gerekir' },
      {
        type: 'p',
        text: 'Eşya kabine sığmıyorsa ya da bina asansörsüzse mobil asansör kuruyoruz. Bunun için binanın önünde düz ve boş bir alan gerekiyor: aracın ayakları açılır, merdiven balkona veya pencereye dayanır. Buradaki iki klasik engel, alanın park etmiş araçlarla dolu olması ve balkonun üstünden geçen elektrik ya da telefon hattı. Bazı site yönetimleri asansör kiralama gerektiren kurulumlar için ayrıca haber verilmesini istiyor; bu izni gün öncesinden almak gerekiyor.',
      },
      { type: 'h2', text: 'Güvenliğe isim bildirmek işi hızlandırır' },
      {
        type: 'p',
        text: 'Kapalı sitelerde ekip ve araç çoğu zaman güvenlikten kaydını yaptırmadan içeri giremiyor. Taşıma gününden bir gün önce yönetime ya da güvenliğe haber verin: gelecek aracın plakası ve kaç kişilik ekip geleceği sorulursa bize sorun, hemen iletiyoruz. Kapıda yapılan kayıt bazen yarım saat yiyor ve o yarım saat, saat sınırı olan bir sitede doğrudan taşımadan eksiliyor.',
      },
      {
        type: 'p',
        text: 'Aynı şekilde yeni binaya girişte size verilecek giriş kartı, otopark yeri ve posta kutusu anahtarını taşınma gününe bırakmayın. Bunlar küçük işler ama hepsi aynı güne denk gelince ev yerleşirken siz kapıda kalıyorsunuz.',
      },
      { type: 'h2', text: 'Depozito ve taşınma bedeli isteyen siteler' },
      {
        type: 'p',
        text: 'Bazı kapalı siteler, ortak alanlarda oluşabilecek hasara karşı iade edilen bir depozito istiyor; bazıları asansör kullanımı için sabit bir bedel alıyor. Bu uygulamalar siteden siteye değişiyor ve yönetim kararına bağlı. Taşınmadan önce yöneticiye sorun, çünkü taşıma günü kapıda öğrenilen bir ödeme işi saatlerce durdurabiliyor. Bu bedeller siteye ödenir, bizim verdiğimiz fiyatla ilgisi yoktur.',
      },
      { type: 'h2', text: 'Yöneticiye sormanız gereken sorular' },
      {
        type: 'ul',
        items: [
          'Taşınma için izin verilen gün ve saat aralığı nedir?',
          'Araç siteye girebilir mi, boy ya da yükseklik sınırı var mı?',
          'Aracın duracağı yer taşıma saatinde boş tutulabilir mi?',
          'Bina asansörü taşımada kullanılabilir mi, yük asansörü var mı?',
          'Mobil asansör kurulacaksa ayrıca izin gerekiyor mu?',
          'Depozito ya da taşınma bedeli alınıyor mu, nasıl ödeniyor?',
          'Hangi kapı kullanılacak, güvenliğe önceden isim bildirmek gerekiyor mu?',
        ],
      },
      { type: 'h2', text: 'Çıktığınız binayı da teslim ediyorsunuz' },
      {
        type: 'p',
        text: 'Sorumluluk sadece taşındığınız binada değil, çıktığınız binada da sürüyor. Merdiven, asansör ve giriş holü taşıma sonrası kirli kalırsa eski yöneticinizle sorun yaşarsınız. Biz iki adreste de koridorlara koruyucu örtü seriyor, iş bitince ambalaj artıklarını topluyoruz. Siz de çıkarken kapıcıya haber verin, varsa anahtar ve giriş kartı teslimini aynı gün yapın; sonraya kalan teslimler depozito görüşmesini uzatıyor.',
      },
      { type: 'h2', text: 'Kısa liste' },
      {
        type: 'ul',
        items: [
          'Site kurallarını, taşınma tarihini belirlemeden önce öğrenin.',
          'Yöneticiye taşınma gününü ve saatini önceden bildirin.',
          'Araç yerini ve asansör kullanımını ayırtın.',
          'Varsa depozitoyu, bedeli ve ödeme şeklini öğrenin.',
          'Öğrendiğiniz bütün kısıtları keşif sırasında bize aktarın.',
        ],
      },
      {
        type: 'p',
        text: 'Ücretsiz keşif sırasında eşyanın yanında binayı da inceliyoruz: kapı ölçüleri, merdiven sahanlığı, asansör kabini ve aracın yanaşacağı yer. Site kurallarını bize iletirseniz programı ilk seferde doğru kurar, taşıma gününe kapıda tartışarak başlamayız.',
      },
    ],
  },
  {
    slug: 'ogrenci-evi-tasima-rehberi',
    title: 'Öğrenci Evi Taşıma: Ankara’da Az Eşyayla Taşınma Rehberi',
    metaTitle: 'Öğrenci Evi Taşıma Rehberi',
    metaDescription:
      'Yurttan eve, evden eve taşınan öğrenciler için: az eşya nasıl taşınır, ev arkadaşıyla eşya nasıl ayrılır, yaz tatilinde eşya nerede kalır?',
    excerpt:
      'Öğrenci taşımasında eşya az ama tarih sıkışık. Dönem başı ve dönem sonu yoğunluğunda işi kolaylaştıran şeyleri topladık.',
    date: '2026-10-27',
    readingMinutes: 7,
    image: {
      src: '/img/ambalajli-kanepe.webp',
      width: 901,
      height: 1600,
      alt: 'Streç filmle baştan aşağı sarılıp odada dik bekletilen tek kanepe',
      title: 'Ambalajlanmış tek kanepe',
      caption: 'Az eşyalı taşımalarda da ambalaj aynı: her parça tek tek sarılıyor.',
      description: 'Perdeli bir odada, koyu mavi bir kanepe streç filmle tamamen sarılmış hâlde dik duruyor; sağ tarafında kapatılmış bir karton koli var.',
    },
    body: [
      {
        type: 'p',
        text: 'Ankara’da öğrenci taşıması kendi başına bir iş. Eşya az, mesafe çoğu zaman kısa, ama tarih sıkışıktır: herkes aynı iki haftada taşınır. Yurttan eve geçen, ev arkadaşı değiştiren, dönem sonunda eşyasını bırakıp memlekete giden çok öğrenci var ve bunların her birinin kendine göre bir zorluğu oluyor. Aşağıda öğrenci taşımalarında işi kolaylaştıran şeyleri topladık.',
      },
      { type: 'h2', text: 'Eşya az ama iş aynı' },
      {
        type: 'p',
        text: 'Bir öğrenci evinde genelde bir yatak, bir dolap, çalışma masası, birkaç koli ve mutfak eşyası olur. Bu hacim için koca bir kamyon gerekmiyor; parça eşya taşıma dediğimiz hizmet tam olarak bunun için var. Küçük araç, iki kişilik ekip ve yarım günlük bir program çoğu öğrenci taşımasını bitiriyor.',
      },
      {
        type: 'p',
        text: 'Eşyanın az olması ambalajı gereksiz kılmıyor. Tek yatağınız varsa da kılıfa giriyor, dolap sökülüyorsa parçaları ayrı sarılıyor. Arkadaş arabasıyla taşınan eşyalarda en çok çizilen şeyler masa kenarları ve dolap kapakları oluyor, çünkü araca doğrudan atılıyorlar.',
      },
      {
        type: 'p',
        text: 'Koli konusunda öğrenciler genelde market kolisiyle idare ediyor. Kitap ve ders notu taşıyacaksanız bu riskli: market kolisinin dibi ağırlığı kaldırmıyor ve yolda açılıyor. Kitapları küçük kolilere bölüp ağırlığı dağıtmak en sağlamı. Ambalaj malzemesi ve koli düzeni hakkında ayrıntıları eşya paketleme yazımızda anlattık.',
      },
      { type: 'h2', text: 'Dönem başı ve dönem sonu en yoğun iki dönem' },
      {
        type: 'p',
        text: 'Eylül ile ekim başı ve haziran ayı, öğrenci bölgelerinde taşımanın en yoğun olduğu zamanlar. Bu dönemlerde istediğiniz günü bulmak zorlaşıyor, özellikle hafta sonları hızlı doluyor. Kira sözleşmenizin başlangıç tarihini biliyorsanız bir hafta öncesinden tarih ayırtın. Sınav takviminiz belliyse taşımayı sınav gününe denk getirmemek de hayatınızı kolaylaştırır.',
      },
      { type: 'h2', text: 'Ev arkadaşıyla taşınırken eşyayı ayırın' },
      {
        type: 'p',
        text: 'Ortak evden ayrılırken en çok karışan şey, kimin neyi aldığıdır. Mikrodalga kimin, ütü kimin, perde kalacak mı? Bunu taşıma günü kapıda konuşmak zaman kaybı. Yapılacak şey basit: taşınacak eşyaları önceden bir odada toplayın ve kendinize ait kolilerin üstüne adınızı yazın.',
      },
      {
        type: 'ul',
        items: [
          'Kendi kolilerinizi tek bir odada toplayın, kalacak eşyayı ayrı tutun.',
          'Kolinin üstüne odanın adını değil, kendi adınızı ve içindekini yazın.',
          'Ortak alınmış eşyaların kimde kalacağına taşıma gününden önce karar verin.',
          'Kalacak eşyaların fotoğrafını çekin, depozito görüşmesinde işinize yarıyor.',
        ],
      },
      { type: 'h2', text: 'Yurttan eve taşınıyorsanız' },
      {
        type: 'p',
        text: 'Yurt çıkışları genellikle belirli bir saate ve kapıya bağlıdır; aracın yurt bahçesine girip giremeyeceğini önceden sorun. Bazı yurtlarda eşya ana kapıya kadar elle taşınıyor, bu da süreyi uzatıyor. Çıkış saatinizi ve aracın yanaşabileceği noktayı bize söylerseniz ekibi ona göre gönderiyoruz. Oda teslimini yaparken odanın fotoğrafını çekmeyi de unutmayın.',
      },
      { type: 'h2', text: 'Öğrenci bölgelerinde binalar çoğu zaman asansörsüz' },
      {
        type: 'p',
        text: 'Ankara’da öğrencilerin yoğun oturduğu bölgelerde eski yapı stoğu fazla; dört beş katlı, asansörsüz ve dar merdivenli binalar sık karşımıza çıkıyor. Az eşyada bu genelde sorun olmuyor, ekip elle çıkarıyor. Ama yatak, gardırop ya da üç kapılı dolap gibi merdivenden dönmeyen bir parça varsa mobil asansör gerekebiliyor.',
      },
      {
        type: 'p',
        text: 'Bunu taşıma günü anlamak kötü bir sürpriz. Kaçıncı katta olduğunuzu, binada asansör olup olmadığını ve merdivenin dar olup olmadığını tarih verirken söyleyin. Aynı şey yeni ev için de geçerli: çoğu öğrenci çıkış adresini anlatıyor, varış adresinin kat durumunu atlıyor.',
      },
      { type: 'h2', text: 'Yaz tatilinde eşya nerede kalacak?' },
      {
        type: 'p',
        text: 'Haziranda memlekete dönüp eylülde geri gelen öğrenciler için üç yol var: eşyayı yanınızda götürmek, evi yaz boyunca kiralamaya devam etmek ya da eşya depolama ile yazı geçirmek. Üçünün de mantıklı olduğu durumlar var; yazın boş duran bir evin kirası ile depolama arasındaki farkı kendiniz hesaplayın. Depoya giren eşyayı liste hâline getirip fotoğraflamak, eylülde ne çıkacağını bilmek açısından işinizi kolaylaştırıyor.',
      },
      {
        type: 'p',
        text: 'Yaz boyunca kalacak eşyada iki şeye dikkat edin: yiyecek hiçbir şey kutuya girmesin ve elektronik cihazlar nemden uzak dursun. Kitap ve defterleri de doğrudan zemine değil, palet ya da raf üstüne koyun.',
      },
      { type: 'h2', text: 'Mobilyalı ev tutuyorsanız' },
      {
        type: 'p',
        text: 'Öğrenci evlerinin çoğu eşyalı kiralanıyor ve bu eşya ev sahibine ait oluyor. Girerken var olan hasarları fotoğraflayıp ev sahibine göndermek, çıkarken yaşanacak tartışmanın yarısını baştan bitiriyor. Siz bir eşya eklediyseniz, ona ait fatura ya da kutu sizde kalsın. Çıkışta ev sahibinin eşyasını yerine koymak size, kendi eşyanızı taşımak bize kalıyor.',
      },
      { type: 'h2', text: 'Memlekete taşınacaksanız' },
      {
        type: 'p',
        text: 'Okul bitince eşyayı başka bir şehre götürmek isteyen öğrencilerle sık çalışıyoruz. Bu şehirler arası bir taşıma olduğu için planı daha erken kurmak gerekiyor: çıkış ve varış adreslerinin ikisinde de kimin karşılayacağı, varış şehrinde eve kimin gireceği baştan belli olmalı. Tek bir öğrenci evinin eşyası tek başına bir araç doldurmadığı için tarihi esnek tutabilirseniz daha rahat program çıkıyor.',
      },
      { type: 'h2', text: 'Kısa liste' },
      {
        type: 'ul',
        items: [
          'Tarihi dönem başı ve dönem sonu yoğunluğundan önce ayırtın.',
          'Kolilerin üstüne adınızı ve içindekini yazın.',
          'Ev arkadaşıyla eşya paylaşımını taşıma gününden önce bitirin.',
          'Yurt ya da site için çıkış saatini ve araç yanaşma yerini öğrenin.',
          'Eşyalı evde hem girişte hem çıkışta fotoğraf çekin.',
          'Yaz için depolama mı, taşıma mı, kararı haziran gelmeden verin.',
        ],
      },
      {
        type: 'p',
        text: 'Öğrenci taşımalarında da ücretsiz keşif yapıyoruz; eşya azsa fotoğraf üzerinden de konuşabiliyoruz. Taşınma tarihinizi ve iki adresi paylaşmanız yeterli, gerisini biz planlarız.',
      },
    ],
  },
  {
    slug: 'tasinma-sonrasi-ilk-gun',
    title: 'Taşınma Sonrası İlk Gün: Yeni Evde Önce Ne Yapmalı?',
    metaTitle: 'Taşınma Sonrası İlk Gün Rehberi',
    metaDescription:
      'Eşya indi, ekip gitti. Yeni evde ilk gün hangi işi önce yapmalı, kutular hangi sırayla açılır, beyaz eşya ne zaman çalıştırılır? Saha notlarımız.',
    excerpt:
      'Taşımanın bitmesi evin kurulması demek değil. İlk günü doğru sırayla geçirirseniz kalan işler haftaya kendiliğinden yayılıyor.',
    date: '2026-11-03',
    readingMinutes: 7,
    image: {
      src: '/img/koltuk-takimi-ambalaj.webp',
      width: 1600,
      height: 1200,
      alt: 'Yeni evin salonunda yerine yerleştirilmiş, hâlâ streç filmle sarılı mavi koltuk takımı',
      title: 'Yeni evde ambalajı açılmayı bekleyen koltuk takımı',
      caption: 'Eşya yerine konduktan sonra ambalajı açmak için acele etmeye gerek yok.',
      description: 'Perdeleri takılı, klimalı bir salonda; üçlü kanepe, iki berjer ve puf streç filmle sarılı ve iple bağlı hâlde yerlerine yerleştirilmiş duruyor.',
    },
    body: [
      {
        type: 'p',
        text: 'Eşya indi, ekip evden çıktı, kapı kapandı. Salonun ortasında koliler duruyor, hangisinde ne olduğu tam belli değil ve akşam olmak üzere. Taşınmanın en yorucu kısmı çoğu zaman burasıdır: taşıma bitmiştir ama ev henüz ev değildir. İlk günü doğru sırayla geçirirseniz kalan işler haftaya kendiliğinden yayılıyor. Aşağıda yeni evde ilk gün ne yapılır, hangi iş sabaha kalır, onu anlattık.',
      },
      { type: 'h2', text: 'İlk ihtiyaç kutusunu açın, diğerlerini açmayın' },
      {
        type: 'p',
        text: 'Taşınmadan önce hazırladığınız ilk ihtiyaç kutusu tam burada işe yarıyor. İçinde bir geceyi çıkaracak kadar şey olması yeterli: havlu, el sabunu, tuvalet kâğıdı, temizlik bezi, ilaçlar, şarj kablosu, birkaç bardak ve çatal kaşık, bir değişiklik kıyafet. Bu kutuyu araca en son yükleyip yeni evde ilk indiriyoruz, tam da ilk akşam başka kutu açmak zorunda kalmayın diye.',
      },
      { type: 'h2', text: 'İlk iş yatağı kurmak' },
      {
        type: 'p',
        text: 'Yeni evde ilk akşam yorgunluk beklediğinizden fazla oluyor. Bu yüzden ekip evden çıkmadan yatak odasını bitiriyoruz: karyola kuruluyor, yatak yerine konuyor. Siz de nevresimi ilk ihtiyaç kutusunda ya da üstüne “yatak” yazdığınız tek bir kolide tutarsanız, gece yatacak yer hazırlamakla uğraşmazsınız. Koltuğun naylonunu açmak sabaha kalabilir, yatak kalamaz.',
      },
      { type: 'h2', text: 'Su, elektrik ve gazı ilk saatte kontrol edin' },
      {
        type: 'p',
        text: 'Abonelikleri önceden açtırmış olsanız bile ilk gün bizzat kontrol etmek gerekiyor. Sayaçlar çalışıyor mu, kombi yanıyor mu, sıcak su geliyor mu, elektrik bütün odalarda var mı? Bir aksaklık varsa akşam olmadan fark etmek önemli, çünkü servisler mesai bitiminde kapanıyor ve ilk geceyi soğuk ya da susuz geçirmek kimsenin istediği şey değil.',
      },
      {
        type: 'p',
        text: 'Aynı saatlerde su vanasının, elektrik sigortasının ve gaz vanasının yerini de öğrenin. Bunlar lazım olduğunda aranacak şeyler değil, önceden bilinecek şeyler. Evde yaşayan herkese gösterin.',
      },
      { type: 'h2', text: 'Beyaz eşyayı ilk gün çalıştırmayın' },
      {
        type: 'p',
        text: 'Buzdolabı yol boyunca yatırılmışsa ya da soğukta geldiyse, fişe takmadan önce dik şekilde birkaç saat bekletilmesi gerekir. Çamaşır makinesini nakliye cıvataları sökülmeden çalıştırmak da makineyi hırpalar. En güvenlisi, cihazları ilk gün yerine kurup ertesi gün çalıştırmak. Hangi cihazın nasıl hazırlandığını ayrı bir yazıda tek tek anlattık.',
      },
      { type: 'h2', text: 'Hasar kontrolünü ekip evden çıkmadan yapın' },
      {
        type: 'p',
        text: 'Taşımada bir sorun çıkmışsa bunu fark etmenin en iyi anı, ekip hâlâ evdeyken. Eşya yerine konduktan sonra büyük parçaları birlikte gözden geçiriyoruz: dolap kapakları kapanıyor mu, masa sallanıyor mu, cam ve ayna parçalarında çatlak var mı. Ufak bir hizalama sorunu biz oradayken birkaç dakikada çözülür, ertesi güne kalırsa ayrı bir randevu gerekir.',
      },
      {
        type: 'p',
        text: 'Kolilerin içini aynı anda tek tek kontrol etmeniz beklenmiyor, o zaten mümkün değil. Ama kırılacak eşya yazdığınız kolileri açarken bir aksaklık görürseniz vakit geçirmeden haber verin. Nakliyat sigortası bu gibi durumlar için var ve süreç ne kadar erken başlarsa o kadar hızlı ilerliyor.',
      },
      { type: 'h2', text: 'Kutuları hangi sırayla açmalı?' },
      {
        type: 'p',
        text: 'En yaygın hata, bütün kutuları aynı anda açmak. Hepsi açılınca ev bir anda dağılıyor ve hiçbir oda bitmiyor. Oda oda ilerleyin; ilk gün şu dördü yeter:',
      },
      {
        type: 'ul',
        items: [
          'Yatak odası: yatak, nevresim, ertesi gün giyeceğiniz kıyafetler.',
          'Banyo: havlu, sabun, diş fırçası, tuvalet kâğıdı.',
          'Mutfak: su ısıtıcısı, birkaç tabak, bardak, çatal kaşık.',
          'Salon: oturulacak bir yer ve çalışan bir lamba.',
        ],
      },
      {
        type: 'p',
        text: 'Kalan kutular haftaya yayılabilir; kitap, dekorasyon ve mevsimlik eşyanın acelesi yok. Açtığınız boş kolileri de bir odada toplayın, çünkü ortalıkta duran boş koli kadar evi küçük ve dağınık gösteren bir şey yok.',
      },
      { type: 'h2', text: 'Kilit, anahtar ve güvenlik' },
      {
        type: 'ul',
        items: [
          'Kapı kilidini değiştirecekseniz ilk günlerde yaptırın; eski anahtarın kimlerde olduğunu bilemezsiniz.',
          'Balkon ve pencere kilitlerini, varsa çocuk kilitlerini kontrol edin.',
          'Duman ya da gaz dedektörü varsa çalıştığını test edin.',
          'Apartman giriş kartı ve posta kutusu anahtarını aynı gün teslim alın.',
        ],
      },
      { type: 'h2', text: 'Temizliği ilk güne sıkıştırmayın' },
      {
        type: 'p',
        text: 'İdeali, ev boşken temizliğin yapılmış olması. Olmadıysa ilk gün evin tamamını temizlemeye çalışmayın; banyo ve mutfak tezgâhı yeter. Eşya yerleşirken zaten toz kalkıyor, asıl temizlik birkaç gün sonra çok daha verimli oluyor.',
      },
      { type: 'h2', text: 'Apartmana ve komşulara kendinizi tanıtın' },
      {
        type: 'p',
        text: 'İlk gün yöneticiye ya da kapıcıya haber vermek, aidat tutarını ve çöp saatlerini öğrenmek beş dakikalık bir iş ama sonraki ayların tamamını rahatlatıyor. Varsa otopark yerinizi ve depo bölümünüzü de aynı gün öğrenin; sonradan sormak hep ertelenen şeylerden biri oluyor.',
      },
      { type: 'h2', text: 'İlk gece için beklentiyi düşük tutun' },
      {
        type: 'p',
        text: 'Taşınma günü akşamı yemek yapmaya çalışmak, bütün odaları bitirmeye uğraşmak ya da misafir çağırmak işi zorlaştırıyor. Dışarıdan bir şeyler söyleyip erken yatmak, ertesi sabah dinlenmiş başlamak çok daha verimli. Evde çocuk varsa kendi odasını ilk bitirilen oda yapın; tanıdık yatağını ve birkaç oyuncağını görmesi geceyi kolaylaştırıyor.',
      },
      { type: 'h2', text: 'İlk hafta listesi' },
      {
        type: 'ul',
        items: [
          'Adres değişikliğini nüfus kaydınıza işletin.',
          'Kargo, banka ve fatura adreslerinizi güncelleyin.',
          'İnternet kurulumu için randevu almadıysanız hemen alın.',
          'Mahalledeki eczaneyi, marketi ve en yakın sağlık kuruluşunu not edin.',
          'Taşımada bir hasar fark ederseniz bekletmeden bize bildirin.',
        ],
      },
      {
        type: 'p',
        text: 'Biz evden çıkmadan önce yatak odasını kuruyor, beyaz eşyayı yerine alıyor ve ambalaj artıklarını topluyoruz; ilk günü kolaylaştıran şey büyük ölçüde bu. Ücretsiz keşif sırasında yeni evde neyin nereye konacağını da konuşursak montaj ilk seferde doğru yapılıyor, siz de eşya yerleşirken ikinci kez yer değiştirmek zorunda kalmıyorsunuz.',
      },
    ],
  },
]

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug)
