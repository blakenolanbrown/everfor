import { Button } from "@/components/ui/button";
import { Calendar, Play, ChevronDown, Infinity } from "lucide-react";
import { siteContent } from "@/config/content";

interface HeroSectionProps {
  onBookingClick: () => void;
  onVideoClick: () => void;
}

export default function HeroSection({ onBookingClick, onVideoClick }: HeroSectionProps) {
  const { hero } = siteContent;
  
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-charcoal">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-deep-charcoal via-navy to-navy-light"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 to-transparent"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-cormorant text-4xl md:text-6xl font-normal text-soft-beige mb-8 animate-fade-in-up leading-relaxed">
          {hero.title}
          <span className="block text-gold font-medium">{hero.titleHighlight}</span>
        </h1>
        
        <div className="text-lg md:text-xl mb-10 leading-relaxed animate-fade-in-up text-cream max-w-2xl mx-auto text-center" style={{animationDelay: '0.3s'}}>
          {hero.subtitle.split('|').map((line, index) => (
            <p key={index} className="mb-2 last:mb-0">
              {line.trim()}
            </p>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button 
            onClick={onBookingClick}
            className="bg-gold text-deep-charcoal font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Calendar className="mr-2 h-5 w-5" />
            {hero.primaryButtonText}
          </Button>
          
          <Button 
            onClick={scrollToGallery}
            variant="outline"
            className="border border-gold/60 text-gold/90 font-medium px-8 py-3 rounded-lg text-base hover:bg-gold/10 transition-all duration-300"
          >
            <Play className="mr-2 h-4 w-4" />
            {hero.secondaryButtonText}
          </Button>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cream text-2xl h-8 w-8" />
      </div>
    </section>
  );
}
