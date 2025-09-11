import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Users, Wine, Music, Utensils } from "lucide-react"
import { getAllEvents } from "@/lib/events-data"

export default function EvenementsPage() {
  const events = getAllEvents()

  const getEventIcon = (type: string) => {
    switch (type) {
      case "Festival":
        return Music
      case "Dégustation":
        return Wine
      case "Formation":
        return Users
      case "Dîner romantique":
        return Utensils
      case "Événement familial":
        return Users
      default:
        return Calendar
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/wine-events-celebration-vineyard-gathering.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display mb-4 text-balance">Événements</h1>
          <p className="text-xl md:text-2xl text-pretty opacity-90">Partagez des moments d'exception au domaine</p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Événements à Venir</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Découvrez notre calendrier d'événements exclusifs et partagez des moments inoubliables
            </p>
          </div>

          <div className="space-y-8">
            {events
              .filter((event) => event.featured)
              .map((event) => {
                const IconComponent = getEventIcon(event.type)
                return (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="aspect-[4/3] lg:aspect-auto bg-muted">
                        <img
                          src={event.image || "/wine-tasting-event.png"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="secondary">{event.type}</Badge>
                          {event.featured && (
                            <Badge className="bg-accent text-accent-foreground">À ne pas manquer</Badge>
                          )}
                        </div>

                        <h3 className="text-3xl font-display mb-4">
                          <Link href={`/evenements/${event.id}`} className="hover:text-accent">
                            {event.title}
                          </Link>
                        </h3>

                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(event.date).toLocaleDateString("fr-FR", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {event.spots}
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-display text-accent">{event.price}</div>
                          <Button asChild>
                            <Link href="/reservation">
                              Réserver
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Tous nos Événements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
              const IconComponent = getEventIcon(event.type)
              return (
                <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] bg-muted">
                    <img
                      src={event.image || "/wine-tasting-event.png"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        <IconComponent className="w-3 h-3 mr-1" />
                        {event.type}
                      </Badge>
                      {event.featured && <Badge className="text-xs bg-accent text-accent-foreground">Featured</Badge>}
                    </div>

                    <h3 className="text-xl font-heading mb-3">
                      <Link href={`/evenements/${event.id}`} className="hover:text-accent">
                        {event.title}
                      </Link>
                    </h3>

                    <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString("fr-FR")}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {event.spots}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-lg font-heading text-accent">{event.price}</div>
                      <Button size="sm" asChild>
                        <Link href="/reservation">Réserver</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Événements Privés</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Organisez votre événement privé dans le cadre exceptionnel de notre domaine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Séminaires d'Entreprise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Organisez vos séminaires et team building dans un cadre unique avec dégustation et activités sur
                  mesure.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Utensils className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Mariages & Réceptions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Célébrez les moments les plus importants de votre vie dans la magie de nos vignobles et chais
                  historiques.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wine className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Dégustations Privées</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Organisez des dégustations privées pour vos invités avec l'accompagnement de nos experts.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/reservation">
                Demander un Devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
