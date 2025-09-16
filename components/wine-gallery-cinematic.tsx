"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import type { Wine } from "@/lib/wines-data"
import { wines } from "@/lib/wines-data"

gsap.registerPlugin(ScrollTrigger)

type GalleryProps = {
  items?: Wine[]
  pinned?: boolean
  heightVh?: number
}

export function WineGalleryCinematic({ items = wines, pinned = false, heightVh = 60 }: GalleryProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    if (!wrapRef.current || !trackRef.current) return
    let localCtx: gsap.Context | null = null
    try {
      const ctx = gsap.context(() => {
        const track = trackRef.current!
        const endValue = () => `+=${track.scrollWidth - window.innerWidth}`
        const tween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
        })
        tweenRef.current = tween

      const mm = gsap.matchMedia()
      mm.add({ isDesktop: "(min-width: 1024px)" }, (ctx) => {
        const { isDesktop } = ctx.conditions as { isDesktop: boolean }
        ScrollTrigger.create({
          trigger: wrapRef.current!,
          start: "top bottom",
          end: endValue,
          pin: pinned && isDesktop ? true : false,
          scrub: 0.8,
          animation: tween,
          invalidateOnRefresh: true,
        })
        return () => {
          ScrollTrigger.getAll().forEach((st) => st.kill())
        }
      })

      // Hover interactions
      const cards = gsap.utils.toArray<HTMLDivElement>(".wg-item")
      cards.forEach((card) => {
        const img = card.querySelector("img")!
        const panel = card.querySelector<HTMLElement>(".wg-panel")!
        const side = card.dataset.side || "right"
        gsap.set(panel, { xPercent: side === "left" ? -110 : 110, autoAlpha: 0 })

        const onEnter = () => {
          // Pause background animation instead of locking page scroll
          tweenRef.current?.pause()
          gsap.to(img, { scale: 1.15, duration: 0.6, ease: "power3.out" })
          gsap.to(panel, {
            xPercent: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: "power3.out",
          })
          gsap.to(card, { zIndex: 10 })
        }

        const onLeave = () => {
          tweenRef.current?.play()
          gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" })
          gsap.to(panel, {
            xPercent: side === "left" ? -110 : 110,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power2.in",
          })
          gsap.to(card, { zIndex: 1 })
        }

        card.addEventListener("mouseenter", onEnter)
        card.addEventListener("mouseleave", onLeave)

        // Cleanup per card
        ctx.add(() => {
          card.removeEventListener("mouseenter", onEnter)
          card.removeEventListener("mouseleave", onLeave)
        })
      })
      }, wrapRef)
      localCtx = ctx
    } catch (e) {
      console.warn("WineGalleryCinematic init error", e)
    }

    return () => {
      try {
        localCtx?.revert()
      } catch {}
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden bg-background rounded-xl border border-border"
      style={{ height: `${heightVh}vh` }}
    >
      <div ref={trackRef} className="absolute inset-0 h-full flex items-center gap-10 md:gap-20 px-8 md:px-16">
        {items.map((wine, idx) => {
          const side = idx % 2 === 0 ? "right" : "left"
          return (
            <div
              key={wine.id}
              className="wg-item relative min-w-[72vw] sm:min-w-[60vw] md:min-w-[38vw] h-[52vh] md:h-[56vh] flex items-center justify-center"
              data-side={side}
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={wine.image || "/wine-bottle-default.png"}
                alt={wine.name}
                className="h-full w-auto object-contain drop-shadow-xl will-change-transform"
                style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.28))" }}
              />

              {/* Info panel */}
              <aside
                className={`wg-panel absolute top-0 bottom-0 ${
                  side === "left" ? "left-0" : "right-0"
                } w-[72vw] sm:w-[56vw] md:w-[36vw] bg-background/95 backdrop-blur-md border border-border rounded-xl p-5 md:p-7 flex flex-col justify-center shadow-2xl`}
              >
                <div className="text-sm opacity-70 mb-2 tracking-widest uppercase">{wine.collection}</div>
                <h3 className="text-3xl md:text-4xl font-display mb-2">{wine.name}</h3>
                <p className="text-muted-foreground mb-4">{wine.description}</p>
                <div className="text-sm text-muted-foreground mb-4">Millésime {wine.vintage} — {wine.price}€</div>
                <div className="flex gap-3">
                  <Button asChild size="sm" variant="outline">
                    <a href={`/les-vins/${wine.id}`}>Détails</a>
                  </Button>
                </div>
              </aside>
            </div>
          )
        })}
      </div>
    </div>
  )
}
