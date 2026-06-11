import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, X, Hammer } from 'lucide-react'

export default function TechNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleConstructionSwitch = () => {
    sessionStorage.setItem('portal_choice', 'construction')
    setMobileMenuOpen(false)
    navigate('/construction')
  }

  return (
    <nav className={`tech-portal-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="tech-nav-container">
        {/* Brand Logo & Name */}
        <Link to="/technology" className="tech-nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <img src="/tech/logo.png" alt="First Minds Logo" className="tech-logo-img" />
          <span>First Minds</span>
        </Link>

        {/* Navigation Links */}
        <ul className="tech-nav-links">
          <li className="tech-nav-link-item">
            <a href="#features">Features</a>
          </li>
          
          <li className="tech-nav-link-item tech-dropdown">
            <button className="tech-dropdown-toggle">
              Solutions <ChevronDown size={14} />
            </button>
            <ul className="tech-dropdown-menu">
              <li><a href="#" className="tech-dropdown-item">AI Analytics</a></li>
              <li><a href="#" className="tech-dropdown-item">Data Integration</a></li>
              <li><a href="#" className="tech-dropdown-item">Predictions</a></li>
            </ul>
          </li>

          <li className="tech-nav-link-item tech-dropdown">
            <button className="tech-dropdown-toggle">
              Resources <ChevronDown size={14} />
            </button>
            <ul className="tech-dropdown-menu">
              <li><a href="#" className="tech-dropdown-item">Documentation</a></li>
              <li><a href="#" className="tech-dropdown-item">Case Studies</a></li>
              <li><a href="#" className="tech-dropdown-item">Blog</a></li>
            </ul>
          </li>

          <li className="tech-nav-link-item">
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        {/* Right CTA / Portal Switches */}
        <div className="tech-nav-actions">
          <Link 
            to="/construction" 
            className="login-btn d-flex align-items-center gap-1"
            onClick={handleConstructionSwitch}
          >
            <Hammer size={14} /> Construction
          </Link>
          <a href="#" className="login-btn">Log in</a>
          <a href="#" className="signup-btn">Sign up</a>
          
          {/* Mobile Hamburguer */}
          <button 
            className="tech-mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} style={{ color: '#fff' }} /> : <Menu size={20} style={{ color: '#fff' }} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`tech-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#features" className="tech-mobile-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
        <a href="#" className="tech-mobile-link" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
        <a href="#" className="tech-mobile-link" onClick={() => setMobileMenuOpen(false)}>Resources</a>
        <a href="#faq" className="tech-mobile-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
        <div className="d-flex flex-column gap-2 mt-3 px-3">
          <Link 
            to="/construction" 
            className="btn-tech btn-tech-outline" 
            onClick={handleConstructionSwitch}
            style={{ justifyContent: 'center' }}
          >
            <Hammer size={14} /> Go to Construction
          </Link>
          <a href="#" className="btn-tech btn-tech-primary" style={{ justifyContent: 'center' }}>Sign up</a>
        </div>
      </div>
    </nav>
  )
}
