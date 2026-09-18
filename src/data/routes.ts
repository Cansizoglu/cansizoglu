/**
 * Ankara'dan şehirler arası taşıma yapılan iller.
 *
 * Her ilin kendi mesafesi, güzergâhı, teslim planı ve saha notu var; sayfalar
 * şablondan il adı değiştirilerek üretilmiyor. Google, yalnızca yer adı değişen
 * seri sayfaları "doorway page" sayıp cezalandırdığı için bu ayrım önemli.
 *
 * Mesafeler karayolu üzerinden YAKLAŞIK değerlerdir; sayfalarda da yaklaşık
 * olduğu yazılıyor. Kesin süre ve fiyat keşifte netleşir.
 *
 * FİYAT YOK: şehirler arası fiyat listesi Musa'nın isteğiyle siteden
 * kaldırılmıştı. Bu sayfalarda da rakam verilmiyor, fiyatı neyin belirlediği
 * anlatılıp keşfe ve hesaplama aracına yönlendiriliyor.
 */
export type Route = {
  /** URL parçası: /sehirler-arasi/<slug> */
  slug: string
  city: string
  region: string
  /** Ankara'dan yaklaşık karayolu mesafesi (km) */
  km: number
  /** Yükün yolda geçirdiği yaklaşık süre */
  drive: string
  /** Güzergâh */
  via: string
  /** Yükleme ve teslim planı */
  plan: string
  /** İl özelinde taşımayı etkileyen gerçek koşullar */
  notes: string[]
  /** Taşımanın yoğunlaştığı ilçeler */
  popular: string[]
}

export const routes: Route[] = [
  // ---------------------------------------------------------------- Marmara
  {
    slug: 'ankara-istanbul-evden-eve-nakliyat',
    city: 'İstanbul',
    region: 'Marmara',
    km: 450,
    drive: '5 - 6 saat',
    via: 'Anadolu Otoyolu (O-4) üzerinden Bolu ve Kocaeli hattı',
    plan: 'Sabah yüklenen ev, aynı gün akşamüstü İstanbul’da olur; boşaltma ve montaj genelde ertesi sabaha planlanır.',
    notes: [
      'İstanbul’da işin süresini belirleyen şey mesafe değil, varış adresindeki trafik ve park imkânıdır. Bu yüzden boşaltmayı trafiğin açıldığı saatlere göre planlıyoruz.',
      'Bazı ilçelerde belediyelerin araç giriş saati kısıtlaması var; adresi keşifte öğrenip aracı o saate göre gönderiyoruz.',
      'Kadıköy, Beşiktaş ve Fatih gibi eski dokulu semtlerde sokaklar dar ve binalar asansörsüz. Bu adreslere kendi mobil asansörümüzü Ankara’dan birlikte götürüyoruz.',
      'Yeni yapılaşan ilçelerde site yönetimlerinin çoğu taşınma için önceden randevu ve evrak istiyor; bunu taşımadan önce sizinle birlikte hallediyoruz.',
    ],
    popular: ['Kadıköy', 'Ataşehir', 'Beylikdüzü', 'Başakşehir', 'Maltepe', 'Bahçeşehir'],
  },
  {
    slug: 'ankara-bursa-evden-eve-nakliyat',
    city: 'Bursa',
    region: 'Marmara',
    km: 385,
    drive: '4,5 - 5 saat',
    via: 'Eskişehir üzerinden İnegöl hattı',
    plan: 'Mesafe kısa olduğu için sabah yüklenen ev aynı gün Bursa’da boşaltılabiliyor; büyük evlerde teslim ertesi sabaha kalıyor.',
    notes: [
      'Bursa’ya giden yolun son bölümü İnegöl üzerinden virajlı bir hat. Mobilyanın araç içinde sabitlenmesine bu güzergâhta ayrıca dikkat ediyoruz.',
      'Nilüfer ve Görükle tarafındaki siteler yeni ve asansörlü; Osmangazi ve Yıldırım’ın eski mahallelerinde ise asansörsüz bina çok, mobil asansör gerekiyor.',
      'Üniversite dönemi başında Görükle yönüne parça eşya ve öğrenci evi taşıması yoğunlaşıyor; bu işler için kamyon yerine küçük araç gönderiyoruz.',
    ],
    popular: ['Nilüfer', 'Osmangazi', 'Yıldırım', 'Görükle', 'Mudanya', 'Gemlik'],
  },
  {
    slug: 'ankara-balikesir-evden-eve-nakliyat',
    city: 'Balıkesir',
    region: 'Marmara',
    km: 535,
    drive: '6 - 7 saat',
    via: 'Eskişehir ve Kütahya üzerinden',
    plan: 'Yükleme sabah yapılır, araç aynı gün yola çıkar; teslim ve montaj ertesi gün tamamlanır.',
    notes: [
      'Balıkesir taşımalarının önemli bölümü il merkezine değil, Edremit körfezi ve Ayvalık hattındaki yazlıklara yapılıyor. Bu adresler merkeze ek mesafe demek, keşifte bunu fiyata birlikte bakıyoruz.',
      'Körfez hattında sokaklar dar ve site içi yollar büyük araca uygun değil. Bu adreslerde büyük kamyondan küçük araca aktarma yapmak gerekebiliyor; planı önceden kuruyoruz.',
      'Bandırma ve Erdek tarafı yaz aylarında yoğun; bu dönemde taşıma tarihini en az bir hafta önceden almakta fayda var.',
    ],
    popular: ['Merkez', 'Edremit', 'Ayvalık', 'Burhaniye', 'Bandırma', 'Erdek'],
  },

  // -------------------------------------------------------------------- Ege
  {
    slug: 'ankara-izmir-evden-eve-nakliyat',
    city: 'İzmir',
    region: 'Ege',
    km: 590,
    drive: '6 - 7 saat',
    via: 'Afyonkarahisar ve Uşak üzerinden',
    plan: 'Sabah yüklenen ev aynı gün İzmir’e ulaşır; boşaltma ve montaj ertesi gün yapılır.',
    notes: [
      'İzmir’in yamaç mahallelerinde sokaklar hem dar hem eğimli. Mobil asansörün kurulabilmesi için düz zemin gerektiğinden, bu adreslerde asansörün nereye kurulacağını keşifte belirliyoruz.',
      'Bornova, Karşıyaka ve Çiğli tarafındaki sitelerde taşınma için yönetimden randevu almak gerekiyor; çoğu site hafta içi mesai saatine izin veriyor.',
      'Deniz kenarındaki adreslerde nem yüksek. Uzun süre depoda bekleyecek eşyada bu fark ediyor, ambalajı buna göre yapıyoruz.',
      'Ankara’dan İzmir’e taşınmaların büyük kısmı iş nakli ve emeklilik kaynaklı; bu işlerde eşyanın bir kısmı depoya, bir kısmı yeni eve gidiyor. İkisini tek sözleşmede birleştiriyoruz.',
    ],
    popular: ['Bornova', 'Karşıyaka', 'Buca', 'Çiğli', 'Gaziemir', 'Urla', 'Çeşme'],
  },
  {
    slug: 'ankara-denizli-evden-eve-nakliyat',
    city: 'Denizli',
    region: 'Ege',
    km: 475,
    drive: '5,5 - 6 saat',
    via: 'Afyonkarahisar ve Dinar üzerinden',
    plan: 'Sabah yükleme, aynı gün varış; teslim aynı akşam ya da ertesi sabah.',
    notes: [
      'Denizli merkez büyük ölçüde yeni yapılaşma, binaların çoğu asansörlü. Buna rağmen yük asansörü dar olduğu için gardırop ve koltuk takımı çoğu zaman mobil asansör istiyor.',
      'Pamukkale ve Merkezefendi tarafındaki sitelerde araç park alanı geniş, bu taşımayı hızlandırıyor.',
      'Denizli’ye tekstil ve iş yeri taşımaları da geliyor. Askılı tekstil taşımasını rafsız değil, askılı araçla yapıyoruz.',
    ],
    popular: ['Merkezefendi', 'Pamukkale', 'Çamlık', 'Bağbaşı', 'Sarayköy'],
  },
  {
    slug: 'ankara-mugla-evden-eve-nakliyat',
    city: 'Muğla',
    region: 'Ege',
    km: 620,
    drive: '7 - 8 saat',
    via: 'Afyonkarahisar, Denizli ve Yatağan üzerinden',
    plan: 'Araç sabah yüklenir, akşam Muğla’da olur; teslim ertesi gün. Bodrum ve Fethiye gibi ilçelere ek yarım gün eklenir.',
    notes: [
      'Muğla taşımalarının çoğu il merkezine değil Bodrum, Marmaris, Fethiye ve Datça’ya yapılıyor. Bu ilçeler merkeze 100-200 km daha uzak; mesafeyi keşifte varış ilçesine göre hesaplıyoruz.',
      'Sahil ilçelerinde site içi yollar ve villa girişleri büyük kamyona uygun olmayabiliyor. Gerekirse aktarma aracıyla çalışıyoruz.',
      'Yaz aylarında bölge hem trafik hem konaklama açısından yoğun. Haziran-Eylül arası taşıma tarihini önceden bağlamak gerekiyor.',
      'Yazlık taşımalarında eşyanın tamamı gitmiyor, bir kısmı Ankara’da depoda kalıyor. Depolama ve taşımayı tek sözleşmede yürütüyoruz.',
    ],
    popular: ['Bodrum', 'Marmaris', 'Fethiye', 'Menteşe', 'Datça', 'Ortaca'],
  },

  // ------------------------------------------------------------- İç Anadolu
  {
    slug: 'ankara-eskisehir-evden-eve-nakliyat',
    city: 'Eskişehir',
    region: 'İç Anadolu',
    km: 235,
    drive: '2,5 - 3 saat',
    via: 'Sivrihisar üzerinden D200 karayolu',
    plan: 'Ankara’ya en yakın illerden biri. Söküm, taşıma ve montajın tamamı çoğu zaman aynı gün bitiyor.',
    notes: [
      'Mesafe kısa olduğu için taşıma tek günde kapanıyor; eşya yolda gecelemiyor. Bu, kırılacak eşya ve beyaz eşya açısından en güvenli senaryo.',
      'Eskişehir merkezde binaların çoğu asansörlü ve sokaklar düzenli; mobil asansör ihtiyacı Ankara’ya göre daha az çıkıyor.',
      'Odunpazarı’nın eski mahallelerinde sokaklar dar ve taş döşeli. Bu adreslerde büyük araç sokağa giremediği için küçük araçla aktarma yapıyoruz.',
      'Öğrenci yoğunluğu yüksek olduğundan parça eşya ve tek oda taşıması çok geliyor; bunlar için küçük nakliye aracı gönderiyoruz.',
    ],
    popular: ['Tepebaşı', 'Odunpazarı', 'Çankaya', 'Bağlar', 'Seyitgazi'],
  },
  {
    slug: 'ankara-konya-evden-eve-nakliyat',
    city: 'Konya',
    region: 'İç Anadolu',
    km: 260,
    drive: '3 - 3,5 saat',
    via: 'Kulu ve Cihanbeyli üzerinden D715',
    plan: 'Yakın mesafe olduğu için taşıma aynı gün tamamlanıyor; sabah yükleme, öğleden sonra teslim ve montaj.',
    notes: [
      'Yol düz ve tek parça; eşya açısından en az sarsıntılı güzergâhlardan biri. Piyano ve hassas eşya taşımalarında bu avantaj.',
      'Konya merkezde caddeler geniş, araç yanaşması kolay. Bu yükleme ve boşaltma süresini belirgin şekilde kısaltıyor.',
      'Selçuklu ve Meram’daki yeni sitelerde yönetim randevusu isteniyor; hafta sonu taşınmaya izin vermeyen siteler var, tarihi ona göre kuruyoruz.',
      'Konya’ya iş yeri ve depo taşımaları da yapıyoruz; bu işleri mesai dışına alıp iş kaybını önlüyoruz.',
    ],
    popular: ['Selçuklu', 'Meram', 'Karatay', 'Ereğli', 'Akşehir'],
  },
  {
    slug: 'ankara-kayseri-evden-eve-nakliyat',
    city: 'Kayseri',
    region: 'İç Anadolu',
    km: 320,
    drive: '3,5 - 4 saat',
    via: 'Kırıkkale ve Kırşehir üzerinden',
    plan: 'Sabah yüklenen ev öğleden sonra Kayseri’de olur; teslim ve montaj aynı gün bitirilebiliyor.',
    notes: [
      'Kayseri’de kış sert geçiyor. Aralık-Mart arasındaki taşımalarda yükleme saatini buzlanmaya göre planlıyor, aracın zincirini hazır bulunduruyoruz.',
      'Kocasinan ve Melikgazi’deki yeni sitelerde binalar yüksek; yük asansörü dar olduğunda mobil asansörümüzü Ankara’dan birlikte götürüyoruz.',
      'Organize sanayi tarafına iş yeri ve makine taşıması talebi geliyor; bu işler evden eve taşımadan farklı ekipman istiyor, keşifte ayrıca değerlendiriyoruz.',
    ],
    popular: ['Melikgazi', 'Kocasinan', 'Talas', 'Hacılar', 'Develi'],
  },

  // ----------------------------------------------------------------- Akdeniz
  {
    slug: 'ankara-antalya-evden-eve-nakliyat',
    city: 'Antalya',
    region: 'Akdeniz',
    km: 485,
    drive: '6 - 7 saat',
    via: 'Afyonkarahisar ve Burdur üzerinden Toros geçişi',
    plan: 'Sabah yükleme, akşam Antalya’da varış; teslim ve montaj ertesi gün.',
    notes: [
      'Güzergâhın son bölümü Toros geçişi; uzun inişli ve virajlı bir yol. Yükün araç içinde kaymaması için sabitlemeyi bu hatta ayrıca sıkı yapıyoruz.',
      'Ankara’dan Antalya’ya taşınmaların büyük kısmı emeklilik ve kışlık ev kaynaklı. Bu taşımalarda eşyanın bir bölümü Ankara’da kalıyor; kalan kısmı depomuzda saklıyoruz.',
      'Yaz aylarında sıcaklık yüksek. Mobilya cilası ve elektronik eşya için yüklemeyi sabahın erken saatlerine alıyoruz.',
      'Alanya, Manavgat ve Kaş gibi ilçeler merkeze 100-200 km daha uzak; mesafeyi varış ilçesine göre hesaplıyoruz.',
    ],
    popular: ['Muratpaşa', 'Konyaaltı', 'Kepez', 'Alanya', 'Manavgat', 'Serik'],
  },
  {
    slug: 'ankara-adana-evden-eve-nakliyat',
    city: 'Adana',
    region: 'Akdeniz',
    km: 490,
    drive: '5,5 - 6,5 saat',
    via: 'Aksaray, Niğde ve Pozantı üzerinden O-21 otoyolu',
    plan: 'Sabah yükleme, aynı gün varış; boşaltma ve montaj ertesi sabah.',
    notes: [
      'Güzergâh büyük ölçüde otoyol, bu yüzden yol süresi mesafeye göre kısa ve tahmin edilebilir. Pozantı geçişi kışın kar nedeniyle yavaşlayabiliyor.',
      'Adana’da yaz sıcağı çok yüksek. Temmuz-Ağustos taşımalarında yüklemeyi ve boşaltmayı sabah erkene alıyoruz; öğle saatinde kapalı kasa araç içi aşırı ısınıyor.',
      'Seyhan ve Çukurova’daki sitelerde araç yanaşma alanı geniş, taşıma hızlı ilerliyor. Eski mahallelerde ise asansörsüz bina yaygın.',
      'Adana üzerinden Mersin, Osmaniye ve Hatay’a da taşıma yapıyoruz; aynı sefer içinde planlanabiliyor.',
    ],
    popular: ['Seyhan', 'Çukurova', 'Yüreğir', 'Sarıçam', 'Ceyhan'],
  },
  {
    slug: 'ankara-mersin-evden-eve-nakliyat',
    city: 'Mersin',
    region: 'Akdeniz',
    km: 485,
    drive: '5,5 - 6,5 saat',
    via: 'Aksaray, Niğde ve Pozantı üzerinden',
    plan: 'Sabah yükleme, aynı gün varış; teslim ertesi gün tamamlanır.',
    notes: [
      'Mersin’de yerleşim sahil boyunca uzun bir hat üzerinde. Merkeze taşıma ile Erdemli veya Silifke’ye taşıma arasında ciddi mesafe farkı var; keşifte varış noktasını netleştiriyoruz.',
      'Sahil hattındaki yazlık sitelerde taşınma yoğunluğu yaz başında toplanıyor; bu dönemde randevuyu önceden almak gerekiyor.',
      'Deniz kenarına yakın adreslerde nem yüksek; metal aksamlı mobilya ve beyaz eşyanın ambalajını buna göre yapıyoruz.',
      'Emeklilik nedeniyle Ankara’dan Mersin’e taşınanlarda eşyanın bir kısmı depoda kalıyor; depolama ile taşımayı tek sözleşmede birleştiriyoruz.',
    ],
    popular: ['Yenişehir', 'Mezitli', 'Toroslar', 'Erdemli', 'Silifke', 'Tarsus'],
  },

  // ------------------------------------------------------------ Güneydoğu
  {
    slug: 'ankara-gaziantep-evden-eve-nakliyat',
    city: 'Gaziantep',
    region: 'Güneydoğu Anadolu',
    km: 665,
    drive: '7 - 8 saat',
    via: 'Kırşehir, Kayseri ve Kahramanmaraş üzerinden',
    plan: 'Araç sabah yüklenir, akşam Gaziantep’te olur; teslim ve montaj ertesi gün yapılır.',
    notes: [
      'Gaziantep’e giden yolun büyük bölümü bölünmüş yol; süre uzun ama tahmin edilebilir. Yine de eşya bir gece yolda kaldığı için ambalajı uzun yol standardında yapıyoruz.',
      'Şahinbey ve Şehitkâmil’de yeni site sayısı fazla; çoğunda taşınma için yönetim randevusu ve asansör kullanım saati kısıtı var.',
      'Gaziantep’e iş yeri ve fabrika ofisi taşımaları da geliyor. Bu işlerde arşiv ve evrak taşımasını mühürlü kutularla yapıyoruz.',
      'Uzun mesafe taşımalarında sigortanın kapsamı daha da önemli. Sözleşmeyi ve poliçeyi taşıma öncesi size gösteriyoruz.',
    ],
    popular: ['Şahinbey', 'Şehitkâmil', 'Oğuzeli', 'Nizip', 'İslahiye'],
  },
  {
    slug: 'ankara-sanliurfa-evden-eve-nakliyat',
    city: 'Şanlıurfa',
    region: 'Güneydoğu Anadolu',
    km: 800,
    drive: '8,5 - 9,5 saat',
    via: 'Kayseri, Kahramanmaraş ve Gaziantep üzerinden',
    plan: 'Yükleme sabah yapılır, araç gün boyu yol alır; teslim ve montaj ertesi gün tamamlanır.',
    notes: [
      'Sekiz yüz kilometrelik bir hat; eşya en az bir gece araçta kalıyor. Bu yüzden mobilya köşelerini ayrıca koruyup yükü araç içinde kuşaklarla sabitliyoruz.',
      'Yaz aylarında bölgede sıcaklık çok yüksek. Elektronik eşya ve mobilya cilası için yükleme ve boşaltmayı günün serin saatlerine alıyoruz.',
      'Haliliye ve Karaköprü’de yeni yapılaşma yoğun, binalar yüksek. Mobil asansörümüzü Ankara’dan birlikte götürüyoruz, bölgede asansör aramak zaman kaybettiriyor.',
      'Bu mesafede fiyatı belirleyen en önemli kalem dönüş yükü durumu. Uygun dönüş yükü olan tarihlerde fiyat belirgin şekilde düşüyor; keşifte size uygun tarih aralığını söylüyoruz.',
    ],
    popular: ['Haliliye', 'Karaköprü', 'Eyyübiye', 'Siverek', 'Viranşehir'],
  },
  {
    slug: 'ankara-diyarbakir-evden-eve-nakliyat',
    city: 'Diyarbakır',
    region: 'Güneydoğu Anadolu',
    km: 900,
    drive: '10 - 11 saat',
    via: 'Kayseri, Malatya ve Elazığ üzerinden',
    plan: 'Sabah yüklenen ev ertesi gün Diyarbakır’da teslim edilir; montaj aynı gün tamamlanır.',
    notes: [
      'Dokuz yüz kilometre, filomuzun gittiği en uzun hatlardan biri. Bu mesafede sürücü dinlenme süreleri de plana giriyor; teslim saatini buna göre söylüyoruz, sonra değiştirmiyoruz.',
      'Malatya-Elazığ arasındaki bölüm dağlık ve virajlı. Yükün kaymaması için bu güzergâhta ara sabitleme kontrolü yapıyoruz.',
      'Kayapınar ve Bağlar’daki yeni sitelerde binalar yüksek; asansörsüz eski mahallelerde ise mobil asansör şart. Hangi adres olursa olsun asansörümüzü yanımızda götürüyoruz.',
      'Uzun mesafede tek seferde gitmek maliyeti düşürüyor. Eşyanızı başka bir müşterinin yüküyle birleştirip aktarma yapmıyoruz; araç sizin evinizle çıkıyor, sizin adresinizde boşalıyor.',
    ],
    popular: ['Kayapınar', 'Bağlar', 'Yenişehir', 'Sur', 'Ergani'],
  },
  {
    slug: 'ankara-mardin-evden-eve-nakliyat',
    city: 'Mardin',
    region: 'Güneydoğu Anadolu',
    km: 960,
    drive: '10,5 - 12 saat',
    via: 'Kayseri, Malatya, Diyarbakır üzerinden',
    plan: 'Yükleme sabah, teslim ertesi gün. Mesafe nedeniyle taşıma iki güne yayılır.',
    notes: [
      'Mardin’in eski şehir dokusunda sokaklar dar, eğimli ve çoğu yerde taş basamaklı. Büyük araç bu sokaklara giremiyor; yükü küçük araçla aktararak taşıyoruz ve bunu keşifte peşinen planlıyoruz.',
      'Yeni yerleşim olan Artuklu tarafında durum farklı; orada site girişleri ve park alanları büyük araca uygun.',
      'Yaz sıcağı yüksek, kış ise rüzgârlı ve serin geçiyor. Yükleme saatini mevsime göre belirliyoruz.',
      'Bu mesafede dönüş yükü fiyatı doğrudan etkiliyor. Tarihinizde esneklik varsa uygun dönüş yükü olan güne denk getirip maliyeti düşürebiliyoruz.',
    ],
    popular: ['Artuklu', 'Kızıltepe', 'Midyat', 'Nusaybin', 'Derik'],
  },

  // ------------------------------------------------------------- Karadeniz
  {
    slug: 'ankara-samsun-evden-eve-nakliyat',
    city: 'Samsun',
    region: 'Karadeniz',
    km: 415,
    drive: '5 - 5,5 saat',
    via: 'Çorum ve Amasya üzerinden D100',
    plan: 'Sabah yükleme, aynı gün varış; teslim ve montaj aynı akşam ya da ertesi sabah.',
    notes: [
      'Yol büyük ölçüde bölünmüş; Karadeniz illeri içinde Ankara’ya ulaşımı en rahat olanı Samsun. Bu, taşımanın tek güne sığmasını sağlıyor.',
      'Sahile yakın adreslerde nem ve tuzlu hava var. Ahşap mobilya ve metal aksam için ambalajı buna göre yapıyoruz, eşyayı araçta açıkta bırakmıyoruz.',
      'Atakum tarafında yeni siteler ve geniş yollar var; İlkadım’ın eski mahallelerinde ise sokaklar dar ve binalar asansörsüz.',
      'Kış aylarında yağış çok. Yükleme ve boşaltmayı yağmura göre planlıyor, gerekirse eşyayı ek örtüyle koruyoruz.',
    ],
    popular: ['Atakum', 'İlkadım', 'Canik', 'Tekkeköy', 'Bafra'],
  },
  {
    slug: 'ankara-trabzon-evden-eve-nakliyat',
    city: 'Trabzon',
    region: 'Karadeniz',
    km: 740,
    drive: '9 - 10 saat',
    via: 'Çorum, Samsun ve Ordu üzerinden Karadeniz sahil yolu',
    plan: 'Sabah yüklenen ev ertesi gün Trabzon’da teslim edilir.',
    notes: [
      'Güzergâhın büyük bölümü Karadeniz sahil yolu; manzaralı ama uzun. Süreyi kısaltmak için iç güzergâhı kullanmıyoruz, sahil yolu yük açısından daha güvenli.',
      'Trabzon’da arazi eğimli, binalar yamaca kurulu. Aracın yanaşacağı düz alan her adreste bulunmuyor; keşifte bunu yerinde konuşuyoruz.',
      'Yağış bölgede yılın büyük bölümünde var. Yükleme ve boşaltmada eşyayı örtüyle koruyor, ıslak zeminde asansör kurulumuna ayrıca dikkat ediyoruz.',
      'Merkeze uzak ilçelere (Of, Sürmene, Akçaabat) taşımalarda yol dar ve virajlı; büyük araç yerine orta boy araç daha uygun oluyor.',
    ],
    popular: ['Ortahisar', 'Akçaabat', 'Yomra', 'Arsin', 'Of', 'Sürmene'],
  },

  // ---------------------------------------------------------- Doğu Anadolu
  {
    slug: 'ankara-malatya-evden-eve-nakliyat',
    city: 'Malatya',
    region: 'Doğu Anadolu',
    km: 660,
    drive: '7,5 - 8,5 saat',
    via: 'Kırşehir, Kayseri ve Sivas üzerinden',
    plan: 'Sabah yükleme, akşam varış; teslim ve montaj ertesi gün.',
    notes: [
      'Kayseri sonrası güzergâh yükselti kazanıyor ve virajlı hale geliyor. Kırılacak eşyanın ambalajını bu hatta bir kat fazla yapıyoruz.',
      'Kış aylarında yol kar nedeniyle kapanabiliyor. Aralık-Mart arasında taşıma tarihini hava durumuna göre esnek tutmanızı öneriyoruz.',
      'Bölgedeki yeni yapılaşmada binalar yüksek ve yük asansörleri dar; mobil asansörümüzü Ankara’dan birlikte götürüyoruz.',
      'Malatya üzerinden Elazığ ve Adıyaman’a da taşıma yapıyoruz; aynı sefer içinde planlanabiliyor.',
    ],
    popular: ['Battalgazi', 'Yeşilyurt', 'Doğanşehir', 'Akçadağ'],
  },
  {
    slug: 'ankara-erzurum-evden-eve-nakliyat',
    city: 'Erzurum',
    region: 'Doğu Anadolu',
    km: 875,
    drive: '10 - 11 saat',
    via: 'Sivas, Erzincan ve Aşkale üzerinden',
    plan: 'Sabah yüklenen ev ertesi gün Erzurum’da teslim edilir.',
    notes: [
      'Erzurum’da kış uzun ve sert. Kasım-Nisan arasındaki taşımalarda araç zincirli çıkıyor, teslim saatini yol durumuna göre veriyoruz; garanti veremeyeceğimiz bir saat söylemiyoruz.',
      'Rakım yüksek ve sıcaklık çok düşebiliyor. Elektronik eşya ve sıvı içeren cihazlar için ayrı önlem alıyor, boşaltmayı günün en sıcak saatine planlıyoruz.',
      'Erzincan-Aşkale hattı dağlık; yükün sabitlemesini bu güzergâhta ara noktada kontrol ediyoruz.',
      'Üniversite ve kamu görevi nedeniyle Ankara-Erzurum arası tayin taşıması çok. Tayin taşımalarında evrak ve fatura düzenini kurum talebine uygun hazırlıyoruz.',
    ],
    popular: ['Yakutiye', 'Palandöken', 'Aziziye', 'Horasan', 'Oltu'],
  },
]

export const routeBySlug = (slug: string) => routes.find((r) => r.slug === slug)

/** Sayfalarda ve menüde bölgeye göre gruplamak için */
export const routeRegions = [
  'Marmara',
  'Ege',
  'İç Anadolu',
  'Akdeniz',
  'Güneydoğu Anadolu',
  'Karadeniz',
  'Doğu Anadolu',
] as const

export const routesByRegion = routeRegions.map((region) => ({
  region,
  routes: routes.filter((r) => r.region === region),
}))
