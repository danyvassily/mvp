import { SectionHero } from "@/components/common/SectionHero"
import { RichSection } from "@/components/common/RichSection"
import { CalloutCard } from "@/components/common/CalloutCard"
import { getPageAssets, getPageFallbacks } from "@/lib/asset-mapping"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dégustation | Château Lastours",
  description: "Découvrez l'art de la dégustation au Château Lastours. Une expérience sensorielle unique au cœur du vignoble de Gaillac, entre tradition et innovation.",
  keywords: ["dégustation", "château lastours", "vin gaillac", "visite vignoble", "expérience œnologique"],
  openGraph: {
    title: "Dégustation | Château Lastours",
    description: "Une expérience sensorielle unique au cœur du vignoble de Gaillac",
    images: [
      {
        url: "/PHOTOS-WEB-LASTOURS/VINIFICATION/Capture ameyric prod.JPG",
        width: 1200,
        height: 630,
        alt: "Dégustation au Château Lastours"
      }
    ]
  }
}

export default function DegustationPage() {
  const assets = getPageAssets('degustation')
  const fallbacks = getPageFallbacks('degustation')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionHero
        title="Dégustation"
        subtitle="Une expérience sensorielle, libre et vivante, au cœur du vignoble de Gaillac"
        imageSrc={assets.hero}
        height="xl"
      />

      {/* Section principale : Philosophie de la dégustation */}
      <RichSection
        title="Le berceau d'une mosaïque de saveurs"
        kicker="Philosophie"
        content={`
          <p>Ici, au Château Lastours, la dégustation est avant tout une célébration. Libérée des codes rigides, elle s'inspire d'un principe simple : <strong>le bon vin, c'est celui que vous aimez</strong>.</p>
          
          <p>Nul besoin d'être un initié averti pour apprécier pleinement un vin. Il suffit de se laisser guider par ses sens et de savourer l'instant.</p>
          
          <p>Implanté au cœur de l'appellation Gaillac, notre domaine s'inscrit dans plus de 2000 ans d'histoire viticole. Grâce à une diversité de cépages autochtones et de savoir-faire transmis, nos cuvées révèlent des profils variés, toujours complémentaires.</p>
        `}
        variant="light"
      />

      {/* Section : Innovation technique */}
      <RichSection
        title="Le secret de nos vins : la fraîcheur maîtrisée"
        kicker="Innovation"
        content={`
          <p>La fermentation alcoolique, point de départ de toute vinification, est un processus vivant où le sucre se transforme en alcool, libérant au passage de la chaleur et du gaz.</p>
          
          <p><strong>L'innovation majeure ? La maîtrise du froid à deux étapes clés :</strong></p>
          
          <ul>
            <li><strong>Pendant les vendanges</strong> – effectuées de nuit, lorsque les températures chutent de plus de 20°C entre le jour et la nuit.</li>
            <li><strong>Pendant la fermentation</strong> – un réseau d'eau froide régule précisément la température, pour préserver fraîcheur et finesse.</li>
          </ul>
        `}
        imageFirst
        variant="dark"
      />

      {/* Section : Cuves et techniques */}
      <RichSection
        title="Cuves béton ou inox : la juste alliance de tradition et de technique"
        kicker="Savoir-faire"
        content={`
          <p>Chaque type de vin trouve sa cuve idéale :</p>
          
          <ul>
            <li><strong>Blancs & rosés</strong> : cuves béton, naturellement isolantes, pour conserver la fraîcheur.</li>
            <li><strong>Rouges</strong> : cuves inox, idéales pour maîtriser la chaleur générée par la fermentation.</li>
          </ul>
          
          <h3>Les trois dimensions du goût</h3>
          <ul>
            <li><strong>Primaire</strong> – arômes floraux et fruités, typiques de chaque cépage</li>
            <li><strong>Secondaire</strong> – issus des fermentations</li>
            <li><strong>Tertiaire</strong> – développés lors de l'élevage et du temps passé en bouteille</li>
          </ul>
        `}
        variant="light"
      />

      {/* Section de réservation */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black grain-heavy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white tracking-wider">
              Réservez votre visite-dégustation
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="space-y-2">
                <div className="text-3xl">🍇</div>
                <p className="text-lg">Découvrez nos secrets de vinification</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🍷</div>
                <p className="text-lg">Dégustez nos cuvées d'exception</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🛍</div>
                <p className="text-lg">Repartez avec vos coups de cœur</p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="/reservation"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Réserver maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fallbacks si nécessaire */}
      {fallbacks.missingAssets.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            {fallbacks.missingAssets.map((asset, index) => (
              <CalloutCard
                key={index}
                type="coming-soon"
                title="Contenu à venir"
                message={asset}
                className="mb-4"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
