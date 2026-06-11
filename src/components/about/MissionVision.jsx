import { CheckCircle2, Star, PenTool, Building, Layers, Calendar } from 'lucide-react'

export default function MissionVision() {
  return (
    <div className="row g-4 mt-2" data-aos="fade-up">
      
      {/* Mission Section */}
      <section className="col-lg-6">
        <div className="card our-story-card h-100 border-0">
          <div className="card-body p-4 p-md-5">
            <h3 className="h3 mb-4" style={{ color: 'var(--deep-charcoal)', fontFamily: 'var(--font-heading)' }}>Our Mission</h3>
            <p className="mb-4" style={{ color: 'var(--slate-gray)' }}>
              To deliver innovative, reliable, and sustainable construction solutions that exceed client expectations while positively impacting communities through:
            </p>
            <div className="ps-2">
              <div className="about-list-item">
                <CheckCircle2 className="about-list-icon" size={18} />
                <span>Cutting-edge building techniques and modern machinery.</span>
              </div>
              <div className="about-list-item">
                <CheckCircle2 className="about-list-icon" size={18} />
                <span>Environmental responsibility and green building practices.</span>
              </div>
              <div className="about-list-item">
                <CheckCircle2 className="about-list-icon" size={18} />
                <span>Uncompromising quality standards and safety protocols.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="col-lg-6" data-aos="fade-up">
        <div className="card our-story-card h-100 border-0">
          <div className="card-body p-4 p-md-5">
            <h3 className="h3 mb-4" style={{ color: 'var(--deep-charcoal)', fontFamily: 'var(--font-heading)' }}>Our Vision</h3>
            <p className="mb-4" style={{ color: 'var(--slate-gray)' }}>
              To be the most trusted construction partner in Southern Africa, recognized for:
            </p>
            <div className="ps-2">
              <div className="about-list-item">
                <Star className="about-list-icon" size={18} />
                <span>Operational excellence in every single project we take on.</span>
              </div>
              <div className="about-list-item">
                <Star className="about-list-icon" size={18} />
                <span>Ethical business practices and absolute transparency.</span>
              </div>
              <div className="about-list-item">
                <Star className="about-list-icon" size={18} />
                <span>Exceptional client satisfaction and lifelong trust.</span>
              </div>
              <div className="about-list-item">
                <Star className="about-list-icon" size={18} />
                <span>Industry-leading innovation in spatial design and layouts.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section inside About page */}
      <section className="col-12 mt-5" data-aos="fade-up">
        <div className="card our-story-card border-0">
          <div className="card-body p-4 p-md-5">
            
            <div className="text-center mb-5">
              <span className="eyebrow">Services</span>
              <h3 className="display-6 fw-extrabold" style={{ color: 'var(--deep-charcoal)', fontFamily: 'var(--font-heading)' }}>
                Our Core Services
              </h3>
              <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--primary-amber)', margin: '12px auto 0', borderRadius: 'var(--radius-pill)' }} />
            </div>

            <div className="row g-4">
              {[
                { Icon: PenTool, title: 'Professional Planning', desc: 'Comprehensive project design, layout configuration, and feasibility analysis.' },
                { Icon: Building, title: 'Quality Construction', desc: 'Residential and commercial building excellence delivered by certified professionals.' },
                { Icon: Layers, title: '3D Modeling & Design', desc: 'Advanced architectural visualization and virtual fly-through renders.' },
                { Icon: Calendar, title: 'Project Management', desc: 'Efficient execution, resource management, and on-time budget delivery.' },
              ].map((s, i) => {
                const IconComponent = s.Icon
                return (
                  <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="about-service-card">
                      <div className="about-service-icon-box">
                        <IconComponent size={24} />
                      </div>
                      <h4>{s.title}</h4>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
