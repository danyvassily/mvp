import { SectionHero } from "@/components/common/SectionHero"
import { RichSection } from "@/components/common/RichSection"
import { GalleryMasonry } from "@/components/common/GalleryMasonry"
import { CalloutCard } from "@/components/common/CalloutCard"
import { getPageAssets, getPageFallbacks } from "@/lib/asset-mapping"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gastronomie & Art de la Table | Château Lastours",
  description: "Découvrez l'art du service et de la dégustation au Château Lastours. Techniques de service, accords mets-vins et secrets de dégustation pour sublimer vos expériences œnologiques.",
  keywords: ["gastronomie", "art de la table", "service du vin", "accords mets-vins", "château lastours", "dégustation"],
  openGraph: {
    title: "Gastronomie & Art de la Table | Château Lastours",
    description: "L'art du service et de la dégustation pour sublimer vos expériences œnologiques",
    images: [
      {
        url: "/Page/Gastronomie art de table - manque éventuel photo chambrage/Art de la Table.jpg",
        width: 1200,
        height: 630,
        alt: "Art de la table au Château Lastours"
      }
    ]
  }
}

export default function GastronomieArtTablePage() {
  const assets = getPageAssets('gastronomie-art-de-la-table')
  const fallbacks = getPageFallbacks('gastronomie-art-de-la-table')

  // Images pour la galerie
  const galleryImages = [
    {
      src: "/Page/Gastronomie art de table - manque éventuel photo chambrage/Art de la Table.jpg",
      alt: "Art de la table élégant",
      title: "L'art de la table"
    },
    {
      src: "/Page/Gastronomie art de table - manque éventuel photo chambrage/carafage.jpg",
      alt: "Technique de carafage",
      title: "Carafage professionnel"
    },
    {
      src: "/Page/Gastronomie art de table - manque éventuel photo chambrage/debouchage bouteille .jpg",
      alt: "Débouchage de bouteille",
      title: "Débouchage expert"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionHero
        title="Gastronomie & Art de la Table"
        subtitle="L'art du service et de la dégustation pour sublimer l'expérience œnologique"
        imageSrc="/Page/Gastronomie art de table - manque éventuel photo chambrage/Art de la Table.jpg"
        height="xl"
      />

      {/* Section principale : L'art du service */}
      <RichSection
        title="L'art du service du vin"
        kicker="Excellence"
        content={`
          <p>Le service du vin est un art qui allie technique, élégance et respect du produit. Chaque geste compte pour révéler le meilleur de chaque cuvée et offrir une expérience mémorable à vos convives.</p>
          
          <p>Au Château Lastours, nous partageons avec vous les secrets d'un service parfait, de la conservation à la dégustation, en passant par les techniques ancestrales et les innovations modernes.</p>
        `}
        imageSrc="/Page/Gastronomie art de table - manque éventuel photo chambrage/debouchage bouteille .jpg"
        variant="light"
      />

      {/* Section : Techniques de service */}
      <RichSection
        title="Les techniques essentielles"
        kicker="Savoir-faire"
        content={`
          <h3>Le débouchage</h3>
          <p>Un geste précis qui préserve l'intégrité du bouchon et évite les particules dans le vin. La technique du sommelier allie fermeté et délicatesse.</p>
          
          <h3>Le carafage</h3>
          <p>Technique d'aération qui permet aux vins rouges de s'ouvrir et de révéler toute leur complexité aromatique. Un moment spectaculaire qui participe à la mise en scène.</p>
          
          <h3>Le service</h3>
          <p>Température, ordre des vins, remplissage des verres... Chaque détail contribue à l'excellence de l'expérience gustative.</p>
        `}
        imageSrc="/Page/Gastronomie art de table - manque éventuel photo chambrage/carafage.jpg"
        imageFirst
        variant="dark"
      />

      {/* Section : Chambrage (avec fallback) */}
      <section className="py-16 bg-gray-50 grain-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <span className="text-sm font-medium tracking-widest uppercase text-accent-500 bg-accent-50 px-3 py-1 rounded-full">
                Température
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-gray-900 tracking-wide">
                L'art du chambrage
              </h2>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-wide prose-p:leading-relaxed prose-p:text-lg">
              <p>Le chambrage consiste à amener progressivement le vin à sa température de service idéale. Cette technique, héritée des traditions françaises, permet de révéler l'expression optimale de chaque cuvée.</p>
              
              <ul>
                <li><strong>Vins rouges</strong> : 16-18°C pour les vins complexes, 14-16°C pour les vins fruités</li>
                <li><strong>Vins blancs</strong> : 8-12°C selon leur structure et leur âge</li>
                <li><strong>Vins effervescents</strong> : 6-8°C pour préserver leur fraîcheur</li>
              </ul>
            </div>

            {fallbacks.missingAssets.includes('Photo de chambrage (optionnelle)') && (
              <CalloutCard
                type="coming-soon"
                title="Bientôt disponible"
                message="Photo de chambrage à venir - Technique traditionnelle de mise en température"
                className="max-w-md mx-auto"
              />
            )}
          </div>
        </div>
      </section>

      {/* Galerie des techniques */}
      <GalleryMasonry
        images={galleryImages}
        columns={3}
        className="bg-white"
      />

      {/* Section : Accords mets-vins */}
      <RichSection
        title="L'harmonie des accords"
        kicker="Gastronomie"
        content={`
          <p>L'art de marier les vins et les mets révèle des harmonies insoupçonnées. Nos cuvées du Château Lastours s'accordent parfaitement avec les spécialités de notre terroir gaillacois.</p>
          
          <h3>Nos suggestions d'accords</h3>
          <ul>
            <li><strong>Doméni Blanc</strong> : Poissons grillés, fromages de chèvre, cuisine asiatique délicate</li>
            <li><strong>Opus Rouge</strong> : Viandes rouges, gibier, fromages affinés</li>
            <li><strong>Méthode Ancestrale</strong> : Apéritifs, desserts fruités, moments de célébration</li>
          </ul>
          
          <p>Chaque accord est une découverte, une exploration des saveurs qui se répondent et se subliment mutuellement.</p>
        `}
        variant="light"
      />

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black grain-heavy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white tracking-wider">
              Perfectionnez votre art de la table
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Rejoignez nos ateliers de dégustation et découvrez les secrets du service parfait
            </p>

            <div className="pt-6">
              <a
                href="/reservation"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Réserver un atelier
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
