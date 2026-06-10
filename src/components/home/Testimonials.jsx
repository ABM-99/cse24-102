import testimonials from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section className="testimonials bg-dark text-white py-5" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Client Testimonials</h2>
          <p className="lead text-light mx-auto" style={{ maxWidth: '700px' }}>Hear what our clients say about working with us</p>
        </div>
        <div className="row g-4" data-aos="fade-up">
          {testimonials.map((t) => (
            <div className="col-md-4" key={t.id} data-aos="fade-up">
              <div className="card bg-dark border-light h-100 testimonial-card">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    {[...Array(t.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p className="card-text">"{t.quote}"</p>
                  <div className="d-flex align-items-center mt-4">
                    <img src={t.photo} className="rounded-circle me-3" width="50" height="50" alt={t.name} />
                    <div>
                      <h6 className="mb-0">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
