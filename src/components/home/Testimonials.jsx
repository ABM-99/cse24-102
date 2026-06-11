import { Star } from 'lucide-react'
import testimonials from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section className="testimonials-section" data-aos="fade-up">
      <div className="container">
        
        <div className="text-center mb-5">
          <span className="eyebrow" style={{ color: 'var(--primary-amber)' }}>Feedback</span>
          <h2 className="display-5 fw-extrabold mb-3 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Client Testimonials
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '640px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.05rem' }}>
            Hear what our clients say about working with us
          </p>
        </div>

        <div className="row g-4" data-aos="fade-up">
          {testimonials.map((t, idx) => (
            <div className="col-md-4" key={t.id} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="testimonial-glass-card">
                
                {/* Rating Star Array */}
                <div className="mb-3 d-flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill="var(--primary-amber)" 
                      color="var(--primary-amber)" 
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <div className="testimonial-quote">
                  "{t.quote}"
                </div>

                {/* Client Profile details */}
                <div className="d-flex align-items-center mt-auto">
                  <img 
                    src={t.photo} 
                    className="testimonial-avatar" 
                    alt={t.name} 
                    loading="lazy"
                  />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
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
