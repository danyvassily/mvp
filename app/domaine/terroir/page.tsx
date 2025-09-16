import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TextBlock } from "@/components/common/TextBlock";
import { QuoteRibbon } from "@/components/common/QuoteRibbon";
import { TransitionLink } from "@/components/gsap/TransitionLink";
import { SPACING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Notre Terroir | Château Lastours",
  description: "Découvrez le terroir exceptionnel du Château Lastours : 52 hectares de vignoble dans l'appellation Gaillac, des cépages traditionnels et un savoir-faire ancestral.",
  openGraph: {
    title: "Notre Terroir | Château Lastours", 
    description: "Un terroir d'exception au cœur de l'appellation Gaillac",
    images: ["/Page/Notre vignoble - manque 1 photo/vignes.jpg"],
  },
};

// Données du terroir - Contenu authentique du Château Lastours
const terroirData = {
  hero: {
    title: "Le Vignoble de Gaillac",
    subtitle: "Un Voyage Millénaire au Cœur du Sud-Ouest",
    description: "Aux confins du Sud-Ouest de la France, entre Toulouse et Albi, s'étend un vignoble ancestral, vibrant d'histoire et de mémoire : le terroir de Gaillac. Ici, la vigne pousse depuis plus de deux millénaires.",
    image: "/Page/Notre vignoble - manque 1 photo/vignes.jpg"
  },
  stats: [
    {
      label: "Surface",
      value: "52ha",
      description: "Vignoble total"
    },
    {
      label: "Âge Moyen",
      value: "35 ans",
      description: "Des vignes"
    },
    {
      label: "Répartition",
      value: "1/3",
      description: "Blanc - 2/3 Rouge"
    },
    {
      label: "Appellation",
      value: "AOC",
      description: "Gaillac"
    }
  ],
  cepages: {
    title: "Des Cépages Autochtones Uniques",
    description: "Ce terroir vivant, vibrant, offre une expression rare de cépages autochtones : Mauzac, frais, évoquant la pomme verte et les fleurs blanches ; Loin de l'œil, un raisin blanc rare, quasi uniquement cultivé à Gaillac, connu pour produire des vins frais et fruités ; Duras, puissant, épicé et fruité ; Braucol, intense et sauvage, aux arômes de fruits noirs et d'épices ; Prunelard, puissant aux notes de fruits noirs, de pruneaux et de violettes.",
    description2: "Des variétés que l'on ne trouve nulle part ailleurs, et qui font toute l'identité unique des vins de Gaillac. Chaque cépage révèle le caractère authentique de notre terroir millénaire.",
    image: "/Page/La vigne - ok/la véraison .jpg"
  },
  climat: {
    title: "Un Terroir d'Exception, Entre Ciel et Terre",
    description: "Le climat de Gaillac se situe à la croisée des influences atlantiques et méditerranéennes, offrant des étés ensoleillés et des nuits rafraîchies par les brumes du Tarn. Les sols argilo-calcaires, riches en minéraux, donnent profondeur et caractère aux raisins.",
    description2: "Ici, la nature est généreuse et contrastée. Cette région où l'on cultive l'art de vivre aussi bien que celui du vin offre un terroir vivant et vibrant.",
    description3: "Dans cette harmonie entre tradition et nature, chaque parcelle révèle son caractère unique et contribue à l'identité authentique des vins de Gaillac.",
    image: "/PHOTOS-WEB-LASTOURS/VIGNES/Photo Manon Bessolles vignes heure bleue2.jpg"
  },
  parcelles: [
    {
      id: "rive-droite",
      title: "La Rive Droite",
      description: "Nos parcelles historiques s'étendent sur la rive droite du Tarn, bénéficiant d'une exposition sud exceptionnelle. Ces vignes anciennes, cultivées selon les méthodes traditionnelles, produisent nos cuvées les plus authentiques.",
      image: "/Page/Notre vignoble - manque 1 photo/vieille vigne.jpg",
      superficie: "18 hectares",
      cepages: "Braucol, Duras",
      age: "35 ans"
    },
    {
      id: "rive-gauche",
      title: "La Rive Gauche",
      description: "Sur la rive gauche, nos parcelles bénéficient des brumes matinales du Tarn qui préservent la fraîcheur des raisins. Terroir privilégié pour nos cépages blancs autochtones.",
      image: "/Page/La vigne - ok/Palissage vigne .jpg",
      superficie: "17 hectares",
      cepages: "Mauzac, Loin-de-l'œil",
      age: "30 ans"
    },
    {
      id: "plateau-cordais",
      title: "Le Plateau Cordais",
      description: "Le plateau cordais, avec ses sols argilo-calcaires, offre des conditions uniques pour l'expression de nos cépages. Cette diversité de terroirs contribue à la richesse de notre gamme.",
      image: "/PHOTOS-WEB-LASTOURS/VIGNES/20230426_214346.jpg",
      superficie: "17 hectares",
      cepages: "Prunelard, Mauzac",
      age: "25 ans"
    }
  ]
};

export default function TerroirPage() {
  return (
    <div className="min-h-screen relative" data-page="terroir" style={{backgroundColor: '#fafaf9'}}>
      {/* Texture grain prononcée - Style premium */}
      <div 
        className="fixed inset-0 opacity-12 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)' fill='%23000000'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}>
      </div>
      
      {/* Grain additionnel plus fin */}
      <div 
        className="fixed inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fineGrain)' fill='%23333333'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }}>
      </div>
      
      {/* Gradient subtil pour la profondeur */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.015) 70%, transparent 100%)'
        }}>
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
                  title={terroirData.hero.title}
                  subtitle={terroirData.hero.description}
                  align="left"
                />
              </div>
            </div>

            {/* Image hero */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-700 group">
                <img
                  src={terroirData.hero.image}
                  alt="Vignoble du Château Lastours"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
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
        text="Dès l'époque gallo-romaine, ces terres baignées de soleil virent les premiers ceps prendre racine. Chaque pierre, chaque grappe, chaque souffle de vent y murmure une histoire."
        author="Château Lastours"
      />

      {/* Statistiques du terroir */}
      <section className="py-24 lg:py-36 xl:py-44 relative z-10">
        <div className={SPACING.container}>
          <div className="text-center mb-16">
            <SectionTitle
              kicker="Héritage Millénaire"
              title="Château Lastours : la Mémoire des Siècles"
              subtitle="Notre domaine, guidé par la passion et le respect de la nature, cultive ces cépages rares en viticulture durable et certifiée HVE"
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
            {terroirData.stats.map((stat, index) => {
              return (
                <div key={index} className="text-center group">
                  <h3 className="text-lg font-light mb-6 text-slate-600 tracking-[0.1em] uppercase">{stat.label}</h3>
                  <p className="text-6xl lg:text-7xl xl:text-8xl font-serif text-slate-900 mb-6 font-light tracking-tight leading-none">{stat.value}</p>
                  <p className="text-base text-slate-700 font-light leading-relaxed">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Cépages - Style panoramique */}
      <section className="relative z-10 mb-24 lg:mb-36 xl:mb-44">
        {/* Image panoramique pleine largeur */}
        <div className="relative h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
          <img
            src={terroirData.cepages.image}
            alt="Cépages traditionnels gaillacois"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[3000ms]"
          />
          
          {/* Overlay gradient subtil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)' fill='%23000000'/%3E%3C/svg%3E")`,
              backgroundSize: '150px 150px'
            }}>
          </div>

          {/* Texte en overlay - À droite */}
          <div className="absolute inset-0 flex items-end justify-end">
            <div className="p-8 lg:p-16 xl:p-20 max-w-2xl text-right">
              {/* Kicker */}
              <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                  Tradition
                </span>
              </div>
              
              {/* Titre */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                {terroirData.cepages.title}
              </h2>
              
              {/* Corps de texte */}
              <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide max-w-xl">
                {terroirData.cepages.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Climat - Style panoramique */}
      <section className="relative z-10 mb-24 lg:mb-36 xl:mb-44">
        {/* Image panoramique pleine largeur */}
        <div className="relative h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
          <img
            src={terroirData.climat.image}
            alt="Vignoble à l'heure bleue"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[3000ms]"
          />
          
          {/* Overlay gradient subtil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)' fill='%23000000'/%3E%3C/svg%3E")`,
              backgroundSize: '150px 150px'
            }}>
          </div>

          {/* Texte en overlay - À gauche */}
          <div className="absolute inset-0 flex items-end justify-start">
            <div className="p-8 lg:p-16 xl:p-20 max-w-2xl text-left">
              {/* Kicker */}
              <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                  Climat
                </span>
              </div>
              
              {/* Titre */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                {terroirData.climat.title}
              </h2>
              
              {/* Corps de texte */}
              <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide max-w-xl">
                {terroirData.climat.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Parcelles */}
      <section className="py-24 lg:py-36 xl:py-44 relative z-10">
        <div className={SPACING.container}>
          <div className="text-center mb-16">
            <SectionTitle
              kicker="Trois Terroirs"
              title="La Richesse de Nos Parcelles"
              subtitle="Sur nos trois terroirs - la rive droite, la rive gauche et le plateau cordais - chaque parcelle révèle son caractère unique"
              align="center"
            />
          </div>

          {/* Parcelles en format panoramique - Style Ruinart */}
          <div className="space-y-24 lg:space-y-36">
            {terroirData.parcelles.map((parcelle, index) => (
              <div key={parcelle.id} className="relative">
                {/* Image panoramique */}
                <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
                  <img
                    src={parcelle.image}
                    alt={parcelle.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[3000ms]"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Texte en overlay - Alternance gauche/droite */}
                  <div className={`absolute inset-0 flex items-end ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <div className={`p-8 lg:p-12 xl:p-16 max-w-lg ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      <h3 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-6">
                        {parcelle.title}
                      </h3>
                      <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide mb-8">
                        {parcelle.description}
                      </p>
                      
                      {/* Détails en overlay */}
                      <div className="space-y-3 text-white/80">
                        <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} gap-2`}>
                          <span className="text-sm font-light tracking-wide">Superficie:</span>
                          <span className="text-sm font-medium">{parcelle.superficie}</span>
                        </div>
                        <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} gap-2`}>
                          <span className="text-sm font-light tracking-wide">Cépages:</span>
                          <span className="text-sm font-medium">{parcelle.cepages}</span>
                        </div>
                        <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} gap-2`}>
                          <span className="text-sm font-light tracking-wide">Âge moyen:</span>
                          <span className="text-sm font-medium">{parcelle.age}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer local - Style Ruinart */}
      <section className="py-40 lg:py-52 xl:py-60 relative z-10" style={{background: 'linear-gradient(to bottom, rgba(248, 248, 247, 0.8), rgba(245, 245, 244, 0.9))'}}>
        <div className={SPACING.container}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              {/* Texte CTA */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="space-y-8">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-500/60 to-transparent mx-auto lg:mx-0" />
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-[0.02em] font-light leading-[1.1]">
                    Explorez Notre Terroir
                  </h3>
                  <p className="text-xl md:text-2xl leading-relaxed text-slate-600 font-light tracking-wide">
                    Découvrez par vous-même la richesse de notre terroir lors d'une visite guidée de nos parcelles.
                  </p>
                </div>
              </div>
              
              {/* CTA buttons */}
              <div className="lg:col-span-5 text-center lg:text-right space-y-4">
                <TransitionLink 
                  href="/reservation"
                  className="inline-flex items-center px-16 py-6 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-light text-lg tracking-wide transition-all duration-700 backdrop-blur-sm hover:scale-[1.02] shadow-2xl group w-full lg:w-auto justify-center lg:justify-start"
                >
                  Réserver une Visite
                </TransitionLink>
                <br />
                <TransitionLink 
                  href="/savoir-faire/vigne"
                  className="inline-flex items-center px-16 py-6 bg-transparent hover:bg-slate-100 border border-slate-400 hover:border-slate-600 text-slate-900 font-light text-lg tracking-wide transition-all duration-700 backdrop-blur-sm hover:scale-[1.02] shadow-2xl group w-full lg:w-auto justify-center lg:justify-start"
                >
                  Découvrir la Vigne
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}