import Navbar from '@/components/Navbar'
import PremiumSlider from '@/components/PremiumSlider'
import TrustBar from '@/components/TrustBar'
import HookSection from '@/components/HookSection'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative" data-testid="homepage">
      <Navbar />
      <PremiumSlider />
      <TrustBar />
      <HookSection />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
