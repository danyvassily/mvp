import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TextBlock } from "@/components/common/TextBlock";
import { CinematicImage } from "@/components/common/CinematicImage";
import { QuoteRibbon } from "@/components/common/QuoteRibbon";
import { TransitionLink } from "@/components/gsap/TransitionLink";
// Animations temporairement désactivées pour debug
// import { ScrollParallax, RevealAnimation, TextImageTransition, SmoothScrollSection } from "@/components/gsap/ScrollParallax";
import { SPACING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Notre Histoire | Château Lastours",
  description: "Découvrez l'histoire du Château Lastours : une famille de vignerons passionnés, un patrimoine préservé et une tradition d'excellence au cœur du vignoble gaillacois.",
  openGraph: {
    title: "Notre Histoire | Château Lastours", 
    description: "L'histoire d'une famille de vignerons passionnés et d'un patrimoine viticole d'exception",
    images: ["/Page/Notre histoire - ok/007.jpg"],
  },
};

// Contenu authentique de l'histoire du domaine
const histoireSections = [
  {
    id: "origine",
    text: {
      kicker: "Histoire Millénaire",
      title: "Aux Origines de Gaillac",
      body: "Aux confins du Sud-Ouest de la France, entre Toulouse et Albi, s'étend un vignoble ancestral, vibrant d'histoire et de mémoire : le terroir de Gaillac. Ici, la vigne pousse depuis plus de deux millénaires. Dès l'époque gallo-romaine, ces terres baignées de soleil virent les premiers ceps prendre racine. Chaque pierre, chaque grappe, chaque souffle de vent y murmure une histoire."
    },
    image: {
      src: "/photos/007.jpg",
      alt: "Vue historique du domaine Château Lastours",
      ratio: "21/9" as const
    },
    layout: "text-first"
  },
  {
    id: "benedictins",
    text: {
      kicker: "Patrimoine Monastique",
      title: "Les Bénédictins : Artisans du Vin Effervescent",
      body: "Bien avant l'an mille, les moines bénédictins vinrent s'établir le long de la rivière Tarn. Avec patience et savoir, ils façonnèrent les premières grandes pages de l'histoire viticole du Sud-Ouest. Leurs cloîtres abritaient des secrets de fermentation, leurs mains bénissaient chaque vendange. C'est à eux que l'on doit la méthode ancestrale — première technique de vin effervescent au monde — précurseur oublié du champagne, née ici, à Gaillac."
    },
    image: {
      src: "/photos/gege-neg-allee-platanes.jpg",
      alt: "Allée de platanes historique du domaine",
      ratio: "16/9" as const
    },
    layout: "image-first"
  },
  {
    id: "chateau-lastours",
    text: {
      kicker: "Notre Domaine",
      title: "Château Lastours : La Mémoire des Siècles", 
      body: "Parmi les joyaux de ce terroir, le Château Lastours incarne l'alliance parfaite entre tradition et innovation. Notre domaine, guidé par la passion et le respect de la nature, cultive ces cépages rares en viticulture durable. Au Château Lastours, chaque bouteille est une ode à la passion, au terroir et au savoir-faire transmis depuis des générations. Chaque bouteille est une invitation à un voyage sensoriel authentique, qui célèbre la richesse du Sud-Ouest et la finesse des vins de Gaillac."
    },
    image: {
      src: "/photos/lastours017.jpg",
      alt: "Château Lastours aujourd'hui",
      ratio: "21/9" as const
    },
    layout: "text-first"
  },
  {
    id: "engagement",
    text: {
      kicker: "Engagement",
      title: "Une Viticulture Durable et Respectueuse",
      body: "Notre domaine s'étend sur des terres cultivées dans le respect des équilibres naturels. Nous favorisons les pratiques douces : travail mécanique des sols, enherbement naturel, traitements alternatifs et limitation des intrants chimiques. Certifiés HVE (Haute Valeur Environnementale), nous mettons en avant notre volonté d'adopter une viticulture durable, garantissant la qualité de nos vins à travers des pratiques agricoles respectueuses de la biodiversité."
    },
    image: {
      src: "/photos/gege-neg-6.jpg",
      alt: "Viticulture durable au Château Lastours",
      ratio: "16/9" as const
    },
    layout: "image-first"
  },
];

export default function HistoirePage() {
  return (
    <div className="min-h-screen relative bg-premium" data-page="histoire">
      {/* Texture grain prononcée - Style premium */}
      <div className="fixed inset-0 opacity-12 pointer-events-none texture-paper">
      </div>
      
      {/* Grain additionnel plus fin */}
      <div className="fixed inset-0 opacity-8 pointer-events-none texture-grain">
      </div>
      
      {/* Gradient subtil pour la profondeur */}
      <div className="fixed inset-0 opacity-30 pointer-events-none gradient-depth">
      </div>

      {/* Hero Section - Style Ruinart */}
      <section className="relative py-24 lg:py-40 xl:py-48 overflow-hidden z-10">
        <div className={cn(SPACING.container, "relative z-10")}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Contenu texte hero - Style Ruinart sans carte */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="py-12 lg:py-16">
                <SectionTitle
                  kicker="Le Domaine"
                  title="Notre Histoire"
                  subtitle="Découvrez l'histoire du Château Lastours : une famille de vignerons passionnés, un patrimoine préservé et une tradition d'excellence au cœur du vignoble gaillacois."
                  align="left"
                />
              </div>
            </div>

            {/* Image hero */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-700 group">
                <img
                  src="/Page/_common/histoire-hero.jpg"
                  alt="Château Lastours - Notre Histoire"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-stone-800/20" />
                  <div className="absolute inset-0 grain-subtle" />
              </div>
            </div>
          </div>
        </div>

        {/* Espace aéré après le hero - Style luxe */}
        <div className="h-32 lg:h-48"></div>
      </section>

      {/* Citation principale */}
      <QuoteRibbon
        text="Dans cette région où l'on cultive l'art de vivre aussi bien que celui du vin, le vin de Gaillac est bien plus qu'une boisson : c'est un héritage vivant."
        author="Château Lastours"
      />

      {/* Sections panoramiques - Style Ruinart */}
      {histoireSections.map((section, index) => (
        <section 
          key={section.id}
          className="relative z-10 mb-24 lg:mb-36 xl:mb-44"
        >
          {/* Image panoramique pleine largeur */}
          <div className="relative h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
            <img
              src={section.image.src}
              alt={section.image.alt}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay gradient subtil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] texture-grain-fine">
            </div>

            {/* Texte en overlay - Position selon layout */}
            <div className={`absolute inset-0 flex items-end ${section.layout === "text-first" ? "justify-start" : "justify-end"}`}>
              <div className={`p-8 lg:p-16 xl:p-20 max-w-2xl ${section.layout === "text-first" ? "text-left" : "text-right"}`}>
                {/* Kicker */}
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                    {section.text.kicker}
                  </span>
                </div>
                
                {/* Titre */}
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                  {section.text.title}
                </h2>
                
                {/* Corps de texte */}
                <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide max-w-xl">
                  {section.text.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer local - Style Ruinart */}
      <section className="py-40 lg:py-52 xl:py-60 relative z-10 gradient-footer-premium">
        <div className={SPACING.container}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              {/* Texte CTA */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="space-y-8">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-500/60 to-transparent mx-auto lg:mx-0" />
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-[0.02em] font-light leading-[1.1]">
                    Découvrez notre patrimoine viticole
                  </h3>
                  <p className="text-xl md:text-2xl leading-relaxed text-slate-600 font-light tracking-wide">
                    Plongez plus profondément dans l'univers de nos terroirs et de nos cuvées d'exception.
                  </p>
                </div>
              </div>
              
              {/* CTA button */}
              <div className="lg:col-span-5 text-center lg:text-right">
                <TransitionLink 
                  href="/domaine/terroir"
                  className="inline-flex items-center px-16 py-6 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-light text-lg tracking-wide transition-all duration-700 backdrop-blur-sm hover:scale-[1.02] shadow-2xl group"
                >
                  Découvrir notre terroir
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}