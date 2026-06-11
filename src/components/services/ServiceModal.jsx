import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'

export default function ServiceModal({ service, onClose }) {
  if (!service) return null

  return (
    <Modal show={!!service} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title as="h2">{service.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <img 
              src={service.image} 
              className="img-fluid rounded-3" 
              alt={service.title} 
              style={{ objectFit: 'cover', width: '100%', aspectRatio: '4/3', border: '1px solid var(--border-color)' }}
            />
          </div>
          <div className="col-md-6">
            <p className="mb-3" style={{ color: 'var(--deep-charcoal)', lineHeight: '1.7' }}>
              {service.fullDescription}
            </p>
            <h4 className="h6 fw-bold mb-2 uppercase" style={{ letterSpacing: '0.04em', color: 'var(--slate-gray)' }}>
              Key Features
            </h4>
            <ul className="ps-3 mb-4" style={{ color: 'var(--slate-gray)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {service.modalFeatures.map((feature, i) => (
                <li key={i} className="mb-1">{feature}</li>
              ))}
            </ul>
            <div className="d-flex align-items-center gap-2 p-3 rounded-3" style={{ backgroundColor: 'var(--primary-amber-light)', color: 'var(--deep-charcoal)', fontSize: '0.875rem' }}>
              <Calendar size={18} className="text-warning flex-shrink-0" />
              <span className="fw-bold">{service.timeline}</span>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-premium btn-premium-ghost" onClick={onClose}>
          Close
        </button>
        <Link to="/construction/contact" className="btn-premium btn-premium-secondary" onClick={onClose}>
          Request Service
        </Link>
      </Modal.Footer>
    </Modal>
  )
}
