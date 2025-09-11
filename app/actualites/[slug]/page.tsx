import { Header } from "@/components/header"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getArticleBySlug, getLatestArticles } from "@/lib/news-data"
import Link from "next/link"

interface ArticlePageProps {
  params: { slug: string }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) return notFound()

  const latest = getLatestArticles(3).filter((a) => a.slug !== article.slug)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50" />
          {article.image && (
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          )}
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-display mb-4 text-balance">{article.title}</h1>
            <p className="opacity-90">{new Date(article.date).toLocaleDateString("fr-FR")}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 space-y-6">
              {article.body.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-foreground/80">{p}</p>
              ))}
            </article>

            <aside className="space-y-4">
              <h3 className="text-xl font-display">Derniers articles</h3>
              <ul className="space-y-2">
                {latest.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/actualites/${p.slug}`} className="text-muted-foreground hover:text-accent">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}

