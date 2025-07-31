import { Button } from "@/components/ui/button";
import { Heart, Users, Star } from "lucide-react";

interface CouplesPricingSectionProps {
  onBookingClick: () => void;
}

export default function CouplesPricingSection({ onBookingClick }: CouplesPricingSectionProps) {
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

        <div className="bg-navy-light rounded-3xl p-8 md:p-12 border border-gold/20 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Star className="text-gold h-6 w-6 mr-2" />
                <span className="text-gold font-semibold text-lg">Perfect Example</span>
              </div>
              
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