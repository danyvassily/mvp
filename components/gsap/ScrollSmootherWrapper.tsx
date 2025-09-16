"use client"

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

interface ScrollSmootherWrapperProps {
  children: ReactNode
  speed?: number
  lag?: number
  effects?: boolean
}

export function ScrollSmootherWrapper({ 
  children, 
  speed = 1,
  lag = 0.1,
  effects = true 
}: ScrollSmootherWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const smootherRef = useRef<ScrollSmoother | null>(null)

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    // Create ScrollSmoother instance
    smootherRef.current = ScrollSmoother.create({
      wrapper: wrapperRef.current!,
      content: contentRef.current!,
      smooth: speed,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: effects,
      onUpdate: (self) => {
        // Optional: Add custom scroll update logic
      }
    })

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh()

    return () => {
      // Cleanup
      if (smootherRef.current) {
        smootherRef.current.kill()
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [speed, lag, effects])

  return (
    <div ref={wrapperRef} id="smooth-wrapper" className="smooth-wrapper">
      <div ref={contentRef} id="smooth-content" className="smooth-content">
        {children}
      </div>
    </div>
  )
}

// Hook pour accéder au ScrollSmoother depuis les composants enfants
export function useScrollSmoother() {
  return {
    scrollTo: (target: string | number, smooth: boolean = true, offset: number = 0) => {
      const smoother = ScrollSmoother.get()
      if (smoother) {
        smoother.scrollTo(target, smooth, `top+=${offset}`)
      }
    },
    refresh: () => {
      ScrollTrigger.refresh()
    }
  }
}
