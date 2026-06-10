import { useState, useEffect } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 300)
    const hideTimer = setTimeout(() => setVisible(false), 800)
    return () => { clearTimeout(timer); clearTimeout(hideTimer) }
  }, [])

  if (!visible) return null

  return (
    <div id="loader" className={fadeOut ? 'fade-out' : ''}
      style={{ position: 'fixed', inset: 0, background: 'white', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
