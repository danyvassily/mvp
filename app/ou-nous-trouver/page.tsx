"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { searchPOIs, getAllPOIs } from "@/lib/poi-data"
import { MapPin } from "lucide-react"
import { useMemo, useState } from "react"

export default function OuNousTrouverPage() {
  const [query, setQuery] = useState("")
  const pois = useMemo(() => (query ? searchPOIs(query) : getAllPOIs()), [query])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/french-chateau-vineyard-landscape-with-rolling-hil.png')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-display mb-4">Où nous trouver</h1>
            <p className="text-xl opacity-90">Recherche d’adresse et points de vente partenaires</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Carte (placeholder) */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-0">
                  <div className="h-[400px] w-full bg-muted flex items-center justify-center text-muted-foreground">
                    Carte interactive à intégrer (Leaflet/Mapbox/Google)
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recherche */}
            <div className="space-y-4">
              <Input
                placeholder="Ville, code postal ou adresse"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="py-6 text-lg"
              />

              <div className="space-y-3">
                {pois.map((p) => (
                  <Card key={p.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium">{p.name}</div>
                          <div className="text-sm text-muted-foreground capitalize">{p.type.replace(/-/g, " ")}</div>
                          <div className="text-sm text-muted-foreground">
                            {p.address}, {p.postalCode} {p.city}
                          </div>
                          {p.phone && <div className="text-sm text-muted-foreground">{p.phone}</div>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

