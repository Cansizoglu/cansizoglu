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
]

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug)
