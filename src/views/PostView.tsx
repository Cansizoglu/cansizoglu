import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Icon from '@/components/Icon'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import RelatedLinks from '@/components/RelatedLinks'
import type { BlogPost } from '@/data/blog'
import { posts } from '@/data/blog'
import { services } from '@/data/services'
import { centralDistricts } from '@/data/districts'
import { site } from '@/data/site'
import { articleJsonLd } from '@/lib/seo'
import { createLinker } from '@/lib/autolink'
import { relatedForPost } from '@/lib/related'
import { sayfa, urlHizmet, urlIlce, urlYazi } from '@/lib/urls'

const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export default function PostView({ post }: { post: BlogPost }) {
  const path = urlYazi(post.slug)
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 6)
  const linkify = createLinker(path, 10)
  const related = relatedForPost(post.slug)

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Blog', path: sayfa.blog },
          { name: post.title, path },
        ]}
      />

      <article className="py-9 sm:py-14">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <header className="mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingMinutes} dakikalık okuma</span>
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl">{post.title}</h1>
              <p className="mt-4 text-lg leading-8 text-slate-600">{post.excerpt}</p>
            </header>

            {/*
              Kapak görseli. alt etiketi ekran okuyucu ve Google Görseller için,
              title fare üstüne gelince, figcaption ise okuyucu için.
            */}
            <figure className="mb-8">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                title={post.image.title}
                width={post.image.width}
                height={post.image.height}
                sizes="(max-width: 1024px) 100vw, 720px"
                priority
                className="aspect-[16/8] w-full rounded-xl object-cover"
              />
              <figcaption className="mt-2 text-sm leading-6 text-slate-600">
                {post.image.caption}
              </figcaption>
            </figure>

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
              <Link href={sayfa.teklif} className="btn-primary mt-4">
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
                      href={urlYazi(item.slug)}
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
                      href={urlHizmet(service.slug)}
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
                      href={urlIlce(district.path)}
                      className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-800 hover:bg-accent-50 hover:text-accent-700"
                    >
                      {district.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={sayfa.bolgeler}
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
              <Link href={sayfa.hesaplama} className="btn-primary mt-4 w-full justify-center">
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
            path,
            date: post.date,
            image: post.image,
          }),
        ]}
      />
    </>
  )
}
