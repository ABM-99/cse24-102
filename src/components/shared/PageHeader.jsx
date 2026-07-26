/**
 * PageHeader — standard inner page hero header
 * Used on pages with a dark navy header band above the content.
 */
export default function PageHeader({ eyebrow, title, subtitle, division }) {
  return (
    <header className="page-header">
      <div className="container">
        {eyebrow && (
          <span
            className="page-header-eyebrow"
            style={
              division === 'technology'
                ? { color: 'var(--color-tech)' }
                : division === 'construction'
                ? { color: 'var(--color-construction)' }
                : undefined
            }
          >
            {eyebrow}
          </span>
        )}
        <h1>{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      </div>
    </header>
  )
}
