const steps = [
  { number: 1, title: 'Consultation', desc: 'Understanding your vision, requirements, and budget through detailed discussions.' },
  { number: 2, title: 'Design & Planning', desc: 'Creating detailed plans, 3D models, and project timelines.' },
  { number: 3, title: 'Execution', desc: 'Quality construction with regular progress updates and site visits.' },
  { number: 4, title: 'Completion', desc: 'Final inspection, handover, and after-service support.' },
]

export default function WorkProcess() {
  return (
    <section className="my-5 py-5" data-aos="fade-up">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold mb-3">Our Work Process</h2>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>A streamlined approach to ensure quality and efficiency at every stage</p>
      </div>
      <div className="row g-4">
        {steps.map((step) => (
          <div className="col-md-6 col-lg-3" key={step.number}>
            <div className="process-step text-center p-4">
              <div className="step-number bg-warning text-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <span className="fs-4 fw-bold">{step.number}</span>
              </div>
              <h4 className="h5 mb-3">{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
