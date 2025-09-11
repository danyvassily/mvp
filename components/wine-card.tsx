"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Wine } from "@/lib/wines-data"
import { ShoppingCart, Award } from "lucide-react"
import { useCart } from "@/lib/cart-context"

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
      vintage: wine.vintage,
      collection: wine.collection,
    })
  }

  const collectionLabels = {
    classique: "Classique",
    methode: "Méthode",
    fruitees: "Fruitées",
    poussin: "Poussin",
    domeni: "Domeni",
    confidentielle: "Confidentielle",
    opus: "Opus",
  }

  const typeLabels = {
    rouge: "Rouge",
    blanc: "Blanc",
    rose: "Rosé",
    effervescent: "Effervescent",
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="aspect-[3/4] bg-muted overflow-hidden">
        <img
          src={wine.image || "/wine-bottle-default.png"}
          alt={wine.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

        <h3 className="text-xl font-heading mb-2 group-hover:text-accent transition-colors">{wine.name}</h3>

        <p className="text-sm text-muted-foreground mb-1">Millésime {wine.vintage}</p>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{wine.description}</p>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-heading text-accent">{wine.price}€</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/les-vins/${wine.id}`}>Découvrir</Link>
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
