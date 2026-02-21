import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RetainerServices from "@/components/RetainerServices";
import NicheSlider from "@/components/NicheSlider";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background noise-overlay" data-testid="homepage">
      <Header />
      <HeroSection />
      <RetainerServices />
      <NicheSlider />
      <SocialProof />
      <Footer />
    </main>
  );
}
