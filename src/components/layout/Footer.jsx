import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Cpu } from 'lucide-react'

// Custom high-quality SVG for WhatsApp to replace bootstrap-icons dependency
const WhatsAppIcon = ({ size = 20, className = "" }) => (
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

// Custom high-quality SVG for Facebook matching Lucide style
const FacebookIcon = ({ size = 20, className = "" }) => (
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

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleTechSwitch = () => {
    sessionStorage.setItem('portal_choice', 'technology')
  }

  return (
    <footer>
      {/* Top accent bar */}
      <div className="footer-accent-bar" />

      <div className="container">
        <div className="row g-4 justify-content-between">
          
          {/* Column 1: Brand & Logo */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <Link to="/construction">
              <img 
                src="/tech/logo.png" 
                alt="First Minds Logo" 
                className="footer-logo mb-3" 
                width="70" 
                height="auto" 
              />
            </Link>
            <div className="footer-tagline">Building With Precision, Designing With Passion.</div>
            <p className="small mb-0" style={{ color: 'rgba(255,255,255,0.45)' }}>
              First Minds Proprietary Limited is a leading construction and spatial design agency in Botswana.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <h3>Explore</h3>
            <ul className="footer-links">
              <li><Link to="/construction">Home</Link></li>
              <li><Link to="/construction/about">About Us</Link></li>
              <li><Link to="/construction/services">Our Services</Link></li>
              <li><Link to="/construction/portfolio">Projects Portfolio</Link></li>
              <li><Link to="/construction/contact">Get In Touch</Link></li>
              <li className="mt-2 pt-2 border-top border-secondary">
                <Link to="/technology" onClick={handleTechSwitch} className="text-warning d-flex align-items-center gap-1">
                  <Cpu size={14} /> First Minds Technologies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="col-lg-4 col-md-12 text-center text-md-start">
            <h3>Contact Info</h3>
            <div className="footer-contact-info">
              <p>
                <MapPin size={18} className="text-warning flex-shrink-0" />
                <span>Plot 5919, Kopong, Botswana</span>
              </p>
              <p>
                <Phone size={18} className="text-warning flex-shrink-0" />
                <a href="tel:+26772717212">+267 72 717 212</a>
              </p>
              <p>
                <Mail size={18} className="text-warning flex-shrink-0" />
                <a href="mailto:firstminds@gmail.com">firstminds@gmail.com</a>
              </p>
            </div>
            
            <div className="footer-social justify-content-center justify-content-md-start">
              <a 
                href="https://www.facebook.com/share/1BqGt91fNJ/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="footer-social-btn"
              >
                <FacebookIcon size={18} />
              </a>
              <a 
                href="https://wa.me/26772717212" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="footer-social-btn"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div>
            &copy; {currentYear} First Minds (PTY) LTD. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <Link to="/construction/about">Privacy Policy</Link>
            <Link to="/construction/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
