"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SectionHeader } from "./SectionHeader";
import { GammeCard } from "./GammeCard";
import { CuveeCard } from "./CuveeCard";
import { gammes, getAvailableColors, filterCuveesByColor } from "@/lib/wines";
import { Button } from "@/components/ui/button";

export function WinesPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [openGamme, setOpenGamme] = useState<string | null>(null);
  const [colorFilter, setColorFilter] = useState<string>("Tous");

  // Synchroniser avec l'URL au chargement
  useEffect(() => {
    const gammeFromUrl = searchParams.get("gamme");
    if (gammeFromUrl && gammes.find(g => g.id === gammeFromUrl)) {
      setOpenGamme(gammeFromUrl);
    }
  }, [searchParams]);

  const handleGammeToggle = (gammeId: string) => {
    const newGamme = openGamme === gammeId ? null : gammeId;
    setOpenGamme(newGamme);
    setColorFilter("Tous");

    // Mettre à jour l'URL
    const url = new URL(window.location.href);
    if (newGamme) {
      url.searchParams.set("gamme", newGamme);
    } else {
      url.searchParams.delete("gamme");
    }
    router.replace(url.pathname + url.search, { scroll: false });
  };

  const availableColors = getAvailableColors();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Collections d'Exception"
            subtitle="Découvrez nos gammes de vins d'exception, chacune révélant l'essence unique de notre terroir gaillacois et de notre savoir-faire artisanal transmis de génération en génération."
          />
        </div>
      </section>

      {/* Gammes Section */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8 lg:space-y-12">
            {gammes.map((gamme) => {
              const isOpen = openGamme === gamme.id;
              const filteredCuvees = filterCuveesByColor(gamme.cuvees, colorFilter);

              return (
                <div key={gamme.id} className="space-y-8">
                  {/* Carte de la gamme */}
                  <GammeCard
                    gamme={gamme}
                    isOpen={isOpen}
                    onToggle={() => handleGammeToggle(gamme.id)}
                  />

                  {/* Contenu étendu : cuvées */}
                  {isOpen && (
                    <div
                      id={`gamme-${gamme.id}-content`}
                      className="animate-in slide-in-from-top-4 duration-300 space-y-6"
                    >
                      {/* Filtre couleur */}
                      {availableColors.length > 2 && gamme.cuvees.length > 2 && (
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                          <span className="text-sm font-medium text-gray-600 self-center mr-2">
                            Filtrer par couleur :
                          </span>
                          {availableColors.map((color) => {
                            const hasThisColor = gamme.cuvees.some(cuvee => 
                              !color || color === "Tous" || cuvee.colorTag === color
                            );
                            
                            if (!hasThisColor) return null;

                            return (
                              <Button
                                key={color}
                                variant={colorFilter === color ? "default" : "outline"}
                                size="sm"
                                onClick={() => setColorFilter(color)}
                                className="text-xs"
                                style={colorFilter === color ? {
                                  backgroundColor: gamme.accent,
                                  borderColor: gamme.accent,
                                  color: 'white'
                                } : {
                                  borderColor: gamme.accent + "40",
                                  color: gamme.accent
                                }}
                              >
                                {color}
                              </Button>
                            );
                          })}
                        </div>
                      )}

                      {/* Grille des cuvées */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        {filteredCuvees.map((cuvee) => (
                          <CuveeCard
                            key={cuvee.slug}
                            cuvee={cuvee}
                            accent={gamme.accent}
                          />
                        ))}
                      </div>

                      {/* Message si aucune cuvée après filtrage */}
                      {filteredCuvees.length === 0 && colorFilter !== "Tous" && (
                        <div className="text-center py-8">
                          <p className="text-gray-500">
                            Aucune cuvée {colorFilter.toLowerCase()} dans cette gamme.
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setColorFilter("Tous")}
                            className="mt-2"
                          >
                            Voir toutes les cuvées
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section finale avec CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
            Une Question ? Besoin de Conseils ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour vous accompagner dans la découverte de nos vins d'exception.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              Nous Contacter
            </Button>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Visiter le Domaine
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
