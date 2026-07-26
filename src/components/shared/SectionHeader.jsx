/**
 * SectionHeader — eyebrow + heading + subtitle
 * align: 'center' | 'left'
 * eyebrowColor: 'tech' | 'construction' | 'navy' | 'grey'
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  eyebrowColor = 'tech',
  dark = false,
  className = ''
}) {
  return (
    <div
      className={[
        'section-header',
        align === 'left' ? 'text-left' : 'text-center',
        className
      ].filter(Boolean).join(' ')}
    >
      {eyebrow && (
        <span className={`section-eyebrow eyebrow--${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className="section-title"
          style={dark ? { color: 'var(--color-white)' } : undefined}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className="section-subtitle"
          style={dark ? { color: 'rgba(255,255,255,0.6)' } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
