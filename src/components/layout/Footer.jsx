export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4 text-center text-md-start">
            <img src="/logo/2.png" alt="First Minds Logo" className="footer-logo mb-3" width="180" height="auto" />
            <h2 className="h5 company-name">First Minds Proprietary Limited</h2>
            <p className="mb-0">&copy; {currentYear} First Minds (PTY) LTD. All rights reserved.</p>
          </div>
          <div className="col-md-4 text-center">
            <h3 className="h5 mb-3">Connect With Us</h3>
            <div className="social-links mb-3">
              <a href="https://www.facebook.com/share/1BqGt91fNJ/" className="text-white me-3" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
              <a href="https://wa.me/26772717212" className="text-white" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
            </div>
            <p className="mb-0">
              <i className="bi bi-telephone-fill me-2"></i>
              <a href="tel:+26772717212" className="text-white text-decoration-none">+267 72 717 212</a>
            </p>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <h3 className="h5 mb-3">Visit Us</h3>
            <p className="mb-0">Plot 5919, Kopong</p>
            <p className="mb-0">Botswana</p>
            <p className="mb-3">
              <a href="mailto:firstminds@gmail.com" className="text-white text-decoration-none">
                <i className="bi bi-envelope-fill me-2"></i>firstminds@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
