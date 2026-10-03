import type { District } from './types'

export const yenimahalle: District = {
  slug: 'yenimahalle',
  name: 'Yenimahalle',
  path: 'yenimahalle-evden-eve-nakliyat',
  zone: 'merkez',
  lat: 39.965,
  lon: 32.76,
  metaTitle: 'Yenimahalle Evden Eve Nakliyat | Batıkent ve Demetevler Taşıma',
  metaDescription:
    'Yenimahalle evden eve nakliyat: Batıkent, Demetevler, Ostim, İvedik ve çevresinde asansörlü, ambalajlı ve sigortalı ev ve ofis taşıma hizmeti.',
  intro: [
    'Yenimahalle evden eve nakliyat, hem yoğun toplu konut bölgelerini hem de Ostim ve İvedik gibi sanayi alanlarını kapsayan bir iş demektir. Bu nedenle ilçede hem ev hem de iş yeri taşıması yoğun şekilde yapılır.',
    'Batıkent ve Demetevler gibi blok yerleşimlerinde yük asansörü kullanımı ve site yönetimi koordinasyonu taşımanın en önemli parçasıdır; Ostim ve İvedik’te ise makine, tezgâh ve depo taşımaları öne çıkar. İki farklı iş tipini de kendi araç ve ekibimizle yürütüyoruz.',
  ],
  highlights: [
    {
      title: 'Toplu konut tecrübesi',
      text: 'Batıkent ve Demetevler bloklarında yük asansörü planlamasını biz yapıyoruz.',
    },
    {
      title: 'İş yeri taşıma',
      text: 'Ostim ve İvedik’te atölye, depo ve ofis taşımaları yapıyoruz.',
    },
    {
      title: 'Geniş araç erişimi',
      text: 'Bölgedeki geniş yollar sayesinde tek seferde taşıma yapılabiliyor.',
    },
  ],
  neighborhoods: [
    {
      slug: 'batikent',
      name: 'Batıkent',
      intro:
        'Batıkent’te blok yerleşimi düzenli, çoğu binada yük asansörü var. Taşıma süresi bu sayede kısalıyor.',
      notes: [
        'Blok girişlerine araç yanaşabiliyor, yükleme mesafesi kısa.',
        'Yük asansörü rezervasyonu site yönetimiyle önceden yapılıyor.',
        'Metro hattına yakın caddelerde yükleme saati trafiğe göre seçiliyor.',
      ],
      body: [
        'Blok düzeninin sunduğu kolaylık, ancak iyi bir takvimle değer kazanır. Batıkent evden eve nakliyat işlerinde ilk adım, site yönetimiyle görüşüp yük asansörünü taşıma günü için ayırtmaktır; asansör başka bir daireye verilmişse ekip kapıda bekler ve gün uzar. Bu nedenle keşif sırasında yönetimin hangi saat aralığında taşımaya izin verdiğini birlikte netleştiriyor, yükleme planını o pencereye göre kuruyoruz. Asansör içinin ve koridorların koruma malzemesiyle kaplanması da işin parçasıdır.',
        'Araç blok girişine yakın durabildiği için taşımanın hızını belirleyen şey, eşyanın ne kadar hazır olduğudur. Kullanmadığınız eşyayı taşıma öncesinde ayıklamak hem araç hacmini hem süreyi küçültür. Metro hattına yakın bir caddedeyseniz yükleme için trafiğin sakin olduğu saati seçmek iyi olur. Ambalaj, söküm ve montaj fiyata dahildir; keşifte verilen yazılı fiyat taşıma günü değişmez. Keşifte asansör ölçüsünü ve en büyük mobilyanızın sığıp sığmayacağını birlikte kontrol etmek, taşıma günü sürpriz yaşamamanızı sağlar.',
      ],
    },
    {
      slug: 'demetevler',
      name: 'Demetevler',
      intro:
        'Demetevler’de yoğun apartman yerleşimi ve dar sokaklar var. Taşımaların çoğu mobil asansörle yapılıyor.',
      notes: [
        'Dar sokaklarda araç yerleşimi için erken saat tercih ediliyor.',
        'Asansörsüz binalarda mobil asansör standart hale geldi.',
      ],
      body: [
        'Dar sokaklı bir apartman bölgesinde taşımayı kolaylaştıran iki şey vardır: doğru saat ve doğru ekipman. Demetevler’de aracı bina önüne yerleştirebilmek için sabahın erken saatlerini tercih ediyoruz; sokak araçlarla dolmadan asansör aracı kurulur ve yükleme başlar. Komşularınızı ve apartman yönetimini bir gün önceden bilgilendirmek, bina önünde yer açılmasını kolaylaştırır. Sokağın iki ucundan hangisinden girileceğini ve aracın nerede bekleyeceğini keşifte birlikte belirlemek, taşıma sabahı vakit kaybını önler.',
        'Asansörsüz binaların çok olduğu bu bölgede firmaya ait mobil asansör, taşımanın standart parçasıdır. Eşya merdivenden taşınmadığı için hem duvarlar hem mobilya korunur, üst kat daireler de alt katlar kadar hızlı boşalır. Keşifte balkon ya da pencere genişliğini, asansör aracının kurulacağı noktayı ve camlı eşyaları birlikte konuşmak, taşıma günü sürprizleri ortadan kaldırır. Ambalaj, söküm ve montaj fiyata dahildir; keşifte verilen yazılı fiyat taşıma günü değişmez, kapalı kasa araç da eşyayı yol boyunca korur.',
      ],
    },
    {
      slug: 'ostim',
      name: 'Ostim',
      intro:
        'Ostim’de ağırlıklı olarak iş yeri, atölye ve depo taşıması yapıyoruz. Makine ve tezgâh taşımaları ayrı planlanıyor.',
      notes: [
        'Makine ve tezgâh taşımaları için forklift ve transpalet kullanılıyor.',
        'İş yeri taşımaları mesai dışına alınarak üretim durdurulmuyor.',
      ],
      body: [
        'Bir atölyeyi taşımak, bir daireyi taşımaktan çok farklı bir hazırlık ister. Ostim nakliyat işlerinde önce makine ve tezgâhları, ardından ofis eşyası ile dosyaları ayrı gruplara bölüyoruz. Ağır ekipman forklift ve transpaletle yüklenir, hassas cihazlar ambalajlanarak kapalı kasa araçta taşınır; böylece her grup kendi sırasıyla ve kendi yöntemiyle yeni adrese ulaşır. Taşıma başlamadan önce her makine ve kolinin hangi bölüme gideceğini gösteren basit bir yerleşim planı hazırlamak, yeni atölyede kurulumu belirgin biçimde hızlandırır.',
        'Üretimi aksatmamak için taşımayı mesai dışına alıyoruz. Keşifte makinelerin ağırlığını, yeni yerdeki zemin ve kapı ölçülerini, elektrik bağlantılarının kim tarafından sökülüp bağlanacağını konuşmanızı öneririz. Yeni adres henüz hazır değilse ekipmanı depolama hizmetiyle geçici olarak bekletmek mümkündür. Fiyat keşif sonrası yazılı verilir ve iş bitene kadar değişmez. Ofis bölümündeki masa, dolap ve raflar sökülüp yeni adreste aynı ekip tarafından kurulur; dosyalar ise numaralı kolilerle taşınır.',
      ],
    },
    {
      slug: 'ivedik',
      name: 'İvedik',
      intro:
        'İvedik Organize Sanayi bölgesinde depo ve ofis taşımaları yoğun. Yükleme rampaları taşımayı hızlandırıyor.',
      notes: [
        'Rampalı yükleme sayesinde ağır malzeme hızlı taşınıyor.',
        'Sanayi sitesi içi araç trafiği için giriş izni alınıyor.',
      ],
      body: [
        'Rampalı yükleme alanları, İvedik’te depo taşımasını hızlandıran en büyük avantajdır. Paletli malzeme doğrudan araca alınabildiği için ağır yükler kısa sürede yerini değiştirir. Yine de bu hız, malzemenin taşıma öncesinde düzenli istiflenmesine ve hangi paletin önce çıkacağının belirlenmesine bağlıdır; keşifte bu sırayı birlikte çıkarıyoruz. Paletlerin üzerine hangi bölüme ya da rafa gideceğini yazmanız, yeni depoda yerleşimi de aynı hızda tamamlamayı sağlar.',
        'Sanayi sitesi içinde araç trafiği denetimli olduğundan giriş iznini taşıma gününden önce alıyoruz; bunun için araç bilgilerinin yönetime iletilmesi yeterli oluyor. Ofis taşımalarında bilgisayar, yazıcı ve dosya dolapları ayrı ambalajlanır, masa ve raflar sökülüp yeni adreste kurulur. Taşınmayacak arşiv ya da stok için depolama seçeneğini keşifte sormanızı öneririz. Mesai saatlerinde çalışmayı durdurmak istemiyorsanız taşımayı mesai dışına almak mümkündür; keşifte verilen yazılı fiyat iş bitene kadar değişmez, ambalaj ve sigorta da buna dahildir.',
      ],
    },
    {
      slug: 'sentepe',
      name: 'Şentepe',
      intro:
        'Şentepe’de eğimli sokaklar ve yoğun apartman yerleşimi taşımanın planını belirliyor.',
      notes: [
        'Eğimli sokaklarda asansör aracı için düz alan seçiliyor.',
        'Dar sokaklarda küçük araçla aktarma yapılıyor.',
      ],
      body: [
        'Eğim, Şentepe’de taşıma gününün nasıl geçeceğini doğrudan etkiler. Mobil asansörün güvenle çalışabilmesi için aracın düz bir zemine kurulması gerekir; bu noktayı keşif sırasında binanın çevresinde dolaşarak belirliyoruz. Bina önü uygun değilse asansör aracı birkaç metre ötedeki düz alana yerleştirilir ve eşya oradan indirilir. Asansör aracı ile bina arasındaki mesafe uzarsa ekip sayısını buna göre artırıyoruz.',
        'Büyük aracın giremediği dar sokaklarda eşyayı küçük araçla ana yola aktarıyoruz. Bu aktarma keşifte görüldüğü için yazılı fiyata baştan eklenir, taşıma günü ek ücret çıkmaz. Kış aylarında taşınacaksanız eğimli yollarda buzlanma ihtimalini düşünerek gün ortasına yakın bir saat seçmek daha güvenlidir. Kırılacak eşyaların ambalajını ekibe bırakmanız, aktarma sırasında da koruma sağlar. Ambalaj, söküm, montaj ve sigorta fiyata dahildir; keşif ücretsizdir ve taşıma günü kararlaştırılan saatte ekip adreste olur. Şentepe evden eve nakliyat için en uygun günü keşifte birlikte seçebiliriz.',
      ],
    },
    {
      slug: 'ergazi',
      name: 'Ergazi',
      intro:
        'Ergazi, Batıkent hattında yer alan düzenli bir konut bölgesi. Blok yerleşimi taşımayı kolaylaştırıyor.',
      notes: [
        'Blok önüne araç yanaşabiliyor.',
        'Yük asansörü olan binalarda taşıma süresi kısalıyor.',
      ],
      body: [
        'Düzenli blok yerleşimi, Ergazi’de taşımanın çoğu zaman kısa sürede tamamlanmasını sağlar. Araç blok önüne yanaşabildiği için eşya yakın mesafeden yüklenir; yük asansörü bulunan binalarda ise üst katlar bile hızla boşalır. Bu kolaylıktan tam yararlanmak için asansörün taşıma saatinde başka bir işe ayrılmadığından emin olmak gerekir. Yönetimden taşıma saatini önceden onaylatmak, hem komşular hem ekip için günü rahatlatır.',
        'Bina asansörü yoksa ya da büyük mobilyaya dar geliyorsa firmaya ait mobil asansörü getiriyoruz. Taşınmadan önceki hafta dolapları boşaltıp kutulara etiket koymak, yeni evde hangi kutunun hangi odaya gideceğini kolaylaştırır. Ergazi nakliyat taleplerinde keşif ücretsizdir; eşyayı yerinde görüp ambalaj, söküm, montaj ve sigortayı içeren yazılı fiyatı veriyoruz. Bu fiyat taşıma günü değişmez. Az eşyalı bir taşınma ya da yalnızca birkaç parçanın yer değiştirmesi söz konusuysa parça eşya için küçük araç da gönderebiliyoruz.',
      ],
    },
    {
      slug: 'karsiyaka',
      name: 'Karşıyaka',
      intro:
        'Karşıyaka’da orta katlı apartmanlar yoğun; taşımalar genellikle aynı gün tamamlanıyor.',
      notes: [
        'Sokaklar araç erişimine uygun.',
        'Asansörsüz binalarda mobil asansör kuruluyor.',
      ],
      body: [
        'Orta katlı apartmanların çoğunlukta olduğu Karşıyaka’da taşımalar genellikle sabah başlayıp aynı gün akşam bitecek şekilde planlanır. Sokakların araç erişimine uygun olması, aracın bina önünde rahatça durabilmesi demektir; bu da yükleme ile indirme arasındaki süreyi kısaltır. Keşifte eşyayı yerinde görüp araç hacmini belirliyoruz, böylece tek seferde taşınamayacak kadar eşya olduğu sonradan anlaşılmaz ve ikinci sefer gerekmez.',
        'Asansörsüz binalarda mobil asansör kuruyor, eşyayı balkondan ya da pencereden doğrudan araca indiriyoruz. Böylece merdiven boşluğu ve kapı kasaları zarar görmez. Taşıma tarihini belirlerken yeni evin anahtarını en az bir gün önce teslim almanızı öneririz; aynı gün kurulum yapılacaksa ekibin yeni adrese doğrudan girebilmesi zaman kazandırır. Az eşyanız varsa parça eşya için küçük araç seçeneğini keşifte sorabilirsiniz. Ambalaj, söküm ve montaj yazılı fiyata dahildir, taşıma günü ek ücret çıkmaz.',
      ],
    },
    {
      slug: 'ragip-tuzun',
      name: 'Ragıp Tüzün',
      intro:
        'Ragıp Tüzün, ana cadde çevresinde yoğun ticaretin olduğu bir bölge. Yükleme saati trafiğe göre planlanıyor.',
      notes: [
        'Cadde üzeri binalarda sabah erken yükleme yapılıyor.',
        'Ticari alanlarda taşıma mesai dışına alınabiliyor.',
      ],
      body: [
        'Ana cadde boyunca süren ticari hareketlilik, Ragıp Tüzün’de yükleme saatini belirleyen asıl etkendir. Cadde üzerindeki binalarda aracı dükkânlar açılmadan ve trafik yoğunlaşmadan yerleştirebilmek için ekip sabah erken saatte adreste olur. Bu sayede araç yol kenarını uzun süre işgal etmeden yükleme tamamlanır. Keşifte bina önünde aracın duracağı yeri ve yükleme sırasını belirlemek, cadde trafiğiyle yarışmadan işi bitirmeyi sağlar.',
        'Bölgedeki dükkân, büro ve küçük ofis taşımalarını işinizi aksatmamak için mesai dışına alabiliyoruz. Ofis taşınacaksa dosyaları ve elektronik cihazları ayrı kutularda, üzerlerine masa ya da bölüm adı yazarak hazırlamanız yeni yerde düzeni hızla kurmayı sağlar. Ragıp Tüzün evden eve nakliyat işlerinde de keşif ücretsizdir ve yazılı fiyat taşıma günü değişmez. Evinizi taşıyorsanız da cadde trafiğine göre erken bir saat seçmenizi öneririz; ambalaj, söküm, montaj ve sigorta fiyata dahildir, kapalı kasa araç eşyayı yol boyunca korur.',
      ],
    },
    {
      slug: 'yahyalar',
      name: 'Yahyalar',
      intro:
        'Yahyalar’da apartman yoğunluğu yüksek, sokaklar dar. Mobil asansör kullanımı yaygın.',
      notes: [
        'Dar sokaklarda yükleme alanı önceden ayrılıyor.',
        'Asansörsüz binalarda mobil asansör hazır geliyor.',
      ],
      body: [
        'Sokakları dar, apartmanları sık bir bölgede taşımanın başarısı, araç gelmeden yükleme alanının ayrılmasına bağlıdır. Yahyalar’da taşıma gününden önce bina önündeki park durumunu birlikte değerlendiriyor, gerekirse komşulardan araçlarını kısa süreliğine çekmelerini rica etmenizi öneriyoruz. Alan hazır olduğunda asansör aracı hızla kurulur. Bina yönetimine taşıma gününü bildirmek ve gerekiyorsa apartman girişini o saatlerde açık tutmak da hazırlığın bir parçasıdır.',
        'Asansörsüz binaların çokluğu nedeniyle mobil asansör bu bölgede ekiple birlikte hazır gelir. Ağır dolaplar, beyaz eşya ve kanepeler merdivene hiç girmeden indirilir. Keşifte hangi odadan, hangi pencere ya da balkondan indirme yapılacağını konuşmak, taşıma gününü hızlandırır. Eşyalar kapalı kasa araçta taşınır; ambalaj, söküm ve montaj fiyata dahildir. Taşınmadan önce kullanmadığınız eşyayı ayıklamanız ve kutuları oda oda etiketlemeniz, yeni evde yerleşmeyi kolaylaştırır. Keşif ücretsizdir, fiyat yazılı verilir ve taşıma günü değişmez.',
      ],
    },
    {
      slug: 'macunkoy',
      name: 'Macunköy',
      intro:
        'Macunköy’de konut ve iş yeri bir arada. Depo ve showroom taşımaları da yapıyoruz.',
      notes: [
        'Depo taşımalarında transpalet ve rampa kullanılıyor.',
        'Ana yollara yakınlık araç erişimini kolaylaştırıyor.',
      ],
      body: [
        'Konutla iş yerinin iç içe olduğu Macunköy’de gelen talepler de karışıktır: bir gün daire taşıması, ertesi gün showroom ya da depo boşaltması. Depo işlerinde transpalet ve rampa kullanarak ağır malzemeyi hızla yüklüyoruz; showroom taşımalarında ise sergilenen ürünlerin çizilmemesi için her parça ayrı ambalajlanır. Konut taşımalarında ise asansör ihtiyacı ve bina önü durumu keşifte ayrıca değerlendirilir.',
        'Ana yollara yakınlık aracın adrese kolay ulaşmasını sağlar, bu nedenle tek seferde taşıma çoğu işte mümkündür. Showroom ya da depo taşıyorsanız ürün listesini önceden çıkarmanız, yeni yerdeki yerleşimi planlamayı da kolaylaştırır. Yeni mekân hazır olana kadar malzemeyi bekletmeniz gerekirse depolama hizmetimizden yararlanabilirsiniz. Macunköy nakliyat için fiyat, ücretsiz keşfin ardından yazılı olarak verilir. Ambalaj, söküm, montaj ve sigorta bu fiyata dahildir; taşıma günü fark çıkmaz.',
      ],
    },
    {
      slug: 'cigdemtepe',
      name: 'Çiğdemtepe',
      intro:
        'Çiğdemtepe, Batıkent çevresinde sakin bir konut bölgesi. Taşımalar sorunsuz ilerliyor.',
      notes: [
        'Sokaklar geniş, araç bina önüne yanaşabiliyor.',
        'Yeni bloklarda bina asansörü kullanılabiliyor.',
      ],
      body: [
        'Geniş sokaklar ve sakin bir konut dokusu, Çiğdemtepe’de taşımayı aceleye getirmeden, düzenli biçimde yürütmeye imkân tanır. Araç bina önüne yanaşabildiği için ekip zamanının büyük kısmını eşyayı özenle paketlemeye ayırabilir; bu da özellikle cam, porselen ve elektronik eşyada fark yaratır. Keşif sırasında hangi eşyanın özel ambalaj gerektirdiğini birlikte belirliyor, ekip planını buna göre yapıyoruz. Taşınma gününe kadar kullanacağınız eşyayı ayrı bir köşede toplamanız da işinizi kolaylaştırır.',
        'Yeni bloklarda bina asansörü kullanılabiliyorsa yönetimden izin alıp asansör içini koruma malzemesiyle kaplıyoruz. Asansör küçükse ya da büyük mobilya sığmıyorsa mobil asansör devreye girer. Taşınmadan önce eşyanızı ayıklayıp bağışlayacaklarınızı ya da atacaklarınızı ayırmanız hacmi küçültür. Keşifte taşıma saatini, hangi mobilyaların sökülüp kurulacağını ve sigorta kapsamını sormaktan çekinmeyin. Çiğdemtepe evden eve nakliyat için keşif ücretsizdir, fiyat ise yazılı verilir ve taşıma günü değişmez.',
      ],
    },
    {
      slug: 'susuz',
      name: 'Susuz',
      intro:
        'Susuz, Batıkent hattının kuzeyinde gelişen bir konut bölgesi. Yeni yapılar taşımayı kolaylaştırıyor.',
      notes: [
        'Yeni binalarda yük asansörü mevcut.',
        'Geniş yollar sayesinde tek seferde taşıma yapılabiliyor.',
      ],
      body: [
        'Yeni yapıların çoğunlukta olduğu Susuz’da taşımanın önündeki engeller azdır; asıl iş, bu kolaylığı iyi bir planla değerlendirmektir. Binalardaki yük asansörleri sayesinde eşya üst katlardan hızla indirilir, geniş yollar da büyük aracın adrese kadar gelmesini sağlar. Böylece daire tek seferde boşaltılıp yeni eve taşınabilir. Yine de taşıma gününden önce asansörün hangi saatte boş olacağını öğrenmek iyi olur.',
        'Yeni teslim edilmiş binalarda site yönetimi taşıma saatlerine ve asansör kullanımına dair kurallar koyabilir; bunları taşıma tarihinden önce öğrenmek gerekir. Yeni bir daireye geçiyorsanız büyük mobilyaların ölçülerini odalarla karşılaştırmanızı öneririz. Susuz evden eve nakliyat sürecinde söküm, montaj ve ambalaj fiyata dahildir; keşifte verilen yazılı fiyat iş bitene kadar değişmez. Bina asansörü büyük mobilyaya dar gelirse firmaya ait mobil asansörü getiriyoruz. Kutuların üzerine oda adını yazmanız, yeni evde yerleşmeyi hızlandırır.',
      ],
    },
    {
      slug: 'gayret',
      name: 'Gayret',
      intro:
        'Gayret Mahallesi, Ostim’e yakınlığı nedeniyle hem konut hem küçük iş yeri taşımasının yoğun olduğu bir bölge.',
      notes: [
        'İş yeri taşımaları mesai dışına planlanıyor.',
        'Konut taşımalarında mobil asansör sıkça kullanılıyor.',
      ],
      body: [
        'Ostim’e yakın konumu, Gayret Mahallesi’ne hem ev hem küçük iş yeri taşıması getirir ve bu iki iş farklı takvimlerle yürür. Konut taşımalarını gündüz, iş yeri taşımalarını ise işin aksamaması için mesai dışında yapıyoruz. Aynı kişi hem evini hem dükkânını taşıyorsa iki işi ayrı günlere bölmek çoğu zaman daha verimli olur. Hangi işin önce yapılacağını keşifte birlikte belirliyoruz.',
        'Konutlarda mobil asansör sıkça kullanılır; eşya merdivenden taşınmadığı için hem süre kısalır hem hasar riski düşer. Küçük iş yerlerinde ise raf, tezgâh ve malzeme ayrı paketlenip etiketlenir. Az sayıda eşya için parça eşya taşımasına uygun küçük araç gönderebiliyoruz. Keşifte iş yerindeki ağır parçaları ve yeni adresin giriş koşullarını mutlaka belirtin. Keşif ücretsizdir; ambalaj, söküm, montaj ve sigortayı içeren fiyat yazılı olarak verilir ve taşıma günü değişmez. Gayret evden eve nakliyat için uygun tarihi de bu görüşmede birlikte seçebiliriz.',
      ],
    },
    {
      slug: 'anadolu',
      name: 'Anadolu',
      intro:
        'Anadolu Mahallesi’nde toplu konut blokları yoğun; yükleme mesafesi kısa ve taşıma hızlı ilerliyor.',
      notes: [
        'Blok girişine araç yanaşabiliyor.',
        'Site yönetiminden taşıma saati onayı alınıyor.',
      ],
      body: [
        'Toplu konut bloklarında taşıma, en çok site yönetiminin onayıyla şekillenir. Anadolu Mahallesi’nde taşıma saatini önceden yönetime bildirip onay alıyoruz; böylece güvenlik ya da otopark tarafında beklenmedik bir engelle karşılaşılmaz. Blok girişine araç yanaşabildiği için yükleme mesafesi kısadır ve iş hızlı ilerler. Onay alınan saat dilimini size de bildiriyoruz, böylece komşularınıza önceden haber verebilirsiniz. Yük asansörü olan bloklarda asansör rezervasyonunu da aynı görüşmede yapmak zaman kazandırır.',
        'Onaylanan saat dilimine uymak için ekip adreste zamanında hazır olur ve eşya önceden belirlenen sırayla yüklenir. Siz de taşıma gününden önce değerli eşyalarınızı ve belgelerinizi ayırarak hangi kutuları yanınızda götüreceğinizi ekibe söyleyebilirsiniz. Anadolu nakliyat işlerinde ambalaj ve sigorta fiyata dahildir; keşif ücretsiz, fiyat ise yazılıdır. Bina asansörü uygun değilse firmaya ait mobil asansörü getiriyoruz. Söküm ve montaj da aynı ekip tarafından yapılır.',
      ],
    },
    {
      slug: 'serhat',
      name: 'Serhat',
      intro:
        'Serhat Mahallesi, İvedik ve Ostim hattına yakın, konut ile sanayinin komşu olduğu bir bölge.',
      notes: [
        'Sanayi trafiği nedeniyle taşıma saati dikkatle seçiliyor.',
        'Asansörsüz binalarda mobil asansör kullanılıyor.',
      ],
      body: [
        'İvedik ve Ostim hattına komşu olan Serhat Mahallesi’nde taşıma saatini sanayi trafiği belirler. İşe giriş ve çıkış saatlerinde yoğunlaşan ağır araç trafiğinden kaçınmak için yüklemeyi bu saatlerin dışına yerleştiriyoruz. Keşifte sizinle birlikte en uygun saati seçmek, aracın adreste ve yolda boşuna beklemesini önler. Yeni adresinizin konumuna göre güzergahı da bu görüşmede netleştiriyoruz.',
        'Asansörsüz binalarda mobil asansör kullanıyoruz; eşya pencere ya da balkondan güvenle indirilir. Taşınmadan önce her odanın kutularını aynı renkte etiketlemek, yeni evde yerleşmeyi hızlandırır. Yeni adresiniz başka bir ilçedeyse mesafe ve güzergah keşif fiyatına baştan dahil edilir, taşıma günü fark çıkmaz. Kapalı kasa araç, eşyayı yol boyunca toz ve hava koşullarından korur. Serhat evden eve nakliyat için keşif ücretsizdir; ambalaj, söküm, montaj ve sigorta yazılı fiyata dahildir.',
      ],
    },
  ],
}
