/** Anasayfadaki "Taşıma süreci" sekmeleri. */
export type ProcessTab = {
  id: string
  label: string
  heading: string
  text: string
  points: string[]
  image: string
  imageAlt: string
}

export const processTabs: ProcessTab[] = [
  {
    id: 'ekspertiz',
    label: 'Ekspertiz',
    heading: 'Ücretsiz ekspertiz ve yazılı fiyat',
    text: 'Taşımanın en kritik aşaması, henüz hiçbir eşyaya dokunulmadan yapılan keşiftir. Ekibimiz adresinize gelir, eşyanızı parça parça görür, binanın kat durumunu, merdiven genişliğini ve aracın yanaşacağı alanı yerinde inceler. Böylece hem doğru araç ve ekip planlanır hem de size taşıma günü değişmeyecek bir fiyat verilir.',
    points: [
      'Eşya listesi çıkarılır ve karşılıklı imzalanır',
      'Asansör gerekip gerekmediği yerinde belirlenir',
      'Fiyat sözleşmeye yazılır, taşıma günü değişmez',
      'Keşif için ücret alınmaz',
    ],
    image: '/img/ofis.webp',
    imageAlt: 'Cansızoğlu Nakliyat ekibinin keşif yaptığı merkez ofis',
  },
  {
    id: 'ambalajlama',
    label: 'Ambalajlama',
    heading: 'Her eşyaya kendi ambalajı',
    text: 'Taşımada oluşan hasarların büyük bölümü yolda değil, yükleme sırasında yetersiz ambalajdan kaynaklanır. Bu yüzden ambalajı işin en başında ciddiye alıyoruz. Mobilya streç filmle, cam ve porselen balonlu naylonla, tablo ve ayna köşe koruyucu ve kartonla, beyaz eşya battaniyeyle paketlenir.',
    points: [
      'Koli, streç, balonlu naylon ve bant fiyata dahil',
      'Kolilerin üzerine oda ve içerik bilgisi yazılır',
      'Kırılacak eşya tek tek sarılır, kutu boşlukları doldurulur',
      'Gardırop içeriği askıdan çıkarılmadan taşınabilir',
    ],
    image: '/img/tasima-kasalari.jpg',
    imageAlt: 'Ambalajlı taşımada kullanılan kilitli plastik taşıma kasaları',
  },
  {
    id: 'montaj',
    label: 'Mobilya ve Beyaz Eşya Montajı',
    heading: 'Söküm ve montaj kendi marangozumuzla',
    text: 'Gardırop, yatak odası takımı, mutfak masası ve beyaz eşya taşımadan önce sökülür, yeni adreste aynı özenle kurulur. Söküm ve montajı dışarıdan usta çağırarak değil, kendi marangoz ekibimizle yapıyoruz; bu yüzden vidası kaybolan, kapağı oturmayan mobilya sorunu yaşanmıyor.',
    points: [
      'Sökülen her parçanın vidası poşetlenip kendi parçasına bantlanır',
      'Çamaşır makinesi nakliye vidalarıyla sabitlenir',
      'Buzdolabı dik taşınır, bağlantıları yeni adreste yapılır',
      'Montaj taşıma fiyatına dahildir',
    ],
    image: '/img/arac-sari-kamyon.jpg',
    imageAlt: 'Cansızoğlu Nakliyat ev ve ofis taşıma aracı',
  },
  {
    id: 'asansorlu-tasima',
    label: 'Asansörlü Taşıma',
    heading: 'Kendi asansör filomuzla yükleme',
    text: 'Dar merdivenli binalarda eşyayı merdivenden indirmek hem riskli hem de yavaştır. Mobil taşıma asansörümüz eşyayı balkondan veya pencereden doğrudan araca indirir. Asansör araçları bize ait olduğu için taşıma saatinde asansör bekleme sorunu yaşanmaz.',
    points: [
      'Zeminden 12. kata kadar güvenli yükleme',
      'Merdiven, korkuluk ve duvar zarar görmez',
      'Asansörü yalnızca eğitimli operatörlerimiz kullanır',
      'Saatlik asansör kiralama da yapılır',
    ],
    image: '/img/arac-filo.webp',
    imageAlt: 'Asansörlü nakliyat aracı ve taşıma kamyonu',
  },
  {
    id: 'tasima-teslim',
    label: 'Taşıma ve Teslim',
    heading: 'Kapalı kasa araçla taşıma ve yerleşim',
    text: 'Eşyanız kapalı kasa araçlarda, sabitlenmiş ve örtülmüş halde taşınır. Yeni adreste yerleşim, keşifte konuşulan plana göre yapılır; kolilerin üzerindeki oda bilgisi sayesinde her şey doğru odaya girer. Teslimde eşya listesi üzerinden kontrol yapılır.',
    points: [
      'Eşya yağmur, toz ve dış etkenlerden korunur',
      'Taşınan her parça sigorta kapsamındadır',
      'Yerleşim ve montaj aynı gün tamamlanır',
      'Teslim eşya listesiyle karşılıklı kontrol edilir',
    ],
    image: '/img/slider-1.jpg',
    imageAlt: 'Cansızoğlu Nakliyat kapalı kasa taşıma aracı ve asansör aracı',
  },
]
