import { useState } from 'react'
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import useScrollPosition from '../../hooks/useScrollPosition'

export default function Navbar() {
  const scrollPosition = useScrollPosition()
  const [expanded, setExpanded] = useState(false)
  const isScrolled = scrollPosition > 100

  return (
    <>
      <a href="#main-content" className="visually-hidden-focusable position-absolute top-0 start-0 p-2 bg-dark text-white">Skip to content</a>
      <BsNavbar
        expanded={expanded}
        onToggle={setExpanded}
        expand="lg"
        fixed="top"
        className={`navbar-light shadow-sm ${isScrolled ? 'scrolled' : ''}`}
      >
        <Container>
          <BsNavbar.Brand as={Link} to="/" className="fw-bold">
            <span className="text-warning">First</span>Minds
          </BsNavbar.Brand>
          <BsNavbar.Toggle aria-controls="navbarNav" />
          <BsNavbar.Collapse id="navbarNav">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Link as={NavLink} to="/" end onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/services" onClick={() => setExpanded(false)}>Services</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio" onClick={() => setExpanded(false)}>Portfolio</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </>
  )
}
