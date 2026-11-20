import { useEffect } from 'react'
import Layout from '../components/Layout.jsx'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | AFR Benefits powered by Exectras'
  }, [])

  return (
    <Layout>
      <main className="legal-page">
        <div className="legal-inner">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: November 20, 2026</p>

          <p>
            This Privacy Policy explains how AFR Benefits powered by Exectras (&ldquo;AFR
            Benefits,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, and protects
            information when you visit this website or request a demo.
          </p>

          <h2>Information we collect</h2>
          <p>
            When you submit the Request a Demo form, you give us your name, department or
            organization, role or title, email address, phone number, department size, preferred
            contact time, and any message you choose to include. Like most websites, we may also
            receive basic technical information, such as your browser type and pages visited.
          </p>
          <p>
            Please do not include health, financial account, or other sensitive personal information
            in the form or your message.
          </p>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to your request and schedule a demo.</li>
            <li>To follow up about AFR Benefits for your department or organization.</li>
            <li>To operate, secure, and improve this website.</li>
          </ul>

          <h2>How we share it</h2>
          <p>
            We do not sell your personal information. We share it only with Exectras, the provider
            of the benefits program, and with service providers who help us run this site and
            respond to requests, and when required by law. Demo requests are delivered to us by email through
            FormSubmit, a third-party form-delivery service.
          </p>

          <h2>Email and phone contact</h2>
          <p>
            We contact you by email or phone in response to your request. We do not send text
            message marketing. You can ask us to stop contacting you at any time by emailing{' '}
            <a href="mailto:info@AFRBenefits.com">info@AFRBenefits.com</a>.
          </p>

          <h2>Enrollment</h2>
          <p>
            The enrollment application opens on Exectras&rsquo; platform. Information you enter
            there, including organization and banking details, is collected by Exectras under its
            own terms and privacy practices, not through this website.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This website may use basic cookies or analytics tools to understand how the site is
            used. You can control cookies through your browser settings. We do not respond to
            &ldquo;Do Not Track&rdquo; signals.
          </p>

          <h2>Your choices and California rights</h2>
          <p>
            You may ask us to tell you what personal information we hold about you, correct it, or
            delete it. California residents have additional rights under California privacy law,
            including the right to know, delete, and correct their information, and not to be
            discriminated against for exercising these rights. Email{' '}
            <a href="mailto:info@AFRBenefits.com">info@AFRBenefits.com</a> to make a request.
          </p>

          <h2>Security and retention</h2>
          <p>
            We use reasonable safeguards to protect your information, but no method of transmission
            or storage is completely secure. We keep information only as long as needed for the
            purposes above or as required by law.
          </p>

          <h2>Children</h2>
          <p>This website is intended for adults and organizations. We do not knowingly collect information from children under 13.</p>

          <h2>Video content</h2>
          <p>
            Videos on this site use AI-generated, dramatized characters and scenarios. They are not
            real people or actual member testimonials.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date above shows when it was last
            revised.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email <a href="mailto:info@AFRBenefits.com">info@AFRBenefits.com</a> or call{' '}
            <a href="tel:+14436660776">(443) 666-0776</a>.
          </p>
        </div>
      </main>
    </Layout>
  )
}
