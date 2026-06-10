import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/images/modern-house.webp',
    alt: 'Modern House Construction',
    title: 'Build Your Dream Home',
    subtitle: 'Custom-designed residences with sustainable materials and innovative technology',
    link: '/services',
    buttonText: 'Explore Our Services',
    loading: 'eager'
  },
  {
    image: '/images/design-planning.jpg',
    alt: 'Architectural Design Planning',
    title: 'Innovative Design Solutions',
    subtitle: 'From concept to completion, we bring your vision to life',
    link: '/portfolio',
    buttonText: 'View Our Portfolio',
    loading: 'lazy'
  },
  {
    image: '/images/construction-team.jpg',
    alt: 'Professional Construction Team',
    title: 'Trusted Construction Experts',
    subtitle: '20+ years of building excellence in Botswana',
    link: '/contact',
    buttonText: 'Get a Free Consultation',
    loading: 'lazy'
  }
]

export default function HeroCarousel() {
  return (
    <section className="hero-carousel mt-5 pt-1" data-aos="fade-up">
      <Carousel id="mainCarousel" ride="carousel" indicators controls>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img src={slide.image} className="d-block w-100" alt={slide.alt} loading={slide.loading} />
            <Carousel.Caption className="d-block">
              <h2 className="display-4 fw-bold mb-3">{slide.title}</h2>
              <p className="lead">{slide.subtitle}</p>
              <Link to={slide.link} className="btn btn-warning btn-lg mt-3">{slide.buttonText}</Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}
