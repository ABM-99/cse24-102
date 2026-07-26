import { Helmet } from 'react-helmet-async'
import { Cpu, HardHat, Brain, Code2, Zap, Network, Radio, Server, Cloud, Activity, ArrowRight } from 'lucide-react'
import Button from '../components/shared/Button'
import SectionHeader from '../components/shared/SectionHeader'
import DivisionCard from '../components/shared/DivisionCard'
import CTASection from '../components/shared/CTASection'

// PLACEHOLDER stat values — replace with verified real figures before launch
const STATS = [
  { value: '2+',    label: 'Years of Expertise' },
  { value: '50+',   label: 'Projects Delivered' },
  { value: '2',     label: 'Divisions' },
  { value: '100%',  label: 'Client Focus' },
]

// Capabilities grid data
const CAPABILITIES = [
  { label: 'Artificial Intelligence', icon: Brain,    desc: 'Machine learning, predictive analytics, and automated decision systems.' },
  { label: 'Software Engineering',    icon: Code2,    desc: 'Custom enterprise applications and scalable web platforms.' },
  { label: 'Business Systems',        icon: Server,   desc: 'ERP, CRM, and bespoke operational management tools.' },
  { label: 'Automation',              icon: Zap,      desc: 'Process automation and workflow optimization.' },
  { label: 'Cloud Solutions',         icon: Cloud,    desc: 'Cloud-native infrastructure and migration services.' },
  { label: 'IoT & Telemetry',         icon: Radio,    desc: 'Sensor networks and real-time data collection.' },
  { label: 'Civil Engineering',       icon: HardHat,  desc: 'Structural design and site development.' },
  { label: 'Infrastructure',          icon: Network,  desc: 'Large-scale public and private infrastructure projects.' },
  { label: 'Digital Transformation',  icon: Activity, desc: 'End-to-end modernization of legacy systems.' },
]

// Process steps
const PROCESS = [
  { step: '01', label: 'Discover',  desc: 'We listen, research, and define the problem.' },
  { step: '02', label: 'Design',    desc: 'We create solutions tailored to your goals.' },
  { step: '03', label: 'Build',     desc: 'Precision execution by expert teams.' },
  { step: '04', label: 'Deploy',    desc: 'Smooth delivery on time, on spec.' },
  { step: '05', label: 'Support',   desc: 'Ongoing partnership after handover.' },
]

// Featured Projects Placeholder
const FEATURED_PROJECTS = [
  { id: 1, title: 'Project Alpha (Smart Grid)', division: 'tech', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600', status: 'In Development' },
  { id: 2, title: 'Metro Hub Expansion', division: 'construction', image: 'https://images.unsplash.com/photo-1541888086225-c6b75c138804?auto=format&fit=crop&q=80&w=600', status: 'In Development' },
]



export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>First Minds — Building Intelligent Solutions</title>
        <meta name="description" content="First Minds (PTY) LTD — one company delivering Technology and Construction solutions in Botswana. AI, Software, Civil Works, and Infrastructure." />
      </Helmet>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow" aria-hidden="true">
              <span className="hero-eyebrow-dot" />
              Building Intelligent Solutions
            </div>

            <h1 id="hero-heading">
              Where{' '}
              <span className="text-tech">Technology</span>
              {' '}Meets{' '}
              <span className="text-construction">Infrastructure</span>
            </h1>

            {/* PLACEHOLDER description — update with final approved copy */}
            <p className="hero-description">
              First Minds is one company with two powerful divisions — Technology and Construction.
              We design, build, and deliver intelligent solutions that create lasting value for
              businesses, communities, and the future.
            </p>

            <div className="hero-ctas">
              <Button to="/technology" variant="primary" size="lg">
                Explore Technology
              </Button>
              <Button to="/construction" variant="secondary" size="lg">
                Explore Construction
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ────────────────────────────────────────────────── */}
      <section className="who-we-are section-padding" aria-labelledby="who-heading">
        <div className="container">
          <div className="who-we-are-grid">
            <div className="who-we-are-text">
              <SectionHeader
                eyebrow="One Company"
                title="Two Areas of Expertise. Unlimited Possibilities."
                subtitle="We believe that technology and infrastructure should work hand-in-hand. That's why First Minds brings both disciplines under one roof — so you get seamless, end-to-end solutions."
                align="left"
                eyebrowColor="tech"
              />
              <div style={{ marginTop: 'var(--space-5)', display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Button to="/about" variant="secondary">Learn Our Story</Button>
              </div>
            </div>

            {/* PLACEHOLDER stats — replace with verified figures before launch */}
            <div className="who-we-are-stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="stat-item">
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVISIONS ─────────────────────────────────────────────────── */}
      <section className="divisions section-padding section-navy" aria-labelledby="divisions-heading">
        <div className="container">
          <SectionHeader
            id="divisions-heading"
            eyebrow="Our Divisions"
            title="What We Do"
            subtitle="Two specialised divisions. One shared commitment to quality."
            eyebrowColor="grey"
          />

          <div className="divisions-grid">
            <DivisionCard
              division="tech"
              icon={Cpu}
              title="First Minds Technologies"
              description="We build intelligent software systems — from AI-powered analytics and custom applications to IoT infrastructure and business automation. Our technology division helps organisations harness data, streamline operations, and unlock new possibilities."
              to="/technology"
              features={['AI & Machine Learning', 'Custom Software Development', 'Business Automation', 'IoT Solutions', 'IT Consulting']}
            />
            <DivisionCard
              division="construction"
              icon={HardHat}
              title="First Minds Construction"
              description="From residential builds and commercial developments to civil engineering and infrastructure projects, we deliver construction that is built to last. Every project is executed with precision, craftsmanship, and a commitment to the communities we serve."
              to="/construction"
              features={['Residential & Commercial Construction', 'Architectural Design', 'Civil Works & Infrastructure', 'Renovation & Restoration', 'Landscape Design']}
            />
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────────────── */}
      <section className="capabilities section-padding" aria-labelledby="capabilities-heading">
        <div className="container">
          <SectionHeader
            id="capabilities-heading"
            eyebrow="Our Expertise"
            title="Core Capabilities"
            subtitle="We deliver end-to-end engineering excellence across the digital and physical landscape."
            eyebrowColor="navy"
          />

          <div className="grid-3" style={{ marginTop: 'var(--space-8)' }} role="list">
            {CAPABILITIES.map(({ label, icon: Icon, desc }) => (
              <div key={label} className="card-base" role="listitem">
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>{label}</h3>
                <p style={{ fontSize: 'var(--text-sm)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── FEATURED PROJECTS ─────────────────────────────────────────── */}
      <section className="featured-projects section-padding section-navy" aria-labelledby="featured-projects-heading">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow eyebrow--tech" style={{ marginBottom: 'var(--space-2)' }}>In Progress</span>
            <h2 id="featured-projects-heading" style={{ fontSize: 'var(--text-4xl)' }}>Featured Projects</h2>
          </div>
          
          <div className="grid-2">
            {FEATURED_PROJECTS.map(project => (
              <article key={project.id} className="project-card" data-division={project.division}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-status">
                    <span className="status-dot"></span>
                    {project.status}
                  </div>
                </div>
                <div className="project-info">
                  <div className={`project-division badge badge--${project.division === 'tech' ? 'tech' : 'construction'}`}>
                    {project.division === 'tech' ? 'Technology' : 'Construction'}
                  </div>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
            <Button to="/projects" variant="secondary">
              View All Projects <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="process section-padding" aria-labelledby="process-heading">
        <div className="container">
          <SectionHeader
            eyebrow="How We Work"
            title="Our Process"
            subtitle="A structured approach that ensures every project is delivered with clarity, precision, and accountability."
            eyebrowColor="tech"
          />

          <div className="process-steps" role="list">
            {PROCESS.map(({ step, label, desc }) => (
              <div key={step} className="process-step" role="listitem">
                <div className="process-step-number" aria-hidden="true">{step}</div>
                <div className="process-step-label">{label}</div>
                <div className="process-step-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <CTASection
        title="Let's Build Something Extraordinary Together."
        subtitle="Whether you need technology, construction, or an integrated solution — we're ready to make it happen."
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />
    </>
  )
}
