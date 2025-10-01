import { Button } from "@/components/ui/button"
import { SectionHero } from "@/components/common/SectionHero"
import { OptimizedImage } from "@/components/common/OptimizedImage"
import { ScrollAnimation } from "@/components/gsap/ScrollAnimations"
import Link from "next/link"
import Image from "next/image"
import { 
  MapPin, 
  Users, 
  Calendar, 
  Music, 
  Wine, 
  Utensils, 
  Phone, 
  Mail,
  CheckCircle,
  ArrowRight
} from "lucide-react"

export default function OrganiserEvenementPage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionHero
        title="Événements d'Exception au Château Lastours"
        subtitle="L'Art d'Organiser au Cœur d'un Domaine Viticole Unique"
        imageSrc="/Page/Page organiser votre événement/chateau-lastours-panoramic-view.jpg"
        height="xl"
        className="mt-20"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="mailto:contact@chateau-lastours.com">
              Demandez un devis personnalisé
              <Mail className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black">
            <Link href="tel:+33563570709">
              <Phone className="mr-2 w-5 h-5" />
              05 63 57 07 09
            </Link>
          </Button>
        </div>
      </SectionHero>

      {/* Introduction */}
      <ScrollAnimation animation="fadeIn">
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-xl leading-relaxed text-muted-foreground text-pretty max-w-4xl mx-auto">
                  Situé dans la prestigieuse région viticole de Gaillac, le Château Lastours vous invite à transformer 
                  vos événements en souvenirs inoubliables, mêlant charme, raffinement et authenticité. Que vous 
                  planifiiez un mariage, un séminaire d'entreprise ou une soirée d'été, notre domaine conjugue 
                  élégance à la française et son accueil chaleureux.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Trois Espaces d'Exception */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Trois Espaces d'Exception</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Adaptés à vos besoins, nos espaces offrent un cadre unique pour tous vos événements
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* La Tente Nomade */}
            <ScrollAnimation animation="fadeIn" index={0}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-foreground">La Tente Nomade</h3>
                    <p className="text-accent font-medium">Un écrin champêtre de 375m²</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Au cœur des jardins à la française et des vignes centenaires, cet espace éphémère, 
                  élégamment éclairé et sonorisé, offre une ambiance bucolique et sophistiquée. 
                  Parfait pour des mariages romantiques, des team building inspirants ou des soirées 
                  estivales conviviales baignées de lumière naturelle.
                </p>
              </div>
            </ScrollAnimation>

            {/* Salle de Réception */}
            <ScrollAnimation animation="fadeIn" index={1}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
                    <Wine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-foreground">La Salle de Réception</h3>
                    <p className="text-accent font-medium">Charme historique et confort moderne</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Située dans l'ancien chai à barriques, cette salle climatisée de 100m² allie charme 
                  intemporel et élégance contemporaine. Idéale pour galas, réceptions privées et 
                  cocktails professionnels, avec un service sur mesure.
                </p>
              </div>
            </ScrollAnimation>

            {/* Salle de Réunion */}
            <ScrollAnimation animation="fadeIn" index={2}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display text-foreground">La Salle de Réunion</h3>
                    <p className="text-accent font-medium">Un havre lumineux pour la créativité</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  À l'étage, équipée d'un vidéoprojecteur et d'un éclairage modulable, cet espace 
                  raffiné invite à la concentration et à la collaboration, parfait pour séminaires, 
                  conférences et ateliers.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Accompagnement Personnalisé */}
      <ScrollAnimation animation="fadeIn">
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-display mb-6">Un Accompagnement Personnalisé</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Au Château Lastours, chaque événement est une création unique. Nos expertes, 
                    <strong className="text-foreground"> Mathilde et Fanny</strong>, anticipent vos besoins pour orchestrer 
                    une expérience alliant excellence, chaleur et authenticité.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Invitez vos convives à s'immerger dans l'âme de notre vignoble et à partager des moments 
                    d'exception au cœur du Sud-Ouest.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-accent">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Service sur-mesure</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Expertise locale</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Accompagnement complet</span>
                    </div>
                  </div>
                </div>
                <OptimizedImage
                  src="/Page/Page organiser votre événement/accompagnement-personnalise.jpg"
                  alt="Accompagnement personnalisé Château Lastours"
                  fill
                  containerClassName="h-96 lg:h-[500px] rounded-lg shadow-2xl"
                  className="hover:scale-105 transition-transform duration-700"
                  aspectRatio="landscape"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Activités Œnotouristiques */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Activités Œnotouristiques Uniques</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Enchantez vos invités avec des expériences immersives au cœur de notre vignoble
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollAnimation animation="slideUp" index={0}>
              <div className="text-center h-full p-8 bg-background rounded-lg border hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display mb-4">Yoga & Vins</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Éveillez corps et esprit dans une expérience unique alliant yoga et dégustation.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.gaillacvisit.fr/activités-tarn/yoga-et-vin/">
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" index={1}>
              <div className="text-center h-full p-8 bg-background rounded-lg border hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display mb-4">Escape Game Challenge Vigneron</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Une aventure immersive pour découvrir les secrets du vignoble.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.gaillacvisit.fr/escape-game/">
                    Découvrez
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" index={2}>
              <div className="text-center h-full p-8 bg-background rounded-lg border hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Wine className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display mb-4">Atelier Œnologique</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Une exploration guidée de l'art de la dégustation, menée par des œnologues passionnés.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.gaillacvisit.fr/atelier-oenologique/">
                    Plus d'informations
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Apéro-concerts d'été */}
      <ScrollAnimation animation="fadeIn">
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display mb-6">Apéro-concerts d'Été</h2>
                <h3 className="text-2xl font-display text-accent mb-8">Célébrez avec Élégance</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="order-2 lg:order-1 space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Chaque été, le domaine s'anime pour deux soirées festives mêlant musique live, 
                    gastronomie locale et vins d'exception.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Réservez vos dates pour <strong className="text-foreground">juin [à confirmer]</strong> et 
                    <strong className="text-foreground"> août [à confirmer] 2025</strong> et partagez des moments 
                    authentiques dans un cadre enchanteur.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-accent">
                      <Music className="w-5 h-5" />
                      <span className="text-sm font-medium">Musique live</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent">
                      <Utensils className="w-5 h-5" />
                      <span className="text-sm font-medium">Gastronomie locale</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent">
                      <Wine className="w-5 h-5" />
                      <span className="text-sm font-medium">Vins d'exception</span>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <OptimizedImage
                    src="/Page/Page organiser votre événement/apero-concerts-ete.jpg"
                    alt="Apéro-concerts d'été au Château Lastours"
                    fill
                    containerClassName="h-96 lg:h-[500px] rounded-lg shadow-2xl"
                    className="hover:scale-105 transition-transform duration-700"
                    aspectRatio="landscape"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact & CTA */}
      <ScrollAnimation animation="scale">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/Page/Page organiser votre événement/chateau-lastours-contact-background.jpg"
              alt="Contactez Château Lastours"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display mb-6">Contactez-nous pour Créer votre Événement d'Exception</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Prêt à organiser un événement inoubliable ? Contactez-nous dès maintenant pour un devis personnalisé.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
                  <Link href="mailto:contact@chateau-lastours.com">
                    <Mail className="mr-2 w-6 h-6" />
                    contact@chateau-lastours.com
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                  <Link href="tel:+33563570709">
                    <Phone className="mr-2 w-6 h-6" />
                    +33 (0)5 63 57 07 09
                  </Link>
                </Button>
              </div>

              <div className="text-center">
                <p className="text-lg opacity-80 mb-4">
                  <Link 
                    href="https://www.gaillacvisit.fr/contact-renseignements/" 
                    className="hover:text-accent transition-colors underline"
                  >
                    Contactez-nous pour une assistance personnalisée et un devis adapté
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

    </div>
  )
}
