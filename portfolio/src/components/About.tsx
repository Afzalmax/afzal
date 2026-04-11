import { site, stats } from '../config/site'
import { CopyEmailButton } from './CopyEmailButton'
import { gmailComposeHref } from '../lib/email'
import './styles/About.css'

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-label">01 // about</div>
      <h2 className="section-title">
        Building systems that<br />actually matter.
      </h2>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a <strong>Full Stack Developer</strong> who progressed from engineering intern to
            leading a team of 7 developers — all within a year. I've shipped production systems
            in both FinTech and HRTech, owning everything from database schema design to CI/CD pipelines.
          </p>
          <p>
            I care about clean architecture, performance, and reducing friction for the teams
            around me. Whether it's cutting report generation from minutes to seconds or
            eliminating 70% of manual deployment steps — I measure impact in real numbers.
          </p>
          <p>
            Currently based in <strong>{site.location}</strong>, open to remote and hybrid opportunities.
          </p>
          <div className="about-email-row">
            <a
              href={gmailComposeHref(site.email)}
              target="_blank"
              rel="noopener noreferrer"
              className="about-email-link"
              title="Opens Gmail compose in your browser (no desktop mail app required)"
            >
              {site.email} →
            </a>
            <CopyEmailButton email={site.email} />
          </div>
        </div>

        <div className="about-stats">
          {stats.map(({ num, label }) => (
            <div key={label} className="stat-cell">
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}