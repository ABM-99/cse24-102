import { Link } from 'react-router-dom'

export default function CTASection({ variant = 'warning', title = 'Ready to Start Your Project?', subtitle = 'Contact us today for a free consultation and quote', showPhone = true }) {
  return (
    <section className={`cta-section bg-${variant} py-5`} data-aos="fade-up">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-3">{title}</h2>
        <p className="lead mb-4">{subtitle}</p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link to="/contact" className={`btn ${variant === 'warning' ? 'btn-dark' : 'btn-warning'} px-4 py-2`}>
            <i className="bi bi-chat-square-text-fill me-2"></i>Get in Touch
          </Link>
          {showPhone && (
            <a href="tel:+26772717212" className={`btn ${variant === 'warning' ? 'btn-outline-dark' : 'btn-outline-warning'} px-4 py-2`}>
              <i className="bi bi-telephone-fill me-2"></i>Call +267 72 717 212
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
