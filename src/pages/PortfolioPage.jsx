import { useEffect, useState } from 'react'
import AOS from 'aos'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import PageHeader from '../components/shared/PageHeader'
import InteractiveCard from '../components/shared/InteractiveCard'
import CTASection from '../components/shared/CTASection'
import projects from '../data/projects'
import { ZoomIn, MapPin, Calendar, Maximize } from 'lucide-react'

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

  // Helper function to resolve category styling badge classes
  const getBadgeClass = (category) => {
    switch (category) {
      case 'residential': return 'badge-status-residential'
      case 'commercial': return 'badge-status-commercial'
      case 'landscape': return 'badge-status-landscape'
      case 'renovation': return 'badge-status-renovation'
      default: return 'badge-status-commercial'
    }
  }

  return (
    <div className="container flex-grow-1" style={{ paddingTop: 'calc(var(--navbar-height) - 20px)', paddingBottom: '40px' }}>
      <article className="portfolio-section">
        
        <PageHeader 
          eyebrow="Showcase"
          title="Our Construction Portfolio" 
          subtitle="Explore our completed projects that showcase our commitment to quality, innovation, and client satisfaction." 
        />

        {/* Floating Pill Filter Buttons */}
        <div className="row mb-5">
          <div className="col-12 d-flex justify-content-center">
            <div className="portfolio-filter-container">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  type="button"
                  className={`portfolio-filter-btn ${activeFilter === cat.value ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6 portfolio-item" key={project.id} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
              <InteractiveCard className="h-100 d-flex flex-column" style={{ background: '#ffffff' }}>
                
                {/* Image Container with Hover zoom overlay */}
                <div className="portfolio-img-container" onClick={() => openLightbox(index)}>
                  <img src={project.image} alt={project.name} loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-overlay-icon-box">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h5 card-title mb-0 fw-bold">{project.name}</h3>
                    <span className={`badge-status ${getBadgeClass(project.category)}`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                  
                  <p className="small mb-4" style={{ color: 'var(--slate-gray)', flexGrow: 1, lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                  
                  {/* Specifications details list */}
                  <ul className="portfolio-specs-list">
                    <li>
                      <MapPin size={15} />
                      <span>{project.location}</span>
                    </li>
                    <li>
                      <Calendar size={15} />
                      <span>Completed: {project.completionDate}</span>
                    </li>
                    <li>
                      <Maximize size={15} />
                      <span>Size: {project.size}</span>
                    </li>
                  </ul>

                </div>

              </InteractiveCard>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="mt-5 pt-3">
          <CTASection 
            title="Ready to Start Your Project?"
            subtitle="Let's discuss how we can bring your vision from blueprint to beautiful citizen-built reality."
          />
        </div>

      </article>

      <Lightbox 
        open={lightboxOpen} 
        close={() => setLightboxOpen(false)} 
        index={lightboxIndex} 
        slides={lightboxSlides} 
      />
    </div>
  )
}
