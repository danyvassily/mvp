"use client"

import { useEffect, useRef, useState } from "react"
import type { FocusEvent, MouseEvent } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)
  const megaMenuRef = useRef<HTMLDivElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useIsMobile()
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Nettoyage des timeouts au démontage du composant
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  // Fermer le menu mobile automatiquement
  useEffect(() => {
    // Fermer le menu quand on passe en desktop
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false)
      setMobileSubmenu(null)
    }
  }, [isMobile, isMenuOpen])

  // Gestion des événements pour fermer le menu
  useEffect(() => {
    if (!isMenuOpen) return

    // Bloquer le scroll du body
    document.body.style.overflow = 'hidden'

    // Fonction pour fermer le menu
    const closeMenu = () => {
      setIsMenuOpen(false)
      setMobileSubmenu(null)
    }

    // Fermer avec Escape
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    // Fermer au clic extérieur
    const handleClickOutside = (event: Event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    // Ajouter les événements
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    // Cleanup
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  const openMenu = (key: string) => {
    // Annuler tout timeout de fermeture en cours
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setHoveredMenu(key)
  }

  const closeMenuWithDelay = (delay: number = 150) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null)
      hoverTimeoutRef.current = null
    }, delay)
  }

  const closeMenuImmediately = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setHoveredMenu(null)
  }

  // Fonction helper pour fermer le menu mobile
  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setMobileSubmenu(null)
  }

  const handleNavMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null
    // Si on va vers le mega-menu, ne pas fermer
    if (nextTarget && megaMenuRef.current?.contains(nextTarget)) {
      return
    }
    // Fermer avec un délai pour permettre la transition vers le mega-menu
    closeMenuWithDelay(100)
  }

  const handleMegaMenuMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null
    // Si on retourne vers la navigation, ne pas fermer
    if (nextTarget && navRef.current?.contains(nextTarget)) {
      return
    }
    // Fermer immédiatement si on quitte complètement la zone
    closeMenuWithDelay(50)
  }

  const handleMenuMouseEnter = () => {
    // Annuler la fermeture si on revient sur le menu
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }

  const handleTriggerBlur = (event: FocusEvent<HTMLButtonElement>) => {
    const nextTarget = event.relatedTarget as Node | null
    if (!nextTarget) {
      closeMenuWithDelay(200)
      return
    }

    if (navRef.current?.contains(nextTarget) || megaMenuRef.current?.contains(nextTarget)) {
      return
    }

    closeMenuWithDelay(200)
  }

  const handleMegaMenuBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null

    if (nextTarget && (megaMenuRef.current?.contains(nextTarget) || navRef.current?.contains(nextTarget))) {
      return
    }

    closeMenuWithDelay(200)
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? "bg-white/98 backdrop-blur-md border-b border-gray-200/50 shadow-lg" 
            : "bg-white/90 backdrop-blur-sm border-b border-gray-200/30 shadow-sm"
        }`}
      >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Left Navigation - Desktop */}
          <nav 
            ref={navRef}
            className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1"
            onMouseLeave={handleNavMouseLeave}
          >
            <div className="relative">
              <button 
                className="flex items-center space-x-1 transition-all duration-300 text-sm xl:text-base font-medium tracking-wide text-slate-800 hover:text-wine-gold group py-2 cursor-pointer"
                type="button"
                aria-haspopup="true"
                {...(hoveredMenu === 'domaine' ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
                onMouseEnter={() => openMenu('domaine')}
                onFocus={() => openMenu('domaine')}
                onClick={() => hoveredMenu === 'domaine' ? closeMenuImmediately() : openMenu('domaine')}
                onBlur={handleTriggerBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    hoveredMenu === 'domaine' ? closeMenuImmediately() : openMenu('domaine')
                  }
                  if (e.key === 'Escape') {
                    closeMenuImmediately()
                  }
                }}
              >
                <span>Le Domaine</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredMenu === 'domaine' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="relative">
              <button 
                className="flex items-center space-x-1 transition-all duration-300 text-sm xl:text-base font-medium tracking-wide text-slate-800 hover:text-wine-gold group py-2 cursor-pointer"
                type="button"
                aria-haspopup="true"
                {...(hoveredMenu === 'savoir-faire' ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
                onMouseEnter={() => openMenu('savoir-faire')}
                onFocus={() => openMenu('savoir-faire')}
                onClick={() => hoveredMenu === 'savoir-faire' ? closeMenuImmediately() : openMenu('savoir-faire')}
                onBlur={handleTriggerBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    hoveredMenu === 'savoir-faire' ? closeMenuImmediately() : openMenu('savoir-faire')
                  }
                  if (e.key === 'Escape') {
                    closeMenuImmediately()
                  }
                }}
              >
                <span>Savoir-Faire</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredMenu === 'savoir-faire' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="relative">
              <button 
                className="flex items-center space-x-1 transition-all duration-300 text-sm xl:text-base font-medium tracking-wide text-slate-800 hover:text-wine-gold group py-2 cursor-pointer"
                type="button"
                aria-haspopup="true"
                {...(hoveredMenu === 'vins' ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
                onMouseEnter={() => openMenu('vins')}
                onFocus={() => openMenu('vins')}
                onClick={() => hoveredMenu === 'vins' ? closeMenuImmediately() : openMenu('vins')}
                onBlur={handleTriggerBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    hoveredMenu === 'vins' ? closeMenuImmediately() : openMenu('vins')
                  }
                  if (e.key === 'Escape') {
                    closeMenuImmediately()
                  }
                }}
              >
                <span>Nos Vins</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredMenu === 'vins' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </nav>
          
          {/* Logo centré */}
          <div className="flex-shrink-0 mx-4 lg:mx-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/PHOTOS-WEB-LASTOURS/LOGO/logo-chateau-lastours.jpg"
                alt="Château Lastours"
                width={60}
                height={50}
                priority
                className="transition-all duration-300 opacity-100 hover:scale-105 object-contain lg:w-[70px] lg:h-[58px]"
              />
            </Link>
          </div>

          {/* Right Navigation & Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-end">
            <div className="relative">
              <button 
                className="flex items-center space-x-1 transition-all duration-300 text-sm xl:text-base font-medium tracking-wide text-slate-800 hover:text-wine-gold group py-2 cursor-pointer"
                type="button"
                aria-haspopup="true"
                {...(hoveredMenu === 'experiences' ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
                onMouseEnter={() => openMenu('experiences')}
                onFocus={() => openMenu('experiences')}
                onClick={() => hoveredMenu === 'experiences' ? closeMenuImmediately() : openMenu('experiences')}
                onBlur={handleTriggerBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    hoveredMenu === 'experiences' ? closeMenuImmediately() : openMenu('experiences')
                  }
                  if (e.key === 'Escape') {
                    closeMenuImmediately()
                  }
                }}
              >
                <span>Expériences</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredMenu === 'experiences' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link 
              href="/gastronomie" 
              className="transition-all duration-300 text-sm xl:text-base font-medium tracking-wide text-slate-800 hover:text-wine-gold py-2"
            >
              Gastronomie
            </Link>

            <Link 
              href="/ou-nous-trouver" 
              className="transition-all duration-300 text-sm xl:text-base font-medium tracking-wide text-slate-800 hover:text-wine-gold py-2"
            >
              Contact
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black hover:bg-black/10 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              {...(isMenuOpen ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            ref={mobileMenuRef}
            className="lg:hidden py-6 border-t border-gray-200 bg-white/98 backdrop-blur-md max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2 duration-300"
            role="navigation"
            aria-label="Menu de navigation mobile"
          >
            <nav className="flex flex-col space-y-2">
              {/* Le Domaine */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'domaine' ? null : 'domaine')}
                  className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-slate-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Le Domaine</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'domaine' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'domaine' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/domaine/histoire" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      Notre Histoire
                    </Link>
                    <Link href="/domaine/terroir" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      Le Terroir
                    </Link>
                    <Link href="/domaine/team" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      L'Équipe
                    </Link>
                    <Link href="/domaine/engagement" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      Nos Engagements
                    </Link>
                  </div>
                )}
              </div>

              {/* Savoir-Faire */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'savoir-faire' ? null : 'savoir-faire')}
                  className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-slate-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Savoir-Faire</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'savoir-faire' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'savoir-faire' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/savoir-faire/vigne" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      La Vigne
                    </Link>
                    <Link href="/savoir-faire/chais" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      Les Chais
                    </Link>
                    <Link href="/methode-blanche" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      Méthode Ancestrale
                    </Link>
                  </div>
                )}
              </div>

              {/* Nos Vins */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'vins' ? null : 'vins')}
                  className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-slate-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Nos Vins</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'vins' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'vins' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/les-vins" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors font-medium" onClick={closeMobileMenu}>
                      Toutes les cuvées
                    </Link>
                    <div className="ml-2 space-y-1 border-l border-gray-200 pl-3">
                      <p className="px-4 py-1 text-xs font-medium text-slate-500 uppercase tracking-wide">Blancs</p>
                      <Link href="/les-vins/perle" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Perle</Link>
                      <Link href="/les-vins/domeni-blanc" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Domeni Blanc</Link>
                      <Link href="/les-vins/opus-blanc" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Opus Blanc</Link>
                      <Link href="/les-vins/methode-blanc" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Méthode Blanc</Link>
                      <Link href="/les-vins/poussin-blanc" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Poussin Blanc</Link>
                      
                      <p className="px-4 py-1 text-xs font-medium text-slate-500 uppercase tracking-wide mt-3">Rosés</p>
                      <Link href="/les-vins/poussin-rose" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Poussin Rosé</Link>
                      <Link href="/les-vins/domeni-rose" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Domeni Rosé</Link>
                      <Link href="/les-vins/methode-rose" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Méthode Rosé</Link>
                      
                      <p className="px-4 py-1 text-xs font-medium text-slate-500 uppercase tracking-wide mt-3">Rouges</p>
                      <Link href="/les-vins/opus-rouge" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Opus Rouge</Link>
                      <Link href="/les-vins/domeni-rouge" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Domeni Rouge</Link>
                      <Link href="/les-vins/petrichor-rouge" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Pétrichor Rouge</Link>
                      
                      <p className="px-4 py-1 text-xs font-medium text-slate-500 uppercase tracking-wide mt-3">Spécialités</p>
                      <Link href="/les-vins/claire-de-lune" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Claire de Lune</Link>
                      <Link href="/les-vins/pigeonnier" className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>Pigeonnier</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Expériences */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'experiences' ? null : 'experiences')}
                  className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-slate-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Expériences</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'experiences' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'experiences' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/reservation" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      Réserver une visite
                    </Link>
                    <Link href="/evenements" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      Événements
                    </Link>
                    <Link href="/evenements/organiser" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      Organiser un événement
                    </Link>
                    <Link href="/club" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      Club Lastours
                    </Link>
                    <Link href="/mecenat" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors" onClick={closeMobileMenu}>
                      Mécénat
                    </Link>
                  </div>
                )}
              </div>

              {/* Pages directes */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <Link href="/gastronomie" className="block px-4 py-3 font-medium text-slate-800 hover:text-wine-gold hover:bg-gray-50 rounded-lg transition-colors" onClick={closeMobileMenu}>
                  Gastronomie
                </Link>
                <Link href="/actualites" className="block px-4 py-3 font-medium text-slate-800 hover:text-wine-gold hover:bg-gray-50 rounded-lg transition-colors" onClick={closeMobileMenu}>
                  Actualités
                </Link>
                <Link href="/ou-nous-trouver" className="block px-4 py-3 font-medium text-slate-800 hover:text-wine-gold hover:bg-gray-50 rounded-lg transition-colors" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>

    {/* Méga-menus style Ruinart */}
    {hoveredMenu && (
      <div 
        ref={megaMenuRef}
        className="fixed top-20 left-0 right-0 z-50 transition-all duration-500 bg-white/98 backdrop-blur-lg border-b border-gray-200/30 shadow-lg"
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMegaMenuMouseLeave}
        onBlurCapture={handleMegaMenuBlur}
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
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    Histoire du Domaine
                  </Link>
                  <Link 
                    href="/domaine/team" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    L'Équipe
                  </Link>
                  <Link 
                    href="/domaine/engagement" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
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
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    Le Vignoble
                  </Link>
                  <Link 
                    href="/notre-chai" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
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
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    Toutes les actualités
                  </Link>
                  <Link 
                    href="/presse" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
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

          {hoveredMenu === 'vins' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  Blancs
                </h3>
                <div className="space-y-3">
                  <Link href="/les-vins" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Toutes les cuvées
                  </Link>
                  <Link href="/les-vins/perle" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Perle
                  </Link>
                  <Link href="/les-vins/domeni-blanc" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Domeni Blanc
                  </Link>
                  <Link href="/les-vins/opus-blanc" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Opus Blanc
                  </Link>
                  <Link href="/les-vins/methode-blanc" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Méthode Blanc
                  </Link>
                  <Link href="/les-vins/poussin-blanc" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Poussin Blanc
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  Rosés
                </h3>
                <div className="space-y-3">
                  <Link href="/les-vins/poussin-rose" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Poussin Rosé
                  </Link>
                  <Link href="/les-vins/domeni-rose" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Domeni Rosé
                  </Link>
                  <Link href="/les-vins/methode-rose" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Méthode Rosé
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  Rouges
                </h3>
                <div className="space-y-3">
                  <Link href="/les-vins/opus-rouge" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Opus Rouge
                  </Link>
                  <Link href="/les-vins/domeni-rouge" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Domeni Rouge
                  </Link>
                  <Link href="/les-vins/petrichor-rouge" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Pétrichor Rouge
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  Spécialités
                </h3>
                <div className="space-y-3">
                  <Link href="/les-vins/claire-de-lune" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Claire de Lune
                  </Link>
                  <Link href="/les-vins/pigeonnier" className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold" onClick={() => closeMenuImmediately()}>
                    Pigeonnier
                  </Link>
                </div>

                <div className="mt-8">
                  <div className="relative h-40 bg-gradient-to-b from-slate-200 to-slate-300 rounded-lg overflow-hidden">
                    <Image
                      src="/photos/lastours017.jpg"
                      alt="Nos vins"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-3 left-3">
                      <p className="text-white text-xs font-medium">Explorez toute la gamme</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {hoveredMenu === 'savoir-faire' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  La Vigne
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/savoir-faire/vigne" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    Viticulture
                  </Link>
                  <Link 
                    href="/methode-blanche" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    Méthode Ancestrale
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  Les Chais
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/savoir-faire/chais" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    Vinification
                  </Link>
                  <Link 
                    href="/degustation" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
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
                    <p className="text-white text-sm font-medium">Notre savoir-faire</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {hoveredMenu === 'experiences' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  Visites
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/reservation" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    Réserver une visite
                  </Link>
                  <Link 
                    href="/degustation" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    Dégustation
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  Événements
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/evenements" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    Nos événements
                  </Link>
                  <Link 
                    href="/evenements/organiser" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    Organiser un événement
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold tracking-wide mb-4 text-slate-900">
                  Club & Mécénat
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/club" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
                  >
                    Club Lastours
                  </Link>
                  <Link 
                    href="/mecenat" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-1 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold"
                    onClick={() => closeMenuImmediately()}
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
                    <p className="text-white text-sm font-medium">Vivez l'expérience</p>
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
