import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GastronomiePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/gastronomie-wine-pairing-elegant.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-display mb-6 text-balance">Gastronomie & Accords</h1>
            <p className="text-xl md:text-2xl text-pretty opacity-90">
              L'art de marier nos vins gaillacois avec la gastronomie du terroir
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display mb-8 text-foreground">
                Des Cépages Gaillacois à Découvrir
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nos vins révèlent toute leur personnalité lorsqu'ils sont associés aux saveurs authentiques de notre
                région. Découvrez nos suggestions d'accords pour sublimer chaque dégustation dans une ambiance
                chaleureuse et conviviale.
              </p>
            </div>
          </div>
        </section>

        {/* Accords par Type de Vin */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display mb-12 text-center text-foreground">
              Nos Accords Mets & Vins
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Vins Blancs */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-muted">
                  <img
                    src="/white-wine-seafood-pairing.png"
                    alt="Accords vins blancs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display mb-4 text-foreground">Vins Blancs</h3>
                  <p className="text-muted-foreground mb-4">
                    Nos blancs secs révèlent leur fraîcheur et leur minéralité avec :
                  </p>
                  <ul className="text-muted-foreground space-y-2 mb-6">
                    <li>• Poissons grillés et fruits de mer</li>
                    <li>• Fromages de chèvre du terroir</li>
                    <li>• Cuisine asiatique épicée</li>
                    <li>• Apéritifs et tapas</li>
                  </ul>
                  <Button variant="outline" asChild>
                    <Link href="/les-vins?type=blanc">Découvrir nos Blancs</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Vins Rouges */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-muted">
                  <img
                    src="/red-wine-meat-pairing.png"
                    alt="Accords vins rouges"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display mb-4 text-foreground">Vins Rouges</h3>
                  <p className="text-muted-foreground mb-4">Nos rouges s'épanouissent avec les saveurs généreuses :</p>
                  <ul className="text-muted-foreground space-y-2 mb-6">
                    <li>• Viandes grillées et gibier</li>
                    <li>• Cassoulet et plats mijotés</li>
                    <li>• Fromages affinés</li>
                    <li>• Charcuterie artisanale</li>
                  </ul>
                  <Button variant="outline" asChild>
                    <Link href="/les-vins?type=rouge">Découvrir nos Rouges</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Vins Rosés */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-muted">
                  <img
                    src="/rose-wine-summer-pairing.png"
                    alt="Accords vins rosés"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display mb-4 text-foreground">Vins Rosés</h3>
                  <p className="text-muted-foreground mb-4">Nos rosés accompagnent parfaitement :</p>
                  <ul className="text-muted-foreground space-y-2 mb-6">
                    <li>• Salades estivales et légumes grillés</li>
                    <li>• Cuisine méditerranéenne</li>
                    <li>• Barbecues et grillades</li>
                    <li>• Desserts aux fruits rouges</li>
                  </ul>
                  <Button variant="outline" asChild>
                    <Link href="/les-vins?type=rose">Découvrir nos Rosés</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Méthode Gaillacoise */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-muted">
                  <img
                    src="/sparkling-wine-celebration-pairing.png"
                    alt="Accords méthode gaillacoise"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display mb-4 text-foreground">Méthode Gaillacoise</h3>
                  <p className="text-muted-foreground mb-4">Nos bulles subliment les moments festifs :</p>
                  <ul className="text-muted-foreground space-y-2 mb-6">
                    <li>• Apéritifs et amuse-bouches</li>
                    <li>• Poissons en sauce</li>
                    <li>• Desserts aux fruits</li>
                    <li>• Célébrations et toasts</li>
                  </ul>
                  <Button variant="outline" asChild>
                    <Link href="/les-vins?type=bulles">Découvrir nos Bulles</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Terroir Gastronomique */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-12 text-center text-foreground">
                Le Terroir Gaillacois
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-display mb-6 text-foreground">13 Cépages, 7 Vins</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Le vignoble gaillacois est unique par sa diversité de cépages autochtones. Cette richesse
                    ampélographique nous permet de créer des vins aux personnalités distinctes, parfaitement adaptés à
                    la gastronomie locale.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Du Mauzac perlé aux rouges de Duras et Braucol, chaque cépage apporte sa signature gustative pour
                    des accords authentiques et surprenants.
                  </p>
                </div>
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/gaillac-grape-varieties.png"
                    alt="Cépages gaillacois"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">Découvrez nos Accords</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Réservez une dégustation commentée pour explorer nos accords mets et vins dans l'ambiance chaleureuse de
                notre domaine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/reservation">Réserver une Dégustation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/les-vins">Découvrir nos Vins</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
