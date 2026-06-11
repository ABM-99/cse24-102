import { useState } from 'react'
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Cpu } from 'lucide-react'
import useScrollPosition from '../../hooks/useScrollPosition'

export default function Navbar() {
  const scrollPosition = useScrollPosition()
  const [expanded, setExpanded] = useState(false)
  const isScrolled = scrollPosition > 50

  const handleTechSwitch = () => {
    sessionStorage.setItem('portal_choice', 'technology')
    setExpanded(false)
  }

  return (
    <div className={`floating-nav-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <BsNavbar
        expanded={expanded}
        onToggle={setExpanded}
        expand="lg"
        className="navbar-pill"
      >
        <Container fluid className="p-0 d-flex justify-content-between align-items-center">
          <BsNavbar.Brand as={Link} to="/construction" className="navbar-brand m-0 d-flex align-items-center">
            <img 
              src="/tech/logo.png" 
              alt="First Minds Logo" 
              className="navbar-logo me-2" 
              style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
            />
            <span>First</span>Minds
          </BsNavbar.Brand>
          
          <BsNavbar.Toggle aria-controls="navbarNav" className="navbar-toggler">
            {expanded ? <X size={20} /> : <Menu size={20} />}
          </BsNavbar.Toggle>
          
          <BsNavbar.Collapse id="navbarNav">
            <Nav className="ms-auto navbar-nav align-items-center">
              <Nav.Link as={NavLink} to="/construction" end onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/construction/about" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/construction/services" onClick={() => setExpanded(false)}>
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/construction/portfolio" onClick={() => setExpanded(false)}>
                Portfolio
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/technology" 
                className="nav-link-tech-switch d-flex align-items-center gap-1 mx-2"
                onClick={handleTechSwitch}
                style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}
              >
                <Cpu size={14} /> Technologies
              </Nav.Link>
              <Nav.Link as={NavLink} to="/construction/contact" className="nav-cta-btn" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </div>
  )
}
