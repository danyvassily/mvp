import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/winemaking-team-portrait-in-vineyard.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display mb-4 text-balance">Notre Équipe</h1>
          <p className="text-xl md:text-2xl text-pretty opacity-90">Passion et expertise au service de l'excellence</p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Direction</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              La famille de Faramond perpétue la tradition avec Hubert et son fils Louis, unis par la passion du vin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-[4/5] bg-muted">
                <img
                  src="/marie-lastours-portrait-winemaker.png"
                  alt="Hubert de Faramond"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-display mb-2">Hubert de Faramond</h3>
                <p className="text-accent font-medium mb-4">Propriétaire & Vigneron</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Avec son frère Pierric, Hubert a donné de l'élan au développement du château durant les années 1980,
                  multipliant la taille de l'exploitation par 2. Ils ont pris le risque d'embouteiller les bouteilles au
                  château et de développer la vente au chai.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Après la disparition de Pierric en 2009, Hubert continue de diriger le domaine avec passion,
                  perpétuant l'héritage familial tout en développant la présence internationale du château.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    contact@chateau-lastours.com
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-[4/5] bg-muted">
                <img
                  src="/thomas-lastours-portrait-vineyard-manager.png"
                  alt="Louis de Faramond"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-display mb-2">Louis de Faramond</h3>
                <p className="text-accent font-medium mb-4">Vigneron & Nouvelle Génération</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Rejoint par son père Hubert en 2013, Louis représente la nouvelle génération de la famille de
                  Faramond. Ensemble, ils font preuve de courage et d'abnégation pour le succès que connaît aujourd'hui
                  le château.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Louis apporte un regard moderne sur la viticulture tout en respectant les traditions familiales. Il
                  participe activement à la transformation de l'espace de production en espace d'accueil agréable et au
                  développement de l'œnotourisme.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    louis@chateau-lastours.com
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">L'Équipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Des professionnels passionnés qui contribuent chaque jour à l'excellence de nos vins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src="/jean-michel-cellar-master-portrait.png"
                  alt="Jean-Michel Dubois"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading mb-2">Jean-Michel Dubois</h3>
                <p className="text-accent font-medium mb-3">Maître de Chai</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  30 ans d'expérience au service de la vinification. Jean-Michel supervise l'élaboration de tous nos
                  vins avec une précision d'orfèvre et une passion intacte.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src="/sophie-vineyard-manager-portrait.png"
                  alt="Sophie Martin"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading mb-2">Sophie Martin</h3>
                <p className="text-accent font-medium mb-3">Chef de Culture</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ingénieure agronome spécialisée en viticulture durable, Sophie coordonne les travaux de la vigne et
                  veille à la santé de nos 120 hectares.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src="/pierre-sommelier-tasting-room-portrait.png"
                  alt="Pierre Rousseau"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading mb-2">Pierre Rousseau</h3>
                <p className="text-accent font-medium mb-3">Sommelier</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sommelier diplômé, Pierre accueille nos visiteurs et partage sa passion lors des dégustations et
                  visites du domaine.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src="/claire-marketing-director-portrait.png"
                  alt="Claire Moreau"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading mb-2">Claire Moreau</h3>
                <p className="text-accent font-medium mb-3">Directrice Marketing</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Diplômée d'école de commerce, Claire développe la notoriété du domaine et coordonne nos événements et
                  partenariats.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src="/antoine-export-manager-portrait.png"
                  alt="Antoine Leroy"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading mb-2">Antoine Leroy</h3>
                <p className="text-accent font-medium mb-3">Responsable Export</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Expert en commerce international, Antoine développe la présence de nos vins sur les marchés
                  internationaux avec succès.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src="/isabelle-hospitality-manager-portrait.png"
                  alt="Isabelle Durand"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading mb-2">Isabelle Durand</h3>
                <p className="text-accent font-medium mb-3">Responsable Accueil</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Passionnée d'œnotourisme, Isabelle organise les visites et événements du domaine pour offrir une
                  expérience inoubliable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Notre Philosophie</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              L'accueil simple et chaleureux du Château Lastours, marqué par la convivialité
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-display text-center italic text-balance mb-8">
              "Notre accueil simple et chaleureux est avant tout marqué par la convivialité et la volonté de concilier
              modernité et tradition dans ce lieu riche d'histoire."
            </blockquote>
            <cite className="block text-center text-lg text-muted-foreground">— Famille de Faramond</cite>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Rencontrez Notre Équipe</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Venez découvrir notre passion et notre savoir-faire lors d'une visite personnalisée du domaine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/reservation">
                  Réserver une Visite
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 w-5 h-5" />
                +33 4 67 89 12 34
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
