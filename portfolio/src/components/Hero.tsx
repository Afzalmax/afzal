import { site } from '../config/site'
import './styles/Hero.css'

const heroStack = ['React.js', 'Django', 'Python', 'PostgreSQL', 'RabbitMQ', 'GCP']

export function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="grid-decoration" />
      <div className="hero">
        <p className="hero-prompt fade-in">full stack developer — {site.location.toLowerCase()}</p>

        <h1 className="fade-in d1">
          Mohamed<br />
          <span>Afzal R.</span>
        </h1>

        <p className="hero-sub fade-in d2">{site.summary}</p>

        <div className="hero-cta fade-in d3">
          <a className="btn btn-primary" href="#experience">View experience</a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>

        <div className="hero-stack fade-in d4">
          <span className="stack-label">Stack</span>
          <div className="stack-tags">
            {heroStack.map((t) => (
              <span key={t} className="stack-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}