import { useState } from 'react'

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
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4 p-lg-5">
        <h3 className="h4 mb-4">Send Us a Message</h3>
        {submitted && (
          <div className="alert alert-success" role="alert">
            <i className="bi bi-check-circle-fill me-2"></i>
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}
        <form id="contactForm" noValidate className={validated ? 'was-validated' : ''} onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name*</label>
              <input type="text" className="form-control" id="firstName" required />
              <div className="invalid-feedback">Please provide your first name.</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name*</label>
              <input type="text" className="form-control" id="lastName" required />
              <div className="invalid-feedback">Please provide your last name.</div>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email*</label>
              <input type="email" className="form-control" id="email" required />
              <div className="invalid-feedback">Please provide a valid email.</div>
            </div>
            <div className="col-12">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="col-12">
              <label htmlFor="subject" className="form-label">Subject*</label>
              <select className="form-select" id="subject" required defaultValue="">
                <option value="" disabled>Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="quote">Request a Quote</option>
                <option value="project">Project Inquiry</option>
                <option value="careers">Careers</option>
              </select>
              <div className="invalid-feedback">Please select a subject.</div>
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message*</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
              <div className="invalid-feedback">Please enter your message.</div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="consent" required />
                <label className="form-check-label" htmlFor="consent">
                  I consent to First Minds contacting me about my inquiry*
                </label>
                <div className="invalid-feedback">You must agree before submitting.</div>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-warning px-4 py-2" type="submit">
                <i className="bi bi-send-fill me-2"></i>Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
