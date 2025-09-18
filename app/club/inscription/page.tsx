"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Crown, Wine, Gift } from "lucide-react"
import Link from "next/link"

export default function InscriptionPage() {
  const searchParams = useSearchParams()
  const initialPlan = searchParams.get("plan") || "prestige"

  const [formData, setFormData] = useState({
    plan: initialPlan,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
    birthDate: "",
    preferences: "",
    newsletter: true,
    terms: false,
  })

  const plans = {
    decouverte: { name: "Découverte", price: "89€", icon: Wine },
    prestige: { name: "Prestige", price: "189€", icon: Crown },
    collection: { name: "Collection", price: "389€", icon: Gift },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    // console.log("Form submitted:", formData) // Disabled in production
  }

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/club">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au Club
            </Link>
          </Button>
        </div>

        {/* Form */}
        <section className="pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-display mb-6">Inscription Club Lastours</h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Rejoignez notre communauté exclusive et découvrez l'excellence de nos vins
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Plan Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Choisissez votre formule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={formData.plan}
                      onValueChange={(value) => updateFormData("plan", value)}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      {Object.entries(plans).map(([key, plan]) => {
                        const IconComponent = plan.icon
                        return (
                          <div key={key} className="relative">
                            <RadioGroupItem value={key} id={key} className="peer sr-only" />
                            <Label
                              htmlFor={key}
                              className="flex flex-col items-center justify-center p-6 border-2 border-border rounded-lg cursor-pointer hover:bg-accent/10 peer-checked:border-accent peer-checked:bg-accent/5 transition-all"
                            >
                              <IconComponent className="w-8 h-8 mb-4 text-accent" />
                              <span className="font-heading text-lg mb-2">{plan.name}</span>
                              <span className="text-2xl font-display text-accent">{plan.price}</span>
                              <span className="text-sm text-muted-foreground">par trimestre</span>
                            </Label>
                          </div>
                        )
                      })}
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Informations personnelles</CardTitle>
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
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="birthDate">Date de naissance</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => updateFormData("birthDate", e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card>
                  <CardHeader>
                    <CardTitle>Adresse de livraison</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="address">Adresse *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => updateFormData("address", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Code postal *</Label>
                        <Input
                          id="postalCode"
                          value={formData.postalCode}
                          onChange={(e) => updateFormData("postalCode", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Ville *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => updateFormData("city", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Pays</Label>
                        <Select value={formData.country} onValueChange={(value) => updateFormData("country", value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="France">France</SelectItem>
                            <SelectItem value="Belgique">Belgique</SelectItem>
                            <SelectItem value="Suisse">Suisse</SelectItem>
                            <SelectItem value="Luxembourg">Luxembourg</SelectItem>
                            <SelectItem value="Allemagne">Allemagne</SelectItem>
                            <SelectItem value="Autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Preferences */}
                <Card>
                  <CardHeader>
                    <CardTitle>Préférences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="preferences">
                        Parlez-nous de vos goûts (types de vins préférés, allergies, etc.)
                      </Label>
                      <Textarea
                        id="preferences"
                        value={formData.preferences}
                        onChange={(e) => updateFormData("preferences", e.target.value)}
                        placeholder="Vos préférences nous aideront à personnaliser vos sélections..."
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Consent */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => updateFormData("newsletter", checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          Je souhaite recevoir la newsletter et les informations sur les événements exclusifs
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.terms}
                          onCheckedChange={(checked) => updateFormData("terms", checked as boolean)}
                          required
                        />
                        <Label htmlFor="terms" className="text-sm">
                          J'accepte les{" "}
                          <Link href="/cgv" className="text-accent hover:underline">
                            conditions générales de vente
                          </Link>{" "}
                          et la{" "}
                          <Link href="/politique-confidentialite" className="text-accent hover:underline">
                            politique de confidentialité
                          </Link>{" "}
                          *
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button type="submit" size="lg" disabled={!formData.terms}>
                    Finaliser l'inscription
                  </Button>
                  <Button type="button" size="lg" variant="outline" asChild>
                    <Link href="/club">Annuler</Link>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
