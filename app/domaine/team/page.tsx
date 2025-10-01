import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Mail, Phone, Users, Award, Heart } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/winemaking-team-portrait-in-vineyard.png')]" />
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
              La famille de Faramond perpétue la tradition avec Louis, qui représente la nouvelle génération passionnée du domaine
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display mb-4">Louis de Faramond</h3>
                <p className="text-xl text-accent font-medium mb-6">Vigneron & Nouvelle Génération</p>
                <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Louis représente la nouvelle génération de la famille de Faramond. Il fait preuve de courage et 
                    d'abnégation pour le succès que connaît aujourd'hui le château.
                  </p>
                  <p className="text-lg">
                    Louis apporte un regard moderne sur la viticulture tout en respectant les traditions familiales. Il
                    participe activement à la transformation de l'espace de production en espace d'accueil agréable et au
                    développement de l'œnotourisme.
                  </p>
                </div>
                <div className="mt-8">
                  <Button variant="outline" size="lg">
                    <Mail className="w-5 h-5 mr-2" />
                    louis@chateau-lastours.com
                  </Button>
                </div>
              </div>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Jean-Michel Dubois */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display mb-2">Jean-Michel Dubois</h3>
                  <p className="text-accent font-semibold mb-3">Maître de Chai</p>
                  <p className="text-muted-foreground leading-relaxed">
                    30 ans d'expérience au service de la vinification. Jean-Michel supervise l'élaboration de tous nos
                    vins avec une précision d'orfèvre et une passion intacte.
                  </p>
                </div>
              </div>
            </div>

            {/* Sophie Martin */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display mb-2">Sophie Martin</h3>
                  <p className="text-accent font-semibold mb-3">Chef de Culture</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ingénieure agronome spécialisée en viticulture durable, Sophie coordonne les travaux de la vigne et
                    veille à la santé de nos 120 hectares.
                  </p>
                </div>
              </div>
            </div>

            {/* Pierre Rousseau */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display mb-2">Pierre Rousseau</h3>
                  <p className="text-accent font-semibold mb-3">Sommelier</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sommelier diplômé, Pierre accueille nos visiteurs et partage sa passion lors des dégustations et
                    visites du domaine.
                  </p>
                </div>
              </div>
            </div>

            {/* Claire Moreau */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display mb-2">Claire Moreau</h3>
                  <p className="text-accent font-semibold mb-3">Directrice Marketing</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Diplômée d'école de commerce, Claire développe la notoriété du domaine et coordonne nos événements et
                    partenariats.
                  </p>
                </div>
              </div>
            </div>

            {/* Antoine Leroy */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display mb-2">Antoine Leroy</h3>
                  <p className="text-accent font-semibold mb-3">Responsable Export</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Expert en commerce international, Antoine développe la présence de nos vins sur les marchés
                    internationaux avec succès.
                  </p>
                </div>
              </div>
            </div>

            {/* Isabelle Durand */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display mb-2">Isabelle Durand</h3>
                  <p className="text-accent font-semibold mb-3">Responsable Accueil</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionnée d'œnotourisme, Isabelle organise les visites et événements du domaine pour offrir une
                    expérience inoubliable.
                  </p>
                </div>
              </div>
            </div>
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
