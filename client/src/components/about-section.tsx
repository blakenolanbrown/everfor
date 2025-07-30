import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onBookingClick: () => void;
}

export default function AboutSection({ onBookingClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Professional videographer portrait" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
            />
          </div>
          
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
              Why I Created EVERfor
            </h2>
            
            <div className="space-y-6 text-lg text-warm-gray leading-relaxed">
              <p>
                After losing my grandmother without capturing her incredible stories, I realized how many 
                precious memories disappear forever when our loved ones pass away. That moment changed everything.
              </p>
              
              <p>
                EVERfor was born from this deeply personal experience. I've dedicated my career to ensuring 
                other families don't face the same regret—that feeling of wishing you had "just one more 
                conversation" recorded.
              </p>
              
              <p className="font-crimson italic text-xl text-navy">
                "Every family has stories worth preserving. My mission is to capture them with the reverence 
                and artistry they deserve, creating treasures that will be cherished for generations."
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">50+</div>
                <div className="text-warm-gray">Families Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">15+</div>
                <div className="text-warm-gray">Years Experience</div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                onClick={onBookingClick}
                className="bg-gradient-to-r from-gold to-gold-light text-navy font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Learn More About My Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
