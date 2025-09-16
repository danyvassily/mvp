export interface WineTheme {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
  textSecondary: string
  border: string
  gradient: string
  shadow: string
}

export const wineThemes: Record<string, WineTheme> = {
  // Collection Doméni - Élégance dorée
  "domeni-blanc": {
    primary: "#D4AF37", // Or royal
    secondary: "#F5E6A8", // Or pâle
    accent: "#B8860B", // Or sombre
    background: "#FFFEF7", // Blanc cassé doré
    text: "#2F2F1F", // Brun foncé
    textSecondary: "#6B6B47", // Brun moyen
    border: "#E6D56C", // Or clair
    gradient: "linear-gradient(135deg, #F5E6A8 0%, #D4AF37 50%, #B8860B 100%)",
    shadow: "0 20px 40px rgba(212, 175, 55, 0.15)"
  },
  "domeni-rose": {
    primary: "#E8B4CB", // Rose poudré luxe
    secondary: "#F7D6E8", // Rose très pâle
    accent: "#C8869A", // Rose sombre
    background: "#FFF9FC", // Blanc rosé
    text: "#3D2A32", // Brun rosé foncé
    textSecondary: "#8B6B7A", // Brun rosé moyen
    border: "#F0C4D8", // Rose clair
    gradient: "linear-gradient(135deg, #F7D6E8 0%, #E8B4CB 50%, #C8869A 100%)",
    shadow: "0 20px 40px rgba(232, 180, 203, 0.15)"
  },
  "domeni-rouge": {
    primary: "#8B0000", // Rouge bordeaux profond
    secondary: "#CD5C5C", // Rouge clair
    accent: "#660000", // Rouge très sombre
    background: "#FFF8F8", // Blanc teinté rouge
    text: "#2F1B1B", // Brun rouge foncé
    textSecondary: "#6B4A4A", // Brun rouge moyen
    border: "#B87373", // Rouge clair
    gradient: "linear-gradient(135deg, #CD5C5C 0%, #8B0000 50%, #660000 100%)",
    shadow: "0 20px 40px rgba(139, 0, 0, 0.2)"
  },

  // Collection Opus - Prestige noir et or
  "opus-blanc": {
    primary: "#FFD700", // Or pur
    secondary: "#1C1C1C", // Noir élégant
    accent: "#B8860B", // Or bronze
    background: "#0F0F0F", // Noir profond
    text: "#FFD700", // Or pour le texte
    textSecondary: "#CCAA00", // Or sombre
    border: "#333333", // Gris foncé
    gradient: "linear-gradient(135deg, #FFD700 0%, #1C1C1C 50%, #0F0F0F 100%)",
    shadow: "0 25px 50px rgba(255, 215, 0, 0.3)"
  },
  "opus-rouge": {
    primary: "#722F37", // Bordeaux noble
    secondary: "#1A1A1A", // Noir
    accent: "#CD853F", // Or cuivré
    background: "#0A0A0A", // Noir absolu
    text: "#F5F5F5", // Blanc cassé
    textSecondary: "#D4AF37", // Or
    border: "#4A4A4A", // Gris sombre
    gradient: "linear-gradient(135deg, #722F37 0%, #1A1A1A 50%, #CD853F 100%)",
    shadow: "0 25px 50px rgba(114, 47, 55, 0.4)"
  },

  // Collection Confidentielle - Mystique et raffiné
  "claire-de-lune": {
    primary: "#E6E6FA", // Lavande argentée
    secondary: "#B0C4DE", // Bleu acier
    accent: "#9370DB", // Violet moyen
    background: "#F8F8FF", // Blanc fantôme
    text: "#2F2F4F", // Bleu ardoise foncé
    textSecondary: "#6A5ACD", // Bleu ardoise
    border: "#D8BFD8", // Chardon
    gradient: "linear-gradient(135deg, #E6E6FA 0%, #B0C4DE 50%, #9370DB 100%)",
    shadow: "0 20px 40px rgba(147, 112, 219, 0.2)"
  },
  "petrichor-rouge": {
    primary: "#8B4513", // Brun terreux
    secondary: "#A0522D", // Brun sienna
    accent: "#654321", // Brun foncé
    background: "#FFF8DC", // Blanc cassé beige
    text: "#2F1B14", // Brun très foncé
    textSecondary: "#8B4513", // Brun terreux
    border: "#DEB887", // Beige sable
    gradient: "linear-gradient(135deg, #A0522D 0%, #8B4513 50%, #654321 100%)",
    shadow: "0 20px 40px rgba(139, 69, 19, 0.2)"
  },
  "pigeonnier": {
    primary: "#704214", // Brun patrimoine
    secondary: "#D2B48C", // Tan
    accent: "#8B4513", // Brun sienna
    background: "#FAF0E6", // Blanc lin
    text: "#2F1B0C", // Brun foncé
    textSecondary: "#654321", // Brun moyen
    border: "#DEB887", // Beige sable
    gradient: "linear-gradient(135deg, #D2B48C 0%, #704214 50%, #8B4513 100%)",
    shadow: "0 20px 40px rgba(112, 66, 20, 0.15)"
  },

  // Collection Perlé - Effervescence cristalline
  "perle": {
    primary: "#E0FFFF", // Cyan clair
    secondary: "#B0E0E6", // Bleu poudre
    accent: "#48D1CC", // Turquoise moyen
    background: "#F0FFFF", // Bleu azur
    text: "#2F4F4F", // Gris ardoise foncé
    textSecondary: "#708090", // Gris ardoise
    border: "#AFEEEE", // Turquoise pâle
    gradient: "linear-gradient(135deg, #E0FFFF 0%, #B0E0E6 50%, #48D1CC 100%)",
    shadow: "0 20px 40px rgba(72, 209, 204, 0.15)"
  },

  // Collection Poussin - Fraîcheur et jeunesse
  "poussin-blanc": {
    primary: "#F0E68C", // Kaki clair
    secondary: "#FFFACD", // Jaune citron clair
    accent: "#DDA0DD", // Prune
    background: "#FFFEF0", // Blanc ivoire
    text: "#556B2F", // Vert olive foncé
    textSecondary: "#8FBC8F", // Vert mer foncé
    border: "#F5DEB3", // Blé
    gradient: "linear-gradient(135deg, #FFFACD 0%, #F0E68C 50%, #DDA0DD 100%)",
    shadow: "0 15px 30px rgba(240, 230, 140, 0.15)"
  },
  "poussin-rose": {
    primary: "#FFB6C1", // Rose clair
    secondary: "#FFCCCB", // Rose très clair
    accent: "#FF69B4", // Rose vif
    background: "#FFF0F5", // Blanc lavande
    text: "#8B008B", // Magenta foncé
    textSecondary: "#DA70D6", // Orchidée
    border: "#FFC0CB", // Rose
    gradient: "linear-gradient(135deg, #FFCCCB 0%, #FFB6C1 50%, #FF69B4 100%)",
    shadow: "0 15px 30px rgba(255, 182, 193, 0.15)"
  },

  // Collection Méthode - Effervescence sophistiquée
  "methode-blanc": {
    primary: "#F5F5DC", // Beige
    secondary: "#FFF8DC", // Blanc cassé
    accent: "#DAA520", // Or terne
    background: "#FAFAFA", // Blanc fumé
    text: "#2F2F2F", // Gris foncé
    textSecondary: "#696969", // Gris moyen
    border: "#E5E5E5", // Gris clair
    gradient: "linear-gradient(135deg, #FFF8DC 0%, #F5F5DC 50%, #DAA520 100%)",
    shadow: "0 20px 40px rgba(218, 165, 32, 0.1)"
  },
  "methode-rose": {
    primary: "#F4A460", // Brun sable
    secondary: "#FFEFD5", // Blanc papaye
    accent: "#CD853F", // Pérou
    background: "#FFF8F0", // Blanc fantôme
    text: "#8B4513", // Brun sienna
    textSecondary: "#A0522D", // Brun sienna
    border: "#DEB887", // Beige sable
    gradient: "linear-gradient(135deg, #FFEFD5 0%, #F4A460 50%, #CD853F 100%)",
    shadow: "0 20px 40px rgba(244, 164, 96, 0.15)"
  }
}

export function getWineTheme(wineId: string): WineTheme {
  return wineThemes[wineId] || wineThemes["domeni-blanc"]
}

export function getWineThemeKey(wine: { id: string, collection: string, type: string }): string {
  // Mapping spécifique pour chaque vin
  const mappings: Record<string, string> = {
    "domeni-blanc-2023": "domeni-blanc",
    "domeni-rose-2023": "domeni-rose", 
    "domeni-rouge-2021": "domeni-rouge",
    "opus-blanc-2022": "opus-blanc",
    "opus-rouge-2020": "opus-rouge",
    "claire-de-lune-2022": "claire-de-lune",
    "petrichor-rouge-2020": "petrichor-rouge",
    "pigeonnier-rouge-2021": "pigeonnier",
    "perle-blanc-2023": "perle",
    "poussin-blanc-2024": "poussin-blanc",
    "poussin-rose-2023": "poussin-rose",
    "methode-blanc-2020": "methode-blanc",
    "methode-rose-2020": "methode-rose"
  }
  
  return mappings[wine.id] || `${wine.collection}-${wine.type}`
}
