import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function EngagementPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/terroir-landscape-with-vineyard-rows-and-hills.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-display mb-6 text-balance">Notre Engagement</h1>
            <p className="text-xl md:text-2xl text-pretty opacity-90">
              Générosité, Authenticité, Bienveillance et Transmission
            </p>
          </div>
        </section>

        {/* Valeurs Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">Nos Valeurs Fondamentales</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Puisse Lastours être l'écrin rassemblant ces valeurs qui nous sont chères"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Générosité",
                  description: "Partager notre passion et notre savoir-faire avec authenticité et bienveillance.",
                  icon: "🤝",
                },
                {
                  title: "Authenticité",
                  description: "Respecter les traditions gaillacoises tout en innovant avec respect du terroir.",
                  icon: "🍇",
                },
                {
                  title: "Bienveillance",
                  description: "Accueillir chaque visiteur avec chaleur et décomplexer l'approche du vin.",
                  icon: "❤️",
                },
                {
                  title: "Transmission",
                  description: "Transmettre notre héritage familial et nos valeurs aux générations futures.",
                  icon: "🌱",
                },
              ].map((valeur, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{valeur.icon}</div>
                    <h3 className="text-xl font-display mb-3 text-foreground">{valeur.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{valeur.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pratiques Durables Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-12 text-center text-foreground">
                Viticulture Durable
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-display mb-6 text-foreground">Certification HVE</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Le Château Lastours s'engage dans une démarche de Haute Valeur Environnementale (HVE), certification
                    qui reconnaît les exploitations engagées dans des pratiques particulièrement respectueuses de
                    l'environnement.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Cette certification couvre la biodiversité, la stratégie phytosanitaire, la gestion de la
                    fertilisation et la gestion de l'irrigation.
                  </p>
                </div>
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/sustainable-vineyard-practices.png"
                    alt="Pratiques viticoles durables"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 lg:order-1 aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/confusion-sexuelle-vineyard.png"
                    alt="Confusion sexuelle dans les vignes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-display mb-6 text-foreground">Confusion Sexuelle</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nous utilisons la technique de confusion sexuelle pour lutter naturellement contre les parasites de
                    la vigne, notamment les vers de la grappe.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Cette méthode consiste à diffuser des phéromones qui perturbent l'accouplement des insectes
                    nuisibles, réduisant ainsi considérablement l'usage de pesticides.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-display mb-6 text-foreground">Vignoble Durable</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Notre approche du vignoble durable intègre la préservation des sols, la biodiversité et la gestion
                    raisonnée de l'eau.
                  </p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Enherbement naturel entre les rangs</li>
                    <li>• Préservation des haies et bosquets</li>
                    <li>• Gestion optimisée de l'irrigation</li>
                    <li>• Compostage des déchets verts</li>
                    <li>• Utilisation de produits phytosanitaires raisonnée</li>
                  </ul>
                </div>
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/biodiversity-vineyard-ecosystem.png"
                    alt="Écosystème viticole biodiversifié"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophie Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display mb-8 text-foreground">Notre Philosophie</h2>
              <blockquote className="text-xl md:text-2xl font-display text-muted-foreground italic mb-8">
                "Un bon vin, c'est avant tout celui qu'on aime"
              </blockquote>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Au Château Lastours, nous décomplexons le visiteur dans son approche du vin. Notre mission est de rendre
                accessible la dégustation et la découverte des vins gaillacois, dans une ambiance chaleureuse et
                conviviale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous croyons que chaque vin a sa place et que chaque palais mérite d'être respecté. C'est cette
                bienveillance qui guide notre accueil et nos conseils.
              </p>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
