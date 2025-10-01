"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  width?: number
  height?: number
  aspectRatio?: "square" | "video" | "portrait" | "landscape" | "auto"
  objectFit?: "cover" | "contain" | "fill"
  objectPosition?: string
  fallbackSrc?: string
  placeholder?: React.ReactNode
  onLoad?: () => void
  onError?: () => void
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video", 
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  auto: ""
}

export function LazyImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  width,
  height,
  aspectRatio = "auto",
  objectFit = "cover",
  objectPosition = "center",
  fallbackSrc = "/placeholder.jpg",
  placeholder,
  onLoad,
  onError
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer pour le lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px"
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      setHasError(true)
    }
    onError?.()
  }

  // Placeholder par défaut
  const defaultPlaceholder = (
    <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
      </div>
    </div>
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-muted",
        aspectRatio !== "auto" && aspectRatioClasses[aspectRatio],
        containerClassName
      )}
      {...(width && height ? { style: { width, height } } : {})}
    >
      {/* Placeholder pendant le chargement */}
      {!isLoaded && (placeholder || defaultPlaceholder)}
      
      {/* Image principale */}
      {isInView && (
        <img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          className={cn(
            "transition-all duration-500",
            `object-${objectFit}`,
            `object-${objectPosition}`,
            isLoaded ? "opacity-100" : "opacity-0",
            hasError && "grayscale",
            width && height ? "" : "w-full h-full",
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}
      
      {/* Overlay de grain subtil */}
      <div className="absolute inset-0 grain-subtle pointer-events-none" />
    </div>
  )
}
