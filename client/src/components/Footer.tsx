export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-foreground">
                LeveL<span className="text-level7-pink">7</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Less Busywork. More Business. We help small service businesses grow through 
              intelligent automation and strategic digital marketing.
            </p>
            <p className="text-sm text-muted-foreground">
              Specializing in lead management and business automation for service-based companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('services')}
                className="block text-muted-foreground hover:text-level7-blue transition-colors duration-200"
                data-testid="footer-services"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('levels')}
                className="block text-muted-foreground hover:text-level7-blue transition-colors duration-200"
                data-testid="footer-levels"
              >
                7 Levels of Success
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-level7-blue transition-colors duration-200"
                data-testid="footer-about"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-level7-blue transition-colors duration-200"
                data-testid="footer-contact"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Top Services</h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Lead Management</p>
              <p className="text-muted-foreground">Business Automation</p>
              <p className="text-muted-foreground">MSP Services</p>
              <p className="text-muted-foreground">Digital Marketing</p>
              <p className="text-muted-foreground">Cloud Solutions</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} LeveL7. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-level7-blue transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-level7-blue transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}