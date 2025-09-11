export interface Article {
  slug: string
  title: string
  date: string // YYYY-MM-DD
  excerpt: string
  image?: string
  tags?: string[]
  author?: string
  body: string[] // simple paragraph array for now
}

export const articles: Article[] = [
  {
    slug: "hve-certification",
    title: "Engagement HVE : notre démarche durable",
    date: "2024-06-12",
    excerpt:
      "Le Château Lastours confirme sa certification HVE et renforce ses pratiques de viticulture durable.",
    image: "/sustainable-vineyard-practices.png",
    tags: ["HVE", "Durable", "Engagement"],
    body: [
      "Notre démarche environnementale s'articule autour de la préservation de la biodiversité et de la réduction des intrants.",
      "Nous pratiquons la confusion sexuelle, privilégions les interventions douces et optimisons la gestion de l'eau.",
    ],
  },
  {
    slug: "vendanges-2024",
    title: "Vendanges 2024 : des raisins d'une grande maturité",
    date: "2024-09-20",
    excerpt:
      "Retour sur une récolte équilibrée avec des maturités homogènes et un état sanitaire exemplaire.",
    image: "/harvest-festival-event.png",
    tags: ["Vendanges", "Millésime"],
    body: [
      "Les conditions climatiques ont permis d'obtenir des raisins d'une belle concentration aromatique.",
      "Les premières dégustations de jus annoncent des profils précis et élégants.",
    ],
  },
  {
    slug: "primeurs-2025",
    title: "Primeurs 2025 : nos premières impressions",
    date: "2025-03-03",
    excerpt:
      "Un millésime prometteur, porté par la fraîcheur et la tension, avec des tanins d'une grande finesse.",
    image: "/premium-wine-bottles-methode-collection.png",
    tags: ["Primeurs", "Dégustation"],
    body: [
      "Nos cuvées en élevage présentent une remarquable pureté de fruit.",
      "Les assemblages s'orientent vers plus de précision et d'énergie.",
    ],
  },
  {
    slug: "nouvelle-cuvee-petrichor",
    title: "Petrichor : une cuvée confidentielle révélée",
    date: "2025-02-10",
    excerpt:
      "Notre nouvelle cuvée Petrichor met en lumière l'expression minérale et la profondeur de notre terroir.",
    image: "/wine-petrichor-rouge.png",
    tags: ["Confidentielle", "Petrichor"],
    body: [
      "Sélection parcellaire stricte, vendanges manuelles et élevage patient façonnent cette cuvée.",
      "Le vin dévoile une profondeur et une allonge remarquables, taillées pour la garde.",
    ],
  },
]

export function getAllArticles() {
  // newest first
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getLatestArticles(n: number) {
  return getAllArticles().slice(0, n)
}

