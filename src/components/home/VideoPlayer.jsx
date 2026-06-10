import { useState, useRef, useEffect, useCallback } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

export default function VideoPlayer() {
  const videoRef = useRef(null)
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.7 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (isVisible) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isVisible])

  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [])

  const toggleMute = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }, [])

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    if (!document.fullscreenElement) {
      container.requestFullscreen?.() || container.webkitRequestFullscreen?.()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen?.() || document.webkitExitFullscreen?.()
      setIsFullscreen(false)
    }
  }, [containerRef])

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handleFsChange)
    return () => document.removeEventListener('fullscreenchange', handleFsChange)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`ratio ratio-16x9 video-container ${isPlaying ? 'is-playing' : ''}`}
    >
      <video
        ref={videoRef}
        className="rounded shadow"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/images/First Minds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay" onClick={togglePlay}>
        <div className="video-controls" onClick={e => e.stopPropagation()}>
          <button className="video-control-btn play-pause-btn" onClick={togglePlay} aria-label="Play/Pause video">
            <i className={`bi ${isPlaying ? 'bi-pause-circle-fill' : 'bi-play-circle-fill'}`}></i>
          </button>
          <button className="video-control-btn mute-btn" onClick={toggleMute} aria-label="Mute/Unmute video">
            <i className={`bi ${isMuted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill'}`}></i>
          </button>
          <button className="video-control-btn fullscreen-btn" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
            <i className={`bi ${isFullscreen ? 'bi-fullscreen-exit' : 'bi-fullscreen'}`}></i>
          </button>
        </div>
      </div>
    </div>
  )
}
