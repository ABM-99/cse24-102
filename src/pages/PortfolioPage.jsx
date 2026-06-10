import { useEffect, useState } from 'react'
import AOS from 'aos'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import PageHeader from '../components/shared/PageHeader'
import projects from '../data/projects'
import { Link } from 'react-router-dom'

const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Renovations', value: 'renovation' },
  { label: 'Landscaping', value: 'landscape' },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    document.title = 'Our Portfolio | First Minds (PTY) LTD'
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true })
  }, [])

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)
  const lightboxSlides = filteredProjects.map(p => ({ src: p.image, alt: p.name }))

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="container flex-grow-1 mt-5 pt-5" data-aos="fade-up">
      <article className="portfolio-section">
        <PageHeader title="Our Construction Portfolio" subtitle="Explore our completed projects that showcase our commitment to quality, innovation, and client satisfaction." />

        {/* Filter Buttons */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="project-filter text-center">
              <div className="btn-group btn-group-sm flex-wrap" role="group">
                {categories.map(cat => (
                  <button
                    key={cat.value}
                    type="button"
                    className={`btn btn-outline-secondary ${activeFilter === cat.value ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat.value)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6 portfolio-item" key={project.id} data-aos="fade-up">
              <div className="card border-0 shadow-sm h-100 overflow-hidden">
                <div className="portfolio-img-container" onClick={() => openLightbox(index)}>
                  <img src={project.image} className="card-img-top" alt={project.name} loading="lazy" />
                  <div className="portfolio-overlay">
                    <i className="bi bi-zoom-in text-white fs-1"></i>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h3 className="h5 card-title mb-0">{project.name}</h3>
                    <span className={`badge ${project.badgeClass}`}>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                  </div>
                  <p className="card-text">{project.description}</p>
                  <ul className="list-unstyled">
                    <li className="d-flex mb-1">
                      <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                      <span>{project.location}</span>
                    </li>
                    <li className="d-flex mb-1">
                      <i className="bi bi-calendar-check-fill text-warning me-2"></i>
                      <span>Completed: {project.completionDate}</span>
                    </li>
                    <li className="d-flex">
                      <i className="bi bi-rulers text-warning me-2"></i>
                      <span>{project.size}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="text-center my-5 py-5" data-aos="fade-up">
          <h3 className="h2 mb-4">Ready to Start Your Project?</h3>
          <p className="lead mb-4">Let's discuss how we can bring your vision to life.</p>
          <Link to="/contact" className="btn btn-warning btn-lg px-4 py-2">
            <i className="bi bi-chat-square-text-fill me-2"></i>Get in Touch
          </Link>
        </section>
      </article>

      <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} index={lightboxIndex} slides={lightboxSlides} />
    </div>
  )
}
