"use client"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import Navbar from "./components/navbar.tsx"
import HeroSection from "./components/hero-section.tsx"
import LogoRow from "./components/logo-row.tsx"
import Leaderboard from "./components/learderboard.tsx"
import HowToPlay from "./components/how-to-play.tsx"
import SocialMedia from "./components/social-media.tsx"
import Footer from "./components/footer.tsx"

export default function Home() {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <LogoRow />
      <Leaderboard />
      <HowToPlay />
      <SocialMedia />
      <Footer />
    </div>
  )
}
