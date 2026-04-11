import { site } from '../config/site'
import './styles/Footer.css'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>
        © {year} <span className="footer-accent">{site.name}</span> · {site.location}
      </p>
      <p className="footer-stack">
        Full Stack Developer · <span className="footer-accent">React · Django · PostgreSQL</span>
      </p>
    </footer>
  )
}