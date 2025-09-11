import type React from "react"
import type { Metadata } from "next"
import { Inria_Serif as Libertinus_Serif } from "next/font/google"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"
import { CartProvider } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingAuthButton } from "@/components/floating-auth-button"
import { Toaster } from "@/components/ui/toaster"

const libertinusSerif = Libertinus_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libertinus-serif",
  weight: ["300", "400", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Châteaux Lastours - Domaine Viticole de Prestige",
  description:
    "Découvrez l'excellence viticole du sud de la France avec Châteaux Lastours. Vins d'exception, terroir unique, tradition et savoir-faire.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${libertinusSerif.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <AuthProvider>
          <CartProvider>
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
            <FloatingAuthButton />
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
