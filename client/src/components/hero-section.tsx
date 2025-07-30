import { Button } from "@/components/ui/button";
import { Calendar, Play, ChevronDown, Infinity } from "lucide-react";

interface HeroSectionProps {
  onBookingClick: () => void;
  onVideoClick: () => void;
}

export default function HeroSection({ onBookingClick, onVideoClick }: HeroSectionProps) {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Grandmother reading to grandchildren" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 video-overlay"></div>
      </div>
      {/* Golden Thread Animation */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-30 animate-golden-thread">
        <Infinity className="text-gold text-6xl w-full h-full" />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-cream mb-6 animate-fade-in-up">
          Preserve more than a memory.
          <span className="block text-gold">Capture their presence.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up text-[6A8D92]" style={{animationDelay: '0.3s'}}>
          EVERfor creates cinematic interviews that preserve your loved one's voice, story, and wisdom—for generations to come.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button 
            onClick={onBookingClick}
            className="bg-gradient-to-r from-gold to-gold-light text-navy font-semibold px-8 py-4 rounded-full text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Legacy Call
          </Button>
          
          <Button 
            onClick={scrollToGallery}
            variant="outline"
            className="border-2 border-gold text-gold font-semibold px-8 py-4 rounded-full text-lg hover:bg-gold hover:text-navy transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Preview
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
