import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Icon from '@/components/Icon'
import CtaBand from '@/components/CtaBand'
import { aboutPages, aboutPageBySlug } from '@/data/aboutPages'
import { pageMeta } from '@/lib/seo'
import { createLinker } from '@/lib/autolink'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return aboutPages.map((page) => ({ slug: page.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const page = aboutPageBySlug(params.slug)
  if (!page) return {}
  return pageMeta({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/hakkimizda/${page.slug}`,
  })
}

export default function AboutSubPage({ params }: Props) {
  const page = aboutPageBySlug(params.slug)
  if (!page) notFound()

  const others = aboutPages.filter((p) => p.slug !== page.slug)
  /*
    KVKK metni hukuki bir belge olduğu için içine pazarlama bağlantısı
    serpiştirilmiyor; misyon ve vizyon sayfalarında iç linkleme açık.
  */
  const linkify =
    page.slug === 'kvkk-aydinlatma-metni'
      ? (text: string) => text
      : createLinker(`/hakkimizda/${page.slug}`, 6)

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Hakkımızda', path: '/hakkimizda' },
          { name: page.navLabel, path: `/hakkimizda/${page.slug}` },
        ]}
      />

      <section className="py-9 sm:py-14">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            <header className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl">{page.title}</h1>
              <p className="mt-4 text-lg leading-8 text-slate-600">{page.intro}</p>
            </header>

            <div className="prose-tr max-w-none">
              {page.body.map((block, i) => {
                if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
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
          </div>

          <aside className="space-y-6">
            <nav className="rounded-xl border border-brand-100 p-6" aria-label="Kurumsal sayfalar">
              <h2 className="text-lg">Kurumsal</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="/hakkimizda"
                    className="flex gap-2 font-medium text-brand-700 hover:text-accent-600"
                  >
                    <Icon name="arrow" className="mt-0.5 h-4 w-4 shrink-0" />
                    Hakkımızda
                  </Link>
                </li>
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/hakkimizda/${item.slug}`}
                      className="flex gap-2 font-medium text-brand-700 hover:text-accent-600"
                    >
                      <Icon name="arrow" className="mt-0.5 h-4 w-4 shrink-0" />
                      {item.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
