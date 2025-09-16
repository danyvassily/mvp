import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function MethodeBlancPage() {
  const wine = getWineBySlug("methode-blanc-2020")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/Page/Page Méthode Blanche/LA METHODE BLANC.jpg"
      pdfPath="/Page/Page Méthode Blanche/FT_la_méthode_blanc.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("methode-blanc-2020")
  
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
      images: ["/Page/Page Méthode Blanche/LA METHODE BLANC.jpg"],
    },
  }
}
