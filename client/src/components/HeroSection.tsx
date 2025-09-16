import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Professional_tech_workspace_hero_image_5694d2d0.png";
import fullLogo from "@assets/L7-LOGO_72dpi_500px_no-bkgrnd_1757993938191.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-level7-pink/70 via-level7-purple/60 to-level7-blue/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src={fullLogo} 
            alt="LeveL7 - we level up your business success" 
            className="h-32 md:h-40 mx-auto"
          />
        </div>
        <p className="text-lg md:text-xl text-level7-text/90 mb-12 max-w-2xl mx-auto">
          Comprehensive MSP and Digital Marketing services designed specifically for small service businesses. 
          We specialize in lead management and business automation.
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
            className="border-level7-blue text-level7-blue hover:bg-level7-blue/10 px-8 py-6 text-lg backdrop-blur-sm"
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