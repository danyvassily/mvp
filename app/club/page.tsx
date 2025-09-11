import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Crown, Gift, Calendar, Truck, Users, Wine } from "lucide-react"

export default function ClubPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/exclusive-wine-club-tasting-room-luxury.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display mb-4 text-balance">Club Lastours</h1>
          <p className="text-xl md:text-2xl text-pretty opacity-90">L'excellence réservée aux connaisseurs</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-8">Rejoignez l'Excellence</h2>
            <p className="text-xl leading-relaxed text-muted-foreground text-pretty mb-12">
              Le Club Lastours est bien plus qu'un club de vin : c'est une communauté exclusive de passionnés qui
              partagent notre amour pour l'excellence viticole. Nos membres bénéficient d'un accès privilégié à nos
              cuvées les plus rares, d'événements exclusifs et d'une expérience personnalisée unique.
            </p>
            <Button size="lg" asChild>
              <Link href="/club/inscription">
                Devenir Membre
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Nos Formules</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choisissez la formule qui correspond à votre passion pour nos vins d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Découverte */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wine className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display mb-2">Découverte</h3>
                  <p className="text-muted-foreground mb-4">Pour les amateurs curieux</p>
                  <div className="text-3xl font-display text-accent mb-2">89€</div>
                  <p className="text-sm text-muted-foreground">par trimestre</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">6 bouteilles par trimestre</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Sélection de nos vins classiques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Fiches de dégustation détaillées</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Newsletter exclusive</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">10% de réduction sur les achats</span>
                  </li>
                </ul>

                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/club/inscription?plan=decouverte">Choisir cette formule</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Prestige */}
            <Card className="relative overflow-hidden border-accent">
              <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2">
                <Badge className="bg-accent-foreground text-accent">Recommandé</Badge>
              </div>
              <CardContent className="p-8 pt-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-display mb-2">Prestige</h3>
                  <p className="text-muted-foreground mb-4">Pour les connaisseurs exigeants</p>
                  <div className="text-3xl font-display text-accent mb-2">189€</div>
                  <p className="text-sm text-muted-foreground">par trimestre</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">12 bouteilles par trimestre</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Cuvées Prestige et Méthode</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Accès aux événements exclusifs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Visite privée du domaine</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">15% de réduction sur les achats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Livraison gratuite</span>
                  </li>
                </ul>

                <Button className="w-full" asChild>
                  <Link href="/club/inscription?plan=prestige">Choisir cette formule</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Collection */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-display mb-2">Collection</h3>
                  <p className="text-muted-foreground mb-4">Pour les collectionneurs passionnés</p>
                  <div className="text-3xl font-display text-accent mb-2">389€</div>
                  <p className="text-sm text-muted-foreground">par trimestre</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">18 bouteilles par trimestre</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Cuvées rares et millésimes anciens</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Accès prioritaire aux nouveautés</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Dégustation privée avec l'œnologue</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">20% de réduction sur les achats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Service concierge personnalisé</span>
                  </li>
                </ul>

                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/club/inscription?plan=collection">Choisir cette formule</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Avantages Exclusifs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Découvrez tous les privilèges réservés aux membres du Club Lastours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wine className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Sélections Exclusives</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Accédez en priorité à nos cuvées limitées et millésimes rares, souvent réservés uniquement aux membres
                  du club.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Événements Privés</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Participez à des dégustations exclusives, rencontres avec l'œnologue et événements spéciaux réservés
                  aux membres.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Livraison Privilégiée</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bénéficiez de conditions de livraison préférentielles et d'un emballage soigné pour vos commandes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Communauté</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rejoignez une communauté de passionnés et échangez avec d'autres amateurs de vins d'exception.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Cadeaux Personnalisés</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recevez des cadeaux exclusifs et des surprises personnalisées tout au long de l'année.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Crown className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Service Concierge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Profitez d'un service personnalisé pour vos demandes spéciales et conseils œnologiques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Témoignages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Découvrez ce que nos membres pensent de leur expérience Club Lastours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <blockquote className="text-lg italic mb-6 leading-relaxed">
                  "Membre depuis 3 ans, je suis toujours émerveillé par la qualité des sélections. Chaque envoi est une
                  découverte et les événements privés sont exceptionnels."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="font-heading">JM</span>
                  </div>
                  <div>
                    <p className="font-medium">Jean-Marc Dubois</p>
                    <p className="text-sm text-muted-foreground">Membre Prestige</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <blockquote className="text-lg italic mb-6 leading-relaxed">
                  "Le Club Lastours m'a fait découvrir des vins extraordinaires que je n'aurais jamais trouvés ailleurs.
                  Le service est impeccable."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="font-heading">SM</span>
                  </div>
                  <div>
                    <p className="font-medium">Sophie Martin</p>
                    <p className="text-sm text-muted-foreground">Membre Collection</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <blockquote className="text-lg italic mb-6 leading-relaxed">
                  "Une expérience unique qui allie passion et excellence. Les dégustations privées sont des moments
                  magiques."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="font-heading">PL</span>
                  </div>
                  <div>
                    <p className="font-medium">Pierre Leroy</p>
                    <p className="text-sm text-muted-foreground">Membre Prestige</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Rejoignez-nous Aujourd'hui</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Découvrez l'excellence de nos vins et rejoignez une communauté de passionnés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/club/inscription">
                  Devenir Membre
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/reservation">Réserver une Dégustation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
