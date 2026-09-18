import Icon from './Icon'
import { site } from '@/data/site'

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    'Merhaba, Ankara içinde taşınma için fiyat teklifi almak istiyorum.',
  )
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={site.phone.callCenterHref}
        className="flex items-center gap-2 rounded-full bg-brand-700 px-4 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-black/5 transition hover:bg-brand-800 sm:hidden"
        aria-label={`Telefonla arayın: ${site.phone.callCenter}`}
      >
        <Icon name="phone" className="h-5 w-5" />
        Hemen Ara
      </a>
      <a
        href={`https://wa.me/${site.phone.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-4 pr-5 font-semibold text-white shadow-lg ring-1 ring-black/5 transition hover:bg-[#1eb355]"
      >
        <Icon name="whatsapp" className="h-6 w-6" />
        <span className="text-sm">WhatsApp</span>
      </a>
    </div>
  )
}
