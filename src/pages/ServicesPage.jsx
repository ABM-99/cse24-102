import { useEffect, useState } from 'react'
import AOS from 'aos'
import PageHeader from '../components/shared/PageHeader'
import ServicesGrid from '../components/services/ServicesGrid'
import ServiceModal from '../components/services/ServiceModal'
import WorkProcess from '../components/services/WorkProcess'
import CTASection from '../components/shared/CTASection'
import services from '../data/services'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null)

  useEffect(() => {
    document.title = 'Our Services | First Minds (PTY) LTD'
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true })
  }, [])

  return (
    <div className="container flex-grow-1" style={{ paddingTop: 'calc(var(--navbar-height) - 20px)', paddingBottom: '40px' }}>
      <article className="services-section">
        
        <PageHeader 
          eyebrow="Expertise"
          title="Our Comprehensive Services" 
          subtitle="From concept to completion, we deliver exceptional construction solutions tailored to your vision and requirements." 
        />
        
        <ServicesGrid services={services} onLearnMore={setActiveService} />
        
        <WorkProcess />
        
        <CTASection 
          title="Ready to Discuss Your Project?" 
          subtitle="Our team of construction experts is ready to provide expert guidance and exceptional service." 
        />
        
      </article>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </div>
  )
}
