export const ENROLLMENT_FORM_URL =
  'https://forms.exectras.com/exectras/form/MembershipSignupFormforPartnersNew/formperma/psgjb8QFaNh9eT1ljoboErMF6JzkQbikxN6k-Ttp594?prc=CAPA'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')

export const homePath = () => `${base}/` || '/'

export const enrollPath = () => `${base}/enroll`

export const homeSection = (id) => `${homePath()}#${id}`

export const normalizePath = () => {
  let path = window.location.pathname
  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || '/'
  }
  return path.replace(/\/$/, '') || '/'
}

export const isEnrollPage = () => normalizePath() === '/enroll'
