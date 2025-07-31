import { Button } from "@/components/ui/button";
import { Heart, Users, Play } from "lucide-react";

interface CouplesPricingSectionProps {
  onBookingClick: () => void;
}

export default function CouplesPricingSection({ onBookingClick }: CouplesPricingSectionProps) {
  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-navy to-deep-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-gold h-8 w-8 mr-3" />
            <Users className="text-gold h-8 w-8" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Special Couples Pricing
          </h2>
          <p className="text-xl text-cream/90 max-w-3xl mx-auto">
            When both partners want their story preserved, we make it more accessible.
          </p>
        </div>

        {/* Side by side videos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Jack's Video */}
          <div className="relative group cursor-pointer" onClick={() => openVideo("NnHhKdlBIgU")}>
            <div className="aspect-video bg-navy-light rounded-2xl border border-gold/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-deep-charcoal opacity-90"></div>
              <Play className="text-gold h-16 w-16 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <div className="text-center mt-4">
              <h3 className="font-playfair text-2xl font-bold text-white mb-2">Jack's Legacy Session</h3>
              <p className="text-cream/80">Essential Package • 45 minutes</p>
            </div>
          </div>

          {/* Nita's Video */}
          <div className="relative group cursor-pointer" onClick={() => openVideo("9IqGHTCIJvs")}>
            <div className="aspect-video bg-navy-light rounded-2xl border border-gold/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-deep-charcoal opacity-90"></div>
              <Play className="text-gold h-16 w-16 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <div className="text-center mt-4">
              <h3 className="font-playfair text-2xl font-bold text-white mb-2">Nita's Legacy Session</h3>
              <p className="text-cream/80">Essential Package • 45 minutes</p>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-navy-light rounded-3xl p-8 md:p-12 border border-gold/20 relative overflow-hidden max-w-4xl mx-auto">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-cream mb-4">
                Jack & Nita's Legacy Sessions
              </h3>
              
              <p className="text-white/95 leading-relaxed mb-6">
                This wonderful couple each wanted their individual stories captured. We save significant production expense by filming back to back sessions; a 25% value!
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-white/95">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  <span>Two complete individual legacy sessions</span>
                </div>
                <div className="flex items-center text-white/95">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  <span>Professional setup for both conversations</span>
                </div>
                <div className="flex items-center text-white/95">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  <span>Two separate edited legacy films</span>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 text-center">
              <div className="mb-6">
                <div className="text-navy/60 text-lg mb-2">Individual Sessions</div>
                <div className="text-navy/60 line-through text-2xl mb-2">$10,000</div>
                <div className="text-navy font-bold text-4xl mb-2">$7,500</div>
                <div className="text-navy/80 text-sm">for both sessions combined</div>
              </div>
              
              <div className="bg-gold/20 rounded-xl p-4 mb-6">
                <div className="text-navy font-semibold text-lg mb-1">You Save $2,500</div>
                <div className="text-navy/70 text-sm">Since we're already on location</div>
              </div>
              
              <Button 
                onClick={onBookingClick}
                className="w-full bg-gradient-to-r from-gold to-gold-light text-navy font-semibold py-4 rounded-full hover:shadow-lg transition-all duration-300"
              >
                <Heart className="mr-2 h-4 w-4" />
                Discuss Couples Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}