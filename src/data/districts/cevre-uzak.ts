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
      body: [
        'Çarşının temposu, Beypazarı merkezde taşıma saatini belirleyen ilk ölçüdür. Park alanı sınırlı olduğundan aracı esnaf açılmadan yerleştirebilmek için Ankara’dan sabah çok erken çıkıyoruz. Cumartesi pazar kurulan sokaklardaki adresler için taşımayı hafta içine almayı öneriyor, tarihi bu doğrultuda birlikte seçiyoruz. Bu sayede araç uzun süre yolu kapatmadan yükleme tamamlanır ve öğleden sonra yeni adreste kuruluma geçilebilir.',
        'Tarihi konaklarda merdivenler dar olduğu için aynalı dolap, camlı vitrin ya da eski parçalar tek tek ve elle indirilir. Her biri ayrı ambalajlanır, kapalı kasa araçta sabitlenir. Keşifte konağın içini ekibe gezdirmeniz, sökülmesi gereken mobilyaları ve aracın yanaşabileceği noktayı netleştirir. Aktarma gerekiyorsa bu da yazılı fiyata baştan eklenir, taşıma günü sürpriz çıkmaz. Ambalaj, söküm, montaj ve sigorta fiyata dahildir; Beypazarı merkez evden eve nakliyat için keşif ücretsizdir.',
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
      body: [
        'Yeni apartmanların ağırlıkta olduğu Kurtuluş, Beypazarı’nda taşımanın en akıcı ilerlediği adreslerden biridir. Bina önlerinde yeterli alan bulunduğu için firmaya ait mobil asansör doğrudan kurulur, araç ise hemen yanında bekler. Ekip Ankara’dan asansör aracıyla birlikte geldiği için ayrıca bir randevu ayarlamanıza gerek kalmaz. Bina yönetimine taşıma saatini önceden bildirmek de bina önünde yer açılmasını kolaylaştırır.',
        'Üst kat dairelerde asansörlü taşıma süreyi belirgin biçimde kısaltır; uzun yol öncesinde kazanılan zaman, kurulumun da aynı gün bitmesini sağlar. Taşınmadan önce kullanılmayan eşyayı ayıklamak hem hacmi hem araçtaki yükü hafifletir. Kurtuluş evden eve nakliyat işlerinde ambalaj, söküm, montaj ve sigorta yazılı fiyata dahildir; keşif ise ücretsizdir. Uzun yol için kırılabilir parçalar sıkı ambalajlanır, mobilya kapalı kasa araçta kuşakla sabitlenir. Kutuları oda adıyla etiketlemeniz, yeni evde yerleşmeyi de hızlandırır.',
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
      body: [
        'Eğimli bir yerleşimde mobil asansörün güvenle çalışması, aracın dengeli kurulmasına bağlıdır. Zafer mahallesinde bu yüzden keşfin en önemli parçası, bina çevresinde düz bir zemin bulmaktır. Uygun nokta belirlendikten sonra taşıma günü ekip vakit kaybetmeden kuruluma geçer ve eşya doğrudan araca iner. Bina önü uygun değilse asansör aracı yakındaki düz bir alana kurulur ve ekip sayısı buna göre ayarlanır.',
        'Kış aylarında sabahları yollar buzlanabildiği için taşımayı gün ortasına alıyoruz; Ankara’dan çıkış saatini de buna göre ayarlıyoruz. Bu mahallede taşınacaksanız tarihi esnek tutmanız, hava koşullarına göre en güvenli günü seçmemize yardımcı olur. Kırılacak eşyaların uzun yol ambalajıyla korunması ve araç içinde sabitlenmesi standarttır. Keşif ücretsizdir, fiyat yazılı verilir ve taşıma günü değişmez. Ambalaj, söküm, montaj ve sigorta da bu fiyata dahildir. Zafer evden eve nakliyat için uygun tarihi keşifte birlikte seçebiliriz.',
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
      body: [
        'Üç ve dört katlı apartmanların yaygın olduğu Nallıhan merkezde, taşımanın kilit noktası asansör aracının ekiple aynı anda adreste olmasıdır. Mobil asansörü Ankara’dan birlikte getiriyoruz; böylece yükleme beklemeden başlar ve uzun yolculuk öncesinde zaman kaybedilmez. Mobil asansör, üst kat dairelerdeki eşyayı merdivene girmeden indirerek hem süreyi hem hasar riskini azaltır. Bina yönetimine taşıma saatini önceden bildirmeniz de yardımcı olur.',
        'Merkez sokakların çoğunda araç bina önüne yanaşabildiği için yükleme mesafesi kısadır. Yine de taşıma gününden önce bina önünde yer ayrılması işleri hızlandırır. Uzun yolda en çok zarar gören beyaz eşya ve mobilya kuşakla sabitlenir, kırılabilir parçalar çift kat ambalajlanır. Nallıhan nakliyat işlerinde keşif ücretsizdir; yol ve mesafe yazılı fiyata baştan dahil edilir. Kurulumun aynı gün bitmesi için kutularınızı kapatılmış ve etiketlenmiş halde hazır tutmanız yeterlidir.',
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
      body: [
        'Lojman ve site tipi yapıların çoğunlukta olduğu Çayırhan’da taşıma, kapıdaki izinle başlar. Girişlerde araç kaydı istendiği için araç ve ekip bilgilerini taşıma gününden bir gün önce ilgili birime iletiyoruz. Bu hazırlık yapılmadığında araç kapıda bekleyebilir; uzun yoldan gelen bir ekip için bu, günün tamamını etkiler. Siz de lojman yönetimine taşıma gününü önceden bildirerek bu süreci hızlandırabilirsiniz.',
        'Blok aralarındaki geniş alanlar mobil asansörün rahatça kurulmasına imkân tanır. Lojmandan çıkış yapıyorsanız teslim gününü taşıma planıyla uyumlu seçmeniz önemlidir. Çayırhan evden eve nakliyat işlerinde eşyalar kapalı kasa araçta, kuşakla sabitlenerek taşınır. Ambalaj, söküm, montaj ve sigorta fiyata dahildir; keşifte verilen yazılı fiyat taşıma günü değişmez. Kutuları oda oda etiketlemeniz ve kullanmadığınız eşyayı taşınmadan önce ayıklamanız, yeni adreste yerleşmeyi kolaylaştırır. Mesafe ve yol yazılı fiyata baştan dahil edilir.',
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
      body: [
        'Eski taş evlerle yeni apartmanların yan yana durduğu Ayaş merkezde, tek bir taşıma planı her adrese uymaz. Keşifte önce bina tipini ve sokağın genişliğini görüyor, ardından aracın nereye kadar gelebileceğini belirliyoruz. Dar sokaklarda büyük araç yerine küçük araçla aktarma yapılır; bu aktarma da yazılı fiyata baştan eklenir. Bu sayede taşıma günü adreste karar vermek gerekmez, ekip doğrudan işe başlar.',
        'Yeni apartmanlarda asansörlü taşıma tercih edilir; mobil asansör sayesinde üst katlardaki eşya merdivene girmeden indirilir. Taş evlerde ise kapı ve merdivenler dar olabildiği için büyük mobilyaların sökülmesi gerekebilir; söküm ve montaj fiyata dahildir. Taşınacağınız yeni adresin anahtarını önceden almanız, kurulumun aynı gün bitmesini kolaylaştırır. Ambalaj ve sigorta da fiyata dahildir, eşya kapalı kasa araçta taşınır. Ayaş merkez evden eve nakliyat için keşif ücretsizdir ve yazılı fiyat taşıma günü değişmez.',
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
      body: [
        'Sinanlı’da taşınan evlerin çoğu bahçelidir ve bu, eşya listesinin şehirdeki bir daireden daha uzun olması demektir. Bahçe mobilyası, saksılar ve tarım aletleri için ayrı bir ambalaj planı yapıyor, bunları ev eşyasıyla karıştırmadan paketliyoruz. Bu eşya araca en son yüklenir, yeni adreste de ilk indirilir. Böylece bahçe eşyası yolculuk boyunca ev eşyasına zarar vermez.',
        'Taşıma öncesinde yol güzergahını kontrol ediyor, aracın adrese kadar sorunsuz gelip gelemeyeceğini netleştiriyoruz. Bahçe kapısı ile araç arasındaki mesafe uzunsa ekip sayısını buna göre belirliyoruz. Siz de taşınmadan önce artık kullanmadığınız aletleri ayıklarsanız hacim küçülür. Sinanlı nakliyat için keşif ücretsizdir; fiyat yazılı verilir ve sonradan değişmez. Ev eşyası için ambalaj, söküm ve montaj aynı ekip tarafından yapılır, sigorta da yazılı fiyata dahildir. Kutuları oda adıyla etiketlemeniz, yeni evde yerleşmeyi hızlandırır.',
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
      body: [
        'Düşük katlı binaların yaygın olduğu Balâ merkezde, taşımaların önemli bir bölümü asansör kurmaya gerek kalmadan, ekibin elle taşımasıyla tamamlanır. Bu durum keşifte netleşir ve maliyete doğrudan yansır: asansör gerekmiyorsa fiyata da eklenmez. Ağır beyaz eşya ya da büyük mobilya varsa mobil asansörü yine de getirebiliyoruz. Keşifte kat sayısını, merdiven genişliğini ve büyük parçaları görerek hangi yöntemin uygun olduğunu birlikte belirliyoruz.',
        'Park alanı bol olduğu için araç kapıya yakın durur, yükleme rahat ilerler. Asıl dikkat edilmesi gereken mevsimdir: kışın taşımayı gün ortasına, yazın sabah erken saatlere almanızı öneririz. Balâ evden eve nakliyat işlerinde eşya kapalı kasa araçta, sigorta kapsamında taşınır; ambalaj, söküm ve montaj yazılı fiyata dahildir. Keşif ücretsizdir ve fiyat taşıma günü değişmez. Taşınmadan önce kullanmadığınız eşyayı ayıklamanız, tek seferde taşımayı kolaylaştırır.',
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
      body: [
        'Kesikköprü beldesine yapılan taşımalarda ilçe merkezine göre ek bir yol mesafesi vardır ve bu mesafe planın en başında hesaba katılır. Ekip Ankara’dan çıkış saatini buna göre belirler; böylece yükleme, yolculuk ve kurulum aynı güne sığar. Yükleme saatini de bu plana göre sizinle birlikte seçiyoruz; kış aylarında yol koşullarına göre gün ortası tercih edilir.',
        'Bu uzaklıkta ikinci sefer hem zaman hem maliyet kaybıdır. Bu yüzden keşifte eşya hacmini dikkatle ölçüp tek seferde taşıyabilecek aracı seçiyoruz. Taşınmadan önce eşyalarınızı ayıklamanız, araç hacmini ve süreyi küçültür. Ek yol mesafesi yazılı fiyata baştan dahil edildiği için taşıma günü fark çıkmaz. Kırılabilir parçalar çift kat ambalajlanır, mobilya araç içinde kuşakla sabitlenir ve eşya sigortalı taşınır. Keşif ücretsizdir; söküm ve montaj da aynı ekip tarafından yapılır.',
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
      body: [
        'Uzun bir yolculuğun ardından kurulumu akşam olmadan bitirmek, Şereflikoçhisar merkezde taşımanın temel hedefidir. Apartman taşımalarının yaygın olduğu bu bölgede mobil asansörü Ankara’dan ekiple birlikte getiriyoruz; asansör aracı ve taşıma aracı adrese aynı saatte vardığı için yükleme beklemeden başlar. Kurulumun gün bitmeden tamamlanması için ekip sabah erken yola çıkar.',
        'Merkez caddelerdeki binalarda yükleme için kısa süreli park izni gerekir; bu izni taşıma gününden önce alıyoruz. Siz de bina yönetimini ve komşularınızı bilgilendirerek araç için yer açılmasına yardımcı olabilirsiniz. Şereflikoçhisar evden eve nakliyat işlerinde yol, yakıt ve mesafe yazılı fiyata dahildir. Uzun yol boyunca eşya kuşakla sabitlenir, mobilya köşeleri ve beyaz eşya ayrıca korunur. Keşif ücretsizdir; ambalaj, söküm, montaj ve sigorta fiyata dahildir. Kutuları oda oda etiketlemeniz, yeni evde yerleşmeyi hızlandırır.',
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
      body: [
        'Bahçeli ev ve müstakil yapıların ağırlıkta olduğu Şekerciler’de yükleme mesafesi, ekip planını doğrudan belirler. Kapı ile araç arasındaki yol uzunsa ekip sayısını artırıyoruz; böylece yükleme uzamaz ve uzun yolculuk için gereken zaman korunur. Bu planlama keşifte yapılır ve yazılı fiyata baştan yansıtılır.',
        'Müstakil evlerde bahçe ve depo eşyası çoğu zaman ev eşyası kadar yer kaplar. Bu parçaları ayrı ambalajlıyor, yeni adreste karışmaması için ayrıca etiketliyoruz. Taşınmadan önce depoda biriken eşyayı gözden geçirip gerçekten götüreceklerinizi ayırmanız, tek seferde taşımayı kolaylaştırır. Keşifte ekibe bahçeyi ve depoyu da göstermeniz, araç hacminin doğru hesaplanması için önemlidir. Fiyat yazılı verilir ve sonradan değişmez. Ambalaj, söküm, montaj ve sigorta fiyata dahildir. Uzun yol boyunca mobilya kuşakla sabitlenir, kırılabilir parçalar çift kat ambalajlanır.',
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
      body: [
        'Haymana merkezdeki eğimli sokaklar, mobil asansörün nereye kurulacağını keşfin ilk sorusu haline getirir. Aracın dengeli durabileceği düz alanı önceden belirliyoruz; taşıma günü ekip doğrudan bu noktaya yerleşir ve kurulum kısa sürede tamamlanır. Bina önü uygun değilse asansör aracı yakındaki düz bir noktaya kurulur ve ekip planını buna göre yapar.',
        'Merkez caddede yükleme saatini esnafın yoğunluğuna göre seçiyoruz; dükkânlar açılmadan ya da gün içindeki sakin saatlerde çalışmak hem trafiği hem komşuları rahatlatır. Haymana evden eve nakliyat işlerinde kutuları oda oda etiketlemenizi öneriyoruz; yeni evde her kutu doğrudan ait olduğu odaya çıkar. Söküm ve montaj aynı ekip tarafından yapılır, ambalaj ve sigorta yazılı fiyata dahildir. Keşif ücretsizdir ve yazılı fiyat taşıma günü değişmez. Kullanmadığınız eşyayı taşınmadan önce ayıklamanız, araç hacmini ve süreyi küçültür.',
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
      body: [
        'Pansiyon, apart ya da yazlık taşıması, sıradan bir daire taşımasından daha fazla sayım ister. Kaplıcalar Bölgesi’nde işe eşya listesini çıkararak başlıyoruz: hangi odadan kaç yatak, kaç dolap ve kaç koli çıkacağı taşıma öncesinde netleşir. Bu liste hem yüklemede hem yeni adreste teslimde kontrol aracı olarak kullanılır.',
        'Sezon dışında yapılan taşımalar daha hızlı tamamlanır; çevrede trafik ve misafir hareketi azaldığı için aracın yerleşimi kolaylaşır. Bir işletmeyi taşıyorsanız tarihi buna göre seçmenizi öneririz. Çok sayıda benzer eşya olduğundan oda numarasına göre etiketleme yapıyoruz. Yeni yer hazır değilse eşyayı depolama hizmetiyle bir süre bekletmek de mümkündür. Ambalaj, söküm, montaj ve sigorta yazılı fiyata dahildir; keşif ücretsizdir. Haymana kaplıcalar nakliyat işlerinde uygun tarihi keşifte birlikte belirleyebiliriz.',
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
      body: [
        'Kızılcahamam merkezde taşıma işlerinin büyük kısmı apartman dairelerinden oluşur ve üst katlarda asansörlü taşıma standart uygulamadır. Mobil asansörü Ankara’dan ekiple birlikte getiriyor, adrese aynı saatte ulaşacak şekilde planlıyoruz. Böylece uzun yolun ardından yükleme beklemeden başlar. Bina önünde asansör aracı için yer ayrılması, kurulumu hızlandırır; yönetime taşıma saatini önceden bildirmenizi öneririz.',
        'Termal tesislerin çevresindeki adreslerde sezon yoğunluğu, aracın park edebileceği alanı ve yolları etkiler. Bu bölgede taşınacaksanız yoğun dönemin dışında bir tarih ya da sabah erken bir saat seçmenizi öneririz. Kızılcahamam evden eve nakliyat işlerinde ambalaj, söküm, montaj ve sigorta fiyata dahildir; keşifte verilen yazılı fiyat taşıma günü değişmez. Kutuları oda oda etiketlemeniz ve kullanmadığınız eşyayı ayıklamanız, hem yüklemeyi hem yeni evde yerleşmeyi kolaylaştırır.',
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
      body: [
        'Villa ve dağ evlerinin bulunduğu Soğuksu çevresinde taşıma, şehirdeki bir daireye göre hem hacim hem mesafe açısından daha büyük bir iştir. Evden araca kadar olan yükleme yolu uzun olduğu için ekip sayısını artırıyoruz; orman içi yollarda büyük araç yerine yola uygun hacimli araç seçiyoruz. Bu seçim keşifte yolu yerinde görerek yapılır.',
        'Eşya hacmi çok büyükse taşımayı iki güne yayan bir plan yapabiliyoruz; örneğin ilk gün ambalaj ve söküm, ikinci gün yükleme ve kurulum. Bahçe ve depo eşyası ev eşyasından ayrı paketlenir. Keşifte ekibe evin tamamını, bahçeyi ve depoyu göstermeniz, doğru araç ve ekip seçimi için şarttır. Kar döneminde güzergah taşıma sabahı yeniden kontrol edilir. Ambalaj, söküm, montaj ve sigorta yazılı fiyata dahildir; fiyat taşıma günü değişmez.',
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
      body: [
        'Müstakil evlerin yaygın olduğu Güvem beldesinde, ilçe merkezinin ötesindeki yol mesafesi taşıma planına baştan eklenir. Bu hesap yapıldığında yükleme, yolculuk ve kurulum aynı gün içinde tamamlanır; ekibin Ankara’dan çıkış saati de bu plana göre belirlenir. Bu sayede taşıma ertesi güne sarkmaz.',
        'Kış aylarında güzergahı taşıma sabahı yeniden kontrol ediyor, gerekirse tarihi sizinle birlikte değiştiriyoruz. Müstakil evlerde kiler, depo ve bahçe eşyası da taşınacağı için keşifte bu alanları göstermeniz araç hacminin doğru seçilmesini sağlar. Güvem nakliyat işlerinde ek yol mesafesi yazılı fiyata dahildir; ambalaj, söküm, montaj ve sigorta için ayrıca ücret çıkmaz. Kırılabilir parçalar uzun yol için sıkı ambalajlanır, mobilya kapalı kasa araçta kuşakla sabitlenir. Taşınmadan önce kullanmadığınız eşyayı ayıklamanız tek seferde taşımayı kolaylaştırır.',
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
      body: [
        'Güdül merkezde taşıma planı, aracın sokağın neresine kadar çıkabileceği sorusuyla başlar. Dar ve eğimli sokaklarda büyük araç adrese ulaşamadığında eşyayı küçük araçla ana caddedeki araca aktarıyoruz. Aracın yanaşabileceği en yakın noktayı keşifte yerinde görüp belirliyoruz; aktarma gerekiyorsa yazılı fiyata baştan eklenir. Böylece taşıma günü sürpriz bir ücret çıkmaz.',
        'Mobil asansör kullanılacaksa aracın kurulacağı düz zemin de aynı keşifte seçilir. Eğimli bir sokakta bu nokta bina önünden biraz uzakta olabilir; ekip planını buna göre yapar. Taşınmadan önce büyük mobilyaların ölçüsünü yeni evin kapılarıyla karşılaştırmanız, sökülmesi gereken parçaları baştan belirler. Söküm ve montaj fiyata dahildir. Ambalaj ve sigorta da yazılı fiyata dahildir. Güdül merkez evden eve nakliyat için keşif ücretsizdir; ekip eşyayı yerinde görmeden fiyat vermez. Kutuları oda adıyla etiketlemeniz, yeni evde yerleşmeyi kolaylaştırır.',
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
      body: [
        'Sorgun’daki bahçeli evlerden yapılan taşımalarda bahçe ve depo eşyası, ev eşyasından ayrı bir iş kalemi olarak planlanır. Bu parçaları ayrı paketliyor ve araca en son yüklüyoruz; böylece yolculuk boyunca ev eşyasına zarar vermezler ve yeni adreste ilk inen grup olurlar. Bu sıralama keşifte birlikte belirlenir.',
        'Bahçe kapısıyla araç arasındaki mesafe uzunsa ekip sayısını artırarak yükleme süresini kısa tutuyoruz. Sorgun evden eve nakliyat için keşifte evi, bahçeyi ve depoyu birlikte görmemiz gerekir; araç hacmi ancak böyle doğru hesaplanır. Taşınmadan önce kullanmadığınız aletleri ve eski eşyaları ayıklamanız, tek seferde taşımayı kolaylaştırır. Fiyat yazılıdır ve taşıma günü değişmez. Ambalaj, söküm, montaj ve sigorta da fiyata dahildir; eşya kapalı kasa araçta taşınır. Yol mesafesi de plana baştan eklenir.',
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
      body: [
        'Düşük katlı binaların yaygın olduğu Çamlıdere merkezde, taşımaların bir bölümü asansör kurmadan, ekibin elle taşımasıyla tamamlanabilir. Asansör gerekmediğinde bu maliyet fiyata yansımaz; keşifte bina katını ve merdiven genişliğini görerek hangi yöntemin uygun olduğunu belirliyoruz. Ağır beyaz eşya ya da büyük mobilya varsa mobil asansörü Ankara’dan ekiple birlikte getirebiliyoruz.',
        'Merkez sokakların çoğunda araç bina önüne yanaşabildiği için yükleme kısa sürer. Dağ evi ya da yazlıktan merkeze taşınıyorsanız soba, odunluk ve bahçe mobilyası gibi parçaları keşifte belirtmenizi öneririz; bunlar ayrı paketlenir. Çamlıdere nakliyat işlerinde kış aylarında taşıma tarihi yol durumuna göre birlikte seçilir; yazılı fiyat ise tarih değişse de aynı kalır. Keşif ücretsizdir; ambalaj, söküm, montaj ve sigorta da fiyata dahildir. Kullanmadığınız eşyayı ayıklamanız araç hacmini küçültür.',
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
      body: [
        'Peçenek çevresindeki yazlık ve bahçeli evlerde taşıma talebi yaz sezonunda belirgin şekilde artar. Bu dönemde taşınmayı düşünüyorsanız tarihi önceden almanızı öneririz; böylece araç ve ekip istediğiniz güne ayrılır. Yol mesafesi taşıma planına baştan eklenir, Ankara’dan çıkış saati buna göre belirlenir. Ekip sayısı da evden araca olan mesafeye göre belirlenir.',
        'Orman içi yollarda büyük araç yerine yola uygun hacimli araç seçiyoruz. Yazlık eşyası çoğu zaman mevsimlik olduğundan, taşınacakları ve kalacakları önceden ayırmak hacmi küçültür. Bahçe mobilyası ve dış mekân eşyası ayrı ambalajlanır, araca en son yüklenir. Peçenek evden eve nakliyat için keşif ücretsizdir; ambalaj, söküm, montaj ve sigorta yazılı fiyata dahildir. Kutuları oda adıyla etiketlemeniz, yeni adreste yerleşmeyi kolaylaştırır. Fiyat taşıma günü değişmez.',
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
      body: [
        'Kale eteğindeki sokaklarla yeni yerleşim bölgesi arasında, Kalecik merkezde taşıma yöntemi tamamen değişir. Dar ve eğimli sokaklarda eşyayı küçük araçla ana yola aktarıyoruz; yeni bölgede ise araç kapıya kadar yanaşır ve yükleme doğrudan yapılır. Adresinizin hangi gruba girdiğini keşifte yerinde görüyoruz. Bu ayrım taşıma günü ekip sayısını ve süreyi de belirler.',
        'Aktarmalı yükleme gerekiyorsa bu, yazılı fiyata baştan eklenir ve taşıma günü ek ücret çıkmaz. Eski mahallelerde taşınıyorsanız komşularınızı önceden bilgilendirmeniz, aktarma aracının sokakta rahat çalışmasını sağlar. Kalecik evden eve nakliyat işlerinde söküm ve montaj aynı ekip tarafından yapılır; ambalaj ve sigorta da fiyata dahildir. Keşif ücretsizdir ve yazılı fiyat taşıma günü değişmez. Kutuları oda adıyla etiketlemeniz, yeni evde yerleşmeyi hızlandırır; kullanmadığınız eşyayı ayıklamanız da araç hacmini küçültür.',
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
      body: [
        'Tavşancıl çevresindeki bahçeli evlerde taşıma süresini en çok yükleme mesafesi etkiler. Evden araca kadar yürünecek yolu keşifte görüp ekip sayısını ona göre belirliyoruz; böylece uzun mesafe, günün planını bozmaz. Bahçe kapısının genişliği ve evden araca giden yol da bu sırada not edilir.',
        'Yol mesafesi de taşıma süresine baştan eklenir; ekip Ankara’dan çıkış saatini buna göre ayarlar ve kurulum aynı gün tamamlanır. Bahçe eşyası ayrı paketlenir, ev eşyasıyla karışmaz. Taşınmadan önce bahçe aletlerini temizleyip bir araya toplamanız ve artık kullanmadıklarınızı ayıklamanız hacmi küçültür. Tavşancıl nakliyat işlerinde keşif ücretsizdir, fiyat yazılıdır; sigorta, ambalaj, söküm ve montaj da buna dahildir. Eşya kapalı kasa araçta, kuşakla sabitlenerek taşınır; böylece uzun yolda kayma ve çizilme olmaz. Uygun tarihi keşifte birlikte seçebiliriz.',
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
      body: [
        'Geniş sokaklar ve düşük katlı binalar, Evren merkezde yüklemenin hızlı ilerlemesini sağlar; araç çoğu adreste kapıya kadar yanaşır. Ancak bu kolaylık, uzun yolun getirdiği planlama ihtiyacını ortadan kaldırmaz. Taşımanın tek seferde bitmesi şart olduğu için keşifte eşya hacmini geniş hesaplıyor, aracı buna göre seçiyoruz. Bu sayede ikinci sefere gerek kalmaz.',
        'Üst katta oturuyorsanız ya da ağır eşyanız varsa mobil asansörü Ankara’dan ekiple birlikte getirebiliyoruz. Taşınmadan önce eşyanızı ayıklamanız, uzun yolda taşınacak hacmi küçültür. Evren evden eve nakliyat işlerinde kırılabilir parçalar çift kat ambalajlanır, mobilya kuşakla sabitlenir ve taşıma sigorta kapsamında yapılır. Yol ve mesafe yazılı fiyata baştan dahildir. Keşif ücretsizdir; ambalaj, söküm ve montaj da yazılı fiyata dahildir. Kutuları oda adıyla etiketlemeniz, yeni evde yerleşmeyi hızlandırır.',
      ],
    },
  ],
}
