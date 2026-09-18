import Icon from './Icon'
import JsonLd from './JsonLd'
import { site } from '@/data/site'
import reviewData from '@/data/reviews.json'

type Review = {
  ad: string
  semt: string
  puan: number
  tarih: string
  hizmet: string
  yorum: string
}

const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
  month: 'long',
  year: 'numeric',
})

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} yıldız`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name={i < count ? 'star-full' : 'star'}
          className={`h-4 w-4 ${i < count ? 'text-amber-500' : 'text-slate-300'}`}
        />
      ))}
    </span>
  )
}

export default function Reviews() {
  const reviews = reviewData.yorumlar as Review[]
  if (reviews.length === 0) return null

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <figure key={review.ad} className="flex flex-col rounded-xl border border-brand-100 bg-white p-5">
            <Stars count={review.puan} />
            <blockquote className="mt-3 flex-1 text-sm leading-6 text-slate-700">
              {review.yorum}
            </blockquote>
            <figcaption className="mt-4 border-t border-brand-100 pt-3">
              <span className="block text-sm font-semibold text-brand-900">{review.ad}</span>
              <span className="block text-xs text-slate-500">
                {review.semt} · {review.hizmet}
              </span>
              <span className="block text-xs text-slate-400">
                {dateFormatter.format(new Date(review.tarih))}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/*
        Yapısal veri yalnızca gerçek yorumlar girildikten sonra yayınlanır.
        src/data/reviews.json içindeki schemaAktif alanını true yapın.
      */}
      {reviewData.schemaAktif ? (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'MovingCompany',
            '@id': `${site.url}/#kurulus`,
            name: site.name,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: reviewData.ortalamaPuan,
              reviewCount: reviewData.yorumSayisi,
            },
            review: reviews.map((review) => ({
              '@type': 'Review',
              author: { '@type': 'Person', name: review.ad },
              datePublished: review.tarih,
              reviewRating: {
                '@type': 'Rating',
                ratingValue: review.puan,
                bestRating: 5,
              },
              reviewBody: review.yorum,
            })),
          }}
        />
      ) : null}
    </>
  )
}
