"use client";

import Link from "next/link";
import { ExternalLink, Eye } from "lucide-react";
import type { Cuvee } from "@/lib/wines";

interface CuveeCardProps {
  cuvee: Cuvee;
  accent: string;
}

const colorTagStyles = {
  Blanc: "bg-yellow-50 text-yellow-800 border-yellow-200",
  Rosé: "bg-pink-50 text-pink-800 border-pink-200", 
  Rouge: "bg-red-50 text-red-800 border-red-200",
  Effervescent: "bg-blue-50 text-blue-800 border-blue-200"
};

export function CuveeCard({ cuvee, accent }: CuveeCardProps) {
  const { title, route, pdf, colorTag, image } = cuvee;

  return (
    <article className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Image de la bouteille */}
      {image && (
        <div className="aspect-[4/5] bg-gradient-to-b from-gray-50 to-white p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={`Bouteille ${title}`}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      {/* Contenu */}
      <div className="p-6 space-y-4">
        {/* Titre et badge couleur */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
            {title}
          </h3>
          
          {colorTag && (
            <span 
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${colorTagStyles[colorTag]}`}
            >
              {colorTag}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 pt-2">
          {/* Bouton Découvrir la cuvée */}
          <Link
            href={route}
            className="group/btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ 
              backgroundColor: accent,
              focusRingColor: accent + "50"
            }}
            aria-label={`Découvrir la cuvée ${title}`}
          >
            <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            Découvrir la cuvée
          </Link>

          {/* Lien fiche technique */}
          {pdf && (
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              style={{ borderColor: accent + "40" }}
              aria-label={`Télécharger la fiche technique de ${title} (PDF)`}
            >
              <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              <span className="group-hover/link:underline">Fiche technique (PDF)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
