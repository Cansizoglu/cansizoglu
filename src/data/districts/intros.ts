/**
 * İlçe sayfalarının giriş yazıları (2026-11-24 yenilendi).
 *
 * Kurallar: yazı firmanın ağzından, birinci çoğul şahısla ("taşıyoruz");
 * ilk cümlede "{İlçe} evden eve nakliyat" anahtar kelimesi; anahtar kelimeler
 * **kalın**; metin içinden ilçenin kendi semt sayfalarına ([Etlik](semt:etlik))
 * ve hizmet sayfalarına link. İşaretleme `src/lib/richText.tsx` ile işlenir.
 */

const ASANSOR = '/hizmetler/ankara-asansorlu-nakliyat'
const KIRALAMA = '/hizmetler/ankara-asansor-kiralama'
const PARCA = '/hizmetler/parca-esya-tasima'
const OFIS = '/hizmetler/ankara-ofis-tasima'
const DEPO = '/hizmetler/esya-depolama'
const SIGORTA = '/hizmetler/sigortali-tasima'
const SEHIRLER = '/sehirler-arasi'

export const districtIntros: Record<string, string[]> = {
  kecioren: [
    `**Keçiören evden eve nakliyat** ve **Keçiören asansörlü taşımacılık** işlerini kendi ekibimiz, kendi kapalı kasa araçlarımız ve firmamıza ait mobil asansörlerle yapıyoruz. Keçiören’de bina stoğunun büyük bölümü dar merdivenli ve asansörsüz apartmanlardan oluştuğu için buradaki taşımaların neredeyse tamamında [mobil taşıma asansörünü](${ASANSOR}) ekiple birlikte adrese getiriyoruz.`,
    `[Etlik](semt:etlik), [Kalaba](semt:kalaba), [Aşağı Eğlence](semt:asagi-eglence) ve [Bağlum](semt:baglum) başta olmak üzere ilçenin her mahallesinde çalışıyoruz. Kızlarpınarı ve Fatih Caddesi gibi ana akslarda yükleme saatini trafiğe göre, ara sokaklarda park durumuna göre planlıyoruz; keşifte aracın yanaşacağı yeri ve asansörün kurulacağı cepheyi yerinde belirliyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları kendi marangozlarımızla **söküp** yeni evinizde **montajını** yapıyoruz. Tek koltuk ya da birkaç koli için [parça eşya taşıma](${PARCA}), yalnızca asansör gerekiyorsa operatörlü [asansör kiralama](${KIRALAMA}) hizmetimiz de var. İlçe dışına taşınacaksanız [Ankara evden eve nakliyat](/) sayfamızda tüm bölgelerdeki çalışma şeklimizi anlattık.`,
  ],
  cankaya: [
    `**Çankaya evden eve nakliyat** ve **Çankaya asansörlü taşımacılık** hizmetini, ofisimizin de bulunduğu bu ilçede her gün veriyoruz. Ankara’nın en yoğun trafiğine sahip ilçede araç park etmek gündüz neredeyse imkânsız olduğu için taşımaları sabah erken saatlere veya hafta sonuna alıyor, yükleme süresini **mobil asansörle** kısaltıyoruz.`,
    `[Kızılay](semt:kizilay), [Bahçelievler](semt:bahcelievler) ve [Ayrancı](semt:ayranci) gibi eski apartman bölgelerinde dar merdivenler yüzünden [asansörlü taşımacılık](${ASANSOR}) standart; [Çayyolu](semt:cayyolu), [Ümitköy](semt:umitkoy) ve [Çukurambar](semt:cukurambar) taraflarındaki site ve rezidanslarda ise yük asansörü rezervasyonunu ve yönetim iznini biz takip ediyoruz.`,
    `Taşıma günü eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeni adreste **kuruyoruz**. Çankaya’daki iş yerleri için mesai dışında [ofis taşıma](${OFIS}) yapıyoruz; yeni ev hazır değilse eşyanızı [depomuzda](${DEPO}) bekletiyoruz. Diğer ilçelerdeki işlerimiz için [Ankara evden eve nakliyat](/) sayfamıza bakabilirsiniz.`,
  ],
  yenimahalle: [
    `**Yenimahalle evden eve nakliyat** ve **Yenimahalle asansörlü taşımacılık** işlerinde hem toplu konut bloklarında hem de sanayi bölgelerinde çalışıyoruz. İlçede ev taşıması kadar iş yeri taşıması da yoğun olduğu için iki iş tipini de kendi araçlarımız ve kendi ekibimizle yürütüyoruz.`,
    `[Batıkent](semt:batikent) ve [Demetevler](semt:demetevler) bloklarında yük asansörü kullanımını ve site yönetimi koordinasyonunu biz üstleniyoruz; asansörsüz binalarda **mobil asansörü** aynı saatte adrese getiriyoruz. [Ostim](semt:ostim) ve [İvedik](semt:ivedik) tarafında makine, tezgâh ve depo taşımalarını [ofis ve iş yeri taşıma](${OFIS}) ekibimizle yapıyoruz.`,
    `Her taşımada eşyayı **ambalajlıyor**, mobilyaları **söküp takıyor** ve sözleşmeli, [sigortalı](${SIGORTA}) çalışıyoruz. Tek eşya için [parça eşya taşıma](${PARCA}) hizmetimiz var. Ankara’nın tüm ilçelerindeki hizmetimizi [Ankara evden eve nakliyat](/) sayfasında topladık.`,
  ],
  altindag: [
    `**Altındağ evden eve nakliyat** ve **Altındağ asansörlü taşımacılık** işlerinde Ankara’nın en eski yerleşim bölgelerinde çalışıyoruz. [Ulus](semt:ulus) ve [Siteler](semt:siteler) çevresindeki taşımaları trafiğin sakin olduğu saatlere göre planlıyor, dar merdivenli binalarda **mobil asansörle** eşyayı doğrudan araca indiriyoruz.`,
    `İlçede eski yapı stoğu yoğun, sokaklar sıkışık. Bu yüzden [Hacettepe](semt:hacettepe), [Hamamönü](semt:hamamonu) ve [Aydınlıkevler](semt:aydinlikevler) gibi bölgelerde [asansörlü taşıma](${ASANSOR}) ile küçük araç aktarmasını birlikte kullanıyoruz. Siteler’de mobilya imalatçılarından alınan yeni ürünlerin adrese teslimini ve montajını da yapıyoruz.`,
    `Eşyanızı **ambalajlayıp** taşıyor, mobilyaları yeni evde **kuruyoruz**. Yalnızca asansör gerekiyorsa [asansör kiralama](${KIRALAMA}), tek eşya için [parça eşya taşıma](${PARCA}) hizmeti veriyoruz. Diğer bölgeler için [Ankara evden eve nakliyat](/) sayfamıza göz atabilirsiniz.`,
  ],
  mamak: [
    `**Mamak evden eve nakliyat** ve **Mamak asansörlü taşımacılık** işlerinde eğimli arazi ve dar sokaklar için her taşımayı önceden planlıyoruz. Aracın nereye yanaşacağı taşımanın süresini belirlediği için keşifte sokağı yerinde görüyor, **mobil asansörü** kuracağımız cepheyi o gün seçiyoruz.`,
    `[Abidinpaşa](semt:abidinpasa) ve [Kayaş](semt:kayas) gibi apartman yoğun bölgelerde asansörsüz binalarda [asansörlü taşıma](${ASANSOR}) standart; [Natoyolu](semt:natoyolu) hattındaki yeni sitelerde ise yönetim izni ve yük asansörü kullanımını biz ayarlıyoruz. Büyük aracın giremediği sokaklarda küçük araçla aktarma yapıyor, taşımayı kesintisiz sürdürüyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları kendi ekibimizle **söküp** yeni evde **montajını** yapıyoruz. Mamak içi kısa mesafeli taşımalarda yükleme, yol ve kurulum çoğunlukla aynı güne sığıyor. Tek eşya için [parça eşya taşıma](${PARCA}), yalnızca asansör için [asansör kiralama](${KIRALAMA}) hizmetimiz var. Diğer ilçeler için [Ankara evden eve nakliyat](/) sayfamıza bakabilirsiniz.`,
  ],
  etimesgut: [
    `**Etimesgut evden eve nakliyat** ve **Etimesgut asansörlü taşımacılık** işlerini planlı toplu konut bölgelerinde, kendi araç ve asansörlerimizle yapıyoruz. Geniş yollar ve blok düzeni sayesinde aracı blok önüne yanaştırıyor, yükleme mesafesini kısaltıyoruz.`,
    `[Eryaman](semt:eryaman), [Elvankent](semt:elvankent) ve [Bağlıca](semt:baglica) sitelerinde taşıma saati ve yük asansörü kullanımı yönetim kurallarına bağlı; bu yazışmaları biz yürütüyoruz. Yüksek bloklarda yük asansörü yoksa [mobil asansörle](${ASANSOR}) eşyayı balkondan araca indiriyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeni evinizde aynı gün **kuruyoruz**. Tek parça eşya için [parça eşya taşıma](${PARCA}), yeni ev hazır değilse [eşya depolama](${DEPO}) hizmeti veriyoruz. Tüm bölgelerimiz [Ankara evden eve nakliyat](/) sayfasında.`,
  ],
  sincan: [
    `**Sincan evden eve nakliyat** ve **Sincan asansörlü taşımacılık** işlerinde Ankara’nın batısındaki en kalabalık yerleşimlerinden birinde çalışıyoruz. Merkeze mesafe nedeniyle taşımaları sabah erken başlatıyor, yükleme ile yeni adresteki kurulumu aynı gün bitiriyoruz.`,
    `İlçe merkezindeki toplu konut bloklarında ve [Fatih](semt:fatih), [Yenikent](semt:yenikent), [Törekent](semt:torekent) gibi yeni yerleşimlerde aracı kapı önüne yanaştırıyor, asansörsüz binalarda [mobil asansörü](${ASANSOR}) ekiple aynı saatte getiriyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeni evde **montajını** yapıyoruz. Sincan’dan başka bir şehre taşınacaksanız [şehirler arası nakliyat](${SEHIRLER}) ekibimizle çalışıyoruz. Diğer ilçeler için [Ankara evden eve nakliyat](/) sayfamıza bakabilirsiniz.`,
  ],
  pursaklar: [
    `**Pursaklar evden eve nakliyat** ve **Pursaklar asansörlü taşımacılık** hizmetini Ankara’nın kuzeyinde hızla büyüyen bu ilçede kendi ekibimizle veriyoruz. Yeni konut projelerinin çoğunda yük asansörü bulunduğu için taşımayı kısa sürede tamamlıyoruz; asansör olmayan binalara **mobil asansörümüzü** getiriyoruz.`,
    `[Saray](semt:saray), [Altınova](semt:altinova) ve [Pursaklar Merkez](semt:merkez) taşımalarında Keçiören üzerinden gelen yolların sabah trafiğini hesaba katıp işi erken başlatıyoruz. Sitelerde yönetim iznini ve yük asansörü saatini biz ayarlıyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeni evde **kuruyoruz**. Tek eşya için [parça eşya taşıma](${PARCA}), yalnızca asansör için [asansör kiralama](${KIRALAMA}) hizmetimiz var. Diğer bölgeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  golbasi: [
    `**Gölbaşı evden eve nakliyat** ve **Gölbaşı asansörlü taşımacılık** işlerinde villa ve site ağırlıklı bir bölgede çalışıyoruz. Müstakil evlerde eşyayı doğrudan araca yüklüyor, bahçe, teras ve depo eşyası için ayrı bir **ambalaj** planı hazırlıyoruz.`,
    `[İncek](semt:incek) ve [Taşpınar](semt:taspinar) tarafındaki villa taşımalarında birden fazla araç ve daha kalabalık ekip planlıyor, işi aynı gün bitiriyoruz. [Karşıyaka](semt:karsiyaka) ve [Bahçelievler](semt:bahcelievler) sitelerinde ise giriş kaydını ve taşıma saatini yönetimle biz konuşuyoruz; yüksek bloklarda [mobil asansör](${ASANSOR}) kullanıyoruz.`,
    `Mobilyaları kendi marangozlarımızla **söküp** yeni evde **montajını** yapıyoruz. Yeni ev hazır değilse [eşya depolama](${DEPO}) hizmetimiz var. Diğer ilçeler için [Ankara evden eve nakliyat](/) sayfamıza bakabilirsiniz.`,
  ],
  cubuk: [
    `**Çubuk evden eve nakliyat** işlerini, havalimanı yolu üzerindeki bu ilçeye Ankara’dan giden kendi ekibimizle yapıyoruz. Merkezden uzaklık nedeniyle yol süresini taşıma planına ayrı bir kalem olarak koyuyor, ekibi sabah erken yola çıkarıyoruz.`,
    `[Çubuk Merkez](semt:merkez), [Esenboğa](semt:esenboga) ve [Yıldırım Beyazıt](semt:yildirim-beyazit) taraflarında az katlı binalar ve müstakil evler yaygın olduğu için taşımaların çoğunu asansörsüz tamamlıyoruz; yüksek binalarda [asansörlü taşımacılık](${ASANSOR}) için mobil asansörümüzü getiriyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeni evde **kuruyoruz**. Tek eşya için [parça eşya taşıma](${PARCA}) yapıyoruz. Diğer bölgeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  kahramankazan: [
    `**Kahramankazan evden eve nakliyat** işlerinde konut ve sanayi taşımacılığını birlikte yürütüyoruz. Organize sanayi bölgesindeki iş yeri ve depo taşımaları burada en az konut taşımaları kadar yoğun; ikisini de kendi araçlarımızla yapıyoruz.`,
    `[Kahramankazan Merkez](semt:merkez) ve [Saray](semt:saray) taşımalarında geniş yollar sayesinde büyük kasa araçla tek seferde yükleme yapıyor, sefer sayısını ve maliyeti düşürüyoruz. Merkeze mesafe nedeniyle işi sabah erken başlatıyoruz; yüksek binalarda [asansörlü taşıma](${ASANSOR}) yapıyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeni adreste **kuruyoruz**. İş yerleri için [ofis taşıma](${OFIS}) hizmetimiz var. Diğer ilçeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  akyurt: [
    `**Akyurt evden eve nakliyat** işlerini havalimanına ve organize sanayiye yakın bu ilçede kendi ekibimizle yapıyoruz. Konut taşımalarının yanında depo ve fabrika taşımalarını da üstleniyoruz.`,
    `[Akyurt Merkez](semt:merkez) ve [Balıkhisar](semt:balikhisar) taşımalarını tek güne sığdırmak için sabah erken başlıyoruz. Geniş yollar ve düşük trafik aracı adrese yanaştırmayı kolaylaştırıyor; yüksek binalarda [asansörlü taşımacılık](${ASANSOR}) için mobil asansör getiriyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeni evde **montajını** yapıyoruz. İş yeri ve depo işleri için [ofis taşıma](${OFIS}) ekibimiz çalışıyor. Diğer bölgeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  elmadag: [
    `**Elmadağ evden eve nakliyat** işlerini Ankara’nın doğusundaki bu yüksek rakımlı ilçede mevsime göre planlıyoruz. Kış aylarında yol ve zemin şartları taşıma saatini etkilediği için kış taşımalarını gün ortasına alıyoruz.`,
    `[Elmadağ Merkez](semt:merkez), [Hasanoğlan](semt:hasanoglan) ve [Lalahan](semt:lalahan) taraflarında müstakil ve az katlı yapılar yaygın; taşımaların çoğunu asansörsüz yapıyoruz. Yüksek binalarda [asansörlü taşıma](${ASANSOR}) için mobil asansörümüzü getiriyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeni evde **kuruyoruz**. Tek eşya için [parça eşya taşıma](${PARCA}) hizmetimiz var. Diğer ilçeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  polatli: [
    `**Polatlı evden eve nakliyat** işlerinde şehir merkezine yaklaşık bir saat mesafedeki bu büyük ilçeye kendi ekibimizle gidiyoruz. Taşımanın tek güne sığması için ekibi sabah erken yola çıkarıyoruz.`,
    `[Polatlı Merkez](semt:merkez), [Şentepe](semt:sentepe) ve [Cumhuriyet](semt:cumhuriyet) taraflarında apartman yerleşimi düzenli, sokaklar araç yanaşmasına uygun. Asansörsüz binalarda [asansörlü taşımacılık](${ASANSOR}) yapıyoruz. Polatlı’dan Ankara merkeze ve Eskişehir yönüne giden taşımalarda [şehirler arası nakliyat](${SEHIRLER}) tecrübemizi kullanıyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeni evde **montajını** yapıyoruz. Diğer bölgeler için [Ankara evden eve nakliyat](/) sayfamıza bakabilirsiniz.`,
  ],
  beypazari: [
    `**Beypazarı evden eve nakliyat** işlerinde Ankara’ya yaklaşık 100 kilometre mesafedeki bu ilçeye günü baştan planlayarak gidiyoruz. Ekibimiz sabah erken yola çıkıyor, öğleden önce yüklemeye başlıyor ve akşam olmadan kurulumu bitiriyor.`,
    `[Beypazarı Merkez](semt:merkez), [Kurtuluş](semt:kurtulus) ve [Zafer](semt:zafer) taraflarında tarihi sokaklar dar ve eğimli; büyük aracın giremediği adreslerde yüklemeyi küçük araçla ana caddeye aktararak yapıyoruz. Bunu keşifte görüp fiyata dahil ediyoruz, taşıma günü ek ücret çıkmıyor.`,
    `Uzun yol için eşyanızı **ambalajlıyor**, araç içinde kuşakla sabitliyor, mobilyaları yeni evde **kuruyoruz**. Diğer bölgeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  ayas: [
    `**Ayaş evden eve nakliyat** işlerini Ankara’ya yaklaşık 60 kilometre mesafedeki bu ilçede tek günde tamamlıyoruz. Ekibimiz sabah Ankara’dan çıkıyor, öğleden önce yüklemeyi bitiriyor, öğleden sonra yeni adreste kurulumu yapıyor.`,
    `[Ayaş Merkez](semt:merkez) ve [Sinanlı](semt:sinanli) taraflarında bahçeli evler yaygın. Bahçe kapısından araca kadar olan mesafe yükleme süresini uzattığı için keşifte bu mesafeyi ölçüyor, ekip sayısını ona göre belirliyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeni evde **montajını** yapıyoruz; fiyatı keşifte yazılı veriyoruz. Diğer ilçeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  gudul: [
    `**Güdül evden eve nakliyat** işlerinde Ankara’ya yaklaşık 85 kilometre mesafedeki bu ilçeye kendi ekibimizle gidiyoruz. İlçe merkezi eğimli bir yamaca kurulu olduğu için planı, aracın nereye kadar çıkabileceğini önceden belirleyerek yapıyoruz.`,
    `[Güdül Merkez](semt:merkez) ve [Sorgun](semt:sorgun) taraflarında büyük aracın giremediği sokaklarda eşyayı küçük araçla ana caddedeki araca aktarıyoruz. Bunu keşifte tespit edip fiyata dahil ediyoruz; taşıma günü sürpriz ücret çıkmıyor.`,
    `Eşyanızı **ambalajlıyor**, [sigortalı](${SIGORTA}) taşıyor, mobilyaları yeni evde **kuruyoruz**. Diğer bölgeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  kizilcahamam: [
    `**Kızılcahamam evden eve nakliyat** işlerinde villa, dağ evi ve yazlık taşımalarını sıkça yapıyoruz. Ankara’ya yaklaşık 80 kilometre mesafedeki bu ilçede eşya hacmi büyük, yükleme mesafesi uzun olduğu için ekip ve aracı keşifte buna göre belirliyoruz.`,
    `[Kızılcahamam Merkez](semt:merkez), [Soğuksu](semt:soguksu) ve [Güvem](semt:guvem) taşımalarında bahçe ve depo eşyasını ev eşyasından ayrı **ambalajlıyor**, araca en son yüklüyoruz. Kar döneminde orman içi güzergahı taşıma sabahı tekrar kontrol ediyoruz.`,
    `Mobilyaları **söküp** yeni evde **montajını** yapıyoruz; yazlık eşyası için [eşya depolama](${DEPO}) hizmetimiz var. Diğer ilçeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  camlidere: [
    `**Çamlıdere evden eve nakliyat** işlerini Ankara’ya yaklaşık 110 kilometre mesafede, orman içi yollarda yapıyoruz. İlçede dağ evi ve yazlık taşımaları ağırlıkta; eşya hacmi şehir dairelerine göre büyük olduğu için aracı keşifte seçiyoruz.`,
    `[Çamlıdere Merkez](semt:merkez) ve [Peçenek](semt:peclin) taşımalarında soba, odunluk ve bahçe mobilyası gibi parçaları ayrı **ambalajlıyor**, araca en son yüklüyor, yeni adreste ilk onları indiriyoruz. Kışın güzergah kapanabildiği için tarihi hava durumuna göre belirliyoruz.`,
    `Mobilyaları **söküp** yeni evde **kuruyoruz**. Diğer bölgeler için [Ankara evden eve nakliyat](/) sayfamıza bakabilirsiniz.`,
  ],
  kalecik: [
    `**Kalecik evden eve nakliyat** işlerini Ankara’ya yaklaşık 80 kilometre mesafedeki bu ilçede tek günde tamamlıyoruz: sabah yükleme, öğleden sonra kurulum. Samsun yolu üzerinden ulaşım rahat olduğu için ekibimiz erken saatte adreste oluyor.`,
    `[Kalecik Merkez](semt:merkez) ve [Tavşancıl](semt:tavsan) taraflarında iki ayrı plan yapıyoruz: kale eteğindeki dar ve eğimli sokaklarda küçük araçla aktarma, yeni yerleşimlerde ise aracı doğrudan kapıya yanaştırma.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeni evde **montajını** yapıyoruz. Diğer ilçeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  haymana: [
    `**Haymana evden eve nakliyat** işlerini Ankara’ya yaklaşık 75 kilometre mesafedeki bu ilçede bir günde bitiriyoruz. Ekibimiz sabah yola çıkıyor, öğleden önce yüklemeyi tamamlıyor, öğleden sonra yeni evde mobilya montajını yapıyor.`,
    `[Haymana Merkez](semt:merkez) ve [Kaplıcalar Bölgesi](semt:kaplicalar) taraflarında pansiyon ve apart taşımalarını da yapıyoruz. Bu işlerde oda oda etiketleme yapıyor, eşyayı yeni adreste doğrudan ait olduğu odaya çıkarıyoruz.`,
    `Eşyanızı **ambalajlıyor**, mobilyaları **söküp** yeniden **kuruyoruz**. Diğer bölgeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  bala: [
    `**Balâ evden eve nakliyat** işlerini Ankara’nın güneydoğusunda, yaklaşık 60 kilometre mesafedeki bu ilçede kendi ekibimizle yapıyoruz. Sokaklar geniş olduğu için aracı çoğu adreste kapıya kadar yanaştırıyoruz.`,
    `[Balâ Merkez](semt:merkez) ve [Kesikköprü](semt:kesikkopru) taşımalarında planı mevsime göre yapıyoruz: kışın kar ve buzlanma ihtimali yüzünden saati gün ortasına alıyor, yazın sıcak saatlerden önce yüklemeyi bitiriyoruz.`,
    `Eşyanızı **ambalajlıyor**, [sigortalı](${SIGORTA}) taşıyor, mobilyaları yeni evde **kuruyoruz**. Diğer ilçeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  sereflikochisar: [
    `**Şereflikoçhisar evden eve nakliyat** işlerinde Ankara’ya 150 kilometreyi aşan mesafe yüzünden planlamayı en dikkatli yaptığımız taşımalardan birini üstleniyoruz. Ekibimiz sabah erken yola çıkıyor, yüklemeyi öğleden önce bitiriyor ve akşam olmadan kurulumu tamamlıyor.`,
    `[Şereflikoçhisar Merkez](semt:merkez) ve [Şekerciler](semt:sekerciler) taşımalarında ikinci sefer zaman ve para kaybı olduğu için keşifte eşya hacmini geniş hesaplıyor, tek seferde taşıyacak araç gönderiyoruz.`,
    `Uzun yol için eşyanızı **ambalajlıyor**, araç içinde kuşakla sabitliyor, mobilyaları yeni evde **kuruyoruz**. Diğer bölgeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
  nallihan: [
    `**Nallıhan evden eve nakliyat** işlerinde Ankara’nın en batıdaki ilçesine, yaklaşık 160 kilometrelik yola kendi ekibimizle çıkıyoruz. Günü sabah yükleme, öğlen yol, ikindi teslim ve kurulum olarak sıralıyoruz.`,
    `[Nallıhan Merkez](semt:merkez) ve [Çayırhan](semt:cayirhan) taşımalarında mobilya ve beyaz eşyayı araç içinde kuşaklarla sabitliyor, kırılabilir parçaları çift kat **ambalajlıyoruz**. Bu mesafedeki her işte [taşıma sigortası](${SIGORTA}) standart.`,
    `Mobilyaları **söküp** yeni evde **montajını** yapıyoruz. Diğer ilçeler için [Ankara evden eve nakliyat](/) sayfamıza bakabilirsiniz.`,
  ],
  evren: [
    `**Evren evden eve nakliyat** işlerinde Ankara’ya yaklaşık 170 kilometre mesafedeki bu ilçeye tek seferde taşıma yapıyoruz; ikinci sefer bir gün ve ciddi maliyet demek.`,
    `[Evren Merkez](semt:merkez) taşımalarında keşifte eşya hacmini geniş hesaplıyor, aracı buna göre seçiyoruz. Uzun yolda eşyayı kuşakla sabitliyor, kırılabilir parçaları çift kat **ambalajlıyor** ve [sigortalı](${SIGORTA}) taşıyoruz.`,
    `Mobilyaları **söküp** yeni evde **kuruyoruz**. Diğer bölgeler [Ankara evden eve nakliyat](/) sayfamızda.`,
  ],
}
