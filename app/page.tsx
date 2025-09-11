"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Award, Grape, MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import { getFeaturedWines } from "@/lib/wines-data"
import { HomeWineCard } from "@/components/home-wine-card"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({
    collections: false,
    philosophy: false,
    domain: false,
    awards: false,
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target.getAttribute("data-section")
            if (target) {
              setIsVisible((prev) => ({ ...prev, [target]: true }))
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('/chateau-lastours-hero.jpg')`,
            transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
          }}
        />
        <div className="absolute inset-0 bg-black/40 opacity-75" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Châteaux Lastours
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            L'excellence viticole du sud de la France depuis 1847
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <Button size="lg" asChild className="group hover:scale-105 transition-all duration-300">
              <Link href="/les-vins">
                Découvrir nos Vins
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/reservation">Réserver une Visite</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Wine Collections */}
      <section className="py-24 bg-zinc-200" data-section="collections">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.collections ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">Nos Collections</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Quatre gammes d'exception qui révèlent la richesse et la diversité de notre terroir unique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "/gamme-poussin.jpg",
                title: "Gamme Poussin",
                link: "/les-vins?collection=poussin",
                delay: "delay-100",
              },
              {
                image: "/gamme-confidentielle.jpg",
                title: "Gamme Confidentielle",
                link: "/les-vins?collection=confidentielle",
                delay: "delay-200",
              },
              {
                image: "/gamme-methode.jpg",
                title: "Gamme Méthode",
                link: "/les-vins?collection=methode",
                delay: "delay-300",
              },
              {
                image: "/gamme-opus.jpg",
                title: "Gamme Opus",
                link: "/les-vins?collection=opus",
                delay: "delay-400",
              },
            ].map((collection, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${isVisible.collections ? `opacity-100 translate-y-0 ${collection.delay}` : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6">
                  <div className="aspect-[3/4] mb-4 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-heading text-center group-hover:text-wine-gold transition-colors duration-300 mb-4">
                    {collection.title}
                  </h3>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full group/btn hover:bg-wine-gold hover:text-wine-black hover:border-wine-gold transition-all duration-300 bg-transparent"
                  >
                    <Link href={collection.link}>
                      Découvrir
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Wines Section */}
      <section className="py-24 bg-white" data-section="featured-wines">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.collections ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">Nos Vins d'Exception</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Une sélection de nos cuvées les plus emblématiques, acclamées par la critique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFeaturedWines().map((wine, index) => (
              <HomeWineCard
                key={wine.id}
                wine={wine}
                className={`transition-all duration-1000 ${isVisible.collections ? `opacity-100 translate-y-0 delay-${index * 100}` : "opacity-0 translate-y-8"}`}
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button size="lg" asChild className="group hover:scale-105 transition-all duration-300">
              <Link href="/les-vins">
                Voir tous nos vins
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-50" data-section="philosophy">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible.philosophy ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-8">Notre Philosophie</h2>
            <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
              Depuis plus de 175 ans, nous cultivons l'art de la vinification avec passion et respect. Chaque bouteille
              raconte l'histoire de notre terroir exceptionnel, où tradition et innovation se rencontrent pour créer des
              vins d'une élégance rare. Notre engagement envers l'excellence guide chacun de nos gestes, de la vigne à
              votre table.
            </p>
          </div>
        </div>
      </section>

      {/* Immersive Wine Glass */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('/elegant-wine-glass-with-red-wine-in-vineyard-setti.png')`,
            transform: `translateY(${scrollY * 0.3}px)`, // Subtle parallax
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-2xl mx-auto px-4 hover:scale-105 transition-transform duration-500">
            <blockquote className="text-2xl md:text-3xl font-display italic text-balance">
              "Le vin est la poésie de la terre, et nous en sommes les humbles interprètes."
            </blockquote>
            <cite className="block mt-4 text-lg opacity-80">— Henri Lastours, Fondateur</cite>
          </div>
        </div>
      </section>

      {/* Domain Presentation */}
      <section className="py-24" data-section="domain">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible.domain ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <h2 className="text-4xl md:text-5xl font-display mb-8">Le Domaine</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Niché au cœur des collines du sud de la France, Châteaux Lastours s'étend sur 120 hectares de vignes
                soigneusement cultivées. Notre terroir unique, façonné par des siècles d'histoire, bénéficie d'un
                microclimat exceptionnel et de sols argilo-calcaires qui confèrent à nos vins leur caractère distinctif.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Chaque parcelle est travaillée avec un soin méticuleux, dans le respect des traditions ancestrales et
                des pratiques durables. C'est cette harmonie entre l'homme et la nature qui donne naissance à des vins
                d'exception.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="group hover:scale-105 transition-all duration-300">
                  <Link href="/domaine/histoire">
                    Notre Histoire
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Link href="/domaine/terroir">Découvrir le Terroir</Link>
                </Button>
              </div>
            </div>
            <div
              className={`aspect-[4/3] bg-muted rounded-lg overflow-hidden transition-all duration-1000 ${isVisible.domain ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <img
                src="/french-chateau-vineyard-landscape-with-rolling-hil.png"
                alt="Domaine Châteaux Lastours"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-muted/30" data-section="awards">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.awards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">Reconnaissance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              L'excellence de nos vins est reconnue par les plus grands critiques et concours internationaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Médaille d'Or",
                description: "Concours Général Agricole 2024",
                delay: "delay-100",
              },
              {
                icon: Grape,
                title: "95/100",
                description: "Wine Spectator Magazine",
                delay: "delay-300",
              },
              {
                icon: MapPin,
                title: "AOC Certifié",
                description: "Appellation d'Origine Contrôlée",
                delay: "delay-500",
              },
            ].map((award, index) => {
              const IconComponent = award.icon
              return (
                <div
                  key={index}
                  className={`text-center group hover:-translate-y-2 transition-all duration-500 ${isVisible.awards ? `opacity-100 translate-y-0 ${award.delay}` : "opacity-0 translate-y-8"}`}
                >
                  <div className="w-16 h-16 bg-wine-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-wine-black" />
                  </div>
                  <h3 className="text-xl font-heading mb-2 group-hover:text-wine-gold transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground">{award.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nature Immersive */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('/beautiful-vineyard-garden-with-lavender-and-olive-.png')`,
            transform: `translateY(${scrollY * 0.2}px)`, // Gentle parallax
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-3xl mx-auto px-4 hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl md:text-4xl font-display mb-6 text-balance">L'Art de Vivre à la Française</h2>
            <p className="text-lg md:text-xl text-pretty opacity-90">
              Découvrez l'harmonie parfaite entre nature, tradition et excellence
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
