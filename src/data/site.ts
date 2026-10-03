export const site = {
  name: 'Ankara Taşıma',
  legalName: 'Ankara Taşıma Evden Eve Nakliyat',
  shortName: 'Ankara Taşıma',
  tagline: 'Ankara Evden Eve Nakliyat',
  url: 'https://www.ankaraevdenevenakliye.net.tr',
  description:
    'Ankara evden eve nakliyat, ofis taşıma, asansörlü nakliyat ve depolama hizmetleri. Sigortalı, ambalajlı ve zamanında taşımacılık.',
  // Sitede tek telefon var. WhatsApp bağlantıları da aynı hatta gidiyor.
  phone: {
    display: '0312 341 53 40',
    href: 'tel:+903123415340',
    whatsapp: '903123415340',
    whatsappHref: 'https://wa.me/903123415340',
  },
  email: 'info@ankaraevdenevenakliye.net.tr',
  address: {
    street: 'Prof. Dr. Ahmet Taner Kışlalı Mah. Alacaatlı Cad. No: 20',
    postalCode: '06810',
    neighborhood: 'Çayyolu',
    district: 'Çankaya',
    city: 'Ankara',
    country: 'TR',
    full: 'Prof. Dr. Ahmet Taner Kışlalı Mah. Alacaatlı Cad. No: 20, 06810 Çayyolu, Çankaya / Ankara',
    short: 'Çayyolu, Çankaya / Ankara',
  },
  hours: 'Pazartesi - Cumartesi 08:00 - 20:00, Pazar randevu ile',
  // Yaklaşık Çayyolu merkezi. Google İşletme kaydı açılınca oradaki değerlerle değiştirilmeli.
  geo: {
    latitude: 39.8847,
    longitude: 32.6912,
  },
  maps: {
    // Google İşletme kaydının ("Ankara Taşıma") kendi gömme adresi.
    embedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48987.993201827696!2d32.61309622167969!3d39.87984699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d339d3a54b5c3f%3A0x1bf7d42e17204a06!2zQW5rYXJhIFRhxZ_EsW1h!5e0!3m2!1str!2str!4v1791018911175!5m2!1str!2str',
    // Yol tarifi ve JSON-LD hasMap: işletme kaydının kalıcı bağlantısı (cid).
    placeUrl: 'https://www.google.com/maps?cid=2015312652693162502',
  },
} as const

export type Site = typeof site
