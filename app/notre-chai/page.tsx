import { SectionHero } from "@/components/common/SectionHero"
import { RichSection } from "@/components/common/RichSection"
import { CalloutCard } from "@/components/common/CalloutCard"
import { getPageAssets, getPageFallbacks } from "@/lib/asset-mapping"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre Chai | Château Lastours",
  description: "Découvrez notre chai moderne au Château Lastours, où tradition et innovation se rencontrent pour créer des vins d'exception. Techniques de vinification et savoir-faire ancestral.",
  keywords: ["chai", "vinification", "château lastours", "savoir-faire", "tradition", "innovation viticole"],
  openGraph: {
    title: "Notre Chai | Château Lastours",
    description: "Où tradition et innovation se rencontrent pour créer des vins d'exception",
    images: [
      {
        url: "/PHOTOS-WEB-LASTOURS/VINIFICATION/Capture ameyric prod.JPG",
        width: 1200,
        height: 630,
        alt: "Notre chai au Château Lastours"
      }
    ]
  }
}

export default function NotreChai() {
  const assets = getPageAssets('notre-chai')
  const fallbacks = getPageFallbacks('notre-chai')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionHero
        title="Notre Chai"
        subtitle="Où tradition et innovation se rencontrent pour créer des vins d'exception"
        imageSrc={assets.hero || "/PHOTOS-WEB-LASTOURS/VINIFICATION/Capture ameyric prod.JPG"}
        height="xl"
      />

      {/* Section principale : La philosophie du chai */}
      <RichSection
        title="L'alliance de la tradition et de la modernité"
        kicker="Philosophie"
        content={`
          <p>Notre chai incarne parfaitement la philosophie du Château Lastours : respecter les traditions séculaires tout en embrassant les innovations qui permettent de révéler le meilleur de notre terroir.</p>
          
          <p>Chaque équipement, chaque geste, chaque décision technique est pensée pour préserver l'authenticité de nos cépages autochtones tout en optimisant l'expression de leur potentiel aromatique.</p>
          
          <p>C'est dans ce lieu emblématique que naissent nos cuvées, dans le respect du rythme naturel des fermentations et la maîtrise des techniques modernes de vinification.</p>
        `}
        variant="light"
      />

      {/* Section : Équipements et techniques */}
      <RichSection
        title="Des équipements au service de l'excellence"
        kicker="Innovation"
        content={`
          <h3>Cuves de fermentation</h3>
          <p>Notre chai dispose d'une gamme complète de cuves adaptées à chaque type de vinification :</p>
          
          <ul>
            <li><strong>Cuves béton</strong> : Idéales pour les blancs et rosés, elles conservent naturellement la fraîcheur</li>
            <li><strong>Cuves inox</strong> : Parfaites pour les rouges, permettant un contrôle précis de la température</li>
            <li><strong>Cuves thermorégulées</strong> : Pour une maîtrise optimale des fermentations</li>
          </ul>
          
          <h3>Système de refroidissement</h3>
          <p>Un réseau d'eau froide sophistiqué nous permet de maintenir les températures idéales tout au long du processus de vinification, préservant ainsi la finesse et les arômes délicats de nos vins.</p>
        `}
        imageFirst
        variant="dark"
      />

      {/* Section manquante avec fallback */}
      <section className="py-16 bg-gray-50 grain-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <span className="text-sm font-medium tracking-widest uppercase text-accent-500 bg-accent-50 px-3 py-1 rounded-full">
                Savoir-faire
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-gray-900 tracking-wide">
                Les secrets de notre chai
              </h2>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-wide prose-p:leading-relaxed prose-p:text-lg">
              <p>Chaque étape de la vinification fait l'objet d'une attention particulière dans notre chai. De la réception des raisins à l'élevage des vins, nos équipes maîtrisent parfaitement les techniques ancestrales et modernes.</p>
              
              <h3>Nos techniques spécifiques</h3>
              <ul>
                <li><strong>Vendanges nocturnes</strong> : Pour préserver la fraîcheur naturelle des raisins</li>
                <li><strong>Sélection parcellaire</strong> : Chaque parcelle est vinifiée séparément</li>
                <li><strong>Fermentation contrôlée</strong> : Température et durée adaptées à chaque cépage</li>
                <li><strong>Élevage personnalisé</strong> : En cuve ou en barrique selon le profil souhaité</li>
              </ul>
            </div>

            {fallbacks.missingAssets.includes('Une photo supplémentaire du chai') && (
              <CalloutCard
                type="coming-soon"
                title="Complément visuel à venir"
                message="Une photo supplémentaire de notre chai sera bientôt disponible pour illustrer nos techniques de vinification"
                className="max-w-md mx-auto"
              />
            )}
          </div>
        </div>
      </section>

      {/* Section : Élevage et vieillissement */}
      <RichSection
        title="L'art de l'élevage"
        kicker="Patience"
        content={`
          <p>L'élevage de nos vins se fait selon les méthodes traditionnelles, adaptées aux caractéristiques de chaque cuvée :</p>
          
          <h3>Élevage en cuve</h3>
          <p>Pour préserver la fraîcheur et l'expression du fruit, certaines de nos cuvées comme le Doméni Blanc restent en cuve inox sur lies fines, développant complexité et rondeur.</p>
          
          <h3>Élevage en barrique</h3>
          <p>Nos cuvées premium comme l'Opus Rouge et Claire de Lune bénéficient d'un élevage en fûts de chêne français, apportant structure et notes boisées subtiles.</p>
          
          <p>Ce processus, qui peut durer de 6 à 18 mois selon les cuvées, permet à chaque vin de développer sa personnalité unique.</p>
        `}
        variant="light"
      />

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black grain-heavy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white tracking-wider">
              Visitez notre chai
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Découvrez les coulisses de notre savoir-faire lors d'une visite guidée
            </p>

            <div className="pt-6">
              <a
                href="/visite"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Réserver une visite
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
