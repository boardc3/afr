import { useEffect } from 'react'
import Layout from '../components/Layout.jsx'
import { ArrowIcon, ExternalIcon } from '../components/icons.jsx'
import { ENROLLMENT_FORM_URL } from '../lib/paths.js'

const enrollmentSteps = [
  {
    title: 'Organization Setup',
    items: [
      'Enter the number of eligible members who will have access to the program.',
      'Select Upgraded Membership. The benefits presented through AFR Benefits are based on the Upgraded Membership option, including access to Virtual Primary Care and reduced copays for Virtual Mental Health services.',
      'If you have been provided a Signup Code, enter it in the appropriate field. If you do not have a code, contact your AFR Benefits representative.',
    ],
  },
  {
    title: 'Optional Add-On',
    items: [
      'You will be presented with information about Exectras Premium.',
      'Exectras Premium provides additional business and HR management tools that many organizations and businesses find valuable.',
      'Because many volunteer fire departments, EMS agencies, rescue squads, and nonprofit organizations do not operate like traditional businesses, some organizations choose not to add this service.',
      'We encourage you to review the information and determine whether it may be beneficial for your organization.',
      'If you are not interested at this time, you may continue to the next step of the enrollment process and consider adding the service at a later date.',
    ],
  },
  {
    title: 'Monthly Cost Summary',
    items: [
      'This page provides a summary of the monthly cost based on the number of eligible members entered on Page 1.',
      'Please review the information for accuracy before continuing.',
      'No additional information is required on this page.',
      'The pricing displayed is based on the membership information entered during enrollment.',
    ],
  },
  {
    title: 'Organization Information',
    items: [
      'Enter the legal name of your organization.',
      'Complete the address information requested, including street address, city, state, and ZIP code.',
      'Enter the best phone number to reach someone regarding the account. Because many volunteer organizations do not have staff regularly available at the station, we recommend providing a direct contact number whenever possible.',
      'Enter an email address that is monitored regularly and checked frequently.',
      'Enter your organization\u2019s Federal EIN/Tax ID Number.',
      'Select the industry category that best describes your organization.',
    ],
  },
  {
    title: 'Banking Information',
    items: [
      'Enter the name of your financial institution.',
      'Enter the routing number and account number for the organization\u2019s bank account.',
      'You will be asked to enter both numbers twice for verification purposes.',
      'Upload a check from the organization\u2019s account.',
      'The check is used to verify that the banking information entered on the application is accurate.',
      'Please ensure the account information provided belongs to the organization enrolling in the program.',
    ],
  },
  {
    title: 'Guarantor Information & Authorization',
    items: [
      'Enter the name and contact information of the Guarantor.',
      'The Guarantor should be an individual authorized to sign agreements on behalf of the organization.',
      'This is typically the President, Fire Chief, Chairperson, Executive Director, or another authorized officer.',
      'Review the Terms and Conditions carefully.',
      'Check the acceptance box indicating that you agree to the Terms and Conditions.',
      'Complete the signature section.',
      'The signature must be completed by the individual serving as the Guarantor.',
    ],
  },
  {
    title: 'Portal Setup & Submission',
    items: [
      'Select the individual who will manage the account after enrollment.',
      'You may choose Same as Guarantor if the person signing the agreement will also manage the account.',
      'You may choose Delegate Someone Else if another individual will be responsible for maintaining the account, such as a Secretary, Membership Committee Chair, Administrative Officer, or other designated representative.',
      'The Portal Administrator will be responsible for managing the organization\u2019s account, including adding, removing, and updating member information.',
      'If you choose to delegate account management to another individual, you will be asked to provide their full name and email address.',
      'Review the information entered throughout the application before submitting.',
    ],
  },
]

export default function EnrollmentPage() {
  useEffect(() => {
    document.title = 'Enrollment Guide | AFR Benefits powered by Exectras'
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute(
        'content',
        'Step-by-step enrollment guide for volunteer fire departments, EMS agencies, rescue squads, and first responder organizations enrolling in AFR Benefits powered by Exectras.'
      )
    }
  }, [])

  return (
    <Layout>
      <main className="enroll-page">
        <section className="enroll-hero">
          <div className="section-inner">
            <span className="section-tag">
              <span className="section-num">01</span>
              Enrollment
            </span>
            <h1>
              AFR Benefits powered by Exectras{' '}
              <em>Enrollment Guide</em>
            </h1>
            <p className="section-lede enroll-lede">
              The Exectras enrollment platform was originally developed for businesses. Because AFR
              Benefits serves volunteer fire departments, EMS agencies, rescue squads, and other first
              responder organizations, some field names and terminology may not exactly match your
              organization&rsquo;s structure.
            </p>
          </div>
        </section>

        <section className="enroll-notice">
          <div className="section-inner">
            <div className="enroll-notice-card">
              <h2>Before you begin</h2>
              <p>
                The enrollment application opens on our partner platform and uses a temporary form
                we cannot customize directly. Field labels and terminology may not match your
                organization perfectly &mdash; that&rsquo;s expected. Review the step-by-step guide
                below so you know how each section applies to volunteer fire departments, EMS
                agencies, rescue squads, and other first responder organizations.
              </p>
              <p>
                When you&rsquo;re ready, continue to the enrollment application. Keep this page
                open in another tab for reference as you work through each step.
              </p>
              <a
                className="button enroll-form-link"
                href={ENROLLMENT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Continue to Enrollment Application
                <ExternalIcon className="button-arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="section enroll-guide">
          <div className="section-inner">
            <header className="section-head">
              <span className="section-tag">
                <span className="section-num">02</span>
                Step-by-Step Guide
              </span>
              <h2>What to expect at each step</h2>
              <p className="section-lede">
                This guide explains each step of the enrollment process and provides additional
                guidance where needed.
              </p>
            </header>

            <ol className="enroll-step-list">
              {enrollmentSteps.map((step, index) => (
                <li className="enroll-step" key={step.title}>
                  <span className="enroll-step-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>
                      Page {index + 1} &mdash; {step.title}
                    </h3>
                    <ul>
                      {step.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <article className="enroll-final">
              <span className="enroll-step-number">08</span>
              <div>
                <h3>Final Step</h3>
                <ul>
                  <li>Submit your application for review.</li>
                  <li>Applications are reviewed after submission.</li>
                  <li>Upon approval, your membership will become active.</li>
                  <li>
                    You will receive onboarding information and instructions regarding your new
                    account.
                  </li>
                </ul>
              </div>
            </article>

            <div className="enroll-bottom-cta">
              <p>Ready to enroll your organization?</p>
              <a
                className="button"
                href={ENROLLMENT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Enrollment Application
                <ExternalIcon className="button-arrow" />
              </a>
              <a className="link-button" href="mailto:info@AFRBenefits.com">
                Questions? Contact us
                <ArrowIcon className="button-arrow" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
