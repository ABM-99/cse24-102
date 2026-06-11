import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import InteractiveCard from '../shared/InteractiveCard'

const featured = [
  { 
    image: '/images/projects/Office-Block-Renovation.jpg', 
    alt: 'Gaborone Office Complex', 
    categoryClass: 'badge-status-commercial',
    badge: 'Commercial', 
    title: 'Gaborone Office Complex', 
    desc: 'Modern 10-story office building with sustainable features and premium finishes.' 
  },
  { 
    image: '/images/projects/Luxury-Villa.jpg', 
    alt: 'Luxury Residential Villa', 
    categoryClass: 'badge-status-residential',
    badge: 'Residential', 
    title: 'Luxury Residential Villa', 
    desc: '5-bedroom smart home with custom amenities and landscape design.' 
  },
  { 
    image: '/images/projects/Historical-Building-Restoration.jpg', 
    alt: 'Historical Renovation', 
    categoryClass: 'badge-status-renovation',
    badge: 'Renovation', 
    title: 'Historical Building Restoration', 
    desc: 'Preservation of colonial-era architecture with modern infrastructure upgrades.' 
  },
]

export default function FeaturedProjects() {
  return (
    <section className="featured-projects section-padding" style={{ backgroundColor: 'var(--bg-main)' }} data-aos="fade-up">
      <div className="container">
        
        <div className="text-center mb-5">
          <span className="eyebrow">Portfolio</span>
          <h2 className="display-5 fw-extrabold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Featured Projects
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '640px', color: 'var(--slate-gray)', fontSize: '1.05rem' }}>
            A showcase of our recent work and client successes
          </p>
        </div>

        <div className="row g-4" data-aos="fade-up">
          {featured.map((project, i) => (
            <div className="col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <InteractiveCard className="h-100 d-flex flex-column" style={{ background: '#ffffff' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img 
                    src={project.image} 
                    className="w-100 h-100" 
                    alt={project.alt} 
                    loading="lazy" 
                    style={{ objectFit: 'cover', transition: 'transform 0.4s var(--ease-spring)' }}
                  />
                </div>
                <div className="card-body p-4 d-flex flex-column flex-grow-1">
                  <div className="mb-3">
                    <span className={`badge-status ${project.categoryClass}`}>
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="h5 fw-bold mb-2">{project.title}</h3>
                  <p className="small mb-4" style={{ color: 'var(--slate-gray)', flexGrow: 1 }}>
                    {project.desc}
                  </p>
                  <div>
                    <Link to="/portfolio" className="btn-premium btn-premium-ghost w-100">
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </InteractiveCard>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/portfolio" className="btn-premium btn-premium-secondary">
            <span>View Full Portfolio</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}
