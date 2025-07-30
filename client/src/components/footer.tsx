import { Button } from "@/components/ui/button";
import { Infinity } from "lucide-react";

interface FooterProps {
  onBookingClick: () => void;
}

export default function Footer({ onBookingClick }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-deep-charcoal border-t border-gold/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                <Infinity className="text-cream text-lg h-5 w-5" />
              </div>
              <span className="font-playfair text-2xl font-semibold text-cream">EVERfor</span>
            </div>
            <p className="text-cream/70 leading-relaxed">
              Preserving family legacies with reverence, artistry, and the understanding that every story matters.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-cream/70 hover:text-gold transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-cream/70 hover:text-gold transition-colors text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-cream/70 hover:text-gold transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-cream/70 hover:text-gold transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Get In Touch</h4>
            <div className="space-y-2 text-cream/70">
              <div>hello@everfor.family</div>
              <div>(555) 123-EVER</div>
              <div className="pt-4">
                <Button 
                  onClick={onBookingClick}
                  className="bg-gold text-deep-charcoal font-semibold px-6 py-3 rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/20 mt-12 pt-8 text-center">
          <p className="text-cream/60">
            © 2024 EVERfor. All rights reserved. • Preserving legacies, one story at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
