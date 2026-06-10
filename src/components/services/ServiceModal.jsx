import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ServiceModal({ service, onClose }) {
  if (!service) return null

  return (
    <Modal show={!!service} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title as="h2" className="fs-5">{service.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <img src={service.image} className="img-fluid rounded mb-3" alt={service.title} />
          </div>
          <div className="col-md-6">
            <p>{service.fullDescription}</p>
            <ul className="mb-3">
              {service.modalFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <p className="fw-bold">{service.timeline}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onClose}>Close</button>
        <Link to="/contact" className="btn btn-warning" onClick={onClose}>Request This Service</Link>
      </Modal.Footer>
    </Modal>
  )
}
