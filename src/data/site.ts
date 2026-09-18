export const site = {
  name: 'Cansızoğlu Nakliyat',
  legalName: 'Cansızoğlu Nakliyat Depolama Lojistik',
  familyBusiness: true,
  shortName: 'Cansızoğlu',
  tagline: 'Ankara Evden Eve Nakliyat',
  foundedYear: 1998,
  url: 'https://www.ankaraevdenevenakliye.net.tr',
  description:
    'Ankara evden eve nakliyat, ofis taşıma, asansörlü nakliyat ve depolama hizmetleri. Sigortalı, ambalajlı ve zamanında taşımacılık.',
  phone: {
    callCenter: '444 0 510',
    callCenterHref: 'tel:+904440510',
    landline: '0312 384 45 70',
    landlineHref: 'tel:+903123844570',
    gsm: '0532 620 94 30',
    gsmHref: 'tel:+905326209430',
    whatsapp: '905326209430',
  },
  email: 'info@ankaraevdenevenakliye.net.tr',
  address: {
    street: 'Altındağ',
    district: 'Altındağ',
    city: 'Ankara',
    country: 'TR',
    full: 'Altındağ / Ankara',
  },
  hours: 'Pazartesi - Cumartesi 08:00 - 20:00, Pazar randevu ile',
  social: {
    instagram: 'https://www.instagram.com/cansizoglunakliyat/',
    facebook: 'https://www.facebook.com/www.cansizoglunakliyat.com.tr/',
    youtube: 'https://www.youtube.com/@cansizoglunakliyat',
  },
  video: {
    // Hakkımızda sayfasındaki tanıtım videosu (YouTube Shorts)
    youtubeId: 'HGVhNqzj4vU',
    title: 'Cansızoğlu Nakliyat tanıtım videosu',
  },
  geo: {
    latitude: 39.9563,
    longitude: 32.8783,
  },
} as const

export type Site = typeof site
