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
        {/* Overlay sombre léger pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Texture grain subtile */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none grain"></div>

        {/* Contenu Hero - Responsive optimisé pour tous les écrans */}
        <div className="absolute bottom-[15vh] sm:bottom-[20vh] left-4 sm:left-8 lg:left-16 right-4 sm:right-8 z-10 text-left text-white">
          <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] 2xl:text-[12rem] font-serif font-light mb-4 sm:mb-6 hero-title leading-[0.85] sm:leading-[0.8] tracking-tight">
              Vin d'aujourd'hui
            </h1>
            <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif font-light italic mb-8 sm:mb-12 lg:mb-16 hero-title opacity-90 tracking-tight leading-[0.9]">
              depuis 1579
            </p>
            <div className="hero-button">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-300 px-6 sm:px-8 lg:px-12 py-4 sm:py-6 text-sm sm:text-base lg:text-lg font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase w-full sm:w-auto sm:min-w-[280px] lg:min-w-[400px]"
              >
                <Link href="/savoir-faire" aria-label="Découvrez notre savoir-faire">
                  <span className="hidden sm:inline">Découvrez notre savoir-faire</span>
                  <span className="sm:hidden">Découvrez</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Responsive */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 border border-white/40 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all duration-300">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white rotate-90" />
          </div>
        </div>
      </section>


      {/* Section suivante - à développer selon les besoins */}


    </div>
  )
}
