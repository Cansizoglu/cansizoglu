import Link from 'next/link'
import Icon from './Icon'
import { priceRows, priceIncluded, priceUpdatedAt, formatTl } from '@/data/pricing'
import { sayfa } from '@/lib/urls'

export default function PriceTable() {
  return (
    <div>
      <div
        // Dar ekranda tablo yana kayar; klavye kullananların da kaydırabilmesi için odaklanabilir.
        tabIndex={0}
        role="region"
        aria-label="Ankara evden eve nakliyat fiyat listesi"
        className="overflow-x-auto rounded-xl border border-brand-100 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
      >
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <caption className="sr-only">
            Ankara evden eve nakliyat fiyat listesi, {priceUpdatedAt}
          </caption>
          <thead>
            <tr className="bg-brand-900 text-white">
              <th scope="col" className="px-4 py-3.5 font-semibold">
                Daire Tipi
              </th>
              <th scope="col" className="px-4 py-3.5 text-right font-semibold">
                En Az Fiyat (₺)
              </th>
              <th scope="col" className="px-4 py-3.5 text-right font-semibold">
                En Yüksek Fiyat (₺)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-100">
            {priceRows.map((row) => (
              <tr key={row.type} className="bg-white even:bg-brand-50/50">
                <th scope="row" className="px-4 py-3.5 font-semibold text-brand-900">
                  {row.type}
                  <span className="mt-0.5 block text-xs font-normal text-slate-600">
                    {row.note}
                  </span>
                </th>
                <td className="px-4 py-3.5 text-right font-semibold tabular-nums text-slate-700">
                  {formatTl(row.min)}
                </td>
                <td className="px-4 py-3.5 text-right font-semibold tabular-nums text-accent-700">
                  {formatTl(row.max)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl bg-brand-50/70 p-5">
          <h3 className="text-base">Fiyata dahil olanlar</h3>
          <ul className="mt-3 space-y-2">
            {priceIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-brand-100 p-5">
          <h3 className="text-base">Eviniz için net fiyat</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Tablodaki rakamlar {priceUpdatedAt} itibarıyla geçerli aralıklardır. Eviniz
            için kesin fiyat, ücretsiz keşiften sonra yazılı olarak verilir ve taşıma
            günü değişmez.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href={sayfa.teklif} className="btn-primary">
              Ücretsiz Teklif Al
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href={sayfa.hesaplama} className="btn-outline">
              Fiyat hesaplama aracı
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
