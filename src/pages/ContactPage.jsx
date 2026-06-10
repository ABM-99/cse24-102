import { useEffect } from 'react'
import AOS from 'aos'
import PageHeader from '../components/shared/PageHeader'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us | First Minds (PTY) LTD'
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true })
  }, [])

  return (
    <div className="container flex-grow-1 mt-1 pt-1" data-aos="fade-up">
      <article className="contact-section">
        <PageHeader title="Get In Touch" subtitle="Have a project in mind or questions about our services? Reach out to our team today." />
        <div className="row g-4" data-aos="fade-up">
          <div className="col-lg-7">
            <ContactForm />
          </div>
          <div className="col-lg-5" data-aos="fade-up">
            <ContactInfo />
          </div>
        </div>
      </article>
    </div>
  )
}
