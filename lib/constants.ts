/**
 * Constantes de design pour l'identité visuelle premium
 */

// Palette de couleurs tri-couleur pour ColorBackdrop
export const BACKDROP_THEMES = {
  default: {
    c1: '#0e0e0e', // noir feutré
    c2: '#1b1a17', // brun-noir chaud  
    c3: '#2a2623', // taupe profond
  },
  warm: {
    c1: '#1a1612', // brun très foncé
    c2: '#2a1f1a', // brun moyen
    c3: '#3d2c22', // brun clair
  },
  cool: {
    c1: '#0f0f12', // bleu-noir
    c2: '#1a1a1f', // gris-bleu foncé
    c3: '#25252d', // gris-bleu
  },
  vintage: {
    c1: '#14110d', // sépia foncé
    c2: '#241e18', // sépia moyen
    c3: '#342b22', // sépia clair
  },
  burgundy: {
    c1: '#1a0e0e', // bordeaux très foncé
    c2: '#2d1617', // bordeaux foncé
    c3: '#3d2326', // bordeaux moyen
  }
} as const;

// Rayons de bordure standard
export const BORDER_RADIUS = {
  sm: '0.375rem',
  md: '0.5rem', 
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.25rem',
  '3xl': '1.75rem',
} as const;

// Ombres premium 
export const SHADOWS = {
  subtle: '0 10px 30px rgba(0, 0, 0, 0.15)',
  medium: '0 15px 35px rgba(0, 0, 0, 0.25)',
  heavy: '0 25px 50px rgba(0, 0, 0, 0.35)',
  cinematic: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
} as const;

// Transitions standard
export const TRANSITIONS = {
  fast: '150ms ease-out',
  medium: '250ms ease-out', 
  slow: '500ms ease-out',
  cinematic: '700ms ease-out',
} as const;

// Breakpoints responsive
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Classes d'espacement cohérentes
export const SPACING = {
  section: 'py-16 lg:py-20',
  container: 'container mx-auto px-4 lg:px-8',
  hero: 'py-20 lg:py-24',
  card: 'p-8 lg:p-12',
} as const;

// Typographie
export const TYPOGRAPHY = {
  kicker: 'tracking-wide uppercase text-[0.72rem] opacity-80',
  title: 'text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-wider',
  subtitle: 'text-base md:text-lg leading-relaxed opacity-90',
  body: 'text-base md:text-lg leading-relaxed',
} as const;
