export default function PageHeader({ title, subtitle, eyebrow }) {
  return (
    <section className="text-center mb-5 py-4 animate-fade-in" data-aos="fade-up">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1 
        className="display-4 fw-extrabold mb-3" 
        style={{ 
          letterSpacing: 'var(--letter-spacing-heading)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 800
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="lead mx-auto" style={{ maxWidth: '640px', color: 'var(--slate-gray)', fontSize: '1.05rem' }}>
          {subtitle}
        </p>
      )}
      <div 
        style={{ 
          width: '60px', 
          height: '4px', 
          backgroundColor: 'var(--primary-amber)', 
          margin: '1.5rem auto 0',
          borderRadius: 'var(--radius-pill)' 
        }} 
      />
    </section>
  )
}
