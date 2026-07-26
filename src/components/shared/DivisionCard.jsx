import { ArrowRight } from 'lucide-react'
import Button from './Button'

/**
 * DivisionCard — large featured card for Technology or Construction division
 * division: 'tech' | 'construction'
 * icon: Lucide icon component
 * title: string
 * description: string
 * to: route string
 */
export default function DivisionCard({ division, icon: Icon, title, description, to, features = [] }) {
  const isTech = division === 'tech'

  return (
    <div className={`division-card division-card--${division}`}>
      <div className="division-card-icon">
        {Icon && <Icon size={26} aria-hidden="true" />}
      </div>

      <div>
        <h3 className="division-card-title">{title}</h3>
      </div>

      <p className="division-card-description">{description}</p>

      {features.length > 0 && (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          {features.map((f) => (
            <li
              key={f}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: 'var(--text-sm)',
                color: isTech ? 'rgba(255,255,255,0.6)' : 'var(--color-grey-dark)'
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  flexShrink: 0,
                  background: isTech ? 'var(--color-tech)' : 'var(--color-construction)'
                }}
              />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div>
        <Button
          to={to}
          variant={isTech ? 'tech' : 'construction'}
          style={{ marginTop: '0.5rem' }}
        >
          Explore {isTech ? 'Technologies' : 'Construction'}
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
