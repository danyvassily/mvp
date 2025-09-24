"use client"

import { useState } from "react"
import type { Wine } from "@/lib/wines-data"
import { wines } from "@/lib/wines-data"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

type StructureItem = {
  label: string
  wineName?: string
}

type StructureCategory = {
  title: string
  tagline?: string
  items: StructureItem[]
}

function findWineByName(name?: string): Wine | undefined {
  if (!name) return undefined
  return wines.find((w) => w.name.toLowerCase() === name.toLowerCase())
}

function WineSection({ index, item }: { index: number; item: StructureItem }) {
  const wine = findWineByName(item.wineName)
  const isEven = index % 2 === 0
  const [showDetails, setShowDetails] = useState(false)
  
  let hoverTimeout: NodeJS.Timeout | null = null

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setShowDetails(true)
    }, 1500)
  }

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
    }
    setShowDetails(false)
  }

  return (
    <section className="py-10">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>
        {/* Image */}
        <div className="lg:col-span-5">
          <div 
            className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black/5 flex items-center justify-center p-6 cursor-pointer hover:shadow-3xl transition-shadow duration-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={wine?.image || "/wine-bottle-default.png"}
              alt={wine?.name || item.label}
              className="h-[520px] max-h-[70vh] w-auto object-contain mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Content - Seulement le nom visible par défaut */}
        <div className="lg:col-span-7 wine-content">
          <div className="space-y-6">
            {/* Nom toujours visible */}
            <div className="wine-title">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block h-px w-8 bg-wine-gold" />
                <span className="text-sm tracking-widest uppercase text-muted-foreground">{item.label}</span>
              </div>
              <h3 className="text-3xl font-display">
                {wine?.name || item.label}
              </h3>
            </div>

            {/* Détails apparaissent après 1.5s de hover */}
            <div className={`wine-details transition-all duration-500 ${
              showDetails ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              {wine && (
                <p className="text-muted-foreground mb-4">Millésime {wine.vintage} — {wine.price}€</p>
              )}

              {/* Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-heading text-wine-gold">Conseil de dégustation</h4>
                  {wine?.servingAdvice ? (
                    <ul className="text-muted-foreground space-y-1">
                      <li>Température: {wine.servingAdvice.temperature}</li>
                      {wine.servingAdvice.decanting && <li>Carafage: {wine.servingAdvice.decanting}</li>}
                      <li>Verres: {wine.servingAdvice.glassware}</li>
                      <li>Timing: {wine.servingAdvice.timing}</li>
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">À renseigner</p>
                  )}

                  <Separator className="bg-white/10" />

                  <h4 className="font-heading text-wine-gold">Conseil de conservation</h4>
                  {wine?.conservation ? (
                    <ul className="text-muted-foreground space-y-1">
                      <li>Température: {wine.conservation.temperature}</li>
                      <li>Durée: {wine.conservation.duration}</li>
                      <li>Conditions: {wine.conservation.conditions}</li>
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">À renseigner</p>
                  )}
                </div>

                <div className="space-y-3">
                  <h4 className="font-heading text-wine-gold">Accord mets & vins</h4>
                  {wine?.foodPairing ? (
                    <div className="text-muted-foreground">
                      <p className="mb-1"><span className="font-medium">Entrées:</span> {wine.foodPairing.appetizers.join(", ")}</p>
                      <p className="mb-1"><span className="font-medium">Plats:</span> {wine.foodPairing.mainCourses.join(", ")}</p>
                      <p className="mb-1"><span className="font-medium">Fromages:</span> {wine.foodPairing.cheeses.join(", ")}</p>
                      {wine.foodPairing.desserts && (
                        <p className="mb-1"><span className="font-medium">Desserts:</span> {wine.foodPairing.desserts.join(", ")}</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">À renseigner</p>
                  )}

                  <Separator className="bg-white/10" />

                  <h4 className="font-heading text-wine-gold">Composition</h4>
                  {wine?.composition ? (
                    <ul className="text-muted-foreground space-y-1">
                      <li>Terroir: {wine.composition.terroir}</li>
                      <li>Vendanges: {wine.composition.harvest}</li>
                      <li>Vinification: {wine.composition.vinification}</li>
                      <li>Philosophie: {wine.composition.philosophy}</li>
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">À renseigner</p>
                  )}
                </div>
              </div>

              {wine?.awards?.length ? (
                <div className="pt-2">
                  <Badge className="bg-accent text-accent-foreground">{wine.awards[0]}</Badge>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const structure: StructureCategory[] = [
  {
    title: "Doméni",
    tagline: "L'expression élégante du terroir",
    items: [
      { label: "Perlé Blanc", wineName: "Perlé Blanc" },
      { label: "Blanc", wineName: "Doméni Blanc" },
      { label: "Rosé", wineName: "Doméni Rosé" },
      { label: "Rouge", wineName: "Doméni Rouge" },
    ],
  },
  {
    title: "Opus",
    tagline: "Nos cuvées d'exception",
    items: [
      { label: "Blanc", wineName: "Opus Blanc" },
      { label: "Rouge", wineName: "Opus Rouge" },
    ],
  },
  {
    title: "Poussin",
    tagline: "La fraîcheur de la jeunesse",
    items: [
      { label: "Blanc", wineName: "Poussin Blanc" },
      { label: "Rosé", wineName: "Poussin Rosé" },
    ],
  },
  {
    title: "Confidentiel",
    tagline: "Les trésors cachés du domaine",
    items: [
      { label: "Claire de Lune", wineName: "Claire de Lune" },
      { label: "Pigeonnier", wineName: "Pigeonnier" },
      { label: "Petrichor Rosé", wineName: "Petrichor Rosé" },
      { label: "Petrichor Rouge", wineName: "Petrichor Rouge" },
    ],
  },
  {
    title: "Méthode",
    tagline: "L'art de l'effervescence",
    items: [
      { label: "Blanc", wineName: "Méthode Blanc" },
      { label: "Rosé", wineName: "Méthode Rosé" },
    ],
  },
]

export function WineStructureLuxe() {
  // statistiques
  const allItems = structure.flatMap((c) => c.items)
  const complete = allItems.filter((i) => {
    const w = findWineByName(i.wineName)
    return w && w.tastingNotes && w.conservation && w.foodPairing && w.composition && w.servingAdvice
  }).length
  const missing = allItems.filter((i) => !findWineByName(i.wineName)).length

  return (
    <div className="space-y-20">
      {/* Top counters, subtle and elegant */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent ring-1 ring-white/10">
          <p className="text-4xl font-display text-wine-gold">{complete}</p>
          <p className="text-sm text-muted-foreground">Vins complets</p>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent ring-1 ring-white/10">
          <p className="text-4xl font-display text-muted-foreground">{allItems.length - complete - missing}</p>
          <p className="text-sm text-muted-foreground">En cours</p>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent ring-1 ring-white/10">
          <p className="text-4xl font-display text-muted-foreground">{missing}</p>
          <p className="text-sm text-muted-foreground">À créer</p>
        </div>
      </div>

      {structure.map((collection) => (
        <div key={collection.title}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="inline-block h-px w-12 bg-wine-gold" />
              <span className="uppercase tracking-[0.25em] text-sm text-muted-foreground">Collection</span>
              <span className="inline-block h-px w-12 bg-wine-gold" />
            </div>
            <h2 className="text-4xl font-display">{collection.title}</h2>
            {collection.tagline && (
              <p className="text-muted-foreground mt-2">{collection.tagline}</p>
            )}
          </div>

          <div className="space-y-6">
            {collection.items.map((item, idx) => (
              <WineSection key={`${collection.title}-${item.label}`} index={idx} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
