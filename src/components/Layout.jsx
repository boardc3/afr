import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="utility-inner">
          <span className="utility-mark">AFR Benefits powered by Exectras</span>
          <div className="utility-meta">
            <a href="tel:+14436660776">(443) 666-0776</a>
            <span aria-hidden="true">/</span>
            <a href="mailto:info@AFRBenefits.com">info@AFRBenefits.com</a>
          </div>
        </div>
      </div>

      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
