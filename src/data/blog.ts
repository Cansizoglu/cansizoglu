export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  date: string
  readingMinutes: number
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
    metaTitle: 'Beyaz Eşya Taşıma | Buzdolabı ve Çamaşır Makinesi Nasıl Taşınır?',
    metaDescription:
      'Beyaz eşya taşıma kuralları: buzdolabı neden dik taşınmalı, çamaşır makinesi nakliye vidaları, bulaşık makinesi ve fırın için taşıma hazırlığı.',
    excerpt:
      'Taşınmada en sık zarar gören eşyalar beyaz eşyalardır ve hasarların çoğu taşımadan değil, yanlış hazırlıktan çıkar. Doğru hazırlığı adım adım yazdık.',
    date: '2026-09-08',
    readingMinutes: 6,
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
]

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug)
