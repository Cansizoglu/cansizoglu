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
    metaTitle: 'Taşınmadan Önce Yapılacaklar Listesi | Cansızoğlu Nakliyat',
    metaDescription:
      'Taşınmadan önce iki hafta içinde yapmanız gerekenler: abonelik işlemleri, paketleme sırası, adres değişikliği ve taşıma günü hazırlığı.',
    excerpt:
      'Taşınmanın zor kısmı taşıma günü değil, öncesindeki hazırlıktır. İki haftaya yayılmış bir plan, taşınma gününü çok daha sakin geçirmenizi sağlar.',
    date: '2026-09-10',
    readingMinutes: 6,
    image: {
      src: '/img/tasima-kasalari.jpg',
      width: 848,
      height: 480,
      alt: 'Cansızoğlu Nakliyat logolu iki sarı taşıma kasası, asansör platformunun üzerinde',
      title: 'Taşımaya hazırlanmış sarı taşıma kasaları',
      caption: 'Hazırlığa erken başlayınca taşıma günü sadece yükleme gününe dönüşüyor.',
      description: 'Cansızoğlu Nakliyat’ın evden eve taşımalarda kullandığı, firma logosu ve çağrı hattı yazılı sarı plastik taşıma kasaları, mobil asansörün platformuna yerleştirilmiş halde.',
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
    metaTitle: 'Asansörlü Nakliyat Ne Zaman Gerekir? | Cansızoğlu Nakliyat',
    metaDescription:
      'Asansörlü nakliyat hangi durumlarda gerekir, maliyeti neye göre değişir ve merdivenle taşımaya göre avantajları nelerdir?',
    excerpt:
      'Her taşımada asansör gerekmez. Ancak dar merdiven, yüksek kat ve büyük mobilya bir aradaysa asansör hem daha güvenli hem de daha ekonomiktir.',
    date: '2026-09-05',
    readingMinutes: 5,
    image: {
      src: '/img/slider-3.jpg',
      width: 1920,
      height: 600,
      alt: 'Apartmanın yanına kurulmuş mobil taşıma asansörü ve yanındaki Cansızoğlu kapalı kasa kamyonu',
      title: 'Apartmana kurulmuş mobil taşıma asansörü',
      caption: 'Asansörsüz binada eşya merdivene hiç girmiyor, pencereden iniyor.',
      description: 'Ankara’da çok katlı bir binanın önüne kurulmuş Cansızoğlu Nakliyat mobil taşıma asansörü ve yükleme için bekleyen kapalı kasa taşıma kamyonu.',
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
      src: '/img/tasima-kasalari.jpg',
      width: 848,
      height: 480,
      alt: 'Kapaklı sarı plastik taşıma kasaları, üzerinde Cansızoğlu Nakliyat etiketi',
      title: 'Kapaklı plastik taşıma kasaları',
      caption: 'Kapaklı plastik kasa, karton koliden daha dayanıklı ve istiflemesi kolay.',
      description: 'Eşya paketlemede kullanılan kapaklı sarı plastik taşıma kasaları; karton koliye göre daha dayanıklı oldukları için kırılacak eşya ve mutfak malzemesinde tercih ediliyor.',
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
      src: '/img/slider-2.jpg',
      width: 1920,
      height: 600,
      alt: 'Cansızoğlu Nakliyat’ın kamyon, kamyonet ve panelvanı bir sitenin önünde yan yana',
      title: 'Farklı boyutlardaki Cansızoğlu Nakliyat araçları',
      caption: 'Fiyatı belirleyen ilk iki şey araç boyu ve mesafe.',
      description: 'Cansızoğlu Nakliyat’ın farklı boyutlardaki taşıma araçları: büyük kapalı kasa kamyon, orta boy kamyonet ve parça eşya taşımada kullanılan panelvan.',
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
      src: '/img/ofis.webp',
      width: 1242,
      height: 699,
      alt: 'Cansızoğlu Nakliyat’ın Ankara Altındağ’daki ofisinin tabelalı cephesi',
      title: 'Cansızoğlu Nakliyat ofis cephesi',
      caption: 'Açık adresi ve tabelası olan firma, iş bittiğinde ortadan kaybolmuyor.',
      description: 'Cansızoğlu Nakliyat’ın Ankara Altındağ’daki ofisinin dış cephesi; firma adı ve çağrı hattı numarası yazılı tabela.',
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
      src: '/img/slider-1.jpg',
      width: 1920,
      height: 600,
      alt: 'Yolda ilerleyen Cansızoğlu Nakliyat kapalı kasa kamyonu ve arkasındaki asansörlü araç',
      title: 'Yol üzerindeki Cansızoğlu Nakliyat aracı',
      caption: 'Sigorta, yazılı sözleşme olmadan hüküm ifade etmiyor.',
      description: 'Ankara’da sigortalı taşıma yapan Cansızoğlu Nakliyat kapalı kasa kamyonu ve arkasından gelen mobil asansör aracı.',
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
      src: '/img/slider-1.jpg',
      width: 1920,
      height: 600,
      alt: 'Beyaz eşya taşımaya uygun, kapalı kasalı Cansızoğlu Nakliyat kamyonu',
      title: 'Kapalı kasa taşıma kamyonu',
      caption: 'Buzdolabı dik taşınır, indirildikten sonra en az altı saat çalıştırılmaz.',
      description: 'Beyaz eşyanın dik ve sabitlenmiş şekilde taşınabildiği kapalı kasa Cansızoğlu Nakliyat kamyonu; kasa kapalı olduğu için eşya yol boyunca hava şartlarından etkilenmiyor.',
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
      src: '/img/arac-sari-kamyon.jpg',
      width: 848,
      height: 480,
      alt: 'Üzerinde “Ev & Ofis Taşıma” yazan sarı kasalı Cansızoğlu Nakliyat kamyonu',
      title: 'Ev ve ofis taşımada kullanılan kamyon',
      caption: 'Ofis taşımasını hafta sonuna almak, iş kaybını neredeyse sıfırlıyor.',
      description: 'Cansızoğlu Nakliyat’ın ev ve ofis taşımalarında kullandığı, asansörlü taşımacılık ibaresi ve çağrı hattı yazılı sarı kasalı kamyonu.',
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
      src: '/img/tasima-kasalari.jpg',
      width: 848,
      height: 480,
      alt: 'Depolamaya hazır, kapağı kapatılmış sarı taşıma kasaları',
      title: 'Depolamaya hazırlanan taşıma kasaları',
      caption: 'Depoya giren her kasa listelenmezse, çıkarken aranan eşya bulunmuyor.',
      description: 'Kısa ve uzun süreli eşya depolamada kullanılan, kapağı kapatılmış ve istiflemeye hazır Cansızoğlu Nakliyat taşıma kasaları.',
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
      src: '/img/slider-3.jpg',
      width: 1920,
      height: 600,
      alt: 'Taşıma asansörü kurulmuş, yükleme bekleyen Cansızoğlu Nakliyat kamyonu',
      title: 'Yüklemeye hazır araç ve kurulu asansör',
      caption: 'Asansör kurulumu 20 dakika sürüyor, gerisini kat ve mesafe belirliyor.',
      description: 'Taşıma süresini belirleyen kat, asansör ve araç mesafesi etkenlerinin göründüğü an: kurulmuş mobil taşıma asansörü ve yükleme bekleyen Cansızoğlu Nakliyat kamyonu.',
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
    slug: 'ev-tasirken-yapilan-hatalar',
    title: 'Ev Taşırken En Sık Yapılan 8 Hata',
    metaTitle: 'Ev Taşırken En Sık Yapılan 8 Hata | Cansızoğlu Nakliyat',
    metaDescription:
      'Taşınmada çıkan sorunların çoğu birkaç tekrar eden hatadan geliyor. Sahada en çok gördüğümüz sekiz hata ve her birinin nasıl önleneceği.',
    excerpt:
      'Taşınmada çıkan sorunların büyük kısmı beklenmedik bir aksilikten değil, her taşımada tekrar eden birkaç hatadan geliyor. Sekizini ve çözümlerini yazdık.',
    date: '2026-09-08',
    readingMinutes: 7,
    image: {
      src: '/img/arac-sari-kamyon.jpg',
      width: 848,
      height: 480,
      alt: 'Üzerinde “Ev & Ofis Taşıma” yazan sarı kasalı Cansızoğlu Nakliyat kamyonu',
      title: 'Ev taşımada kullanılan kapalı kasa kamyon',
      caption: 'Aşağıdaki sekiz hatanın hiçbiri taşıma gününde çözülmüyor; hepsi öncesinde önleniyor.',
      description: 'Cansızoğlu Nakliyat’ın ev ve ofis taşımalarında kullandığı, asansörlü taşımacılık ibaresi ve çağrı hattı yazılı sarı kasalı kamyonu.',
    },
    body: [
      {
        type: 'p',
        text: 'Yirmi yılı aşkın süredir Ankara’da ev taşıyoruz ve sorunların hemen hepsi aynı yerlerden çıkıyor. Aşağıdaki sekiz maddenin ortak noktası şu: hiçbiri taşıma günü çözülemiyor, hepsi taşımadan önce önleniyor.',
      },
      { type: 'h2', text: '1. Her şeyi son güne bırakmak' },
      {
        type: 'p',
        text: 'En yaygın hata bu. Paketleme taşıma sabahı başlarsa ekip bekler, iş uzar, montaj ertesi güne sarkar. Az kullandığınız eşyaları en geç üç hafta önceden kolilemeye başlayın. Paketlemeyi biz yapacaksak da bir gün önceden gelip kolilemeyi bitirmemiz taşıma gününü belirgin şekilde kısaltır.',
      },
      { type: 'h2', text: '2. Kolileri ağır doldurmak' },
      {
        type: 'p',
        text: 'Kitabı büyük koliye doldurmak koliyi taşınamaz hale getirir, taban yırtılır ve içindekiler merdivende dökülür. Kural basit: ağır eşya küçük koliye, hafif eşya büyük koliye. Bir koli tek kişinin rahatça kaldırabileceği ağırlıkta olmalı.',
      },
      { type: 'h2', text: '3. Koli etiketlememek' },
      {
        type: 'p',
        text: 'Etiketsiz koli yeni evde tek tek açılır, bu saatler alır. Her kolinin üstüne hangi odadan çıktığını ve içinde ne olduğunu yazın. Kırılacak olanları ayrıca işaretleyin ki ekip istiflerken en üste koysun.',
      },
      { type: 'h2', text: '4. Buzdolabını son anda kapatmak' },
      {
        type: 'p',
        text: 'Buzdolabı taşımadan en az 4-12 saat önce fişten çekilmeli, buzu çözülmeli ve suyu boşaltılmalı. Aksi halde araç içinde su akar; hem dolap hem yanındaki koliler zarar görür. Yeni adreste de fişi hemen takmayın, en az 4-6 saat dik bekletin.',
      },
      { type: 'h2', text: '5. Çamaşır makinesinin nakliye cıvatalarını takmamak' },
      {
        type: 'p',
        text: 'Nakliye cıvataları tamburu gövdeye sabitler. Takılmadan taşınan makinede tambur yatakları darbe alır ve arıza çoğu zaman taşımadan haftalar sonra ortaya çıkar. Cıvatalar kayıpsa ekipten iç destek isteyin, makineyi boşluk bırakmadan sabitleriz.',
      },
      { type: 'h2', text: '6. Değerli eşyayı araca vermek' },
      {
        type: 'p',
        text: 'Nakit, ziynet, tapu, pasaport, kimlik ve önemli evrak taşıma sigortasının kapsamı dışındadır. Bunları kendi yanınızda taşıyın. Aynı şey ilaçlar ve şarj aletleri için de geçerli; taşıma günü elinizin altında olması gereken her şeyi tek bir çantada tutun.',
      },
      { type: 'h2', text: '7. Asansör ihtiyacını taşıma günü fark etmek' },
      {
        type: 'p',
        text: 'Bina asansörüne sığmayan koltuk, gardırop ve buzdolabı mobil asansör ister. Bunu taşıma sabahı fark etmek, asansör aracının başka bir işte olması demektir. Keşifte kat, asansör ölçüsü ve balkon durumu konuşulursa asansör aracı ekiple aynı saatte adreste olur.',
      },
      { type: 'h2', text: '8. Yeni adresi görmeden fiyat almak' },
      {
        type: 'p',
        text: 'Fiyatı belirleyen sadece eşya miktarı değil; varış adresinin katı, asansörü ve aracın yanaşabileceği mesafe de fiyata giriyor. İki adres de konuşulmadan verilen fiyat taşıma günü değişir. Biz keşifte iki ucu da sorar, fiyatı yazılı veririz ve sonra değiştirmeyiz.',
      },
      { type: 'h2', text: 'Kısa özet' },
      {
        type: 'ul',
        items: [
          'Paketlemeye üç hafta önce başlayın, taşıma gününe sadece yükleme kalsın.',
          'Ağır eşya küçük koliye; her koliye oda ve içerik yazın.',
          'Buzdolabını bir gün önce kapatın, çamaşır makinesinin cıvatalarını bulun.',
          'Değerli evrak ve ziyneti kendinizde tutun.',
          'Keşifte iki adresin de katını ve asansör durumunu konuşun.',
        ],
      },
      {
        type: 'p',
        text: 'Ankara içinde taşınacaksanız ücretsiz keşif için bizi arayın; eşyanızı yerinde görüp yazılı fiyat veriyoruz.',
      },
    ],
  },
  {
    slug: 'nakliyat-sozlesmesinde-dikkat-edilecekler',
    title: 'Evden Eve Nakliyat Sözleşmesinde Dikkat Edilecek 9 Madde',
    metaTitle: 'Nakliyat Sözleşmesinde Dikkat Edilecek 9 Madde',
    metaDescription:
      'Nakliyat sözleşmesinde asansör ücreti, sigorta kapsamı, eşya listesi ve teslim tarihi nasıl yazılmalı? İmzadan önce bakılacak dokuz madde.',
    excerpt:
      'Nakliyatta anlaşmazlıkların çoğu fiyattan değil, fiyata neyin dahil olduğunun konuşulmamasından çıkıyor. İmzadan önce şu dokuz maddeye bakın.',
    date: '2026-09-08',
    readingMinutes: 7,
    image: {
      src: '/img/ofis.webp',
      width: 1242,
      height: 699,
      alt: 'Cansızoğlu Nakliyat’ın Ankara Altındağ’daki ofisinin tabelalı cephesi',
      title: 'Sözleşmenin imzalandığı Cansızoğlu Nakliyat ofisi',
      caption: 'Sözleşme, taşımanın hangi şartlarla yapılacağının tek yazılı kaydıdır.',
      description: 'Cansızoğlu Nakliyat’ın Ankara Altındağ’daki ofisinin dış cephesi; firma adı ve çağrı hattı numarası yazılı tabela.',
    },
    body: [
      {
        type: 'p',
        text: 'Nakliyat işinde yaşanan anlaşmazlıkların büyük kısmı fiyatın yüksek olmasından değil, fiyata neyin dahil olduğunun baştan konuşulmamasından çıkıyor. Sözleşme tam da bunun için var. Aşağıdaki dokuz maddenin sözleşmede açıkça yazılı olması, taşıma günü sürpriz çıkmasını engeller.',
      },
      { type: 'h2', text: '1. Fiyata ne dahil?' },
      {
        type: 'p',
        text: 'Teklifte tek bir rakam varsa neyi kapsadığı madde madde yazılmalı: ambalaj malzemesi, işçilik, söküm, montaj, asansör, sigorta, kat farkı ve otopark. Hangisi dahil hangisi ek, ayrı ayrı görünsün.',
      },
      { type: 'h2', text: '2. Asansör ücreti' },
      {
        type: 'p',
        text: 'En sık ek fatura çıkan kalem bu. Hangi adreste asansör kurulacağı, kaç kez kurulacağı ve ücretin dahil olup olmadığı sözleşmede geçmeli. Çıkış ve varış adreslerinin ikisi de yüksek katsa iki ayrı kurulum olur.',
      },
      { type: 'h2', text: '3. Sigorta kapsamı ve bedeli' },
      {
        type: 'p',
        text: '“Sigortalıdır” ifadesi tek başına yeterli değil. Poliçenin hangi şirket tarafından, hangi bedel üzerinden düzenlendiği yazmalı ve poliçe kopyasını istemelisiniz. Kapsam dışında kalanları da öğrenin: nakit, ziynet, değerli evrak ve müşterinin kendi paketlediği koliler genellikle kapsam dışıdır.',
      },
      { type: 'h2', text: '4. Taşınacak eşya listesi' },
      {
        type: 'p',
        text: 'Keşifte çıkarılan eşya listesi sözleşmenin eki olmalı. Taşıma günü listede olmayan eşya çıkarsa fiyat değişebilir; bu farkın nasıl hesaplanacağı önceden belli olsun.',
      },
      { type: 'h2', text: '5. Tarih ve saat' },
      {
        type: 'p',
        text: 'Yükleme günü ve saati net yazılmalı. Şehirler arası taşımada teslim tarihi de belirtilmeli. Parsiyel taşımalarda firmalar teslim aralığı verir; bu aralığı imzadan önce öğrenin.',
      },
      { type: 'h2', text: '6. Ara depolama' },
      {
        type: 'p',
        text: 'Yeni adres hazır değilse eşyanın nerede, ne kadar süre ve hangi ücretle bekletileceği yazılmalı. Depoda geçen sürede sigortanın devam edip etmediği de ayrıca sorulmalı.',
      },
      { type: 'h2', text: '7. Ödeme planı' },
      {
        type: 'p',
        text: 'Kapora, kalan tutar ve ödemenin hangi aşamada yapılacağı yazılı olmalı. Montaj bitmeden tam ödeme istenmesi, işin yarım kalması durumunda elinizi zayıflatır.',
      },
      { type: 'h2', text: '8. Hasar durumunda ne olacak?' },
      {
        type: 'p',
        text: 'Hasarın kaç gün içinde bildirileceği, tespitin nasıl yapılacağı ve onarım mı bedel mi ödeneceği sözleşmede yer almalı. Teslim sırasında hasar gördüğünüz eşyayı tutanağa geçirin; sonradan bildirilen hasarın ispatı zorlaşır.',
      },
      { type: 'h2', text: '9. İptal ve tarih değişikliği' },
      {
        type: 'p',
        text: 'Taşıma tarihini kaç gün öncesine kadar ücretsiz değiştirebileceğiniz ve iptalde kaporanın ne olacağı yazılmalı. Ev alım satımında tarih kaymaları sık yaşandığı için bu madde göründüğünden daha önemli.',
      },
      { type: 'h2', text: 'İmzalamadan önce' },
      {
        type: 'ul',
        items: [
          'Sözleşmenin bir nüshasını mutlaka alın.',
          'Boş bırakılmış alan kalmasın; boş satırı çizin.',
          'Sözlü verilen her taahhüdü sözleşmeye yazdırın.',
          'Firmanın vergi numarası, adresi ve telefonu sözleşmede yazılı olsun.',
        ],
      },
      {
        type: 'p',
        text: 'Biz keşif sonrası fiyatı yazılı veriyor, eşya listesini sözleşmeye ekliyor ve taşıma bitene kadar rakamı değiştirmiyoruz. Sözleşme örneğini görmek isterseniz keşif sırasında ekibimizden isteyebilirsiniz.',
      },
    ],
  },
  {
    slug: 'tasinirken-buzdolabinin-fisi-ne-zaman-cekilir-ve-ne-zaman-takilir',
    title: 'Taşınırken Buzdolabının Fişi Ne Zaman Çekilir, Ne Zaman Takılır?',
    metaTitle: 'Buzdolabının Fişi Ne Zaman Çekilir, Ne Zaman Takılır?',
    metaDescription:
      'Buzdolabının fişi taşımadan kaç saat önce çekilmeli, yeni evde ne kadar beklemeli? Gazın yerine oturması, buz çözme ve taşıma sırasında dik durma kuralı.',
    excerpt:
      'Buzdolabında taşımadan sonra çıkan arızaların çoğu iki şeyden kaynaklanır: fişin geç çekilmesi ve yeni evde erken takılması. İkisinin de süresi bellidir.',
    date: '2026-07-02',
    readingMinutes: 6,
    image: {
      src: '/img/slider-1.jpg',
      width: 1920,
      height: 600,
      alt: 'Beyaz eşya taşımaya uygun, kapalı kasalı Cansızoğlu Nakliyat kamyonu',
      title: 'Beyaz eşya taşımada kullanılan kapalı kasa kamyon',
      caption: 'Buzdolabı kasada dik ve sabitlenmiş şekilde taşınır; yatırılan dolapta kompresör yağı devreye kaçar.',
      description: 'Beyaz eşyanın dik ve sabitlenmiş şekilde taşınabildiği kapalı kasa Cansızoğlu Nakliyat kamyonu.',
    },
    body: [
      {
        type: 'p',
        text: 'Taşımadan sonra “buzdolabım soğutmuyor” diye gelen çağrıların hemen hepsinin arkasında aynı iki hata var: fişin taşıma sabahı çekilmesi ve yeni adreste fişin hemen takılması. İkisinin de doğru zamanı bellidir ve ikisi de kullanıcının kontrolündedir.',
      },
      { type: 'h2', text: 'Fiş taşımadan kaç saat önce çekilmeli?' },
      {
        type: 'p',
        text: 'Buzdolabının fişi, taşımadan en az 4-12 saat önce çekilmelidir. Buzluğu çok buzlanmış bir dolapta bu süre 12 saate yaklaşır. Akşamdan çekmek en pratik yöntemdir: gece boyunca buz çözülür, sabah suyunu alıp temizlemek için vaktiniz olur.',
      },
      {
        type: 'ul',
        items: [
          'Fişi çekin ve kapağı aralık bırakın; kapalı kalan dolapta koku ve nem birikir.',
          'Buzluktaki buz çözülürken altına havlu veya geniş bir kap koyun.',
          'Damlama tepsisini ve su haznesini ayrıca boşaltın, çoğu suyun kaynağı burasıdır.',
          'Rafları ve çekmeceleri çıkarın; çıkmıyorsa streç filmle yerine sabitleyin.',
          'İç yüzeyi kuru bezle silin, dolap kuru şekilde taşınsın.',
        ],
      },
      { type: 'h2', text: 'Dolap neden dik taşınmalı?' },
      {
        type: 'p',
        text: 'Kompresördeki yağ, dolap yatırıldığında soğutucu gaz borularına kaçar. Bu yağ gaz devresinde kaldığında dolap ya hiç soğutmaz ya da kompresör zorlanarak çalışır. Bu yüzden buzdolabını kasada dik ve kayışla sabitlenmiş şekilde taşıyoruz; yatırmak zorunda kalınan durumlarda bekleme süresi uzuyor.',
      },
      { type: 'h2', text: 'Yeni evde fiş ne zaman takılır?' },
      {
        type: 'p',
        text: 'Dik taşınmış bir buzdolabı yeni adreste en az 4-6 saat dik bekletildikten sonra fişe takılır. Taşıma sırasında bir şekilde yatırılmışsa bu süre 12-24 saate çıkar. Bekleme süresi, kompresör yağının tekrar yerine inmesi içindir; acele edilen dolapta arıza ilk gün değil, birkaç hafta sonra ortaya çıkar.',
      },
      {
        type: 'ul',
        items: [
          'Dolabı yerine koyun, arkasında ve yanlarında havalandırma boşluğu bırakın.',
          'Ayaklarından terazisini alın; eğik duran dolapta kapak tam kapanmaz.',
          'Beklemeyi tamamladıktan sonra fişe takın, gıdayı hemen doldurmayın.',
          'İlk soğumanın tamamlanması 4-6 saat sürer; alışverişi ertesi güne bırakın.',
        ],
      },
      { type: 'h2', text: 'Derin dondurucu ve no-frost farkı' },
      {
        type: 'p',
        text: 'No-frost dolaplarda buz çözme kendiliğinden yapıldığı için boşaltma daha hızlı biter, ancak bekleme kuralı aynıdır. Derin dondurucularda ise buz kalınlığı fazla olduğu için fişin bir gün önceden çekilmesi gerekir; yoksa taşıma günü hâlâ su akıyor olur.',
      },
      { type: 'h2', text: 'Biz ne yapıyoruz?' },
      {
        type: 'p',
        text: 'Keşif sırasında buzdolabınızın fişini ne zaman çekeceğinizi tarihe göre söylüyoruz. Taşıma günü dolabı battaniye ve streç filmle sarıp kasaya dik sabitliyor, yeni adreste yerine koyup terazisini alıyoruz. Fişi ne zaman takacağınızı da teslimde ekip size hatırlatıyor.',
      },
      {
        type: 'p',
        text: 'Beyaz eşyanın tamamının nasıl paketlendiğini merak ediyorsanız beyaz eşya taşıma rehberimize de bakabilirsiniz.',
      },
    ],
  },
  {
    slug: 'tasinirken-kombi-sokulur-mu',
    title: 'Taşınırken Kombi Sökülür mü?',
    metaTitle: 'Taşınırken Kombi Sökülür mü? | Cansızoğlu Nakliyat',
    metaDescription:
      'Kombiyi taşınırken kim söker, nakliyat firması sökebilir mi, yetkili servis şart mı? Kiracı ve ev sahibi açısından kombi taşıma kuralları.',
    excerpt:
      'Kombi, nakliyat firmasının sökebileceği bir cihaz değil. Kimin sökeceği, ne zaman randevu alınacağı ve kombinin size mi ait olduğu baştan netleşmeli.',
    date: '2024-02-27',
    readingMinutes: 5,
    image: {
      src: '/img/slider-3.jpg',
      width: 1920,
      height: 600,
      alt: 'Apartmanın yanına kurulmuş mobil taşıma asansörü ve yanındaki Cansızoğlu kapalı kasa kamyonu',
      title: 'Taşıma günü kurulmuş asansör ve yükleme bekleyen araç',
      caption: 'Kombi sökümü taşıma gününden önce bitmiş olmalı; ekip geldiğinde cihaz duvardan inmiş olsun.',
      description: 'Ankara’da çok katlı bir binanın önüne kurulmuş Cansızoğlu Nakliyat mobil taşıma asansörü ve yükleme için bekleyen kapalı kasa taşıma kamyonu.',
    },
    body: [
      {
        type: 'p',
        text: 'Kombi, doğalgaz ve basınçlı su tesisatına bağlı bir cihaz olduğu için evden eve nakliyat firmalarının söküp takabileceği bir eşya değildir. Sökümü ve montajı yetkili servisin işidir. Bizim yaptığımız iş, sökülmüş kombiyi güvenli şekilde paketleyip yeni adrese taşımaktır.',
      },
      { type: 'h2', text: 'Kombi size mi ait?' },
      {
        type: 'p',
        text: 'İlk soru bu. Kombi çoğu kirada dairede ev sahibinin demirbaşıdır ve evde kalır. Kiracının kendi taktırdığı kombi ise sökülüp götürülebilir, ancak bunun kira sözleşmesinde veya ev sahibiyle yapılan yazılı bir mutabakatta geçmesi iyi olur. Cihaz sizin değilse taşıma planına hiç girmemeli.',
      },
      { type: 'h2', text: 'Kombiyi kim söker?' },
      {
        type: 'p',
        text: 'Kombinin markasının yetkili servisi. Söküm sırasında gaz vanası kapatılır, tesisat suyu boşaltılır, baca bağlantısı ayrılır ve cihaz duvar askısından indirilir. Bu işlemler yetki belgesi gerektirir; yetkisiz sökümde hem garanti düşer hem de gaz kaçağı riski doğar.',
      },
      { type: 'h2', text: 'Randevu ne zaman alınmalı?' },
      {
        type: 'ul',
        items: [
          'Servis randevusunu taşıma gününden en az bir hafta önce alın; yoğun dönemde servisler doludur.',
          'Sökümü taşımadan bir gün önceye ayarlayın, taşıma sabahına bırakmayın.',
          'Yeni adresteki montaj randevusunu da aynı anda alın; kombi bağlanmadan sıcak su ve ısıtma olmaz.',
          'Doğalgaz açma-kapama işlemleri için dağıtım şirketine ayrıca başvurmanız gerekebilir.',
        ],
      },
      { type: 'h2', text: 'Sökülen kombi nasıl taşınır?' },
      {
        type: 'p',
        text: 'Kombiyi baloncuklu naylonla sarıp köşelerini köşebent ile koruyoruz, sonra streç filmle sabitliyoruz. Cihaz dik konumda, kasada sıkışmayacak bir yere alınır. İçinde kalan su borularda donma veya damlama yaratabileceği için servisin tesisatı tam boşalttığından emin olun. Baca ve bağlantı parçalarını ayrı bir kutuya koyup etiketleyin; montajda aranan ilk şey bunlar oluyor.',
      },
      { type: 'h2', text: 'Petek ve klima için de aynısı geçerli mi?' },
      {
        type: 'p',
        text: 'Petekler tesisat işidir, tesisatçı söker. Klimada ise gaz toplama işlemi gerektiği için yine yetkili servis şarttır; gazı toplanmadan sökülen split klimanın iç ünitesi çoğu zaman yeniden gaz doldurmayı gerektirir. Sökülmüş klimayı ve peteği biz taşıyoruz, sökme ve montaj bize ait değil.',
      },
      {
        type: 'p',
        text: 'Taşıma planınızı yaparken kombi ve klima randevularını bize söylerseniz, taşıma saatini ona göre veriyoruz. Ücretsiz keşif için bizi arayabilirsiniz.',
      },
    ],
  },
  {
    slug: 'tasinirken-ankastre-sokulur-mu',
    title: 'Taşınırken Ankastre Sökülür mü?',
    metaTitle: 'Taşınırken Ankastre Sökülür mü? | Cansızoğlu Nakliyat',
    metaDescription:
      'Ankastre fırın, ocak, davlumbaz ve bulaşık makinesi taşınırken sökülür mü, kim söker, hangi bağlantılar için servis gerekir? Ankara’daki uygulamamız.',
    excerpt:
      'Ankastre cihazların sökümü nakliyat ekibinin işidir; gaz bağlantısı olan ocakta ise yetkili servis devreye girer. Aradaki sınırı anlattık.',
    date: '2024-02-28',
    readingMinutes: 5,
    image: {
      src: '/img/slider-2.jpg',
      width: 1920,
      height: 600,
      alt: 'Cansızoğlu Nakliyat’ın kamyon, kamyonet ve panelvanı bir sitenin önünde yan yana',
      title: 'Ankastre taşımada kullanılan araçlar',
      caption: 'Ankastre cihazlar tezgâhtan çıkarıldıktan sonra kendi kartonu veya battaniye ile paketlenip taşınır.',
      description: 'Cansızoğlu Nakliyat’ın farklı boyutlardaki taşıma araçları: büyük kapalı kasa kamyon, orta boy kamyonet ve parça eşya taşımada kullanılan panelvan.',
    },
    body: [
      {
        type: 'p',
        text: 'Ankastre fırın, ocak, davlumbaz, mikrodalga ve bulaşık makinesi mutfak dolabının içine gömülü olduğu için normal beyaz eşya gibi çekilip alınmaz. Sökülmesi gerekir. Bu işin kime ait olduğu, cihazın nasıl bağlandığına göre değişir.',
      },
      { type: 'h2', text: 'Ankastre size mi ait?' },
      {
        type: 'p',
        text: 'Kombide olduğu gibi burada da ilk soru bu. Ankastre cihazlar çoğu zaman mutfağın bir parçası sayılır ve ev sahibinin demirbaşıdır. Kendi taktırdığınız cihazları götürebilirsiniz; ev sahibine ait olanlar yerinde kalır. Taşımadan önce bunu netleştirmezseniz, taşıma günü sökülüp sökülmeyeceği tartışılır.',
      },
      { type: 'h2', text: 'Hangisini nakliyat ekibi söker?' },
      {
        type: 'p',
        text: 'Elektrik bağlantılı ankastre cihazların sökümünü ekibimiz ücretsiz yapıyor. Fırın, elektrikli ocak, davlumbaz ve mikrodalga bu gruba girer. Sigorta kapatılır, cihaz fişten veya klemensten ayrılır, dolaba sabitleyen vidalar sökülür ve cihaz tezgâhtan çıkarılır.',
      },
      {
        type: 'ul',
        items: [
          'Ankastre fırın: dolap içindeki vidalar sökülür, cihaz öne doğru çekilir.',
          'Elektrikli ocak: tezgâha silikonla yapışmışsa kenarı maket bıçağıyla açılır.',
          'Davlumbaz: baca borusu ayrılır, askı vidaları sökülür.',
          'Bulaşık makinesi: su giriş ve tahliye hortumu sökülür, vana kapatılır.',
        ],
      },
      { type: 'h2', text: 'Hangisi için servis gerekir?' },
      {
        type: 'p',
        text: 'Doğalgaza bağlı ankastre ocaklar. Gaz hattının sökülüp yeniden bağlanması yetkili servisin işidir; yetkisiz sökümde gaz kaçağı riski doğar ve cihazın garantisi düşer. Aynı şekilde ankastre şofben ve gazlı fırınlar için de servis randevusu almanız gerekir. Randevuyu taşıma gününden bir gün öncesine ayarlayın.',
      },
      { type: 'h2', text: 'Sökülen ankastre nasıl paketlenir?' },
      {
        type: 'p',
        text: 'Cihazın orijinal kartonu duruyorsa en iyisi odur. Yoksa cam kapaklı yüzeyleri baloncuklu naylonla kaplıyor, gövdeyi battaniyeye alıp streç filmle sarıyoruz. Fırın rafları, ocak ızgaraları ve tepsiler cihazın içinde bırakılmaz; ayrı kutuya konup etiketlenir. Cam kapaklı fırınlar kasada yatırılmaz, dik taşınır.',
      },
      { type: 'h2', text: 'Yeni adreste montaj' },
      {
        type: 'p',
        text: 'Elektrikli ankastre cihazların yeni mutfağa takılmasını da ekibimiz yapıyor; şart, yeni dolabın cihaza uygun ölçüde olması. Ölçü tutmuyorsa mutfakçı müdahalesi gerekir, bunu keşifte konuşuyoruz. Gazlı cihazların bağlantısı yine yetkili servise ait.',
      },
      {
        type: 'p',
        text: 'Mutfağınızda kaç ankastre cihaz olduğunu keşifte söylerseniz, taşıma süresini ve ekip sayısını buna göre planlıyoruz. Ücretsiz keşif için bizi arayabilirsiniz.',
      },
    ],
  },
  {
    slug: 'tasinirken-perdeler-nasil-paketlenir',
    title: 'Taşınırken Perdeler Nasıl Paketlenir?',
    metaTitle: 'Taşınırken Perdeler Nasıl Paketlenir?',
    metaDescription:
      'Perde, tül, korniş ve stor taşınırken nasıl sökülür, nasıl katlanır, hangi ambalajla korunur? Kırışmadan ve parça kaybetmeden taşımanın yolu.',
    excerpt:
      'Perde taşımanın zor tarafı kumaş değil, kornişle gelen küçük parçalar. İkisini de kaybetmeden taşımanın yolunu anlattık.',
    date: '2024-02-27',
    readingMinutes: 5,
    image: {
      src: '/img/tasima-kasalari.jpg',
      width: 848,
      height: 480,
      alt: 'Cansızoğlu Nakliyat logolu iki sarı taşıma kasası, asansör platformunun üzerinde',
      title: 'Perde ve tekstil paketlemede kullanılan taşıma kasaları',
      caption: 'Yıkanıp kurutulmuş perde, kapaklı kasada tozlanmadan yeni adrese gidiyor.',
      description: 'Cansızoğlu Nakliyat’ın evden eve taşımalarda kullandığı, firma logosu ve çağrı hattı yazılı sarı plastik taşıma kasaları.',
    },
    body: [
      {
        type: 'p',
        text: 'Perde, taşımada zarar görmesi en kolay eşyalardan biri değil; ama yeni evde en çok zaman kaybettiren eşya. Çünkü kumaş kırışmış, korniş parçaları kaybolmuş ve hangi perdenin hangi odaya ait olduğu unutulmuş oluyor. Aşağıdaki sıra bu üç sorunu da çözüyor.',
      },
      { type: 'h2', text: '1. Önce yıkayın, kuruduğundan emin olun' },
      {
        type: 'p',
        text: 'Perdeyi sökmeden değil, söktükten hemen sonra yıkayın. Taşınma öncesi yıkanan perde yeni evde doğrudan asılabilir hale gelir. Tek kritik nokta, kumaşın tamamen kurumuş olması. Nemli katlanan perde birkaç gün içinde küflenir ve koku kumaşa işler.',
      },
      { type: 'h2', text: '2. Kornişi ve küçük parçaları ayrı toplayın' },
      {
        type: 'ul',
        items: [
          'Korniş borularını uzunluklarına göre gruplayıp streç filmle demet yapın.',
          'Klips, halka, uç kapağı ve dübel gibi parçaları kilitli poşete koyun.',
          'Poşeti kendi kornişinin üzerine bantlayın; ayrı bir koliye atarsanız bulunmuyor.',
          'Duvardaki askı yerlerinin fotoğrafını çekin, yeni evde ölçü kıyaslamak için işe yarıyor.',
        ],
      },
      { type: 'h2', text: '3. Katlamak mı, rulo yapmak mı?' },
      {
        type: 'p',
        text: 'Pamuk ve keten gibi kolay kırışan kumaşlarda rulo daha iyi sonuç verir: perdeyi boyuna ikiye katlayıp geniş bir rulo hâline sarın. Tül, polyester ve blackout kumaşlar katlanarak taşınabilir. Stor ve jaluziler zaten sarılı durumdadır, sadece dış yüzeyini korumak yeterlidir.',
      },
      { type: 'h2', text: '4. Doğru ambalaj' },
      {
        type: 'p',
        text: 'Perdeyi doğrudan karton koliye koymayın; karton tozu ve mürekkebi açık renk kumaşa geçer. Kapaklı plastik taşıma kasası veya temiz bir kumaş torba en iyisi. Kasa yoksa perdeyi önce temiz bir çarşafa sarıp öyle koliye koyun. Streç filmi doğrudan kumaşa sarmayın, hava almayan kumaş terler.',
      },
      { type: 'h2', text: '5. Etiketleyin' },
      {
        type: 'p',
        text: 'Her paketin üzerine perdenin hangi odaya ait olduğunu ve kaç kanat olduğunu yazın: “salon, 2 kanat + tül”. Yeni evde perdeleri asmak, etiket varsa yirmi dakikalık iştir; etiket yoksa bütün kasaları açmak gerekir.',
      },
      { type: 'h2', text: 'Yeni evde ne zaman asmalı?' },
      {
        type: 'p',
        text: 'Perde, montaj bittikten ve temizlik yapıldıktan sonra asılır. Boya veya tadilat yapılacaksa perdeyi hiç açmayın. Rulo yapılmış perde bir iki gün asılı kaldıktan sonra kendi ağırlığıyla düzelir; ütü gerekirse kumaşın etiketindeki ısıyı aşmayın.',
      },
      {
        type: 'p',
        text: 'İsterseniz perde söküm ve paketlemeyi ambalajlı taşıma hizmetimizin içinde biz yapıyoruz. Keşifte kaç oda perdesi olduğunu söylemeniz yeterli.',
      },
    ],
  },
  {
    slug: 'tasinirken-esya-sarmak-icin-kagit',
    title: 'Taşınırken Eşya Sarmak İçin Kağıt: Hangisi, Ne Kadar, Nasıl?',
    metaTitle: 'Taşınırken Eşya Sarmak İçin Kağıt Rehberi',
    metaDescription:
      'Eşya sarmak için kraft kağıt mı beyaz kağıt mı? Hangi eşyada hangisi kullanılır, kaç kilo gerekir, nereden alınır? Ambalaj kağıdı rehberi.',
    excerpt:
      'Ambalaj kağıdı, koli kadar temel bir malzeme. Hangi eşyada kraft, hangisinde beyaz kağıt kullanıldığını ve ne kadar gerektiğini yazdık.',
    date: '2024-02-24',
    readingMinutes: 5,
    image: {
      src: '/img/tasima-kasalari.jpg',
      width: 848,
      height: 480,
      alt: 'Kapaklı sarı plastik taşıma kasaları, üzerinde Cansızoğlu Nakliyat etiketi',
      title: 'Kağıtla sarılmış mutfak eşyasının konduğu taşıma kasaları',
      caption: 'Tek tek kağıda sarılan tabaklar kasaya dik yerleştirilir; yatay istif daha kolay kırılır.',
      description: 'Eşya paketlemede kullanılan kapaklı sarı plastik taşıma kasaları; karton koliye göre daha dayanıklı oldukları için kırılacak eşya ve mutfak malzemesinde tercih ediliyor.',
    },
    body: [
      {
        type: 'p',
        text: 'Ambalaj kağıdı, taşımada balonlu naylondan bile çok kullanılan malzemedir. Mutfak eşyasının neredeyse tamamı kağıtla sarılır. Doğru kağıdı seçmek hem eşyayı korur hem de yeni evde açarken işi hızlandırır.',
      },
      { type: 'h2', text: 'Kraft kağıt ve beyaz kağıt farkı' },
      {
        type: 'p',
        text: 'Kraft kağıt, kahverengi ve daha kalın olandır. Dayanıklıdır, çizilmeye karşı iyi korur; mobilya yüzeyi, tencere, çerçeve arkası ve dolgu malzemesi olarak kullanılır. Beyaz ambalaj kağıdı ise mürekkepsizdir. Tabak, bardak, porselen ve açık renkli her şey bununla sarılır; kraft kağıt açık renk porselene iz bırakabilir.',
      },
      {
        type: 'ul',
        items: [
          'Beyaz kağıt: tabak, bardak, porselen, kristal, açık renk seramik.',
          'Kraft kağıt: tencere, tava, çerçeve, ayna arkası, mobilya yüzeyi.',
          'Kağıt dolgu: kolinin boşluklarını doldurmak, eşyanın oynamasını engellemek.',
          'Gazete kağıdı: kullanmayın, mürekkebi eşyaya geçer.',
        ],
      },
      { type: 'h2', text: 'Ne kadar kağıt gerekir?' },
      {
        type: 'p',
        text: 'Kaba bir ölçü olarak 2+1 bir ev için 8-10 kilo, 3+1 için 12-15 kilo ambalaj kağıdı yeterli oluyor. Mutfağı kalabalık evlerde bu miktar daha da artar. Kağıt genellikle kiloyla satılır ve bir kilo beyaz kağıt yaklaşık 60-70 yaprak eder.',
      },
      { type: 'h2', text: 'Nasıl sarılır?' },
      {
        type: 'p',
        text: 'Tabak gibi düz eşyalarda kağıdı masaya açın, eşyayı ortasına koyun, dört köşeyi üstüne katlayın ve bir tur daha sarın. İkinci tabağı ilkinin üstüne koyup aynı hareketi tekrarlarsanız ikisi tek pakette birleşir; bu hem hızlıdır hem de daha sağlam olur. Bardaklarda kağıdı önce içine yerleştirin, sonra dışını sarın.',
      },
      {
        type: 'ul',
        items: [
          'Tabakları koliye yatık değil, dik yerleştirin; dik duran tabak darbeye daha dayanıklıdır.',
          'Kolinin dibine ve üstüne buruşturulmuş kağıtla dolgu yapın.',
          'Kolide boşluk kalmasın; boşluk varsa eşya yolda hareket eder.',
          'Ağır tencereleri küçük koliye koyun, kağıdı aralarına sıkıştırın.',
        ],
      },
      { type: 'h2', text: 'Nereden alınır?' },
      {
        type: 'p',
        text: 'Ambalaj malzemesi satan mağazalardan, hırdavatçılardan ve nakliyat firmalarından kiloyla alabilirsiniz. Bizden taşınıyorsanız ambalaj kağıdı, koli, balonlu naylon ve streç film taşımanın içinde geliyor; ayrıca almanıza gerek kalmıyor. Kendiniz paketlemek isterseniz de malzemeyi taşımadan birkaç gün önce adresinize bırakıyoruz.',
      },
      {
        type: 'p',
        text: 'Paketlemenin tamamını bizim yapmamızı isterseniz ambalajlı taşıma hizmetimize bakabilir, keşif için bizi arayabilirsiniz.',
      },
    ],
  },
  {
    slug: 'tasinirken-strec-film',
    title: 'Taşınırken Streç Film Nasıl Kullanılır?',
    metaTitle: 'Taşınırken Streç Film Nasıl Kullanılır?',
    metaDescription:
      'Streç film taşımada nerede kullanılır, hangi eşyaya doğrudan sarılmaz, ne kadar gerekir? Mobilya, çekmece ve beyaz eşyada doğru kullanımı.',
    excerpt:
      'Streç film taşımanın en ucuz koruyucusu ama her eşyaya doğrudan sarılmaz. Nerede işe yaradığını, nerede zarar verdiğini yazdık.',
    date: '2024-02-24',
    readingMinutes: 5,
    image: {
      src: '/img/tasima-kasalari.jpg',
      width: 848,
      height: 480,
      alt: 'Depolamaya hazır, kapağı kapatılmış sarı taşıma kasaları',
      title: 'Streç filmle sabitlenmiş taşıma kasaları',
      caption: 'Streç film, battaniye ve balonlu naylonun üzerine sarılır; koruma değil sabitleme işini yapar.',
      description: 'Kısa ve uzun süreli eşya depolamada kullanılan, kapağı kapatılmış ve istiflemeye hazır Cansızoğlu Nakliyat taşıma kasaları.',
    },
    body: [
      {
        type: 'p',
        text: 'Streç film, taşımada en çok kullanılan ambalaj malzemesi. Ama çoğu kişinin sandığının aksine streç filmin işi darbeye karşı korumak değil; sabitlemek, kapatmak ve tozdan korumaktır. Darbeyi battaniye ve balonlu naylon karşılar, streç film onları eşyanın üzerinde tutar.',
      },
      { type: 'h2', text: 'Streç film nerede işe yarar?' },
      {
        type: 'ul',
        items: [
          'Çekmeceli mobilyada çekmecelerin yolda açılmasını engeller.',
          'Koltuk ve yatakta battaniyeyi ve naylonu yerinde tutar.',
          'Kablo, vida ve ayak gibi küçük parçaları mobilyanın kendisine sabitler.',
          'Kapaklı kasa ve kolilerin kapağını bant kullanmadan kapatır.',
          'Depolamada eşyayı tozdan ve nemden korur.',
        ],
      },
      { type: 'h2', text: 'Doğrudan sarılmaması gerekenler' },
      {
        type: 'p',
        text: 'Streç film hava geçirmez. Cilalı ahşap, deri koltuk ve boyalı yüzeye doğrudan sarıldığında sıcakta terleme yapar; nem yüzeyde kalır ve leke, hatta cila kalkması görülür. Bu yüzelere önce battaniye veya kağıt gelir, streç film en dışa sarılır. Aynı sebeple perdeyi ve kıyafeti de doğrudan streç filme almayın.',
      },
      { type: 'h2', text: 'Nasıl sarılır?' },
      {
        type: 'p',
        text: 'Ruloyu gergin tutup eşyanın etrafında her turda yarı yarıya bindirerek dolaşın. Gergin sarım, filmin tutmasını sağlar; gevşek sarılan film yolda açılır. Köşelerde biraz daha çevirin, yük en çok köşeden çarpar. Beş altı tur çoğu eşya için yeterlidir, gereğinden fazla sarım hem malzeme israfıdır hem de açması zorlaşır.',
      },
      { type: 'h2', text: 'Ne kadar gerekir?' },
      {
        type: 'p',
        text: 'Ortalama bir 3+1 evde 2-3 rulo geniş streç film ve bir rulo mini streç (elle kullanılan dar tip) iş görüyor. Mini streç, çekmece ve küçük parçalar için daha pratiktir. Bizden taşınıyorsanız streç film taşımanın içinde geliyor; kendiniz alacaksanız ambalajcılardan ve hırdavatçılardan bulabilirsiniz.',
      },
      { type: 'h2', text: 'Açarken dikkat' },
      {
        type: 'p',
        text: 'Yeni adreste streç filmi maket bıçağıyla keserken bıçağın ucunu eşyaya değdirmeyin; en sık çizik burada oluşuyor. Filmi yırtarak açmak daha güvenli. Depolamaya girecek eşyada filmi çıkarmayın, kasada ve depoda tozdan koruması devam etsin.',
      },
      {
        type: 'p',
        text: 'Ambalajın tamamını biz yaptığımızda malzeme bizden çıkıyor ve ücret keşifte verdiğimiz fiyata dahil oluyor. Ücretsiz keşif için bizi arayabilirsiniz.',
      },
    ],
  },
]

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug)
