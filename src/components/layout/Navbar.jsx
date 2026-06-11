import { useState } from 'react'
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import useScrollPosition from '../../hooks/useScrollPosition'

export default function Navbar() {
  const scrollPosition = useScrollPosition()
  const [expanded, setExpanded] = useState(false)
  const isScrolled = scrollPosition > 50

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
          <BsNavbar.Brand as={Link} to="/" className="navbar-brand m-0">
            <span>First</span>Minds
          </BsNavbar.Brand>
          
          <BsNavbar.Toggle aria-controls="navbarNav" className="navbar-toggler">
            {expanded ? <X size={20} /> : <Menu size={20} />}
          </BsNavbar.Toggle>
          
          <BsNavbar.Collapse id="navbarNav">
            <Nav className="ms-auto navbar-nav">
              <Nav.Link as={NavLink} to="/" end onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" onClick={() => setExpanded(false)}>
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio" onClick={() => setExpanded(false)}>
                Portfolio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="nav-cta-btn" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </div>
  )
}
