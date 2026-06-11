import { MapPin, Mail, Phone, Clock } from 'lucide-react'

// Custom SVG for WhatsApp
const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.451 5.438 1.453 5.485 0 9.948-4.461 9.951-9.95.002-2.66-1.033-5.161-2.909-7.04C17.25 1.777 14.748 1.045 12.09 1.045c-5.488 0-9.953 4.462-9.956 9.95-.001 2.024.528 4.004 1.532 5.728l-1.002 3.658 3.746-.982zm10.63-6.526c-.295-.148-1.749-.863-2.019-.962-.27-.099-.467-.148-.663.148-.196.297-.762.962-.934 1.16-.172.196-.344.222-.639.074-.295-.148-1.246-.459-2.373-1.464-.877-.782-1.47-1.747-1.642-2.044-.172-.297-.018-.458.13-.606.132-.133.294-.345.442-.519.148-.173.196-.296.295-.494.099-.197.05-.37-.025-.519-.074-.148-.663-1.6-.908-2.191-.238-.573-.48-.496-.663-.505-.171-.007-.368-.008-.565-.008-.196 0-.517.074-.787.37-.27.297-1.031 1.011-1.031 2.467 0 1.457 1.06 2.863 1.207 3.061.148.197 2.086 3.185 5.053 4.466.705.304 1.256.487 1.687.625.708.225 1.353.193 1.861.118.567-.085 1.749-.714 1.995-1.405.245-.69.245-1.282.172-1.405-.074-.123-.27-.197-.565-.346z" />
  </svg>
)

// Custom SVG for Facebook (Lucide-style outline)
const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export default function ContactInfo() {
  return (
    <div className="card our-story-card border-0 h-100">
      <div className="card-body p-4 p-md-5">
        
        <div className="mb-4">
          <span className="eyebrow">Connect</span>
          <h3 className="h3" style={{ color: 'var(--deep-charcoal)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
            Our Contact Details
          </h3>
          <div style={{ width: '30px', height: '3px', backgroundColor: 'var(--primary-amber)', marginTop: '8px', borderRadius: 'var(--radius-pill)' }} />
        </div>

        <div className="contact-info" data-aos="fade-up">
          
          {/* Address Item */}
          <div className="contact-detail-item">
            <div className="contact-detail-icon-box">
              <MapPin size={20} />
            </div>
            <div>
              <h4>Headquarters</h4>
              <p>
                <a 
                  href="https://maps.app.goo.gl/tCj4D6FtsSbF9KAR6?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Plot 5919, Kopong, Botswana
                </a>
              </p>
            </div>
          </div>

          {/* Email Item */}
          <div className="contact-detail-item" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-detail-icon-box">
              <Mail size={20} />
            </div>
            <div>
              <h4>Email Us</h4>
              <p>
                <a href="mailto:firstminds@gmail.com">firstminds@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Phone Item */}
          <div className="contact-detail-item" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-detail-icon-box">
              <Phone size={20} />
            </div>
            <div>
              <h4>Call Us</h4>
              <p>
                <a href="tel:+26772717212">+267 72 717 212</a>
              </p>
            </div>
          </div>

          {/* Clock Item */}
          <div className="contact-detail-item" data-aos="fade-up" data-aos-delay="300">
            <div className="contact-detail-icon-box">
              <Clock size={20} />
            </div>
            <div>
              <h4>Working Hours</h4>
              <p style={{ color: 'var(--slate-gray)', fontSize: '0.875rem' }}>
                Monday - Friday: 8:00AM - 5:00PM <br />
                Saturday: 9:00AM - 1:00PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>

        </div>

        <hr style={{ borderTop: '1px solid var(--border-color)', margin: '24px 0' }} />

        {/* Social media connections */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h4 className="h6 fw-bold mb-3 uppercase" style={{ color: 'var(--slate-gray)', letterSpacing: '0.06em', fontSize: '0.8125rem' }}>
            Social Channels
          </h4>
          <div className="contact-social-row">
            <a 
              href="https://www.facebook.com/share/1BqGt91fNJ/" 
              className="contact-social-bubble" 
              aria-label="Facebook" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FacebookIcon size={18} />
            </a>
            <a 
              href="https://wa.me/26772717212" 
              className="contact-social-bubble" 
              aria-label="WhatsApp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
