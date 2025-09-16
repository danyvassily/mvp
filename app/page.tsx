"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MoveRight } from "lucide-react"
import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { getLatestArticles } from "@/lib/news-data"
import { getUpcomingEvents } from "@/lib/events-data"

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const container = useRef(null)
  const heroImage = useRef(null)
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


      {/* Wines Section */}
      <section className="py-24 bg-card">
         <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-display mb-6 text-primary">
                     Découvrez Nos Vins d'Exception
                  </h2>
                  <p className="text-lg md:text-xl text-foreground/80 mb-8">
                     Explorez notre collection de vins fins, fruits d'un terroir unique et d'un savoir-faire transmis de génération en génération. Chaque bouteille raconte l'histoire de notre passion pour l'excellence.
                  </p>
                  <Button size="lg" asChild className="group">
                     <Link href="/les-vins">
                        Découvrir nos vins
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </Button>
               </div>
               <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                     src="/elegant-wine-bottles-classic-collection.png"
                     alt="Collection de vins du Château Lastours"
                     fill
                     className="object-cover"
                  />
               </div>
            </div>
         </div>
      </section>


    </div>
  )
}
