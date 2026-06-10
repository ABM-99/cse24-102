import { Link } from 'react-router-dom'

const highlights = [
  { icon: 'bi-house-door-fill', title: 'Residential Construction', desc: 'Custom homes designed for your lifestyle and built to last generations.', link: '/services#residential' },
  { icon: 'bi-building-fill', title: 'Commercial Projects', desc: 'Functional and aesthetic commercial spaces that support business success.', link: '/services#commercial' },
  { icon: 'bi-palette-fill', title: '3D Design & Planning', desc: 'Visualize your project before construction begins with our advanced modeling.', link: '/services#design' },
  { icon: 'bi-tools', title: 'Renovations', desc: 'Transform existing spaces with our quality renovation and remodeling services.', link: '/services#renovations' },
]

export default function ServicesHighlights() {
  return (
    <section className="services-section bg-light py-5" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Our Core Services</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>Comprehensive construction solutions tailored to your needs</p>
        </div>
        <div className="row g-4" data-aos="fade-up">
          {highlights.map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper bg-warning bg-opacity-10 rounded-circle p-3 mb-4 mx-auto float-animation">
                    <i className={`bi ${item.icon} text-warning fs-2`}></i>
                  </div>
                  <h3 className="h5">{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link to={item.link} className="btn btn-link text-warning p-0">Learn more →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
