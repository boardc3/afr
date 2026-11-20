import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import EnrollmentPage from './pages/EnrollmentPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import VideoPage from './pages/VideoPage.jsx'
import { isEnrollPage, isPrivacyPage, isVideoPage } from './lib/paths.js'
import './styles.css'

const Page = isVideoPage()
  ? VideoPage
  : isPrivacyPage()
    ? PrivacyPage
    : isEnrollPage()
      ? EnrollmentPage
      : App

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
