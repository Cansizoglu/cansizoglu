import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactBar from '@/components/ContactBar'
import ContentGuard from '@/components/ContentGuard'
import JsonLd from '@/components/JsonLd'
import { localBusinessJsonLd } from '@/lib/seo'
import { site } from '@/data/site'

/**
 * Yazı tipi ön yüklenmiyor. Ön yüklendiğinde iki woff2 dosyası, LCP görseliyle
 * aynı anda ve yüksek öncelikle iniyor ve yavaş mobil bağlantıda görseli
 * geciktiriyordu. `adjustFontFallback` açık olduğu için yedek yazı tipinin
 * ölçüleri Inter'e denk geliyor; geçiş sırasında sayfa oynamıyor.
 */
const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Ankara Evden Eve Nakliyat | Cansızoğlu Nakliyat',
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'ankara evden eve nakliyat',
    'ankara nakliyat',
    'ankara ev taşıma',
    'ankara evden eve nakliyat fiyatları',
    'ankara nakliye',
    'ankara taşıma şirketleri',
    'ankara asansörlü nakliyat',
    'ankara ofis taşıma',
    'ankara nakliyeci',
    'ankara nakliyat firmaları',
    'ankara nakliyat fiyatları',
    'ankara taşımacılık',
    'ankara taşıma şirketi',
    'ankara taşıma firması',
    'ankara evden eve taşıma',
    'ankara evden eve nakliye',
    'ankara evden eve taşıma firması',
    'ankara parça eşya taşıma',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: site.url,
    siteName: site.name,
    title: 'Ankara Evden Eve Nakliyat | Cansızoğlu Nakliyat',
    description: site.description,
    images: [
      {
        url: `${site.url}/img/og-cansizoglu-nakliyat.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Cansızoğlu Nakliyat taşıma aracı ve mobil asansörü, çağrı hattı 444 0 510',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara Evden Eve Nakliyat | Cansızoğlu Nakliyat',
    description: site.description,
    images: [`${site.url}/img/og-cansizoglu-nakliyat.jpg`],
  },
  formatDetection: { telephone: true },
}

export const viewport: Viewport = {
  themeColor: '#1b2d52',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="flex min-h-screen flex-col pb-[148px] lg:pb-0">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-white"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
        <ContactBar />
        <ContentGuard />
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  )
}
