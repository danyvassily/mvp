import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CinematicImage } from "@/components/common/CinematicImage"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { Wine, Utensils, ChefHat, Grape } from "lucide-react"

export const metadata: Metadata = {
  title: "Gastronomie & Accords Mets-Vins | Château Lastours",
  description: "Découvrez l'art des accords mets-vins au Château Lastours. Nos cépages gaillacois révèlent toute leur personnalité avec la gastronomie du terroir.",
  keywords: ["gastronomie", "accords mets-vins", "cépages gaillacois", "château lastours", "terroir", "dégustation"],
  openGraph: {
    title: "Gastronomie & Accords Mets-Vins | Château Lastours",
    description: "L'art de marier nos vins gaillacois avec la gastronomie du terroir",
    images: [
      {
        url: "/PHOTOS-WEB-LASTOURS/Photos-GENERAL/repas-vins-lastours.jpg",
        width: 1200,
        height: 630,
        alt: "Gastronomie et accords mets-vins au Château Lastours"
      }
    ]
  }
}

const accordsData = [
  {
    type: "Vins Blancs",
    image: "https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Nos blancs secs révèlent leur fraîcheur et leur minéralité",
    accords: [
      "Poissons grillés et fruits de mer",
      "Fromages de chèvre du terroir",
      "Cuisine asiatique délicate",
      "Apéritifs raffinés"
    ],
    link: "/les-vins?type=blanc",
    color: "from-yellow-50 to-amber-50",
    icon: Wine
  },
  {
    type: "Vins Rouges", 
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    description: "Nos rouges s'épanouissent avec les saveurs généreuses",
    accords: [
      "Viandes grillées et gibier",
      "Cassoulet et plats mijotés",
      "Fromages affinés",
      "Charcuterie artisanale"
    ],
    link: "/les-vins?type=rouge",
    color: "from-red-50 to-rose-50",
    icon: ChefHat
  },
  {
    type: "Vins Rosés",
    image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
    description: "Nos rosés accompagnent les plaisirs estivaux",
    accords: [
      "Salades estivales et légumes grillés",
      "Cuisine méditerranéenne",
      "Barbecues et grillades",
      "Desserts aux fruits rouges"
    ],
    link: "/les-vins?type=rose",
    color: "from-pink-50 to-rose-50",
    icon: Utensils
  },
  {
    type: "Méthode Gaillacoise",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80",
    description: "Nos bulles subliment les moments festifs",
    accords: [
      "Apéritifs et amuse-bouches",
      "Poissons en sauce",
      "Desserts aux fruits",
      "Célébrations et toasts"
    ],
    link: "/les-vins?type=bulles",
    color: "from-blue-50 to-indigo-50",
    icon: Grape
  }
]

const galleryImages = [
  {
    src: "/PHOTOS-WEB-LASTOURS/Photos-GENERAL/repas-vins-lastours.jpg",
    alt: "Repas et dégustation de vins",
    title: "L'art de la table"
  },
  {
    src: "/Page/Gastronomie art de table - manque éventuel photo chambrage/Art de la Table.jpg",
    alt: "Art de la table élégant",
    title: "Service raffiné"
  },
  {
    src: "/Page/Gastronomie art de table - manque éventuel photo chambrage/carafage.jpg",
    alt: "Technique de carafage",
    title: "Carafage professionnel"
  },
  {
    src: "/PHOTOS-WEB-LASTOURS/BOUTEILLES/toutes-gammes/Ordre dégustation.jpg",
    alt: "Ordre de dégustation des vins",
    title: "Ordre de dégustation"
  }
]

export default function GastronomiePage() {
  return (
    <div className="min-h-screen relative bg-premium" data-page="gastronomie">
      {/* Texture grain prononcée - Style premium */}
      <div className="fixed inset-0 opacity-12 pointer-events-none texture-paper"></div>
      
      {/* Grain additionnel plus fin */}
      <div className="fixed inset-0 opacity-8 pointer-events-none texture-grain"></div>
      
      {/* Gradient subtil pour la profondeur */}
      <div className="fixed inset-0 opacity-30 pointer-events-none gradient-depth"></div>

      <div className="relative z-10">
        {/* Hero Section Cinématique */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Image de fond avec parallax subtil */}
          <div className="absolute inset-0">
            <CinematicImage
              src="/PHOTOS-WEB-LASTOURS/Photos-GENERAL/repas-vins-lastours.jpg"
              alt="Gastronomie et accords mets-vins"
              className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-100"
            />
            {/* Overlay gradients multiples pour plus de profondeur */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            {/* Vignette subtile */}
            <div className="absolute inset-0 vignette-radial" />
          </div>
          
          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 space-y-8">
            {/* Badge premium */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <Wine className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wider uppercase">Gastronomie</span>
            </div>
            
            {/* Titre principal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-[0.02em] leading-[0.9] mb-8">
              L'Art des
              <span className="block italic font-normal">Accords</span>
            </h1>
            
            {/* Sous-titre */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto tracking-wide">
              Découvrez comment nos cépages gaillacois subliment la gastronomie du terroir
            </p>

            {/* Ligne décorative */}
            <div className="flex items-center justify-center space-x-4 pt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Section Introduction */}
        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              {/* Kicker */}
              <div className="inline-block">
                <span className="text-sm font-medium tracking-widest uppercase text-accent-600 bg-accent-50 px-4 py-2 rounded-full border border-accent-200">
                  Tradition & Innovation
                </span>
              </div>
              
              {/* Titre */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-900 tracking-wide leading-tight">
                L'Harmonie des
                <span className="block text-accent-600 italic">Saveurs</span>
              </h2>
              
              {/* Contenu */}
              <div className="prose prose-xl max-w-none text-gray-700 space-y-6">
                <p className="leading-relaxed">
                  Nos vins révèlent toute leur personnalité lorsqu'ils sont associés aux saveurs authentiques de notre région. 
                  Chaque cépage gaillacois possède sa propre signature gustative, créant des accords uniques avec la gastronomie locale.
                </p>
                <p className="leading-relaxed">
                  Du Mauzac perlé aux rouges de Duras et Braucol, découvrez comment nos 13 cépages autochtones subliment 
                  les spécialités du terroir dans une symphonie de goûts et d'arômes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Accords Mets & Vins */}
        <section className="py-24 bg-gray-50 relative">
          <div className="container mx-auto px-4 lg:px-8">
            {/* En-tête de section */}
            <div className="text-center space-y-6 mb-20">
              <span className="text-sm font-medium tracking-widest uppercase text-accent-600 bg-accent-50 px-4 py-2 rounded-full border border-accent-200">
                Nos Suggestions
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 tracking-wide">
                Accords Mets & Vins
              </h2>
            </div>

            {/* Grille des accords */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {accordsData.map((accord, index) => {
                const IconComponent = accord.icon
                return (
                  <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white">
                    {/* Image */}
                    <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                      <Image
                        src={accord.image}
                        alt={accord.type}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${accord.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                      {/* Icon overlay */}
                      <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                        <IconComponent className="w-6 h-6 text-accent-600" />
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <CardContent className="p-8 space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-serif font-semibold text-gray-900 group-hover:text-accent-600 transition-colors duration-300">
                          {accord.type}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {accord.description}
                        </p>
                      </div>
                      
                      {/* Liste des accords */}
                      <ul className="space-y-3">
                        {accord.accords.map((item, i) => (
                          <li key={i} className="flex items-start space-x-3 text-gray-700">
                            <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Bouton */}
                      <Button 
                        variant="outline" 
                        size="lg" 
                        asChild 
                        className="w-full group-hover:bg-accent-600 group-hover:text-white group-hover:border-accent-600 transition-all duration-300"
                      >
                        <Link href={accord.link}>
                          Découvrir nos {accord.type.split(' ')[1]}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section Art du Service */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-10 texture-grain"></div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Page/Gastronomie art de table - manque éventuel photo chambrage/debouchage bouteille .jpg"
                    alt="L'art du service du vin"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Badge flottant */}
                <div className="absolute -top-6 -right-6 p-4 bg-accent-600 text-white rounded-full shadow-xl">
                  <ChefHat className="w-8 h-8" />
                </div>
              </div>

              {/* Contenu texte */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="space-y-4">
                  <span className="text-sm font-medium tracking-widest uppercase text-accent-400 bg-accent-900/50 px-4 py-2 rounded-full border border-accent-400/30">
                    Excellence
                  </span>
                  
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light leading-tight tracking-wide">
                    L'Art du
                    <span className="block text-accent-400 italic">Service</span>
                  </h2>
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Le service du vin est un art qui allie technique, élégance et respect du produit. 
                  Chaque geste compte pour révéler le meilleur de chaque cuvée.
                </p>
                
                {/* Techniques */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-white">Les techniques essentielles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Le débouchage", desc: "Geste précis qui préserve l'intégrité" },
                      { title: "Le carafage", desc: "Aération pour les vins complexes" },
                      { title: "Le chambrage", desc: "Température de service idéale" },
                      { title: "Le service", desc: "Ordre et présentation parfaite" }
                    ].map((technique, i) => (
                      <div key={i} className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        <h4 className="font-semibold text-accent-400 mb-2">{technique.title}</h4>
                        <p className="text-sm text-gray-400">{technique.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galerie des accords */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 lg:px-8">
            {/* En-tête */}
            <div className="text-center space-y-6 mb-16">
              <span className="text-sm font-medium tracking-widest uppercase text-accent-600 bg-accent-50 px-4 py-2 rounded-full border border-accent-200">
                Galerie
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 tracking-wide">
                L'Art de la Table
              </h2>
            </div>

            {/* Grille d'images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Titre en overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-medium text-lg">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Terroir */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Contenu texte */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-sm font-medium tracking-widest uppercase text-accent-600 bg-accent-50 px-4 py-2 rounded-full border border-accent-200">
                    Patrimoine
                  </span>
                  
                  <h2 className="text-4xl lg:text-5xl font-serif font-light text-gray-900 tracking-wide leading-tight">
                    Le Terroir
                    <span className="block text-accent-600 italic">Gaillacois</span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-gray-700">
                  <div className="p-6 bg-accent-50 rounded-xl border border-accent-200">
                    <h3 className="text-2xl font-serif font-semibold text-accent-800 mb-4">
                      13 Cépages, 7 Styles de Vins
                    </h3>
                    <p className="leading-relaxed">
                      Le vignoble gaillacois est unique par sa diversité de cépages autochtones. Cette richesse 
                      ampélographique nous permet de créer des vins aux personnalités distinctes.
                    </p>
                  </div>
                  
                  <p className="text-lg leading-relaxed">
                    Du Mauzac perlé aux rouges de Duras et Braucol, chaque cépage apporte sa signature gustative 
                    pour des accords authentiques et surprenants. Cette diversité fait de Gaillac l'une des 
                    appellations les plus riches de France.
                  </p>
                  
                  <p className="leading-relaxed">
                    Nos vins accompagnent naturellement les spécialités du Sud-Ouest : cassoulet, confit de canard, 
                    fromages de Roquefort, mais aussi la cuisine moderne et internationale.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Page/Notre vignoble - manque 1 photo/vignes.jpg"
                    alt="Vignoble gaillacois"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Badge flottant */}
                <div className="absolute -bottom-6 -left-6 p-4 bg-white shadow-xl rounded-full border border-accent-200">
                  <Grape className="w-8 h-8 text-accent-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-24 bg-gradient-to-br from-accent-900 via-accent-800 to-accent-900 text-white relative overflow-hidden">
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-10 texture-grain"></div>
          
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide leading-tight">
                  Découvrez nos
                  <span className="block italic font-normal text-accent-200">Accords</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-accent-100 leading-relaxed max-w-3xl mx-auto">
                  Réservez une dégustation commentée pour explorer nos accords mets et vins dans l'ambiance 
                  chaleureuse de notre domaine
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-white text-accent-900 hover:bg-accent-50 px-8 py-4 text-lg font-semibold shadow-xl"
                >
                  <Link href="/reservation">
                    <Wine className="w-5 h-5 mr-2" />
                    Réserver une Dégustation
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="border-2 border-white text-white hover:bg-white hover:text-accent-900 px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/les-vins">
                    <Grape className="w-5 h-5 mr-2" />
                    Découvrir nos Vins
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}