import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function PerlePage() {
  const wine = getWineBySlug("perle-blanc-2023")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/Page/Page cuvée Perlé/BLANC PERLE.jpg"
      pdfPath="/Page/Page cuvée Perlé/FT_perlé_2023.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("perle-blanc-2023")
  
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
      images: ["/Page/Page cuvée Perlé/BLANC PERLE.jpg"],
    },
  }
}
