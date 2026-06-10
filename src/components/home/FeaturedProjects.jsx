import { Link } from 'react-router-dom'

const featured = [
  { image: '/images/projects/Office-Block-Renovation.jpg', alt: 'Gaborone Office Complex', badge: 'Commercial', title: 'Gaborone Office Complex', desc: 'Modern 10-story office building with sustainable features and premium finishes.' },
  { image: '/images/projects/Luxury-Villa.jpg', alt: 'Luxury Residential Villa', badge: 'Residential', title: 'Luxury Residential Villa', desc: '5-bedroom smart home with custom amenities and landscape design.' },
  { image: '/images/projects/Historical-Building-Restoration.jpg', alt: 'Historical Renovation', badge: 'Renovation', title: 'Historical Building Restoration', desc: 'Preservation of colonial-era architecture with modern infrastructure upgrades.' },
]

export default function FeaturedProjects() {
  return (
    <section className="featured-projects py-5" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Featured Projects</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>A showcase of our recent work and client successes</p>
        </div>
        <div className="row g-4" data-aos="fade-up">
          {featured.map((project, i) => (
            <div className="col-md-6 col-lg-4" key={i} data-aos="fade-up">
              <div className="card border-0 shadow-sm overflow-hidden">
                <img src={project.image} className="card-img-top" alt={project.alt} loading="lazy" />
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">{project.badge}</span>
                  <h3 className="h5">{project.title}</h3>
                  <p>{project.desc}</p>
                  <Link to="/portfolio" className="btn btn-sm btn-outline-warning">View Project</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/portfolio" className="btn btn-warning px-4">View Full Portfolio</Link>
        </div>
      </div>
    </section>
  )
}
