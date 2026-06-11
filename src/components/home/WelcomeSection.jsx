import { Link } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'

export default function WelcomeSection() {
  return (
    <section className="welcome-section section-padding" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="eyebrow">Welcome to First Minds</span>
            <h2 className="display-5 fw-extrabold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Building Botswana's Future
            </h2>
            <p className="lead mb-4" style={{ color: 'var(--slate-gray)', fontSize: '1.05rem' }}>
              At First Minds (PTY) LTD, we combine traditional craftsmanship with modern innovation to create structures that stand the test of time.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/about" className="btn-premium btn-premium-secondary">Our Story</Link>
              <Link to="/services" className="btn-premium btn-premium-ghost">Our Services</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </section>
  )
}
