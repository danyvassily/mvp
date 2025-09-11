import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Grape, Droplets, BarChart3, Wine, Clock, Beaker, Bold as Bottle, Target } from "lucide-react"

export default function ChaisPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/wine-cellar-with-barrels-and-bottles.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display mb-4 text-balance">Les Chais</h1>
          <p className="text-xl md:text-2xl text-pretty opacity-90">De la Vigne à la Bouteille</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-8">L'Art de la Vinification</h2>
            <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
              Plongez dans le voyage captivant de nos raisins, qui, de trésors viticoles, deviennent l'expression en
              bouteille de notre passion et de notre héritage. Au Château Lastours, chaque étape de notre travail de
              vinification révèle une histoire de dévouement, de respect de la nature et de la magie qui transforme le
              fruit en un grand vin. Bienvenue au cœur du vignoble et de la cave, là où tradition et art se rencontrent.
            </p>
          </div>
        </div>
      </section>

      {/* Étape 1 - Le Pressurage */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/wine-pressing-grapes-traditional-press.png"
                alt="Pressurage des raisins"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <Grape className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-display">Le Pressurage : Tout commence ici</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dès leur arrivée, les raisins fraîchement vendangés sont amenés au pressoir. Cette étape délicate libère
                les premiers jus de nos cuvées blanches et rosées. Ces jus, que l'on appelle « moûts », sont ensuite
                clarifiés par débourbage, puis transférés dans des cuves en béton ou en inox. C'est le prélude à toutes
                les grandes cuvées du domaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Étape 2 - La Fermentation Alcoolique */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src="/wine-fermentation-tanks-stainless-steel.png"
                  alt="Fermentation alcoolique"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <Beaker className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-display">La Fermentation Alcoolique : Quand le sucre devient vin</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                La fermentation alcoolique débute : les levures transforment naturellement le sucre du moût en alcool.
                Ici, chaque détail compte ! Nous veillons scrupuleusement à la température pour préserver la fraîcheur
                et permettre aux levures de travailler dans les meilleures conditions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pour nos vins rouges, un savoir-faire unique : les remontages. Cette technique consiste à faire circuler
                le moût du bas vers le haut de la cuve, favorisant ainsi l'extraction des tanins, de la couleur et des
                arômes. S'ensuit une période de macération, surveillée et dégustée quotidiennement, pour offrir
                équilibre et caractère à chaque cuvée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Étape 3 - La Fermentation Malo-lactique */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/wine-malolactic-fermentation-process.png"
                alt="Fermentation malo-lactique"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-display">La Fermentation Malo-lactique : Douceur et stabilité</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Après la fermentation alcoolique, une seconde transformation s'opère grâce aux bactéries naturelles.
                L'acide malique se convertit en acide lactique, adoucissant le vin tout en stabilisant sa structure.
                Cette fermentation, incontournable pour nos vins rouges, est aussi réalisée sur certaines cuvées de
                blanc pour en révéler pleinement la personnalité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Étape 4 - Écoulage et Décuvage */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src="/wine-pressing-separation-process.png"
                  alt="Écoulage et décuvage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <Droplets className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-display">Écoulage et Décuvage : Sélection et précision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Après la macération, vient l'écoulage : nous séparons le « vin de goutte », synonyme de finesse, du «
                vin de presse », plus puissant. Les marcs issus de cette opération sont délicatement pressés afin
                d'extraire chaque goutte de jus. Chacun de ces jus sera traité selon ses qualités pour composer nos
                meilleures cuvées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Étapes 5-8 en grille */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">L'Affinage et la Finalisation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Les dernières étapes qui transforment nos vins en chefs-d'œuvre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <img
                  src="/wine-barrel-aging-french-oak.png"
                  alt="Élevage en barrique"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                    <Wine className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-display">L'Élevage en Barrique</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Nos vins poursuivent leur évolution en barrique de chêne français, pièce maîtresse pour le
                  développement des arômes et l'affinage de la texture. L'entonnage, entre novembre et décembre, apporte
                  rondeur, complexité et profondeur à chaque cru, grâce à une multitude de transformations naturelles.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <img src="/wine-blending-tasting-room.png" alt="Assemblage" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                    <Target className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-display">L'Assemblage</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  L'assemblage est le cœur de notre créativité. Nous sélectionnons avec soin les différentes parcelles
                  et cépages avant de les déguster un à un. C'est par le jeu subtil des assemblages que naissent les
                  grandes cuvées, reflets authentiques de notre terroir et de nos ambitions.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <img
                  src="/wine-bottling-line-estate.png"
                  alt="Mise en bouteille"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                    <Bottle className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-display">La Mise en Bouteille</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Toutes les étapes mènent ici ! Nous assurons nous-mêmes la mise en bouteille, sur la propriété, sous
                  atmosphère neutre. Cette attention préserve toute la fraîcheur aromatique de nos vins et garantit leur
                  qualité jusqu'à votre table.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <img src="/wine-barrel-maintenance-cellar.png" alt="Ouillage" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                    <Clock className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-display">L'Ouillage</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Parmi nos gestes quotidiens en cave, l'ouillage tient une place centrale : il s'agit de compléter le
                  niveau des barriques pour compenser les pertes naturelles dues à l'évaporation et éviter toute
                  oxydation. Ce soin méticuleux préserve l'équilibre et la finesse de nos vins durant toute la phase
                  d'élevage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Le saviez-vous */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-8">Le saviez-vous ?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              De la récolte à l'assemblage, chaque opération conjugue tradition et innovation. Notre équipe veille, jour
              après jour, à l'excellence et à l'authenticité de chaque bouteille, dans le respect de l'environnement et
              des valeurs du domaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/reservation">
                  Visiter le Domaine
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/les-vins">Découvrir nos Cuvées</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation vers la suite */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">Envie d'en savoir plus ou de découvrir nos cuvées ?</p>
            <Button asChild>
              <Link href="/savoir-faire/conservation">
                Découvrir la Conservation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
