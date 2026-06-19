import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import EnrollmentPage from './pages/EnrollmentPage.jsx'
import { isEnrollPage } from './lib/paths.js'
import './styles.css'

const Page = isEnrollPage() ? EnrollmentPage : App

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
