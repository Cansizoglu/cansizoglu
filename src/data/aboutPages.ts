import { site } from './site'

/**
 * Hakkımızda menüsünün altındaki kurumsal sayfalar.
 * Metinler tek yerde durduğu için menü, sayfa ve sitemap aynı listeden beslenir.
 */
export type AboutPage = {
  slug: string
  /** Menüde ve kırıntı yolunda görünen kısa ad */
  navLabel: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  body: ({ type: 'h2'; text: string } | { type: 'p'; text: string } | { type: 'ul'; items: string[] })[]
}

export const aboutPages: AboutPage[] = [
  {
    slug: 'misyonumuz',
    navLabel: 'Misyonumuz',
    title: 'Misyonumuz',
    metaTitle: 'Misyonumuz',
    metaDescription:
      'Cansızoğlu Nakliyat’ın misyonu: taşınmayı sürprizsiz bir güne indirmek. Yazılı fiyat, kendi ekibimiz ve sözleşmeli taşıma ilkelerimiz.',
    intro:
      'Taşınma, çoğu insanın hayatında birkaç kez yaşadığı ve her seferinde tedirgin olduğu bir gündür. Bizim işimiz o günü sürprizsiz hale getirmek.',
    body: [
      {
        type: 'p',
        text: `${site.name} olarak ${site.foundedYear} yılından bu yana Ankara’da evden eve nakliyat yapıyoruz. Bu süre içinde şunu gördük: müşterinin asıl endişesi eşyasının taşınıp taşınmayacağı değil, taşıma günü karşısına ne çıkacağını bilmemesidir. Fiyatın değişmesi, ekibin geç gelmesi, asansörün bulunamaması, montajın ertesi güne kalması. Misyonumuz bu belirsizliği ortadan kaldırmaktır.`,
      },
      { type: 'h2', text: 'Verdiğimiz sözü yazılı veriyoruz' },
      {
        type: 'p',
        text: 'Adrese gidip ücretsiz keşif yapmadan fiyat vermiyoruz. Keşifte eşya listesi çıkarılır, binanın kat durumu, merdiven genişliği ve aracın yanaşacağı alan yerinde görülür. Çıkan fiyat sözleşmeye yazılır ve taşıma günü değişmez. Telefonda tahminle verilen düşük fiyatın taşıma günü ikiye katlanması bu sektörün en bilinen sorunudur; biz bu yöntemle çalışmıyoruz.',
      },
      { type: 'h2', text: 'İşi kendi ekibimiz yapar' },
      {
        type: 'p',
        text: 'Araçlarımız, mobil taşıma asansörlerimiz ve personelimiz firmamıza aittir. Aldığımız işi taşerona devretmiyoruz. Bu, evinize gelen ekibin bizim eğittiğimiz ekip olması ve bir sorun çıktığında muhatabın belli olması demektir.',
      },
      { type: 'h2', text: 'Eşyaya kendi eşyamız gibi davranırız' },
      {
        type: 'ul',
        items: [
          'Mobilya söküm ve montajı kendi marangoz ekibimizce yapılır.',
          'Kırılacak eşya balonlu naylonla, mobilya streç filmle ambalajlanır; ambalaj malzemesi fiyata dahildir.',
          'Yükleme kapalı kasa araçlara yapılır ve eşya araç içinde sabitlenir.',
          'Her taşıma sözleşmeli ve sigorta kapsamındadır.',
        ],
      },
      { type: 'h2', text: 'Aile şirketi olmanın anlamı' },
      {
        type: 'p',
        text: `Cansızoğlu Nakliyat bir aile şirketidir. Ankara’da açık adresi, tabelası ve sabit hattı olan bir işletmeyiz. Bu bizim için bir reklam cümlesi değil, sorumluluk anlamına geliyor: bu şehirde kalıcıyız ve her taşımanın hesabını verecek durumdayız. Adresimiz ${site.address.full}.`,
      },
    ],
  },
  {
    slug: 'vizyonumuz',
    navLabel: 'Vizyonumuz',
    title: 'Vizyonumuz',
    metaTitle: 'Vizyonumuz',
    metaDescription:
      'Cansızoğlu Nakliyat’ın vizyonu: Ankara’da nakliyatın standardını yükseltmek. Şeffaf fiyat, kendi filomuz ve sürekli gelişen ekipmanla hedeflerimiz.',
    intro:
      'Ankara’da nakliyat denince akla gelen ilk firma olmak değil hedefimiz. Hedefimiz, nakliyattan beklenen standardı yükseltmek.',
    body: [
      {
        type: 'p',
        text: 'Nakliyat, Türkiye’de güven sorununun en çok konuşulduğu sektörlerden biri. Fiyatın taşıma günü değişmesi, eşyanın hasar görmesi, firmanın iş bittikten sonra ulaşılamaz olması sık duyduğumuz şikâyetler. Vizyonumuz, müşterinin bu sorunları bir ihtimal olarak bile düşünmediği bir hizmet standardı kurmak ve bunu Ankara’nın tamamına yaymak.',
      },
      { type: 'h2', text: 'Şeffaflığı standart haline getirmek' },
      {
        type: 'p',
        text: 'Fiyatın nasıl oluştuğunu müşterinin de görebilmesi gerektiğine inanıyoruz. Bu yüzden sitemizde fiyat aralıklarını açıkça yayınlıyor, taşınma maliyetini kendi başınıza hesaplayabileceğiniz bir araç sunuyoruz. Hedefimiz, fiyat konuşmasının pazarlık değil hesap olduğu bir sektöre doğru gitmek.',
      },
      { type: 'h2', text: 'Ekipmanı ve ekibi sürekli geliştirmek' },
      {
        type: 'p',
        text: 'Mobil taşıma asansörü, kapalı kasa araç filosu ve ambalaj malzemesi bizim için maliyet kalemi değil, işin yapılabilir olmasının şartı. Filomuzu ve ekipmanımızı büyütmeye, personelimizi eğitmeye devam ediyoruz. Ankara’nın yapı stoğu değiştikçe, dar sokaklı eski mahallelerden yüksek katlı sitelere kadar her yapıya uygun çözüm üretebilmeyi hedefliyoruz.',
      },
      { type: 'h2', text: 'Ankara’nın her noktasında aynı hizmet' },
      {
        type: 'p',
        text: 'Merkez ilçelerde verdiğimiz hizmetin aynısını çevre ilçelerde de vermeyi hedefliyoruz. Keçiören’de yapılan taşımayla Beypazarı’nda yapılan taşıma arasında ekip, ekipman ve sözleşme açısından fark olmamalı. Ankara’nın 25 ilçesinde ve semt semt hizmet vermemizin sebebi bu.',
      },
      { type: 'h2', text: 'Uzun vadeli hedeflerimiz' },
      {
        type: 'ul',
        items: [
          'Ankara içi her taşımada aynı gün söküm, taşıma ve montajı kural haline getirmek.',
          'Depolama kapasitemizi büyüterek taşınma ile yerleşme arasındaki boşluğu tamamen kapatmak.',
          'Kurumsal ofis ve iş yeri taşımalarında iş kaybını sıfıra indiren planlamayı standartlaştırmak.',
          'Müşteriye taşıma öncesi ve sonrası aynı ilgiyi gösteren bir iletişim düzeni kurmak.',
        ],
      },
    ],
  },
  {
    slug: 'kvkk-aydinlatma-metni',
    navLabel: 'KVKK Aydınlatma Metni',
    title: 'KVKK Aydınlatma Metni',
    metaTitle: 'KVKK Aydınlatma Metni',
    metaDescription:
      'Cansızoğlu Nakliyat kişisel verilerin korunması aydınlatma metni: işlenen veriler, işleme amacı, hukuki sebep, saklama süresi ve KVKK 11. madde haklarınız.',
    intro:
      '6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 10. maddesi uyarınca, kişisel verilerinizin hangi amaçla işlendiği konusunda sizi bilgilendirmek isteriz.',
    body: [
      { type: 'h2', text: 'Veri sorumlusu' },
      {
        type: 'p',
        text: `Bu aydınlatma metni kapsamında veri sorumlusu ${site.legalName} (“${site.name}”, “Şirket”) olup, adresi ${site.address.full}’dir. Bize ${site.phone.landline} numaralı sabit hattan, ${site.phone.gsm} numaralı telefondan veya ${site.email} adresinden ulaşabilirsiniz.`,
      },
      { type: 'h2', text: 'İşlenen kişisel veriler' },
      {
        type: 'p',
        text: 'Hizmetlerimizden yararlanmak için bizimle iletişime geçtiğinizde aşağıdaki kişisel verileriniz işlenebilmektedir:',
      },
      {
        type: 'ul',
        items: [
          'Kimlik verisi: ad ve soyadınız.',
          'İletişim verisi: telefon numaranız, varsa e-posta adresiniz.',
          'Adres verisi: taşınacağınız çıkış ve varış adresleri, bina ve kat bilgisi.',
          'Müşteri işlem verisi: talep ettiğiniz hizmet, taşınma tarihi, eşya listesi ve verilen fiyat teklifi.',
          'Hukuki işlem verisi: sözleşme imzalanması hâlinde sözleşme ve fatura bilgileri.',
        ],
      },
      { type: 'h2', text: 'Kişisel verilerin işlenme amaçları' },
      {
        type: 'ul',
        items: [
          'Talep ettiğiniz keşif ve fiyat teklifinin hazırlanması ve size iletilmesi.',
          'Nakliyat, depolama ve montaj hizmetlerinin planlanması ve yerine getirilmesi.',
          'Taşıma sözleşmesinin kurulması ve ifası, taşıma sigortasının yapılabilmesi.',
          'Faturalandırma ve muhasebe kayıtlarının tutulması.',
          'Hizmet süresince ve sonrasında sizinle iletişim kurulması, talep ve şikâyetlerinizin karşılanması.',
          'İlgili mevzuattan doğan yükümlülüklerimizin yerine getirilmesi.',
        ],
      },
      { type: 'h2', text: 'Kişisel verilerin toplanma yöntemi ve hukuki sebebi' },
      {
        type: 'p',
        text: 'Kişisel verileriniz; telefon görüşmesi, WhatsApp mesajı, e-posta, web sitemizdeki fiyat teklifi formu veya adresinizde yapılan keşif sırasında, tarafınızdan iletilmek suretiyle toplanmaktadır.',
      },
      {
        type: 'p',
        text: 'Bu veriler, KVKK’nın 5. maddesinde yer alan “bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması”, “veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması” ve “ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması” hukuki sebeplerine dayanılarak işlenmektedir.',
      },
      { type: 'h2', text: 'Web sitesi ve çerezler' },
      {
        type: 'p',
        text: 'Web sitemizde ziyaretçi takibi yapan reklam veya analiz çerezi kullanılmamaktadır. Sitemizdeki fiyat teklifi formu bir sunucuya kayıt yapmaz; formu doldurduğunuzda girdiğiniz bilgiler hazır bir mesaj hâline getirilerek WhatsApp uygulamanızda açılır ve mesajı göndermeye karar veren siz olursunuz. Mesajı göndermediğiniz sürece bu bilgiler bize ulaşmaz.',
      },
      {
        type: 'p',
        text: 'Hakkımızda sayfamızda yer alan tanıtım videosu YouTube üzerinden gösterilmektedir. Videoyu izlemeniz hâlinde YouTube’un kendi çerez ve gizlilik politikaları geçerli olur.',
      },
      { type: 'h2', text: 'Kişisel verilerin aktarılması' },
      {
        type: 'p',
        text: 'Kişisel verileriniz, hizmetin gereği olarak yalnızca zorunlu hâllerde ve amaçla sınırlı olarak; taşıma sigortasının yapılabilmesi için sigorta şirketiyle, yasal yükümlülüklerimiz kapsamında yetkili kamu kurum ve kuruluşlarıyla ve muhasebe hizmeti aldığımız mali müşavirimizle paylaşılabilir. Kişisel verileriniz pazarlama amacıyla üçüncü kişilere satılmaz veya devredilmez.',
      },
      { type: 'h2', text: 'Saklama süresi' },
      {
        type: 'p',
        text: 'Kişisel verileriniz, işlendikleri amaç için gerekli olan süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı ile saklama süreleri boyunca muhafaza edilir. Bu sürelerin sona ermesinin ardından verileriniz silinir, yok edilir veya anonim hâle getirilir. Sözleşme kurulmayan fiyat teklifi görüşmelerine ait kayıtlar, talebin sonuçlanmasının ardından makul süre içinde silinir.',
      },
      { type: 'h2', text: 'KVKK 11. madde kapsamındaki haklarınız' },
      {
        type: 'p',
        text: 'Kanun’un 11. maddesi uyarınca veri sorumlusuna başvurarak aşağıdaki haklarınızı kullanabilirsiniz:',
      },
      {
        type: 'ul',
        items: [
          'Kişisel verinizin işlenip işlenmediğini öğrenme ve işlenmişse buna ilişkin bilgi talep etme.',
          'Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme.',
          'Yurt içinde veya yurt dışında verilerinizin aktarıldığı üçüncü kişileri bilme.',
          'Eksik veya yanlış işlenmiş kişisel verilerinizin düzeltilmesini isteme.',
          'Kanun’un 7. maddesindeki şartlar çerçevesinde verilerinizin silinmesini veya yok edilmesini isteme.',
          'Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme.',
          'İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme.',
          'Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.',
        ],
      },
      { type: 'h2', text: 'Başvuru yolu' },
      {
        type: 'p',
        text: `Yukarıdaki haklarınıza ilişkin taleplerinizi, kimliğinizi tespit edici belgelerle birlikte ${site.address.full} adresine yazılı olarak veya ${site.email} adresine e-posta göndererek iletebilirsiniz. Başvurunuz, talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.`,
      },
    ],
  },
]

export const aboutPageBySlug = (slug: string) => aboutPages.find((p) => p.slug === slug)
