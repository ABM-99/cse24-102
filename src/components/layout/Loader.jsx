import { useState, useEffect } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1400)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className={`page-loader ${hidden ? 'hidden' : ''}`} role="status" aria-label="Loading First Minds">
      {/* TODO: Replace with final SVG from brand team */}
      <img src="/logo/fm-icon.svg" alt="" className="loader-logo" aria-hidden="true" />
      <div className="loader-bar" aria-hidden="true">
        <div className="loader-bar-fill" />
      </div>
    </div>
  )
}
