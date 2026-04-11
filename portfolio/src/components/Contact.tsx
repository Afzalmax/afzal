import { site } from '../config/site'
import { CopyEmailButton } from './CopyEmailButton'
import { gmailComposeHref } from '../lib/email'
import './styles/Contact.css'

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-label contact-label">03 // contact</div>
      <h2 className="contact-big">
        Let's build something<br />
        <span>impactful.</span>
      </h2>
      <p className="contact-sub">
        Open to full-time roles, freelance projects, and remote opportunities worldwide.
      </p>

      <div className="contact-links">
        <div className="contact-email-group">
          <a
            className="contact-link"
            href={gmailComposeHref(site.email)}
            target="_blank"
            rel="noopener noreferrer"
            title="Opens Gmail compose in your browser"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            {site.email}
          </a>
          {/* <CopyEmailButton email={site.email} className="contact-copy-email" /> */}
        </div>
        <a className="contact-link" href={site.github} target="_blank" rel="noreferrer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
          </svg>
          github/Afzalmax
        </a>
        <a className="contact-link" href={site.linkedin} target="_blank" rel="noreferrer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          linkedin/mohamedafzalr
        </a>
      </div>
    </section>
  )
}