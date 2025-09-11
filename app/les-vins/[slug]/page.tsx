import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getWineBySlug, wines } from "@/lib/wines-data"
import { ShoppingCart, ArrowLeft, Award, Grape, BarChart3 } from "lucide-react"
import Link from "next/link"

interface WinePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return wines.map((wine) => ({
    slug: wine.id,
  }))
}

export default function WinePage({ params }: WinePageProps) {
  const wine = getWineBySlug(params.slug)

  if (!wine) {
    notFound()
  }

  const collectionLabels = {
    classique: "Collection Classique",
    methode: "Collection Méthode",
    fruitees: "Collection Fruitées",
  }

  const typeLabels = {
    rouge: "Vin Rouge",
    blanc: "Vin Blanc",
    rose: "Vin Rosé",
    effervescent: "Vin Effervescent",
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/les-vins">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux vins
            </Link>
          </Button>
        </div>

        {/* Wine Details */}
        <section className="pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Wine Image */}
              <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
                <img src={wine.image || "/placeholder.svg"} alt={wine.name} className="w-full h-full object-cover" />
              </div>

              {/* Wine Information */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{collectionLabels[wine.collection]}</Badge>
                    <Badge variant="outline">{typeLabels[wine.type]}</Badge>
                    {wine.featured && (
                      <Badge className="bg-accent text-accent-foreground">
                        <Award className="w-3 h-3 mr-1" />
                        Sélection
                      </Badge>
                    )}
                  </div>

                  <h1 className="text-4xl md:text-5xl font-display mb-4">{wine.name}</h1>
                  <p className="text-xl text-muted-foreground mb-6">Millésime {wine.vintage}</p>

                  <div className="text-3xl font-heading text-accent mb-8">{wine.price}€</div>

                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">{wine.longDescription}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" disabled={!wine.inStock} className="flex-1">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {wine.inStock ? "Ajouter au panier" : "Épuisé"}
                    </Button>
                    <Button size="lg" variant="outline">
                      Réserver une dégustation
                    </Button>
                  </div>
                </div>

                {/* Awards */}
                {wine.awards.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        Récompenses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {wine.awards.map((award, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            {award}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tasting Notes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Grape className="w-5 h-5 text-accent" />
                    Notes de Dégustation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-heading mb-2">Apparence</h4>
                    <p className="text-muted-foreground">{wine.tastingNotes.appearance}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-heading mb-2">Nez</h4>
                    <p className="text-muted-foreground">{wine.tastingNotes.nose}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-heading mb-2">Bouche</h4>
                    <p className="text-muted-foreground">{wine.tastingNotes.palate}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-heading mb-2">Finale</h4>
                    <p className="text-muted-foreground">{wine.tastingNotes.finish}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-accent" />
                    Informations Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-heading mb-2">Degré d'alcool</h4>
                    <p className="text-muted-foreground">{wine.technicalInfo.alcohol}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-heading mb-2">Cépages</h4>
                    <div className="flex flex-wrap gap-2">
                      {wine.technicalInfo.grapes.map((grape, index) => (
                        <Badge key={index} variant="outline">
                          {grape}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-heading mb-2">Élevage</h4>
                    <p className="text-muted-foreground">{wine.technicalInfo.aging}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-heading mb-2">Production</h4>
                    <p className="text-muted-foreground">{wine.technicalInfo.production}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Wines */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-display mb-8 text-center">Vins de la même collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wines
                .filter((w) => w.collection === wine.collection && w.id !== wine.id)
                .slice(0, 3)
                .map((relatedWine) => (
                  <Card key={relatedWine.id} className="group hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[3/4] bg-muted overflow-hidden">
                      <img
                        src={relatedWine.image || "/placeholder.svg"}
                        alt={relatedWine.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-heading mb-2">{relatedWine.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">Millésime {relatedWine.vintage}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-heading text-accent">{relatedWine.price}€</div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/les-vins/${relatedWine.id}`}>Découvrir</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
