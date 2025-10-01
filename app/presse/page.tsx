import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PressePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/wine-estate-owner-portrait.png')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-display mb-4">Espace Presse</h1>
            <p className="text-xl opacity-90">Logos, kit média et ressources officielles</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Logos */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-display">Logos officiels</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                    <div className="relative aspect-square bg-muted rounded">
                      <Image src="/PHOTOS-WEB-LASTOURS/LOGO/logo-chateau-lastours.jpg" alt="Logo Château Lastours" fill className="object-contain p-4" />
                    </div>
                  </div>
                  <div>
                    <Button asChild variant="outline">
                      <Link href="/PHOTOS-WEB-LASTOURS/LOGO/logo-chateau-lastours.jpg" download>
                        Télécharger le logo (JPG)
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Kit média */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-display">Kit média</h2>
                  <p className="text-muted-foreground">Présentation du domaine, historique, fiches techniques et visuels clefs.</p>
                  <Button variant="outline" disabled>
                    Kit média (à venir)
                  </Button>
                </CardContent>
              </Card>

              {/* Visuels */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-display">Visuels libres de droit (presse)</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      "/french-wine-chateau-evening-event.png",
                      "/gamme-confidentielle.jpg",
                      "/gamme-domeni.jpg",
                    ].map((src) => (
                      <div key={src} className="relative aspect-[4/3] bg-muted rounded overflow-hidden">
                        <Image src={src} alt="Visuel presse" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Presse */}
            <aside className="space-y-4">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-display">Contact Presse</h3>
                  <p className="text-muted-foreground">
                    Email: presse@chateaux-lastours.fr
                    <br />
                    Téléphone: +33 5 63 56 32 75
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}

