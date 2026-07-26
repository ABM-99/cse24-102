import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react'
import Button from '../components/shared/Button'

// PLACEHOLDER contact details — verify and update before launch
const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Plot 5919, Kopong, Botswana', // PLACEHOLDER
    href: null
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+267 72 717 212', // PLACEHOLDER
    href: 'tel:+26772717212'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'firstminds@gmail.com', // PLACEHOLDER — update to official domain email
    href: 'mailto:firstminds@gmail.com'
  },
]

const SUBJECTS = [
  'Technology Services',
  'Construction Services',
  'General Enquiry',
  'Partnership',
  'Other',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: ''
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // PLACEHOLDER: Form submission handler
    // TODO: Wire this up to a backend endpoint, email service (e.g. Resend, EmailJS),
    // or form service (e.g. Formspree) before launch.
    // GA4 event: gtag('event', 'form_submit', { form_name: 'contact' })
    await new Promise((res) => setTimeout(res, 1000)) // Simulate network delay
    console.log('[ContactForm] Form submitted (placeholder):', form)

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | First Minds</title>
        <meta name="description" content="Get in touch with First Minds. We are ready to partner with you on technology and construction projects across Botswana." />
      </Helmet>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="contact-hero section-navy" aria-labelledby="contact-heading">
        <div className="container">
          <span className="page-header-eyebrow">Contact Us</span>
          <h1 id="contact-heading">Let's Talk.</h1>
          <p className="contact-hero-sub">
            Whether you have a project in mind or just want to explore what's possible —
            we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ───────────────────────────────────────────── */}
      <section className="contact-section section-padding" aria-label="Contact information and form">
        <div className="container">
          <div className="contact-grid">

            {/* Info Panel */}
            <aside aria-label="Contact information">
              <div className="contact-info">
                <div className="contact-info-card">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="contact-info-item">
                      <div className="contact-info-icon" aria-hidden="true">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="contact-info-label">{label}</div>
                        {href ? (
                          <a href={href} className="contact-info-value">{value}</a>
                        ) : (
                          <span className="contact-info-value">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* PLACEHOLDER — update business hours when confirmed */}
                <div className="contact-info-card">
                  <div className="contact-info-label" style={{ marginBottom: 'var(--space-2)' }}>Business Hours</div>
                  <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>
                    Monday – Friday: 8:00 AM – 5:00 PM<br />
                    Saturday: By appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </aside>

            {/* Contact Form */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success" role="status" aria-live="polite">
                  <div className="form-success-icon" aria-hidden="true">
                    <CheckCircle size={32} />
                  </div>
                  <h3>Message Received!</h3>
                  <p>
                    Thank you for reaching out. We'll review your message and get back to you
                    as soon as possible.
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    style={{ marginTop: 'var(--space-4)' }}
                    onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' }) }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="contact-form-title">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName" className="form-label">
                          First Name <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          className="form-input"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          autoComplete="given-name"
                          placeholder="Jane"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName" className="form-label">
                          Last Name <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          className="form-input"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          autoComplete="family-name"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="jane@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="+267 00 000 000"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Subject <span aria-hidden="true">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="form-select"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a topic…</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project or enquiry…"
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      style={{ width: '100%', justifyContent: 'center' }}
                      disabled={loading}
                    >
                      {loading ? 'Sending…' : (
                        <>Send Message <Send size={16} aria-hidden="true" /></>
                      )}
                    </Button>

                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
