import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Typeanimation from "@/components/ui/typeanimation";

// Import images with fallback handling
let heroImage: string;
let fullLogo: string;

try {
  heroImage = new URL("@assets/generated_images/Professional_tech_workspace_hero_image_5694d2d0.png", import.meta.url).href;
} catch {
  heroImage = "/attached_assets/generated_images/Professional_tech_workspace_hero_image_5694d2d0.png";
}

try {
  fullLogo = new URL("@assets/L7-LOGO_V2_NO-BKGRD.png", import.meta.url).href;
} catch {
  fullLogo = "/attached_assets/L7-LOGO_V2_NO-BKGRD.png";
}

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Preload hero image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = heroImage;
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
          imageError ? 'opacity-0' : imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: imageLoaded && !imageError ? `url(${heroImage})` : undefined }}
      />
      {/* Fallback gradient background when image fails to load */}
      <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${
        imageError || !imageLoaded ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500`} />
      <div className="absolute inset-0 bg-gradient-to-br from-level7-pink/70 via-level7-purple/60 to-level7-blue/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <img 
            src={fullLogo} 
            alt="LeveL7 - we level up your business success" 
            className="h-32 md:h-40 mx-auto"
          />
        </div>
        {/* <p className="text-lg md:text-xl text-level7-text/90 mb-12 max-w-2xl mx-auto">
          Comprehensive MSP and Digital Marketing services designed specifically for small service businesses. 
          We specialize in lead management and business automation.
        </p> */}

        <p className="text-5xl md:text-6xl font-extrabold text-level7-text/90 mb-12 mt-12 max-w-4xl mx-auto">
          WE FIX<br className="block md:hidden" />
          <Typeanimation
            words={[' SLOW LEAD FLOW', ' BAD PROCESSES', ' KPI DATA', ' REPORTING', ' BROKEN COMPUTERS', ' JANKY SOFTWARE', ' AUTOMATIONS', ' ANALYTICS']}
            typingSpeed="slow"
            deletingSpeed={90}
            pauseDuration={2000}
            className="text-4xl md:text-6xl font-extrabold text-level7-blue"
          />
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-level7-pink hover:bg-level7-pink/90 text-white px-8 py-6 text-lg"
            onClick={() => scrollToSection('contact')}
            data-testid="button-get-started"
          >
            Get Started Today
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="[border-color:hsl(var(--level7-blue))] text-level7-blue hover:bg-level7-blue/10 px-8 py-6 text-lg backdrop-blur-sm"
            onClick={() => scrollToSection('services')}
            data-testid="button-our-services"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}