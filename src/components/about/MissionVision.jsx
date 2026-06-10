export default function MissionVision() {
  return (
    <div className="row g-4" data-aos="fade-up">
      <section className="col-lg-6">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body p-4">
            <h3 className="card-title h4 text-warning mb-4">Our Mission</h3>
            <p className="card-text">To deliver innovative, reliable, and sustainable construction solutions that exceed client expectations while positively impacting communities through:</p>
            <ul className="list-unstyled ps-4">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2"></i>Cutting-edge building techniques</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2"></i>Environmental responsibility</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2"></i>Uncompromising quality standards</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="col-lg-6" data-aos="fade-up">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body p-4">
            <h3 className="card-title h4 text-warning mb-4">Our Vision</h3>
            <p className="card-text">To be the most trusted construction partner in Southern Africa, recognized for:</p>
            <ul className="list-unstyled ps-4">
              <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i>Operational excellence in every project</li>
              <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i>Ethical business practices</li>
              <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i>Exceptional client satisfaction</li>
              <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i>Industry-leading innovation</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="col-12 mt-4" data-aos="fade-up">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <h3 className="h4 text-center mb-4">Our Core Services</h3>
            <div className="row g-4">
              {[
                { icon: 'bi-pencil-square', title: 'Professional Planning', desc: 'Comprehensive project design and feasibility analysis' },
                { icon: 'bi-building', title: 'Quality Construction', desc: 'Residential and commercial building excellence' },
                { icon: 'bi-box-seam', title: '3D Modeling', desc: 'Advanced architectural visualization' },
                { icon: 'bi-calendar-check', title: 'Project Management', desc: 'Efficient execution and timely delivery' },
              ].map((s, i) => (
                <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up">
                  <div className="service-card p-3 text-center h-100">
                    <div className="icon-wrapper bg-warning bg-opacity-10 rounded-circle p-3 mb-3 mx-auto" style={{ width: '70px', height: '70px' }}>
                      <i className={`bi ${s.icon} text-warning fs-4`}></i>
                    </div>
                    <h4 className="h5">{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
