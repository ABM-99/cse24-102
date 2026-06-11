import { useState, useEffect } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [brandRevealFirst, setBrandRevealFirst] = useState(false)
  const [brandRevealSecond, setBrandRevealSecond] = useState(false)
  const [progressStart, setProgressStart] = useState(false)

  useEffect(() => {
    // Check if this is a subsequent load in the session
    const isSubsequentLoad = sessionStorage.getItem('firstminds_loaded') === 'true'
    const delayBeforeFade = isSubsequentLoad ? 600 : 1800
    const delayBeforeHide = delayBeforeFade + 500

    // Staggered reveals
    const timerFirst = setTimeout(() => setBrandRevealFirst(true), 300)
    const timerSecond = setTimeout(() => setBrandRevealSecond(true), 500)
    const timerProgress = setTimeout(() => setProgressStart(true), 100)
    
    // Fade out and hide timers
    const timerFade = setTimeout(() => setFadeOut(true), delayBeforeFade)
    const timerHide = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('firstminds_loaded', 'true')
    }, delayBeforeHide)

    return () => {
      clearTimeout(timerFirst)
      clearTimeout(timerSecond)
      clearTimeout(timerProgress)
      clearTimeout(timerFade)
      clearTimeout(timerHide)
    }
  }, [])

  if (!visible) return null

  // Dot styles with brand colors
  const dots = [
    { color: '#0f172a', delay: '0ms' },  // Charcoal
    { color: '#D97706', delay: '120ms' }, // Amber
    { color: '#64748b', delay: '240ms' }, // Slate
    { color: '#F59E0B', delay: '360ms' }  // Warm Orange
  ]

  return (
    <div
      id="loader"
      className={fadeOut ? 'fade-out' : ''}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#ffffff',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* 4 Branded Dots Container */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        {dots.map((dot, index) => (
          <div
            key={index}
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: dot.color,
              animation: 'dotReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate',
              animationDelay: dot.delay
            }}
          />
        ))}
      </div>

      {/* Brand Text Reveal */}
      <div 
        style={{ 
          fontFamily: "var(--font-heading, 'Plus Jakarta Sans', sans-serif)",
          fontSize: '24px',
          fontWeight: 800,
          color: '#0f172a',
          letterSpacing: '-0.04em',
          marginBottom: '16px',
          display: 'flex',
          gap: '4px'
        }}
      >
        <span 
          style={{ 
            opacity: brandRevealFirst ? 1 : 0, 
            transform: brandRevealFirst ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            color: '#D97706'
          }}
        >
          First
        </span>
        <span 
          style={{ 
            opacity: brandRevealSecond ? 1 : 0, 
            transform: brandRevealSecond ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          Minds
        </span>
      </div>

      {/* Thin Micro-Progress Bar */}
      <div 
        style={{ 
          width: '120px', 
          height: '2px', 
          backgroundColor: '#e2e8f0', 
          borderRadius: '999px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            backgroundColor: '#D97706',
            width: progressStart ? '100%' : '0%',
            transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        />
      </div>
    </div>
  )
}
