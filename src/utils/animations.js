import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugin once safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Animate elements on initial page mount (Hero section)
 * @param {string|Element|Array} targets - Selectors or elements to animate
 * @param {object} [options] - Additional GSAP options
 */
export function animateHeroEntrance(targets, options = {}) {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y: 28,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: 'power3.out',
      ...options,
    }
  )
}

/**
 * Animate elements when scrolled into view using ScrollTrigger
 * @param {string|Element} trigger - Container element
 * @param {string|Element|Array} targets - Children elements to reveal
 * @param {object} [options] - Additional options
 */
export function animateScrollReveal(trigger, targets, options = {}) {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y: 32,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: trigger,
        start: 'top 85%',
        once: true,
        ...options.scrollTrigger,
      },
      ...options,
    }
  )
}

export { gsap, ScrollTrigger }
