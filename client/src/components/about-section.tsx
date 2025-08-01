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
              src="/attached_assets/20181225_120834_1754059406971.jpg" 
              alt="Blake with his grandmother - the inspiration behind EVERfor" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
            />
          </div>
          
          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-deep-charcoal mb-6">
              Why I Created EVERfor
            </h2>
            
            <div className="space-y-4 text-lg text-warm-gray leading-relaxed">
              <p>I lost my grandmother before I ever thought to record her voice.</p>
              <p>Not just her stories—her presence.</p>
              <p>And when she was gone, there was no going back.</p>
              
              <p className="pt-2">EVERfor was born from that silence.</p>
              
              <p className="pt-2">This isn't nostalgia. This is preservation.</p>
              <p>This is legacy, captured while it still breathes.</p>
              <p>One story at a time, filmed with intention, clarity, and care.</p>
              
              <p className="pt-2">I don't make tribute videos.</p>
              <p>I create heirlooms that speak—for decades.</p>
              <p>So the people we love don't vanish into memory.</p>
              <p className="font-semibold text-deep-charcoal">They stay.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
