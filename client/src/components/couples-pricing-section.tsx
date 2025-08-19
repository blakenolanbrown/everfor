import { Button } from "@/components/ui/button";
import { Heart, Users, Play } from "lucide-react";

interface CouplesPricingSectionProps {
  onBookingClick: () => void;
  onVideoClick: (videoId: string) => void;
}

export default function CouplesPricingSection({ onBookingClick, onVideoClick }: CouplesPricingSectionProps) {

  return (
    <section className="py-16 bg-gradient-to-br from-navy to-deep-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-gold h-8 w-8 mr-3" />
            <Users className="text-gold h-8 w-8" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-deep-charcoal mb-6">
            Special Couples Pricing
          </h2>
          <p className="text-xl text-cream/90 max-w-3xl mx-auto">
            When both partners want their story preserved, we make it more accessible.
          </p>
        </div>

        {/* Side by side videos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Jack's Video */}
          <div className="relative group cursor-pointer" onClick={() => onVideoClick("jack")}>
            <div className="aspect-video bg-navy-light rounded-2xl border border-gold/20 relative overflow-hidden">
              <img 
                src="https://img.youtube.com/vi/z_CqH720zZQ/maxresdefault.jpg" 
                alt="Jack Earl Chartier Legacy Session" 
                className="w-full h-full object-cover transition-all duration-300" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Play className="text-gold h-16 w-16 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="font-cormorant text-2xl font-bold text-navy mb-2">Jack Earl Chartier</h3>
              <p className="text-white">Essential</p>
            </div>
          </div>

          {/* Nita's Video */}
          <div className="relative group cursor-pointer" onClick={() => onVideoClick("nita")}>
            <div className="aspect-video bg-navy-light rounded-2xl border border-gold/20 relative overflow-hidden">
              <img 
                src="https://img.youtube.com/vi/vNCN5kdD76k/maxresdefault.jpg" 
                alt="Nita Fern Chartier Legacy Session" 
                className="w-full h-full object-cover transition-all duration-300" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Play className="text-gold h-16 w-16 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="font-cormorant text-2xl font-bold text-navy mb-2">Nita Fern Chartier</h3>
              <p className="text-white">Essential</p>
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
              <h3 className="font-cormorant text-3xl font-bold text-cream mb-4">
                Shared Legacy Sessions
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

            <div className="bg-cream rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {/* Essential */}
                <div className="border-r border-navy/20 pr-4">
                  <div className="text-navy/60 text-sm mb-2">Essential</div>
                  <div className="text-navy/60 line-through text-lg mb-1">$10,000</div>
                  <div className="text-navy font-bold text-2xl mb-1">$7,500</div>
                  <div className="text-navy/80 text-xs">for both sessions</div>
                </div>
                
                {/* Signature */}
                <div className="border-r border-navy/20 pr-4">
                  <div className="text-navy/60 text-sm mb-2">Signature</div>
                  <div className="text-navy/60 line-through text-lg mb-1">$20,000</div>
                  <div className="text-navy font-bold text-2xl mb-1">$15,000</div>
                  <div className="text-navy/80 text-xs">for both sessions</div>
                </div>
                
                {/* Eternal */}
                <div>
                  <div className="text-navy/60 text-sm mb-2">Eternal</div>
                  <div className="text-navy/60 line-through text-lg mb-1">$40,000</div>
                  <div className="text-navy font-bold text-2xl mb-1">$30,000</div>
                  <div className="text-navy/80 text-xs">for both sessions</div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-navy/20 text-center">
                <div className="text-navy/80 text-sm font-medium">25% savings on all packages</div>
              </div>
              
              <div className="bg-gold/20 rounded-xl p-4 mb-6 text-center">
                <div className="text-navy font-semibold text-lg mb-1">Save $2,500 - $10,000</div>
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