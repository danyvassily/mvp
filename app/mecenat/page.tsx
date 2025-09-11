import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Users, Award, Handshake, ArrowRight } from "lucide-react"

export default function MecenatPage() {
  const partnerships = [
    {
      title: "Mécénat Culturel",
      description: "Soutenez les arts et la culture locale en partenariat avec notre domaine",
      icon: Award,
      benefits: ["Visibilité lors d'événements culturels", "Dégustations privées", "Réductions sur nos vins"],
    },
    {
      title: "Mécénat Sportif",
      description: "Accompagnez les talents sportifs de notre région",
      icon: Users,
      benefits: ["Partenariat avec clubs locaux", "Événements sportifs au domaine", "Networking privilégié"],
    },
    {
      title: "Mécénat Environnemental",
      description: "Participez à nos initiatives de développement durable",
      icon: Heart,
      benefits: ["Projets de biodiversité", "Certification HVE", "Communication RSE"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/mecenat-partnership-wine-estate.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-display mb-6 text-balance">Mécénat & Partenariats</h1>
            <p className="text-xl md:text-2xl text-pretty opacity-90">
              Ensemble, cultivons les valeurs qui nous rassemblent
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display mb-8 text-foreground">Notre Engagement</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Fidèles à nos valeurs de <strong>Générosité, Authenticité, Bienveillance et Transmission</strong>, nous
                nous engageons aux côtés d'acteurs qui partagent notre vision d'un monde plus solidaire et durable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le Château Lastours soutient des initiatives locales et nationales dans les domaines culturel, sportif
                et environnemental, créant des partenariats durables et bénéfiques pour tous.
              </p>
            </div>
          </div>
        </section>

        {/* Types de Mécénat */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">Nos Domaines d'Action</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerships.map((partnership, index) => {
                const IconComponent = partnership.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="text-xl font-display mb-4 text-foreground">{partnership.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{partnership.description}</p>
                      <div className="space-y-2">
                        {partnership.benefits.map((benefit, idx) => (
                          <div key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                            <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Partenaires Actuels */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">Nos Partenaires</h2>
              <p className="text-lg text-muted-foreground">Ils nous font confiance et partagent nos valeurs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Festival Bulle de Jazz", type: "Culturel", year: "Depuis 2021" },
                { name: "Club Rugby Gaillac", type: "Sportif", year: "Depuis 2019" },
                { name: "Association Vignoble Durable", type: "Environnemental", year: "Depuis 2020" },
                { name: "Conservatoire de Musique", type: "Culturel", year: "Depuis 2022" },
              ].map((partner, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h4 className="font-display mb-2">{partner.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{partner.type}</p>
                    <p className="text-xs text-accent">{partner.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages Partenaires */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">Avantages Partenaires</h2>
                <p className="text-lg text-muted-foreground">
                  Découvrez les bénéfices d'un partenariat avec le Château Lastours
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Handshake className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display mb-2">Visibilité Premium</h4>
                      <p className="text-muted-foreground text-sm">
                        Logo sur nos supports de communication, présence lors de nos événements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display mb-2">Networking Privilégié</h4>
                      <p className="text-muted-foreground text-sm">
                        Accès à notre réseau de partenaires et clients privilégiés
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display mb-2">Événements Exclusifs</h4>
                      <p className="text-muted-foreground text-sm">
                        Invitations aux dégustations privées et lancements de cuvées
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display mb-2">Conditions Préférentielles</h4>
                      <p className="text-muted-foreground text-sm">Tarifs privilégiés sur nos vins et prestations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Handshake className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display mb-2">Communication Conjointe</h4>
                      <p className="text-muted-foreground text-sm">
                        Campagnes de communication partagées et co-branding
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display mb-2">Reconnaissance</h4>
                      <p className="text-muted-foreground text-sm">Mise en avant de votre engagement RSE et local</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">Rejoignez-nous</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vous partagez nos valeurs et souhaitez développer un partenariat durable ? Contactez-nous pour étudier
                ensemble les possibilités de collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Nous Contacter
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/evenements/organiser">Organiser un Événement</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
