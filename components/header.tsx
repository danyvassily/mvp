"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { CartSheet } from "./cart-sheet"
import { UserMenu } from "./user-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border bg-background/95 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center h-20 relative">
          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 absolute left-0">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-accent transition-colors">
                <span>Le Domaine</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/domaine/histoire" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                  Histoire
                </Link>
                <Link href="/domaine/terroir" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                  Terroir
                </Link>
                <Link href="/domaine/team" className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
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
              <button className="flex items-center space-x-1 text-foreground hover:text-accent transition-colors">
                <span>Savoir-Faire</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
                <Link
                  href="/savoir-faire/conservation"
                  className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors"
                >
                  Conservation
                </Link>
                <Link
                  href="/savoir-faire/service-degustation"
                  className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors"
                >
                  Service & Dégustation
                </Link>
              </div>
            </div>

            <Link href="/les-vins" className="text-foreground hover:text-accent transition-colors">
              Nos Vins
            </Link>

            <Link href="/gastronomie" className="text-foreground hover:text-accent transition-colors">
              Gastronomie
            </Link>
          </nav>

          <Link href="/" className="flex items-center">
            <img src="/logo-chateau-lastours.png" alt="Château Lastours" className="h-12 w-auto filter invert" />
          </Link>

          {/* Right Navigation & Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 absolute right-0">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-accent transition-colors">
                <span>Expériences</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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

            <Button variant="outline" size="sm" asChild>
              <Link href="/reservation">Réserver</Link>
            </Button>
            <CartSheet />
            <UserMenu />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 absolute right-0">
            <CartSheet />
            <UserMenu />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-accent/10 rounded-md transition-colors"
              aria-label="Menu de navigation"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-1">
              <div className="py-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                  Le Domaine
                </div>
                <Link
                  href="/domaine/histoire"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Histoire
                </Link>
                <Link
                  href="/domaine/terroir"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terroir
                </Link>
                <Link
                  href="/domaine/team"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  L'Équipe
                </Link>
                <Link
                  href="/domaine/engagement"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Engagement
                </Link>
              </div>

              <div className="py-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                  Savoir-Faire
                </div>
                <Link
                  href="/savoir-faire/vigne"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  La Vigne
                </Link>
                <Link
                  href="/savoir-faire/chais"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Les Chais
                </Link>
                <Link
                  href="/savoir-faire/conservation"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Conservation
                </Link>
                <Link
                  href="/savoir-faire/service-degustation"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Service & Dégustation
                </Link>
              </div>

              <div className="py-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                  Vins & Gastronomie
                </div>
                <Link
                  href="/les-vins"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nos Vins
                </Link>
                <Link
                  href="/gastronomie"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gastronomie
                </Link>
              </div>

              <div className="py-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                  Expériences
                </div>
                <Link
                  href="/reservation"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Réservation
                </Link>
                <Link
                  href="/evenements"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Événements
                </Link>
                <Link
                  href="/club"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Club Lastours
                </Link>
                <Link
                  href="/mecenat"
                  className="block px-4 py-2 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mécénat
                </Link>
              </div>

              <div className="pt-4 space-y-2 border-t border-border mt-4">
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/reservation">Réserver une Visite</Link>
                </Button>
                <Button className="w-full" asChild onClick={() => setIsMenuOpen(false)}>
                  <Link href="/les-vins">Découvrir nos Vins</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
