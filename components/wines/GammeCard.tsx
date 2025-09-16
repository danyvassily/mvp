"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import type { Gamme } from "@/lib/wines";

interface GammeCardProps {
  gamme: Gamme;
  isOpen: boolean;
  onToggle: () => void;
}

export function GammeCard({ gamme, isOpen, onToggle }: GammeCardProps) {
  const { title, description, accent, cover } = gamme;

  return (
    <div className="group">
      {/* Carte principale */}
      <button
        onClick={onToggle}
        className="w-full text-left bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-4 focus:ring-opacity-50"
        style={{ 
          focusRingColor: accent + "30"
        }}
        aria-expanded={isOpen.toString()}
        aria-controls={`gamme-${gamme.id}-content`}
        aria-label={`${isOpen ? 'Masquer' : 'Voir'} les cuvées de la gamme ${title}`}
      >
        <div className="relative">
          {/* Image de couverture (optionnelle) */}
          {cover && (
            <div className="aspect-[16/9] lg:aspect-[21/9] bg-gradient-to-r from-gray-100 to-gray-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cover}
                alt={`Gamme ${title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"
                style={{
                  background: `linear-gradient(135deg, ${accent}15 0%, transparent 70%)`
                }}
              />
            </div>
          )}

          {/* Contenu textuel */}
          <div className={`p-8 lg:p-10 ${!cover ? 'py-12 lg:py-16' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex-1 space-y-4">
                {/* Titre */}
                <h2 
                  className="text-3xl lg:text-4xl font-display font-bold group-hover:opacity-90 transition-opacity"
                  style={{ color: accent }}
                >
                  {title}
                </h2>

                {/* Description */}
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl">
                  {description}
                </p>

                {/* Indicateur d'action */}
                <div className="flex items-center gap-3 pt-2">
                  <span 
                    className="text-sm font-semibold uppercase tracking-wide"
                    style={{ color: accent }}
                  >
                    {isOpen ? 'Masquer les cuvées' : 'Voir les cuvées'}
                  </span>
                  <div className="flex items-center">
                    {isOpen ? (
                      <ChevronDown 
                        className="w-5 h-5 transition-transform duration-200"
                        style={{ color: accent }}
                      />
                    ) : (
                      <ChevronRight 
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                        style={{ color: accent }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barre colorée en bas */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300"
            style={{ 
              backgroundColor: accent,
              transform: isOpen ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left'
            }}
          />
        </div>
      </button>
    </div>
  );
}
