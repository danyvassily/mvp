"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MoveRight } from "lucide-react"
import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { getFeaturedWines } from "@/lib/wines-data"
import { getLatestArticles } from "@/lib/news-data"
import { getUpcomingEvents } from "@/lib/events-data"
import { HomeWineCard } from "@/components/home-wine-card"

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const container = useRef(null)
  const heroImage = useRef(null)
  const featuredWines = getFeaturedWines()
  const latestArticles = getLatestArticles(3)
  const upcomingEvents = getUpcomingEvents()
    .sort((a, b) => (a.date < b.date ? -1 : 1))
    .slice(0, 3)

  useGSAP(
    () => {
      // Hero Section Animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
      })
        .from(
          ".hero-button",
          { y: 50, opacity: 0, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          heroImage.current,
          { scale: 1.2, y: "-10%" },
          {
            scale: 1,
            y: "0%",
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        )

      // Parallax effect for Hero Image
      gsap.to(heroImage.current, {
        y: "20%",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      // Section Animations on Scroll
      const sections = gsap.utils.toArray("section:not(:first-child)")
      sections.forEach((section) => {
        gsap.from(section as gsap.DOMTarget, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section as gsap.DOMTarget,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      })
    },
    { scope: container }
  )

  return (
    <div ref={container} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={heroImage}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/chateau-lastours-hero.jpg"
            alt="Vignoble du Château Lastours au coucher du soleil"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-balance hero-title">
            Châteaux Lastours
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90 hero-title">
            L'excellence viticole du sud de la France depuis 1847
          </p>
          <div className="hero-button">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Link href="/les-vins">
                Voir la collection de vins
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-primary">
            Une Histoire de Passion
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Depuis plus d'un siècle et demi, le Château Lastours est le gardien
            d'un savoir-faire ancestral. Niché au cœur d'un terroir
            exceptionnel, notre domaine façonne des vins qui sont la pure
            expression de leur origine, alliant tradition et innovation.
          </p>
          <Button asChild variant="link" className="text-lg text-primary group">
            <Link href="/domaine/histoire">
              Découvrir notre héritage
              <MoveRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Wines Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary">
              Nos Vins d'Exception
            </h2>
            <p className="text-lg md:text-xl text-foreground/80">
              Une sélection de nos cuvées les plus emblématiques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWines.map((wine) => (
              <HomeWineCard key={wine.id} wine={wine} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild className="group">
              <Link href="/les-vins">
                Explorer toute la collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-24 bg-card">
         <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-display mb-6 text-primary">
                     Vivez l'Expérience Lastours
                  </h2>
                  <p className="text-lg md:text-xl text-foreground/80 mb-8">
                     Plongez au cœur de notre domaine. Participez à nos dégustations exclusives, visitez nos chais centenaires et laissez-vous séduire par la magie d'un lieu chargé d'histoire.
                  </p>
                  <Button size="lg" asChild className="group">
                     <Link href="/reservation">
                        Réserver une visite
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </Button>
               </div>
               <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                     src="/french-chateau-vineyard-landscape-with-rolling-hil.png"
                     alt="Paysage du vignoble de Château Lastours"
                     fill
                     className="object-cover"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Événements à venir */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary">Événements à venir</h2>
            <p className="text-lg md:text-xl text-foreground/80">Partagez des moments d'exception au domaine</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Link key={event.slug} href={`/evenements/${event.slug}`} className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image src={event.image || "/wine-tasting-event.png"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <div className="text-sm text-muted-foreground">{new Date(event.date).toLocaleDateString("fr-FR")}</div>
                  <h3 className="text-xl font-display group-hover:text-accent">{event.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="group">
              <Link href="/evenements">
                Voir tous les événements
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dernières actualités */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary">Dernières actualités</h2>
            <p className="text-lg md:text-xl text-foreground/80">Découvrez nos nouvelles et nos engagements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((post) => (
              <Link key={post.slug} href={`/actualites/${post.slug}`} className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                {post.image && (
                  <div className="relative aspect-[4/3]">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                )}
                <div className="p-6 space-y-2">
                  <div className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString("fr-FR")}</div>
                  <h3 className="text-xl font-display group-hover:text-accent">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="group bg-transparent">
              <Link href="/actualites">
                Voir toutes les actualités
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
