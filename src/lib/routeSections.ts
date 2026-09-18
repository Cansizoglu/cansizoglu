import type { Route } from '@/data/routes'
import type { DistrictSection } from './districtSections'

/**
 * Şehirler arası rota sayfalarının bölümleri.
 *
 * Her cümle ilin kendi mesafesi, güzergâhı, teslim planı ve saha notlarıyla
 * kuruluyor; il adı değişen aynı metin değil. Başlıklar arama kalıplarına
 * göre seçildi: "ankara <il> nakliye fiyatları", "ankara <il> eşya taşıma",
 * "ankara <il> arası nakliyeciler", "ankara <il> küçük nakliye".
 */
export function routeSections(route: Route): DistrictSection[] {
  const c = route.city
  const ilkUc = route.popular.slice(0, 3).join(', ')

  return [
    {
      id: 'mesafe-ve-sure',
      heading: `Ankara ${c} Arası Mesafe ve Taşıma Süresi`,
      paragraphs: [
        `Ankara ile ${c} arası karayolu mesafesi yaklaşık ${route.km} kilometre. Yük aracı bu yolu ${route.via} güzergâhını kullanarak ${route.drive} içinde alıyor. ${route.plan}`,
        `Bu süre yalnızca yolda geçen zamandır. Taşımanın toplam süresini belirleyen asıl şey, iki adresteki kat durumu, asansör ihtiyacı ve eşya miktarıdır. Keşif sırasında iki adresi de değerlendirip size yükleme ve teslim için net bir saat aralığı veriyoruz.`,
      ],
      points: [
        `Yaklaşık mesafe: ${route.km} km`,
        `Yolda geçen süre: ${route.drive}`,
        `Güzergâh: ${route.via}`,
        'Keşif ve fiyat teklifi ücretsizdir',
      ],
    },
    {
      id: 'evden-eve-nakliyat',
      heading: `Ankara ${c} Evden Eve Nakliyat Nasıl Yapılır`,
      serviceSlug: 'ankara-evden-eve-nakliyat',
      paragraphs: [
        `Ankara ${c} evden eve nakliyat işini baştan sona kendi ekibimizle yürütüyoruz. Taşımadan önce Ankara’daki adrese gelip ücretsiz keşif yapıyor, eşya listesini çıkarıyor ve fiyatı yazılı olarak veriyoruz. Şehirler arası taşımada fiyatın sonradan değişmesi en sık yaşanan sorun; biz sözleşmeye yazdığımız rakamı taşıma günü değiştirmiyoruz.`,
        `Taşıma günü mobilyalar marangoz ekibimizce sökülür, kırılacak eşya balonlu naylonla, mobilya streç filmle ambalajlanır. ${route.km} kilometrelik bir yolculuk söz konusu olduğu için ambalaj şehir içi taşımaya göre daha kalın yapılır ve yük araç içinde kuşaklarla sabitlenir. ${c}’de ${ilkUc} başta olmak üzere il genelinde teslim yapıyoruz.`,
      ],
      points: [
        'Ücretsiz keşif ve değişmeyen yazılı fiyat',
        'Uzun yol standardında ambalaj ve araç içi sabitleme',
        'Söküm ve montaj kendi marangoz ekibimizle',
        'Sözleşmeli ve sigortalı taşıma',
      ],
    },
    {
      id: 'nakliye-fiyatlari',
      heading: `Ankara ${c} Nakliye Fiyatları`,
      paragraphs: [
        `Ankara ${c} nakliye fiyatları tek bir rakamla verilemiyor, çünkü fiyatı beş şey birlikte belirliyor: eşya miktarı, iki adresin kat durumu, asansör ihtiyacı, ${route.km} kilometrelik mesafe ve taşıma tarihidir. Aynı büyüklükteki iki ev, biri asansörlü binada diğeri asansörsüz dördüncü kattaysa farklı fiyatlanır.`,
        `Şehirler arası taşımada fiyatı en çok düşüren etken dönüş yükü. ${c} yönüne çıkan aracımızın dönüşte yük bulduğu tarihlerde fiyat belirgin şekilde iniyor. Taşınma tarihinizde esneklik varsa keşifte size uygun tarih aralığını söylüyoruz. Sitedeki fiyat ve km hesaplama aracıyla da kendi durumunuz için bir fikir edinebilirsiniz.`,
        `Fiyat karşılaştırırken rakamın neyi kapsadığına bakın. Bizde ambalaj malzemesi, paketleme işçiliği, söküm ve montaj ile sigorta verilen fiyata dahildir; taşıma günü ek kalem çıkmaz.`,
      ],
      points: [
        'Fiyat keşiften sonra yazılı verilir ve değişmez',
        'Ambalaj, montaj ve sigorta fiyata dahildir',
        'Dönüş yükü olan tarihlerde fiyat düşer',
        'Kesin rakam için ücretsiz keşif gerekir',
      ],
    },
    {
      id: 'esya-tasima',
      heading: `Ankara ${c} Eşya Taşıma`,
      paragraphs: [
        `Ankara ${c} eşya taşıma işlerinde ev eşyasının yanı sıra ofis malzemesi, arşiv, beyaz eşya ve tek parça hassas eşya da taşıyoruz. Buzdolabı dik taşınır ve sabitlenir, çamaşır makinesinin tamburu nakliye cıvatasıyla kilitlenir, televizyon ve cam eşya köşe koruyuculu kutuya alınır.`,
        `${route.km} kilometrelik yolda eşyanın araç içinde oynaması hasarın bir numaralı sebebi. Bu yüzden yükleme sırasını ağırdan hafife doğru kuruyor, boşluk kalan yerleri dolgu malzemesiyle kapatıyor ve yükü kuşaklarla sabitliyoruz. ${route.drive} süren bir yolculukta bu, eşyanın ilk günkü hâlinde teslim edilmesi demek.`,
        `Eşyanız yola çıkmadan önce liste hâline getirilir ve teslimde aynı liste üzerinden kontrol edilir. ${route.km} kilometre sonra hangi parçanın nerede olduğunu aramak zorunda kalmazsınız.`,
      ],
      points: [
        'Ev eşyası, ofis malzemesi ve arşiv taşıması',
        'Beyaz eşyada dik taşıma ve nakliye kilidi',
        'Liste üzerinden yükleme ve teslim kontrolü',
        'Piyano, kasa ve hassas eşya için ayrı ekipman',
      ],
    },
    {
      id: 'kucuk-nakliye',
      heading: `Ankara ${c} Küçük Nakliye ve Parça Eşya Taşıma`,
      serviceSlug: 'parca-esya-tasima',
      paragraphs: [
        `Her taşınma bir ev dolusu eşya olmuyor. Ankara’dan ${c}’ye tek koltuk, buzdolabı, birkaç koli ya da bir odalık eşya göndermek isteyenler için küçük nakliye yapıyoruz. Bu işlerde kamyon yerine küçük araç kullanılıyor ve ödediğiniz ücret tam taşıma fiyatı değil, eşyanın kapladığı hacim kadar oluyor.`,
        `Öğrenci evi kurulumu, tayin sonrası kısmi taşınma, ikinci el mobilya teslimi ve depoya birkaç kutu gönderme bu kapsamda en çok gelen talepler. “Evden eve kargo” diye aranan hizmet de budur; farkı, eşyanın kargo gibi elden ele değil, tek araçla adresten adrese gitmesidir.`,
      ],
      points: [
        'Tek eşya, birkaç koli veya bir odalık taşıma',
        'Hacme göre fiyat, tam araç ücreti değil',
        'Eşya aktarmasız, tek araçla adresten adrese',
        'Yüksek kata çıkacak eşya için asansör desteği',
      ],
    },
    {
      id: 'nakliyeciler',
      heading: `Ankara ${c} Arası Nakliyeciler Arasından Seçim Yaparken`,
      paragraphs: [
        `Ankara ${c} arası nakliyeciler arasında seçim yaparken bakılacak ilk şey, işi yapacak olanın firmanın kendi ekibi mi yoksa taşeron mu olduğudur. Şehirler arası taşımada bu fark şehir içine göre çok daha önemli: eşyanız ${route.km} kilometre yol gidiyor ve bir sorun çıktığında muhatabın belli olması gerekiyor. Cansızoğlu Nakliyat’ta araç, asansör ve personel firmamıza aittir.`,
        `İkinci mesele eşyanın başka müşterilerin yüküyle birleştirilip birleştirilmediğidir. Ucuz görünen bazı tekliflerde eşya bir depoda toplanıp aktarma yapılarak gönderiliyor; hasar ve gecikme riski bu noktada çıkıyor. Biz aktarma yapmıyoruz, araç sizin evinizle çıkıyor ve sizin adresinizde boşalıyor.`,
        `Üçüncüsü yazılı sözleşme ve sigorta. Uzun mesafede sigortanın kapsamını taşımadan önce görmeniz gerekiyor. Sözleşmeyi ve poliçeyi keşiften sonra size gösteriyoruz.`,
      ],
      points: [
        'Taşeron değil, firmanın kendi ekibi ve aracı',
        'Aktarma yok: araç sizin evinizle çıkar, sizde boşalır',
        'Yazılı sözleşme ve taşıma sigortası',
        `${route.km} km’lik yolda tek sorumlu firma`,
      ],
    },
  ]
}

/** Rota sayfasındaki sık sorulan sorular; cevaplar ilin kendi verisinden gelir. */
export function routeFaq(route: Route) {
  const c = route.city
  return [
    {
      q: `Ankara ${c} arası kaç kilometre ve taşıma ne kadar sürer?`,
      a: `Ankara ile ${c} arası karayolu mesafesi yaklaşık ${route.km} kilometre, yolda geçen süre ${route.drive}. ${route.plan} Toplam süre eşya miktarına ve iki adresin kat durumuna göre değişir.`,
    },
    {
      q: `Ankara ${c} evden eve nakliyat fiyatı ne kadar?`,
      a: `Tek bir rakam vermek doğru olmaz. Fiyatı eşya miktarı, kat ve asansör durumu, ${route.km} kilometrelik mesafe ve taşıma tarihi belirler. Ankara’daki adrese ücretsiz keşfe geliyor, fiyatı yazılı veriyoruz ve taşıma günü değiştirmiyoruz. Sitedeki fiyat hesaplama aracıyla da ön fikir edinebilirsiniz.`,
    },
    {
      q: `Eşyam başka müşterilerin eşyasıyla birlikte mi taşınıyor?`,
      a: `Hayır. Araç sizin evinizden yüklenir ve ${c}’deki adresinizde boşaltılır, arada aktarma yapılmaz. Ucuz görünen bazı tekliflerdeki depoda toplama ve aktarma yöntemini kullanmıyoruz; hasar ve gecikme riski oradan çıkıyor.`,
    },
    {
      q: `${c}’ye tek parça eşya veya birkaç koli gönderebilir miyim?`,
      a: `Gönderebilirsiniz. Bu işler için kamyon yerine küçük nakliye aracı kullanıyoruz ve ücreti eşyanın kapladığı hacme göre hesaplıyoruz. Tek koltuk, buzdolabı, öğrenci evi eşyası veya birkaç koli bu kapsamda taşınıyor.`,
    },
    {
      q: 'Söküm ve montaj fiyata dahil mi?',
      a: 'Dahil. Mobilya sökümü ve yeni adreste montajı kendi marangoz ekibimiz yapar. Ambalaj malzemesi, paketleme işçiliği ve taşıma sigortası da verilen fiyatın içindedir; taşıma günü ek kalem çıkmaz.',
    },
    {
      q: 'Eşyam sigortalı mı taşınıyor?',
      a: `Evet, her taşıma yazılı sözleşme ve taşıma sigortası kapsamında yapılıyor. ${route.km} kilometrelik bir mesafede sigortanın kapsamını taşımadan önce görmeniz önemli; sözleşmeyi ve poliçeyi keşiften sonra size gösteriyoruz.`,
    },
  ]
}
