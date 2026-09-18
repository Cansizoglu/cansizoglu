import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionTitle from '@/components/SectionTitle'
import Icon from '@/components/Icon'
import CtaBand from '@/components/CtaBand'
import { posts } from '@/data/blog'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Blog | Taşınma ve Nakliyat Rehberi',
  description:
    'Taşınma hazırlığı, eşya paketleme, asansörlü nakliyat ve taşınma maliyetleri hakkında pratik bilgiler.',
  path: '/blog',
})

const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />
      <section className="py-9 sm:py-14">
        <div className="container-site">
          <SectionTitle
            as="h1"
            eyebrow="Blog"
            title="Taşınma ve nakliyat rehberi"
            description="Sahada en çok karşılaştığımız soruları ve taşınmayı kolaylaştıran pratik bilgileri burada topluyoruz."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="card flex flex-col overflow-hidden !p-0">
                <Link href={`/blog/${post.slug}`} className="block" tabIndex={-1} aria-hidden="true">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    title={post.image.title}
                    width={post.image.width}
                    height={post.image.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingMinutes} dk okuma</span>
                </div>
                <h2 className="mt-3 text-lg">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
                >
                  Yazıyı okuyun
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
