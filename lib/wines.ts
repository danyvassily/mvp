export type Cuvee = {
  title: string;
  slug: string;
  route: string;
  pdf?: string;         // si override, sinon dérivé de slug
  colorTag?: "Blanc" | "Rosé" | "Rouge" | "Effervescent";
  image?: string;
};

export type Gamme = {
  id: string;
  title: string;
  description: string;
  accent: string;
  cover?: string;
  cuvees: Cuvee[];
};

// Map des PDFs avec noms spécifiques (overrides)
const pdfOverrides: Record<string, string> = {
  "claire-de-lune": "/fiche-technique/FT_blanc_claire_de_lune_2023.pdf",
  "domeni-blanc": "/fiche-technique/FT_blanc_Domeni_2024.pdf",
  "domeni-rose": "/fiche-technique/FT_rosé_Domeni_2024.pdf",
  "domeni-rouge": "/fiche-technique/FT_rouge_Domeni_2022.pdf",
  "opus-blanc": "/fiche-technique/FT_blanc_Opus_2023.pdf",
  "opus-rouge": "/fiche-technique/FT_rouge_opus_2021.pdf",
  "petrichor-rouge": "/fiche-technique/FT_Rouge_Petrichor_2020.pdf",
  "pigeonnier": "/fiche-technique/FT_Rouge_Cuvée_du_Pigeonnier_2022.pdf",
  "perle": "/fiche-technique/FT_perlé_2023.pdf",
  "poussin-blanc": "/fiche-technique/FT_poussin_moelleux_2024.pdf",
  "poussin-rose": "/fiche-technique/FT_poussin_rosé_moelleux_2024.pdf",
  "methode-blanc": "/fiche-technique/FT_la_méthode_blanc.pdf",
  "methode-rose": "/fiche-technique/FT_la_méthode_rosée_23.pdf"
};

// Helper pour obtenir le PDF path
export function getPdfPath(slug: string): string {
  return pdfOverrides[slug] || `/fiche-technique/${slug}.pdf`;
}

export const gammes: Gamme[] = [
  {
    id: "domeni",
    title: "Doméni",
    description: "L'expression pure du terroir gaillacois. Cette collection incarne l'authenticité de nos cépages autochtones, révélant la typicité de notre terroir avec élégance et caractère.",
    accent: "#D4AF37", // Or élégant
    cover: "/images/gammes/domeni-cover.jpg",
    cuvees: [
      {
        title: "Doméni Blanc",
        slug: "domeni-blanc",
        route: "/les-vins/domeni-blanc",
        pdf: getPdfPath("domeni-blanc"),
        colorTag: "Blanc",
        image: "/Page/Page Cuvée Domeni blanc/BLANC DOMENI.jpg"
      },
      {
        title: "Doméni Rosé", 
        slug: "domeni-rose",
        route: "/les-vins/domeni-rose",
        pdf: getPdfPath("domeni-rose"),
        colorTag: "Rosé",
        image: "/Page/Page Cuvée domeni Rosé/ROSE DOMENI.jpg"
      },
      {
        title: "Doméni Rouge",
        slug: "domeni-rouge", 
        route: "/les-vins/domeni-rouge",
        pdf: getPdfPath("domeni-rouge"),
        colorTag: "Rouge",
        image: "/Page/Page Cuvée Domeni Rouge/ROUGE DOMENI.jpg"
      }
    ]
  },
  {
    id: "opus",
    title: "Opus",
    description: "L'excellence absolue. Nos cuvées les plus prestigieuses, issues de nos parcelles d'exception et élevées avec un soin méticuleux pour révéler toute la noblesse de notre terroir.",
    accent: "#8B4513", // Bordeaux noble
    cover: "/images/gammes/opus-cover.jpg",
    cuvees: [
      {
        title: "Opus Blanc",
        slug: "opus-blanc",
        route: "/les-vins/opus-blanc", 
        pdf: getPdfPath("opus-blanc"),
        colorTag: "Blanc",
        image: "/Page/Page Cuvée Opus Balnc/BLANC OPUS.jpg"
      },
      {
        title: "Opus Rouge",
        slug: "opus-rouge",
        route: "/les-vins/opus-rouge",
        pdf: getPdfPath("opus-rouge"),
        colorTag: "Rouge",
        image: "/Page/Page Cuvée Opus Rouge/ROUGE OPUS.jpg"
      }
    ]
  },
  {
    id: "methode",
    title: "Méthode Traditionnelle",
    description: "L'art de l'effervescence selon nos traditions. Élaborés selon la méthode ancestrale gaillacoise, ces vins révèlent la finesse de nos bulles et la complexité de nos terroirs.",
    accent: "#4A90E2", // Bleu sophistiqué
    cover: "/images/gammes/methode-cover.jpg",
    cuvees: [
      {
        title: "Méthode Blanc",
        slug: "methode-blanc",
        route: "/les-vins/methode-blanc",
        pdf: getPdfPath("methode-blanc"), 
        colorTag: "Effervescent",
        image: "/Page/Page Méthode Blanche/LA METHODE BLANC.jpg"
      },
      {
        title: "Méthode Rosé",
        slug: "methode-rose",
        route: "/les-vins/methode-rose",
        pdf: getPdfPath("methode-rose"),
        colorTag: "Effervescent", 
        image: "/Page/Page Méthode Rosé/LA METHODE ROSE.jpg"
      },
      {
        title: "Perlé",
        slug: "perle",
        route: "/les-vins/perle",
        pdf: getPdfPath("perle"),
        colorTag: "Effervescent",
        image: "/Page/Page cuvée Perlé/BLANC PERLE.jpg"
      }
    ]
  },
  {
    id: "poussin", 
    title: "Poussin",
    description: "Fraîcheur et gourmandise. Cette collection accessible invite à la découverte de nos vins dans un esprit de convivialité, parfaite pour les nouveaux amateurs de vin.",
    accent: "#50C878", // Vert émeraude
    cover: "/images/gammes/poussin-cover.jpg",
    cuvees: [
      {
        title: "Poussin Blanc",
        slug: "poussin-blanc",
        route: "/les-vins/poussin-blanc",
        pdf: getPdfPath("poussin-blanc"),
        colorTag: "Blanc",
        image: "/Page/Page Cuvée poussin Blanc/BLANC POUSSIN.jpg"
      },
      {
        title: "Poussin Rosé",
        slug: "poussin-rose", 
        route: "/les-vins/poussin-rose",
        pdf: getPdfPath("poussin-rose"),
        colorTag: "Rosé",
        image: "/Page/Page Cuvée Poussin Rosé/ROSE POUSSIN.jpg"
      }
    ]
  },
  {
    id: "signatures",
    title: "Signatures",
    description: "Cuvées rares et mystérieuses. Chacune raconte une histoire unique, issue de parcelles sélectionnées et de vinifications d'exception pour les amateurs les plus exigeants.",
    accent: "#9370DB", // Violet mystique
    cover: "/images/gammes/signatures-cover.jpg", 
    cuvees: [
      {
        title: "Claire de Lune",
        slug: "claire-de-lune",
        route: "/les-vins/claire-de-lune",
        pdf: getPdfPath("claire-de-lune"),
        colorTag: "Blanc",
        image: "/Page/Page cuvée Claire de Lune/CLAIRE DE LUNE.jpg"
      },
      {
        title: "Petrichor Rouge",
        slug: "petrichor-rouge",
        route: "/les-vins/petrichor-rouge", 
        pdf: getPdfPath("petrichor-rouge"),
        colorTag: "Rouge",
        image: "/Page/Page Cuvée Pertichor Rouge/ROUGE PETRICHOR.jpg"
      },
      {
        title: "Pigeonnier",
        slug: "pigeonnier",
        route: "/les-vins/pigeonnier",
        pdf: getPdfPath("pigeonnier"),
        colorTag: "Rouge",
        image: "/Page/Page Cuvée Pigeonnier/ROUGE PIGEONNIER.jpg"
      }
    ]
  }
];

// Helper pour filtrer par couleur
export function filterCuveesByColor(cuvees: Cuvee[], colorFilter?: string): Cuvee[] {
  if (!colorFilter || colorFilter === "Tous") {
    return cuvees;
  }
  return cuvees.filter(cuvee => cuvee.colorTag === colorFilter);
}

// Helper pour obtenir toutes les couleurs disponibles
export function getAvailableColors(): string[] {
  const colors = new Set<string>();
  gammes.forEach(gamme => {
    gamme.cuvees.forEach(cuvee => {
      if (cuvee.colorTag) {
        colors.add(cuvee.colorTag);
      }
    });
  });
  return ["Tous", ...Array.from(colors).sort()];
}
