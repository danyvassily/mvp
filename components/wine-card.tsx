"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Wine } from "@/lib/wines-data"
import { ShoppingCart, Award } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useMemo, useState, useCallback } from "react"
import { wineImageCandidates } from "@/lib/image-utils"

function getWinePageUrl(wine: Wine): string {
  const urlMappings: Record<string, string> = {
    "domeni-blanc-2023": "/les-vins/domeni-blanc",
    "domeni-rose-2023": "/les-vins/domeni-rose", 
    "domeni-rouge-2021": "/les-vins/domeni-rouge",
    "opus-blanc-2022": "/les-vins/opus-blanc",
    "opus-rouge-2020": "/les-vins/opus-rouge",
    "claire-de-lune-2022": "/les-vins/claire-de-lune",
    "petrichor-rouge-2020": "/les-vins/petrichor-rouge",
    "pigeonnier-rouge-2021": "/les-vins/pigeonnier",
    "perle-blanc-2023": "/les-vins/perle",
    "poussin-blanc-2024": "/les-vins/poussin-blanc",
    "poussin-rose-2023": "/les-vins/poussin-rose",
    "methode-blanc-2020": "/les-vins/methode-blanc",
    "methode-rose-2020": "/les-vins/methode-rose"
  }
  
  return urlMappings[wine.id] || `/les-vins/${wine.id}`
}

interface WineCardProps {
  wine: Wine
}

export function WineCard({ wine }: WineCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: wine.id,
      name: wine.name,
      price: wine.price,
      image: wine.image || "/wine-bottle-default.png",
      vintage: wine.vintage?.toString() || "",
      collection: wine.collection,
    })
  }

  const collectionLabels = {
    classique: "Classique",
    methode: "Méthode",
    fruitees: "Fruitées",
    poussin: "Poussin",
    domeni: "Doméni",
    confidentielle: "Confidentielle",
    opus: "Opus",
  }

  const typeLabels: Record<string, string> = {
    rouge: "Rouge",
    blanc: "Blanc",
    rose: "Rosé",
    effervescent: "Effervescent",
  }

  const candidates = useMemo(() => wineImageCandidates(wine), [wine])
  const [imgIdx, setImgIdx] = useState(0)
  const imgSrc = candidates[imgIdx] || "/wine-bottle-default.png"
  const onImgError = useCallback(() => {
    setImgIdx((i) => Math.min(i + 1, candidates.length - 1))
  }, [candidates.length])

  return (
    <Card className="group relative overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 mx-auto max-w-[320px] border-t-4 border-wine-burgundy">
      <div className="aspect-[3/4] bg-white overflow-hidden p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={wine.name}
          onError={onImgError}
          loading="lazy"
          decoding="async"
          className="mx-auto h-full w-[60%] object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {collectionLabels[wine.collection]}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {typeLabels[wine.type]}
          </Badge>
          {wine.featured && (
            <Badge className="text-xs bg-accent text-accent-foreground">
              <Award className="w-3 h-3 mr-1" />
              Sélection
            </Badge>
          )}
        </div>

        <h3 className="text-lg font-heading mb-2 group-hover:text-accent transition-colors min-h-[3.25rem]">{wine.name}</h3>

        <p className="text-sm text-muted-foreground mb-1">Millésime {wine.vintage}</p>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{wine.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-xl font-heading text-wine-burgundy">{wine.price}€</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={getWinePageUrl(wine)}>Découvrir</Link>
            </Button>
            <Button
              size="sm"
              disabled={!wine.inStock}
              onClick={handleAddToCart}
              className="bg-wine-gold hover:bg-wine-gold/90"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              {wine.inStock ? "Ajouter" : "Épuisé"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
