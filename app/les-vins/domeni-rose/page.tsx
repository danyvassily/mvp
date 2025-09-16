import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function DomeniRosePage() {
  const wine = getWineBySlug("domeni-rose-2023")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/Page/Page Cuvée domeni Rosé/ROSE DOMENI.jpg"
      pdfPath="/Page/Page Cuvée domeni Rosé/FT_rosé_Domeni_2024 (1).pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("domeni-rose-2023")
  
  if (!wine) {
    return {
      title: "Vin non trouvé",
    }
  }

  return {
    title: `${wine.name} ${wine.vintage} - Château Lastours`,
    description: wine.longDescription,
    openGraph: {
      title: `${wine.name} ${wine.vintage} - Château Lastours`,
      description: wine.longDescription,
      images: ["/Page/Page Cuvée domeni Rosé/ROSE DOMENI.jpg"],
    },
  }
}
