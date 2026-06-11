const steps = [
  { number: 1, title: 'Consultation', desc: 'Understanding your vision, requirements, and budget through detailed discussions.' },
  { number: 2, title: 'Design & Planning', desc: 'Creating detailed plans, 3D models, and project timelines.' },
  { number: 3, title: 'Execution', desc: 'Quality construction with regular progress updates and site visits.' },
  { number: 4, title: 'Completion', desc: 'Final inspection, handover, and after-service support.' },
]

export default function WorkProcess() {
  return (
    <section className="section-padding my-5" data-aos="fade-up">
      <div className="text-center mb-5">
        <span className="eyebrow">Methodology</span>
        <h2 className="display-5 fw-extrabold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          Our Work Process
        </h2>
        <p className="lead mx-auto" style={{ maxWidth: '640px', color: 'var(--slate-gray)', fontSize: '1.05rem' }}>
          A streamlined approach to ensure quality and efficiency at every stage
        </p>
      </div>
      
      {/* Swiss grid process timeline */}
      <div className="process-timeline-container">
        {steps.map((step, idx) => (
          <div 
            className="process-timeline-step" 
            key={step.number}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            <div className="process-step-number">
              {step.number}
            </div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
