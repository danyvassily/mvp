"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  containerClassName?: string
  priority?: boolean
  sizes?: string
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition?: string
  fallbackSrc?: string
  aspectRatio?: "square" | "video" | "portrait" | "landscape" | "auto"
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video", 
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  auto: ""
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  containerClassName = "",
  priority = false,
  sizes = "100vw",
  objectFit = "cover",
  objectPosition = "center",
  fallbackSrc = "/placeholder.jpg",
  aspectRatio = "auto",
  quality = 85,
  placeholder = "empty",
  blurDataURL
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (fill) {
    return (
      <div className={cn(
        "relative overflow-hidden",
        aspectRatio !== "auto" && aspectRatioClasses[aspectRatio],
        containerClassName
      )}>
        {isLoading && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className={cn(
            `object-${objectFit}`,
            `object-${objectPosition}`,
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            hasError && "grayscale",
            className
          )}
          priority={priority}
          sizes={sizes}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onError={handleError}
          onLoad={handleLoad}
        />
      </div>
    )
  }

  return (
    <div className={cn(
      "relative overflow-hidden",
      aspectRatio !== "auto" && aspectRatioClasses[aspectRatio],
      containerClassName
    )}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          `object-${objectFit}`,
          `object-${objectPosition}`,
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          hasError && "grayscale",
          className
        )}
        priority={priority}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  )
}
