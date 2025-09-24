import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TextBlock } from "@/components/common/TextBlock";
import { CinematicImage } from "@/components/common/CinematicImage";
import { QuoteRibbon } from "@/components/common/QuoteRibbon";
import { TransitionLink } from "@/components/gsap/TransitionLink";
import { SPACING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Notre Chai | Château Lastours",
  description: "Découvrez l'art de la vinification au Château Lastours à Gaillac : authenticité, innovation, terroir d'exception, cépages autochtones, labels AOP et œnotourisme dans le Sud-Ouest de la France.",
  keywords: ["chai", "vinification", "château lastours", "savoir-faire", "tradition", "innovation viticole", "AOP Gaillac"],
  openGraph: {
    title: "Notre Chai | Château Lastours",
    description: "L'art de la vinification haut de gamme au cœur de Gaillac",
    images: ["/PHOTOS-WEB-LASTOURS/VINIFICATION/Capture ameyric prod.JPG"],
  },
};

// Contenu authentique de la vinification du domaine
const vinificationSections = [
  {
    id: "extraction",
    text: {
      kicker: "Vinification d'Excellence",
      title: "La fraîcheur préservée, l'expression du terroir",
      body: "Au Château Lastours, la vinification commence dès la nuit tombée, par une sélection minutieuse des plus belles grappes issues de cépages autochtones, reflets vivants du terroir de Gaillac et du Sud-Ouest de la France. Les raisins blancs et rosés sont pressés délicatement puis refroidis à 4°C pour préserver toute la fraîcheur et la pureté aromatique. Cette extraction à froid, signature de notre domaine viticole, sublime les notes d'agrumes, de fleurs blanches et de fruits frais, tout en garantissant une finesse cristalline, sans intervention mécanique superflue."
    },
    image: {
      src: "/Page/Notre Chai - manque 1 photo/Capture ameyric prod.JPG",
      alt: "Pressurage à froid des raisins blancs au Château Lastours",
      ratio: "21/9" as const
    },
    layout: "text-first"
  },
  {
    id: "fermentation",
    text: {
      kicker: "Savoir-Faire Traditionnel",
      title: "L'intensité, la structure et la couleur",
      body: "Pour les rouges, l'éraflage soigné et la macération pelliculaire révèlent la profondeur, la structure tannique et la couleur intense qui font la renommée des vins de Gaillac. Chaque cuvée est le fruit d'un équilibre subtil entre tradition et innovation, où la fermentation alcoolique est menée à basse température pour préserver la tension, la vivacité et l'expression du terroir. La fermentation malolactique, systématique pour les rouges et sélective pour les blancs, affine la texture, adoucit les tanins et apporte une rondeur gourmande, tout en maintenant la fraîcheur emblématique du vignoble français."
    },
    image: {
      src: "/Page/Notre Chai - manque 1 photo/ecoulage et décuvage.jpg",
      alt: "Fermentation des rouges au Château Lastours",
      ratio: "16/9" as const
    },
    layout: "image-first"
  },
  {
    id: "elevage",
    text: {
      kicker: "Art de l'Élevage", 
      title: "L'élevage, l'art de la discrétion",
      body: "Nos vins blancs et rosés reposent en cuves inox pour exalter la minéralité, la pureté du fruit et la tension naturelle du terroir. Les rouges bénéficient d'un élevage soigné en barriques françaises, demi-muids ou pièces, toujours en rotation, pour éviter toute standardisation et privilégier l'authenticité. La micro-oxygénation subtile affine les tanins et révèle la complexité aromatique, sans jamais masquer l'identité du millésime ou du sol."
    },
    image: {
      src: "/Page/Notre Chai - manque 1 photo/barriques et barboteurs.jpg",
      alt: "Élevage en barrique au Château Lastours",
      ratio: "21/9" as const
    },
    layout: "text-first"
  },
  {
    id: "assemblage",
    text: {
      kicker: "Signature Lastours",
      title: "L'assemblage, la signature Lastours",
      body: "L'assemblage, véritable signature du Château Lastours, est un travail d'orfèvre où chaque cépage – Duras, Braucol, Mauzac – chaque parcelle d'argile, de calcaire ou de boulbène, et chaque type d'élevage, sont harmonieusement mariés pour créer des vins vibrants, élégants et résolument modernes. Nos cuvées expriment la diversité, la richesse et la typicité du vignoble de Gaillac, séduisant aussi bien les amateurs curieux que les passionnés exigeants à la recherche d'un vin français authentique."
    },
    image: {
      src: "/Page/Notre Chai - manque 1 photo/IMG_20220902_190142 (2).jpg",
      alt: "Assemblage des vins au Château Lastours",
      ratio: "16/9" as const
    },
    layout: "image-first"
  },
];

export default function NotreChai() {
  return (
    <div className="min-h-screen relative bg-premium" data-page="notre-chai">
      {/* Texture grain prononcée - Style premium */}
      <div className="fixed inset-0 opacity-12 pointer-events-none texture-paper">
      </div>
      
      {/* Grain additionnel plus fin */}
      <div className="fixed inset-0 opacity-8 pointer-events-none texture-grain">
      </div>

      {/* Hero Section Amélioré */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond avec parallax subtil */}
        <div className="absolute inset-0">
          <CinematicImage
            src="/Page/Notre Chai - manque 1 photo/Capture ameyric prod.JPG"
            alt="Notre Chai - Château Lastours"
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-100"
          />
          {/* Overlay gradients multiples pour plus de profondeur */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          {/* Vignette subtile */}
          <div className="absolute inset-0 vignette-radial" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 space-y-8">
          {/* Badges de certification en haut */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 opacity-90">
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium">
              AOP Gaillac
            </span>
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium">
              IGP Sud-Ouest
            </span>
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium">
              HVE
            </span>
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium">
              Vignobles & Découvertes
            </span>
          </div>

          {/* Titre principal amélioré */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-light tracking-wider uppercase opacity-80 text-amber-200">
                Vinification d'Excellence
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight">
                Notre{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
                  Chai
                </span>
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light italic opacity-90 max-w-4xl mx-auto leading-relaxed">
              L'Alchimie Précise – Fondement de notre Philosophie
            </h2>
          </div>

          {/* Description enrichie */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-95">
              <span className="text-amber-200 font-semibold">De la Grappe à la Bouteille : Le Souffle du Terroir</span>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Découvrez l'art de la vinification haut de gamme au Château Lastours, 
              au cœur de Gaillac, où chaque millésime devient une aventure 
              sensorielle et un hommage à la tradition viticole française.
            </p>

            {/* Points clés en highlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-amber-400/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🍇</span>
                </div>
                <h3 className="font-semibold text-amber-200">Extraction à Froid</h3>
                <p className="text-sm opacity-80">Préservation des arômes délicats</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-amber-400/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🏺</span>
                </div>
                <h3 className="font-semibold text-amber-200">Élevage Traditionnel</h3>
                <p className="text-sm opacity-80">Barriques françaises et cuves inox</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-amber-400/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-amber-200">Assemblage Expert</h3>
                <p className="text-sm opacity-80">Signature unique du terroir</p>
              </div>
            </div>
          </div>

          {/* Call-to-action avec flèche de défilement */}
          <div className="mt-12 space-y-6">
            <TransitionLink
              href="/reservation"
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-amber-500/20 hover:scale-105"
            >
              Visitez Notre Chai
              <span className="text-xl">→</span>
            </TransitionLink>
            
            {/* Flèche de défilement animée */}
            <div className="flex justify-center pt-8">
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de progression visuel */}
        <div className="absolute bottom-8 left-8 hidden lg:block">
          <div className="flex items-center space-x-4 text-white/60 text-sm">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span>Défilez pour découvrir nos techniques</span>
          </div>
        </div>
      </section>

      {/* Sections principales avec les vraies photos */}
      {vinificationSections.map((section, index) => (
        <section 
          key={section.id} 
          className={cn(
            "relative py-24",
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          )}
        >
          <div className="container mx-auto px-4">
            <div className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto",
              section.layout === "image-first" ? "lg:grid-flow-col-dense" : ""
            )}>
              {/* Texte */}
              <div className={cn(
                "space-y-6",
                section.layout === "image-first" ? "lg:col-start-2" : "lg:col-start-1"
              )}>
                <TextBlock
                  kicker={section.text.kicker}
                  title={section.text.title}
                  body={section.text.body}
                />
              </div>

              {/* Image */}
              <div className={cn(
                "relative",
                section.layout === "image-first" ? "lg:col-start-1" : "lg:col-start-2"
              )}>
                <CinematicImage
                  src={section.image.src}
                  alt={section.image.alt}
                  ratio={section.image.ratio}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Section photos du chai avec nouvelles images */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              kicker="Nos Installations"
              title="Au Cœur de Notre Chai"
              subtitle="Découvrez nos équipements et techniques de vinification"
              className="text-center mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <CinematicImage
                  src="/Page/Notre Chai - manque 1 photo/barriques et barboteurs.jpg"
                  alt="Barriques et barboteurs au Château Lastours"
                  ratio="16/9"
                  className="rounded-xl shadow-lg"
                />
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold">Élevage en Barriques</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nos barriques françaises permettent un élevage délicat qui apporte structure et complexité à nos vins rouges.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <CinematicImage
                  src="/Page/Notre Chai - manque 1 photo/ecoulage et décuvage.jpg"
                  alt="Écoulage et décuvage au Château Lastours"
                  ratio="16/9"
                  className="rounded-xl shadow-lg"
                />
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold">Écoulage et Décuvage</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Étapes cruciales de la vinification en rouge, effectuées avec précision pour préserver la qualité du vin.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <CinematicImage
                  src="/Page/Notre Chai - manque 1 photo/Embouteillage rosé methode.jpeg"
                  alt="Embouteillage rosé méthode au Château Lastours"
                  ratio="16/9"
                  className="rounded-xl shadow-lg"
                />
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold">Embouteillage</h3>
                  <p className="text-gray-600 leading-relaxed">
                    L'embouteillage de nos vins rosés méthode ancestrale, dernière étape avant la dégustation.
                  </p>
                </div>
              </div>

              <div className="space-y-6 md:col-span-2 lg:col-span-1">
                <CinematicImage
                  src="/Page/Notre Chai - manque 1 photo/image00001.jpeg"
                  alt="Installations modernes du chai"
                  ratio="16/9"
                  className="rounded-xl shadow-lg"
                />
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold">Équipements Modernes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Technologies de pointe au service de la tradition viticole pour une vinification d'excellence.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <CinematicImage
                  src="/Page/Notre Chai - manque 1 photo/image00005.jpeg"
                  alt="Cuves de fermentation"
                  ratio="16/9"
                  className="rounded-xl shadow-lg"
                />
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold">Cuves de Fermentation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nos cuves inox thermorégulées permettent un contrôle précis de la fermentation.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <CinematicImage
                  src="/Page/Notre Chai - manque 1 photo/image00021.jpeg"
                  alt="Stockage et élevage"
                  ratio="16/9"
                  className="rounded-xl shadow-lg"
                />
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold">Stockage et Élevage</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Espaces climatisés pour l'élevage optimal de nos vins dans les meilleures conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <QuoteRibbon
        text="Chaque bouteille raconte une histoire, chaque millésime devient une aventure sensorielle et un hommage à la tradition viticole française."
        author="Famille de Faramond"
      />

      {/* Call to action */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <SectionTitle
              title="Vivez l'Alchimie d'une Vinification d'Exception"
              subtitle="Plongez dans l'univers du Château Lastours : chaque bouteille raconte une histoire"
              className="mb-8"
            />

            <div className="pt-6">
              <TransitionLink
                href="/reservation"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Planifiez votre visite
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
