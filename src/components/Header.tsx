import HeaderClient, { type HeaderNav } from './HeaderClient'
import { services } from '@/data/services'
import { districts } from '@/data/districts'
import { aboutPages } from '@/data/aboutPages'
import { routes } from '@/data/routes'

/**
 * Menüde öne çıkan şehirler arası rotalar. 60 ilin tamamı her sayfanın
 * menüsüne konduğunda sayfa başına bağlantı sayısı gereksiz şişiyordu; tüm
 * iller /sehirler-arasi sayfasında listeleniyor.
 */
const FEATURED_ROUTES = [
  'istanbul', 'izmir', 'antalya', 'bursa', 'konya', 'eskisehir', 'kayseri', 'samsun',
  'adana', 'mersin', 'mugla', 'kocaeli', 'trabzon', 'gaziantep', 'bolu', 'corum',
]

/**
 * Sunucu bileşeni: veri dosyalarından yalnızca menüde gereken alanları seçip
 * istemci tarafındaki menüye geçirir.
 */
export default function Header() {
  const nav: HeaderNav = {
    services: services.slice(0, 10).map(({ slug, title }) => ({ slug, title })),
    districts: districts.map(({ slug, path, name }) => ({ slug, path, name })),
    routes: FEATURED_ROUTES.map((key) =>
      routes.find((r) => r.slug === `ankara-${key}-evden-eve-nakliyat`),
    )
      .filter((r): r is (typeof routes)[number] => Boolean(r))
      .map(({ slug, city }) => ({ slug, city })),
    aboutPages: aboutPages.map(({ slug, navLabel }) => ({ slug, navLabel })),
    routeCount: routes.length,
  }
  return <HeaderClient nav={nav} />
}
