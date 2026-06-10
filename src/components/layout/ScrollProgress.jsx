import useScrollPosition from '../../hooks/useScrollPosition'

export default function ScrollProgress() {
  const scrollPosition = useScrollPosition()
  const docHeight = typeof document !== 'undefined' ? document.documentElement.scrollHeight - window.innerHeight : 1
  const scrollPercent = docHeight > 0 ? (scrollPosition / docHeight) * 100 : 0

  return (
    <div className="scroll-progress">
      <div className="scroll-progress-bar" style={{ width: `${Math.min(scrollPercent, 100)}%` }} />
    </div>
  )
}
