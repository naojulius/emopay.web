import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  // Optionally expose gsap globally
  return {
    provide: {
      gsap,
      scrollTrigger: ScrollTrigger,
      scrollSmoother: ScrollSmoother
    }
  }
})
