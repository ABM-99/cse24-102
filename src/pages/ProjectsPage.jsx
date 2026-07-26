import { useState } from 'react'
import { ArrowRight, HardHat, Cpu } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import '../styles/projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Project Alpha (Smart Grid)',
    division: 'tech',
    status: 'In Development',
    description: 'An AI-driven power distribution grid optimization system.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Metro Hub Expansion',
    division: 'construction',
    status: 'In Development',
    description: 'A multi-modal transit center integrating autonomous rail networks.',
    image: 'https://images.unsplash.com/photo-1541888086225-c6b75c138804?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Predictive Maintenance IoT',
    division: 'tech',
    status: 'Coming Soon',
    description: 'Sensor network arrays for real-time structural health monitoring.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Apex Tower Foundation',
    division: 'construction',
    status: 'In Development',
    description: 'Deep foundation works for the new 80-story commercial district centerpiece.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Automated Logistics Center',
    division: 'tech',
    status: 'In Development',
    description: 'Robotic sorting facility utilizing our proprietary vision algorithms.',
    image: 'https://images.unsplash.com/photo-1565620731358-e8c037d0db86?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Coastal Defense Infrastructure',
    division: 'construction',
    status: 'Coming Soon',
    description: 'Next-generation sea wall utilizing modular carbon-reinforced concrete.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
  }
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'all') return true
    return project.division === filter
  })

  return (
    <main className="projects-page">
      <Helmet>
        <title>Projects In Development | First Minds</title>
        <meta name="description" content="Explore the innovative technology and construction projects currently in development at First Minds." />
      </Helmet>

      {/* Hero Section */}
      <section className="projects-hero section-padding">
        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow">
              <span className="hero-eyebrow-dot"></span>
              Our Work
            </span>
            <h1>Building the Future.</h1>
            <p className="hero-description">
              We don't just talk about innovation; we engineer it. Explore a selection of the intelligent solutions and critical infrastructure projects we are currently building.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="projects-content section-padding">
        <div className="container">
          <div className="projects-filter">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${filter === 'tech' ? 'active' : ''}`}
              onClick={() => setFilter('tech')}
            >
              <Cpu size={16} /> Technology
            </button>
            <button 
              className={`filter-btn ${filter === 'construction' ? 'active' : ''}`}
              onClick={() => setFilter('construction')}
            >
              <HardHat size={16} /> Construction
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <article key={project.id} className="project-card" data-division={project.division}>
                <div className="project-image">
                  {/* PLACEHOLDER: Swap with actual project rendering when available */}
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
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Have a project in mind?</h2>
          <p>Whether it's a digital transformation or a physical build, our engineers are ready.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Discuss Your Project <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
    </main>
  )
}
