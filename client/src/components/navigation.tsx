import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Infinity } from "lucide-react";

interface NavigationProps {
  onBookingClick: () => void;
}

export default function Navigation({ onBookingClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Services", href: "services" },
    { label: "Gallery", href: "gallery" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
              <Infinity className="text-cream text-lg" />
            </div>
            <span className="font-playfair text-2xl font-semibold text-navy">EVERfor</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-navy hover:text-gold transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <Button 
            onClick={onBookingClick}
            className="hidden md:flex bg-gradient-to-r from-gold to-gold-light text-navy font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:bg-gold-light"
          >
            Book Consultation
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-navy hover:text-gold transition-colors font-medium text-lg"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    onBookingClick();
                  }}
                  className="bg-gradient-to-r from-gold to-gold-light text-navy font-semibold py-3 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Book Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
