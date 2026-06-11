import { Link } from 'react-router-dom'
import { Home, Building, Palette, Wrench } from 'lucide-react'
import InteractiveCard from '../shared/InteractiveCard'

const highlights = [
  { 
    Icon: Home, 
    title: 'Residential Construction', 
    desc: 'Custom homes designed for your lifestyle and built to last generations.', 
    link: '/services#residential' 
  },
  { 
    Icon: Building, 
    title: 'Commercial Projects', 
    desc: 'Functional and aesthetic commercial spaces that support business success.', 
    link: '/services#commercial' 
  },
  { 
    Icon: Palette, 
    title: '3D Design & Planning', 
    desc: 'Visualize your project before construction begins with our advanced modeling.', 
    link: '/services#design' 
  },
  { 
    Icon: Wrench, 
    title: 'Renovations', 
    desc: 'Transform existing spaces with our quality renovation and remodeling services.', 
    link: '/services#renovations' 
  },
]

export default function ServicesHighlights() {
  return (
    <section className="services-section section-padding" style={{ backgroundColor: '#ffffff' }} data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5">
          <span className="eyebrow">Expertise</span>
          <h2 className="display-5 fw-extrabold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Core Services
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '640px', color: 'var(--slate-gray)', fontSize: '1.05rem' }}>
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>
        <div className="row g-4" data-aos="fade-up">
          {highlights.map((item, i) => {
            const IconComponent = item.Icon
            return (
              <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <InteractiveCard className="services-highlight-card">
                  <div className="services-highlight-icon-box">
                    <IconComponent size={28} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link 
                    to={item.link} 
                    className="hover-underline-expand" 
                    style={{ 
                      fontSize: '0.8125rem', 
                      fontWeight: 700, 
                      color: 'var(--primary-amber)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    Learn more &rarr;
                  </Link>
                </InteractiveCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
