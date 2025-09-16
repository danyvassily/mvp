import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function ClaireDeLunePage() {
  const wine = getWineBySlug("claire-de-lune-2022")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/Page/Page cuvée Claire de Lune/CLAIRE DE LUNE.jpg"
      pdfPath="/Page/Page cuvée Claire de Lune/FT_blanc_claire_de_lune_2023.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("claire-de-lune-2022")
  
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
      images: ["/Page/Page cuvée Claire de Lune/CLAIRE DE LUNE.jpg"],
    },
  }
}
