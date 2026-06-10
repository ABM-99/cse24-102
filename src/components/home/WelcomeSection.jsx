import { Link } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'

export default function WelcomeSection() {
  return (
    <section className="welcome-section py-5" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4">Building Botswana's Future</h2>
            <p className="lead mb-4">At First Minds (PTY) LTD, we combine traditional craftsmanship with modern innovation to create structures that stand the test of time.</p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/about" className="btn btn-warning px-4">Our Story</Link>
              <Link to="/services" className="btn btn-outline-dark px-4">Our Services</Link>
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
