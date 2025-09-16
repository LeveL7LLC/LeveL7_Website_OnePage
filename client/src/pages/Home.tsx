import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import LevelsSection from '@/components/LevelsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <ServicesSection />
        <LevelsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}