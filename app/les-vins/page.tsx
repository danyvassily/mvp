import { Metadata } from "next";
import Image from "next/image";
import { ScrollAnimation, PremiumCardAnimation, CinematicTextAnimation } from "@/components/gsap/ScrollAnimations";
import { SectionReveal, ParallaxImage } from "@/components/gsap/CinematicEffects";
import { HeroBarrelsAnimation } from "@/components/gsap/HeroBarrelsAnimation";

export const metadata: Metadata = {
  title: "Nos Vins | Collections d'Exception - Château Lastours",
  description: "Découvrez nos gammes de vins d'exception : Doméni, Opus, Méthode Traditionnelle, Poussin et Signatures."
};

export default function WinesPageSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black relative">
      {/* Grain overlay for cinematic effect */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}>
      </div>

      {/* Hero Section with Barrels Animation */}
      <section className="relative h-screen overflow-hidden">
        <HeroBarrelsAnimation className="absolute inset-0">
          <div className="relative z-20 text-center text-white px-4 lg:px-8">
            <CinematicTextAnimation className="space-y-8" staggerDelay={0.2}>
              <div className="text-line">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight tracking-wider text-shadow-lg drop-shadow-2xl">
                  Collections d'Exception
                </h1>
              </div>
              <div className="text-line">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light max-w-5xl mx-auto leading-relaxed opacity-95 text-shadow drop-shadow-lg">
                  Découvrez nos gammes de vins d'exception, chacune révélant l'essence unique de notre terroir gaillacois
                </p>
              </div>
              <div className="text-line pt-8">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
              </div>
            </CinematicTextAnimation>
          </div>
        </HeroBarrelsAnimation>
      </section>

      {/* Gammes Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            
            {/* Gamme Doméni */}
            <PremiumCardAnimation index={0}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-md transition-all duration-700 group border border-gray-700/30" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                
                <div className="relative grid lg:grid-cols-2 items-center">
                  <div className="p-12 lg:p-16">
                    <ScrollAnimation animation="fadeIn" delay={0.2}>
                      <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium mb-6 border border-white/20">
                        Collection Signature
                      </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animation="slideUp" delay={0.4}>
                      <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-white tracking-wider">
                        Doméni
                      </h2>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animation="fadeIn" delay={0.6}>
                      <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                        L'expression pure du terroir gaillacois. Cette collection incarne l'authenticité de nos cépages autochtones, révélant la typicité de notre terroir avec élégance et caractère.
                      </p>
                    </ScrollAnimation>
                  
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <a href="/les-vins/domeni-blanc" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                        <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                        <h3 className="text-lg font-semibold text-white mb-2">Doméni Blanc</h3>
                        <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                      </a>

                      <a href="/les-vins/domeni-rose" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                        <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                        <h3 className="text-lg font-semibold text-white mb-2">Doméni Rosé</h3>
                        <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                      </a>

                      <a href="/les-vins/domeni-rouge" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                        <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                        <h3 className="text-lg font-semibold text-white mb-2">Doméni Rouge</h3>
                        <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                      </a>
                    </div>
                  </div>
                
                  <ScrollAnimation animation="slideLeft" delay={0.8}>
                    <div className="relative h-96 lg:h-[500px] p-4">
                      <Image
                        src="/PHOTOS-WEB-LASTOURS/BOUTEILLES/par-gamme/Gamme Domeni.jpg"
                        alt="Gamme Doméni - Bouteilles"
                        fill
                        className="object-contain object-center transition-transform duration-700"
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </PremiumCardAnimation>

            {/* Les autres gammes avec style simple pour éviter les erreurs */}
            <div className="space-y-16 lg:space-y-24">
              {/* Gamme Opus */}
              <PremiumCardAnimation index={1}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-md transition-all duration-700 group border border-gray-700/30" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                  
                  <div className="relative grid lg:grid-cols-2 items-center">
                    <div className="relative h-96 lg:h-[500px] order-2 lg:order-1 p-4">
                      <Image
                        src="/PHOTOS-WEB-LASTOURS/BOUTEILLES/par-gamme/Gamme Opus.jpg"
                        alt="Gamme Opus - Bouteilles"
                        fill
                        className="object-contain object-center transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="p-12 lg:p-16 order-1 lg:order-2">
                      <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium mb-6 border border-white/20">
                        Prestige Absolu
                      </div>
                      
                      <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-white tracking-wider">
                        Opus
                      </h2>
                      
                      <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                        L'excellence absolue. Nos cuvées les plus prestigieuses, issues de nos parcelles d'exception et élevées avec un soin méticuleux pour révéler toute la noblesse de notre terroir.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a href="/les-vins/opus-blanc" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                          <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                          <h3 className="text-lg font-semibold text-white mb-2">Opus Blanc</h3>
                          <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                        </a>

                        <a href="/les-vins/opus-rouge" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                          <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                          <h3 className="text-lg font-semibold text-white mb-2">Opus Rouge</h3>
                          <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
               </PremiumCardAnimation>

               {/* Gamme Méthode Traditionnelle */}
               <PremiumCardAnimation index={2}>
                 <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-md transition-all duration-700 group border border-gray-700/30" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)' }}>
                   <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                   
                   <div className="relative grid lg:grid-cols-2 items-center">
                     <div className="p-12 lg:p-16">
                       <ScrollAnimation animation="fadeIn" delay={0.2}>
                         <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium mb-6 border border-white/20">
                           Tradition Ancestrale
                         </div>
                       </ScrollAnimation>
                       
                       <ScrollAnimation animation="slideUp" delay={0.4}>
                         <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-white tracking-wider">
                           Méthode Traditionnelle
                         </h2>
                       </ScrollAnimation>
                       
                       <ScrollAnimation animation="fadeIn" delay={0.6}>
                         <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                           L'art de l'effervescence selon nos traditions. Élaborés selon la méthode ancestrale gaillacoise, ces vins pétillants révèlent toute la finesse de notre savoir-faire.
                         </p>
                       </ScrollAnimation>
                       
                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                         <a href="/les-vins/methode-blanc" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                           <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                           <h3 className="text-lg font-semibold text-white mb-2">Méthode Blanc</h3>
                           <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                         </a>

                         <a href="/les-vins/methode-rose" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                           <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                           <h3 className="text-lg font-semibold text-white mb-2">Méthode Rosé</h3>
                           <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                         </a>

                         <a href="/les-vins/perle" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                           <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                           <h3 className="text-lg font-semibold text-white mb-2">Perlé</h3>
                           <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                         </a>
                       </div>
                     </div>
                     
                     <ScrollAnimation animation="slideRight" delay={0.8}>
                       <div className="relative h-96 lg:h-[500px] p-4">
                         <Image
                           src="/PHOTOS-WEB-LASTOURS/BOUTEILLES/par-gamme/Gamme M‚thode.jpg"
                           alt="Gamme Méthode Traditionnelle - Bouteilles"
                           fill
                           className="object-contain object-center transition-transform duration-700"
                         />
                       </div>
                     </ScrollAnimation>
                   </div>
                 </div>
               </PremiumCardAnimation>

               {/* Gamme Poussin */}
               <PremiumCardAnimation index={3}>
                 <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-md transition-all duration-700 group border border-gray-700/30" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)' }}>
                   <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                   
                   <div className="relative grid lg:grid-cols-2 items-center">
                     <ScrollAnimation animation="slideLeft" delay={0.2}>
                       <div className="relative h-96 lg:h-[500px] order-2 lg:order-1 p-4">
                         <Image
                           src="/PHOTOS-WEB-LASTOURS/BOUTEILLES/par-gamme/Gamme Poussin.jpg"
                           alt="Gamme Poussin - Bouteilles"
                           fill
                           className="object-contain object-center transition-transform duration-700"
                         />
                       </div>
                     </ScrollAnimation>
                     
                     <div className="p-12 lg:p-16 order-1 lg:order-2">
                       <ScrollAnimation animation="fadeIn" delay={0.4}>
                         <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium mb-6 border border-white/20">
                           Fraîcheur & Convivialité
                         </div>
                       </ScrollAnimation>
                       
                       <ScrollAnimation animation="slideUp" delay={0.6}>
                         <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-white tracking-wider">
                           Poussin
                         </h2>
                       </ScrollAnimation>
                       
                       <ScrollAnimation animation="fadeIn" delay={0.8}>
                         <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                           Fraîcheur et gourmandise. Cette collection accessible invite à la découverte de nos terroirs avec des vins aux profils tendres et expressifs.
                         </p>
                       </ScrollAnimation>
                       
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <a href="/les-vins/poussin-blanc" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                           <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                           <h3 className="text-lg font-semibold text-white mb-2">Poussin Blanc</h3>
                           <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                         </a>

                         <a href="/les-vins/poussin-rose" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                           <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                           <h3 className="text-lg font-semibold text-white mb-2">Poussin Rosé</h3>
                           <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
               </PremiumCardAnimation>

               {/* Gamme Signatures */}
               <PremiumCardAnimation index={4}>
                 <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-md transition-all duration-700 group border border-gray-700/30" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)' }}>
                   <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                   
                   <div className="relative grid lg:grid-cols-2 items-center">
                     <div className="p-12 lg:p-16">
                       <ScrollAnimation animation="fadeIn" delay={0.2}>
                         <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium mb-6 border border-white/20">
                           Cuvées d'Exception
                         </div>
                       </ScrollAnimation>
                       
                       <ScrollAnimation animation="slideUp" delay={0.4}>
                         <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-white tracking-wider">
                           Signatures
                         </h2>
                       </ScrollAnimation>
                       
                       <ScrollAnimation animation="fadeIn" delay={0.6}>
                         <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                           Cuvées rares et mystérieuses. Chacune raconte une histoire unique, fruit d'une sélection parcellaire minutieuse et d'un élevage sur mesure.
                         </p>
                       </ScrollAnimation>
                       
                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                         <a href="/les-vins/claire-de-lune" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                           <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                           <h3 className="text-lg font-semibold text-white mb-2">Claire de Lune</h3>
                           <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                         </a>

                         <a href="/les-vins/petrichor-rouge" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                           <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                           <h3 className="text-lg font-semibold text-white mb-2">Petrichor Rouge</h3>
                           <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                         </a>

                         <a href="/les-vins/pigeonnier" className="group/card bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/10 hover:border-white/20">
                           <div className="h-2 w-12 bg-gray-400 rounded-full mx-auto mb-3 opacity-60"></div>
                           <h3 className="text-lg font-semibold text-white mb-2">Pigeonnier</h3>
                           <span className="text-sm text-gray-400 font-medium group-hover/card:text-gray-300 transition-colors">Découvrir →</span>
                         </a>
                       </div>
                     </div>
                     
                     <ScrollAnimation animation="slideRight" delay={0.8}>
                       <div className="relative h-96 lg:h-[500px] p-4">
                         <Image
                           src="/PHOTOS-WEB-LASTOURS/BOUTEILLES/par-gamme/Gamme Confidentielle.jpg"
                           alt="Gamme Signatures - Bouteilles"
                           fill
                           className="object-contain object-center transition-transform duration-700"
                         />
                       </div>
                     </ScrollAnimation>
                   </div>
                 </div>
               </PremiumCardAnimation>
             </div>

           </div>
         </div>
       </section>
     </div>
   );
 }
