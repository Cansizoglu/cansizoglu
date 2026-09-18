export type Service = {
  slug: string
  title: string
  h1: string
  short: string
  metaTitle: string
  metaDescription: string
  icon: string
  intro: string[]
  features: { title: string; text: string }[]
  steps?: { title: string; text: string }[]
  faq: { q: string; a: string }[]
  featured?: boolean
}

export const services: Service[] = [
  {
    slug: 'ankara-evden-eve-nakliyat',
    title: 'Ankara Evden Eve Nakliyat',
    h1: 'Ankara Evden Eve Nakliyat',
    short:
      'Evinizin tüm eşyasını söküm, ambalaj, taşıma ve kurulum dahil tek ekiple taşıyoruz.',
    metaTitle: 'Ankara Evden Eve Nakliyat | Sigortalı ve Ambalajlı Taşıma',
    metaDescription:
      'Ankara evden eve nakliyat hizmeti: ücretsiz keşif, ambalajlı paketleme, asansörlü taşıma ve sigortalı nakliye. Ankara genelinde aynı gün randevu.',
    icon: 'home',
    intro: [
      'Ev taşımak sadece eşyayı bir adresten diğerine götürmek değildir. Mobilyanın doğru sökülmesi, kırılacak eşyanın doğru ambalajlanması, yükleme sırasının doğru kurulması ve yeni adreste her şeyin yerli yerine monte edilmesi gerekir. Cansızoğlu Nakliyat olarak Ankara genelinde bu işin tamamını tek ekiple yürütüyoruz.',
      'Taşınma öncesi ücretsiz keşif yapıyor, eşya listesini çıkarıyor ve size net bir fiyat veriyoruz. Keşif sırasında binanın kat durumu, asansör ihtiyacı, sokak genişliği ve park imkânı gibi işin süresini belirleyen ayrıntıları da not ediyoruz. Böylece taşıma günü sürpriz çıkmıyor.',
    ],
    features: [
      {
        title: 'Ücretsiz keşif ve net fiyat',
        text: 'Ekibimiz adresinize gelir, eşyanızı yerinde görür ve yazılı fiyat verir. Verilen fiyat taşıma günü değişmez.',
      },
      {
        title: 'Profesyonel ambalajlama',
        text: 'Balonlu naylon, streç film, kraft kâğıt, çok katlı koli ve köşe koruyucu ile her eşya kendi cinsine uygun ambalajlanır.',
      },
      {
        title: 'Söküm ve montaj',
        text: 'Gardırop, yatak, mutfak masası ve beyaz eşya marangoz ekibimizce sökülür, yeni adreste aynı özenle kurulur.',
      },
      {
        title: 'Sigortalı taşıma',
        text: 'Taşınan eşyanız sigorta kapsamındadır. Sözleşmeniz taşımadan önce imzalanır.',
      },
    ],
    steps: [
      { title: 'Keşif', text: 'Adrese gelir, eşyayı görür, fiyatı netleştiririz.' },
      { title: 'Ambalaj', text: 'Taşıma günü sabahı paketleme ve söküm yapılır.' },
      { title: 'Taşıma', text: 'Kapalı kasa araçla, gerekirse asansörle yükleme yapılır.' },
      { title: 'Kurulum', text: 'Yeni adreste montaj ve yerleşim tamamlanır.' },
    ],
    faq: [
      {
        q: 'Ankara evden eve nakliyat fiyatları neye göre belirlenir?',
        a: 'Eşya miktarı, çıkış ve varış adresinin katı, asansör ihtiyacı, mesafe ve ek hizmetler (ambalaj, depolama, montaj) fiyatı belirler. Net fiyat için ücretsiz keşif yapıyoruz.',
      },
      {
        q: 'Eşyalarımı kendim paketlemem gerekir mi?',
        a: 'Gerekmez. Ambalaj malzemesi ve paketleme işçiliği hizmetimize dahildir. İsterseniz kişisel eşyanızı kendiniz de hazırlayabilirsiniz.',
      },
      {
        q: 'Taşıma bir günde biter mi?',
        a: 'Standart bir 3+1 daire, asansör kullanıldığında genellikle aynı gün içinde taşınır ve kurulur. Eşya çok ise ekip sayısını artırırız.',
      },
    ],
    featured: true,
  },
  {
    slug: 'ankara-ofis-tasima',
    title: 'Ankara Ofis Taşıma',
    h1: 'Ankara Ofis ve İş Yeri Taşıma',
    short:
      'İş akışınızı durdurmadan, hafta sonu ve mesai dışı çalışarak ofisinizi taşıyoruz.',
    metaTitle: 'Ankara Ofis Taşıma | İş Yeri ve Kurumsal Nakliyat',
    metaDescription:
      'Ankara ofis taşıma hizmeti: mesai dışı ve hafta sonu çalışma, numaralandırılmış paketleme, sunucu ve arşiv taşıma. Kurumsal fatura ve sigortalı taşıma.',
    icon: 'office',
    intro: [
      'Ofis taşımacılığında en önemli şey iş kaybını en aza indirmektir. Bu yüzden kurumsal taşımalarımızı çoğunlukla cuma akşamı başlatıp pazartesi sabahına yetiştirecek şekilde planlıyoruz.',
      'Her masa, dolap ve kutu numaralandırılır; yeni ofiste aynı numaraya göre yerleşim yapılır. Çalışanlarınız pazartesi sabahı masasını kurulmuş halde bulur.',
    ],
    features: [
      {
        title: 'Mesai dışı çalışma',
        text: 'Akşam ve hafta sonu taşıma ile iş gününüz bölünmez.',
      },
      {
        title: 'Numaralı paketleme',
        text: 'Her kutu ve mobilya birim bazında etiketlenir, yeni adreste doğru odaya yerleşir.',
      },
      {
        title: 'Arşiv ve evrak güvenliği',
        text: 'Dosya ve arşiv kutuları kapalı ve mühürlü taşınır.',
      },
      {
        title: 'Kurumsal fatura',
        text: 'Sözleşmeli çalışma ve kurumsal faturalandırma yapılır.',
      },
    ],
    faq: [
      {
        q: 'Ofis taşırken çalışanlarımızın bir şey yapması gerekir mi?',
        a: 'Sadece kişisel çekmecelerini boşaltmaları yeterlidir. Geri kalan tüm paketleme ve taşıma bizim ekibimizce yapılır.',
      },
      {
        q: 'Sunucu ve teknik donanımı taşıyor musunuz?',
        a: 'Evet. Sunucu, ağ dolabı ve hassas cihazlar özel ambalajla, darbe emici sandıklarda taşınır.',
      },
    ],
    featured: true,
  },
  {
    slug: 'ankara-asansorlu-nakliyat',
    title: 'Ankara Asansörlü Nakliyat',
    h1: 'Ankara Asansörlü Nakliyat',
    short:
      'Dar merdiven ve yüksek katlarda eşyayı pencereden güvenle indirip çıkarıyoruz.',
    metaTitle: 'Ankara Asansörlü Nakliyat | Mobil Taşıma Asansörü',
    metaDescription:
      'Ankara asansörlü nakliyat: 1. kattan 12. kata kadar mobil asansörle hızlı, çizilmeden ve güvenli taşıma. Aynı gün asansörlü taşıma randevusu.',
    icon: 'lift',
    intro: [
      'Dar merdivenli binalarda eşyayı merdivenden indirmek hem riskli hem de yavaştır. Mobil taşıma asansörü, eşyayı balkondan veya pencereden doğrudan araca indirir; duvar, korkuluk ve mobilya zarar görmez.',
      'Kendi asansör araçlarımızla çalışıyoruz, bu yüzden taşıma gününde asansör gecikmesi yaşanmaz.',
    ],
    features: [
      { title: 'Kendi asansör filomuz', text: 'Dış tedarikçi beklemeden, taşıma saatinde asansör hazır olur.' },
      { title: 'Yüksek katlara erişim', text: 'Zeminden 12. kata kadar güvenli yükleme ve indirme.' },
      { title: 'Hızlı taşıma', text: 'Merdivenle saatler süren yükleme, asansörle dakikalara iner.' },
      { title: 'Eğitimli operatör', text: 'Asansörü sadece sertifikalı operatörlerimiz kullanır.' },
    ],
    faq: [
      {
        q: 'Asansör her binaya kurulabilir mi?',
        a: 'Aracın yanaşabileceği bir alan ve balkon veya geniş pencere gerekir. Keşif sırasında bunu yerinde kontrol ediyoruz.',
      },
      {
        q: 'Asansörlü nakliyat ne kadar sürer?',
        a: 'Standart bir dairenin yüklemesi asansörle genellikle 1,5 - 3 saat arasında tamamlanır.',
      },
    ],
    featured: true,
  },
  {
    slug: 'ankara-sehir-ici-nakliyat',
    title: 'Ankara Şehir İçi Nakliyat',
    h1: 'Ankara Şehir İçi Nakliyat',
    short: 'Ankara içinde ilçeden ilçeye aynı gün taşıma ve parça eşya nakliyesi.',
    metaTitle: 'Ankara Şehir İçi Nakliyat | Aynı Gün Taşıma',
    metaDescription:
      'Ankara şehir içi nakliyat: ilçeden ilçeye aynı gün ev ve parça eşya taşıma. Kapalı kasa araç, sigortalı ve ambalajlı taşımacılık.',
    icon: 'truck',
    intro: [
      'Ankara içinde ilçeden ilçeye yapılan taşımalarda önemli olan planlamadır. Trafik yoğunluğu, sokak genişliği ve otopark durumu taşıma süresini doğrudan etkiler.',
      'Şehir içi taşımalarınızı sabah erken saatte başlatarak aynı gün içinde tamamlıyoruz.',
    ],
    features: [
      { title: 'Aynı gün taşıma', text: 'Uygun randevu bulunduğunda taşıma aynı gün tamamlanır.' },
      { title: 'Tüm ilçelerde hizmet', text: 'Ankara merkez ve çevre ilçelerin tamamında çalışıyoruz.' },
      { title: 'Parça eşya seçeneği', text: 'Tek bir mobilya veya beyaz eşya için de araç gönderiyoruz.' },
      { title: 'Kapalı kasa araç', text: 'Eşyanız yağmur, toz ve dış etkenlerden korunur.' },
    ],
    faq: [
      {
        q: 'Sadece birkaç parça eşyam var, taşır mısınız?',
        a: 'Evet. Parça eşya taşıma hizmetimiz var, tek mobilya veya beyaz eşya için de araç gönderiyoruz.',
      },
    ],
    featured: true,
  },
  {
    slug: 'ankara-asansor-kiralama',
    title: 'Ankara Asansör Kiralama',
    h1: 'Ankara Asansör Kiralama',
    short: 'Saatlik ve günlük mobil taşıma asansörü kiralama, operatör dahil.',
    metaTitle: 'Ankara Asansör Kiralama | Saatlik Mobil Taşıma Asansörü',
    metaDescription:
      'Ankara asansör kiralama: operatörlü mobil taşıma asansörü, saatlik ve günlük kiralama. Mobilya, beyaz eşya ve inşaat malzemesi taşımak için uygun.',
    icon: 'lift',
    intro: [
      'Taşımayı kendiniz yapıyorsanız veya sadece birkaç büyük parçayı kata çıkarmanız gerekiyorsa, operatörlü asansörümüzü saatlik olarak kiralayabilirsiniz.',
      'Asansör kiralama; mobilya, beyaz eşya, inşaat ve tadilat malzemesi taşımak için de kullanılabilir.',
    ],
    features: [
      { title: 'Saatlik kiralama', text: 'Kısa süreli işler için saat bazlı ücretlendirme.' },
      { title: 'Operatör dahil', text: 'Asansörü bizim eğitimli operatörümüz kullanır.' },
      { title: 'Hızlı sevkiyat', text: 'Ankara içinde kısa sürede adrese ulaşırız.' },
    ],
    faq: [
      {
        q: 'Asansörü operatörsüz kiralayabilir miyim?',
        a: 'Hayır. Güvenlik gereği asansör her zaman kendi operatörümüzle birlikte gönderilir.',
      },
    ],
  },
  {
    slug: 'piyano-tasima',
    title: 'Piyano Taşıma',
    h1: 'Ankara Piyano Taşıma',
    short: 'Kuyruklu ve duvar piyanoları için özel ekipman ve eğitimli ekip.',
    metaTitle: 'Ankara Piyano Taşıma | Kuyruklu ve Duvar Piyanosu Nakliyesi',
    metaDescription:
      'Ankara piyano taşıma hizmeti: kuyruklu ve duvar piyanoları için özel kızak, kayış ve asansörle güvenli taşıma. Sigortalı piyano nakliyesi.',
    icon: 'piano',
    intro: [
      'Piyano hem çok ağır hem de darbeye çok hassas bir enstrümandır. Yanlış tutulan bir piyanoda ses tablası, pedal mekanizması veya cila kalıcı zarar görür.',
      'Piyano taşımalarını özel kızak, kayış ve battaniyelerle, gerektiğinde asansör kullanarak yapıyoruz. Kuyruklu piyanolarda ayaklar sökülür ve gövde yan yatırılarak taşınır.',
    ],
    features: [
      { title: 'Özel ekipman', text: 'Piyano kızağı, taşıma kayışı ve yastıklı battaniye kullanılır.' },
      { title: 'Eğitimli ekip', text: 'Piyano taşımayı bilen sabit bir ekibimiz var.' },
      { title: 'Asansörle indirme', text: 'Merdiven riskli ise piyano asansörle indirilir.' },
      { title: 'Sigortalı taşıma', text: 'Enstrümanınız değeri üzerinden sigortalanır.' },
    ],
    faq: [
      {
        q: 'Piyano taşındıktan sonra akort gerekir mi?',
        a: 'Her taşımadan sonra akort tavsiye edilir. Bu, taşıma hatasından değil, konum ve nem değişiminden kaynaklanır.',
      },
    ],
  },
  {
    slug: 'para-kasasi-tasima',
    title: 'Para Kasası Taşıma',
    h1: 'Ankara Para Kasası Taşıma',
    short: 'Ağır çelik kasalar için kızaklı taşıma, forklift ve asansör desteği.',
    metaTitle: 'Ankara Para Kasası Taşıma | Çelik Kasa Nakliyesi',
    metaDescription:
      'Ankara para kasası taşıma: 100 kg üzeri çelik kasalar için kızak, transpalet ve asansörlü taşıma. İş yeri ve banka kasası nakliyesi.',
    icon: 'safe',
    intro: [
      'Para kasaları ağırlığı nedeniyle normal taşıma yöntemleriyle kata çıkarılamaz. Yanlış taşıma hem kasaya hem de zemine zarar verir.',
      'Kasa taşımalarında ağırlığa göre kızak, transpalet veya asansör kullanıyor; zemin koruması sererek çalışıyoruz.',
    ],
    features: [
      { title: 'Ağırlığa uygun ekipman', text: 'Kasanın kilosuna göre doğru ekipman seçilir.' },
      { title: 'Zemin koruması', text: 'Mermer ve parke zeminler taşıma sırasında korunur.' },
      { title: 'Kata çıkarma', text: 'Merdivenden çıkmayan kasalar asansörle kata alınır.' },
    ],
    faq: [
      {
        q: 'Kaç kiloya kadar kasa taşıyabiliyorsunuz?',
        a: 'Ekipmanlarımızla birkaç tona kadar kasa taşıyabiliyoruz. Kasanın ağırlığını ve kat bilgisini önceden bildirmeniz yeterli.',
      },
    ],
  },
  {
    slug: 'askili-tekstil-tasima',
    title: 'Askılı Tekstil Taşıma',
    h1: 'Ankara Askılı Tekstil Taşıma',
    short: 'Ürünler askıda kalacak şekilde, ütü gerektirmeden taşınır.',
    metaTitle: 'Ankara Askılı Tekstil Taşıma | Konfeksiyon Nakliyesi',
    metaDescription:
      'Ankara askılı tekstil taşıma: gardırop tipi araçlarla kıyafetler askıda, kırışmadan taşınır. Mağaza ve konfeksiyon nakliyesi.',
    icon: 'hanger',
    intro: [
      'Kıyafetin katlanarak taşınması, varış noktasında ütü ve hazırlık işçiliği demektir. Askılı taşıma bu maliyeti tamamen ortadan kaldırır.',
      'Araçlarımızdaki askı sistemleri sayesinde takım elbise, gelinlik, mağaza koleksiyonu ve ev gardırobu askıda taşınır.',
    ],
    features: [
      { title: 'Askı sistemli araç', text: 'Araç içi ray sistemi ürünleri askıda tutar.' },
      { title: 'Kırışmadan teslim', text: 'Ürünler varışta doğrudan rafa veya gardıroba asılır.' },
      { title: 'Mağaza ve ev', text: 'Hem konfeksiyon mağazaları hem de ev gardırobu için uygundur.' },
    ],
    faq: [
      {
        q: 'Ev taşımada da askılı sistem kullanıyor musunuz?',
        a: 'Evet. Gardırop içeriğiniz askılardan çıkarılmadan taşınabilir, bu ev taşımada en çok zaman kazandıran hizmetlerden biridir.',
      },
    ],
  },
  {
    slug: 'sigortali-tasima',
    title: 'Sigortalı Taşıma',
    h1: 'Sigortalı Nakliyat',
    short: 'Taşınan eşyanız sözleşme ve sigorta kapsamında güvence altındadır.',
    metaTitle: 'Sigortalı Nakliyat Ankara | Sözleşmeli Taşımacılık',
    metaDescription:
      'Ankara sigortalı nakliyat: taşıma öncesi sözleşme, eşya listesi ve sigorta ile güvence altında taşımacılık hizmeti.',
    icon: 'shield',
    intro: [
      'Sigorta, taşımacılıkta ek bir hizmet değil standart olmalıdır. Taşımadan önce eşya listesi çıkarılır, sözleşme imzalanır ve eşyanız poliçe kapsamına alınır.',
      'Sözleşmede taşıma tarihi, adresler, hizmet kapsamı ve fiyat açıkça yazılıdır. Sözlü anlaşma ile çalışmıyoruz.',
    ],
    features: [
      { title: 'Yazılı sözleşme', text: 'Fiyat ve kapsam taşımadan önce yazıya geçer.' },
      { title: 'Eşya listesi', text: 'Taşınan her parça listelenir ve karşılıklı imzalanır.' },
      { title: 'Poliçe kapsamı', text: 'Taşıma sırasında oluşabilecek hasarlar güvence altındadır.' },
    ],
    faq: [
      {
        q: 'Sigorta ek ücretli mi?',
        a: 'Standart taşıma sigortası hizmetimize dahildir. Yüksek değerli özel eşyalar için ek poliçe yapılabilir.',
      },
    ],
  },
  {
    slug: 'ambalajli-tasima',
    title: 'Ambalajlı Taşıma',
    h1: 'Ambalajlı Taşıma ve Paketleme',
    short: 'Her eşya cinsine uygun profesyonel ambalaj malzemesiyle paketlenir.',
    metaTitle: 'Ambalajlı Taşıma Ankara | Profesyonel Paketleme Hizmeti',
    metaDescription:
      'Ankara ambalajlı taşıma: balonlu naylon, streç film, kraft kâğıt ve çok katlı koli ile profesyonel paketleme hizmeti.',
    icon: 'box',
    intro: [
      'Taşımada oluşan hasarların büyük kısmı yolda değil, yükleme ve indirme sırasında yetersiz ambalajdan kaynaklanır.',
      'Mobilya streçle, cam ve porselen balonlu naylonla, tablo ve ayna köşe koruyucu ve kartonla, beyaz eşya battaniye ve bantla paketlenir.',
    ],
    features: [
      { title: 'Malzeme dahil', text: 'Koli, streç, balonlu naylon ve bant fiyata dahildir.' },
      { title: 'Eşyaya özel ambalaj', text: 'Her eşya cinsi kendi yöntemiyle paketlenir.' },
      { title: 'Kutu etiketleme', text: 'Kolilerin üzerine oda ve içerik yazılır.' },
    ],
    faq: [
      {
        q: 'Ambalaj malzemesi için ayrıca ödeme yapacak mıyım?',
        a: 'Hayır, standart ambalaj malzemeleri ve işçiliği verilen fiyata dahildir.',
      },
    ],
  },
  {
    slug: 'banka-tasima',
    title: 'Banka Taşıma',
    h1: 'Banka ve Şube Taşıma',
    short: 'Şube taşımalarında kasa, arşiv ve sistem odası için özel planlama.',
    metaTitle: 'Ankara Banka Taşıma | Şube ve Kasa Nakliyesi',
    metaDescription:
      'Ankara banka taşıma: şube taşımacılığı, çelik kasa nakliyesi, arşiv ve sistem odası taşıma. Mesai dışı ve gizlilik esaslı çalışma.',
    icon: 'bank',
    intro: [
      'Banka şubesi taşımak, hem ağır kasa nakliyesi hem de hassas evrak ve donanım taşıma anlamına gelir. Bu taşımalar mesai dışında ve gizlilik esasıyla yapılır.',
      'Şube taşımalarında önce yerleşim planı çıkarılır, sonra kasa, arşiv, sistem odası ve mobilya sırayla taşınır.',
    ],
    features: [
      { title: 'Gizlilik esaslı çalışma', text: 'Ekip gizlilik taahhüdü ile çalışır.' },
      { title: 'Kasa nakliyesi', text: 'Ağır çelik kasalar özel ekipmanla taşınır.' },
      { title: 'Arşiv taşıma', text: 'Evrak kutuları mühürlü ve numaralı taşınır.' },
      { title: 'Mesai dışı planlama', text: 'Şube hizmeti aksamadan taşıma tamamlanır.' },
    ],
    faq: [
      {
        q: 'Şube taşıma kaç günde tamamlanır?',
        a: 'Şube büyüklüğüne göre değişir, çoğu şube hafta sonu içinde taşınıp kurulur.',
      },
    ],
  },
  {
    slug: 'esya-depolama',
    title: 'Eşya Depolama',
    h1: 'Ankara Eşya Depolama',
    short: 'Kısa ve uzun süreli, kameralı ve sigortalı eşya depolama.',
    metaTitle: 'Ankara Eşya Depolama | Kısa ve Uzun Süreli Depo',
    metaDescription:
      'Ankara eşya depolama: kameralı, nem kontrollü ve sigortalı depolarda kısa veya uzun süreli eşya saklama. Aylık depolama seçenekleri.',
    icon: 'warehouse',
    intro: [
      'Yeni eviniz hazır değilse veya yurt dışına çıkıyorsanız, eşyanızı depolarımızda güvenle saklayabilirsiniz.',
      'Eşyanız ambalajlanıp listelenerek depoya alınır, teslim alırken de aynı liste üzerinden kontrol edilir.',
    ],
    features: [
      { title: 'Kameralı depo', text: '7/24 kamera ve güvenlik takibi.' },
      { title: 'Nem ve toz kontrolü', text: 'Eşyanız paletli ve örtülü saklanır.' },
      { title: 'Aylık kiralama', text: 'Bir aydan başlayan esnek depolama süresi.' },
      { title: 'Listeli teslimat', text: 'Depoya giren ve çıkan her parça kayıt altındadır.' },
    ],
    faq: [
      {
        q: 'Eşyamı depodan istediğim zaman alabilir miyim?',
        a: 'Evet, bir iş günü önceden haber vermeniz yeterli. İsterseniz teslimatı adresinize de yaparız.',
      },
    ],
  },
  {
    slug: 'parca-esya-tasima',
    title: 'Parça Eşya Taşıma',
    h1: 'Ankara Parça Eşya Taşıma',
    short: 'Tek koltuk, beyaz eşya veya birkaç koli için uygun fiyatlı taşıma.',
    metaTitle: 'Ankara Parça Eşya Taşıma | Tek Eşya Nakliyesi',
    metaDescription:
      'Ankara parça eşya taşıma: tek koltuk, buzdolabı, çamaşır makinesi veya birkaç koli için uygun fiyatlı, aynı gün taşıma hizmeti.',
    icon: 'package',
    intro: [
      'Bütün evi taşımanız gerekmiyorsa tam kapasite araç kiralamak gereksiz masraftır.',
      'Parça eşya hizmetimizde sadece taşınacak eşyanın hacmi kadar ödeme yaparsınız.',
    ],
    features: [
      { title: 'Hacme göre fiyat', text: 'Sadece taşınan eşya kadar ödersiniz.' },
      { title: 'Aynı gün', text: 'Uygun saat bulunduğunda aynı gün taşınır.' },
      { title: 'Kata çıkarma dahil', text: 'Eşya kapıya değil, içeri kadar taşınır.' },
    ],
    faq: [
      {
        q: 'Tek bir buzdolabı taşır mısınız?',
        a: 'Evet. Tek parça eşya taşımaları da yapıyoruz, kata çıkarma dahildir.',
      },
    ],
  },
  {
    slug: 'ankara-okul-tasima',
    title: 'Ankara Okul ve Yurt Taşıma',
    h1: 'Ankara Okul, Yurt ve Kreş Taşıma',
    short:
      'Okul, yurt, kreş ve dershanelerin sıra, dolap, laboratuvar ve arşiv taşımasını tatil günlerinde tek ekiple yapıyoruz.',
    metaTitle: 'Ankara Okul Taşıma | Yurt, Kreş ve Dershane Nakliyat',
    metaDescription:
      'Ankara okul taşıma hizmeti: sıra, dolap, laboratuvar malzemesi, kütüphane ve arşiv taşıma. Tatil ve hafta sonu çalışma, sigortalı ve sözleşmeli nakliyat.',
    icon: 'box',
    intro: [
      'Okul taşıma, ev taşımaktan iki noktada ayrılıyor: işin belli bir tarihe kadar bitmesi zorunlu ve eşyanın büyük kısmı seri parçalardan oluşuyor. Sıra, dolap, tahta, laboratuvar tezgâhı ve kütüphane rafı tek tek değil, sayıyla taşınıyor. Bu yüzden planı parça sayısı üzerinden kuruyoruz.',
      'Çalışmayı eğitim aksamasın diye hafta sonuna, yarıyıl tatiline veya yaz tatiline alıyoruz. Keşifte sınıf sınıf sayım yapıyor, hangi malzemenin hangi araca ve hangi sıraya gireceğini önceden belirliyoruz. Böylece yeni binada malzeme aranmıyor, her sınıfın eşyası kendi sınıfına gidiyor.',
    ],
    features: [
      {
        title: 'Sınıf sınıf numaralı taşıma',
        text: 'Her sınıfın eşyası kendi numarasıyla etiketlenir ve yeni binada aynı numaralı sınıfa teslim edilir.',
      },
      {
        title: 'Tatil gününde çalışma',
        text: 'Taşımayı hafta sonu, yarıyıl veya yaz tatilinde yapıyoruz; eğitim aksamıyor.',
      },
      {
        title: 'Laboratuvar ve kütüphane',
        text: 'Cam malzeme, mikroskop ve deney seti ayrı kutulanır; kitaplar raf sırası bozulmadan taşınır.',
      },
      {
        title: 'Söküm ve montaj',
        text: 'Sıra, dolap, raf ve akıllı tahta marangoz ekibimizce sökülür ve yeni binada kurulur.',
      },
    ],
    steps: [
      { title: 'Sayım', text: 'Sınıf ve oda bazında malzeme sayımı yapılır.' },
      { title: 'Etiketleme', text: 'Her parça gideceği odanın numarasıyla etiketlenir.' },
      { title: 'Taşıma', text: 'Tatil gününde, kapalı kasa araçlarla taşınır.' },
      { title: 'Kurulum', text: 'Malzeme kendi odasına kurulur, sayım birlikte kontrol edilir.' },
    ],
    faq: [
      {
        q: 'Okul taşıma ne kadar sürer?',
        a: 'Süreyi derslik sayısı ve iki binanın kat durumu belirler. Orta büyüklükte bir okul genelde bir hafta sonunda taşınıp kurulur. Keşifte sayım yaptıktan sonra size gün üzerinden net bir plan veriyoruz.',
      },
      {
        q: 'Laboratuvar malzemesi taşınıyor mu?',
        a: 'Taşınıyor. Cam malzeme, mikroskop, deney seti ve kimyasal dolabı ayrı kutulara alınıp köşe koruyucuyla sabitleniyor. Kimyasal içeren malzemenin listesini önceden alıp taşıma kurallarına uygun şekilde planlıyoruz.',
      },
      {
        q: 'Taşıma eğitim dönemi içinde yapılabilir mi?',
        a: 'Yapılabilir ama önermiyoruz. Yine de gerekiyorsa çalışmayı hafta sonuna ve akşam saatlerine bölerek, bir seferde bir kat taşıyarak yürütüyoruz; okul bu süre boyunca açık kalabiliyor.',
      },
    ],
  },
  {
    slug: 'ankara-kurumsal-tasimacilik',
    title: 'Ankara Kurumsal Taşımacılık',
    h1: 'Ankara Kurumsal Taşımacılık',
    short:
      'Kurumlar için sözleşmeli, faturalı ve planlı taşıma: şube, depo, arşiv ve personel taşınmaları tek muhatapla yürür.',
    metaTitle: 'Ankara Kurumsal Taşımacılık | Sözleşmeli Firma Nakliyat',
    metaDescription:
      'Ankara kurumsal taşımacılık: şube, depo, arşiv ve personel taşınması. Sözleşmeli, faturalı, sigortalı ve mesai dışı çalışma. Kurumlara özel keşif.',
    icon: 'office',
    intro: [
      'Kurumsal taşımacılık, tek seferlik bir ev taşımasından farklı yürüyor. Kurumun muhatabı tek olmak zorunda, tarih ve saat kesin olmak zorunda, çalışma çoğu zaman mesai dışına denk gelmek zorunda. Cansızoğlu Nakliyat olarak kurumlara bu üç şartı karşılayan bir düzen kuruyoruz.',
      'Her iş için tek bir sorumlu veriyoruz; kurum tarafındaki idari işler biriminin muhatabı o oluyor. Fiyat sözleşmeye yazılıyor, fatura kesiliyor, taşıma sigortalı yapılıyor. Şube açılışı, depo değişikliği, arşiv nakli veya personel taşınması gibi tekrar eden işler için yıllık anlaşma da yapıyoruz.',
    ],
    features: [
      {
        title: 'Tek muhatap',
        text: 'İşin başından sonuna aynı sorumlu ilgilenir; kurum içinde kimse farklı kişilerle uğraşmaz.',
      },
      {
        title: 'Sözleşme ve fatura',
        text: 'Fiyat sözleşmeye yazılır, taşıma faturalı ve sigortalı yapılır.',
      },
      {
        title: 'Mesai dışı çalışma',
        text: 'Taşıma akşam, gece veya hafta sonu yapılabilir; kurumun işi durmaz.',
      },
      {
        title: 'Tekrar eden işler için anlaşma',
        text: 'Şube, depo ve personel taşınması düzenli olan kurumlarla yıllık fiyat anlaşması yapıyoruz.',
      },
    ],
    steps: [
      { title: 'Keşif', text: 'Yetkiliyle birlikte iki adres görülür, iş planı çıkarılır.' },
      { title: 'Sözleşme', text: 'Fiyat, tarih ve kapsam yazılı hale getirilir.' },
      { title: 'Taşıma', text: 'Belirlenen saatte, numaralı kutu düzeniyle taşınır.' },
      { title: 'Teslim', text: 'Liste üzerinden kontrol yapılır, kurulum tamamlanır.' },
    ],
    faq: [
      {
        q: 'Kurumsal taşımada fatura ve sözleşme veriliyor mu?',
        a: 'Veriliyor. Her kurumsal işte taşıma sözleşmesi imzalanıyor, taşıma sigortalı yapılıyor ve fatura kesiliyor. Sözleşmede fiyat, tarih, kapsam ve sorumluluklar yazılı oluyor.',
      },
      {
        q: 'Taşıma mesai saatleri dışında yapılabilir mi?',
        a: 'Yapılabilir. Kurumsal işlerin çoğunu akşam, gece veya hafta sonu yapıyoruz ki kurumun işleyişi durmasın. Çalışma saatini keşifte birlikte belirliyoruz.',
      },
      {
        q: 'Düzenli taşıma ihtiyacı olan kurumlarla anlaşma yapıyor musunuz?',
        a: 'Yapıyoruz. Şube, depo veya personel taşınması düzenli olan kurumlarla yıllık fiyat anlaşması yapıyor, her iş için ayrı pazarlık gerekmeden sabit koşullarla çalışıyoruz.',
      },
    ],
  },
]

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)
export const featuredServices = services.filter((s) => s.featured)
