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
    street: 'Zübeyde Hanım Mah. Aslanbey Cad. No: 44/C',
    postalCode: '06070',
    district: 'Altındağ',
    city: 'Ankara',
    country: 'TR',
    full: 'Zübeyde Hanım Mah. Aslanbey Cad. No: 44/C, 06070 Altındağ / Ankara',
    short: 'Altındağ / Ankara',
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
  // Koordinatlar ve harita gömme adresi firmanın Google İşletme kaydından alındı
  geo: {
    latitude: 39.9534894,
    longitude: 32.8459337,
  },
  maps: {
    embedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.4589991961166!2d32.84593367435052!3d39.95348938370621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f7c22a14a75%3A0x8c711654dc4de495!2zQ2Fuc8Sxem_En2x1IE5ha2xpeWF0!5e0!3m2!1str!2str!4v1789741667493!5m2!1str!2str',
    placeUrl: 'https://www.google.com/maps?ftid=0x14d34f7c22a14a75:0x8c711654dc4de495',
  },
} as const

export type Site = typeof site
