import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function DomeniBlancPage() {
  const wine = getWineBySlug("domeni-blanc-2023")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/Page/Page Cuvée Domeni blanc/BLANC DOMENI.jpg"
      pdfPath="/Page/Page Cuvée Domeni blanc/FT_blanc_Domeni 2024.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("domeni-blanc-2023")
  
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
      images: ["/Page/Page Cuvée Domeni blanc/BLANC DOMENI.jpg"],
    },
  }
}
