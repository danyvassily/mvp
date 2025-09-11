import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, MapPin, Heart, Grape, Users } from "lucide-react"

export default function HistoirePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/chateau-lastours-hero.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display mb-4 text-balance">
            Château Lastours, L'Art du Vin, entre Héritage et Modernité
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground mb-8">
              Entrez dans un univers où chaque pierre raconte une passion séculaire, où le raffinement d'hier s'unit à
              l'audace d'aujourd'hui.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              À deux pas de Lisle-sur-Tarn, lové dans le creux des vallées verdoyantes et caressé par les brumes
              délicates du Tarn, le Château Lastours est bien plus qu'un domaine viticole : c'est une expérience
              immersive, un patrimoine vivant, un écrin de nature et d'excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Un château empreint de noblesse */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src="/historic-french-chateau-with-ancient-stone-walls.png"
                  alt="Château Lastours - Architecture noble"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h2 className="text-4xl font-display">Un château empreint de noblesse et de caractère</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fondé au XVIIe siècle par la famille de Calmels, le château rayonne par son architecture emblématique
                  : façades majestueuses, tours élégantes et fenêtres à meneaux sculptent la silhouette d'une demeure
                  d'exception.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Passer sous son porche, c'est comme franchir un portail vers une autre époque : les façades séculaires
                  portent la mémoire des siècles et l'air porte une odeur subtile de pierres anciennes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Restauré avec passion par Jean André Bourdès à l'aube du XIXe siècle, ce joyau historique incarne
                  l'élégance et la générosité du Sud-Ouest, et offre à chaque visiteur un véritable voyage dans le
                  temps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Un terroir unique */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Grape className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h2 className="text-4xl font-display">Un terroir unique, source d'innovation</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Précurseur dès 1800, Château Lastours s'impose comme pionnier du vignoble tarnais : 12 hectares
                  consacrés à la vigne, des crus déjà salués sur les marchés animés de la région.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Sous l'impulsion de Virginie de Belfortès, le XIXe siècle marque un tournant : agrandissement du
                  vignoble, cuverie en chêne, diversification des cultures qui façonnent un paysage agricole foisonnant
                  et avant-gardiste.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aujourd'hui, chaque cuvée traduit cette quête d'excellence : pentes dorées au soleil, grappes gorgées
                  de lumière et vendanges où se mêlent rires, gestes précis et parfum sucré des raisins fraîchement
                  coupés.
                </p>
              </div>
              <div className="order-1 lg:order-2 aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src="/terroir-landscape-with-vineyard-rows-and-hills.png"
                  alt="Terroir unique du Château Lastours"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Un domaine vibrant */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src="/historic-vineyard-expansion-with-workers.png"
                  alt="Domaine vibrant et animé"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h2 className="text-4xl font-display">Un domaine vibrant, animé par la passion</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Au fil des saisons, le domaine de Lastours s'éveille, fidèle à l'esprit de ses fondateurs. Sur 81
                  hectares de terres préservées, le moulin ancestral tourne encore doucement au gré du vent, et les
                  bâtisses chargées d'histoires semblent poser leur ombre protectrice sur les vignes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Ici, la nature dicte le rythme : chants d'oiseaux au printemps, senteur de bois chauffé au chai
                  l'hiver, éclats dorés sur les coteaux à l'automne.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  De la famille Bourdès à la famille Faramond, une lignée de vignerons dévoués perpétue un engagement :
                  offrir des vins nobles, raffinés et sincères, fruit d'un savoir-faire vivant allié à la modernité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invitez vos sens au voyage */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Invitez vos sens au voyage</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Laissez-vous séduire par nos cuvées d'exception, parcourez les allées inspirantes du domaine et vivez une
              expérience œnotouristique inoubliable :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <Grape className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-heading mb-4">Rencontrez la nature</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Au détour d'une balade dans les vignes, découvrez la beauté de notre terroir et l'harmonie entre
                  tradition et modernité.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-heading mb-4">Partagez un moment privilégié</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Avec nos vignerons autour d'un verre dans le chai, bercés par la douce odeur du bois et du vin en
                  maturation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-heading mb-4">Explorez notre patrimoine</h3>
                <p className="text-muted-foreground leading-relaxed">
                  À travers les pierres, les récits et les souvenirs transmis de génération en génération.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-heading mb-4">Éveillez vos papilles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lors d'ateliers de dégustation où accords et histoires se mêlent dans une symphonie de saveurs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ici, chaque visite est une promesse d'émotions. Nul besoin de presser le temps : on s'y pose, on respire,
              on savoure.
              <br />
              Et derrière chaque millésime, il y a des visages, des mains et des histoires.
            </p>
            <p className="text-xl font-light text-muted-foreground mb-8">
              Découvrez celles et ceux qui insufflent chaque jour leur passion au Château Lastours… et peut-être
              écrirez-vous bientôt votre propre page dans notre histoire.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Découvrez Notre Héritage</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Venez nous rencontrer et laissez-vous porter par la magie de ce lieu d'exception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/reservation">
                  Réserver une Visite
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/domaine/team">Rencontrer l'Équipe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
