import { Link } from 'react-router-dom'
import { MessageSquare, Phone } from 'lucide-react'

export default function CTASection({ 
  title = 'Ready to Start Your Project?', 
  subtitle = 'Contact us today for a free consultation and quote', 
  showPhone = true 
}) {
  return (
    <section 
      className="section-padding position-relative overflow-hidden" 
      style={{
        background: 'radial-gradient(circle at center, rgba(217, 119, 6, 0.12) 0%, transparent 70%), linear-gradient(135deg, #0f172a 0%, #020617 100%)',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
      data-aos="fade-up"
    >
      {/* Accent border strip */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'linear-gradient(90deg, transparent, var(--primary-amber) 50%, transparent)'
        }}
      />

      <div className="container text-center position-relative" style={{ zIndex: 1 }}>
        <span className="eyebrow" style={{ color: 'var(--primary-amber)' }}>Get Started</span>
        <h2 className="display-5 fw-extrabold mb-3 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h2>
        <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px', color: 'rgba(255, 255, 255, 0.7)' }}>
          {subtitle}
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link to="/contact" className="btn-premium btn-premium-secondary">
            <MessageSquare size={16} />
            <span>Get in Touch</span>
          </Link>
          {showPhone && (
            <a href="tel:+26772717212" className="btn-premium btn-premium-white">
              <Phone size={16} />
              <span>Call +267 72 717 212</span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
