import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import JsonLd from '@/components/JsonLd'
import { localBusinessJsonLd } from '@/lib/seo'
import { site } from '@/data/site'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans',
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
  },
  formatDetection: { telephone: true },
}

export const viewport: Viewport = {
  themeColor: '#1758dc',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  )
}
