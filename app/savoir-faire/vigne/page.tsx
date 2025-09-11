import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Leaf, Sun, Scissors, Droplets } from "lucide-react"

export default function VignePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/vineyard-workers-tending-vines-traditional-methods.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display mb-4 text-balance">La Vigne</h1>
          <p className="text-xl md:text-2xl text-pretty opacity-90">L'art de cultiver l'excellence</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-8">Viticulture d'Excellence</h2>
            <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
              Depuis 175 ans, nous cultivons nos vignes avec un respect profond pour la nature et une quête constante de
              perfection. Chaque geste, chaque décision est guidée par la volonté de révéler le meilleur de notre
              terroir exceptionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/sustainable-vineyard-practices-organic-farming.png"
                alt="Viticulture durable"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-display mb-6">Une Approche Durable</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Notre conversion vers l'agriculture biologique, entamée en 2018, témoigne de notre engagement envers un
                viticulture respectueuse de l'environnement. Nous privilégions les méthodes naturelles et les
                préparations biodynamiques pour maintenir l'équilibre de nos sols et la santé de nos vignes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cette approche holistique nous permet non seulement de préserver notre terroir pour les générations
                futures, mais aussi d'obtenir des raisins d'une pureté et d'une expressivité remarquables, véritables
                reflets de notre environnement unique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Work */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Le Cycle de la Vigne</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Chaque saison apporte ses défis et ses récompenses dans le travail minutieux de nos vignes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scissors className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Hiver - Taille</h3>
                <p className="text-muted-foreground leading-relaxed">
                  De décembre à mars, nos vignerons taillent méticuleusement chaque cep pour optimiser la future
                  récolte. Cette étape cruciale détermine la qualité et la quantité des raisins.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Printemps - Débourrement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Le réveil de la vigne au printemps nécessite une surveillance constante. Nous protégeons les jeunes
                  pousses et préparons le sol pour la saison à venir.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sun className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Été - Véraison</h3>
                <p className="text-muted-foreground leading-relaxed">
                  L'été marque la maturation des raisins. Nous effectuons les vendanges en vert et surveillons
                  attentivement l'évolution de nos grappes vers la maturité optimale.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Droplets className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Automne - Vendanges</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Le moment tant attendu des vendanges arrive. Chaque parcelle est récoltée à maturité optimale, souvent
                  à la main, pour préserver l'intégrité des raisins.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Grape Varieties */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Nos Cépages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Une sélection rigoureuse de cépages nobles parfaitement adaptés à notre terroir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <img
                  src="/syrah-grape-clusters-on-vine-close-up.png"
                  alt="Syrah"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading mb-4">Syrah</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cépage roi de notre domaine, la Syrah s'épanouit sur nos coteaux ensoleillés. Elle apporte structure,
                  complexité aromatique et potentiel de garde à nos vins rouges les plus prestigieux.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Superficie:</span>
                    <span>45 hectares</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Âge moyen:</span>
                    <span>35 ans</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <img
                  src="/chardonnay-white-grapes-golden-sunlight.png"
                  alt="Chardonnay"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading mb-4">Chardonnay</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sur notre plateau calcaire, le Chardonnay développe une minéralité exceptionnelle et une fraîcheur
                  remarquable. Il constitue la base de nos vins blancs les plus élégants.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Superficie:</span>
                    <span>25 hectares</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Âge moyen:</span>
                    <span>20 ans</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <img
                  src="/grenache-red-grape-bunches-mediterranean.png"
                  alt="Grenache"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading mb-4">Grenache</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Parfaitement adapté à notre climat méditerranéen, le Grenache apporte rondeur et fruité à nos
                  assemblages. Il excelle particulièrement dans nos rosés gourmands.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Superficie:</span>
                    <span>30 hectares</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Âge moyen:</span>
                    <span>25 ans</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-8">Techniques Innovantes</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nous combinons les méthodes traditionnelles éprouvées avec les innovations technologiques les plus
                récentes pour optimiser la qualité de nos raisins. Notre approche de viticulture de précision nous
                permet d'adapter nos pratiques à chaque parcelle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                L'utilisation de capteurs connectés, l'analyse des sols par satellite et la météorologie de précision
                nous aident à prendre les meilleures décisions au bon moment, tout en respectant les rythmes naturels de
                la vigne.
              </p>
              <Button asChild>
                <Link href="/savoir-faire/chais">
                  Découvrir nos Chais
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/precision-viticulture-technology-sensors-vineyard.png"
                alt="Viticulture de précision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
