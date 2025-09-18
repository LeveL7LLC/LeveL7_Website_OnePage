import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

// Import logo with fallback handling
let heptagonLogo: string;

try {
  heptagonLogo = new URL("@assets/L7-LOGO_Heptagon_no-tagline_no-background_72dpi (Custom)_1757993938191.png", import.meta.url).href;
} catch {
  heptagonLogo = "/attached_assets/L7-LOGO_Heptagon_no-tagline_no-background_72dpi (Custom)_1757993938191.png";
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: '7 Levels', id: 'levels' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2"
              data-testid="button-logo"
            >
              <img 
                src={heptagonLogo} 
                alt="LeveL7" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-foreground">
                LeveL<span className="text-level7-pink">7</span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-level7-blue transition-colors duration-200"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="tel:+18775538357" 
              className="flex items-center gap-2 text-foreground hover:text-level7-blue transition-colors duration-200"
              data-testid="nav-phone"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">(877) 5-LEVEL7</span>
            </a>
            <Button 
              className="bg-level7-pink hover:bg-level7-pink/90 text-white"
              onClick={() => scrollToSection('contact')}
              data-testid="nav-get-started"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-level7-blue transition-colors duration-200"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="tel:+18775538357" 
                className="flex items-center gap-2 text-foreground hover:text-level7-blue transition-colors duration-200"
                data-testid="mobile-nav-phone"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">(877) 5-LEVEL7</span>
              </a>
              <Button 
                className="bg-level7-pink hover:bg-level7-pink/90 text-white w-full"
                onClick={() => scrollToSection('contact')}
                data-testid="mobile-nav-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}