import { useEffect, useState } from 'react'
import AOS from 'aos'
import PageHeader from '../components/shared/PageHeader'
import ServicesGrid from '../components/services/ServicesGrid'
import ServiceModal from '../components/services/ServiceModal'
import WorkProcess from '../components/services/WorkProcess'
import { Link } from 'react-router-dom'
import services from '../data/services'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null)

  useEffect(() => {
    document.title = 'Our Services | First Minds (PTY) LTD'
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true })
  }, [])

  return (
    <div className="container flex-grow-1 mt-2 pt-2">
      <article className="services-section">
        <PageHeader title="Our Comprehensive Services" subtitle="From concept to completion, we deliver exceptional construction solutions tailored to your vision and requirements." />
        <ServicesGrid services={services} onLearnMore={setActiveService} />
        <WorkProcess />
        <section className="text-center my-5 py-5 bg-light rounded-3" data-aos="fade-up">
          <h3 className="h2 mb-4">Ready to Discuss Your Project?</h3>
          <p className="lead mb-4">Our team is ready to provide expert guidance and exceptional service.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/contact" className="btn btn-warning px-4 py-2">
              <i className="bi bi-chat-square-text-fill me-2"></i>Get a Free Quote
            </Link>
            <a href="tel:+26772717212" className="btn btn-outline-dark px-4 py-2">
              <i className="bi bi-telephone-fill me-2"></i>Call +267 72 717 212
            </a>
          </div>
        </section>
      </article>
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </div>
  )
}
