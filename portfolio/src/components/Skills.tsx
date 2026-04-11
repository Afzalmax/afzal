import { skills } from '../config/site'
import './styles/Skills.css'

const accentMap = {
  cyan: 'var(--accent2)',
  green: 'var(--accent)',
  purple: 'var(--accent3)',
  amber: '#fbbf24',
}

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-label">skills</div>
      <div className="skills-grid">
        {skills.map(({ category, color, items }) => (
          <div key={category} className="skill-group">
            <h4 className="skill-category" style={{ color: accentMap[color] }}>
              {category}
            </h4>
            <ul className="skill-list">
              {items.map((item) => (
                <li key={item} className="skill-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}