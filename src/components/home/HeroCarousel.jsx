import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/images/modern-house.webp',
    alt: 'Modern House Construction',
    title: 'Build Your Dream Home',
    subtitle: 'Custom-designed residences with sustainable materials and innovative technology',
    link: '/construction/services',
    buttonText: 'Explore Our Services',
    loading: 'eager'
  },
  {
    image: '/images/design-planning.jpg',
    alt: 'Architectural Design Planning',
    title: 'Innovative Design Solutions',
    subtitle: 'From concept to completion, we bring your vision to life',
    link: '/construction/portfolio',
    buttonText: 'View Our Portfolio',
    loading: 'lazy'
  },
  {
    image: '/images/construction-team.jpg',
    alt: 'Professional Construction Team',
    title: 'Trusted Construction Experts',
    subtitle: 'Building excellence across Botswana with precision and quality design',
    link: '/construction/contact',
    buttonText: 'Get a Free Consultation',
    loading: 'lazy'
  }
]

export default function HeroCarousel() {
  return (
    <section className="hero-carousel" data-aos="fade-in">
      <Carousel id="mainCarousel" ride="carousel" indicators={true} controls={true} interval={6000}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img src={slide.image} className="d-block w-100" alt={slide.alt} loading={slide.loading} />
            <Carousel.Caption className="carousel-caption">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <Link to={slide.link} className="btn-premium btn-premium-secondary mt-2">{slide.buttonText}</Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}
