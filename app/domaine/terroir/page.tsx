import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, MapPin, Thermometer, Droplets, Mountain } from "lucide-react"

export default function TerroirPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/terroir-landscape-with-vineyard-rows-and-hills.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display mb-4 text-balance">Notre Terroir</h1>
          <p className="text-xl md:text-2xl text-pretty opacity-90">L'âme de nos vins d'exception</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-8">Un Terroir d'Exception</h2>
            <p className="text-xl leading-relaxed text-muted-foreground text-pretty mb-12">
              Notre vignoble s'étend sur 52 hectares avec des vignes d'âge moyen de 35 ans, dont un tiers en blanc et
              deux tiers en rouge. Les cépages traditionnels gaillacois s'épanouissent sur ce terroir unique du
              Sud-Ouest.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/aerial-view-of-vineyard-terroir-with-soil-layers.png"
                alt="Vue aérienne du terroir"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-display mb-6">Les Cépages Traditionnels</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Les cépages blancs traditionnels sont le <strong>Mauzac</strong>, le <strong>Loin-de-l'œil</strong>
                (typiquement gaillacois), la Muscadelle et le Sauvignon. Ces variétés ancestrales donnent à nos vins
                blancs leur caractère unique et leur fraîcheur minérale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quant aux rouges, les cépages sont le <strong>Braucol</strong> ou « Fer-Servadou » et le{" "}
                <strong>Duras</strong>, complétés de la Syrah, du Merlot et du Cabernet-Sauvignon. Tout l'art de
                l'assemblage de ces cépages s'harmonise chaque année pour élaborer le vin qui séduira les amateurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Climate & Environment */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Le Terroir Gaillacois</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Situé dans l'appellation Gaillac, notre terroir bénéficie des caractéristiques uniques du Sud-Ouest
              français
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mountain className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-2">Surface</h3>
                <p className="text-3xl font-display text-accent mb-2">52ha</p>
                <p className="text-sm text-muted-foreground">Vignoble total</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Thermometer className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-2">Âge Moyen</h3>
                <p className="text-3xl font-display text-accent mb-2">35 ans</p>
                <p className="text-sm text-muted-foreground">Des vignes</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Droplets className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-2">Répartition</h3>
                <p className="text-3xl font-display text-accent mb-2">1/3</p>
                <p className="text-sm text-muted-foreground">Blanc - 2/3 Rouge</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-2">Appellation</h3>
                <p className="text-3xl font-display text-accent mb-2">AOC</p>
                <p className="text-sm text-muted-foreground">Gaillac</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-display mb-6">L'Influence Méditerranéenne</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Situé à seulement 80 kilomètres de la Méditerranée, notre domaine bénéficie de l'influence maritime qui
                tempère les excès climatiques. Les étés chauds et secs favorisent la concentration des arômes, tandis
                que les nuits fraîches préservent l'acidité naturelle des raisins.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Le mistral, ce vent du nord caractéristique de la région, joue un rôle essentiel dans la santé de nos
                vignes. Il assèche naturellement le feuillage après les pluies, limitant les maladies cryptogamiques et
                permettant une viticulture plus respectueuse de l'environnement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cette combinaison unique de facteurs climatiques crée des conditions idéales pour la maturation lente et
                homogène de nos raisins, gage de la complexité et de l'élégance de nos vins.
              </p>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/mediterranean-climate-vineyard-with-mistral-wind.png"
                alt="Influence méditerranéenne sur le vignoble"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parcels */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Nos Parcelles d'Exception</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Chaque parcelle de notre domaine possède ses propres caractéristiques et contribue à la richesse de notre
              gamme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <img
                  src="/hillside-vineyard-parcel-with-old-vines.png"
                  alt="Les Coteaux"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading mb-4">Les Coteaux</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nos parcelles les plus anciennes, plantées en 1847, s'étendent sur les coteaux sud du domaine.
                  L'exposition optimale et l'âge vénérable des vignes donnent naissance à nos cuvées les plus
                  prestigieuses.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Superficie:</span>
                    <span>25 hectares</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cépages:</span>
                    <span>Syrah, Mourvèdre</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Âge moyen:</span>
                    <span>45 ans</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <img
                  src="/plateau-vineyard-with-white-grape-varieties.png"
                  alt="Le Plateau"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading mb-4">Le Plateau</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Situé sur le plateau calcaire, ce terroir privilégié accueille nos cépages blancs. L'altitude et la
                  fraîcheur nocturne préservent l'acidité et développent les arômes délicats de nos vins blancs.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Superficie:</span>
                    <span>35 hectares</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cépages:</span>
                    <span>Chardonnay, Viognier</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Âge moyen:</span>
                    <span>25 ans</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <img
                  src="/valley-vineyard-with-young-vines-modern.png"
                  alt="La Vallée"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading mb-4">La Vallée</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dans la vallée, nos jeunes vignes bénéficient d'une fraîcheur naturelle et d'une humidité plus
                  importante. Ces parcelles donnent naissance à nos vins fruités et expressifs.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Superficie:</span>
                    <span>60 hectares</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cépages:</span>
                    <span>Grenache, Merlot</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Âge moyen:</span>
                    <span>15 ans</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Explorez Notre Terroir</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Découvrez par vous-même la richesse de notre terroir lors d'une visite guidée de nos parcelles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/reservation">
                  Réserver une Visite
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/savoir-faire/vigne">Découvrir la Vigne</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
