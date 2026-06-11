import { ArrowUp } from 'lucide-react'
import useScrollPosition from '../../hooks/useScrollPosition'

export default function ScrollToTop() {
  const scrollPosition = useScrollPosition()
  const isVisible = scrollPosition > 300

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      id="scrollTopBtn"
      className={isVisible ? 'show' : ''}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{ display: isVisible ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center' }}
    >
      <ArrowUp size={20} />
    </button>
  )
}
