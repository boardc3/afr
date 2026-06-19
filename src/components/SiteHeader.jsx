import logo from '../afr-benefits-logo.png'
import { ArrowIcon } from './icons.jsx'
import { enrollPath, homePath, homeSection } from '../lib/paths.js'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={homePath()} aria-label="AFR Benefits powered by Exectras home">
          <img src={logo} alt="AFR Benefits powered by Exectras logo" />
          <span>
            AFR <strong>Benefits</strong>
            <small>powered by Exectras</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href={homeSection('benefits')}>Benefits</a>
          <a href={homeSection('how-it-works')}>How It Works</a>
          <a href={homeSection('about')}>About</a>
          <a href={homeSection('partners')}>Partners</a>
        </nav>

        <div className="header-actions">
          <a className="button button-pill button-outline" href={enrollPath()}>
            Enroll Now
          </a>
          <a className="button button-pill" href={homeSection('demo')}>
            Request a Demo
            <ArrowIcon className="button-arrow" />
          </a>
        </div>
      </div>
    </header>
  )
}
