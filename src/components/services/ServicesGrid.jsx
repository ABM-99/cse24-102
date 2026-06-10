export default function ServicesGrid({ services, onLearnMore }) {
  return (
    <div className="row g-4">
      {services.map((service, index) => (
        <div className="col-lg-4 col-md-6" key={service.id} data-aos="fade-up" data-aos-delay={((index % 3) + 1) * 100}>
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 text-center">
              <div className="icon-wrapper bg-warning bg-opacity-10 rounded-circle p-4 mb-4 mx-auto">
                <i className={`bi ${service.icon} text-warning fs-2`}></i>
              </div>
              <h3 className="h4 mb-3">{service.title}</h3>
              <p className="mb-4">{service.shortDescription}</p>
              <ul className="text-start mb-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="d-flex mb-2">
                    <i className="bi bi-check-circle-fill text-warning me-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onLearnMore(service)} className="btn btn-outline-warning">Learn More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
