import Button from './Button'

/**
 * CTASection — dark navy call-to-action block
 * title: string
 * subtitle: string
 * primaryLabel: string
 * primaryTo: route string
 * secondaryLabel: string (optional)
 * secondaryTo: route string (optional)
 */
export default function CTASection({
  title = "Let's Build Something Extraordinary Together.",
  subtitle = 'Whether it\'s technology, infrastructure, or both — First Minds has the expertise to deliver.',
  primaryLabel = 'Contact Us',
  primaryTo = '/contact',
  secondaryLabel = 'View Our Projects',
  secondaryTo = '/projects'
}) {
  return (
    <section className="cta-section section-padding section-navy" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-section-content" style={{ position: 'relative', zIndex: 1 }}>
          <h2 id="cta-heading">{title}</h2>
          <p>{subtitle}</p>
          <div className="cta-buttons">
            <Button to={primaryTo} variant="white">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button
                to={secondaryTo}
                variant="ghost"
                style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
