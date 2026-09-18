# Cansızoğlu Nakliyat - Ankara Evden Eve Nakliyat Sitesi

Next.js 14 (App Router) + TypeScript + Tailwind CSS ile hazırlanmış, admin panelsiz
statik içerikli kurumsal nakliyat sitesi. Tüm içerik `src/data` klasöründeki dosyalarda
tutulur; veritabanı, CMS veya giriş paneli yoktur.

## Çalıştırma

```bash
npm install
npm run dev        # http://localhost:3000
```

Yayın için:

```bash
npm run build
npm start
```

## Klasör yapısı

```
public/img/              Görseller (slider, araç, ofis fotoğrafları)
src/app/                 Sayfalar (App Router)
  page.tsx               Anasayfa
  hizmetler/             Hizmet listesi ve hizmet detay sayfaları
  bolgeler/              İlçe ve semt sayfaları
  blog/                  Blog listesi ve yazı sayfaları
  galeri/                Galeri
  hakkimizda/            Hakkımızda (tanıtım videosu gömülü)
  iletisim/              İletişim ve harita
  fiyat-teklifi/         Teklif formu
  nakliyat-fiyat-hesaplama/  Fiyat ve km hesaplama aracı
  sitemap.ts robots.ts   SEO dosyaları (otomatik üretilir)
  icon.svg               Favicon
src/components/          Header, Footer, slider, form, sidebar vb.
src/data/                TÜM İÇERİK BURADA
  site.ts                Telefon, adres, sosyal medya, domain, video
  services.ts            Hizmetler
  districts/             Ankara'nın 25 ilçesi ve semtleri (ilçe başına dosya)
    index.ts             Tüm ilçeleri birleştirir, yardımcı fonksiyonlar
    types.ts             District ve Neighborhood tipleri
    kecioren.ts ...      Merkez ilçeler, her biri ayrı dosya
    cevre-yakin.ts       Sincan, Pursaklar, Gölbaşı, Polatlı vb.
    cevre-uzak.ts        Beypazarı, Nallıhan, Haymana, Kızılcahamam vb.
  pricing.ts             Fiyat listesi ve hesaplama aracı katsayıları
  blog.ts                Blog yazıları
src/lib/seo.ts           Metadata ve yapısal veri (JSON-LD) yardımcıları
```

## İçerik nasıl değiştirilir?

Panel olmadığı için içerikler doğrudan `src/data` dosyalarından düzenlenir.

- **Telefon, adres, sosyal medya, domain:** `src/data/site.ts`
- **Hizmet eklemek:** `src/data/services.ts` içindeki diziye yeni bir nesne ekleyin.
  Sayfa, sitemap ve menü otomatik oluşur.
- **İlçe eklemek:** `src/data/districts/` altına yeni bir dosya açın (ya da mevcut
  bir gruba ekleyin) ve `src/data/districts/index.ts` içindeki `districts` dizisine
  dahil edin. `path` alanı URL'de görünen anahtar kelimeli adrestir
  (örn. `sincan-evden-eve-nakliyat`). Ankara'nın 25 ilçesi hazır durumdadır.
- **Semt eklemek:** ilgili ilçenin `neighborhoods` dizisine ekleyin. Semt, o ilçenin
  sidebar listesinde ve sitemap'te otomatik görünür.
- **Blog yazısı:** `src/data/blog.ts`
- **Fiyat listesi:** `src/data/pricing.ts`. Anasayfadaki tablo, fiyat hesaplama
  sayfası ve hesaplama aracının tamamı bu tek dosyadan beslenir. `priceRows` fiyat
  tablosunu, `homeTypes` hesaplama aracındaki ev tiplerini, `calculator` ise km,
  asansör, ambalaj ve depolama katsayılarını tutar.
- **Müşteri yorumları:** `src/data/reviews.json`
- **Anasayfa süreç sekmeleri:** `src/data/process.ts`
- **Anasayfa makale sekmeleri:** `src/data/homeArticles.ts`
- **Galeri:** `src/data/gallery.ts`

Değişiklikten sonra `npm run build` almak yeterlidir.

## SEO

- Her sayfada ayrı `title`, `description` ve `canonical` etiketi
- Open Graph ve Twitter card etiketleri
- `sitemap.xml` ve `robots.txt` otomatik üretilir (içerik eklendikçe kendiliğinden büyür)
- Yapısal veri (JSON-LD): MovingCompany, Service, BreadcrumbList, FAQPage, BlogPosting
- Anahtar kelimeli URL yapısı:
  - `/hizmetler/ankara-evden-eve-nakliyat`
  - `/bolgeler/kecioren-evden-eve-nakliyat`
  - `/bolgeler/kecioren-evden-eve-nakliyat/etlik`
- İç linkleme; menü, footer, sidebar, breadcrumb ve içerik içi bağlantılarla
  sınırlı ve ölçülü tutuldu (spam link yığını yok)

## Hız

LiteSpeed yerine Next.js'in kendi yöntemleri kullanıldı:

- Tüm sayfalar build sırasında statik HTML olarak üretilir (SSG)
- Görseller `next/image` ile otomatik WebP/AVIF'e çevrilir ve boyutlandırılır
- Görseller için bir yıllık `immutable` önbellek başlığı (`next.config.mjs`)
- Font `display: swap` ile yüklenir, JS paketi küçük tutuldu
- Güvenlik başlıkları (HSTS, X-Frame-Options, nosniff vb.) `next.config.mjs` içinde

## Teklif formu

`/fiyat-teklifi` sayfasındaki form; nereden-nereye, kat, asansör durumu, oda sayısı,
tarih ve ek hizmetleri sorar. Matematik captcha ve gizli bot tuzağı alanı vardır.

Panel ve veritabanı olmadığı için form, gönderildiğinde bilgileri düzenli bir metne
çevirip WhatsApp üzerinden firmaya iletir. E-posta ile de gelmesi istenirse
`src/components/QuoteForm.tsx` içindeki gönderim adımına bir servis (örn. Resend,
Formspree) eklenebilir.

## Yayına alma

Vercel, Netlify veya Node.js destekleyen herhangi bir sunucuda çalışır.

```bash
npm run build && npm start   # varsayılan port 3000
```

Domain bağlandıktan sonra `src/data/site.ts` içindeki `url` alanının doğru olduğundan
emin olun; sitemap ve canonical adresleri buradan üretilir.


## Fiyat ve km hesaplama aracı

`/nakliyat-fiyat-hesaplama` sayfasındaki araç tamamen tarayıcıda çalışır, sunucuya
istek atmaz. Hesap şu şekilde kurulur:

1. Seçilen ev tipinin `src/data/pricing.ts` içindeki alt ve üst fiyatı temel alınır.
2. İki ilçe merkezi arasındaki kuş uçuşu mesafe hesaplanır ve Ankara'nın yol yapısına
   göre 1,35 katsayısıyla karayolu mesafesine çevrilir.
3. İlk `freeKm` kilometre fiyata dahildir, sonrası `perKm` ile çarpılır.
4. Mobil asansör seçiliyse `liftFee`, seçili değilse iki adresin kat toplamı dörtten
   fazlaysa her ek kat için `perFloorFee` eklenir.
5. Ambalaj ve depolama seçiliyse `packingFee` ve `storageFee` eklenir.

Fiyatları veya katsayıları değiştirmek için sadece `src/data/pricing.ts` dosyasını
düzenlemeniz yeterlidir; tablo ve araç birlikte güncellenir.

## Galeri

`src/data/gallery.ts` içindeki görseller hem anasayfada hem `/galeri` sayfasında
kullanılır. Görsele tıklandığında aynı sekmede tam ekran slider açılır; ok tuşları,
alttaki küçük görseller ve Esc tuşu ile gezilir. Ek bir kütüphane kullanılmaz.

## Önemli: değiştirilmesi gereken dosya

**`src/data/reviews.json`** içindeki yorumlar ÖRNEKTİR. Gerçek Google yorumlarınızla
değiştirin. Dosyadaki `schemaAktif` alanı `false` durduğu sürece yorumlar Google'a
yapısal veri olarak gönderilmez. Gerçek yorumları girdikten sonra `true` yapın;
uydurma yorumu yapısal veriyle yayınlamak Google tarafından cezalandırılır.

## Başlık hiyerarşisi

Her sayfada tek bir `h1` vardır. Bölüm başlıkları `h2`, bölüm içi başlıklar `h3`
olarak kurulmuştur. İlçe sayfalarında `h2` başlıkları hedeflenen anahtar kelimelerle
eşleşir (örn. "Keçiören Evden Eve Nakliyat", "Keçiören Asansörlü Nakliyat",
"Keçiören Ofis Taşıma", "Keçiören Asansör Kiralama", "Keçiören Nakliye Fiyatları").
