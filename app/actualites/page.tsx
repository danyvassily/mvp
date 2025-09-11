import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { getAllArticles } from "@/lib/news-data"
import { Badge } from "@/components/ui/badge"

export default function ActualitesPage() {
  const posts = getAllArticles()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/wine-education-workshop.png')" }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-display mb-4">Actualités</h1>
            <p className="text-xl opacity-90">Nos nouvelles, événements et annonces</p>
          </div>
        </section>

        {/* List */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-all">
                  {post.image && (
                    <div className="relative aspect-[4/3]">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("fr-FR")}</time>
                      {post.tags?.slice(0, 2).map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-display">
                      <Link href={`/actualites/${post.slug}`} className="hover:text-accent">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <div>
                      <Link href={`/actualites/${post.slug}`} className="text-accent hover:underline">
                        Lire l’article
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

