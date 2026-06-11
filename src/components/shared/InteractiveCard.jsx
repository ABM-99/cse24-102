import { useRef } from 'react'

export default function InteractiveCard({ children, className = "", onClick, ...props }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--mouse-x', `${x}px`)
    cardRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`interactive-card ${className}`}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      {...props}
    >
      {children}
    </div>
  )
}
