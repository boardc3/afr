import React, { useEffect, useRef, useState } from 'react'
import logo from './afr-benefits-logo.png'

const ShieldIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 4l11 4v9c0 6.5-4.7 12-11 14C9.7 29 5 23.5 5 17V8z" />
    <path d="M11.5 16.5l3 3 6-6" />
  </svg>
)

const HeartIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 27s-9-5.4-9-12a5.5 5.5 0 0 1 9-4.2A5.5 5.5 0 0 1 25 15c0 6.6-9 12-9 12z" />
    <path d="M11 16h2.5l1.5-3 2 6 1.5-3H21" />
  </svg>
)

const MindIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 5c6.6 0 11 4.1 11 9.4 0 5.3-4.4 9.4-11 9.4-1.1 0-2.2-.12-3.2-.36L7.4 26l1.4-4.3C6.5 20 5 17.4 5 14.4 5 9.1 9.4 5 16 5z" />
    <path d="M16 18.4s-3.8-2.2-3.8-4.7a2.3 2.3 0 0 1 3.8-1.7 2.3 2.3 0 0 1 3.8 1.7c0 2.5-3.8 4.7-3.8 4.7z" />
  </svg>
)

const PillIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="11" width="24" height="10" rx="5" />
    <path d="M16 11v10" />
    <path d="M9 14h2" />
    <path d="M9 18h2" />
  </svg>
)

const FamilyIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="3.2" />
    <circle cx="22" cy="12" r="2.6" />
    <path d="M5 24c0-3.5 2.7-6 6-6s6 2.5 6 6" />
    <path d="M17 24c0-2.6 2-4.7 5-4.7s5 2.1 5 4.7" />
  </svg>
)

const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
)

const benefits = [
  {
    Icon: HeartIcon,
    eyebrow: '01 — Virtual Healthcare',
    title: 'Virtual healthcare, day or night',
    description:
      'Two ways to get care: Virtual Urgent Healthcare for right-now needs, and Virtual Primary Care for ongoing health.',
    groups: [
      {
        heading: 'Virtual Urgent Healthcare',
        items: ['24/7 Access', '$0 Copay', 'Available Anytime, Day or Night'],
      },
      {
        heading: 'Virtual Primary Care',
        items: [
          'Scheduled Appointments',
          'Follow-Up Care',
          'Consistent Access to Care',
          'Covers Members Plus Up to Six Household Family Members',
        ],
      },
    ],
  },
  {
    Icon: MindIcon,
    eyebrow: '02 — Mental Health',
    title: 'Virtual Mental Health Support',
    description: 'Support when your members need someone to talk to.',
    items: [
      'Free Peer-to-Peer Support',
      'Licensed Clinicians for a $25 Copay',
      'Unlimited Conversations',
      'Confidential Virtual Access',
      'Support for Stress, Anxiety, Grief, and Burnout',
    ],
  },
  {
    Icon: PillIcon,
    eyebrow: '03 — Prescription Savings',
    title: 'Real savings at the pharmacy counter',
    description:
      'Help members reduce medication costs at national and local pharmacies with an easy-to-use savings tool.',
    items: [
      'Works at national and local pharmacies',
      'Easy-to-use mobile app',
      'Immediate savings at the counter',
    ],
  },
  {
    Icon: ShieldIcon,
    eyebrow: '04 — Life Insurance',
    title: 'Built-in protection for the family at home',
    description:
      'Simple coverage designed to support members\u2019 families if the unthinkable happens.',
    items: [
      '$10,000 Life Insurance Benefit',
      'No Medical Exam Required',
      'Available for Qualified Members',
      'Accelerated Benefit for Qualifying Conditions',
    ],
  },
]

const proofStats = [
  { value: '24/7/365', label: 'Virtual Healthcare' },
  { value: 'Up to 80%', label: 'Prescription Savings' },
  { value: '$10K', label: 'Life Insurance' },
]

const supportPillars = [
  'Fire',
  'EMS',
  'Police',
  'Public Safety',
  'Volunteer Departments',
]

const steps = [
  {
    title: 'Request a demo',
    body: 'We walk you through everything in a focused 20-minute conversation.',
  },
  {
    title: 'Get your department set up',
    body: 'We help with rollout, member onboarding, and any internal materials you need.',
  },
  {
    title: 'Members start using it right away',
    body: 'Care, savings, and protection ready when your people need them.',
  },
]

const useReveal = () => {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    )

    node.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

function App() {
  const [submitted, setSubmitted] = useState(false)
  const rootRef = useReveal()

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell" ref={rootRef}>
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

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="AFR Benefits powered by Exectras home">
            <img src={logo} alt="AFR Benefits powered by Exectras logo" />
            <span>
              AFR <strong>Benefits</strong>
              <small>powered by Exectras</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#benefits">Benefits</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
            <a href="#partners">Partners</a>
          </nav>

          <a className="button button-pill" href="#demo">
            Request a Demo
            <ArrowIcon className="button-arrow" />
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-stage">
            <div className="hero-copy">
              <span className="hero-eyebrow" data-reveal>
                <span className="dot" /> Protecting those who protect others
              </span>
              <h1 data-reveal>
                Real support for the people who serve your{' '}
                <em>community.</em>
              </h1>
              <p className="lede" data-reveal>
                AFR Benefits powered by Exectras gives departments a meaningful way to take care
                of their members and their families &mdash; with practical, everyday benefits they
                can actually use.
              </p>

              <p className="lede hero-plan" data-reveal>
                AFR Benefits powered by Exectras brings proven business-class benefits to volunteer
                fire, EMS, rescue, and nonprofit organizations. The Preferred Plan includes all of
                the benefits shown below.
              </p>

              <div className="hero-actions" data-reveal>
                <a className="button" href="#demo">
                  Request a Demo
                  <ArrowIcon className="button-arrow" />
                </a>
                <a className="link-button" href="#how-it-works">
                  Learn how it works
                </a>
              </div>

              <p className="micro" data-reveal>
                Not the decision-maker? Tell us who we should speak with.
              </p>
            </div>

            <aside className="hero-visual" aria-hidden="true">
              <div className="hero-frame">
                <div className="hero-grid" />
                <div className="hero-glow" />
                <img className="hero-badge" src={logo} alt="" />
                <div className="hero-tag hero-tag-a">
                  <span className="tag-label">Member Benefit Platform</span>
                  <span className="tag-value">Ready for Departments</span>
                </div>
                <div className="hero-tag hero-tag-b">
                  <span className="tag-dot" />
                  <span>24/7 Care Active</span>
                </div>
              </div>
            </aside>
          </div>

          <div className="hero-strip" data-reveal>
            {proofStats.map((stat) => (
              <div className="hero-strip-item" key={stat.label}>
                <span className="strip-value">{stat.value}</span>
                <span className="strip-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="trust" aria-label="Departments AFR Benefits powered by Exectras supports">
          <div className="trust-inner">
            <span className="trust-label">Built for the people who answer the call</span>
            <div className="trust-list">
              {supportPillars.map((pillar) => (
                <span key={pillar}>{pillar}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section problem">
          <div className="section-inner two-col">
            <div className="section-side" data-reveal>
              <span className="section-tag">
                <span className="section-num">01</span>
                The Problem
              </span>
              <h2>The job doesn&rsquo;t end when the call is over.</h2>
            </div>

            <div className="section-body" data-reveal>
              <p>
                Some of what your people carry doesn&rsquo;t show up on a report. And too often, the
                support available to them doesn&rsquo;t meet them where they are.
              </p>
              <p>
                At the same time, departments are being asked to do more with less, while trying to
                recruit and retain good people.
              </p>
              <blockquote>
                Real support means giving your members something they can actually use every day.
              </blockquote>
              <p>
                Whether it&rsquo;s getting quick access to care, saving money on prescriptions, or
                simply having someone to talk to when it matters &mdash; it should be there when
                they need it.
              </p>
            </div>
          </div>
        </section>

        <section className="section benefits" id="benefits">
          <div className="section-inner">
            <header className="section-head" data-reveal>
              <span className="section-tag">
                <span className="section-num">02</span>
                Benefits
              </span>
              <h2>
                Real benefits your members and their families can actually use{' '}
                <em>every day.</em>
              </h2>
              <p className="section-lede">
                Practical, real-world benefits designed to be used when your people need them most.
              </p>
            </header>

            <div className="benefit-grid">
              {benefits.map(({ Icon, ...benefit }, index) => (
                <article className="benefit-card" key={benefit.eyebrow} data-reveal style={{ '--delay': `${index * 70}ms` }}>
                  <div className="benefit-icon">
                    <Icon />
                  </div>
                  <span className="benefit-eyebrow">{benefit.eyebrow}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  {benefit.groups ? (
                    <div className="benefit-groups">
                      {benefit.groups.map((group) => (
                        <div className="benefit-group" key={group.heading}>
                          <h4>{group.heading}</h4>
                          <ul>
                            {group.items.map((item) => (
                              <li key={item}>
                                <span className="check" aria-hidden="true">
                                  <ShieldIcon />
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul>
                      {benefit.items.map((item) => (
                        <li key={item}>
                          <span className="check" aria-hidden="true">
                            <ShieldIcon />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            <div className="benefit-callout" data-reveal>
              <FamilyIcon className="callout-icon" />
              <p>
                <strong>Designed around families.</strong> Virtual Primary Care covers members plus
                up to six household family members &mdash; seven in all &mdash; so the support
                extends to the people who matter most.
              </p>
            </div>
          </div>
        </section>

        <section className="section future" id="partners">
          <div className="section-inner two-col">
            <div className="section-side" data-reveal>
              <span className="section-tag">
                <span className="section-num">03</span>
                Growth
              </span>
              <h2>More support is on the way.</h2>
            </div>
            <div className="section-body future-body" data-reveal>
              <p>
                AFR Benefits powered by Exectras is built to grow. Additional benefits,
                partnerships, and resources will continue to be added.
              </p>
              <p className="future-teaser">
                Future offerings may include cost-saving programs, department-focused services, and
                additional tools to support both your members and your organization.
              </p>
            </div>
          </div>
        </section>

        <section className="section how" id="how-it-works">
          <div className="section-inner">
            <header className="section-head" data-reveal>
              <span className="section-tag">
                <span className="section-num">04</span>
                How It Works
              </span>
              <h2>Simple to get started. Easy to use.</h2>
              <p className="section-lede">
                Getting your department set up is straightforward.
              </p>
            </header>

            <ol className="step-list">
              {steps.map((step, index) => (
                <li className="step" key={step.title} data-reveal style={{ '--delay': `${index * 80}ms` }}>
                  <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="reinforce" data-reveal>
              No complicated systems. No unnecessary barriers. Just real support when it&rsquo;s
              needed.
            </p>
          </div>
        </section>

        <section className="section credibility" id="about">
          <div className="section-inner">
            <article className="credibility-card" data-reveal>
              <span className="section-tag light">
                <span className="section-num">05</span>
                Offered by someone who knows
              </span>
              <blockquote>
                Made available by a fourth-generation firefighter with over 40 years in the
                volunteer fire service and leadership at the state level.
              </blockquote>
              <span className="credibility-meta">Founder, AFR Benefits powered by Exectras</span>
            </article>
          </div>
        </section>

        <section className="section demo" id="demo">
          <div className="section-inner two-col">
            <div className="section-side" data-reveal>
              <span className="section-tag">
                <span className="section-num">06</span>
                Request a Demo
              </span>
              <h2>Tell us a little about your department.</h2>
              <p className="section-lede">
                We&rsquo;ll reach out within a few hours to schedule a time that works for you.
              </p>
              <p className="micro">
                Not the decision-maker? Let us know who we should speak with.
              </p>
              <ul className="demo-points">
                <li>Quick walkthrough of what&rsquo;s included</li>
                <li>Tailored to your department size and needs</li>
                <li>No obligation, no pressure</li>
              </ul>
            </div>

            <form className="demo-form" onSubmit={handleSubmit} data-reveal>
              {submitted && (
                <div className="success-message" role="status">
                  Thank you. We&rsquo;ll be in touch shortly to schedule a time that works for you.
                </div>
              )}

              <div className="form-grid">
                <label>
                  <span>Name</span>
                  <input name="name" type="text" required />
                </label>
                <label>
                  <span>Department / Organization</span>
                  <input name="department" type="text" required />
                </label>
                <label>
                  <span>Role / Title</span>
                  <input name="role" type="text" required />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" required />
                </label>
                <label>
                  <span>Phone</span>
                  <input name="phone" type="tel" required />
                </label>
                <label>
                  <span>Department Size</span>
                  <select name="departmentSize" defaultValue="">
                    <option value="" disabled>
                      Select size
                    </option>
                    <option>1&ndash;10</option>
                    <option>11&ndash;25</option>
                    <option>26&ndash;50</option>
                    <option>50+</option>
                  </select>
                </label>
              </div>

              <fieldset>
                <legend>Best day and time to reach you</legend>
                <div className="time-grid">
                  <input name="bestDay" type="text" placeholder="Day" />
                  <input name="bestTime" type="text" placeholder="Time" />
                  <select name="ampm" defaultValue="">
                    <option value="" disabled>
                      AM / PM
                    </option>
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </fieldset>

              <label>
                <span>Message (Optional)</span>
                <textarea name="message" rows="4" placeholder="Anything you want us to know" />
              </label>

              <button className="button form-submit" type="submit">
                Request a Demo
                <ArrowIcon className="button-arrow" />
              </button>
            </form>
          </div>
        </section>
      </main>

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
            <a href="#benefits">Benefits</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
            <a href="#demo">Request a Demo</a>
          </div>

          <div className="footer-col">
            <h4>Get Started</h4>
            <a className="footer-cta" href="#demo">
              Schedule your demo
              <ArrowIcon className="button-arrow" />
            </a>
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
    </div>
  )
}

export default App
