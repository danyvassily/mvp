"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import type { Wine } from "@/lib/wines-data"
import { wines } from "@/lib/wines-data"
import { CheckCircle, AlertCircle, Clock } from "lucide-react"

type StructureItem = {
  label: string
  wineName?: string
}

type StructureCategory = {
  title: string
  items: StructureItem[]
}

function findWineByName(name?: string): Wine | undefined {
  if (!name) return undefined
  return wines.find((w) => w.name.toLowerCase() === name.toLowerCase())
}

function SectionBlock({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h4 className="font-heading text-sm uppercase tracking-wide text-muted-foreground">{title}</h4>
      {children ? children : <p className="text-muted-foreground">À renseigner</p>}
    </div>
  )
}

function WineInfo({ item }: { item: StructureItem }) {
  const wine = findWineByName(item.wineName)
  
  // Détermine le statut de completude
  const getCompletionStatus = () => {
    if (!wine) return { status: 'missing', icon: AlertCircle, label: 'À créer', color: 'destructive' as const }
    
    const hasAllData = wine.tastingNotes && wine.conservation && wine.foodPairing && wine.composition && wine.servingAdvice
    if (hasAllData) return { status: 'complete', icon: CheckCircle, label: 'Complet', color: 'default' as const }
    
    return { status: 'partial', icon: Clock, label: 'En cours', color: 'secondary' as const }
  }
  
  const completionStatus = getCompletionStatus()
  const StatusIcon = completionStatus.icon

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{item.label}</CardTitle>
          <Badge variant={completionStatus.color} className="flex items-center gap-1">
            <StatusIcon className="w-3 h-3" />
            {completionStatus.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Photo */}
          <div className="lg:col-span-1">
            <SectionBlock title="Photo">
              {wine?.image ? (
                <div className="aspect-[3/4] bg-muted rounded-md overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={wine.image} alt={wine.name} className="w-full h-full object-cover" />
                </div>
              ) : undefined}
            </SectionBlock>
          </div>

          {/* Infos */}
          <div className="lg:col-span-2 space-y-6">
            <SectionBlock title="Conseil de dégustation">
              {wine?.servingAdvice ? (
                <ul className="text-muted-foreground list-disc pl-4 space-y-1">
                  <li>Température: {wine.servingAdvice.temperature}</li>
                  {wine.servingAdvice.decanting && <li>Carafage: {wine.servingAdvice.decanting}</li>}
                  <li>Verres: {wine.servingAdvice.glassware}</li>
                  <li>Timing: {wine.servingAdvice.timing}</li>
                </ul>
              ) : undefined}
            </SectionBlock>

            <Separator />

            <SectionBlock title="Conseil de conservation">
              {wine?.conservation ? (
                <ul className="text-muted-foreground list-disc pl-4 space-y-1">
                  <li>Température: {wine.conservation.temperature}</li>
                  <li>Durée: {wine.conservation.duration}</li>
                  <li>Conditions: {wine.conservation.conditions}</li>
                </ul>
              ) : undefined}
            </SectionBlock>

            <Separator />

            <SectionBlock title="Accord met et vin">
              {wine?.foodPairing ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                  <div>
                    <div className="font-medium">Entrées</div>
                    <ul className="list-disc pl-4">
                      {wine.foodPairing.appetizers.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium">Plats</div>
                    <ul className="list-disc pl-4">
                      {wine.foodPairing.mainCourses.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium">Fromages</div>
                    <ul className="list-disc pl-4">
                      {wine.foodPairing.cheeses.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  {wine.foodPairing.desserts && (
                    <div>
                      <div className="font-medium">Desserts</div>
                      <ul className="list-disc pl-4">
                        {wine.foodPairing.desserts.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : undefined}
            </SectionBlock>

            <Separator />

            <SectionBlock title="Composition">
              {wine?.composition ? (
                <ul className="text-muted-foreground list-disc pl-4 space-y-1">
                  <li>Terroir: {wine.composition.terroir}</li>
                  <li>Vendanges: {wine.composition.harvest}</li>
                  <li>Vinification: {wine.composition.vinification}</li>
                  <li>Philosophie: {wine.composition.philosophy}</li>
                </ul>
              ) : undefined}
            </SectionBlock>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const structure: StructureCategory[] = [
  {
    title: "Doméni",
    items: [
      { label: "Perlé Blanc", wineName: "Perlé Blanc" },
      { label: "Blanc", wineName: "Doméni Blanc" },
      { label: "Rosé", wineName: "Doméni Rosé" },
      { label: "Rouge", wineName: "Doméni Rouge" },
    ],
  },
  {
    title: "Opus",
    items: [
      { label: "Blanc", wineName: "Opus Blanc" },
      { label: "Rouge", wineName: "Opus Rouge" },
    ],
  },
  {
    title: "Poussin",
    items: [
      { label: "Rosé", wineName: "Poussin Rosé" },
    ],
  },
  {
    title: "Confidentiel",
    items: [
      { label: "Claire de Lune", wineName: "Claire de Lune" },
      { label: "Petrichor Rosé", wineName: "Petrichor Rosé" },
      { label: "Petrichor Rouge", wineName: "Petrichor Rouge" },
      { label: "Pigeonnier", wineName: "Pigeonnier" },
    ],
  },
  {
    title: "Méthode",
    items: [
      { label: "Blanc", wineName: "Méthode Blanc" },
      { label: "Rosé", wineName: "Méthode Rosé" },
    ],
  },
]

export function WineStructure() {
  // Calcul des statistiques
  const allItems = structure.flatMap(cat => cat.items)
  const totalWines = allItems.length
  const completeWines = allItems.filter(item => {
    const wine = findWineByName(item.wineName)
    return wine && wine.tastingNotes && wine.conservation && wine.foodPairing && wine.composition && wine.servingAdvice
  }).length
  const missingWines = allItems.filter(item => !findWineByName(item.wineName)).length
  
  return (
    <div className="space-y-6">
      {/* Statistiques globales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{completeWines}</p>
                <p className="text-sm text-muted-foreground">Vins complets</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold">{totalWines - completeWines - missingWines}</p>
                <p className="text-sm text-muted-foreground">En cours</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-2xl font-bold">{missingWines}</p>
                <p className="text-sm text-muted-foreground">À créer</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Accordion type="multiple" className="w-full">
        {structure.map((cat) => (
          <AccordionItem key={cat.title} value={cat.title}>
            <AccordionTrigger className="text-xl font-heading">{cat.title}</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 gap-6">
                {cat.items.map((item) => (
                  <WineInfo key={item.label} item={item} />)
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

