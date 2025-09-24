import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-wine-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Logo & Description */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-chateau-lastours.png" // Assurez-vous d'avoir ce logo
                alt="Châteaux Lastours Logo"
                width={120}
                height={120}
                className="mx-auto lg:mx-0"
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs mx-auto lg:mx-0">
              Depuis 1847, l'expression d'un terroir d'exception.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left md:text-left">
              <div>
                <h4 className="font-heading text-lg mb-4 text-white/90">Le Domaine</h4>
                <nav className="flex flex-col space-y-3">
                  <FooterLink href="/domaine/histoire">Notre Histoire</FooterLink>
                  <FooterLink href="/domaine/terroir">Le Terroir</FooterLink>
                  <FooterLink href="/domaine/engagement">Nos Engagements</FooterLink>
                </nav>
              </div>
              <div>
                <h4 className="font-heading text-lg mb-4 text-white/90">Nos Vins</h4>
                <nav className="flex flex-col space-y-3">
                  <FooterLink href="/les-vins">Toutes les cuvées</FooterLink>
                  <FooterLink href="/les-vins?collection=poussin">Gamme Poussin</FooterLink>
                  <FooterLink href="/les-vins?collection=confidentielle">Gamme Confidentielle</FooterLink>
                </nav>
              </div>
              <div>
                <h4 className="font-heading text-lg mb-4 text-white/90">Visitez</h4>
                <nav className="flex flex-col space-y-3">
                  <FooterLink href="/reservation">Réserver une visite</FooterLink>
                  <FooterLink href="/evenements">Événements</FooterLink>
                  <FooterLink href="/club">Club Lastours</FooterLink>
                </nav>
              </div>
              <div>
                <h4 className="font-heading text-lg mb-4 text-white/90">Infos</h4>
                <nav className="flex flex-col space-y-3">
                  <FooterLink href="/actualites">Actualités</FooterLink>
                  <FooterLink href="/presse">Presse</FooterLink>
                  <FooterLink href="/ou-nous-trouver">Où nous trouver</FooterLink>
                </nav>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="font-heading text-lg mb-4 text-white/90">Restez informés</h4>
            <p className="text-sm text-white/70 mb-4">Actualités, primeurs et offres exclusives.</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-wine-gold focus:border-wine-gold transition flex-1"
              />
              <Button variant="secondary" className="bg-wine-gold hover:bg-wine-gold/90 text-wine-dark font-bold whitespace-nowrap">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-white/60">
          <p className="text-center lg:text-left">© {new Date().getFullYear()} Châteaux Lastours. Tous droits réservés.</p>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-6">
            <div className="flex space-x-4">
              <SocialLink href="#"><Facebook className="w-5 h-5" /></SocialLink>
              <SocialLink href="#"><Instagram className="w-5 h-5" /></SocialLink>
              <SocialLink href="#"><Twitter className="w-5 h-5" /></SocialLink>
              <SocialLink href="#"><Youtube className="w-5 h-5" /></SocialLink>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-center">
              <FooterLink href="/mentions-legales">Mentions Légales</FooterLink>
              <FooterLink href="/cgv">CGV</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Sub-components for cleaner code
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="hover:text-wine-gold transition-colors duration-300 transform hover:translate-x-1">
    {children}
  </Link>
)

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="hover:text-wine-gold hover:scale-105 transition-all duration-300">
    {children}
  </Link>
)
