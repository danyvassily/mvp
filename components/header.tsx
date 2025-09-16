"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { CartSheet } from "./cart-sheet"
import { UserMenu } from "./user-menu"
import { TransitionLink } from "./gsap/TransitionLink"
// No GSAP for header color toggle; we use scroll listener for reliability
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLHeadingElement | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        ref={headerRef as any}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? "bg-white/98 backdrop-blur-md border-b border-gray-200/50 shadow-lg" 
            : "bg-white/90 backdrop-blur-sm border-b border-gray-200/30 shadow-sm"
        }`}
      >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="flex items-center space-x-1 transition-all duration-300 text-base font-medium tracking-wide text-slate-800 hover:text-slate-600"
                onMouseEnter={() => setHoveredMenu('domaine')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <span>Le Domaine</span>
              </button>
            </div>

            <div className="relative">
              <button 
                className="flex items-center space-x-1 transition-all duration-300 text-base font-medium tracking-wide text-slate-800 hover:text-slate-600"
                onMouseEnter={() => setHoveredMenu('savoir-faire')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <span>Savoir-Faire</span>
              </button>
            </div>

            <TransitionLink 
              href="/les-vins" 
              className="transition-all duration-300 text-base font-medium tracking-wide text-slate-800 hover:text-slate-600"
            >
              Nos Vins
            </TransitionLink>
          </nav>
          
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="/PHOTOS-WEB-LASTOURS/LOGO/logo argenté.PNG"
                alt="Château Lastours"
                width={100}
                height={35}
                priority
                className="transition-all duration-300 opacity-100"
              />
            </Link>
          </div>

          {/* Right Navigation & Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="transition-all duration-300 text-base font-medium tracking-wide text-slate-800 hover:text-slate-600"
                onMouseEnter={() => setHoveredMenu('experiences')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                Expériences
              </button>
            </div>

            <Link 
              href="/gastronomie" 
              className="transition-all duration-300 text-base font-medium tracking-wide text-slate-800 hover:text-slate-600"
            >
              Gastronomie
            </Link>

            <Link 
              href="/ou-nous-trouver" 
              className="transition-all duration-300 text-base font-medium tracking-wide text-slate-800 hover:text-slate-600"
            >
              Contact
            </Link>

            <div className="flex items-center space-x-4 ml-4">
              <CartSheet />
              <UserMenu />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <CartSheet />
            <UserMenu />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black hover:bg-black/10 rounded-md transition-colors"
              aria-label="Menu de navigation"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm text-lg">
            <nav className="flex flex-col space-y-1">
              <Link href="/domaine/histoire" className="px-3 py-2 rounded hover:bg-accent/10">
                Le Domaine — Histoire
              </Link>
              <Link href="/domaine/terroir" className="px-3 py-2 rounded hover:bg-accent/10">
                Le Domaine — Terroir
              </Link>
              <Link href="/domaine/team" className="px-3 py-2 rounded hover:bg-accent/10">
                Le Domaine — L'Équipe
              </Link>
              <Link href="/domaine/engagement" className="px-3 py-2 rounded hover:bg-accent/10">
                Le Domaine — Engagement
              </Link>

              <Link href="/savoir-faire/vigne" className="px-3 py-2 rounded hover:bg-accent/10">
                Savoir‑Faire — La Vigne
              </Link>
              <Link href="/savoir-faire/chais" className="px-3 py-2 rounded hover:bg-accent/10">
                Savoir‑Faire — Les Chais
              </Link>

              <Link href="/les-vins" className="px-3 py-2 rounded hover:bg-accent/10">
                Nos Vins
              </Link>
              <Link href="/gastronomie" className="px-3 py-2 rounded hover:bg-accent/10">
                Gastronomie
              </Link>
              <Link href="/reservation" className="px-3 py-2 rounded hover:bg-accent/10">
                Réservation
              </Link>
              <Link href="/evenements" className="px-3 py-2 rounded hover:bg-accent/10">
                Événements
              </Link>
              <Link href="/evenements/organiser" className="px-3 py-2 rounded hover:bg-accent/10">
                Organiser un Événement
              </Link>
              <Link href="/club" className="px-3 py-2 rounded hover:bg-accent/10">
                Club Lastours
              </Link>
              <Link href="/mecenat" className="px-3 py-2 rounded hover:bg-accent/10">
                Mécénat
              </Link>

              <Link href="/actualites" className="px-3 py-2 rounded hover:bg-accent/10">
                Actualités
              </Link>
              <Link href="/presse" className="px-3 py-2 rounded hover:bg-accent/10">
                Presse
              </Link>
              <Link href="/ou-nous-trouver" className="px-3 py-2 rounded hover:bg-accent/10">
                Où nous trouver
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>

    {/* Méga-menus style Ruinart */}
    {hoveredMenu && (
      <div 
        className="fixed top-20 left-0 right-0 z-40 transition-all duration-500 bg-white/98 backdrop-blur-lg border-b border-gray-200/30 shadow-lg"
        onMouseEnter={() => setHoveredMenu(hoveredMenu)}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="container mx-auto px-4 lg:px-8 py-12">
          {hoveredMenu === 'domaine' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  Notre Histoire
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/domaine/histoire" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900"
                  >
                    Histoire du Domaine
                  </Link>
                  <Link 
                    href="/domaine/team" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900"
                  >
                    L'Équipe
                  </Link>
                  <Link 
                    href="/domaine/engagement" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900"
                  >
                    Nos Engagements
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  Notre Terroir
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/domaine/terroir" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900"
                  >
                    Le Vignoble
                  </Link>
                  <Link 
                    href="/notre-chai" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900"
                  >
                    Notre Chai
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  Actualités
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/actualites" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900"
                  >
                    Toutes les actualités
                  </Link>
                  <Link 
                    href="/presse" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900"
                  >
                    Espace Presse
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative h-48 bg-gradient-to-b from-slate-200 to-slate-300 rounded-lg overflow-hidden">
                  <Image
                    src="/photos/007.jpg"
                    alt="Château Lastours"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-sm font-medium">Découvrez notre patrimoine</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {hoveredMenu === 'savoir-faire' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <h3 className={`text-lg font-light tracking-wide mb-4 ${scrolled ? "text-slate-900" : "text-white"}`}>
                  La Vigne
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/savoir-faire/vigne" 
                    className={`block text-sm font-light tracking-wide transition-colors ${
                      scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                    }`}
                  >
                    Viticulture
                  </Link>
                  <Link 
                    href="/methode-blanche" 
                    className={`block text-sm font-light tracking-wide transition-colors ${
                      scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                    }`}
                  >
                    Méthode Ancestrale
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className={`text-lg font-light tracking-wide mb-4 ${scrolled ? "text-slate-900" : "text-white"}`}>
                  Les Chais
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/savoir-faire/chais" 
                    className={`block text-sm font-light tracking-wide transition-colors ${
                      scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                    }`}
                  >
                    Vinification
                  </Link>
                  <Link 
                    href="/degustation" 
                    className={`block text-sm font-light tracking-wide transition-colors ${
                      scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                    }`}
                  >
                    Dégustation
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative h-48 bg-gradient-to-b from-slate-200 to-slate-300 rounded-lg overflow-hidden">
                  <Image
                    src="/Page/La vigne - ok/la véraison .jpg"
                    alt="Vignoble"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-sm font-light">Notre savoir-faire</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {hoveredMenu === 'experiences' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-6">
                <h3 className={`text-lg font-light tracking-wide mb-4 ${scrolled ? "text-slate-900" : "text-white"}`}>
                  Visites
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/reservation" 
                    className={`block text-sm font-light tracking-wide transition-colors ${
                      scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                    }`}
                  >
                    Réserver une visite
                  </Link>
                  <Link 
                    href="/degustation" 
                    className={`block text-sm font-light tracking-wide transition-colors ${
                      scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                    }`}
                  >
                    Dégustation
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className={`text-lg font-light tracking-wide mb-4 ${scrolled ? "text-slate-900" : "text-white"}`}>
                  Événements
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/evenements" 
                    className={`block text-sm font-light tracking-wide transition-colors ${
                      scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                    }`}
                  >
                    Nos événements
                  </Link>
                  <Link 
                    href="/evenements/organiser" 
                    className={`block text-sm font-light tracking-wide transition-colors ${
                      scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                    }`}
                  >
                    Organiser un événement
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className={`text-lg font-light tracking-wide mb-4 ${scrolled ? "text-slate-900" : "text-white"}`}>
                  Club & Mécénat
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/club" 
                    className={`block text-sm font-light tracking-wide transition-colors ${
                      scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                    }`}
                  >
                    Club Lastours
                  </Link>
                  <Link 
                    href="/mecenat" 
                    className={`block text-sm font-light tracking-wide transition-colors ${
                      scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
                    }`}
                  >
                    Mécénat
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative h-48 bg-gradient-to-b from-slate-200 to-slate-300 rounded-lg overflow-hidden">
                  <Image
                    src="/photos/lastours017.jpg"
                    alt="Expériences"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-sm font-light">Vivez l'expérience</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )}
  </>
  )
}
