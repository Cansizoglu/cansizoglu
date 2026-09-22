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
    embedSrc:
      'https://maps.google.com/maps?q=Prof.%20Dr.%20Ahmet%20Taner%20K%C4%B1%C5%9Flal%C4%B1%20Mahallesi%2C%20Alacaatl%C4%B1%20Caddesi%2C%20%C3%87ankaya%2C%20Ankara&z=15&output=embed',
    placeUrl:
      'https://www.google.com/maps/search/?api=1&query=Prof.+Dr.+Ahmet+Taner+K%C4%B1%C5%9Flal%C4%B1+Mahallesi+Alacaatl%C4%B1+Caddesi+%C3%87ankaya+Ankara',
  },
} as const

export type Site = typeof site
