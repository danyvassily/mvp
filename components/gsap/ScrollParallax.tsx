"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface ScrollParallaxProps {
  children: React.ReactNode;
  speed?: number;
  lag?: number;
  className?: string;
}

export function ScrollParallax({ children, speed = 0.8, lag = 0.2, className }: ScrollParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Animation de parallaxe
    gsap.set(element, { 
      y: 0,
      willChange: 'transform'
    });

    const parallaxTween = gsap.to(element, {
      y: () => -window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: lag,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      parallaxTween.kill();
      ScrollTrigger.getById(parallaxTween.scrollTrigger?.id)?.kill();
    };
  }, [speed, lag]);

  return (
    <div ref={elementRef} className={className} data-speed={speed} data-lag={lag}>
      {children}
    </div>
  );
}

interface RevealAnimationProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function RevealAnimation({ 
  children, 
  direction = 'up', 
  distance = 100, 
  duration = 1.2, 
  delay = 0,
  className 
}: RevealAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Configuration initiale basée sur la direction
    const initialProps: any = { opacity: 0 };
    const animateProps: any = { opacity: 1, duration, delay, ease: "power2.out" };

    switch (direction) {
      case 'up':
        initialProps.y = distance;
        animateProps.y = 0;
        break;
      case 'down':
        initialProps.y = -distance;
        animateProps.y = 0;
        break;
      case 'left':
        initialProps.x = distance;
        animateProps.x = 0;
        break;
      case 'right':
        initialProps.x = -distance;
        animateProps.x = 0;
        break;
    }

    gsap.set(element, initialProps);

    const revealTween = gsap.to(element, {
      ...animateProps,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        once: false,
      }
    });

    return () => {
      revealTween.kill();
      ScrollTrigger.getById(revealTween.scrollTrigger?.id)?.kill();
    };
  }, [direction, distance, duration, delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

interface TextImageTransitionProps {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
}

export function TextImageTransition({ children, stagger = 0.2, className }: TextImageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Sélectionner tous les éléments enfants
    const textElements = container.querySelectorAll('h1, h2, h3, h4, h5, h6, p, .text-block');
    const imageElements = container.querySelectorAll('img, [role="img"], .image-container');
    const allElements = container.querySelectorAll(':scope > *');

    if (allElements.length === 0) return;

    // Animation initiale
    gsap.set(allElements, {
      opacity: 0,
      y: 60,
      scale: 0.95,
    });

    // Animation de révélation en cascade
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
      }
    });

    timeline
      .to(textElements, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: stagger,
      })
      .to(imageElements, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: stagger * 0.7,
      }, "-=0.4");

    return () => {
      timeline.kill();
      ScrollTrigger.getById(timeline.scrollTrigger?.id)?.kill();
    };
  }, [stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

interface SmoothScrollSectionProps {
  children: React.ReactNode;
  enableParallax?: boolean;
  parallaxSpeed?: number;
  enableReveal?: boolean;
  revealDirection?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function SmoothScrollSection({ 
  children, 
  enableParallax = true,
  parallaxSpeed = 0.5,
  enableReveal = true,
  revealDirection = 'up',
  className 
}: SmoothScrollSectionProps) {
  const Wrapper = enableParallax ? ScrollParallax : 'div';
  const Content = enableReveal ? RevealAnimation : 'div';

  const wrapperProps = enableParallax ? { speed: parallaxSpeed } : {};
  const contentProps = enableReveal ? { direction: revealDirection } : {};

  return (
    <Wrapper {...wrapperProps} className={className}>
      <Content {...contentProps}>
        {children}
      </Content>
    </Wrapper>
  );
}
