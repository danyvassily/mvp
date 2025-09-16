"use client"

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FloatingParticles } from './FloatingParticles'

interface HeroBarrelsAnimationProps {
  children: ReactNode
  className?: string
}

export function HeroBarrelsAnimation({ children, className = '' }: HeroBarrelsAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const grainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!containerRef.current || !imageRef.current || !overlayRef.current || !grainRef.current) return

    const container = containerRef.current
    const image = imageRef.current
    const overlay = overlayRef.current
    const grain = grainRef.current

    // Timeline principale pour l'animation d'entrée
    const tl = gsap.timeline()

    // État initial
    gsap.set(container, { 
      scale: 1.3,
      filter: 'blur(20px) brightness(0.3)',
      opacity: 0
    })
    
    gsap.set(image, { 
      scale: 1.4,
      rotation: 0.5,
      transformOrigin: 'center center'
    })
    
    gsap.set(overlay, { 
      opacity: 0
    })
    
    gsap.set(grain, { 
      opacity: 0,
      backgroundPosition: '0px 0px'
    })

    // Animation d'entrée majestueuse et lente (6 secondes)
    tl.to(container, {
      scale: 1,
      filter: 'blur(0px) brightness(1)',
      opacity: 1,
      duration: 4.5,
      ease: 'power4.out'
    })
    .to(image, {
      scale: 1.1,
      rotation: 0,
      duration: 5.5,
      ease: 'power3.out'
    }, 0.5)
    .to(overlay, {
      opacity: 1,
      duration: 3,
      ease: 'power3.out'
    }, 2)
    .to(grain, {
      opacity: 0.15,
      duration: 3.5,
      ease: 'power3.out'
    }, 2.5)

    // Animation de grain continue plus lente
    gsap.to(grain, {
      backgroundPosition: '200px 200px',
      duration: 35,
      ease: 'none',
      repeat: -1,
      delay: 6
    })

    // Parallax subtil au scroll
    gsap.to(image, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    // Assombrir progressivement au scroll
    gsap.to(overlay, {
      opacity: 0.9,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

    // Zoom out subtil au scroll
    gsap.to(container, {
      scale: 0.95,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container || trigger.trigger === image) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Image des tonneaux avec fallback */}
      <img
        ref={imageRef}
        src="/wine-barrels-header.jpg"
        alt="Tonneaux de vieillissement du Château Lastours"
        className="w-full h-full object-cover"
        style={{ 
          objectPosition: 'center center',
          filter: 'contrast(1.1) saturate(1.1)'
        }}
        onError={(e) => {
          // Fallback vers l'image de la cave si l'image des tonneaux n'existe pas
          const target = e.target as HTMLImageElement
          if (target.src.includes('wine-barrels-header.jpg')) {
            target.src = '/french-chateau-wine-cellar.png'
          }
        }}
      />
      
      {/* Overlay gradient */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"
      />
      
      {/* Grain overlay */}
      <div 
        ref={grainRef}
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='headerGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23headerGrain)'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />
      
      {/* Particules flottantes */}
      <FloatingParticles count={25} className="z-10" />
      
      {/* Contenu superposé */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        {children}
      </div>
    </div>
  )
}
