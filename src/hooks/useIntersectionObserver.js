import { useState, useEffect, useRef } from 'react'

export default function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  const { threshold = 0.5, root = null, rootMargin = '0px' } = options

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, { threshold, root, rootMargin })

    const current = ref.current
    if (current) observer.observe(current)
    return () => { if (current) observer.unobserve(current) }
  }, [threshold, root, rootMargin])

  return [ref, isIntersecting]
}
