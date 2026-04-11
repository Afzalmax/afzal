import { site } from '../config/site'
import './styles/Navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {site.shortName.split('.')[0]}
        <span className="navbar-logo-ext">.{site.shortName.split('.')[1]}</span>
      </div>
      <ul className="navbar-links">
        {(['about', 'skills', 'experience', 'contact'] as const).map((id) => (
          <li key={id}>
            <a href={`#${id}`}>{id}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}