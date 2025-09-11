"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WineCard } from "@/components/wine-card"
import { WineFilters } from "@/components/wine-filters"
import { wines } from "@/lib/wines-data"
import { useSearchParams } from "next/navigation"

export default function WinesPage() {
  const searchParams = useSearchParams()
  const initialCollection = searchParams.get("collection") || ""

  const [filters, setFilters] = useState({
    collection: initialCollection,
    type: "",
    priceRange: "",
    sortBy: "name",
  })

  const filteredAndSortedWines = useMemo(() => {
    let filtered = wines

    // Apply filters
    if (filters.collection) {
      filtered = filtered.filter((wine) => wine.collection === filters.collection)
    }
    if (filters.type) {
      filtered = filtered.filter((wine) => wine.type === filters.type)
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map((p) => p.replace("+", ""))
      if (max) {
        filtered = filtered.filter((wine) => wine.price >= Number.parseInt(min) && wine.price <= Number.parseInt(max))
      } else {
        filtered = filtered.filter((wine) => wine.price >= Number.parseInt(min))
      }
    }

    // Apply sorting
    switch (filters.sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "vintage":
        filtered.sort((a, b) => b.vintage - a.vintage)
        break
      case "name":
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return filtered
  }, [filters])

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/wine-cellar-with-barrels-and-bottles.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display mb-4 text-balance">Nos Vins</h1>
          <p className="text-xl md:text-2xl text-pretty opacity-90">Découvrez notre collection de vins d'exception</p>
        </div>
      </section>

      {/* Wine Catalog */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="mb-12">
            <WineFilters onFiltersChange={setFilters} />
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredAndSortedWines.length} vin{filteredAndSortedWines.length > 1 ? "s" : ""} trouvé
              {filteredAndSortedWines.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Wine Grid */}
          {filteredAndSortedWines.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredAndSortedWines.map((wine) => (
                <WineCard key={wine.id} wine={wine} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-heading mb-4">Aucun vin trouvé</h3>
              <p className="text-muted-foreground mb-8">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
