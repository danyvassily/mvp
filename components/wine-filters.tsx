"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"

interface WineFiltersProps {
  onFiltersChange: (filters: {
    collection: string
    type: string
    priceRange: string
    sortBy: string
  }) => void
}

export function WineFilters({ onFiltersChange }: WineFiltersProps) {
  const [filters, setFilters] = useState({
    collection: "all",
    type: "all",
    priceRange: "all",
    sortBy: "name",
  })

  const updateFilters = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = {
      collection: "all",
      type: "all",
      priceRange: "all",
      sortBy: "name",
    }
    setFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const hasActiveFilters = filters.collection !== "all" || filters.type !== "all" || filters.priceRange !== "all"

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <Select value={filters.collection} onValueChange={(value) => updateFilters("collection", value)}>
          <SelectTrigger className="w-full lg:w-48">
            <SelectValue placeholder="Collection" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les collections</SelectItem>
            <SelectItem value="classique">Classique</SelectItem>
            <SelectItem value="methode">Méthode</SelectItem>
            <SelectItem value="fruitees">Fruitées</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.type} onValueChange={(value) => updateFilters("type", value)}>
          <SelectTrigger className="w-full lg:w-48">
            <SelectValue placeholder="Type de vin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            <SelectItem value="rouge">Rouge</SelectItem>
            <SelectItem value="blanc">Blanc</SelectItem>
            <SelectItem value="rose">Rosé</SelectItem>
            <SelectItem value="effervescent">Effervescent</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.priceRange} onValueChange={(value) => updateFilters("priceRange", value)}>
          <SelectTrigger className="w-full lg:w-48">
            <SelectValue placeholder="Prix" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les prix</SelectItem>
            <SelectItem value="0-25">Moins de 25€</SelectItem>
            <SelectItem value="25-50">25€ - 50€</SelectItem>
            <SelectItem value="50-100">50€ - 100€</SelectItem>
            <SelectItem value="100+">Plus de 100€</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.sortBy} onValueChange={(value) => updateFilters("sortBy", value)}>
          <SelectTrigger className="w-full lg:w-48">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Nom</SelectItem>
            <SelectItem value="price-asc">Prix croissant</SelectItem>
            <SelectItem value="price-desc">Prix décroissant</SelectItem>
            <SelectItem value="vintage">Millésime</SelectItem>
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button variant="outline" onClick={clearFilters} className="w-full lg:w-auto bg-transparent">
            <X className="w-4 h-4 mr-2" />
            Effacer les filtres
          </Button>
        )}
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {filters.collection !== "all" && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => updateFilters("collection", "all")}>
              Collection: {filters.collection}
              <X className="w-3 h-3 ml-1" />
            </Badge>
          )}
          {filters.type !== "all" && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => updateFilters("type", "all")}>
              Type: {filters.type}
              <X className="w-3 h-3 ml-1" />
            </Badge>
          )}
          {filters.priceRange !== "all" && (
            <Badge variant="secondary" className="cursor-pointer" onClick={() => updateFilters("priceRange", "all")}>
              Prix: {filters.priceRange}€
              <X className="w-3 h-3 ml-1" />
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
