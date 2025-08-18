import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface TestimonialsSectionProps {
  onBookingClick: () => void;
}

const testimonials = [
  {
    quote: "EVERfor beautifully captured many moments of laughter, family history, love, wisdom, and memories that I will cherish and watch over and over for the rest of my life. His ability to choose the right questions for my parents was exceptional. Hearing their words of wisdom, advice, and family pride in their voices is priceless. I will always treasure these videos.",
    author: "Jodi Burch",
    package: "",
    image: "@assets/49814802_10156181159735669_2893856751096954880_n_1755539467645.jpg"
  },
  {
    quote: "EVERfor...you have forEVER made some very precious moments, and stories, alive for me and my family! I had no idea how grateful I am to have these videos made...they are priceless now...but will be true treasures in the future. Thank you so much for your insight on the impact these will be to our family now, and forever.",
    author: "Julie Chartier Brown",
    package: "",
    image: "@assets/20250228_130527_3036e5b0-000b-4bd6-aa67-6eb5821483ad_1755539120289.jpg"
  }
];

export default function TestimonialsSection({ onBookingClick }: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-deep-charcoal mb-6">
            What Families Are Saying
          </h2>
          <p className="text-xl text-warm-gray">
            The true measure of our work is in the hearts we touch and the legacies we preserve.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream rounded-2xl p-8 relative">
              <div className="text-gold text-6xl font-crimson absolute top-4 left-6 opacity-30">"</div>
              <div className="pt-8">
                <p className="text-deep-charcoal text-lg leading-relaxed font-crimson italic mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.author} testimonial`} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <div className="font-semibold text-deep-charcoal">{testimonial.author}</div>
                    <div className="text-warm-gray text-sm">{testimonial.package}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-warm-gray mb-6">
            Ready to preserve your family's most precious stories?
          </p>
          <Button 
            onClick={onBookingClick}
            className="bg-gradient-to-r from-gold to-gold-light text-navy font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
