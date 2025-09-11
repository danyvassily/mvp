"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, Calculator } from "lucide-react"

export default function OrganiserEvenementPage() {
  const [formData, setFormData] = useState({
    eventType: "",
    guestCount: "",
    date: "",
    duration: "",
    services: [] as string[],
    catering: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [estimatedPrice, setEstimatedPrice] = useState(0)

  const eventTypes = [
    { id: "seminaire", name: "Séminaire d'entreprise", basePrice: 45 },
    { id: "mariage", name: "Mariage", basePrice: 85 },
    { id: "anniversaire", name: "Anniversaire", basePrice: 35 },
    { id: "degustation", name: "Dégustation privée", basePrice: 55 },
    { id: "teambuilding", name: "Team Building", basePrice: 40 },
    { id: "lancement", name: "Lancement de produit", basePrice: 65 },
  ]

  const services = [
    { id: "visite", name: "Visite guidée du domaine", price: 8 },
    { id: "degustation", name: "Dégustation commentée", price: 15 },
    { id: "atelier", name: "Atelier assemblage", price: 25 },
    { id: "animation", name: "Animation musicale", price: 300 },
    { id: "photo", name: "Photographe professionnel", price: 450 },
    { id: "decoration", name: "Décoration florale", price: 200 },
  ]

  const cateringOptions = [
    { id: "cocktail", name: "Cocktail dinatoire", price: 35 },
    { id: "buffet", name: "Buffet", price: 45 },
    { id: "repas", name: "Repas assis", price: 65 },
    { id: "gastronomique", name: "Menu gastronomique", price: 95 },
  ]

  const calculatePrice = () => {
    const eventType = eventTypes.find((t) => t.id === formData.eventType)
    const guestCount = Number.parseInt(formData.guestCount) || 0
    const selectedServices = services.filter((s) => formData.services.includes(s.id))
    const catering = cateringOptions.find((c) => c.id === formData.catering)

    let total = 0
    if (eventType) total += eventType.basePrice * guestCount
    if (catering) total += catering.price * guestCount
    selectedServices.forEach((service) => {
      if (service.id === "animation" || service.id === "photo" || service.id === "decoration") {
        total += service.price // Prix fixe
      } else {
        total += service.price * guestCount // Prix par personne
      }
    })

    setEstimatedPrice(total)
  }

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    const newServices = checked ? [...formData.services, serviceId] : formData.services.filter((s) => s !== serviceId)

    setFormData({ ...formData, services: newServices })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/private-event-organization-luxury.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-display mb-6 text-balance">Organiser votre Événement</h1>
            <p className="text-xl md:text-2xl text-pretty opacity-90">
              Créez des moments inoubliables dans notre domaine d'exception
            </p>
          </div>
        </section>

        {/* Simulateur de Prix */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">Simulateur de Prix</h2>
                <p className="text-lg text-muted-foreground">
                  Configurez votre événement et obtenez une estimation instantanée
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Formulaire */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Détails de l'Événement
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="eventType">Type d'événement</Label>
                          <Select
                            value={formData.eventType}
                            onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez le type" />
                            </SelectTrigger>
                            <SelectContent>
                              {eventTypes.map((type) => (
                                <SelectItem key={type.id} value={type.id}>
                                  {type.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="guestCount">Nombre d'invités</Label>
                          <Input
                            id="guestCount"
                            type="number"
                            placeholder="Ex: 50"
                            value={formData.guestCount}
                            onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">Date souhaitée</Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="duration">Durée</Label>
                          <Select
                            value={formData.duration}
                            onValueChange={(value) => setFormData({ ...formData, duration: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Durée de l'événement" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2h">2 heures</SelectItem>
                              <SelectItem value="4h">4 heures</SelectItem>
                              <SelectItem value="journee">Journée complète</SelectItem>
                              <SelectItem value="weekend">Week-end</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Services Additionnels</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <div key={service.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={service.id}
                              checked={formData.services.includes(service.id)}
                              onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                            />
                            <Label htmlFor={service.id} className="flex-1">
                              {service.name}
                              <span className="text-muted-foreground ml-2">
                                {service.price < 100 ? `+${service.price}€/pers` : `+${service.price}€`}
                              </span>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Restauration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cateringOptions.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id={option.id}
                              name="catering"
                              value={option.id}
                              checked={formData.catering === option.id}
                              onChange={(e) => setFormData({ ...formData, catering: e.target.value })}
                              className="w-4 h-4"
                            />
                            <Label htmlFor={option.id} className="flex-1">
                              {option.name}
                              <span className="text-muted-foreground ml-2">+{option.price}€/pers</span>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Estimation */}
                <div className="space-y-6">
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="w-5 h-5" />
                        Estimation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-display text-accent mb-2">{estimatedPrice.toLocaleString()}€</div>
                        <p className="text-sm text-muted-foreground">Prix estimé TTC</p>
                      </div>

                      <Button onClick={calculatePrice} className="w-full bg-transparent" variant="outline">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculer le Prix
                      </Button>

                      {estimatedPrice > 0 && (
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Base événement:</span>
                            <span>
                              {formData.guestCount
                                ? (eventTypes.find((t) => t.id === formData.eventType)?.basePrice || 0) *
                                  Number.parseInt(formData.guestCount)
                                : 0}
                              €
                            </span>
                          </div>
                          {formData.catering && (
                            <div className="flex justify-between">
                              <span>Restauration:</span>
                              <span>
                                {formData.guestCount
                                  ? (cateringOptions.find((c) => c.id === formData.catering)?.price || 0) *
                                    Number.parseInt(formData.guestCount)
                                  : 0}
                                €
                              </span>
                            </div>
                          )}
                          {formData.services.length > 0 && (
                            <div className="flex justify-between">
                              <span>Services:</span>
                              <span>
                                {services
                                  .filter((s) => formData.services.includes(s.id))
                                  .reduce((total, service) => {
                                    if (service.price < 100) {
                                      return total + service.price * (Number.parseInt(formData.guestCount) || 0)
                                    }
                                    return total + service.price
                                  }, 0)}
                                €
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="pt-4 border-t">
                        <Badge variant="secondary" className="w-full justify-center">
                          Devis personnalisé gratuit
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire de Contact */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Demande de Devis Personnalisé</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Entreprise</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Décrivez votre projet d'événement..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Envoyer la Demande de Devis
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
