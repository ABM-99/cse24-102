export default function ContactInfo() {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4 p-lg-5">
        <h3 className="h4 mb-4">Our Contact Details</h3>
        <div className="contact-info" data-aos="fade-up">
          <div className="d-flex mb-4">
            <div className="icon-wrapper bg-warning bg-opacity-10 rounded-circle p-3 me-3">
              <i className="bi bi-geo-alt-fill text-warning fs-4"></i>
            </div>
            <div>
              <h4 className="h6 mb-1">Headquarters</h4>
              <p className="mb-0">
                <a href="https://maps.app.goo.gl/tCj4D6FtsSbF9KAR6?g_st=aw" className="text-decoration-none" target="_blank" rel="noopener noreferrer">Plot 5919, Kopong, Botswana</a>
              </p>
            </div>
          </div>
          <div className="d-flex mb-4" data-aos="fade-up">
            <div className="icon-wrapper bg-warning bg-opacity-10 rounded-circle p-3 me-3">
              <i className="bi bi-envelope-fill text-warning fs-4"></i>
            </div>
            <div>
              <h4 className="h6 mb-1">Email Us</h4>
              <p className="mb-0">
                <a href="mailto:firstminds@gmail.com" className="text-decoration-none">firstminds@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="d-flex mb-4" data-aos="fade-up">
            <div className="icon-wrapper bg-warning bg-opacity-10 rounded-circle p-3 me-3">
              <i className="bi bi-telephone-fill text-warning fs-4"></i>
            </div>
            <div>
              <h4 className="h6 mb-1">Call Us</h4>
              <p className="mb-0">
                <a href="tel:+26772717212" className="text-decoration-none">+267 72 717 212</a>
              </p>
            </div>
          </div>
          <div className="d-flex" data-aos="fade-up">
            <div className="icon-wrapper bg-warning bg-opacity-10 rounded-circle p-3 me-3">
              <i className="bi bi-clock-fill text-warning fs-4"></i>
            </div>
            <div>
              <h4 className="h6 mb-1">Working Hours</h4>
              <p className="mb-0">Monday - Friday: 8:00AM - 5:00PM</p>
              <p className="mb-0">Saturday: 9:00AM - 1:00PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="social-links" data-aos="fade-up">
          <h4 className="h6 mb-3">Connect With Us</h4>
          <a href="https://www.facebook.com/share/1BqGt91fNJ/" className="btn btn-outline-secondary btn-sm rounded-circle me-2" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://wa.me/26772717212" className="btn btn-outline-secondary btn-sm rounded-circle" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
