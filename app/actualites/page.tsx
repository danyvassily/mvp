import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/common/SectionTitle";
import { QuoteRibbon } from "@/components/common/QuoteRibbon";
import { TransitionLink } from "@/components/gsap/TransitionLink";
import { CinematicImage } from "@/components/common/CinematicImage";
import { SPACING } from "@/lib/constants";
import { getAllArticles } from "@/lib/news-data";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Actualités | Château Lastours",
  description: "Découvrez l'actualité du Château Lastours : vendanges, nouvelles cuvées, événements et initiatives pour une viticulture durable dans l'appellation Gaillac.",
  openGraph: {
    title: "Actualités | Château Lastours",
    description: "Nouvelles, événements et innovations du Château Lastours",
    images: ["/Page/La vigne - ok/la véraison .jpg"],
  },
};

export default function ActualitesPage() {
  const posts = getAllArticles();

  return (
    <div className="min-h-screen relative bg-premium" data-page="actualites">
      {/* Texture grain prononcée - Style premium */}
      <div className="fixed inset-0 opacity-12 pointer-events-none texture-paper">
      </div>
      
      {/* Grain additionnel plus fin */}
      <div className="fixed inset-0 opacity-8 pointer-events-none texture-grain">
      </div>
      
      {/* Gradient subtil pour la profondeur */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none gradient-depth">
      </div>

      {/* Hero Section Amélioré */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond avec parallax subtil */}
        <div className="absolute inset-0">
          <CinematicImage
            src="/Page/La vigne - ok/la véraison .jpg"
            alt="Actualités - Château Lastours"
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-100"
          />
          {/* Overlay gradients multiples pour plus de profondeur */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          {/* Vignette subtile */}
          <div className="absolute inset-0 vignette-radial" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 space-y-8">
          {/* Titre principal amélioré */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-light tracking-wider uppercase opacity-80 text-purple-200">
                Château Lastours
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight">
                Nos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-400">
                  Actualités
                </span>
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light italic opacity-90 max-w-4xl mx-auto leading-relaxed">
              L'Art de Vivre au Rythme des Saisons
            </h2>
          </div>

          {/* Description enrichie */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-95">
              <span className="text-purple-200 font-semibold">Découvrez l'Actualité de notre Domaine</span>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Suivez l'évolution de nos millésimes, nos initiatives durables, 
              nos événements culturels et les moments forts de la vie du domaine.
            </p>

            {/* Points clés en highlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-purple-400/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">📰</span>
                </div>
                <h3 className="font-semibold text-purple-200">Nouveautés</h3>
                <p className="text-sm opacity-80">Nouvelles cuvées et innovations</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-purple-400/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="font-semibold text-purple-200">Événements</h3>
                <p className="text-sm opacity-80">Dégustations et fêtes du vin</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-purple-400/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-semibold text-purple-200">Engagement</h3>
                <p className="text-sm opacity-80">Viticulture durable et HVE</p>
              </div>
            </div>
          </div>

          {/* Call-to-action avec flèche de défilement */}
          <div className="mt-12 space-y-6">
            <TransitionLink
              href="#articles"
              className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/20 hover:scale-105"
            >
              Découvrir nos Articles
              <span className="text-xl">→</span>
            </TransitionLink>
            
            {/* Flèche de défilement animée */}
            <div className="flex justify-center pt-8">
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de progression visuel */}
        <div className="absolute bottom-8 left-8 hidden lg:block">
          <div className="flex items-center space-x-4 text-white/60 text-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span>Explorez nos dernières nouvelles</span>
          </div>
        </div>
      </section>

      {/* Citation principale */}
      <QuoteRibbon
        text="Chaque saison apporte son lot de découvertes, d'innovations et de moments partagés autour de notre passion commune pour la vigne et le vin."
        author="Château Lastours"
      />

      {/* Section Articles - Style panoramique */}
      <section id="articles" className="py-24 lg:py-36 xl:py-44 relative z-10">
        <div className={SPACING.container}>
          <div className="text-center mb-16">
            <SectionTitle
              kicker="Nos Nouvelles"
              title="Actualités du Domaine"
              subtitle="Plongez dans l'univers du Château Lastours à travers nos dernières nouvelles, événements et découvertes"
              align="center"
            />
          </div>

          {/* Grille d'articles - Style premium */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {posts.map((post, index) => (
              <article key={post.slug} className="group">
                {/* Image panoramique */}
                <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden rounded-2xl shadow-2xl">
                  <CinematicImage
                    src={post.image || "/Page/La vigne - ok/image00002.jpeg"}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[3000ms]"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Contenu en overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags?.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Date */}
                    <time 
                      dateTime={post.date} 
                      className="text-sm text-white/80 font-light mb-4 tracking-wide"
                    >
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    
                    {/* Titre */}
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-4">
                      <TransitionLink 
                        href={`/actualites/${post.slug}`}
                        className="hover:text-purple-200 transition-colors duration-300"
                      >
                        {post.title}
                      </TransitionLink>
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-lg leading-relaxed text-white/90 font-light tracking-wide max-w-2xl mb-6">
                      {post.excerpt}
                    </p>
                    
                    {/* Call to action */}
                    <div>
                      <TransitionLink 
                        href={`/actualites/${post.slug}`}
                        className="inline-flex items-center gap-2 text-white font-medium hover:text-purple-200 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform"
                      >
                        Lire l'article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </TransitionLink>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer local - Style premium */}
      <section className="py-40 lg:py-52 xl:py-60 relative z-10 gradient-footer-premium">
        <div className={SPACING.container}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              {/* Texte CTA */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="space-y-8">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-500/60 to-transparent mx-auto lg:mx-0" />
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-[0.02em] font-light leading-[1.1]">
                    Restez Informés
                  </h3>
                  <p className="text-xl md:text-2xl leading-relaxed text-slate-600 font-light tracking-wide">
                    Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et invitations exclusives.
                  </p>
                </div>
              </div>
              
              {/* CTA buttons */}
              <div className="lg:col-span-5 text-center lg:text-right space-y-4">
                <TransitionLink 
                  href="/club/inscription"
                  className="inline-flex items-center px-16 py-6 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-light text-lg tracking-wide transition-all duration-700 backdrop-blur-sm hover:scale-[1.02] shadow-2xl group w-full lg:w-auto justify-center lg:justify-start"
                >
                  Rejoindre le Club
                </TransitionLink>
                <br />
                <TransitionLink 
                  href="/evenements"
                  className="inline-flex items-center px-16 py-6 bg-transparent hover:bg-slate-100 border border-slate-400 hover:border-slate-600 text-slate-900 font-light text-lg tracking-wide transition-all duration-700 backdrop-blur-sm hover:scale-[1.02] shadow-2xl group w-full lg:w-auto justify-center lg:justify-start"
                >
                  Nos Événements
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

