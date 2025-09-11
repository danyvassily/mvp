export type PoiType = "domaine" | "caviste" | "restaurant" | "point-de-vente"

export interface PointOfInterest {
  id: string
  name: string
  type: PoiType
  address: string
  city: string
  postalCode: string
  country: string
  lat?: number
  lng?: number
  phone?: string
  website?: string
}

export const pois: PointOfInterest[] = [
  {
    id: "domaine-lastours",
    name: "Châteaux Lastours (Domaine)",
    type: "domaine",
    address: "Route des Vignobles",
    city: "Gaillac",
    postalCode: "81600",
    country: "France",
    lat: 43.898,
    lng: 1.896,
    phone: "+33 5 63 56 32 75",
    website: "https://www.chateaux-lastours.fr",
  },
  {
    id: "caviste-gaillac-centre",
    name: "Caviste Gaillac Centre",
    type: "caviste",
    address: "12 Rue des Arcades",
    city: "Gaillac",
    postalCode: "81600",
    country: "France",
    lat: 43.901,
    lng: 1.895,
    phone: "+33 5 63 00 00 00",
  },
  {
    id: "restaurant-accords",
    name: "Restaurant Les Accords",
    type: "restaurant",
    address: "8 Place du Marché",
    city: "Albi",
    postalCode: "81000",
    country: "France",
    lat: 43.925,
    lng: 2.148,
    phone: "+33 5 63 11 22 33",
    website: "https://www.restaurant-les-accords.fr",
  },
  {
    id: "caviste-toulouse",
    name: "Caves du Capitole",
    type: "caviste",
    address: "3 Rue du Taur",
    city: "Toulouse",
    postalCode: "31000",
    country: "France",
    lat: 43.606,
    lng: 1.444,
  },
]

export function getAllPOIs() {
  return pois
}

export function searchPOIs(query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return pois
  return pois.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q) ||
      p.postalCode.includes(q) ||
      p.address.toLowerCase().includes(q),
  )
}

