import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

export default function ContactForm() {
  const [validated, setValidated] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      e.stopPropagation()
      setValidated(true)
      return
    }
    setValidated(true)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setValidated(false)
      form.reset()
    }, 3000)
  }

  return (
    <div className="card our-story-card border-0 h-100">
      <div className="card-body p-4 p-md-5">
        
        <div className="mb-4">
          <span className="eyebrow">Contact</span>
          <h3 className="h3" style={{ color: 'var(--deep-charcoal)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
            Send Us a Message
          </h3>
          <div style={{ width: '30px', height: '3px', backgroundColor: 'var(--primary-amber)', marginTop: '8px', borderRadius: 'var(--radius-pill)' }} />
        </div>

        {submitted && (
          <div className="alert alert-success border-0 p-3 rounded-3 d-flex align-items-center gap-2 mb-4" role="alert" style={{ backgroundColor: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' }}>
            <CheckCircle2 size={18} className="flex-shrink-0" />
            <span>Thank you! Your message has been sent successfully. We will get back to you soon.</span>
          </div>
        )}

        <form id="contactForm" noValidate className={validated ? 'was-validated' : ''} onSubmit={handleSubmit}>
          <div className="row g-3">
            
            <div className="col-md-6 form-group-premium">
              <label htmlFor="firstName" className="form-label-premium">First Name*</label>
              <input type="text" className="form-input-premium" id="firstName" placeholder="Thabo" required />
              <div className="invalid-feedback text-danger mt-1 small" style={{ fontSize: '0.75rem' }}>Please enter your first name.</div>
            </div>
            
            <div className="col-md-6 form-group-premium">
              <label htmlFor="lastName" className="form-label-premium">Last Name*</label>
              <input type="text" className="form-input-premium" id="lastName" placeholder="Mothibi" required />
              <div className="invalid-feedback text-danger mt-1 small" style={{ fontSize: '0.75rem' }}>Please enter your last name.</div>
            </div>
            
            <div className="col-12 form-group-premium">
              <label htmlFor="email" className="form-label-premium">Email*</label>
              <input type="email" className="form-input-premium" id="email" placeholder="thabo@company.co.bw" required />
              <div className="invalid-feedback text-danger mt-1 small" style={{ fontSize: '0.75rem' }}>Please enter a valid email address.</div>
            </div>
            
            <div className="col-12 form-group-premium">
              <label htmlFor="phone" className="form-label-premium">Phone Number</label>
              <input type="tel" className="form-input-premium" id="phone" placeholder="+267 72 717 212" />
            </div>
            
            <div className="col-12 form-group-premium">
              <label htmlFor="subject" className="form-label-premium">Subject*</label>
              <select className="form-input-premium form-select" id="subject" required defaultValue="" style={{ appearance: 'none', backgroundPosition: 'right 16px center' }}>
                <option value="" disabled>Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="quote">Request a Quote</option>
                <option value="project">Project Inquiry</option>
                <option value="careers">Careers</option>
              </select>
              <div className="invalid-feedback text-danger mt-1 small" style={{ fontSize: '0.75rem' }}>Please select a subject query.</div>
            </div>
            
            <div className="col-12 form-group-premium">
              <label htmlFor="message" className="form-label-premium">Message*</label>
              <textarea className="form-input-premium" id="message" rows="4" placeholder="Tell us details about your dream construction project..." required></textarea>
              <div className="invalid-feedback text-danger mt-1 small" style={{ fontSize: '0.75rem' }}>Please enter your message text.</div>
            </div>
            
            <div className="col-12 mb-3">
              <div className="form-check d-flex align-items-center gap-2">
                <input className="form-check-input mt-0" type="checkbox" id="consent" required />
                <label className="form-check-label" htmlFor="consent">
                  I consent to First Minds contacting me about my inquiry*
                </label>
              </div>
              <div className="invalid-feedback text-danger mt-1 small" style={{ fontSize: '0.75rem' }}>You must agree to form consent before submitting.</div>
            </div>
            
            <div className="col-12">
              <button className="btn-premium btn-premium-secondary" type="submit">
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </div>

          </div>
        </form>

      </div>
    </div>
  )
}
