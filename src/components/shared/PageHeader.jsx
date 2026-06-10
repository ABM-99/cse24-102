export default function PageHeader({ title, subtitle }) {
  return (
    <section className="text-center mb-5 py-4" data-aos="fade-up">
      <h1 className="display-5 fw-bold mb-3">{title}</h1>
      {subtitle && (
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          {subtitle}
        </p>
      )}
    </section>
  )
}
