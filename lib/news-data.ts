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
    slug: "petrichor-rouge-2024",
    title: "Petrichor Rouge 2024 : L'Essence Minérale de Gaillac",
    date: "2024-11-15",
    excerpt:
      "Découvrez notre nouvelle cuvée Petrichor Rouge 2024, expression pure de notre terroir argilo-calcaire et de nos cépages autochtones.",
    image: "/Page/La vigne - ok/image00002.jpeg",
    tags: ["Nouveauté", "Petrichor", "Terroir"],
    author: "Louis de Faramond",
    body: [
      "Petrichor, mot grec désignant l'odeur caractéristique qui accompagne la première pluie après une période de sécheresse, capture parfaitement l'essence de cette cuvée exceptionnelle.",
      "Issue d'une sélection parcellaire rigoureuse sur nos sols argilo-calcaires, cette cuvée révèle toute la minéralité et la profondeur de notre terroir gaillacois.",
      "L'assemblage subtil de Duras, Braucol et Prunelard offre une palette aromatique complexe, alliant fruits noirs intenses, épices douces et notes minérales caractéristiques.",
      "Un élevage de 18 mois en barriques françaises permet d'affiner les tanins tout en préservant la fraîcheur et l'élégance naturelle du millésime.",
    ],
  },
  {
    slug: "fete-des-vins-gaillac-2024",
    title: "Fête des Vins de Gaillac 2024 : Célébration du Terroir",
    date: "2024-08-10",
    excerpt:
      "Retour sur la Fête des Vins de Gaillac 2024, événement phare de notre région qui met à l'honneur la diversité et l'excellence de nos appellations.",
    image: "/Page/La vigne - ok/IMG_20230809_124834.jpg",
    tags: ["Événement", "Gaillac", "Tradition"],
    author: "Château Lastours",
    body: [
      "La Fête des Vins de Gaillac constitue le rendez-vous incontournable des amateurs de vins du Sud-Ouest, célébrant l'authenticité et la diversité de notre terroir millénaire.",
      "Cette année encore, l'événement a attiré des milliers de visiteurs venus découvrir nos cépages autochtones uniques : Mauzac, Loin-de-l'Œil, Duras, Braucol et Prunelard.",
      "Notre domaine était fier de présenter sa gamme complète, des cuvées traditionnelles aux créations les plus innovantes, témoignant du dynamisme de l'appellation Gaillac.",
      "Les dégustations commentées, ateliers d'assemblage et visites de chai ont permis aux visiteurs de comprendre la richesse de notre patrimoine viticole et nos méthodes de vinification respectueuses de l'environnement.",
      "Cette fête populaire illustre parfaitement l'art de vivre gaillacois, mêlant convivialité, tradition et excellence œnologique dans un cadre authentique.",
    ],
  },
  {
    slug: "vendanges-2024-terroir-exception",
    title: "Vendanges 2024 : Un Millésime d'Exception sur Notre Terroir",
    date: "2024-09-20",
    excerpt:
      "Retour sur des vendanges 2024 marquées par des conditions climatiques idéales, offrant des raisins d'une maturité et d'une concentration remarquables.",
    image: "/Page/La vigne - ok/image00005.jpeg",
    tags: ["Vendanges", "Millésime", "Qualité"],
    author: "Louis de Faramond",
    body: [
      "Les vendanges 2024 resteront gravées dans notre mémoire comme un millésime d'exception, marqué par un équilibre climatique parfait entre chaleur estivale et fraîcheur nocturne.",
      "Nos 52 hectares de vignoble ont bénéficié de conditions idéales : un été ensoleillé suivi de nuits fraîches qui ont permis une maturation lente et homogène des raisins.",
      "La récolte manuelle, menée parcelle par parcelle selon la maturité optimale de chaque cépage, s'est déroulée dans d'excellentes conditions sanitaires.",
      "Les premières vinifications révèlent des jus d'une concentration et d'une pureté exceptionnelles, particulièrement sur nos cépages autochtones Duras et Braucol.",
      "Ce millésime 2024 s'annonce comme l'un des plus prometteurs de la décennie, alliant puissance, élégance et potentiel de garde remarquable.",
    ],
  },
  {
    slug: "certification-hve-engagement-durable",
    title: "Certification HVE : Notre Engagement pour une Viticulture Durable",
    date: "2024-06-12",
    excerpt:
      "Le Château Lastours renouvelle sa certification Haute Valeur Environnementale, témoignant de son engagement constant pour une viticulture respectueuse de l'environnement.",
    image: "/Page/La vigne - ok/image00036.jpeg",
    tags: ["HVE", "Durabilité", "Environnement"],
    author: "Château Lastours",
    body: [
      "La certification Haute Valeur Environnementale (HVE) du Château Lastours a été renouvelée avec succès, confirmant notre engagement de longue date pour une viticulture durable et respectueuse.",
      "Cette démarche s'articule autour de quatre piliers fondamentaux : la préservation de la biodiversité, la stratégie phytosanitaire raisonnée, la gestion de la fertilisation et la maîtrise de la ressource en eau.",
      "Nos pratiques incluent l'enherbement naturel des inter-rangs, la plantation de haies et d'arbres fruitiers pour favoriser la biodiversité, ainsi que l'utilisation de méthodes alternatives comme la confusion sexuelle.",
      "La réduction des intrants chimiques de 40% sur les cinq dernières années témoigne de notre volonté d'évoluer vers des méthodes toujours plus naturelles et respectueuses du terroir.",
      "Cette certification HVE s'inscrit dans une démarche globale de développement durable qui guide l'ensemble de nos décisions, de la vigne à la mise en bouteille.",
    ],
  },
  {
    slug: "nouveaux-assemblages-2025",
    title: "Nouveaux Assemblages 2025 : Innovation et Tradition",
    date: "2025-01-20",
    excerpt:
      "Découvrez nos nouveaux assemblages 2025 qui repoussent les limites de l'expression de nos cépages autochtones tout en respectant l'identité unique de Gaillac.",
    image: "/Page/La vigne - ok/Palissage vigne .jpg",
    tags: ["Innovation", "Assemblage", "Cépages"],
    author: "Louis de Faramond",
    body: [
      "L'année 2025 marque un tournant dans notre approche de l'assemblage, avec le développement de nouvelles cuvées qui subliment l'expression de nos cépages autochtones.",
      "Nos expérimentations portent sur des micro-vinifications parcellaires, permettant de révéler les nuances subtiles de chaque terroir de notre domaine de 52 hectares.",
      "L'assemblage innovant Mauzac-Loin-de-l'Œil pour nos blancs offre une fraîcheur et une minéralité inédites, tandis que la combinaison Duras-Prunelard révèle une complexité aromatique remarquable.",
      "Ces créations s'appuient sur une compréhension approfondie de notre terroir argilo-calcaire et sur des techniques de vinification à la pointe de l'innovation, tout en respectant l'authenticité gaillacoise.",
      "Chaque nouvel assemblage fait l'objet d'un suivi rigoureux et de dégustations régulières pour garantir l'excellence et la cohérence avec l'identité du Château Lastours.",
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

