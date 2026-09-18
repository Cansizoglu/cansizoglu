import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Icon from '@/components/Icon'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { posts, postBySlug } from '@/data/blog'
import { services } from '@/data/services'
import { centralDistricts } from '@/data/districts'
import { site } from '@/data/site'
import { pageMeta, articleJsonLd, breadcrumbJsonLd } from '@/lib/seo'
import { createLinker } from '@/lib/autolink'
import RelatedLinks from '@/components/RelatedLinks'
import { relatedForPost } from '@/lib/related'

type Props = { params: { slug: string } }

const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = postBySlug(params.slug)
  if (!post) return {}
  return pageMeta({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = postBySlug(params.slug)
  if (!post) notFound()

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 6)
  const linkify = createLinker(`/blog/${post.slug}`, 10)
  const related = relatedForPost(post.slug)

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article className="py-9 sm:py-14">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <header className="mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingMinutes} dakikalık okuma</span>
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl">{post.title}</h1>
              <p className="mt-4 text-lg leading-8 text-slate-600">{post.excerpt}</p>
            </header>

            <div className="prose-tr max-w-none">
              {post.body.map((block, i) => {
                if (block.type === 'h2') {
                  return <h2 key={i}>{block.text}</h2>
                }
                if (block.type === 'ul') {
                  return (
                    <ul key={i}>
                      {block.items.map((item) => (
                        <li key={item}>{linkify(item)}</li>
                      ))}
                    </ul>
                  )
                }
                return <p key={i}>{linkify(block.text)}</p>
              })}
            </div>

            <RelatedLinks items={related} title="Okumaya devam edin" />

            <div className="mt-10 rounded-xl bg-brand-50/70 p-6">
              <h2 className="text-lg">Ankara’da taşınacak mısınız?</h2>
              <p className="mt-2 leading-7 text-slate-700">
                Ücretsiz keşif yapıyor, yazılı ve değişmeyen fiyat veriyoruz. Teklif için
                formu doldurabilir veya {site.phone.callCenter} numaralı çağrı hattımızdan
                bize ulaşabilirsiniz.
              </p>
              <Link href="/fiyat-teklifi" className="btn-primary mt-4">
                Fiyat Teklifi Al
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="space-y-6">
            <nav className="rounded-xl border border-brand-100 p-6" aria-label="Diğer yazılar">
              <h2 className="text-lg">Diğer yazılar</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="flex gap-2 text-slate-700 hover:text-brand-700"
                    >
                      <Icon name="arrow" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="rounded-xl border border-brand-100 p-6" aria-label="Hizmetler">
              <h2 className="text-lg">Hizmetlerimiz</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {services.slice(0, 5).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/hizmetler/${service.slug}`}
                      className="flex items-center gap-2 text-slate-700 hover:text-brand-700"
                    >
                      <Icon name={service.icon} className="h-4 w-4 shrink-0 text-brand-500" />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="rounded-xl border border-brand-100 p-6" aria-label="Hizmet bölgeleri">
              <h2 className="text-lg">Hizmet bölgelerimiz</h2>
              <ul className="mt-4 flex flex-wrap gap-1.5 text-sm">
                {centralDistricts.map((district) => (
                  <li key={district.slug}>
                    <Link
                      href={`/bolgeler/${district.path}`}
                      className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-800 hover:bg-accent-50 hover:text-accent-700"
                    >
                      {district.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/bolgeler"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600"
              >
                Ankara’nın 25 ilçesi
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </nav>

            <nav className="rounded-xl bg-brand-900 p-6 text-white" aria-label="Fiyat hesaplama">
              <h2 className="text-lg text-white">Taşınma maliyetiniz ne kadar?</h2>
              <p className="mt-2 text-sm leading-6 text-brand-100">
                İlçe, ev tipi ve kat bilgisiyle saniyeler içinde bir fiyat aralığı alın.
              </p>
              <Link href="/nakliyat-fiyat-hesaplama" className="btn-primary mt-4 w-full justify-center">
                Fiyat hesaplama aracı
              </Link>
            </nav>
          </aside>
        </div>
      </article>

      <CtaBand />

      <JsonLd
        data={[
          articleJsonLd({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            date: post.date,
          }),
          breadcrumbJsonLd([
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
    </>
  )
}
