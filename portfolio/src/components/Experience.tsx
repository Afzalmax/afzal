import { experience, type TagColor } from '../config/site'
import './styles/Experience.css'

function Tag({ label, color }: { label: string; color: TagColor }) {
  return <span className={`exp-tag tag-${color}`}>{label}</span>
}

export function Experience() {
  return (
    <section id="experience" className="section exp-section">
      <div className="section-label">02 // experience</div>
      <h2 className="section-title">Where I've shipped.</h2>

      <div className="exp-list">
        {experience.map((job) => (
          <div key={job.role} className="exp-item">
            <div className="exp-header">
              <div>
                <div className="exp-role">{job.role}</div>
                <div className="exp-company">{job.company}</div>
                <div className="exp-product">{job.product}</div>
              </div>
              <div className="exp-period">{job.period}</div>
            </div>

            <ul className="exp-bullets">
              {job.bullets.map((b, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>

            <div className="exp-stack">
              {job.stack.map(({ label, color }) => (
                <Tag key={label} label={label} color={color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}