import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function PoussinRosePage() {
  const wine = getWineBySlug("poussin-rose-2023")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/Page/Page Cuvée Poussin Rosé/ROSE POUSSIN.jpg"
      pdfPath="/Page/Page Cuvée Poussin Rosé/FT_poussin rosé_moelleux_2024.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("poussin-rose-2023")
  
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
      images: ["/Page/Page Cuvée Poussin Rosé/ROSE POUSSIN.jpg"],
    },
  }
}
