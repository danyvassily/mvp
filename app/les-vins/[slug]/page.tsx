import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getWineBySlug, wines } from "@/lib/wines-data"
import { WinePageClient } from "./wine-page-client"

interface WinePageProps {
  params: Promise<{
    slug: string
  }>
}

// generateStaticParams() non nécessaire avec le plugin Netlify Next.js

export default async function WinePage({ params }: WinePageProps) {
  const { slug } = await params
  const wine = getWineBySlug(slug)

  if (!wine) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <WinePageClient wine={wine} />
    </div>
  )
}
