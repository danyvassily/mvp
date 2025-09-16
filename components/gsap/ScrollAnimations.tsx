"use client"

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'reveal' | 'parallax'
  trigger?: 'top' | 'center' | 'bottom'
  duration?: number
  delay?: number
  ease?: string
  className?: string
  speed?: number // For parallax effect
}

export function ScrollAnimation({
  children,
  animation = 'fadeIn',
  trigger = 'top',
  duration = 1,
  delay = 0,
  ease = 'power2.out',
  className = '',
  speed = 0.5
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!elementRef.current) return

    const element = elementRef.current

    // Initial state based on animation type
    let fromVars: any = {}
    let toVars: any = {}

    switch (animation) {
      case 'fadeIn':
        fromVars = { opacity: 0, y: 30 }
        toVars = { opacity: 1, y: 0 }
        break
      
      case 'slideUp':
        fromVars = { opacity: 0, y: 60 }
        toVars = { opacity: 1, y: 0 }
        break
      
      case 'slideLeft':
        fromVars = { opacity: 0, x: 60 }
        toVars = { opacity: 1, x: 0 }
        break
      
      case 'slideRight':
        fromVars = { opacity: 0, x: -60 }
        toVars = { opacity: 1, x: 0 }
        break
      
      case 'scale':
        fromVars = { opacity: 0, scale: 0.8 }
        toVars = { opacity: 1, scale: 1 }
        break
      
      case 'reveal':
        fromVars = { opacity: 0, clipPath: 'inset(100% 0 0 0)' }
        toVars = { opacity: 1, clipPath: 'inset(0% 0 0 0)' }
        break

      case 'parallax':
        // Parallax effect - element moves at different speed than scroll
        gsap.to(element, {
          yPercent: -50 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
        return
    }

    // Set initial state
    gsap.set(element, fromVars)

    // Create scroll trigger animation
    gsap.to(element, {
      ...toVars,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start: `top ${trigger === 'top' ? '80%' : trigger === 'center' ? '50%' : '20%'}`,
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [animation, trigger, duration, delay, ease, speed])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

// Composant pour les animations de texte cinématographiques
export function CinematicTextAnimation({ 
  children, 
  className = '',
  staggerDelay = 0.1 
}: { 
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!textRef.current) return

    const element = textRef.current
    const lines = element.querySelectorAll('.text-line')

    if (lines.length === 0) return

    // Set initial state
    gsap.set(lines, { 
      opacity: 0, 
      y: 50,
      rotationX: 15
    })

    // Create staggered animation
    gsap.to(lines, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1.2,
      ease: 'power3.out',
      stagger: staggerDelay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [staggerDelay])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}

// Composant pour les animations de cartes premium
export function PremiumCardAnimation({ 
  children, 
  className = '',
  index = 0 
}: { 
  children: ReactNode
  className?: string
  index?: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!cardRef.current) return

    const element = cardRef.current

    // Set initial state
    gsap.set(element, { 
      opacity: 0, 
      y: 80,
      scale: 0.95,
      filter: 'blur(10px)'
    })

    // Create sophisticated animation
    gsap.to(element, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1.5,
      delay: index * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [index])

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  )
}
