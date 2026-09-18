import { sayfa, urlHizmet, urlYazi } from '@/lib/urls'
/**
 * Anasayfadaki sekmeli makale bölümü.
 * Her sekme, hedeflenen bir anahtar kelimeye yazılmış özgün metindir.
 */
export type HomeArticle = {
  id: string
  label: string
  heading: string
  paragraphs: string[]
  bullets?: { title: string; text: string }[]
  link?: { href: string; label: string }
}

export const homeArticles: HomeArticle[] = [
  {
    id: 'ankara-evden-eve-nakliyat',
    label: 'Ankara Evden Eve Nakliyat',
    heading: 'Ankara Evden Eve Nakliyat Nasıl Yapılır?',
    paragraphs: [
      'Ankara evden eve nakliyat, eşyanın bir adresten diğerine götürülmesinden çok daha fazlasıdır. İşin tamamı; keşif, söküm, ambalajlama, yükleme, taşıma, indirme ve montaj olmak üzere yedi ayrı aşamadan oluşur. Bu aşamalardan biri atlandığında hasar riski doğrudan artar. Cansızoğlu Nakliyat olarak bu yedi aşamanın tamamını kendi ekibimizle, taşeron kullanmadan yürütüyoruz.',
      'Taşımaya her zaman ücretsiz keşifle başlıyoruz. Keşifte eşya listesi çıkarılır, binanın kat durumu ve asansör ihtiyacı yerinde görülür, aracın yanaşacağı alan belirlenir. Ardından fiyat yazılı olarak verilir ve sözleşmeye geçirilir. Bu yüzden taşıma günü fiyatı değişen, eşyayı araca yükleyip pazarlık açan firmalarla aramızdaki fark ilk günden bellidir.',
      'Ankara’nın her ilçesinde farklı zorluklar var: Keçiören’de dar merdivenler, Çankaya’da park sorunu, Etimesgut’ta site kuralları. Yirmi yılı aşan saha tecrübemiz sayesinde hangi adreste neyle karşılaşacağımızı önceden biliyor, taşıma planını buna göre kuruyoruz.',
    ],
    bullets: [
      { title: 'Ücretsiz keşif', text: 'Adresinize gelip eşyanızı yerinde görüyoruz.' },
      { title: 'Ambalaj dahil', text: 'Koli, streç ve balonlu naylon fiyata dahildir.' },
      { title: 'Söküm ve montaj', text: 'Kendi marangoz ekibimiz söküp yeniden kuruyor.' },
      { title: 'Sigortalı taşıma', text: 'Her taşıma sözleşmeli ve sigorta kapsamındadır.' },
    ],
    link: { href: urlHizmet('ankara-evden-eve-nakliyat'), label: 'Evden eve nakliyat hizmetimiz' },
  },
  {
    id: 'ankara-nakliyat',
    label: 'Ankara Nakliyat',
    heading: 'Ankara Nakliyat Hizmetlerimizin Kapsamı',
    paragraphs: [
      'Ankara nakliyat denince akla yalnızca ev taşımak gelir; oysa bir nakliyat firmasının işi çok daha geniştir. Cansızoğlu Nakliyat olarak ev taşımanın yanında ofis ve iş yeri taşıma, banka şubesi taşıma, piyano ve para kasası gibi özel eşya nakliyesi, askılı tekstil taşıma, asansör kiralama ve eşya depolama hizmetleri veriyoruz.',
      'Bu hizmetlerin tamamını tek çatı altında toplamamızın sebebi basit: taşınma sırasında ihtiyaçlar iç içe geçer. Eviniz hazır değilse eşyanız depoya girmeli, piyanonuz varsa ayrı ekip gelmelidir, iş yeriniz taşınacaksa mesai dışı çalışılmalıdır. Hepsini aynı firmadan almak hem koordinasyonu kolaylaştırır hem de sorumluluğu tek yere bağlar.',
      'Araçlarımız, taşıma asansörlerimiz ve personelimiz bize aittir. Taşıma gününde adresinize kimin geleceğini ve nasıl çalışacağını biz biliyoruz; bu, aracını ve ekibini her iş için dışarıdan bulan firmalarla aramızdaki en temel farktır.',
    ],
    bullets: [
      { title: 'Ev ve ofis', text: 'Konut ve iş yeri taşımacılığının tamamı.' },
      { title: 'Özel eşya', text: 'Piyano, para kasası, askılı tekstil ve sanat eseri.' },
      { title: 'Depolama', text: 'Kameralı depolarda kısa ve uzun süreli saklama.' },
      { title: 'Asansör', text: 'Saatlik ve günlük operatörlü asansör kiralama.' },
    ],
    link: { href: sayfa.hizmetler, label: 'Tüm hizmetlerimiz' },
  },
  {
    id: 'ankara-ev-tasima',
    label: 'Ankara Ev Taşıma',
    heading: 'Ankara Ev Taşıma Sürecinde Nelere Dikkat Etmeli?',
    paragraphs: [
      'Ankara ev taşıma sürecinde en çok yapılan hata, her şeyin son iki güne bırakılmasıdır. Oysa iyi bir taşınma iki hafta önce başlar: taşınma tarihi netleşir, keşif yapılır, kullanılmayan eşyalar ayrılır ve abonelik nakilleri başlatılır. Bu hazırlık yapıldığında taşıma günü yalnızca eşyanın araca yüklendiği bir güne dönüşür.',
      'İkinci sık hata, telefonda verilen düşük fiyata güvenmektir. Eşya görülmeden verilen fiyat, taşıma günü eşya araca yüklendikten sonra yükselme eğilimindedir. Biz bu yüzden hiçbir işe keşif yapmadan fiyat vermiyoruz; verdiğimiz fiyatı da sözleşmeye yazıyoruz.',
      'Üçüncü konu zamanlamadır. Ay başı, ay sonu ve yaz ayları Ankara’da nakliyatın en yoğun olduğu dönemlerdir. Taşınma tarihinizi en az bir hafta önceden ayırtmanız, hem istediğiniz saati almanızı hem de ekibin işi acele etmeden yapmasını sağlar.',
    ],
    bullets: [
      { title: '14 gün önce', text: 'Keşif yapılır, tarih ve fiyat netleşir.' },
      { title: '7 gün önce', text: 'Abonelik nakilleri ve ilk paketleme başlar.' },
      { title: '1 gün önce', text: 'Buzdolabı kapatılır, değerli evrak ayrılır.' },
      { title: 'Taşıma günü', text: 'Söküm, ambalaj, taşıma ve montaj tamamlanır.' },
    ],
    link: { href: urlYazi('tasinmadan-once-yapilacaklar-listesi'), label: 'Taşınma hazırlık listesi' },
  },
  {
    id: 'ankara-evden-eve-nakliyat-fiyatlari',
    label: 'Ankara Evden Eve Nakliyat Fiyatları',
    heading: 'Ankara Evden Eve Nakliyat Fiyatları Neye Göre Belirlenir?',
    paragraphs: [
      'Nakliyatta herkes için geçerli tek bir fiyat yoktur. Ankara evden eve nakliyat fiyatları; eşya miktarı, çıkış ve varış katı, asansör ihtiyacı, iki adres arası mesafe ve istenen ek hizmetlere göre belirlenir. Aynı büyüklükteki iki evin fiyatı, biri asansörlü binada diğeri dördüncü katta asansörsüz binadaysa birbirinden belirgin şekilde farklı çıkar.',
      'Fiyat karşılaştırırken dikkat edilmesi gereken şey, fiyatın neyi kapsadığıdır. Ambalaj malzemesi dahil mi, montaj var mı, sigorta yapılıyor mu, asansör ücreti ayrı mı? Bizde ambalaj malzemesi, paketleme işçiliği, söküm ve montaj ile sigorta verilen fiyatın içindedir; sonradan ek kalem çıkmaz.',
      'Aşağıdaki tabloda ortalama fiyat aralıklarımızı paylaşıyoruz. Net fiyat için ücretsiz keşif yapıyor ve fiyatı yazılı olarak veriyoruz.',
    ],
    bullets: [
      { title: 'Eşya hacmi', text: 'Kaç parça eşya taşınacağı ana etkendir.' },
      { title: 'Kat ve asansör', text: 'Yüksek kat ve asansörsüz bina süreyi uzatır.' },
      { title: 'Mesafe', text: 'Şehir içi ve şehirler arası fiyatı değiştirir.' },
      { title: 'Ek hizmet', text: 'Depolama ve özel eşya taşıma ayrı hesaplanır.' },
    ],
    link: { href: sayfa.teklif, label: 'Ücretsiz fiyat teklifi alın' },
  },
  {
    id: 'ankara-nakliye',
    label: 'Ankara Nakliye',
    heading: 'Ankara Nakliye Hizmetinde Sigorta ve Sözleşme',
    paragraphs: [
      'Ankara nakliye sektöründe en çok yaşanan sorun, işin sözlü anlaşmayla yapılmasıdır. Sözleşme olmadığında ne taşınacak eşyanın listesi, ne fiyat, ne de sorumluluk yazılı hale gelir. Bir hasar durumunda da elinizde dayanacağınız hiçbir belge olmaz.',
      'Biz her taşımayı sözleşmeyle yapıyoruz. Sözleşmede taşıma tarihi, çıkış ve varış adresi, hizmet kapsamı ve fiyat açıkça yazılıdır. Yanında taşınan her parçanın listelendiği eşya listesi bulunur ve bu liste karşılıklı imzalanır. Teslimde aynı liste üzerinden kontrol yapılır.',
      'Taşıma sigortası bizde ek hizmet değil standarttır. Yüksek değerli özel eşyalar için ayrıca poliçe yapılabilir. Bu düzen sayesinde müşterimiz, eşyasını kime teslim ettiğini ve karşılığında neyi güvence altına aldığını bilerek taşınır.',
    ],
    bullets: [
      { title: 'Yazılı sözleşme', text: 'Fiyat ve kapsam taşımadan önce yazıya geçer.' },
      { title: 'Eşya listesi', text: 'Taşınan her parça listelenir ve imzalanır.' },
      { title: 'Sigorta dahil', text: 'Standart taşıma sigortası fiyata dahildir.' },
      { title: 'Kurumsal fatura', text: 'İş yeri taşımalarında faturalı çalışma.' },
    ],
    link: { href: urlHizmet('sigortali-tasima'), label: 'Sigortalı taşıma hizmetimiz' },
  },
  {
    id: 'ankara-tasima-sirketleri',
    label: 'Ankara Taşıma Şirketleri',
    heading: 'Ankara Taşıma Şirketleri Arasından Doğru Firmayı Seçmek',
    paragraphs: [
      'Ankara taşıma şirketleri arasında seçim yaparken bakılması gereken ilk şey, firmanın kendi aracı ve ekibi olup olmadığıdır. İşi aldıktan sonra araç ve eleman arayan firmalarda taşıma günü kimin geleceği belli olmaz. Cansızoğlu Nakliyat olarak araç, taşıma asansörü ve personelin tamamı bize aittir.',
      'İkinci bakılacak şey keşif ve sözleşmedir. Adrese gelip eşyayı görmeden fiyat veren, sözleşme imzalamaktan kaçınan bir firmayla çalışmak risklidir. Üçüncüsü ise referanstır: firmanın gerçek müşteri yorumları, sosyal medya hesapları ve sahadaki araçları görünür olmalıdır.',
      'Ankara’da 1998’den bu yana çalışan bir aile şirketiyiz. Bu süre boyunca aynı işi, aynı isimle ve aynı adreste yaptık. Taşınma gibi insanın bütün evini bir güne emanet ettiği bir işte en büyük teminat, firmanın arkasında duracağı bir geçmişinin olmasıdır.',
    ],
    bullets: [
      { title: 'Kendi filosu', text: 'Araç, asansör ve ekip firmaya ait olmalı.' },
      { title: 'Keşif şart', text: 'Eşyayı görmeden verilen fiyat güvenilir değildir.' },
      { title: 'Sözleşme', text: 'Yazılı sözleşmeden kaçınan firmadan uzak durun.' },
      { title: 'Görünür referans', text: 'Gerçek yorum, adres ve sosyal medya hesabı.' },
    ],
    link: { href: '/hakkimizda', label: 'Firmamız hakkında' },
  },
  {
    id: 'ankara-asansorlu-nakliyat',
    label: 'Ankara Asansörlü Nakliyat',
    heading: 'Ankara Asansörlü Nakliyat Ne Zaman Gerekir?',
    paragraphs: [
      'Ankara asansörlü nakliyat, ilçelerin büyük bölümündeki bina stoğu yüzünden istisna değil, kural hâline gelmiş bir hizmettir. Keçiören, Altındağ ve Mamak gibi ilçelerde apartmanların çoğu asansörsüzdür ve merdiven boşlukları koltuk, dolap, buzdolabı gibi büyük parçaların geçmesine izin vermez. Mobil taşıma asansörü bu noktada eşyayı pencereden indirerek hem süreyi hem hasar riskini düşürür.',
      'Asansörün asıl faydası, çoğu kişinin düşündüğünün aksine sadece kolaylık değil maliyettir. Asansörsüz 4. kattan yapılan bir taşımada merdivende geçen saatler işçiliğe yansır; aynı iş asansörle üç dört saat kısalır. Bu yüzden 3. kat ve üzerindeki taşımalarda asansör, toplam fiyatı çoğu zaman aşağı çeker.',
      'Mobil asansörlerimiz firmamıza aittir ve taşıma ekibiyle aynı saatte adreste olur. Asansörün kurulacağı alan keşif sırasında belirlenir; sokak eğimliyse ya da park doluysa aracın konumlanacağı yer önceden ayarlanır. Böylece taşıma günü asansör bekleme gibi bir sorun yaşanmaz.',
    ],
    bullets: [
      { title: 'Kendi asansörümüz', text: 'Dışarıdan kiralanmaz, ekiple aynı saatte gelir.' },
      { title: '3. kat ve üzeri', text: 'Bu katlarda asansör genelde daha ucuza denk gelir.' },
      { title: 'Hasar riski düşer', text: 'Eşya merdivende duvara çarpmadan iner.' },
      { title: 'Süre yarıya iner', text: 'Merdivende geçen saatler ortadan kalkar.' },
    ],
    link: { href: urlHizmet('ankara-asansorlu-nakliyat'), label: 'Asansörlü nakliyat hizmetimiz' },
  },
  {
    id: 'ankara-ofis-tasima',
    label: 'Ankara Ofis Taşıma',
    heading: 'Ankara Ofis Taşıma: İş Kaybı Olmadan Taşınmak',
    paragraphs: [
      'Ankara ofis taşıma işlerinde asıl maliyet taşınan masa ve dolaplar değil, ofisin kapalı kaldığı süredir. Bu yüzden ofis taşımayı ev taşımadan farklı planlıyoruz: hedef eşyayı taşımak değil, ertesi sabah herkesin oturup çalışabileceği bir ofis teslim etmektir.',
      'Bunu sağlayan yöntem numaralandırmadır. Yeni ofisin yerleşim planı önceden çıkarılır, her çalışanın masasına bir numara verilir ve o masadan çıkan tüm koliler, bilgisayarlar ve kişisel dolaplar aynı numarayı taşır. Yeni adreste eşya doğrudan yerine gider, kimse kutusunu aramaz.',
      'Ankara’da plaza ve iş merkezlerinde yük asansörü için yönetimden saat alınması gerekir; bunu taşımadan bir hafta önce ayarlıyoruz. Ofis taşımalarını mümkün olduğunca hafta sonuna alıyoruz ki pazartesi sabahı çalışma düzeni kurulmuş olsun.',
    ],
    bullets: [
      { title: 'Numaralı yerleşim', text: 'Her masa ve kolisi numaralı, yerleşme yarı sürede biter.' },
      { title: 'Hafta sonu taşıma', text: 'Cuma akşamı başlar, pazartesi iş aksamaz.' },
      { title: 'Arşiv düzeni', text: 'Klasörler raf sırası bozulmadan taşınır.' },
      { title: 'Kurumsal fatura', text: 'İş yeri taşımalarında faturalı ve sözleşmeli çalışma.' },
    ],
    link: { href: urlHizmet('ankara-ofis-tasima'), label: 'Ofis taşıma hizmetimiz' },
  },
  {
    id: 'ankara-parca-esya-tasima',
    label: 'Ankara Parça Eşya Taşıma',
    heading: 'Ankara Parça Eşya Taşıma ve Tek Eşya Nakliyesi',
    paragraphs: [
      'Ankara parça eşya taşıma, tüm evi değil yalnızca birkaç parçayı taşımanız gereken durumlar için verdiğimiz hizmettir. Yeni aldığınız bir koltuk takımı, ikinci el bir beyaz eşya, öğrenci evinden alınan birkaç mobilya ya da depoya kaldırılacak eşyalar bu kapsama girer. Tam ev taşıma fiyatı ödemenize gerek kalmaz.',
      'Bu işlerde en sık yapılan hata, eşyayı ambalajsız taşımaktır. Tek parça bile olsa koltuk streçlenmeden, dolap köşeleri korunmadan araca yüklendiğinde çizik ve ezik kaçınılmazdır. Parça eşya taşımalarında da aynı ambalaj standardını uyguluyoruz.',
      'Parça eşya taşımaları genellikle 1-2 saatte tamamlanır ve çoğu zaman aynı gün içinde randevu verilebilir. Asansör gerekiyorsa mobil asansörümüz bu işler için de aynı şekilde kurulur.',
    ],
    bullets: [
      { title: 'Aynı gün randevu', text: 'Küçük işlerde çoğu zaman aynı gün gelebiliyoruz.' },
      { title: 'Uygun fiyat', text: 'Tam ev taşıma ücreti ödemezsiniz.' },
      { title: 'Aynı ambalaj', text: 'Tek parça da olsa streç ve köşe koruması yapılır.' },
      { title: 'Asansör dahil', text: 'Gerekirse mobil asansör bu işlerde de kurulur.' },
    ],
    link: { href: sayfa.hesaplama, label: 'Parça eşya fiyatını hesaplayın' },
  },
]
