"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Wine } from "@/lib/wines-data"
import { Badge } from "@/components/ui/badge"

interface HomeWineCardProps {
  wine: Wine
  className?: string
}

export function HomeWineCard({ wine, className }: HomeWineCardProps) {
  return (
    <Card
      className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 ${className}`}
    >
      <Link href={`/les-vins/${wine.id}`} className="block">
        <div className="aspect-[3/4] bg-white overflow-hidden">
          <Image
            src={wine.image || "/wine-bottle-default.png"}
            alt={wine.name}
            width={400}
            height={600}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </Link>
      <CardContent className="p-6 bg-white flex flex-col">
        <div className="flex-grow">
          <div className="mb-2">
            <Badge variant="secondary" className="text-xs">
              {wine.vintage}
            </Badge>
          </div>
          <h3 className="text-xl font-display text-gray-900 group-hover:text-wine-gold transition-colors duration-300 mb-2 min-h-[3.5rem]">
            <Link href={`/les-vins/${wine.id}`}>{wine.name}</Link>
          </h3>
          <p className="text-sm text-gray-600 mb-4 min-h-[3rem] overflow-hidden">{wine.description}</p>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <p className="text-2xl font-heading text-wine-burgundy">{wine.price}€</p>
          <Button
            size="sm"
            variant="outline"
            asChild
            className="group/btn hover:bg-wine-gold hover:text-wine-dark hover:border-wine-gold transition-all duration-300"
          >
            <Link href={`/les-vins/${wine.id}`}>
              Voir
              <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
