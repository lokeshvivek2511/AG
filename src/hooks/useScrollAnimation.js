import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Fade-up reveal on a single element when it enters the viewport.
 * Returns a ref to attach to the target element.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const { y = 40, duration = 0.7, delay = 0, start = 'top 85%' } = options

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    gsap.fromTo(
      el,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return ref
}

/**
 * Stagger-reveal on a container's direct children.
 * Returns a ref to attach to the parent element.
 */
export function useStagger(options = {}) {
  const ref = useRef(null)
  const { y = 40, stagger = 0.1, duration = 0.65, start = 'top 80%' } = options

  useEffect(() => {
    if (!ref.current) return
    const children = Array.from(ref.current.children)
    gsap.fromTo(
      children,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger,
        duration,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return ref
}

/**
 * Hero word-by-word stagger reveal.
 * Returns a ref to attach to the heading element.
 */
export function useHeroReveal() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const words = ref.current.querySelectorAll('.word-inner')
    gsap.fromTo(
      words,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power3.out', delay: 0.3 }
    )
  }, [])

  return ref
}

/**
 * Counter animation from 0 to target value on scroll.
 */
export function useCounter(targets = []) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || !targets.length) return
    const elements = ref.current.querySelectorAll('[data-counter]')
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        elements.forEach((el) => {
          const target = parseInt(el.dataset.counter, 10)
          const obj = { val: 0 }
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => { el.textContent = Math.round(obj.val) },
          })
        })
      },
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return ref
}

/**
 * Navbar background transition on scroll.
 */
export function useNavScroll() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const onScroll = () => {
      if (!ref.current) return
      if (window.scrollY > 40) {
        ref.current.classList.add('nav-scrolled')
      } else {
        ref.current.classList.remove('nav-scrolled')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return ref
}

/**
 * Parallax effect on an element (background moves at reduced speed).
 */
export function useParallax(speed = 0.4) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.to(ref.current, {
      yPercent: -20 * speed * 10,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return ref
}

export default {
  useReveal,
  useStagger,
  useHeroReveal,
  useCounter,
  useNavScroll,
  useParallax,
}
