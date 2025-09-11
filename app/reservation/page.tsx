"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CalendarWidget } from "@/components/calendar-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, MapPin, Phone } from "lucide-react"

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    experience: "visite-degustation",
    message: "",
  })

  const experiences = {
    "visite-degustation": {
      name: "Visite & Dégustation Classique",
      duration: "2h",
      price: "25€",
      description: "Visite guidée du domaine suivie d'une dégustation de 5 vins",
    },
    "visite-prestige": {
      name: "Visite Prestige",
      duration: "3h",
      price: "45€",
      description: "Visite approfondie avec dégustation de nos cuvées prestige et accord mets-vins",
    },
    "degustation-privee": {
      name: "Dégustation Privée",
      duration: "2h30",
      price: "75€",
      description: "Dégustation exclusive avec l'œnologue dans notre salon privé",
    },
    "atelier-assemblage": {
      name: "Atelier d'Assemblage",
      duration: "3h30",
      price: "95€",
      description: "Créez votre propre cuvée sous les conseils de notre maître de chai",
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reservation submitted:", formData)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/wine-tasting-room-elegant-setup-reservation.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display mb-4 text-balance">Réservation</h1>
          <p className="text-xl md:text-2xl text-pretty opacity-90">Découvrez notre domaine et nos vins d'exception</p>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Nos Expériences</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choisissez l'expérience qui vous correspond pour découvrir l'univers de Châteaux Lastours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Object.entries(experiences).map(([key, experience]) => (
              <Card key={key} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-heading">{experience.name}</h3>
                    <div className="text-2xl font-display text-accent">{experience.price}</div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      par personne
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Réserver votre Visite</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Complétez le formulaire ci-dessous pour réserver votre expérience
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Experience Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Choisissez votre expérience</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={formData.experience} onValueChange={(value) => updateFormData("experience", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(experiences).map(([key, experience]) => (
                        <SelectItem key={key} value={key}>
                          {experience.name} - {experience.price} ({experience.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Vos informations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Date & Time with Calendar Widget */}
              <Card>
                <CardHeader>
                  <CardTitle>Date et heure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <Label className="text-base font-medium mb-4 block">Sélectionnez une date disponible</Label>
                      <CalendarWidget
                        onDateSelect={(date) => updateFormData("date", date)}
                        selectedDate={formData.date}
                      />
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="time">Heure *</Label>
                        <Select value={formData.time} onValueChange={(value) => updateFormData("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir l'heure" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">09:00</SelectItem>
                            <SelectItem value="10:00">10:00</SelectItem>
                            <SelectItem value="11:00">11:00</SelectItem>
                            <SelectItem value="14:00">14:00</SelectItem>
                            <SelectItem value="15:00">15:00</SelectItem>
                            <SelectItem value="16:00">16:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">Nombre de personnes *</Label>
                        <Select value={formData.guests} onValueChange={(value) => updateFormData("guests", value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} personne{num > 1 ? "s" : ""}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Message */}
              <Card>
                <CardHeader>
                  <CardTitle>Message (optionnel)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    placeholder="Demandes particulières, allergies, questions..."
                    rows={4}
                  />
                </CardContent>
              </Card>

              {/* Submit */}
              <div className="text-center">
                <Button type="submit" size="lg">
                  Confirmer la Réservation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Informations Pratiques</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Adresse</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Châteaux Lastours
                  <br />
                  Route des Vignobles
                  <br />
                  34000 Montpellier
                  <br />
                  France
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Contact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Téléphone: +33 4 67 89 12 34
                  <br />
                  Email: reservation@chateaux-lastours.fr
                  <br />
                  <br />
                  Ouvert du mardi au samedi
                  <br />
                  9h - 18h
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading mb-4">Réservation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Réservation obligatoire
                  <br />
                  Minimum 48h à l'avance
                  <br />
                  <br />
                  Annulation gratuite
                  <br />
                  jusqu'à 24h avant
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
