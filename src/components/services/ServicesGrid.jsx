import { Palette, Building, Wrench, Trees, Zap, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'

// Map the data icon strings to premium Lucide icon components
const iconMap = {
  'bi-palette-fill': Palette,
  'bi-building-fill': Building,
  'bi-house-gear-fill': Wrench,
  'bi-tree-fill': Trees,
  'bi-lightning-charge-fill': Zap,
  'bi-shield-check': ShieldCheck
}

export default function ServicesGrid({ services, onLearnMore }) {
  return (
    <div className="row g-4">
      {services.map((service, index) => {
        // Resolve Lucide Icon Component (defaulting to Building if not found)
        const IconComponent = iconMap[service.icon] || Building

        return (
          <div 
            className="col-lg-4 col-md-6" 
            key={service.id} 
            data-aos="fade-up" 
            data-aos-delay={((index % 3) + 1) * 100}
          >
            <div className="service-glass-card">
              
              {/* Circular Icon Wrapper */}
              <div className="service-icon-container">
                <IconComponent size={28} />
              </div>

              {/* Title & Short Desc */}
              <h3 className="h4 mb-3">{service.title}</h3>
              <p className="small mb-3" style={{ color: 'var(--slate-gray)', flexGrow: 1 }}>
                {service.shortDescription}
              </p>

              {/* Features List */}
              <ul className="service-features-list">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button 
                onClick={() => onLearnMore(service)} 
                className="btn-premium btn-premium-ghost w-100 mt-2"
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </button>

            </div>
          </div>
        )
      })}
    </div>
  )
}
