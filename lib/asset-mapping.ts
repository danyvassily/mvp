/**
 * Mapping automatique des assets depuis /public/Page
 */

import { toSlug, namesMatch } from './slug'

export interface PageAssets {
  hero?: string
  gallery: string[]
  documents: string[]
}

// Mapping statique des assets disponibles (généré à partir de l'analyse du dossier)
export const ASSETS_MAP: Record<string, string[]> = {
  // Dégustation
  'degustation': [
    '/Page/Asset page dégustation/Degustation.html',
    '/Page/Dégustation - ok/[images-si-présentes]'
  ],
  
  // La vigne
  'la-vigne': [
    '/Page/Asset page la vigne/La vigne.docx',
    '/Page/Asset page la vigne/Page la vigne EN.docx',
    '/Page/La vigne - ok/[images-si-présentes]'
  ],
  
  // Notre Chai
  'notre-chai': [
    '/Page/Asset page Notre Chai/Le chai.docx',
    '/Page/Asset page Notre Chai/Notre chai En.docx',
    '/Page/Asset page Notre Chai/Notre chai.html',
    '/Page/Notre Chai - manque 1 photo/[images-si-présentes]'
  ],
  
  // Notre vignoble
  'notre-vignoble': [
    '/Page/Asset page Notre vignoble/Notre vignoble En.docx',
    '/Page/Asset page Notre vignoble/Notre vignoble Fr.html',
    '/Page/Notre vignoble - manque 1 photo/[images-si-présentes]'
  ],
  
  // Club
  'club': [
    '/Page/Page Club/Page présentation club FR EN.html',
    '/Page/Club - ok/[images-si-présentes]'
  ],
  
  // Gastronomie
  'gastronomie-art-de-la-table': [
    '/Page/Gastronomie art de table - manque éventuel photo chambrage/Art de la Table.jpg',
    '/Page/Gastronomie art de table - manque éventuel photo chambrage/carafage.jpg',
    '/Page/Gastronomie art de table - manque éventuel photo chambrage/debouchage bouteille .jpg',
    '/Page/Gastronomie art de table - manque éventuel photo chambrage/Page service et dégustation.docx'
  ],
  
  // Nos engagements
  'nos-engagements': [
    '/Page/Nos Engagement - ok/bulle-de-jazz-2021-chazo-127.jpg',
    '/Page/Nos Engagement - ok/1682596442650.jpg',
    '/Page/Nos Engagement - ok/IMG_20230808_201123 - pas bonne taille.jpg'
  ],
  
  // Nos événements
  'nos-evenements': [
    '/Page/Nos événements - ok/UAG-LASTOURS-infinitygraphic-16.jpg',
    '/Page/Nos événements - ok/bulle-de-jazz-2021-chazo-087.jpg',
    '/Page/Nos événements - ok/PIANO JARDINS.jpg',
    '/Page/Nos événements - ok/007.jpg',
    '/Page/Page Nos événement/Page Nos Evénement En.docx',
    '/Page/Page Nos événement/Page nos evenement Fr.docx'
  ],
  
  // Notre histoire
  'notre-histoire': [
    '/Page/Notre histoire - ok/[images-si-présentes]',
    '/Page/Page Notre histoire/Notre Histoire En.docx',
    '/Page/Page Notre histoire/Notre histoire Fr.docx'
  ],
  
  // Organiser événement
  'organiser-evenement': [
    '/Page/Organiser notre évenement - ok/[images-si-présentes]',
    '/Page/Page organiser votre événement/Page Organiser votre événement FREN.html'
  ],
  
  // Visite
  'visite': [
    '/Page/Visite - ok/[images-si-présentes]',
    '/Page/Page visite/Page visite.html'
  ],
  
  // Actualités
  'actualites': [
    '/Page/Page Actualité/Article Petrichor En.docx',
    '/Page/Page Actualité/Article Petrichor Fr.docx',
    '/Page/Page Actualité/Article fête des vins de Gaillac En.docx',
    '/Page/Page Actualité/Article fête des vins de Gaillac Fr.docx',
    '/Page/Page Actualité/Page Actualité En.docx',
    '/Page/Page Actualité/Page Actualité Fr.docx'
  ],
  
  // Méthode Blanche
  'methode-blanche': [
    '/Page/Page Méthode Blanche/FT_la_méthode_blanc.pdf',
    '/Page/Page Méthode Blanche/LA METHODE BLANC.jpg'
  ],
  
  // Méthode Rosé
  'methode-rose': [
    '/Page/Page Méthode Rosé/FT_la_méthode_rosée_23.pdf',
    '/Page/Page Méthode Rosé/LA METHODE ROSE.jpg'
  ]
}

// Pages qui manquent des photos selon la spécification
export const MISSING_ASSETS: Record<string, string[]> = {
  'notre-chai': ['Une photo supplémentaire du chai'],
  'notre-vignoble': ['Une photo supplémentaire du vignoble'],
  'gastronomie-art-de-la-table': ['Photo de chambrage (optionnelle)']
}

/**
 * Récupère les assets d'une page
 * @param pageId - L'ID de la page (slug)
 * @returns Les assets de la page
 */
export function getPageAssets(pageId: string): PageAssets {
  const assets = ASSETS_MAP[pageId] || []
  
  // Sépare les images, documents et autres
  const images = assets.filter(asset => 
    asset.match(/\.(jpg|jpeg|png|webp)$/i) && !asset.includes('[images-si-présentes]')
  )
  
  const documents = assets.filter(asset => 
    asset.match(/\.(pdf|docx|html)$/i)
  )
  
  // Détermine l'image hero (priorité : contient "hero", "cover", "art de la table", ou première image)
  let hero: string | undefined
  
  // Recherche d'une image hero prioritaire
  const heroImage = images.find(img => 
    img.toLowerCase().includes('hero') || 
    img.toLowerCase().includes('cover') ||
    img.toLowerCase().includes('art de la table')
  )
  
  if (heroImage) {
    hero = heroImage
  } else if (images.length > 0) {
    // Prend la première image comme hero
    hero = images[0]
  }
  
  // Galerie = toutes les images sauf le hero
  const gallery = hero ? images.filter(img => img !== hero) : images
  
  return {
    hero,
    gallery,
    documents
  }
}

/**
 * Récupère les fallbacks pour une page
 * @param pageId - L'ID de la page
 * @returns Les fallbacks nécessaires
 */
export function getPageFallbacks(pageId: string): {
  missingAssets: string[]
  needsHeroFallback: boolean
} {
  const assets = getPageAssets(pageId)
  const missingAssets = MISSING_ASSETS[pageId] || []
  
  return {
    missingAssets,
    needsHeroFallback: !assets.hero
  }
}

/**
 * Vérifie si une page a tous ses assets
 * @param pageId - L'ID de la page
 * @returns true si la page a tous ses assets
 */
export function hasCompleteAssets(pageId: string): boolean {
  const assets = getPageAssets(pageId)
  const missingAssets = MISSING_ASSETS[pageId] || []
  
  return assets.hero !== undefined && missingAssets.length === 0
}
