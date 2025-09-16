"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { CartSheet } from "./cart-sheet"
import { UserMenu } from "./user-menu"
// No GSAP for header color toggle; we use scroll listener for reliability
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLHeadingElement | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      ref={headerRef as any}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-white border-border" : "bg-white/60 border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-black hover:text-primary transition-colors text-xl">
                <span>Le Domaine</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-4 w-56 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link
                  href="/domaine/histoire"
                  className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors"
                >
                  Histoire
                </Link>
                <Link
                  href="/domaine/terroir"
                  className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors"
                >
                  Terroir
                </Link>
                <Link
                  href="/domaine/team"
                  className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors"
                >
                  L'Équipe
                </Link>
                <Link
                  href="/domaine/engagement"
                  className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors"
                >
                  Engagement
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-black hover:text-primary transition-colors text-xl">
                <span>Savoir-Faire</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-4 w-56 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link
                  href="/savoir-faire/vigne"
                  className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors"
                >
                  La Vigne
                </Link>
                <Link
                  href="/savoir-faire/chais"
                  className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors"
                >
                  Les Chais
                </Link>
              </div>
            </div>

            <Link href="/les-vins" className="text-black hover:text-primary transition-colors text-xl">
              Nos Vins
            </Link>
            <Link href="/actualites" className="text-black hover:text-primary transition-colors text-xl">
              Actualités
            </Link>
            <Link href="/presse" className="text-black hover:text-primary transition-colors text-xl">
              Presse
            </Link>
          </nav>
          
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-chateau-lastours.png"
                alt="Château Lastours"
                width={150}
                height={48}
                priority
              />
            </Link>
          </div>

          {/* Right Navigation & Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
             <Link href="/gastronomie" className="text-black hover:text-primary transition-colors text-xl">
              Gastronomie
            </Link>
            <Link href="/ou-nous-trouver" className="text-black hover:text-primary transition-colors text-xl">
              Où nous trouver
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-black hover:text-primary transition-colors text-xl">
                <span>Expériences</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-4 w-56 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/reservation" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                  Réservation
                </Link>
                <Link href="/evenements" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                  Événements
                </Link>
                <Link
                  href="/evenements/organiser"
                  className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors"
                >
                  Organiser un Événement
                </Link>
                <Link href="/club" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                  Club Lastours
                </Link>
                <Link href="/mecenat" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                  Mécénat
                </Link>
              </div>
            </div>

            <CartSheet />
            <UserMenu />
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
  )
}
