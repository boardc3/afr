import { useEffect } from 'react'
import Layout from '../components/Layout.jsx'

export default function VideoPage() {
  useEffect(() => {
    document.title = 'AFR Benefits powered by Exectras | Video Preview'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <Layout>
      <main className="legal-page">
        <div className="legal-inner video-page">
          <h1>AFR Benefits video</h1>
          <p className="legal-updated">Preview for review. Please do not share publicly.</p>
          <div className="video-frame">
            <video
              controls
              playsInline
              preload="metadata"
              poster={`${import.meta.env.BASE_URL}afr-benefits-poster.jpg`}
            >
              <source src={`${import.meta.env.BASE_URL}afr-benefits-compilation.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="video-note">
            Dramatized with AI-generated characters. Not actual member testimonials.
          </p>
        </div>
      </main>
    </Layout>
  )
}
