import logo from '../afr-benefits-logo.png'
import { ArrowIcon } from './icons.jsx'
import { enrollPath, homeSection } from '../lib/paths.js'

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="AFR Benefits powered by Exectras logo" />
          <p>
            Practical benefits for members, families, and the departments that serve communities
            every day.
          </p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:info@AFRBenefits.com">info@AFRBenefits.com</a>
          <a href="tel:+14436660776">(443) 666-0776</a>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <a href={homeSection('benefits')}>Benefits</a>
          <a href={homeSection('how-it-works')}>How It Works</a>
          <a href={homeSection('about')}>About</a>
          <a href={homeSection('demo')}>Request a Demo</a>
        </div>

        <div className="footer-col">
          <h4>Get Started</h4>
          <a className="footer-cta" href={enrollPath()}>
            Enroll your organization
            <ArrowIcon className="button-arrow" />
          </a>
          <a href={homeSection('demo')}>Schedule a demo</a>
        </div>
      </div>

      <div className="footer-base">
        <span>
          &copy; {new Date().getFullYear()} AFR Benefits powered by Exectras. All rights
          reserved.
        </span>
        <span>Protecting Those Who Protect Others.</span>
      </div>
    </footer>
  )
}
